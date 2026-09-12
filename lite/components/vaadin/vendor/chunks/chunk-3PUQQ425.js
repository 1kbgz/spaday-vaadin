import{a as r}from"./chunk-N4EKE3Y3.js";var o={},a=new Set;function d(i,t){return(i||"").replace(`${t}:`,"")}function l(i){return i?i.split(":")[0]||"vaadin":void 0}function u(i,t){i._icons=[...i.querySelectorAll("[id]")].reduce((e,s)=>{let n=d(s.id,t);return e[n]=s,e},{})}var g=i=>class extends i{static get observedAttributes(){return["name","size"]}static get attachedIcons(){return a}static getIconset(t){return o[t]}static getIconSvg(t,e){let s=e||l(t),n=this.getIconset(s);if(!t||!n)return{svg:r(null)};let h=d(t,s),c=n._icons[h];return{preserveAspectRatio:c?c.getAttribute("preserveAspectRatio"):null,svg:r(c),size:n.size,viewBox:c?c.getAttribute("viewBox"):null}}static register(t,e,s){if(!o[t]){let n=document.createElement("vaadin-iconset");n.appendChild(s.content.cloneNode(!0)),o[t]=n,u(n,t),n.size=e,n.name=t}}get name(){return this.__name}set name(t){let e=this.__name;this.__name=t,this.__nameChanged(t,e)}get size(){return this.__size??24}set size(t){this.__size=t}connectedCallback(){["name","size"].forEach(t=>{if(this.hasOwnProperty(t)){let e=this[t];delete this[t],this[t]=e}}),this.style.display="none"}attributeChangedCallback(t,e,s){t==="name"?this.name=s:t==="size"&&(this.size=s==null?null:Number(s))}__updateIcons(t){a.forEach(e=>{t===l(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&delete o[e],t&&(o[t]=this,u(this,t),this.__updateIcons(t))}};export{g as a};
/*! Bundled license information:

@vaadin/icon/src/vaadin-iconset-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
