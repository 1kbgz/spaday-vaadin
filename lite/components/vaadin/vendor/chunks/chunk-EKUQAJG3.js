import{a}from"./chunk-OW3MJO6X.js";import{a as d}from"./chunk-WPF6HBC7.js";import{a as m}from"./chunk-OCQSKYGG.js";import{b as l}from"./chunk-FWFQ6C5B.js";import{b as s}from"./chunk-MNKZUN3S.js";import{a as n}from"./chunk-VI625SQ6.js";import{a as o}from"./chunk-JRGUID65.js";import{a as i}from"./chunk-SLJ7YX42.js";import{f as e,l as r}from"./chunk-V3TG64QR.js";var t=class extends d(s(i(n(l(r))))){static get is(){return"vaadin-date-picker-overlay-content"}static get styles(){return[m,a]}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return e`
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
