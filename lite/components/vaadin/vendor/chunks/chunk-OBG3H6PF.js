import{f as o}from"./chunk-4TDKNLSI.js";var h=class{#t;#i;#s;constructor(t,e){this.host=t,this.scrollTarget=e||t}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){let{host:t}=this;this.#t=new ResizeObserver(()=>this.#o()),this.#t.observe(t),[...t.children].forEach(e=>{this.#t.observe(e)}),this.#i=new MutationObserver(e=>{e.forEach(({addedNodes:i,removedNodes:r})=>{i.forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&this.#t.observe(s)}),r.forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&this.#t.unobserve(s)}),i.length===0&&r.length>0&&this.#e({sync:!0})})}),this.#i.observe(t,{childList:!0}),this.scrollTarget.addEventListener("scroll",this.#h)}#o(){this.#e({sync:!1})}#h=()=>{this.#e({sync:!0})};#e({sync:t}){cancelAnimationFrame(this.#s);let e=this.#l();t?this.#r(e):this.#s=requestAnimationFrame(()=>this.#r(e))}#l(){let t=this.scrollTarget,e="";t.scrollTop>0&&(e+=" top"),Math.ceil(t.scrollTop)<Math.ceil(t.scrollHeight-t.clientHeight)&&(e+=" bottom");let i=Math.abs(t.scrollLeft);return i>0&&(e+=" start"),Math.ceil(i)<Math.ceil(t.scrollWidth-t.clientWidth)&&(e+=" end"),{overflow:e.trim()}}#r({overflow:t}){o(this.host,"overflow",t)}};export{h as a};
/*! Bundled license information:

@vaadin/component-base/src/overflow-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
