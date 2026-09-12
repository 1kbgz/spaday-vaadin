var e=class{constructor(t,i){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),i.addEventListener("slot-content-changed",n=>{this.__initLabel(n.detail.node)}),this.__initLabel(i.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){let t=i=>{i.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}};export{e as a};
/*! Bundled license information:

@vaadin/field-base/src/labelled-input-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
