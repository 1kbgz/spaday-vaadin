import{d as t}from"./chunk-PNHYMFOX.js";import{a as s}from"./chunk-HAFYWNPS.js";import{a as i}from"./chunk-GGABBMW7.js";var l=c=>class extends i(s(c)){get _activeKeys(){return[" "]}ready(){super.ready(),t(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),t(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",n=>{this._activeKeys.includes(n.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};export{l as a};
/*! Bundled license information:

@vaadin/a11y-base/src/active-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
