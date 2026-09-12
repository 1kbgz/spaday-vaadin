var n=i=>class extends i{static get properties(){return{path:{type:String,sync:!0},direction:{type:String,notify:!0,sync:!0}}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, direction)"]}constructor(){super(),this.__boundOnDirectionChanged=this.__onDirectionChanged.bind(this)}_defaultHeaderRenderer(e,r){let t=e.firstElementChild;t||(t=document.createElement("vaadin-grid-sorter"),t.addEventListener("direction-changed",this.__boundOnDirectionChanged),e.appendChild(t)),t.path=this.path,t.__rendererDirection=this.direction,t.direction=this.direction,t.textContent=this.__getHeader(this.header,this.path)}_computeHeaderRenderer(){return this._defaultHeaderRenderer}__onDirectionChanged(e){e.detail.value!==e.target.__rendererDirection&&(this.direction=e.detail.value)}__getHeader(e,r){if(e)return e;if(r)return this._generateHeader(r)}};export{n as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-sort-column-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
