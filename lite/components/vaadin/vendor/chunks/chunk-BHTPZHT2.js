import{a as e}from"./chunk-ELDQM5UE.js";import{a as r}from"./chunk-5NNRV5MJ.js";import{a}from"./chunk-IW54ZVJ3.js";import{a as n}from"./chunk-LIICEHA6.js";var h=o=>class extends e(r(a(o))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(s=>this.__isValidConstraint(s))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...s){if(!t)return;let i=this._hasValidConstraints(s),l=this.__previousHasConstraints&&!i;(this._hasValue||this.invalid)&&i?this._requestValidation():l&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=i}_onChange(t){t.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return!!t||t===0}},m=n(h);export{m as a};
/*! Bundled license information:

@vaadin/field-base/src/input-constraints-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
