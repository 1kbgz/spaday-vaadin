import{a as f}from"./chunk-TQF2R7R4.js";import{b as a}from"./chunk-NTKMB3I6.js";import{b as m}from"./chunk-PAUVTU3L.js";import{a as l}from"./chunk-J42WYUFU.js";import{a as n}from"./chunk-IVOULKKW.js";import{a as s}from"./chunk-BRB7U2RT.js";import{f as i,l as o}from"./chunk-V3TG64QR.js";var e=class extends m(s(l(a(o)))){static get is(){return"vaadin-input-container"}static get styles(){return f}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}render(){return i`
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
