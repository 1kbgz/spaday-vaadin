import{a as o}from"./chunk-ZF4KGAUT.js";import{a as i}from"./chunk-K642JUFB.js";var a=class extends o{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){let{errorMessage:e,invalid:d}=this,s=!!(d&&e&&e.trim()!=="");t&&(t.textContent=s?e:"",t.hidden=!s,s&&i(e,{mode:"assertive"})),super.updateDefaultNode(t)}};export{a};
/*! Bundled license information:

@vaadin/field-base/src/error-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
