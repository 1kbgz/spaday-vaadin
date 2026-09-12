var r=e=>class extends e{static get properties(){return{width:{type:String},height:{type:String}}}static get observers(){return["__sizeChanged(width, height)"]}__sizeChanged(t,i){requestAnimationFrame(()=>this.$.overlay.setBounds({width:t,height:i},!1))}};export{r as a};
/*! Bundled license information:

@vaadin/dialog/src/vaadin-dialog-size-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
