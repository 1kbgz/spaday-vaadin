import{a as t}from"./chunk-FKM6CANI.js";var s=r=>class extends r{static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged",sync:!0},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,sync:!0}}}constructor(){super(),this.addEventListener("click",e=>this._onClick(e))}_onClick(e){this.leaf||t(e.target)||e.target instanceof HTMLLabelElement||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){let l=Number(e).toString();this.style.setProperty("--_level",l)}};export{s as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-tree-toggle-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
