import{a as p}from"./chunk-2UDX3RVX.js";import{a as f}from"./chunk-KU3GFGWB.js";import{a as c}from"./chunk-O45IULWT.js";import{a as h}from"./chunk-RCFHP427.js";import{a as m}from"./chunk-FT2G6ZSJ.js";import{a as d}from"./chunk-IFGP4HAJ.js";import{a as n}from"./chunk-7XKBCZAN.js";import{a as l}from"./chunk-P2Y3NPLY.js";import{a}from"./chunk-7S27BS3R.js";import{a as s}from"./chunk-5JFSSCCH.js";import{c as t,f as i,l as r}from"./chunk-V3TG64QR.js";var e=class extends c(m(f(p(h(l(n(a(r)))))))){static get is(){return"vaadin-dialog"}static get styles(){return t`
      :host([opened]),
      :host([opening]),
      :host([closing]) {
        display: block !important;
        position: fixed;
        outline: none;
      }

      :host,
      :host([hidden]) {
        display: none !important;
      }

      :host(:focus-visible) ::part(overlay) {
        outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
      }
    `}render(){return i`
      <vaadin-dialog-overlay
        id="overlay"
        .owner="${this}"
        .opened="${this.opened}"
        .headerTitle="${this.headerTitle}"
        .renderer="${this.renderer}"
        .headerRenderer="${this.headerRenderer}"
        .footerRenderer="${this.footerRenderer}"
        .keepInViewport="${this.keepInViewport}"
        @opened-changed="${this._onOverlayOpened}"
        @mousedown="${this._bringOverlayToFront}"
        @touchstart="${this._bringOverlayToFront}"
        theme="${d(this._theme)}"
        .modeless="${this.modeless}"
        .withBackdrop="${!this.modeless}"
        ?resizable="${this.resizable}"
        restore-focus-on-close
        ?focus-trap="${!this.noFocusTrap&&!this.modeless}"
        ?autofocus="${this.modeless?!this.noAutofocus&&!this.noFocusTrap:!this.noFocusTrap}"
        exportparts="backdrop, overlay, header, title, header-content, content, footer"
      >
        <slot name="title" slot="title"></slot>
        <slot name="header-content" slot="header-content"></slot>
        <slot name="footer" slot="footer"></slot>
        <slot></slot>
      </vaadin-dialog-overlay>
    `}updated(o){super.updated(o),o.has("headerTitle")&&(this.ariaLabel=this.headerTitle)}};s(e);export{e as a};
/*! Bundled license information:

@vaadin/dialog/src/vaadin-dialog.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
