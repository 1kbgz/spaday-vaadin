var i=class{#t=null;constructor(t,s){this.query=t,this.callback=s}hostConnected(){this.#s(),this.#t=window.matchMedia(this.query),this.#e(),this.#i(this.#t)}hostDisconnected(){this.#s()}#e(){this.#t&&this.#t.addListener(this.#i)}#s(){this.#t&&this.#t.removeListener(this.#i),this.#t=null}#i=t=>{typeof this.callback=="function"&&this.callback(t.matches)}};export{i as a};
/*! Bundled license information:

@vaadin/component-base/src/media-query-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
