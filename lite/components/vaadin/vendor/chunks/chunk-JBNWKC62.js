function E(t,e){let o=null,n,i=document.documentElement;function c(){n&&clearTimeout(n),o?.disconnect(),o=null}function r(g=!1,f=1){c();let{left:u,top:l,width:a,height:h}=t.getBoundingClientRect();if(g||e(),!a||!h)return;let m=Math.floor(l),d=Math.floor(i.clientWidth-(u+a)),M=Math.floor(i.clientHeight-(l+h)),b=Math.floor(u),x={rootMargin:`${-m}px ${-d}px ${-M}px ${-b}px`,threshold:Math.max(0,Math.min(1,f))||1},p=!0;function A(v){let s=v[0].intersectionRatio;if(s!==f){if(!p)return r();s?r(!1,s):n=setTimeout(()=>{r(!1,1e-7)},1e3)}p=!1}o=new IntersectionObserver(A,x),o.observe(t)}return r(!0),c}function S(t){return t.getAnimations().filter(e=>e instanceof CSSAnimation&&e.effect.getComputedTiming().activeDuration>0)}function T(t,e,o){let n=[t];t.owner&&n.push(t.owner),typeof o=="string"?n.forEach(i=>{i.setAttribute(e,o)}):o?n.forEach(i=>{i.setAttribute(e,"")}):n.forEach(i=>{i.removeAttribute(e)})}export{E as a,S as b,T as c};
/*! Bundled license information:

@vaadin/overlay/src/vaadin-overlay-utils.js:
  (**
   * @license
   * Copyright (c) 2024 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
