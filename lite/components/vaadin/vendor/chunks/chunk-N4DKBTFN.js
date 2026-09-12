import{a as n}from"./chunk-ZM32VIZY.js";import{a as r}from"./chunk-M4LMW3O3.js";import{a as e}from"./chunk-M5M3MHFS.js";var p=s=>class extends n(s){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new e(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new r(this.inputElement,this._labelController))}};export{p as a};
/*! Bundled license information:

@vaadin/text-field/src/vaadin-text-field-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
