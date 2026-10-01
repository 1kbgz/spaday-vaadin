import{d as $}from"./chunk-DP7LNBZ4.js";import{a as c,c as _}from"./chunk-5G3K6R3U.js";var o=(e,t)=>{let s=e._$AN;if(s===void 0)return!1;for(let i of s)i._$AO?.(t,!1),o(i,t);return!0},n=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},d=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),l(t)}};function a(e){this._$AN!==void 0?(n(this),this._$AM=e,d(this)):this._$AM=e}function f(e,t=!1,s=0){let i=this._$AH,h=this._$AN;if(h!==void 0&&h.size!==0)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)o(i[r],!1),n(i[r]);else i!=null&&(o(i,!1),n(i));else o(this,e)}var l=e=>{e.type==c.CHILD&&(e._$AP??=f,e._$AQ??=a)},A=class extends _{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),d(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(o(this,t),n(this))}setValue(t){if($(this._$Ct))this._$Ct._$AI(t,this);else{let s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};export{A as a};
/*! Bundled license information:

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
