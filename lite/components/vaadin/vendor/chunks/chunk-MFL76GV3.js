var e=class{constructor(t,i){this.input=t,i.addEventListener("slot-content-changed",n=>{this.#t(n.detail.node)}),this.#t(i.node)}#t(t){t&&(t.addEventListener("click",this.#i),this.input&&t.setAttribute("for",this.input.id))}#i=()=>{let t=i=>{i.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}};export{e as a};
/*! Bundled license information:

@vaadin/field-base/src/labelled-input-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
