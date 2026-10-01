var r=[];function c(s,n,t=s.getAttribute("dir")){n?s.setAttribute("dir",n):t!=null&&s.removeAttribute("dir")}function o(){return document.documentElement.getAttribute("dir")}function l(){let s=o();r.forEach(n=>{c(n,s)})}var a=new MutationObserver(l);a.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var f=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),c(this,o(),null))}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t!=="dir")return;let u=o(),b=i===u&&r.indexOf(this)===-1,d=!i&&e&&r.indexOf(this)===-1;b||d?(this.__subscribe(),c(this,u,i)):i!==u&&e===u&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=r.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,i){i==="dir"&&e===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,e,i)}_attributeToProperty(t,e,i){t==="dir"&&!e?this.dir="":super._attributeToProperty(t,e,i)}__subscribe(){r.includes(this)||r.push(this)}__unsubscribe(){r.includes(this)&&r.splice(r.indexOf(this),1)}};export{f as a};
/*! Bundled license information:

@vaadin/component-base/src/dir-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
