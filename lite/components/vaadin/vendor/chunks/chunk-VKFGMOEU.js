import{a as u}from"./chunk-BSWYDXIT.js";import{b as c}from"./chunk-KS2BR43Q.js";import{a as s,b as e,c as r,e as n,f as i}from"./chunk-7FR4QUQH.js";var d=l=>class extends l{static get properties(){return{focusTrap:{type:Boolean,value:!1},autofocus:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__focusTrapController=new c(this),this.__focusRestorationController=new u}get _contentRoot(){return this}ready(){super.ready(),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}get _focusRoot(){return this.$.overlay}_resetFocus(){if(this.focusTrap&&this.__focusTrapController.releaseFocus(),this.restoreFocusOnClose&&this._shouldRestoreFocus()){let o=e(),t=!o;this.__focusRestorationController.restoreFocus({preventScroll:t,focusVisible:o})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_initFocus(){if(!r(this._focusRoot)){if(this.autofocus){let o=i(this._focusRoot);o.some(n)||o[0]?.focus({focusVisible:e()})}this.focusTrap&&this.__focusTrapController.trapFocus(this._focusRoot)}}_shouldRestoreFocus(){let o=s();return o===document.body||this._deepContains(o)}_deepContains(o){if(this._contentRoot.contains(o))return!0;let t=o,a=o.ownerDocument;for(;t&&t!==a&&t!==this._contentRoot;)t=t.parentNode||t.host;return t===this._contentRoot}};export{d as a};
/*! Bundled license information:

@vaadin/overlay/src/vaadin-overlay-focus-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
