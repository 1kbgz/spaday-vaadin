import{a as i}from"./chunk-CZ5XUZJJ.js";import{b as c}from"./chunk-5G3K6R3U.js";import{f as o}from"./chunk-V3TG64QR.js";var t=class extends i{#t;update(s,[e,n,{textAlign:l}={}]){return this.#t=s.parentNode,this.#t._content??=document.createElement("vaadin-grid-cell-content"),this.#t._content.slot=n,this.#t._content.style.textAlign=l??"",e.contains(this.#t._content)||e.appendChild(this.#t._content),o`<slot name="${n}"></slot>`}disconnected(){this.#t._content?.remove()}},a=c(t);export{a};
/*! Bundled license information:

@vaadin/grid/src/directives/cell-content-directive.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
