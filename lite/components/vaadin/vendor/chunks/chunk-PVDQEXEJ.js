var a=i=>class extends i{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},isItemSelectable:{type:Function},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems, isItemSelectable)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}__isItemSelectable(e){return!this.isItemSelectable||!e?!0:this.isItemSelectable(e)}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}updated(e){super.updated(e),e.has("isItemSelectable")&&this.dispatchEvent(new CustomEvent("is-item-selectable-changed"))}__selectedItemsChanged(){this._getRenderedRows().forEach(e=>{(e.hasAttribute("selected")!==this._isSelected(e._item)||e.hasAttribute("nonselectable")!==!this.__isItemSelectable(e._item))&&this.__updateRow(e)})}__computeSelectedKeys(e,t){let c=t||[],s=new Set;return c.forEach(l=>{s.add(this.getItemId(l))}),s}};export{a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid-selection-mixin.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
