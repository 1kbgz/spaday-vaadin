import{a as i,b as s}from"./chunk-2WI67VC2.js";import{a as n}from"./chunk-47SZQVFY.js";var r=new Set;function c(o){let e=o.getRootNode();return e.host&&e.host.constructor.version?c(e.host):e}var a=o=>class extends o{static finalize(){super.finalize();let t=i(this.lumoInjector);this.is&&!r.has(t)&&(r.add(t),n({name:t,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){super.connectedCallback();let t=c(this);t.__lumoInjectorDisabled||this.isConnected&&(t.__lumoInjector||=new s(t),this.__lumoInjector=t.__lumoInjector,this.__lumoInjector.componentConnected(this))}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}};export{c as a,a as b};
/*! Bundled license information:

@vaadin/vaadin-themable-mixin/lumo-injection-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
