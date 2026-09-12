function $(n,i){let t=null,e,o=document.documentElement;function c(){e&&clearTimeout(e),t?.disconnect(),t=null}function r(M=!1,f=1){c();let{left:l,top:u,width:a,height:h}=n.getBoundingClientRect();if(M||i(),!a||!h)return;let b=Math.floor(u),d=Math.floor(o.clientWidth-(l+a)),g=Math.floor(o.clientHeight-(u+h)),m=Math.floor(l),x={rootMargin:`${-b}px ${-d}px ${-g}px ${-m}px`,threshold:Math.max(0,Math.min(1,f))||1},p=!0;function w(A){let s=A[0].intersectionRatio;if(s!==f){if(!p)return r();s?r(!1,s):e=setTimeout(()=>{r(!1,1e-7)},1e3)}p=!1}t=new IntersectionObserver(w,x),t.observe(n)}return r(!0),c}function v(n,i,t){let e=[n];n.owner&&e.push(n.owner),typeof t=="string"?e.forEach(o=>{o.setAttribute(i,t)}):t?e.forEach(o=>{o.setAttribute(i,"")}):e.forEach(o=>{o.removeAttribute(i)})}export{$ as a,v as b};
/*! Bundled license information:

@vaadin/overlay/src/vaadin-overlay-utils.js:
  (**
   * @license
   * Copyright (c) 2024 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
