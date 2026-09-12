import{a as n}from"./chunk-LNFJMDRJ.js";import{b as r}from"./chunk-SXE6KBH3.js";var e=document.createElement("div");e.style.position="fixed";e.style.clip="rect(0px, 0px, 0px, 0px)";e.setAttribute("aria-live","polite");document.body.appendChild(e);var t;function c(l,o={}){let i=o.mode||"polite",m=o.timeout??150;i==="alert"?(e.removeAttribute("aria-live"),e.removeAttribute("role"),t=n.debounce(t,r,()=>{e.setAttribute("role","alert")})):(t&&t.cancel(),e.removeAttribute("role"),e.setAttribute("aria-live",i)),e.textContent="",setTimeout(()=>{e.textContent=l},m)}export{c as a};
/*! Bundled license information:

@vaadin/a11y-base/src/announce.js:
  (**
   * @license
   * Copyright (c) 2022 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
