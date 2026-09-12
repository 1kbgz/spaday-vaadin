import{a as l}from"./chunk-S4GYMZQA.js";import{a}from"./chunk-2D7CPLXI.js";import{b as i,c as h}from"./chunk-ZLNLWEGE.js";function S(c){return`--_lumo-${c.is}-inject`}var p=class{#r;#s;#t=new Map;#e=new Map;constructor(e=document){this.#r=e,this.handlePropertyChange=this.handlePropertyChange.bind(this),this.#s=a.for(e),this.#s.addEventListener("property-changed",this.handlePropertyChange)}disconnect(){this.#s.removeEventListener("property-changed",this.handlePropertyChange),this.#t.clear(),this.#e.values().forEach(e=>e.forEach(h))}forceUpdate(){for(let e of this.#t.keys())this.#o(e)}componentConnected(e){let{lumoInjector:t}=e.constructor,{is:s}=t;this.#e.set(s,this.#e.get(s)??new Set),this.#e.get(s).add(e);let o=this.#t.get(s);if(o){o.cssRules.length>0&&i(e,o);return}this.#n(s);let n=S(t);this.#s.observe(n)}componentDisconnected(e){let{is:t}=e.constructor.lumoInjector;this.#e.get(t)?.delete(e),h(e)}handlePropertyChange(e){let{propertyName:t}=e.detail,s=t.match(/^--_lumo-(.*)-inject$/u)?.[1];s&&this.#o(s)}#n(e){this.#t.set(e,new CSSStyleSheet),this.#o(e)}#o(e){let{tags:t,modules:s}=l(this.#h),o=(t.get(e)??[]).flatMap(r=>s.get(r)??[]).map(r=>r.cssText).join(`
`),n=this.#t.get(e);n.replaceSync(o),this.#e.get(e)?.forEach(r=>{o?i(r,n):h(r)})}get#h(){let e=new Set;for(let t of[this.#r,document])e=e.union(new Set(t.styleSheets)),e=e.union(new Set(t.adoptedStyleSheets));return[...e]}};export{S as a,p as b};
/*! Bundled license information:

@vaadin/vaadin-themable-mixin/src/lumo-injector.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
