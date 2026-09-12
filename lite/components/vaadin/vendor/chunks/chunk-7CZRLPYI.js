import{a as d}from"./chunk-Y5ZHJHTL.js";import{a as x}from"./chunk-EQYYNFPW.js";import{b as t}from"./chunk-5G3K6R3U.js";import{a as c}from"./chunk-LNFJMDRJ.js";import{d as i}from"./chunk-SXE6KBH3.js";var r=class extends x{get rendererProperty(){throw new Error("The `rendererProperty` getter must be implemented.")}addRenderer(){this.element[this.rendererProperty]=(e,o)=>{this.renderRenderer(e,o)}}runRenderer(){let e=this.element._grid;e[d]=c.debounce(e[d],i,()=>{e.requestContentUpdate()})}removeRenderer(){this.element[this.rendererProperty]=null}},s=class extends r{get rendererProperty(){return"renderer"}addRenderer(){this.element[this.rendererProperty]=(e,o,h)=>{this.renderRenderer(e,h.item,h,o)}}},p=class extends r{get rendererProperty(){return"headerRenderer"}},m=class extends r{get rendererProperty(){return"footerRenderer"}},y=t(s),g=t(p),f=t(m);export{s as a,p as b,m as c,y as d,g as e,f};
/*! Bundled license information:

@vaadin/grid/src/lit/column-renderer-directives.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
