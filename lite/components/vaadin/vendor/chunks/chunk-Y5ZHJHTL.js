import{a as i}from"./chunk-EQYYNFPW.js";import{b as o}from"./chunk-5G3K6R3U.js";import{a as n}from"./chunk-LNFJMDRJ.js";import{d as t}from"./chunk-SXE6KBH3.js";var m=Symbol("contentUpdateDebouncer"),e=class extends i{addRenderer(){this.element.rowDetailsRenderer=(s,d,r)=>{this.renderRenderer(s,r.item,r,d)}}runRenderer(){this.element[m]=n.debounce(this.element[m],t,()=>{this.element.requestContentUpdate()})}removeRenderer(){this.element.rowDetailsRenderer=null}},h=o(e);export{m as a,e as b,h as c};
/*! Bundled license information:

@vaadin/grid/src/lit/renderer-directives.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
