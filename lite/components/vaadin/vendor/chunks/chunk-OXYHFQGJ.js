import{a as e}from"./chunk-UPJQTVID.js";var s=class extends e{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.#t(t),t.addEventListener("content-changed",this.#i)}teardownNode(t){this.manual||this.host.removeAttribute("has-tooltip"),t.removeEventListener("content-changed",this.#i),this.#t(null)}setAriaTarget(t){this.ariaTarget=t;let i=this.node;i&&(i.ariaTarget=t)}setContext(t){this.context=t;let i=this.node;i&&(i.context=t)}setManual(t){this.manual=t;let i=this.node;i&&(i.manual=t)}setPosition(t){this.position=t;let i=this.node;i&&(i._position=t)}setShouldShow(t){this.shouldShow=t;let i=this.node;i&&(i.shouldShow=t)}setTarget(t){this.target=t;let i=this.node;i&&(i.target=t)}open(t){let i=this.node;i?.isConnected&&i._stateController.open(t)}close(t){let i=this.node;i&&i._stateController.close(t)}#i=t=>{this.#t(t.target)};#t(t){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:t}}))}};export{s as a};
/*! Bundled license information:

@vaadin/component-base/src/tooltip-controller.js:
  (**
   * @license
   * Copyright (c) 2022 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
