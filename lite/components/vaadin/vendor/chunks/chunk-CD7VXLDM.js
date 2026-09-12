import{b as g}from"./chunk-J3TCNQNZ.js";import{a as f}from"./chunk-THNH67OE.js";import{a as v}from"./chunk-ASZZIXOQ.js";import{a as c}from"./chunk-XU57M4SW.js";import{a as o}from"./chunk-IFGP4HAJ.js";import{a as u}from"./chunk-M4LMW3O3.js";import{a as m}from"./chunk-M5M3MHFS.js";import{a as d}from"./chunk-2DWIRZNX.js";import{a}from"./chunk-3L4GMY4H.js";import{b as p}from"./chunk-NTKMB3I6.js";import{b as h}from"./chunk-PAUVTU3L.js";import{a as s}from"./chunk-J42WYUFU.js";import{a as l}from"./chunk-IVOULKKW.js";import{f as r,l as n}from"./chunk-V3TG64QR.js";var i=class extends g(c(h(a(s(p(n)))))){static get is(){return"vaadin-date-picker"}static get styles(){return[v,f]}static get properties(){return{_positionTarget:{type:Object,sync:!0}}}get clearElement(){return this.$.clearButton}render(){return r`
      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" @click="${this.focus}"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          .readonly="${this.readonly}"
          .disabled="${this.disabled}"
          .invalid="${this.invalid}"
          theme="${o(this._theme)}"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="field-button clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="field-button toggle-button" slot="suffix" aria-hidden="true" @click="${this._toggle}"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>

        <slot name="tooltip"></slot>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        .owner="${this}"
        ?fullscreen="${this._fullscreen}"
        theme="${o(this._theme)}"
        .opened="${this.opened}"
        @opened-changed="${this._onOpenedChanged}"
        @vaadin-overlay-open="${this._onOverlayOpened}"
        @vaadin-overlay-close="${this._onVaadinOverlayClose}"
        @vaadin-overlay-closing="${this._onOverlayClosed}"
        restore-focus-on-close
        no-vertical-overlap
        exportparts="backdrop, overlay, content"
        .restoreFocusNode="${this.inputElement}"
        .positionTarget="${this._positionTarget}"
      >
        <slot name="overlay"></slot>
      </vaadin-date-picker-overlay>
    `}ready(){super.ready(),this.addController(new m(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t},{uniqueIdPrefix:"search-input"})),this.addController(new u(this.inputElement,this._labelController)),this._tooltipController=new d(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(t=>!t.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.shadowRoot.querySelector('[part="field-button toggle-button"]').addEventListener("mousedown",t=>t.preventDefault())}_onOpenedChanged(e){this.opened=e.detail.value}_onVaadinOverlayClose(e){let t=e.detail.sourceEvent;t?.composedPath().includes(this)&&!t.composedPath().includes(this._overlayElement)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this.$.overlay.opened?this.close():this.open()}};l(i);export{i as a};
/*! Bundled license information:

@vaadin/date-picker/src/vaadin-date-picker.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
