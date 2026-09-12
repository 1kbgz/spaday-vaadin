import{g as o}from"./chunk-MURYTQQT.js";function a(){let n=document.createElement("style");n.textContent=`
    .vaadin-icon-test-element {
      container-type: size;
      height: 2px;
      visibility: hidden;
      position: fixed;
    }

    .vaadin-icon-test-element::before {
      content: '';
      display: block;
      height: 100cqh;
    `;let t=document.createElement("div");t.classList.add("vaadin-icon-test-element");let e=document.createElement("div");e.attachShadow({mode:"open"}),e.shadowRoot.innerHTML="<slot></slot>",e.append(t.cloneNode()),document.body.append(n,t,e);let i=[...document.querySelectorAll(".vaadin-icon-test-element")].find(s=>getComputedStyle(s,"::before").height!=="2px");return n.remove(),t.remove(),e.remove(),!i}function c(){return CSS.supports("container-type: inline-size")?o?!a():!1:!0}export{a,c as b};
/*! Bundled license information:

@vaadin/icon/src/vaadin-icon-helpers.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
