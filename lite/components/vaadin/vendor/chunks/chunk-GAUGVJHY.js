import{a as s}from"./chunk-ZF4KGAUT.js";var o=class extends s{constructor(e){super(e,"helper",null)}setHelperText(e){this.helperText=e,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){let{helperText:e}=this;if(e&&e.trim()!==""){this.tagName="div";let t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(e){e&&(e.textContent=this.helperText),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}};export{o as a};
/*! Bundled license information:

@vaadin/field-base/src/helper-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
