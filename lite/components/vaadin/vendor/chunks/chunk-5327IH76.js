import{a as k}from"./chunk-KXVDMMUQ.js";import{a as D}from"./chunk-DYT6F3DS.js";import{a as R}from"./chunk-IFGP4HAJ.js";import{b as H,c as q,e as m,f as g,g as P,h as M,i as T,j as O}from"./chunk-DP7LNBZ4.js";import{a as b,b as _,c as $}from"./chunk-5G3K6R3U.js";import{f as y,h as v,i as C,k as x}from"./chunk-V3TG64QR.js";import{a as L}from"./chunk-JZAPRMTG.js";import{d as N}from"./chunk-OJTXSKFF.js";var G=r=>q(r)?r._$litType$.h:r.strings,E=_(class extends ${constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[i]){let o=H(this.it)?G(this.it):null,e=H(i)?G(i):null;if(o!==null&&(e===null||o!==e)){let t=M(r).pop(),s=this.et.get(o);if(s===void 0){let a=document.createDocumentFragment();s=x(C,a),s.setConnected(!1),this.et.set(o,s)}P(s,[t]),m(s,void 0,t)}if(e!==null){if(o===null||o!==e){let t=this.et.get(e);if(t!==void 0){let s=M(t).pop();O(r),m(r,void 0,s),P(r,[s])}}this.it=i}else this.it=void 0;return this.render(i)}});var S=_(class extends ${constructor(r){if(super(r),r.type!==b.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(i=>r[i]).join(" ")+" "}update(r,[i]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(let e in i)i[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(i)}let o=r.element.classList;for(let e of this.st)e in i||(o.remove(e),this.st.delete(e));for(let e in i){let t=!!i[e];t===this.st.has(e)||this.nt?.has(e)||(t?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return v}});var I=(r,i,o)=>{let e=new Map;for(let t=i;t<=o;t++)e.set(r[t],t);return e},F=_(class extends ${constructor(r){if(super(r),r.type!==b.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,i,o){let e;o===void 0?o=i:i!==void 0&&(e=i);let t=[],s=[],a=0;for(let h of r)t[a]=e?e(h,a):a,s[a]=o(h,a),a++;return{values:s,keys:t}}render(r,i,o){return this.dt(r,i,o).values}update(r,[i,o,e]){let t=M(r),{values:s,keys:a}=this.dt(i,o,e);if(!Array.isArray(t))return this.ut=a,s;let h=this.ut??=[],n=[],f,w,l=0,c=t.length-1,d=0,u=s.length-1;for(;l<=c&&d<=u;)if(t[l]===null)l++;else if(t[c]===null)c--;else if(h[l]===a[d])n[d]=g(t[l],s[d]),l++,d++;else if(h[c]===a[u])n[u]=g(t[c],s[u]),c--,u--;else if(h[l]===a[u])n[u]=g(t[l],s[u]),m(r,n[u+1],t[l]),l++,u--;else if(h[c]===a[d])n[d]=g(t[c],s[d]),m(r,t[l],t[c]),c--,d++;else if(f===void 0&&(f=I(a,d,u),w=I(h,l,c)),f.has(h[l]))if(f.has(h[c])){let p=w.get(a[d]),A=p!==void 0?t[p]:null;if(A===null){let z=m(r,t[l]);g(z,s[d]),n[d]=z}else n[d]=g(A,s[d]),m(r,t[l],A),t[p]=null;d++}else T(t[c]),c--;else T(t[l]),l++;for(;d<=u;){let p=m(r,n[u+1]);g(p,s[d]),n[d++]=p}for(;l<=c;){let p=t[l++];p!==null&&T(p)}return this.ut=a,P(r,n),v}});var K="important",B=" !"+K,V=_(class extends ${constructor(r){if(super(r),r.type!==b.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((i,o)=>{let e=r[o];return e==null?i:i+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(r,[i]){let{style:o}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(i)),this.render(i);for(let e of this.ft)i[e]==null&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(let e in i){let t=i[e];if(t!=null){this.ft.add(e);let s=typeof t=="string"&&t.endsWith(B);e.includes("-")||s?o.setProperty(e,s?t.slice(0,-11):t,s?K:""):o[e]=t}}return v}});function j(r,i,o){return i===o.length-1||r.localName==="vaadin-grid-column-group"}function W(r,i,o){return r.some(e=>e.hidden||!j(e,i,o)?!1:e.headerRenderer?!0:e.header===null?!1:e.path||e.header!==void 0)}function Z(r,i,o){return r.some(e=>e.hidden||!j(e,i,o)?!1:e.footerRenderer)}function U(r){return Object.fromEntries((r??"").split(" ").filter(i=>i!=="").map(i=>[i,!0]))}var Ae=r=>class extends r{__scheduleRenderHeaderFooter(){this.__renderHeaderFooterDebouncer=L.debounce(this.__renderHeaderFooterDebouncer,N,()=>{this.__renderHeaderFooter()})}__renderHeaderFooter(){this.__renderHeaderFooterDebouncer?.cancel();let o=(this._columnTree??[]).map(e=>e.toSorted((t,s)=>t._order-s._order));o.flat().forEach(e=>{e._emptyCells=[]}),this.#t(o),this.#o(o),this._resetKeyboardNavigation(),this.__a11yUpdateGridSize(this._flatSize,this._columnTree,this.__emptyState)}#t(o){let e=this.#e(o,"header");x(e.map(this.#r),this.$.header,{host:this}),this.$.table.toggleAttribute("has-header",!!this.$.header.querySelector("tr:not([hidden])")),this.$.header.querySelectorAll(".header-cell").forEach(t=>{let s=t._column;t.parentElement===this.$.header.lastElementChild||s.localName==="vaadin-grid-column-group"?s._headerCell=t:s._emptyCells.push(t)})}#r=({level:o,cells:e,isLastRow:t,isFirstRow:s,isRowVisible:a})=>{let h={"first-header-row":s,"last-header-row":t};return y`
        <tr
          role="row"
          part="row header-row${D(h)}"
          class="row header-row${S(h)}"
          tabindex="-1"
          ?hidden=${!a}
        >
          ${F(e,({column:n})=>n._id,({column:n,isFirstCell:f,isLastCell:w,isContentCell:l})=>{if(n.hidden)return E(C);let c={"first-header-row-cell":s,"last-header-row-cell":t,"first-column-cell":f,"last-column-cell":w},d=l?U(n.headerPartName):{};return E(y`
                <th
                  role="columnheader"
                  part="cell header-cell${D({...c,...d})}"
                  class="cell header-cell${S(c)}"
                  style="${V({width:n.width,"flex-grow":n.flexGrow})}"
                  ?first-column="${f}"
                  ?last-column="${w}"
                  @keydown="${this.__onCellKeyDown}"
                  @mousedown=${this.__onCellMouseDown}
                  @mouseenter=${this.__onCellMouseEnter}
                  @mouseleave=${this.__onCellMouseLeave}
                  colspan="${R(n._colSpan)}"
                  aria-colspan="${R(n._colSpan)}"
                  tabindex="-1"
                  ._column=${n}
                >
                  ${k(this,`vaadin-grid-header-cell-content-${o}-${n._id}`,{textAlign:n.textAlign})}
                  ${n.resizable?y`<div part="resize-handle" class="resize-handle"></div>`:C}
                </th>
              `)})}
        </tr>
      `};#o(o){let e=this.#e(o,"footer");x(e.map(this.#s),this.$.footer,{host:this}),this.$.table.toggleAttribute("has-footer",!!this.$.footer.querySelector("tr:not([hidden])")),this.$.footer.querySelectorAll(".footer-cell").forEach(t=>{let s=t._column;t.parentElement===this.$.footer.firstElementChild||s.localName==="vaadin-grid-column-group"?s._footerCell=t:s._emptyCells.push(t)})}#s=({level:o,cells:e,isLastRow:t,isFirstRow:s,isRowVisible:a})=>{let h={"first-footer-row":s,"last-footer-row":t};return y`
        <tr
          role="row"
          part="row footer-row${D(h)}"
          class="row footer-row${S(h)}"
          tabindex="-1"
          ?hidden=${!a}
        >
          ${F(e,({column:n})=>n._id,({column:n,isFirstCell:f,isLastCell:w,isContentCell:l})=>{if(n.hidden)return E(C);let c={"first-footer-row-cell":s,"last-footer-row-cell":t,"first-column-cell":f,"last-column-cell":w},d=l?U(n.footerPartName):{};return E(y`
                <td
                  role="gridcell"
                  part="cell footer-cell${D({...c,...d})}"
                  class="cell footer-cell${S(c)}"
                  style="${V({width:n.width,"flex-grow":n.flexGrow})}"
                  ?first-column="${f}"
                  ?last-column="${w}"
                  @keydown="${this.__onCellKeyDown}"
                  @mousedown=${this.__onCellMouseDown}
                  @mouseenter=${this.__onCellMouseEnter}
                  @mouseleave=${this.__onCellMouseLeave}
                  colspan="${R(n._colSpan)}"
                  aria-colspan="${R(n._colSpan)}"
                  tabindex="-1"
                  ._column=${n}
                >
                  ${k(this,`vaadin-grid-footer-cell-content-${o}-${n._id}`,{textAlign:n.textAlign})}
                </td>
              `)})}
        </tr>
      `};#e(o,e){let t=o.map((a,h)=>{let n=a.filter(f=>!f.hidden);return{level:h,cells:a.map(f=>({column:f,isFirstCell:f===n.at(0),isLastCell:f===n.at(-1),isContentCell:j(f,h,o)})),isRowVisible:e==="header"?W(a,h,o):Z(a,h,o)}});e==="footer"&&(t=t.toReversed());let s=t.filter(a=>a.isRowVisible);return t.map(a=>({...a,isFirstRow:a===s.at(0),isLastRow:a===s.at(-1)}))}};export{Ae as a};
/*! Bundled license information:

lit-html/directives/cache.js:
lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@vaadin/grid/src/vaadin-grid-header-footer-rendering-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
