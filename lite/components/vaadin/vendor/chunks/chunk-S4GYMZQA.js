import{a as r}from"./chunk-NHUVTQTL.js";var c=new WeakMap;function a(n){try{return n.media.mediaText}catch{return r('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function p(n){try{return n.cssRules}catch{return r('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}function i(n,s={tags:new Map,modules:new Map}){for(let e of p(n)){if(e instanceof CSSImportRule){let t=a(e);t.startsWith("lumo_")?s.modules.set(t,[...e.styleSheet.cssRules]):i(e.styleSheet,s);continue}if(e instanceof CSSMediaRule){let t=a(e);t.startsWith("lumo_")&&s.modules.set(t,[...e.cssRules]);continue}if(e instanceof CSSStyleRule&&e.cssText.includes("-inject")){for(let t of e.style){let o=t.match(/^--_lumo-(.*)-inject-modules$/u)?.[1];if(!o)continue;let u=e.style.getPropertyValue(t);s.tags.set(o,u.split(",").map(l=>l.trim().replace(/'|"/gu,"")))}continue}}return s}function f(n){let s=new Map,e=new Map;for(let t of n){let o=c.get(t);o||(o=i(t),c.set(t,o)),s=new Map([...s,...o.tags]),e=new Map([...e,...o.modules])}return{tags:s,modules:e}}export{f as a};
/*! Bundled license information:

@vaadin/vaadin-themable-mixin/src/lumo-modules.js:
  (**
   * @license
   * Copyright (c) 2000 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
