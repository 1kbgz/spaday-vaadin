import{a as p}from"./chunk-5KYDPEUU.js";import{a as l}from"./chunk-EBWJBCGL.js";import{a as d}from"./chunk-4XJJEBUK.js";import{b as m}from"./chunk-OE6EL2BJ.js";import{b as a}from"./chunk-JAKARO6H.js";import{a as n}from"./chunk-7S27BS3R.js";import{a as e}from"./chunk-5JFSSCCH.js";import{a as o}from"./chunk-X2ZY66LG.js";import{f as r,l as i}from"./chunk-V3TG64QR.js";var t=class extends p(o(a(n(m(i))))){static get is(){return"vaadin-date-picker-overlay"}static get styles(){return[d,l]}render(){return r`
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
