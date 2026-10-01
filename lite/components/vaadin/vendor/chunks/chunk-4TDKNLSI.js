function p(t){let e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}function c(t){let e=[],r;return t.localName==="slot"?r=t.assignedElements():(e.push(t),r=[...t.children]),r.forEach(i=>e.push(...c(i))),e}function f(t,e){return e?e.closest?.(t)||f(t,e.getRootNode().host):null}function o(t){return new Set(t?t.split(" ").filter(Boolean):[])}function u(t){return t?[...t].join(" "):""}function s(t,e,r){r?t.setAttribute(e,r):t.removeAttribute(e)}function l(t){return o(Array.isArray(t)?t.join(" "):t)}function a(t,e,r){r=l(r);let i=o(t.getAttribute(e));r.forEach(n=>i.add(n)),s(t,e,u(i))}function E(t,e,r){r=l(r);let i=o(t.getAttribute(e));r.forEach(n=>i.delete(n)),s(t,e,u(i))}function N(t){return t.nodeType===Node.TEXT_NODE&&t.textContent.trim()===""}function h(t){return t?!!(t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent?.trim()):!1}export{p as a,c as b,f as c,o as d,u as e,s as f,a as g,E as h,N as i,h as j};
/*! Bundled license information:

@vaadin/component-base/src/dom-utils.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
