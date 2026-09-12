import{a as e}from"./chunk-NO7TATE3.js";var i=class extends e{constructor(t){super(t,"tooltip"),this.setTarget(t),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(t),t.addEventListener("content-changed",this.__onContentChange)}teardownNode(t){this.manual||this.host.removeAttribute("has-tooltip"),t.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(t){this.ariaTarget=t;let n=this.node;n&&(n.ariaTarget=t)}setContext(t){this.context=t;let n=this.node;n&&(n.context=t)}setManual(t){this.manual=t;let n=this.node;n&&(n.manual=t)}setPosition(t){this.position=t;let n=this.node;n&&(n._position=t)}setShouldShow(t){this.shouldShow=t;let n=this.node;n&&(n.shouldShow=t)}setTarget(t){this.target=t;let n=this.node;n&&(n.target=t)}open(t){let n=this.node;n?.isConnected&&n._stateController.open(t)}close(t){let n=this.node;n&&n._stateController.close(t)}__onContentChange(t){this.__notifyChange(t.target)}__notifyChange(t){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:t}}))}};export{i as a};
/*! Bundled license information:

@vaadin/component-base/src/tooltip-controller.js:
  (**
   * @license
   * Copyright (c) 2022 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
