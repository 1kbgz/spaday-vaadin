var c=!1;window.addEventListener("keydown",()=>{c=!0},{capture:!0});window.addEventListener("mousedown",()=>{c=!1},{capture:!0});function y(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function x(){return c}function a(t){let e=t.style;if(e.visibility==="hidden"||e.display==="none")return!0;let n=window.getComputedStyle(t);return n.visibility==="hidden"||n.display==="none"}function l(t,e){let n=Math.max(t.tabIndex,0),i=Math.max(e.tabIndex,0);return n===0||i===0?i>n:n>i}function f(t,e){let n=[];for(;t.length>0&&e.length>0;)l(t[0],e[0])?n.push(e.shift()):n.push(t.shift());return n.concat(t,e)}function s(t){let e=t.length;if(e<2)return t;let n=Math.ceil(e/2),i=s(t.slice(0,n)),o=s(t.slice(n));return f(i,o)}function p(t){return t.checkVisibility?!t.checkVisibility({visibilityProperty:!0}):t.offsetParent===null&&t.clientWidth===0&&t.clientHeight===0?!0:a(t)}function b(t){return t.matches('[tabindex="-1"]')?!1:t.matches("input, select, textarea, button, object")?t.matches(":not([disabled])"):t.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function E(t){return t.getRootNode().activeElement===t}function h(t){if(!b(t))return-1;let e=t.getAttribute("tabindex")||0;return Number(e)}function u(t,e){if(t.nodeType!==Node.ELEMENT_NODE||a(t))return!1;let n=t,i=h(n),o=i>0;i>=0&&e.push(n);let r=[];return n.localName==="slot"?r=n.assignedNodes({flatten:!0}):r=(n.shadowRoot||n).children,[...r].forEach(d=>{o=u(d,e)||o}),o}function m(t){let e=[];return u(t,e)?s(e):e}export{y as a,x as b,p as c,b as d,E as e,m as f};
/*! Bundled license information:

@vaadin/a11y-base/src/focus-utils.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
