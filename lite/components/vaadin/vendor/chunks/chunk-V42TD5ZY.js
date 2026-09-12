import{a as p}from"./chunk-7XZ2VLAX.js";import{a as l}from"./chunk-ZVDL47PU.js";import{a as d}from"./chunk-HKEAQJYM.js";import{b as m}from"./chunk-NTKMB3I6.js";import{b as a}from"./chunk-PAUVTU3L.js";import{a as n}from"./chunk-J42WYUFU.js";import{a as e}from"./chunk-IVOULKKW.js";import{a as o}from"./chunk-BRB7U2RT.js";import{f as r,l as i}from"./chunk-V3TG64QR.js";var t=class extends p(o(a(n(m(i))))){static get is(){return"vaadin-date-picker-overlay"}static get styles(){return[d,l]}render(){return r`
      <div id="backdrop" part="backdrop" ?hidden="${!this.withBackdrop}"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}get _contentRoot(){return this.owner._overlayContent}};e(t);
/*! Bundled license information:

@vaadin/date-picker/src/vaadin-date-picker-overlay.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
