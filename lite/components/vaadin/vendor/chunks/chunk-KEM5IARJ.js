import{a}from"./chunk-TO7LJ2RC.js";import{a as p}from"./chunk-6GLQIZDH.js";import{a as s}from"./chunk-OXYHFQGJ.js";import{a as i}from"./chunk-7XKBCZAN.js";import{b as m}from"./chunk-OE6EL2BJ.js";import{b as n}from"./chunk-JAKARO6H.js";import{a as l}from"./chunk-7S27BS3R.js";import{a as o}from"./chunk-5JFSSCCH.js";import{f as r,l as e}from"./chunk-V3TG64QR.js";var t=class extends i(a(n(l(m(e))))){static get is(){return"vaadin-list-box"}static get styles(){return p}static get properties(){return{orientation:{readOnly:!0}}}render(){return r`
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
