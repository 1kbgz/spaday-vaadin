var o=l=>class extends l{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(s,i){if(!i||s===void 0)return;let{classList:e}=i;if(this.__initialClasses||(this.__initialClasses=new Set(e)),Array.isArray(this.__previousClasses)){let a=this.__previousClasses.filter(r=>!this.__initialClasses.has(r));a.length>0&&e.remove(...a)}let t=typeof s=="string"?s.split(" ").filter(Boolean):[];t.length>0&&e.add(...t),this.__previousClasses=t}};export{o as a};
/*! Bundled license information:

@vaadin/component-base/src/overlay-class-mixin.js:
  (**
   * @license
   * Copyright (c) 2023 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
