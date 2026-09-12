import{a as r}from"./chunk-PAUVTU3L.js";import{a as t}from"./chunk-NHUVTQTL.js";import{c as o}from"./chunk-V3TG64QR.js";t("Lumo .js mixins are deprecated and will be removed in V26");var e=o`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;r("",e,{moduleId:"lumo-field-button"});export{e as a};
/*! Bundled license information:

@vaadin/vaadin-lumo-styles/mixins/field-button.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
