import { bundle } from "./tools/bundle.mjs";
import { bundle_css } from "./tools/css.mjs";
import { node_modules_external } from "./tools/externals.mjs";
import { vendor } from "./tools/vendor.mjs";

import fs from "fs";
import path from "path";
import cpy from "cpy";

// The packages served under their own bare specifiers (see tools/vendor.mjs): every Vaadin package
// the catalog's elements are built from, so a library on the page that extends or imports one of
// them -- or its mixins, or the base classes they share -- gets this copy.
const VENDORED = [
  "@vaadin/a11y-base",
  "@vaadin/button",
  "@vaadin/checkbox",
  "@vaadin/combo-box",
  "@vaadin/component-base",
  "@vaadin/date-picker",
  "@vaadin/dialog",
  "@vaadin/field-base",
  "@vaadin/grid",
  "@vaadin/icon",
  "@vaadin/input-container",
  "@vaadin/item",
  "@vaadin/list-box",
  "@vaadin/lit-renderer",
  "@vaadin/notification",
  "@vaadin/overlay",
  "@vaadin/select",
  "@vaadin/tabs",
  "@vaadin/text-field",
  "@vaadin/vaadin-lumo-styles",
  "@vaadin/vaadin-themable-mixin",
];

// Every Vaadin element reports itself to Vaadin's usage statistics, which a page served from
// localhost sends on; its package's install step is what normally swaps in the opt-out, and the
// served copy has to carry it
const PATCHES = {
  "@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js":
    'export * from "./vaadin-usage-statistics-optout.js";\n',
};

const VERSION = JSON.parse(
  fs.readFileSync("node_modules/@vaadin/component-base/package.json", "utf8"),
).version;

// The module that registers each element in the catalog: `<package>/<tag>.js`. Vaadin's own
// defineCustomElement skips a name that is already registered, so no define-guard is needed. The
// specifiers stay imports, resolved by the page's import map.
const manifest = JSON.parse(
  fs.readFileSync("../spaday_vaadin/custom-elements.json", "utf8"),
);
const elements = manifest.modules
  .flatMap((mod) =>
    mod.declarations.map(
      (decl) =>
        `${mod.path.split("/").slice(0, 2).join("/")}/${decl.tagName}.js`,
    ),
  )
  .map((file) => {
    if (!fs.existsSync(path.join("node_modules", file)))
      throw new Error(`no module registers ${file}`);
    return `import "${file}";`;
  })
  .join("\n");

const ENTRY = {
  contents: [
    elements,
    // the version actually served, so a page holding a second copy can compare and refuse rather
    // than half-work
    `Object.defineProperty(globalThis, "__spadayVaadin", { value: Object.freeze({ version: ${JSON.stringify(VERSION)} }), configurable: true });`,
  ].join("\n"),
  resolveDir: ".",
  loader: "js",
};

const keepImports = {
  name: "keep-imports",
  setup(build) {
    build.onResolve({ filter: /^@vaadin\// }, (args) => ({
      path: args.path,
      external: true,
    }));
  },
};

const BUNDLES = [
  {
    stdin: ENTRY,
    plugins: [node_modules_external()],
    outfile: "dist/esm/index.js",
  },
  {
    stdin: ENTRY,
    plugins: [keepImports],
    outfile: "dist/cdn/index.js",
  },
];

// Lumo switches to dark under a `theme~="dark"` attribute; spaday's page mode is a wa-dark or
// wa-light class, on the root or on an island. Lumo's dark rule takes wa-dark, and the rules that
// set its light palette and color scheme take wa-light, so a light island inside a dark page gets
// them back.
const PAGE_MODE = {
  "src/global/color-scheme.css": [
    [
      ":where(:root),\n:where(:host) {",
      ":where(:root),\n:where(:host),\n.wa-light {",
    ],
    [
      ":host([theme~='dark']),\n[theme~='dark'] {",
      ":host([theme~='dark']),\n[theme~='dark'],\n.wa-dark {",
    ],
  ],
  "src/props/color.css": [
    [
      ":where(:root),\n:where(:host) {",
      ":where(:root),\n:where(:host),\n.wa-light {",
    ],
  ],
};
const pageMode = {
  resolve: (specifier, from) => path.resolve(path.dirname(from), specifier),
  read(file) {
    let text = fs.readFileSync(file, "utf8");
    const rules = Object.entries(PAGE_MODE).find(([suffix]) =>
      file.endsWith(suffix),
    );
    for (const [from, to] of rules?.[1] ?? []) {
      if (!text.includes(from))
        throw new Error(`${file} no longer declares ${from}`);
      text = text.replace(from, to);
    }
    return text;
  },
};

async function build() {
  fs.rmSync("dist", { recursive: true, force: true });
  fs.rmSync("../spaday_vaadin/extension", {
    recursive: true,
    force: true,
  });

  await bundle_css("src/css/vaadin.css", pageMode);

  await Promise.all(BUNDLES.map(bundle)).catch(() => process.exit(1));

  // the import map, relative to the served root: read by the Python package, and inlined into the
  // test page with URLs relative to it
  const imports = Object.fromEntries(
    Object.entries(await vendor(VENDORED, "dist/vendor", PATCHES)).map(
      ([specifier, file]) => [specifier, `vendor/${file}`],
    ),
  );
  fs.writeFileSync(
    "dist/vendor/imports.json",
    `${JSON.stringify(imports, null, 2)}\n`,
  );
  const map = JSON.stringify(
    {
      imports: Object.fromEntries(
        Object.entries(imports).map(([k, v]) => [k, `./${v}`]),
      ),
    },
    null,
    2,
  );
  const html = fs
    .readFileSync("src/html/index.html", "utf8")
    .replace(
      "<!-- importmap -->",
      `<script type="importmap">\n${map}\n    </script>`,
    );
  fs.writeFileSync("dist/index.html", html);

  // Copy servable assets to python extension (exclude esm/)
  fs.mkdirSync("../spaday_vaadin/extension", { recursive: true });
  await cpy("dist/**/*", "../spaday_vaadin/extension", {
    filter: (file) =>
      !file.relativePath.startsWith("esm/") &&
      !file.relativePath.startsWith("dist/esm/"),
  });
}

await build();
