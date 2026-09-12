var s=["__proto__","constructor","prototype"],c=n=>{if(!n||typeof n!="object")return!1;let o=Object.getPrototypeOf(n);return o===Object.prototype||o===null};function i(n,o,f){return!c(n)||!c(o)||Object.keys(o).forEach(e=>{if(s.includes(e))return;let r=o[e];if(c(r)){if(!Object.hasOwn(n,e)||!c(n[e])){if(f&&Object.hasOwn(n,e)&&n[e])return;n[e]={}}i(n[e],r,f)}else f&&Array.isArray(r)?n[e]=[...r]:(!f||r!=null)&&(n[e]=r)}),n}function t(n,o){return i(n,o,!1)}function u(n,...o){return o.forEach(f=>i(n,f,!0)),n}export{t as a,u as b};
/*! Bundled license information:

@vaadin/component-base/src/object-utils.js:
  (**
   * @license
   * Copyright (c) 2026 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
