var s=class i extends EventTarget{#t;#e=new Set;#s;#r=!1;constructor(t){super(),this.#t=t,this.#s=new CSSStyleSheet}#i(t){let{propertyName:e}=t;this.#e.has(e)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:e}}))}observe(t){this.connect(),!this.#e.has(t)&&(this.#e.add(t),this.#s.replaceSync(`
      :root::before, :host::before {
        content: '' !important;
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        visibility: hidden !important;
        transition: 1ms allow-discrete step-end !important;
        transition-property: ${[...this.#e].join(", ")} !important;
      }
    `))}connect(){this.#r||(this.#t.adoptedStyleSheets.unshift(this.#s),this.#n.addEventListener("transitionstart",t=>this.#i(t)),this.#n.addEventListener("transitionend",t=>this.#i(t)),this.#r=!0)}disconnect(){this.#e.clear(),this.#t.adoptedStyleSheets=this.#t.adoptedStyleSheets.filter(t=>t!==this.#s),this.#n.removeEventListener("transitionstart",this.#i),this.#n.removeEventListener("transitionend",this.#i),this.#r=!1}get#n(){return this.#t.documentElement??this.#t.host}static for(t){return t.__cssPropertyObserver||=new i(t),t.__cssPropertyObserver}};export{s as a};
/*! Bundled license information:

@vaadin/vaadin-themable-mixin/src/css-property-observer.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
