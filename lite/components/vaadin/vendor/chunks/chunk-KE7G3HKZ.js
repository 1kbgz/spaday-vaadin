import{a as d}from"./chunk-Q6F3GVYD.js";import{a as n}from"./chunk-2DWIRZNX.js";import{a as r}from"./chunk-3L4GMY4H.js";import{b as s}from"./chunk-NTKMB3I6.js";import{b as a}from"./chunk-PAUVTU3L.js";import{a as l}from"./chunk-J42WYUFU.js";import{a as o}from"./chunk-IVOULKKW.js";import{a as m}from"./chunk-YLF5HA2T.js";import{f as e,l as i}from"./chunk-V3TG64QR.js";var t=class extends d(r(a(l(s(i))))){static get is(){return"vaadin-checkbox"}static get styles(){return m}render(){return e`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <div part="label">
          <slot name="label"></slot>
          <div part="required-indicator" @click="${this._onRequiredIndicatorClick}"></div>
        </div>
        <div part="helper-text">
          <slot name="helper"></slot>
        </div>
        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new n(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}};o(t);export{t as a};
/*! Bundled license information:

@vaadin/checkbox/src/vaadin-checkbox.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
