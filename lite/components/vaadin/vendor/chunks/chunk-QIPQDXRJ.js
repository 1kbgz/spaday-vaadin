import{a as o}from"./chunk-LIICEHA6.js";var t=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(s=>{s.target.isConnected&&(s.target.resizables?s.target.resizables.forEach(e=>{e._onResize(s.contentRect)}):s.target._onResize(s.contentRect))})})}),a=i=>class extends i{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),t.observe(this),this._observeParent){let e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,t.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),t.unobserve(this);let e=this.__parent;if(this._observeParent&&e){let n=e.resizables;n&&(n.delete(this),n.size===0&&t.unobserve(e)),this.__parent=null}}_onResize(e){}},l=o(a);export{l as a};
/*! Bundled license information:

@vaadin/component-base/src/resize-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
