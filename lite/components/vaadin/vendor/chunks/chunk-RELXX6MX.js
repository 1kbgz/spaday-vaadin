import{a as c}from"./chunk-G7VQOUJH.js";import{a}from"./chunk-Y4V2NAHA.js";import{a as m}from"./chunk-6GIBKC2Q.js";import{a as l}from"./chunk-AEQAV2UD.js";import{b as s}from"./chunk-FWFQ6C5B.js";import{b as p}from"./chunk-MNKZUN3S.js";import{a as n}from"./chunk-VI625SQ6.js";import{a as e}from"./chunk-JRGUID65.js";import{f as i,l as r}from"./chunk-V3TG64QR.js";var t=class extends a(p(l(n(s(r))))){static get is(){return"vaadin-tab"}static get styles(){return c}render(){return i`
      <slot></slot>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new m(this),this.addController(this._tooltipController)}_onKeyUp(f){let h=this.hasAttribute("active");if(super._onKeyUp(f),h){let o=this.querySelector("a");o&&o.click()}}};e(t);export{t as a};
/*! Bundled license information:

@vaadin/tabs/src/vaadin-tab.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
