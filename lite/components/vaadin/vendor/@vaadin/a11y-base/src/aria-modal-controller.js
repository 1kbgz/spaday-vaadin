import{a as h}from"../../../chunks/chunk-FX5WFZXP.js";var i=class{#s=null;constructor(s,t){this.host=s,this.callback=typeof t=="function"?t:()=>s}showModal(){let s=this.callback();this.#s=h(s)}close(){this.#s&&(this.#s(),this.#s=null)}};export{i as AriaModalController};
/*! Bundled license information:

@vaadin/a11y-base/src/aria-modal-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
