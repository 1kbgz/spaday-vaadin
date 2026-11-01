import{a as o}from"./chunk-AAL7XZ52.js";import{a as d}from"./chunk-XVTWODSQ.js";import{a}from"./chunk-RIXS7XAH.js";import{a as l}from"./chunk-DUFCORCV.js";import{a as n}from"./chunk-ZD2VBGB7.js";import{a as i}from"./chunk-UCHFUOAN.js";import{a as s}from"./chunk-LXV6TMBA.js";import{f as r}from"./chunk-VB4ZZCA2.js";var b=c=>class extends n(a(o(s(i(c))))){static get properties(){return{name:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["__readonlyChanged(readonly, inputElement)"]}static get delegateAttrs(){return[...super.delegateAttrs,"name","invalid","required"]}constructor(){super(),this._setType("checkbox"),this._boundOnInputClick=this._onInputClick.bind(this),this.value="on",this.tabindex=0}get slotStyles(){return[`
          ${this.localName} > input[slot='input'] {
            opacity: 0;
          }
        `]}ready(){super.ready(),this.addController(new l(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new d(this.inputElement,this._labelController)),this._createPropertyObserver("checked","_checkedChanged")}updated(e){super.updated(e),e.has("required")&&this.required===!1&&this._requestValidation()}_shouldSetActive(e){let[t]=e.composedPath(),u=t===this.inputElement||t.part.contains("required-indicator")||this._labelNode?.contains(t)&&!t.closest("a");return this.readonly||!u?!1:super._shouldSetActive(e)}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("click",this._boundOnInputClick)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("click",this._boundOnInputClick)}_onInputClick(e){this.readonly&&e.preventDefault()}__readonlyChanged(e,t){t&&r(t,"aria-readonly",e)}checkValidity(){return!this.required||!!this.checked}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this._requestValidation()}_checkedChanged(e,t){(e||t)&&this._requestValidation()}_onRequiredIndicatorClick(){this._labelNode?.click()}};export{b as a};
/*! Bundled license information:

@vaadin/checkbox/src/vaadin-checkbox-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
