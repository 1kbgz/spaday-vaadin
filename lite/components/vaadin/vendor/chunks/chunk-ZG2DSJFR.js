import{b as c}from"./chunk-JURVQ6DX.js";import{a as f}from"./chunk-7A5N5Q5S.js";import{a as m,b as p}from"./chunk-V7JC4W2R.js";import{b as d}from"./chunk-OE6EL2BJ.js";import{b as l}from"./chunk-JAKARO6H.js";import{a}from"./chunk-7S27BS3R.js";import{a as n}from"./chunk-5JFSSCCH.js";import{a as s}from"./chunk-X2ZY66LG.js";import{f as i,l as r}from"./chunk-V3TG64QR.js";var e=class v extends f(s(l(a(d(r))))){static get is(){return"vaadin-dialog-overlay"}static get styles(){return c}get _focusRoot(){return this.owner}render(){return i`
      <div id="backdrop" part="backdrop" ?hidden="${!this.withBackdrop}"></div>
      <div part="overlay" id="overlay">
        <section id="resizerContainer" class="resizer-container">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="header-content"><slot name="header-content"></slot></div>
          </header>
          <div part="content" id="content"><slot></slot></div>
          <footer part="footer"><slot name="footer"></slot></footer>
        </section>
      </div>
    `}bringToFront(o){if(o instanceof Event){let h=o.composedPath();if(m(this).some(t=>h.includes(t)&&p(this,t)&&t instanceof v))return}super.bringToFront()}};n(e);export{e as a};
/*! Bundled license information:

@vaadin/dialog/src/vaadin-dialog-overlay.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
