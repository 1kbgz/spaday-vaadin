import{b as i}from"./chunk-AWH2RKL4.js";var s=class{constructor(t){this.host=t}hostConnected(){if(!this.__initialized){this.__initialized=!0;let{host:t}=this;this.__resizeObserver=new ResizeObserver(()=>this.__updateState()),this.__resizeObserver.observe(t.$.resizerContainer),t.$.content.addEventListener("scroll",()=>this.__updateState(!0)),t.shadowRoot.addEventListener("slotchange",()=>this.__updateState(!0))}}update(){this.__updateState(!0)}__updateState(t=!1){cancelAnimationFrame(this.__updateRaf),t?this.__writeState(this.__readState()):this.__updateRaf=requestAnimationFrame(()=>this.__writeState(this.__readState()))}__readState(){let t=this.host.$.content,e="";return t.scrollTop>0&&(e+=" top"),t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),e.trim()}__writeState(t){let{host:e}=this;t.length>0?i(e,"overflow",t):i(e,"overflow",null)}};export{s as a};
/*! Bundled license information:

@vaadin/dialog/src/vaadin-dialog-overflow-controller.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
