var n=i=>class extends i{static get properties(){return{path:{type:String,sync:!0},header:{type:String,sync:!0}}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)"]}_defaultHeaderRenderer(r,d){let e=r.firstElementChild,t=e?e.firstElementChild:void 0;e||(e=document.createElement("vaadin-grid-filter"),t=document.createElement("vaadin-text-field"),t.setAttribute("theme","small"),t.setAttribute("style","max-width: 100%;"),t.setAttribute("focus-target",""),e.appendChild(t),r.appendChild(e)),e.path=this.path,t.label=this.__getHeader(this.header,this.path)}_computeHeaderRenderer(){return this._defaultHeaderRenderer}__getHeader(r,d){if(r)return r;if(d)return this._generateHeader(d)}};export{n as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-filter-column-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
