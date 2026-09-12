import{a as i}from"./chunk-RRAWCTUY.js";import{b as n}from"./chunk-ZZ3Y426J.js";import{a as e,b as s,c as r}from"./chunk-4URYSD3Z.js";var p=c=>class extends c{static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__focusTrapController=new n(this),this.__focusRestorationController=new i}get _contentRoot(){return this}ready(){super.ready(),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}get _focusTrapRoot(){return this.$.overlay}_resetFocus(){if(this.focusTrap&&this.__focusTrapController.releaseFocus(),this.restoreFocusOnClose&&this._shouldRestoreFocus()){let o=s(),t=!o;this.__focusRestorationController.restoreFocus({preventScroll:t,focusVisible:o})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&!r(this._focusTrapRoot)&&this.__focusTrapController.trapFocus(this._focusTrapRoot)}_shouldRestoreFocus(){let o=e();return o===document.body||this._deepContains(o)}_deepContains(o){if(this._contentRoot.contains(o))return!0;let t=o,l=o.ownerDocument;for(;t&&t!==l&&t!==this._contentRoot;)t=t.parentNode||t.host;return t===this._contentRoot}};export{p as a};
/*! Bundled license information:

@vaadin/overlay/src/vaadin-overlay-focus-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
