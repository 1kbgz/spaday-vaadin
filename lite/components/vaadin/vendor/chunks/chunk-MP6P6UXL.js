import{a as d}from"./chunk-Q3K3KWUC.js";import{a}from"./chunk-EEWZAGRV.js";import{a as m}from"./chunk-J7MRSJ7U.js";import{b as l}from"./chunk-OE6EL2BJ.js";import{b as s}from"./chunk-JAKARO6H.js";import{a as n}from"./chunk-7S27BS3R.js";import{a as o}from"./chunk-5JFSSCCH.js";import{a as i}from"./chunk-X2ZY66LG.js";import{f as e,l as r}from"./chunk-V3TG64QR.js";var t=class extends d(s(i(n(l(r))))){static get is(){return"vaadin-date-picker-overlay-content"}static get styles(){return[m,a]}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return e`
      <slot name="months"></slot>
      <slot name="years"></slot>

      <div part="loader" aria-hidden="true"></div>

      <div role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <div
          part="years-toggle-button"
          ?hidden="${this._desktopMode}"
          aria-hidden="true"
          @click="${this._toggleYearScroller}"
        >
          ${this._yearAfterXMonths(this._visibleMonthIndex)}
        </div>
        <slot name="cancel-button"></slot>
      </div>
    `}firstUpdated(){super.firstUpdated(),this.setAttribute("role","dialog"),this._initControllers()}};o(t);
/*! Bundled license information:

@vaadin/date-picker/src/vaadin-date-picker-overlay-content.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
