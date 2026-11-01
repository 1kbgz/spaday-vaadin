import{a as o}from"./chunk-HXHQMO4C.js";import{a as n}from"./chunk-PEVG7NQL.js";import{a as s}from"./chunk-SLJ7YX42.js";var h=r=>class extends n(o(s(r))){willUpdate(e){super.willUpdate(e),(e.has("opened")||e.has("positionTarget"))&&this.opened&&this.positionTarget&&this._updateOverlayWidth()}ready(){super.ready(),this.restoreFocusOnClose=!0}_initFocus(){}get _contentRoot(){return this.owner.__slottedListBox||this._rendererRoot}get _rendererRoot(){if(!this.__savedRoot){let e=document.createElement("div");e.setAttribute("slot","overlay"),this.owner.appendChild(e),this.__savedRoot=e}return this.__savedRoot}_shouldCloseOnOutsideClick(e){return!0}_mouseDownListener(e){super._mouseDownListener(e),e.preventDefault()}_getMenuElement(){let i=this.owner.shadowRoot.querySelector('slot[name="overlay"]').assignedElements();return i.find(t=>t._hasVaadinListMixin)||i.flatMap(t=>[...t.children]).find(t=>t._hasVaadinListMixin)}_updateOverlayWidth(){this.style.setProperty("--_vaadin-select-overlay-default-width",`${this.positionTarget.offsetWidth}px`)}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){let e=this._getMenuElement();this.owner._assignMenuElement(e)}}};export{h as a};
/*! Bundled license information:

@vaadin/select/src/vaadin-select-overlay-mixin.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
