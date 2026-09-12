import{d as b,e as s,f,g as p}from"./chunk-5AALIXJA.js";var t=new Map;function l(e){return t.has(e)||t.set(e,new WeakMap),t.get(e)}function m(e,n){e&&e.removeAttribute(n)}function I(e,n){if(!e||!n)return;let u=l(n);if(u.has(e))return;let i=b(e.getAttribute(n));u.set(e,new Set(i))}function v(e,n){if(!e||!n)return;let u=l(n),i=u.get(e);!i||i.size===0?e.removeAttribute(n):f(e,n,s(i)),u.delete(e)}function M(e,n,u={newId:null,oldId:null,fromUser:!1}){if(!e||!n)return;let{newId:i,oldId:r,fromUser:c}=u,d=l(n),o=d.get(e);if(!c&&o){r&&o.delete(r),i&&o.add(i);return}c&&(o?i||d.delete(e):I(e,n),m(e,n)),p(e,n,r);let A=i||s(o);A&&f(e,n,A)}function V(e,n){I(e,n),m(e,n)}export{v as a,M as b,V as c};
/*! Bundled license information:

@vaadin/a11y-base/src/aria-id-reference.js:
  (**
   * @license
   * Copyright (c) 2023 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
