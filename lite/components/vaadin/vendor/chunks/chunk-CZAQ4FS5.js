var o=class{constructor(e,t){this.host=e,this.scrollTarget=t||e,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){let{host:e}=this;this.__resizeObserver=new ResizeObserver(()=>this.__onResize()),this.__resizeObserver.observe(e),[...e.children].forEach(t=>{this.__resizeObserver.observe(t)}),this.__childObserver=new MutationObserver(t=>{t.forEach(({addedNodes:s,removedNodes:r})=>{s.forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(i)}),r.forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(i)}),s.length===0&&r.length>0&&this.__updateState({sync:!0})})}),this.__childObserver.observe(e,{childList:!0}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll)}__onResize(){this.__updateState({sync:!1})}__onScroll(){this.__updateState({sync:!0})}__updateState({sync:e}){cancelAnimationFrame(this.__resizeRaf);let t=this.__readState();e?this.__writeState(t):this.__resizeRaf=requestAnimationFrame(()=>this.__writeState(t))}__readState(){let e=this.scrollTarget,t="";e.scrollTop>0&&(t+=" top"),Math.ceil(e.scrollTop)<Math.ceil(e.scrollHeight-e.clientHeight)&&(t+=" bottom");let s=Math.abs(e.scrollLeft);return s>0&&(t+=" start"),Math.ceil(s)<Math.ceil(e.scrollWidth-e.clientWidth)&&(t+=" end"),{overflow:t.trim()}}__writeState({overflow:e}){e?this.host.setAttribute("overflow",e):this.host.removeAttribute("overflow")}};export{o as a};
/*! Bundled license information:

@vaadin/component-base/src/overflow-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
