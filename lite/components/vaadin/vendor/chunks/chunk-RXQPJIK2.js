import{a as p}from"./chunk-N4DKBTFN.js";import{a as m}from"./chunk-ASZZIXOQ.js";import{a as d}from"./chunk-IFGP4HAJ.js";import{a as n}from"./chunk-2DWIRZNX.js";import{a as o}from"./chunk-3L4GMY4H.js";import{b as s}from"./chunk-NTKMB3I6.js";import{b as a}from"./chunk-PAUVTU3L.js";import{a as l}from"./chunk-J42WYUFU.js";import{a as r}from"./chunk-IVOULKKW.js";import{f as t,l as e}from"./chunk-V3TG64QR.js";var i=class extends p(a(o(l(s(e))))){static get is(){return"vaadin-text-field"}static get styles(){return[m]}render(){return t`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" @click="${this.focus}"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          .readonly="${this.readonly}"
          .disabled="${this.disabled}"
          .invalid="${this.invalid}"
          theme="${d(this._theme)}"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          ${this._renderSuffix()}
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
        <slot name="tooltip"></slot>
      </div>
    `}ready(){super.ready(),this._tooltipController=new n(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}_renderSuffix(){return t`
      <slot name="suffix" slot="suffix"></slot>
      <div id="clearButton" part="field-button clear-button" slot="suffix" aria-hidden="true"></div>
    `}};r(i);export{i as a};
/*! Bundled license information:

@vaadin/text-field/src/vaadin-text-field.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
