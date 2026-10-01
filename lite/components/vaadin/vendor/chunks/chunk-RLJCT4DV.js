import{a as r}from"./chunk-UPJQTVID.js";import{j as n}from"./chunk-4TDKNLSI.js";var a=class extends r{#t;constructor(t,e,i,s={}){super(t,e,i,{...s,useUniqueId:!0})}initCustomNode(t){this.#e(t),this._notifyChange(t)}teardownNode(t){let e=this.getSlotChild();e&&e!==this.defaultNode?this._notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){let t=super.attachDefaultNode();return t&&this.#e(t),t}restoreDefaultNode(){}updateDefaultNode(t){this._notifyChange(t)}observeNode(t){this.#t&&this.#t.disconnect(),this.#t=new MutationObserver(e=>{e.forEach(i=>{let s=i.target,o=s===this.node;i.type==="attributes"?o&&this.#e(s):(o||s.parentElement===this.node)&&this._notifyChange(this.node)})}),this.#t.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}_notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:n(t),node:t}}))}#e(t){let e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!t.id&&(t.id=this.defaultId)}};export{a};
/*! Bundled license information:

@vaadin/component-base/src/slot-child-observe-controller.js:
  (**
   * @license
   * Copyright (c) 2022 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
