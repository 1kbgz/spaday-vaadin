import{a as d}from"./chunk-GGHSDSRS.js";import{a as n}from"./chunk-OXYHFQGJ.js";import{a as o}from"./chunk-7XKBCZAN.js";import{b as s}from"./chunk-OE6EL2BJ.js";import{b as a}from"./chunk-JAKARO6H.js";import{a as l}from"./chunk-7S27BS3R.js";import{a as r}from"./chunk-5JFSSCCH.js";import{a as m}from"./chunk-CEDSITYD.js";import{f as e,l as i}from"./chunk-V3TG64QR.js";var t=class extends d(o(a(l(s(i))))){static get is(){return"vaadin-checkbox"}static get styles(){return m}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}render(){return e`
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
    `}ready(){super.ready(),this._tooltipController=new n(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}_toggleChecked(p){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(p)}};r(t);export{t as a};
/*! Bundled license information:

@vaadin/checkbox/src/vaadin-checkbox.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
