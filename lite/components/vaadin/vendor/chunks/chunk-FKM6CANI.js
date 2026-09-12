import{d as s}from"./chunk-4URYSD3Z.js";var l=i=>i.offsetParent&&!i.part.contains("body-cell")&&s(i)&&getComputedStyle(i).visibility!=="hidden",o=i=>class extends i{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(t){let e=t.detail.model,n=e?e.item:null;n&&(this.activeItem=this._itemsEqual(this.activeItem,n)?null:n)}_shouldPreventCellActivationOnClick(t){let{cell:e}=this._getGridEventLocation(t);return t.defaultPrevented||t.skipCellActivate||!e||e.part.contains("details-cell")||e===this.$.emptystatecell||e._content.contains(this.getRootNode().activeElement)||this._isFocusable(t.target)||t.target instanceof HTMLLabelElement}_onClick(t){if(this._shouldPreventCellActivationOnClick(t))return;let{cell:e}=this._getGridEventLocation(t);e&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(e.parentElement)}}))}_isFocusable(t){return l(t)}};export{l as a,o as b};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-active-item-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
