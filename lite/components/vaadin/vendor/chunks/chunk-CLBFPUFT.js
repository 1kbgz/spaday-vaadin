function o(t){try{CSS.registerProperty(t)}catch(e){if(e instanceof DOMException&&e.name==="InvalidModificationError")console.warn(`The CSS property ${t.name} has already been registered.`);else throw e}}var a=(t,...e)=>{let r=document.createElement("style");r.id=t,r.textContent=e.map(n=>n.toString()).join(`
`),document.head.insertAdjacentElement("afterbegin",r)};export{o as a,a as b};
/*! Bundled license information:

@vaadin/component-base/src/css-utils.js:
  (**
   * @license
   * Copyright (c) 2025 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
