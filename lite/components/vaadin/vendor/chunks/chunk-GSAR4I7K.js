import{a}from"./chunk-5Q5VPSDV.js";import{b as n}from"./chunk-FWFQ6C5B.js";import{b as l}from"./chunk-MNKZUN3S.js";import{a as m}from"./chunk-VI625SQ6.js";import{a as o}from"./chunk-JRGUID65.js";import{a as s}from"./chunk-SLJ7YX42.js";import{f as e,l as i}from"./chunk-V3TG64QR.js";import{a as r}from"./chunk-6E3BZ7IN.js";var t=class extends r(l(s(m(n(i))))){static get is(){return"vaadin-select-list-box"}static get styles(){return a}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}render(){return e`
      <div part="items">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","listbox")}};o(t);export{t as a};
/*! Bundled license information:

@vaadin/select/src/vaadin-select-list-box.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
