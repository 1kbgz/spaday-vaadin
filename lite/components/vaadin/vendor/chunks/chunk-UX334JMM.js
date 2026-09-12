var a=r=>class extends r{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,i,t){super.attributeChangedCallback(e,i,t),e==="theme"&&this._set_theme(t)}};export{a};
/*! Bundled license information:

@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
