var o=t=>t.test(navigator.userAgent),e=t=>t.test(navigator.platform),r=t=>t.test(navigator.vendor),i=o(/Android/u),a=o(/Chrome/u)&&r(/Google Inc/u),c=o(/Firefox/u),n=e(/^iPad/u)||e(/^Mac/u)&&navigator.maxTouchPoints>1,s=e(/^iPhone/u),u=s||n,d=o(/^((?!chrome|android).)*safari/iu),x=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();export{i as a,a as b,c,n as d,s as e,u as f,d as g,x as h};
/*! Bundled license information:

@vaadin/component-base/src/browser-utils.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
