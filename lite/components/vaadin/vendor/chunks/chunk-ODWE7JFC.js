import{a}from"./chunk-X3G2BVXY.js";var g=_=>class extends _{static get properties(){return{path:{type:String,sync:!0}}}static get observers(){return["_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, _cells.*, path)"]}constructor(){super(),this.__boundOnExpandedChanged=this.__onExpandedChanged.bind(this)}__defaultRenderer(e,n,{item:d,expanded:r,level:l,hasChildren:o}){let t=e.firstElementChild;t||(t=document.createElement("vaadin-grid-tree-toggle"),t.addEventListener("expanded-changed",this.__boundOnExpandedChanged),e.appendChild(t)),t.__item=d,t.__rendererExpanded=r,t.expanded=r,t.leaf=!o;let i=this.__getToggleContent(this.path,d);t.textContent!==i&&(t.textContent=i),t.level=l}_computeRenderer(){return this.__defaultRenderer}__onExpandedChanged(e){e.detail.value!==e.target.__rendererExpanded&&(e.detail.value?this._grid.expandItem(e.target.__item):this._grid.collapseItem(e.target.__item))}__getToggleContent(e,n){return e&&a(e,n)}};export{g as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-tree-column-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
