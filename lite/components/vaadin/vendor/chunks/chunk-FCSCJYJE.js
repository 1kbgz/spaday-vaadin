var o=new Set,r=()=>[...o].filter(e=>!e.hasAttribute("closing")),a=e=>{let n=r(),t=n.indexOf(e);return t===-1?[]:n.slice(t+1)},d=(e,n)=>e._deepContains(n),c=(e,n=t=>!0)=>{let t=r().filter(n);return e===t.pop()},h=e=>class extends e{get _last(){return c(this)}get _isAttached(){return o.has(this)}bringToFront(){if(c(this))return;let t=a(this),i=t.filter(s=>s._hasOverlayPositionMixin&&d(this,s));i.length!==t.length&&[this,...i].forEach(s=>{s.matches(":popover-open")&&(s.hidePopover(),s.showPopover()),s._removeAttachedInstance(),s._appendAttachedInstance()})}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),r().forEach(t=>{t!==this&&t.toggleAttribute("suppressed",!0)})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);let t=r(),i;for(;(i=t.pop())&&!(i!==this&&(i.toggleAttribute("suppressed",!1),!i.modeless)););}_appendAttachedInstance(){o.add(this)}_removeAttachedInstance(){this._isAttached&&o.delete(this)}};export{a,d as b,c,h as d};
/*! Bundled license information:

@vaadin/overlay/src/vaadin-overlay-stack-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
