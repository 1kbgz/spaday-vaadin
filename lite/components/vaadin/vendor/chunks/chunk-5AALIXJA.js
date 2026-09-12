function l(t){let e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}function o(t){let e=[],i;return t.localName==="slot"?i=t.assignedElements():(e.push(t),i=[...t.children]),i.forEach(r=>e.push(...o(r))),e}function n(t,e){return e?e.closest?.(t)||n(t,e.getRootNode().host):null}function u(t){return t?new Set(t.split(" ")):new Set}function s(t){return t?[...t].join(" "):""}function c(t,e,i){let r=u(t.getAttribute(e));r.add(i),t.setAttribute(e,s(r))}function p(t,e,i){let r=u(t.getAttribute(e));if(r.delete(i),r.size===0){t.removeAttribute(e);return}t.setAttribute(e,s(r))}function f(t){return t.nodeType===Node.TEXT_NODE&&t.textContent.trim()===""}export{l as a,o as b,n as c,u as d,s as e,c as f,p as g,f as h};
/*! Bundled license information:

@vaadin/component-base/src/dom-utils.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
