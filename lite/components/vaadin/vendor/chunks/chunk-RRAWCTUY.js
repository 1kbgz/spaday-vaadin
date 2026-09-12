import{a as c}from"./chunk-4URYSD3Z.js";var f=class{saveFocus(e){this.focusNode=e||c()}restoreFocus(e){let s=this.focusNode;if(!s)return;let o={preventScroll:e?e.preventScroll:!1,focusVisible:e?e.focusVisible:!1};c()===document.body?setTimeout(()=>s.focus(o)):s.focus(o),this.focusNode=null}};export{f as a};
/*! Bundled license information:

@vaadin/a11y-base/src/focus-restoration-controller.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
