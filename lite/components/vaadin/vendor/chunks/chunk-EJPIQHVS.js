import{a as s}from"./chunk-4XJJEBUK.js";import{a as p}from"./chunk-PFXRZVCC.js";import{b as a}from"./chunk-OE6EL2BJ.js";import{b as m}from"./chunk-JAKARO6H.js";import{a as d}from"./chunk-KMEUEDIC.js";import{a as n}from"./chunk-7S27BS3R.js";import{a as e}from"./chunk-5JFSSCCH.js";import{a as o}from"./chunk-X2ZY66LG.js";import{f as t,l as r}from"./chunk-V3TG64QR.js";var i=class extends p(o(m(n(a(r))))){static get is(){return"vaadin-overlay"}static get styles(){return s}render(){return t`
      <div id="backdrop" part="backdrop" ?hidden="${!this.withBackdrop}"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}firstUpdated(){super.firstUpdated(),d("`<vaadin-overlay>` is deprecated and will be removed in Vaadin 26. Consider using `OverlayMixin` and `PositionMixin` instead.")}};e(i);export{i as a};
/*! Bundled license information:

@vaadin/overlay/src/vaadin-overlay.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
