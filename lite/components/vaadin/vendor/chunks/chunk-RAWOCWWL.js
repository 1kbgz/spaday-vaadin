import{a}from"./chunk-BNLDBYC4.js";var h=d=>class extends a(d){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, disabled, selectedValues)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,s,i,c){if(!(!e||!t)){if(c){let r=c.map(l=>e[l]);e.forEach(l=>{l.selected=r.includes(l)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){let e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){let t=this._filterItems(e.composedPath())[0],s=t&&!t.disabled?this.items.indexOf(t):-1;s<0||!this.multiple||(e.preventDefault(),this.selectedValues.includes(s)?this.selectedValues=this.selectedValues.filter(i=>i!==s):this.selectedValues=this.selectedValues.concat(s))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(s=>{s.selected=!1}),this.removeAttribute("aria-multiselectable")),e&&!t&&(this.setAttribute("aria-multiselectable","true"),this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0))}};export{h as a};
/*! Bundled license information:

@vaadin/list-box/src/vaadin-multi-select-list-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
