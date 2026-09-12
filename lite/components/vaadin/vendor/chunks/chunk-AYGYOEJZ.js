var c=new WeakMap,u=new WeakMap,h={},p=0,S=t=>t?.nodeType===Node.ELEMENT_NODE,y=(...t)=>{console.error(`Error: ${t.join(" ")}. Skip setting aria-hidden.`)},O=(t,s)=>S(t)?s.map(r=>{if(!S(r))return y(r,"is not a valid element"),null;let o=r;for(;o&&o!==t;){if(t.contains(o))return r;o=o.getRootNode().host}return y(r,"is not contained inside",t),null}).filter(r=>!!r):(y(t,"is not a valid element"),[]),W=(t,s,r,o)=>{let m=O(s,Array.isArray(t)?t:[t]);h[r]||(h[r]=new WeakMap);let l=h[r],A=[],a=new Set,v=new Set(m),f=e=>{if(!e||a.has(e))return;a.add(e);let i=e.assignedSlot;i&&f(i),f(e.parentNode||e.host)};m.forEach(f);let E=e=>{if(!e||v.has(e))return;let i=e.shadowRoot;(i?[...e.children,...i.children]:[...e.children]).forEach(n=>{if(!["template","script","style"].includes(n.localName))if(a.has(n))E(n);else{let w=n.getAttribute(o),M=w!==null&&w!=="false",k=(c.get(n)||0)+1,b=(l.get(n)||0)+1;c.set(n,k),l.set(n,b),A.push(n),k===1&&M&&u.set(n,!0),b===1&&n.setAttribute(r,"true"),M||n.setAttribute(o,"true")}})};return E(s),a.clear(),p+=1,()=>{A.forEach(e=>{let i=c.get(e)-1,d=l.get(e)-1;c.set(e,i),l.set(e,d),i||(u.has(e)?u.delete(e):e.removeAttribute(o)),d||e.removeAttribute(r)}),p-=1,p||(c=new WeakMap,c=new WeakMap,u=new WeakMap,h={})}},x=(t,s=document.body,r="data-aria-hidden")=>{let o=Array.from(Array.isArray(t)?t:[t]);return s&&o.push(...Array.from(s.querySelectorAll("[aria-live]"))),W(o,s,r,"aria-hidden")},V=(t,s=document.body,r="data-inert-ed")=>W(t,s,r,"inert"),T="inert"in HTMLElement.prototype,C=(t,s,r)=>(T?V:x)(t,s,r);export{x as a,V as b,T as c,C as d};
/*! Bundled license information:

@vaadin/a11y-base/src/aria-hidden.js:
  (**
   * @license
   * Copyright (c) 2017 Anton Korzunov
   * SPDX-License-Identifier: MIT
   *)
*/
