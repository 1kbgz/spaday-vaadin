import{a as e}from"./chunk-3LE4BVO3.js";import{a as s}from"./chunk-MLTNNJCU.js";import{a as i}from"./chunk-WAOYK2VF.js";var o=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],d=n=>class extends e(s(i(n))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),o.forEach(t=>{this.addEventListener(t,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(t){super._onKeyDown(t),!(t.altKey||t.shiftKey||t.ctrlKey||t.metaKey)&&this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}__onInteractionEvent(t){this.__shouldSuppressInteractionEvent(t)&&t.stopImmediatePropagation()}__shouldSuppressInteractionEvent(t){return this.disabled}};export{d as a};
/*! Bundled license information:

@vaadin/button/src/vaadin-button-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
