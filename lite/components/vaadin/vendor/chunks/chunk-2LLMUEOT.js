var o="prepend",l=n=>class extends n{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>o},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(t){o=["append","prepend"].includes(t)?t:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(t){let r=t.target;t.stopPropagation(),r._grid=this,this.__updateSorter(r,t.detail.shiftClick,t.detail.fromSorterClick),this.__applySorters()}__removeSorters(t){t.length!==0&&(this._sorters=this._sorters.filter(r=>!t.includes(r)),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(r=>{r._order=null});let t=this._getActiveSorters();t.length>1&&t.forEach((r,i)=>{r._order=i})}__updateSorter(t,r,i){if(!t.direction&&!this._sorters.includes(t))return;t._order=null;let s=this._sorters.filter(e=>e!==t);this.multiSort&&(!this.multiSortOnShiftClick||!i)||this.multiSortOnShiftClick&&r?this.multiSortPriority==="append"?this._sorters=[...s,t]:this._sorters=[t,...s]:(t.direction||this.multiSortOnShiftClick)&&(this._sorters=t.direction?[t]:[],s.forEach(e=>{e._order=null,e.direction=null}))}__applySorters(){this.__updateSortOrders(),this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this.__a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_getActiveSorters(){return this._sorters.filter(t=>t.direction&&t.isConnected)}_mapSorters(){return this._getActiveSorters().map(t=>({path:t.path,direction:t.direction}))}};export{l as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-sort-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
