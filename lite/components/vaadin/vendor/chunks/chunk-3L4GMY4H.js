import{a as s}from"./chunk-BRB7U2RT.js";import{a,b as o}from"./chunk-LNFJMDRJ.js";import{c as n}from"./chunk-SXE6KBH3.js";var d=function(){};window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){d()};var i,r=new Set,b=c=>class extends s(c){static _ensureRegistrations(){let{is:e}=this;if(e&&!r.has(e)){window.Vaadin.registrations.push(this),r.add(e);let t=window.Vaadin.developmentModeCallback;t&&(i=a.debounce(i,n,()=>{t["vaadin-usage-statistics"]()}),o(i))}}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.'),this.constructor._ensureRegistrations()}};export{b as a};
/*! Bundled license information:

@vaadin/component-base/src/element-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
