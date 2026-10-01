import{a}from"./chunk-74JQYL3O.js";import{a as p}from"./chunk-TUZXH36F.js";import{a as e}from"./chunk-7XKBCZAN.js";import{b as s}from"./chunk-OE6EL2BJ.js";import{b as n}from"./chunk-JAKARO6H.js";import{a as l}from"./chunk-7S27BS3R.js";import{a as o}from"./chunk-5JFSSCCH.js";import{f as r,l as i}from"./chunk-V3TG64QR.js";var t=class extends p(e(n(l(s(i))))){static get is(){return"vaadin-tabs"}static get styles(){return a}render(){return r`
      <div
        @pointerdown="${this._startScrollBack}"
        @pointerup="${this._stopScroll}"
        @pointerleave="${this._stopScroll}"
        @pointercancel="${this._stopScroll}"
        @click="${this._scrollBack}"
        part="back-button"
        aria-hidden="true"
      ></div>

      <div id="scroll" part="tabs" tabindex="-1">
        <slot></slot>
      </div>

      <div
        @pointerdown="${this._startScrollForward}"
        @pointerup="${this._stopScroll}"
        @pointerleave="${this._stopScroll}"
        @pointercancel="${this._stopScroll}"
        @click="${this._scrollForward}"
        part="forward-button"
        aria-hidden="true"
      ></div>
    `}};o(t);export{t as a};
/*! Bundled license information:

@vaadin/tabs/src/vaadin-tabs.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
