import{a as c,b as o,c as f}from"./chunk-5G3K6R3U.js";import{a as p,b as m}from"./chunk-S5VAXUC6.js";import{g as a,h as l,i as r}from"./chunk-V3TG64QR.js";var i=class extends f{constructor(t){if(super(t),this.it=r,t.type!==c.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===r||t==null)return this._t=void 0,this.it=t;if(t===l)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};i.directiveName="unsafeHTML",i.resultType=1;var g=o(i);var n=class extends i{};n.directiveName="unsafeSVG",n.resultType=2;var u=o(n);function w(e){let t=r;if(e){let s=e.cloneNode(!0);s.removeAttribute("id"),t=a`${u(s.outerHTML)}`}return t}function v(e){return m(e,p.SVG)||e===r}function D(e){let t=e==null||e===""?r:e;return v(t)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),t=r),t}function G(e){return a`${u(e)}`}export{w as a,v as b,D as c,G as d};
/*! Bundled license information:

lit-html/directives/unsafe-html.js:
lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@vaadin/icon/src/vaadin-icon-svg.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
