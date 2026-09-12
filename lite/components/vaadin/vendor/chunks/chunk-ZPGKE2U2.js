import{a}from"./chunk-2D7CPLXI.js";import{a as r}from"./chunk-47SZQVFY.js";r({name:"--vaadin-aura-theme",syntax:"<number>",inherits:!0,initialValue:"0"});r({name:"--vaadin-lumo-theme",syntax:"<number>",inherits:!0,initialValue:"0"});var i=class extends EventTarget{#t;#e;#r={aura:!1,lumo:!1};#a=this.#n.bind(this);constructor(e){super(),this.#t=e,this.#i(),this.#e=a.for(this.#t),this.#e.observe("--vaadin-aura-theme"),this.#e.observe("--vaadin-lumo-theme"),this.#e.addEventListener("property-changed",this.#a)}get themes(){return{...this.#r}}#n(e){let{propertyName:t}=e.detail;["--vaadin-aura-theme","--vaadin-lumo-theme"].includes(t)&&(this.#i(),this.dispatchEvent(new CustomEvent("theme-changed")))}#i(){let e=this.#t.documentElement??this.#t.host,t=getComputedStyle(e);this.#r={aura:t.getPropertyValue("--vaadin-aura-theme").trim()==="1",lumo:t.getPropertyValue("--vaadin-lumo-theme").trim()==="1"}}disconnect(){this.#e.removeEventListener("property-changed",this.#a)}};export{i as a};
/*! Bundled license information:

@vaadin/vaadin-themable-mixin/src/theme-detector.js:
  (**
   * @license
   * Copyright (c) 2000 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
