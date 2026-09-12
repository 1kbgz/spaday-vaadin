import{b as s,c as i,f as n}from"./chunk-TPXJQ57Q.js";var P=l=>class extends l{static get properties(){return{cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellPartNames(){s(this.$.items,t=>{t.hidden||this._generateCellPartNames(t,this.__getRowModel(t))})}_generateCellPartNames(t,_){i(t,e=>{if(e.__generatedParts&&e.__generatedParts.forEach(r=>{n(e,r,null)}),this.cellPartNameGenerator&&!t.hasAttribute("loading")){let r=this.cellPartNameGenerator(e._column,_);e.__generatedParts=r&&r.split(" ").filter(a=>a.length>0),e.__generatedParts&&e.__generatedParts.forEach(a=>{n(e,a,!0)})}})}};export{P as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-styling-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
