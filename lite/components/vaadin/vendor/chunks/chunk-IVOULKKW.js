window.Vaadin||={};window.Vaadin.featureFlags||={};function d(e){return e.replace(/-[a-z]/gu,r=>r[1].toUpperCase())}var n={};function f(e,r="25.2.10"){if(Object.defineProperty(e,"version",{get(){return r}}),e.experimental){let i=typeof e.experimental=="string"?e.experimental:`${d(e.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[i]&&!n[i]){n[i]=new Set,n[i].add(e),Object.defineProperty(window.Vaadin.featureFlags,i,{get(){return n[i].size===0},set(s){s&&n[i].size>0&&(n[i].forEach(o=>{customElements.define(o.is,o)}),n[i].clear())}});return}else if(n[i]){n[i].add(e);return}}let a=customElements.get(e.is);if(!a)customElements.define(e.is,e);else{let i=a.version;i&&e.version&&i===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${a.version} is already in use. Something will probably break.`)}}export{f as a};
/*! Bundled license information:

@vaadin/component-base/src/define.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
