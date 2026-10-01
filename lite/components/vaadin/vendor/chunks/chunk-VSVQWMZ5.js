import{f as e,g as i,h as s}from"./chunk-4TDKNLSI.js";var r=class{#t;#r=!1;#a;#h;#d;#b;#l;#i=[];#s=[];constructor(t){this.host=t}setTarget(t){this.#t=t,this.#u(),this.#y(),this.#e(),this.#A()}setRequired(t){this.#r=t,this.#A()}setLabel(t){this.#a=t,this.#u()}setLabelledBy(t){this.#h=t,this.#y()}setDescribedBy(t){this.#d=t,this.#e()}setErrorId(t){this.#b=t,this.#e()}setHelperId(t){this.#l=t,this.#e()}#u(){this.#t&&e(this.#t,"aria-label",this.#a)}#y(){this.#t&&(s(this.#t,"aria-labelledby",this.#i),this.#i=[this.#h],i(this.#t,"aria-labelledby",this.#i))}#e(){this.#t&&(s(this.#t,"aria-describedby",this.#s),this.#s=[this.#d,this.#l,this.#b],i(this.#t,"aria-describedby",this.#s))}#A(){this.#t&&(["input","textarea"].includes(this.#t.localName)||e(this.#t,"aria-required",this.#r))}};export{r as a};
/*! Bundled license information:

@vaadin/a11y-base/src/field-aria-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
