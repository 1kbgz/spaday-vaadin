import"../../../chunks/chunk-PAUVTU3L.js";import"../../../chunks/chunk-ZLNLWEGE.js";import"../../../chunks/chunk-UX334JMM.js";import{a as r}from"../../../chunks/chunk-NHUVTQTL.js";import{c as o}from"../../../chunks/chunk-V3TG64QR.js";r("Lumo .js mixins are deprecated and will be removed in V26");var i=o`
  [part~='loader'] {
    display: none;
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
    animation:
      1s linear infinite lumo-loader-rotate,
      0.3s 0.1s lumo-loader-fade-in both;
  }

  :host([loading]) [part~='loader'] {
    display: block;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;export{i as loader};
/*! Bundled license information:

@vaadin/vaadin-lumo-styles/mixins/loader.js:
  (**
   * @license
   * Copyright (c) 2022 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
