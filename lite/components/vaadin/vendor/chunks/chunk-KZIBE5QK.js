import{a as p}from"./chunk-C4PP7AEL.js";import{a as m}from"./chunk-D73WH3PJ.js";import{a as s}from"./chunk-OXYHFQGJ.js";import{a as i}from"./chunk-7XKBCZAN.js";import{b as l}from"./chunk-OE6EL2BJ.js";import{b as a}from"./chunk-JAKARO6H.js";import{a as n}from"./chunk-7S27BS3R.js";import{a as r}from"./chunk-5JFSSCCH.js";import{f as e,l as o}from"./chunk-V3TG64QR.js";var t=class extends m(i(a(n(l(o))))){static get is(){return"vaadin-button"}static get styles(){return p}static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}render(){return e`
      <div class="vaadin-button-container" role="presentation">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>

        <slot name="tooltip"></slot>
      </div>
    `}ready(){super.ready(),this._tooltipController=new s(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}};r(t);export{t as a};
/*! Bundled license information:

@vaadin/button/src/vaadin-button.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
