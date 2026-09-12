import{a as i}from"./chunk-LIICEHA6.js";var l=new WeakMap;function c(t){return l.has(t)||l.set(t,new Set),l.get(t)}function a(t,n){let e=document.createElement("style");e.textContent=t,n===document?document.head.appendChild(e):n.insertBefore(e,n.firstChild)}var S=t=>class extends t{get slotStyles(){return[]}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){let e=this.getRootNode(),o=c(e);this.slotStyles.forEach(s=>{o.has(s)||(a(s,e),o.add(s))})}},y=i(S);export{y as a};
/*! Bundled license information:

@vaadin/component-base/src/slot-styles-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
