function m(n,s){return[...s.entries()].every(([r,e])=>n.getAll(r).includes(e))}function i(n,s,r={matchNested:!1}){let e=document.baseURI,t=new URL(n,e),a=new URL(s,e),c=t.origin===a.origin,h=r.matchNested?t.pathname===a.pathname||t.pathname.startsWith(`${a.pathname}/`):t.pathname===a.pathname;return c&&h&&m(t.searchParams,a.searchParams)}export{i as matchPaths};
/*! Bundled license information:

@vaadin/component-base/src/url-utils.js:
  (**
   * @license
   * Copyright (c) 2023 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
