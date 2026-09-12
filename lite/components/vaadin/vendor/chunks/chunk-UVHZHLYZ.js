import{a as s}from"./chunk-BZNIWY72.js";import{d as i}from"./chunk-4URYSD3Z.js";var n=o=>class extends s(o){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}_shouldCloseOnOutsideClick(t){let e=t.composedPath();return!e.includes(this.positionTarget)&&!e.includes(this)}_mouseDownListener(t){super._mouseDownListener(t),this._shouldCloseOnOutsideClick(t)&&!i(t.composedPath()[0])&&t.preventDefault()}_updateOverlayWidth(){this.style.setProperty(`--_${this.localName}-default-width`,`${this.positionTarget.offsetWidth}px`)}_setOverlayWidth(t,e){t&&e&&(this._updateOverlayWidth(),this._updatePosition())}};export{n as a};
/*! Bundled license information:

@vaadin/combo-box/src/vaadin-combo-box-overlay-mixin.js:
  (**
   * @license
   * Copyright (c) 2015 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
