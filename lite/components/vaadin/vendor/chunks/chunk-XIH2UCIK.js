import{a}from"./chunk-WU5JVLRD.js";import{a as p}from"./chunk-5Q5VPSDV.js";import{a as s}from"./chunk-6GIBKC2Q.js";import{a as i}from"./chunk-AEQAV2UD.js";import{b as m}from"./chunk-FWFQ6C5B.js";import{b as n}from"./chunk-MNKZUN3S.js";import{a as l}from"./chunk-VI625SQ6.js";import{a as o}from"./chunk-JRGUID65.js";import{f as r,l as e}from"./chunk-V3TG64QR.js";var t=class extends i(a(n(l(m(e))))){static get is(){return"vaadin-list-box"}static get styles(){return p}static get properties(){return{orientation:{readOnly:!0}}}render(){return r`
      <div part="items">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox"),this._tooltipController=new s(this),this.addController(this._tooltipController)}};o(t);export{t as a};
/*! Bundled license information:

@vaadin/list-box/src/vaadin-list-box.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
