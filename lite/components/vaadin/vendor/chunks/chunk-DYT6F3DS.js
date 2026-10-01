import{a as n,b as c,c as o}from"./chunk-5G3K6R3U.js";import{h as d}from"./chunk-V3TG64QR.js";var r=class extends o{#t;#e;constructor(e){if(super(e),e.type!==n.ATTRIBUTE||e.name!=="part"||e.strings?.length>2)throw new Error("`partMap()` can only be used in the `part` attribute and must be the only binding in it.")}render(e){return` ${Object.keys(e).filter(i=>e[i]).join(" ")} `}update(e,[i]){if(this.#t===void 0)return this.#t=new Set,e.strings!==void 0&&(this.#e=new Set(e.strings.join(" ").split(/\s/u).filter(t=>t!==""))),Object.keys(i).forEach(t=>{i[t]&&!this.#e?.has(t)&&this.#t.add(t)}),this.render(i);let s=e.element.part;return this.#t.forEach(t=>{t in i||(s.remove(t),this.#t.delete(t))}),Object.keys(i).forEach(t=>{let h=!!i[t];h!==this.#t.has(t)&&!this.#e?.has(t)&&(h?(s.add(t),this.#t.add(t)):(s.remove(t),this.#t.delete(t)))}),d}},f=c(r);export{f as a};
/*! Bundled license information:

@vaadin/component-base/src/directives/part-map.js:
  (**
   * @license
   * Copyright (c) 2026 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
