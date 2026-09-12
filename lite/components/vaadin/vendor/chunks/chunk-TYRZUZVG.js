import{a as l}from"./chunk-4AMJF7AX.js";import{b as n}from"./chunk-NTKMB3I6.js";import{b as d}from"./chunk-PAUVTU3L.js";import{a as s}from"./chunk-J42WYUFU.js";import{a}from"./chunk-IVOULKKW.js";import{f as r,l as i}from"./chunk-V3TG64QR.js";var t=class extends d(s(n(i))){static get is(){return"vaadin-date-picker-year"}static get styles(){return l}static get properties(){return{year:{type:String,sync:!0},selectedDate:{type:Object,sync:!0}}}render(){return r`
      <div part="year-number">${this.year}</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}updated(e){super.updated(e),e.has("year")&&this.toggleAttribute("current",this.year===new Date().getFullYear()),(e.has("year")||e.has("selectedDate"))&&this.toggleAttribute("selected",this.selectedDate&&this.selectedDate.getFullYear()===this.year)}};a(t);export{t as a};
/*! Bundled license information:

@vaadin/date-picker/src/vaadin-date-picker-year.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
