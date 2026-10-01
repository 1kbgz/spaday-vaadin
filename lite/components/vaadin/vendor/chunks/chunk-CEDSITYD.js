import{a as r}from"./chunk-KARJ6GZ2.js";import{a}from"./chunk-L7ZBHXTX.js";import{c}from"./chunk-V3TG64QR.js";var e=c`
  [part='checkbox'] {
    color: var(--vaadin-checkbox-checkmark-color, var(--_marker-color));
  }

  [part='checkbox']::after {
    inset: 0;
    mask: var(--_vaadin-icon-checkmark) 50% /
      var(--vaadin-checkbox-checkmark-size, var(--vaadin-checkbox-marker-size, 100%)) no-repeat;
    filter: var(--vaadin-checkbox-checkmark-color, var(--_marker-filter));
  }

  :host([indeterminate]) [part='checkbox']::after {
    mask-image: var(--_vaadin-icon-minus);
  }
`,m=[a,r("checkbox"),e];export{m as a};
/*! Bundled license information:

@vaadin/checkbox/src/styles/vaadin-checkbox-base-styles.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
