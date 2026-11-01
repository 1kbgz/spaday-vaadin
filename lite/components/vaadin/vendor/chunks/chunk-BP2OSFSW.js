var s=n=>class extends n{getEventContext(o){let t={},{cell:e}=this._getGridEventLocation(o);return e&&(t.section=["body","header","footer","details"].find(i=>e.part.contains(`${i}-cell`)),e._column&&(t.column=e._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(e.__parentRow))),t}};export{s as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-event-context-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
