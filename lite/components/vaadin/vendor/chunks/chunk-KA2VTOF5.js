import{a as s}from"./chunk-NO7TATE3.js";import{a as n}from"./chunk-LNFJMDRJ.js";import{a as i}from"./chunk-SXE6KBH3.js";var a=l=>class extends l{static get properties(){return{path:{type:String,sync:!0},value:{type:String,notify:!0,sync:!0},_textField:{type:Object,sync:!0}}}static get observers(){return["_filterChanged(path, value, _textField)"]}ready(){super.ready(),this._filterController=new s(this,"","vaadin-text-field",{initializer:e=>{e.addEventListener("input",t=>{this.value=t.target.value}),this._textField=e}}),this.addController(this._filterController)}_filterChanged(e,t,r){e===void 0||t===void 0||!r||(r.value=t,this._debouncerFilterChanged=n.debounce(this._debouncerFilterChanged,i.after(200),()=>{this.dispatchEvent(new CustomEvent("filter-changed",{bubbles:!0}))}))}focus(){this._textField&&this._textField.focus()}};export{a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-filter-element-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
