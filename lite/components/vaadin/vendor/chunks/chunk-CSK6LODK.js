import{a as f}from"./chunk-ADLDGBJR.js";import{b as a}from"./chunk-OE6EL2BJ.js";import{b as m}from"./chunk-JAKARO6H.js";import{a as l}from"./chunk-7S27BS3R.js";import{a as n}from"./chunk-5JFSSCCH.js";import{a as s}from"./chunk-X2ZY66LG.js";import{f as i,l as o}from"./chunk-V3TG64QR.js";var e=class extends m(s(l(a(o)))){static get is(){return"vaadin-input-container"}static get styles(){return f}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}render(){return i`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(r=>r.focus&&r.focus())})}};n(e);export{e as a};
/*! Bundled license information:

@vaadin/input-container/src/vaadin-input-container.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
