import{a as h,c as m}from"./chunk-5G3K6R3U.js";import{c as l}from"./chunk-S5VAXUC6.js";import{i as o,k as a}from"./chunk-V3TG64QR.js";var i=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let s of r)s._$AO?.(e,!1),i(s,e);return!0},d=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},A=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),v(e)}};function f(t){this._$AN!==void 0?(d(this),this._$AM=t,A(this)):this._$AM=t}function $(t,e=!1,r=0){let s=this._$AH,u=this._$AN;if(u!==void 0&&u.size!==0)if(e)if(Array.isArray(s))for(let n=r;n<s.length;n++)i(s[n],!1),d(s[n]);else s!=null&&(i(s,!1),d(s));else i(this,t)}var v=t=>{t.type==h.CHILD&&(t._$AP??=$,t._$AQ??=f)},c=class extends m{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,s){super._$AT(e,r,s),A(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(i(this,e),d(this))}setValue(e){if(l(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var _=Symbol("valueNotInitialized"),p=class extends c{constructor(e){if(super(e),e.type!==h.ELEMENT)throw new Error(`\`${this.constructor.name}\` must be bound to an element.`);this.previousValue=_}render(e,r){return o}update(e,[r,s]){return this.hasChanged(s)?(this.host=e.options&&e.options.host,this.element=e.element,this.renderer=r,this.previousValue===_?this.addRenderer():this.runRenderer(),this.previousValue=Array.isArray(s)?[...s]:s,o):o}reconnected(){this.addRenderer()}disconnected(){this.removeRenderer()}addRenderer(){throw new Error("The `addRenderer` method must be implemented.")}runRenderer(){throw new Error("The `runRenderer` method must be implemented.")}removeRenderer(){throw new Error("The `removeRenderer` method must be implemented.")}renderRenderer(e,...r){let s=this.renderer.call(this.host,...r);a(s,e,{host:this.host})}hasChanged(e){return Array.isArray(e)?!Array.isArray(this.previousValue)||this.previousValue.length!==e.length?!0:e.some((r,s)=>r!==this.previousValue[s]):this.previousValue!==e}};export{p as a};
/*! Bundled license information:

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@vaadin/lit-renderer/src/lit-renderer.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
