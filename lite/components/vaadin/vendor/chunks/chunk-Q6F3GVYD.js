import{a as n}from"./chunk-G4YJHWX5.js";import{a as l}from"./chunk-M4LMW3O3.js";import{a}from"./chunk-M5M3MHFS.js";import{a as o}from"./chunk-2D7CCUM7.js";import{a as s}from"./chunk-PNTDJNGB.js";import{a as r}from"./chunk-3LE4BVO3.js";import{a as i}from"./chunk-MWCJFUHD.js";var k=d=>class extends s(o(n(i(r(d))))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["__readonlyChanged(readonly, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name","invalid","required"]}constructor(){super(),this._setType("checkbox"),this._boundOnInputClick=this._onInputClick.bind(this),this.value="on",this.tabindex=0}get slotStyles(){return[`
          ${this.localName} > input[slot='input'] {
            opacity: 0;
          }
        `]}ready(){super.ready(),this.addController(new a(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new l(this.inputElement,this._labelController)),this._createPropertyObserver("checked","_checkedChanged")}_shouldSetActive(e){let[t]=e.composedPath(),u=t===this.inputElement||t.part.contains("required-indicator")||this._labelNode.contains(t)&&!t.closest("a");return this.readonly||!u?!1:super._shouldSetActive(e)}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("click",this._boundOnInputClick)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("click",this._boundOnInputClick)}_onInputClick(e){this.readonly&&e.preventDefault()}__readonlyChanged(e,t){t&&(e?t.setAttribute("aria-readonly","true"):t.removeAttribute("aria-readonly"))}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}checkValidity(){return!this.required||!!this.checked}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this._requestValidation()}_checkedChanged(e,t){(e||t)&&this._requestValidation()}_requiredChanged(e){super._requiredChanged(e),e===!1&&this._requestValidation()}_onRequiredIndicatorClick(){this._labelNode.click()}};export{k as a};
/*! Bundled license information:

@vaadin/checkbox/src/vaadin-checkbox-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
