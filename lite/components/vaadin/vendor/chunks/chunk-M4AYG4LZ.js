import{a}from"./chunk-YUYC63DB.js";var o=t=>class extends t{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"]}__setArrayDataProvider(e){let r=a(this.items,{});r.__items=e,this._arrayDataProvider=r,this.size=e.length,this.dataProvider=r}_onDataProviderPageReceived(){super._onDataProviderPageReceived(),this._arrayDataProvider&&(this.size=this._flatSize)}__dataProviderOrItemsChanged(e,r,i){i&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):r?this._arrayDataProvider.__items===r?this.clearCache():this.__setArrayDataProvider(r):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):r&&this.__setArrayDataProvider(r))}};export{o as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-array-data-provider-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
