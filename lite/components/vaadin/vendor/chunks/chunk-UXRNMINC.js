import{a as l}from"./chunk-EQYYNFPW.js";import{b as r}from"./chunk-5G3K6R3U.js";import{a as p}from"./chunk-LNFJMDRJ.js";import{d as m}from"./chunk-SXE6KBH3.js";var n=Symbol("contentUpdateDebouncer"),e=class extends l{get rendererProperty(){throw new Error("The `rendererProperty` getter must be implemented.")}addRenderer(){this.element[this.rendererProperty]=(h,i)=>{this.renderRenderer(h,i)}}runRenderer(){this.element[n]=p.debounce(this.element[n],m,()=>{this.element.requestContentUpdate()})}removeRenderer(){this.element[this.rendererProperty]=null,delete this.element[n]}},o=class extends e{get rendererProperty(){return"renderer"}},d=class extends e{get rendererProperty(){return"headerRenderer"}},s=class extends e{get rendererProperty(){return"footerRenderer"}},P=r(o),a=r(d),R=r(s);export{o as a,d as b,s as c,P as d,a as e,R as f};
/*! Bundled license information:

@vaadin/dialog/src/lit/renderer-directives.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
