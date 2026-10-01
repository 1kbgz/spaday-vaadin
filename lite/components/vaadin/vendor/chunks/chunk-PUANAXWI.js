import{a as v}from"./chunk-TP2XG5U2.js";import{a as h}from"./chunk-57ZPK632.js";import{a as p}from"./chunk-BBCA3IVC.js";import{a as e}from"./chunk-IFGP4HAJ.js";import{a as r}from"./chunk-AMOAO6W6.js";import{a as s}from"./chunk-7XKBCZAN.js";import{b as d}from"./chunk-OE6EL2BJ.js";import{b as m}from"./chunk-JAKARO6H.js";import{a as l}from"./chunk-7S27BS3R.js";import{a}from"./chunk-5JFSSCCH.js";import{f as o,l as n}from"./chunk-V3TG64QR.js";import{b as i}from"./chunk-7FR4QUQH.js";var t=class extends v(s(m(l(d(n))))){static get is(){return"vaadin-select"}static get styles(){return[p,r,h]}render(){return o`
      <div class="vaadin-select-container">
        <div part="label" @click="${this._onClick}">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" @click="${this.focus}"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          .readonly="${this.readonly}"
          .disabled="${this.disabled}"
          .invalid="${this.invalid}"
          theme="${e(this._theme)}"
          @click="${this._onClick}"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div
            part="field-button toggle-button"
            slot="suffix"
            aria-hidden="true"
            @mousedown="${this._onToggleMouseDown}"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        id="overlay"
        .owner="${this}"
        .positionTarget="${this._inputContainer}"
        .opened="${this.opened}"
        .withBackdrop="${this._phone}"
        .renderer="${this.__slottedListBox?void 0:this.renderer||this.__defaultRenderer}"
        ?phone="${this._phone}"
        theme="${e(this._theme)}"
        ?no-vertical-overlap="${this.noVerticalOverlap}"
        exportparts="backdrop, overlay, content"
        @opened-changed="${this._onOpenedChanged}"
        @vaadin-overlay-open="${this._onOverlayOpen}"
      >
        <slot name="overlay" @slotchange="${this.__onOverlaySlotChange}"></slot>
      </vaadin-select-overlay>

      <slot name="tooltip"></slot>
      <div class="sr-only">
        <slot name="sr-label"></slot>
      </div>
    `}_onOpenedChanged(c){this.opened=c.detail.value}_onOverlayOpen(){this._menuElement&&this._menuElement.focus({focusVisible:i()})}};a(t);export{t as a};
/*! Bundled license information:

@vaadin/select/src/vaadin-select.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
