var d=class{constructor(e,t,s={}){this.target=e,this.callback=t,this.forceInitial=s.forceInitial,this._storedNodes=[],this._isSlot=e instanceof HTMLSlotElement,this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),s.syncInitial?this.flush():this._schedule()}connect(){this.target.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.target.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this._scheduled&&this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_collectNodes(){let e=this._isSlot?[this.target]:[...this.target.querySelectorAll("slot")];return[...new Set(e.flatMap(t=>t.assignedNodes({flatten:!0})))]}_groupNodesBySlot(e){let t=new Map;return e.forEach(s=>{let o=s.assignedSlot;t.set(o,t.get(o)??[]),t.get(o).push(s)}),t}_collectMovedNodes(e){let t=this._groupNodesBySlot(e),s=this._groupNodesBySlot(this._storedNodes),o=[];return t.forEach((i,h)=>{let c=s.get(h)||[];new Set(c).difference(new Set(i)).size>0||c.forEach((l,n)=>{i.indexOf(l)!==n&&o.push(l)})}),o}_processNodes(){let e=this._collectNodes(),t=e.filter(i=>!this._storedNodes.includes(i)),s=this._storedNodes.filter(i=>!e.includes(i)),o=this._collectMovedNodes(e);(t.length||s.length||o.length||this.forceInitial)&&this.callback({addedNodes:t,currentNodes:e,movedNodes:o,removedNodes:s}),this.forceInitial&&(this.forceInitial=!1),this._storedNodes=e}};export{d as a};
/*! Bundled license information:

@vaadin/component-base/src/slot-observer.js:
  (**
   * @license
   * Copyright (c) 2023 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
