import{b as i,e as l,f as r}from"./chunk-4URYSD3Z.js";var t=[];function d(o){for(let e=t.length-1;e>=0;e--)if(t[e].__trapNode?.contains(o))return t[e].__trapNode;return null}var c=class{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return r(this.__trapNode)}get __focusedElementIndex(){let e=this.__focusableElements;return e.indexOf(e.filter(l).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");t.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus({focusVisible:i()})}releaseFocus(){this.__trapNode=null,t.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(t).pop()&&e.key==="Tab"){if(e.defaultPrevented)return;e.preventDefault();let s=e.shiftKey;this.__focusNextElement(s)}}__focusNextElement(e=!1){let s=this.__focusableElements,_=e?-1:1,u=this.__focusedElementIndex,a=(s.length+u+_)%s.length,n=s[a];n.focus({focusVisible:!0}),n.localName==="input"&&n.select()}};export{d as a,c as b};
/*! Bundled license information:

@vaadin/a11y-base/src/focus-trap-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
