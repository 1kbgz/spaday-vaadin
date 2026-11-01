var a=n=>class extends n{static get properties(){return{__hostVisible:{type:Boolean,value:!1},__tableRect:Object,__headerRect:Object,__itemsRect:Object,__footerRect:Object}}ready(){super.ready();let e=new ResizeObserver(s=>{s.findLast(({target:t})=>t===this)&&(this.__hostVisible=this.checkVisibility());let i=s.findLast(({target:t})=>t===this.$.table);i&&(this.__tableRect=i.contentRect);let o=s.findLast(({target:t})=>t===this.$.header);o&&(this.__headerRect=o.contentRect);let c=s.findLast(({target:t})=>t===this.$.items);c&&(this.__itemsRect=c.contentRect);let r=s.findLast(({target:t})=>t===this.$.footer);r&&(this.__footerRect=r.contentRect)});e.observe(this),e.observe(this.$.table),e.observe(this.$.header),e.observe(this.$.items),e.observe(this.$.footer)}};export{a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-resize-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
