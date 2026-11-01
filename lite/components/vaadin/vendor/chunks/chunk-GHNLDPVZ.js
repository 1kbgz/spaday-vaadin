import{a as i}from"./chunk-CZ5XUZJJ.js";import{a as o}from"./chunk-5G3K6R3U.js";import{i as n,k as s}from"./chunk-V3TG64QR.js";var d=Symbol("valueNotInitialized"),h=class extends i{constructor(e){if(super(e),e.type!==o.ELEMENT)throw new Error(`\`${this.constructor.name}\` must be bound to an element.`);this.previousValue=d}render(e,t){return n}update(e,[t,r]){return this.hasChanged(r)?(this.host=e.options&&e.options.host,this.element=e.element,this.renderer=t,this.previousValue===d?this.addRenderer():this.runRenderer(),this.previousValue=Array.isArray(r)?[...r]:r,n):n}reconnected(){this.addRenderer()}disconnected(){this.removeRenderer()}addRenderer(){throw new Error("The `addRenderer` method must be implemented.")}runRenderer(){throw new Error("The `runRenderer` method must be implemented.")}removeRenderer(){throw new Error("The `removeRenderer` method must be implemented.")}renderRenderer(e,...t){let r=this.renderer.call(this.host,...t);s(r,e,{host:this.host})}hasChanged(e){return Array.isArray(e)?!Array.isArray(this.previousValue)||this.previousValue.length!==e.length?!0:e.some((t,r)=>t!==this.previousValue[r]):this.previousValue!==e}};export{h as a};
/*! Bundled license information:

@vaadin/lit-renderer/src/lit-renderer.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
