import{a as c}from"./chunk-OBXM4NIB.js";import{a}from"./chunk-5IHGBFRS.js";import{a as m}from"./chunk-2DWIRZNX.js";import{a as l}from"./chunk-3L4GMY4H.js";import{b as s}from"./chunk-NTKMB3I6.js";import{b as p}from"./chunk-PAUVTU3L.js";import{a as n}from"./chunk-J42WYUFU.js";import{a as e}from"./chunk-IVOULKKW.js";import{f as i,l as r}from"./chunk-V3TG64QR.js";var t=class extends a(p(l(n(s(r))))){static get is(){return"vaadin-tab"}static get styles(){return c}render(){return i`
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
