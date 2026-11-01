import{a as l}from"./chunk-KQPE6YAL.js";import{a as s}from"./chunk-D7DMBFLW.js";import{a}from"./chunk-MZRKW3CV.js";import{b as n}from"./chunk-FWFQ6C5B.js";import{b as m}from"./chunk-MNKZUN3S.js";import{a as d}from"./chunk-VI625SQ6.js";import{a as o}from"./chunk-JRGUID65.js";import{f as r,l as i}from"./chunk-V3TG64QR.js";var t=class extends s(m(d(n(i)))){static get is(){return"vaadin-select-overlay"}static get styles(){return[a,l]}render(){return r`
      <div id="backdrop" part="backdrop" ?hidden="${!this.withBackdrop}"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}updated(e){super.updated(e),e.has("renderer")&&this.requestContentUpdate()}};o(t);export{t as a};
/*! Bundled license information:

@vaadin/select/src/vaadin-select-overlay.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
