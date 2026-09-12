import{a as f}from"./chunk-K6LDW657.js";import{a as c}from"./chunk-CUBIMFLA.js";import{a as h}from"./chunk-JRVVANAT.js";import{a as m}from"./chunk-IGZPZZN4.js";import{a as p}from"./chunk-LMZ6LH5H.js";import{a as d}from"./chunk-IFGP4HAJ.js";import{a as s}from"./chunk-3L4GMY4H.js";import{a as l}from"./chunk-UX334JMM.js";import{a}from"./chunk-J42WYUFU.js";import{a as n}from"./chunk-IVOULKKW.js";import{c as t,f as r,l as i}from"./chunk-V3TG64QR.js";var e=class extends c(m(f(p(h(l(s(a(i)))))))){static get is(){return"vaadin-dialog"}static get styles(){return t`
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
    `}render(){return r`
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
        ?focus-trap="${!this.noFocusTrap}"
        exportparts="backdrop, overlay, header, title, header-content, content, footer"
      >
        <slot name="title" slot="title"></slot>
        <slot name="header-content" slot="header-content"></slot>
        <slot name="footer" slot="footer"></slot>
        <slot></slot>
      </vaadin-dialog-overlay>
    `}updated(o){super.updated(o),o.has("headerTitle")&&(this.ariaLabel=this.headerTitle)}};n(e);export{e as a};
/*! Bundled license information:

@vaadin/dialog/src/vaadin-dialog.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
