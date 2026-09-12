import{b as n}from"./chunk-SJ62ZSSU.js";import{a as o}from"./chunk-QIPQDXRJ.js";import{c as e}from"./chunk-V3TG64QR.js";var r=n(),z=i=>r?class extends o(i){static get styles(){return e`
            :host::after,
            :host::before {
              font-size: var(--vaadin-icon-visual-size, var(--_vaadin-font-icon-size));
            }
          `}updated(t){super.updated(t),(t.has("char")||t.has("iconClass")||t.has("ligature"))&&this.__updateFontIconSize()}_onResize(){this.__updateFontIconSize()}__updateFontIconSize(){if(this.char||this.iconClass||this.ligature){let{paddingTop:t,paddingBottom:s,height:a}=getComputedStyle(this),c=parseFloat(a)-parseFloat(t)-parseFloat(s);this.style.setProperty("--_vaadin-font-icon-size",`${c}px`)}}}:i;export{z as a};
/*! Bundled license information:

@vaadin/icon/src/vaadin-icon-font-size-mixin.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
