import{a as v}from"./chunk-JCUUISZS.js";import{a as g}from"./chunk-BBCA3IVC.js";import{a as f}from"./chunk-VV44XIFD.js";import{a as o}from"./chunk-IFGP4HAJ.js";import{a as x}from"./chunk-L64MJJAX.js";import{a as _}from"./chunk-LPYBSA2V.js";import{a as C}from"./chunk-3MO3F7AT.js";import{a as b}from"./chunk-A3SFG64O.js";import{a as c}from"./chunk-MFL76GV3.js";import{a as u}from"./chunk-S3ZIZE7O.js";import{a as m}from"./chunk-OXYHFQGJ.js";import{a as s}from"./chunk-7XKBCZAN.js";import{b as p}from"./chunk-OE6EL2BJ.js";import{b as h}from"./chunk-JAKARO6H.js";import{a as d}from"./chunk-7S27BS3R.js";import{a}from"./chunk-5JFSSCCH.js";import{f as l,l as n}from"./chunk-V3TG64QR.js";var i=class extends _(x(C(v(f(h(s(d(p(n))))))))){static get is(){return"vaadin-combo-box"}static get styles(){return[g,b]}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}render(){return l`
      <div class="vaadin-combo-box-container">
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
          <div id="toggleButton" part="field-button toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>

        <slot name="tooltip"></slot>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        exportparts="overlay, content, loader"
        .owner="${this}"
        .dir="${this.dir}"
        .opened="${this._overlayOpened}"
        ?loading="${this.loading}"
        theme="${o(this._theme)}"
        .positionTarget="${this._positionTarget}"
        no-vertical-overlap
      >
        <slot name="overlay"></slot>
      </vaadin-combo-box-overlay>
    `}ready(){super.ready(),this.addController(new u(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new c(this.inputElement,this._labelController)),this._tooltipController=new m(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(t=>!t.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}updated(t){super.updated(t),(t.has("dataProvider")||t.has("value"))&&this._warnDataProviderValue(this.dataProvider,this.value)}_onClearButtonClick(t){t.stopPropagation(),super._onClearButtonClick(t)}_onHostClick(t){let e=t.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(t)}_warnDataProviderValue(t,e){if(t&&e!==""&&(this.selectedItem===void 0||this.selectedItem===null)){let r=this.__getItemIndexByValue(this.filteredItems,e);(r<0||!this._getItemLabel(this.filteredItems[r]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}};a(i);export{i as a};
/*! Bundled license information:

@vaadin/combo-box/src/vaadin-combo-box.js:
  (**
   * @license
   * Copyright (c) 2015 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
