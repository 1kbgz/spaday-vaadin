import{a as r}from"./chunk-5HBEY4GV.js";import{h as n}from"./chunk-P5CH3PDF.js";import{a as t}from"./chunk-IVOULKKW.js";var o=document.createElement("template");o.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      grid-area: months;
      height: auto;
    }
  </style>
`;var e=class extends r{static get is(){return"vaadin-date-picker-month-scroller"}constructor(){super(),this.bufferSize=3,this.shadowRoot.appendChild(o.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(i,a){i.month=n(a)}};t(e);
/*! Bundled license information:

@vaadin/date-picker/src/vaadin-date-picker-month-scroller.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
