var a={"aria-describedby":"ariaDescribedByElements","aria-labelledby":"ariaLabelledByElements"};function o(n,r,l){let t=a[r],e=new Set(n[t]);e.add(l),n[t]=[...e]}function s(n,r,l){let t=a[r],e=new Set(n[t]);e.delete(l),n[t]=e.size>0?[...e]:null}export{o as addAriaElementReference,s as removeAriaElementReference};
/*! Bundled license information:

@vaadin/a11y-base/src/aria-element-reference.js:
  (**
   * @license
   * Copyright (c) 2000 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
