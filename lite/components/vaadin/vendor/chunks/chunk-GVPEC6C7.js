import{a as l}from"./chunk-B7Y4HFXI.js";var r={},u=new Set;function a(n,t){return(n||"").replace(`${t}:`,"")}function h(n){return n?n.split(":")[0]||"vaadin":void 0}function f(n,t,e){let s=(n.children.length===1&&n.firstElementChild.localName==="use"?n.firstElementChild:null)?.getAttribute("href");return s?.startsWith("#")?t[a(s.slice(1),e)]:null}function d(n,t){let e=[...n.querySelectorAll("[id]")],i=e.reduce((o,c)=>{let g=a(c.id,t);return o[g]=c,o},{}),s={...i};e.forEach(o=>{let c=f(o,s,t);c&&(i[a(o.id,t)]=c)}),n._icons=i}var I=n=>class extends n{static get observedAttributes(){return["name","size"]}static get attachedIcons(){return u}static getIconset(t){return r[t]}static getIconSvg(t,e){let i=e||h(t),s=this.getIconset(i);if(!t||!s)return{svg:l(null)};let o=a(t,i),c=s._icons[o];return{preserveAspectRatio:c?c.getAttribute("preserveAspectRatio"):null,svg:l(c),size:s.size,viewBox:c?c.getAttribute("viewBox"):null}}static register(t,e,i){if(!r[t]){let s=document.createElement("vaadin-iconset");s.appendChild(i.content.cloneNode(!0)),r[t]=s,d(s,t),s.size=e,s.name=t}}get name(){return this.__name}set name(t){let e=this.__name;this.__name=t,this.__nameChanged(t,e)}get size(){return this.__size??24}set size(t){this.__size=t}connectedCallback(){["name","size"].forEach(t=>{if(this.hasOwnProperty(t)){let e=this[t];delete this[t],this[t]=e}}),this.style.display="none"}attributeChangedCallback(t,e,i){t==="name"?this.name=i:t==="size"&&(this.size=i==null?null:Number(i))}__updateIcons(t){u.forEach(e=>{t===h(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&delete r[e],t&&(r[t]=this,d(this,t),this.__updateIcons(t))}};export{I as a};
/*! Bundled license information:

@vaadin/icon/src/vaadin-iconset-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
