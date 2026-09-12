import{a}from"./chunk-AUEPWUFS.js";import{a as m}from"./chunk-I6SG2NOV.js";import{b as s}from"./chunk-NTKMB3I6.js";import{b as l}from"./chunk-PAUVTU3L.js";import{a as n}from"./chunk-J42WYUFU.js";import{a as r}from"./chunk-IVOULKKW.js";import{a as i}from"./chunk-BRB7U2RT.js";import{f as e,l as o}from"./chunk-V3TG64QR.js";var t=class extends a(l(i(n(s(o))))){static get is(){return"vaadin-date-picker-overlay-content"}static get styles(){return m}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return e`
      <slot name="months"></slot>
      <slot name="years"></slot>

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
    `}firstUpdated(){super.firstUpdated(),this.setAttribute("role","dialog"),this._initControllers()}};r(t);
/*! Bundled license information:

@vaadin/date-picker/src/vaadin-date-picker-overlay-content.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
