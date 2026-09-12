import{a as p}from"./chunk-LVF4MDKY.js";import{a}from"./chunk-RAWOCWWL.js";import{a as s}from"./chunk-2DWIRZNX.js";import{a as i}from"./chunk-3L4GMY4H.js";import{b as m}from"./chunk-NTKMB3I6.js";import{b as n}from"./chunk-PAUVTU3L.js";import{a as l}from"./chunk-J42WYUFU.js";import{a as o}from"./chunk-IVOULKKW.js";import{f as r,l as e}from"./chunk-V3TG64QR.js";var t=class extends i(a(n(l(m(e))))){static get is(){return"vaadin-list-box"}static get styles(){return p}static get properties(){return{orientation:{readOnly:!0}}}render(){return r`
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
