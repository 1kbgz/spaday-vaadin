import{a as h}from"./chunk-SDYTHPS2.js";import{a as v}from"./chunk-FP3EXIB3.js";import{a as p}from"./chunk-ASZZIXOQ.js";import{a as e}from"./chunk-IFGP4HAJ.js";import{a as n}from"./chunk-75P5PKKM.js";import{a as l}from"./chunk-3L4GMY4H.js";import{b as d}from"./chunk-NTKMB3I6.js";import{b as m}from"./chunk-PAUVTU3L.js";import{a as s}from"./chunk-J42WYUFU.js";import{a}from"./chunk-IVOULKKW.js";import{f as o,l as r}from"./chunk-V3TG64QR.js";import{b as i}from"./chunk-4URYSD3Z.js";var t=class extends v(l(m(s(d(r))))){static get is(){return"vaadin-select"}static get styles(){return[p,n,h]}render(){return o`
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
        .renderer="${this.renderer||this.__defaultRenderer}"
        ?phone="${this._phone}"
        theme="${e(this._theme)}"
        ?no-vertical-overlap="${this.noVerticalOverlap}"
        exportparts="backdrop, overlay, content"
        @opened-changed="${this._onOpenedChanged}"
        @vaadin-overlay-open="${this._onOverlayOpen}"
      >
        <slot name="overlay"></slot>
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
