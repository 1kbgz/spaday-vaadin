import{b as r,e as i,f as c}from"./chunk-7FR4QUQH.js";var t=[];function h(o){for(let e=t.length-1;e>=0;e--)if(t[e].trapNode?.contains(o))return t[e].trapNode;return null}var l=class{trapNode=null;constructor(e){this.host=e}get#e(){return c(this.trapNode)}get#t(){let e=this.#e;return e.indexOf(e.filter(i).pop())}hostConnected(){document.addEventListener("keydown",this.#s)}hostDisconnected(){document.removeEventListener("keydown",this.#s)}trapFocus(e){if(this.trapNode=e,this.#e.length===0)throw this.trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");t.push(this),this.#t===-1&&this.#e[0].focus({focusVisible:r()})}releaseFocus(){this.trapNode=null,t.pop()}#s=e=>{if(this.trapNode&&this===Array.from(t).pop()&&e.key==="Tab"){if(e.defaultPrevented)return;e.preventDefault();let s=e.shiftKey;this.#n(s)}};#n(e=!1){let s=this.#e,a=e?-1:1,u=this.#t,d=(s.length+u+a)%s.length,n=s[d];n.focus({focusVisible:!0}),n.localName==="input"&&n.select()}};export{h as a,l as b};
/*! Bundled license information:

@vaadin/a11y-base/src/focus-trap-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
