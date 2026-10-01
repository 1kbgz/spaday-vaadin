function c(t){return t.touches?t.touches[0]||t.changedTouches[0]:t}function r(t){return t.clientX>=0&&t.clientX<=window.innerWidth&&t.clientY>=0&&t.clientY<=window.innerHeight}var s=5,o=class{#t;start(n){let{clientX:i,clientY:e}=c(n);this.#t={x:i,y:e}}isClick(n){let{clientX:i,clientY:e}=c(n);return Math.abs(i-this.#t.x)<s&&Math.abs(e-this.#t.y)<s}};export{c as a,r as b,o as c};
/*! Bundled license information:

@vaadin/dialog/src/vaadin-dialog-utils.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
