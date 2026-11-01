import{a as g,b as u}from"./chunk-24JQ446Q.js";import{a as p}from"./chunk-GNDJM5WZ.js";import{a as f}from"./chunk-XVGA336T.js";import{a as c}from"./chunk-IFGP4HAJ.js";import{a as n}from"./chunk-AEQAV2UD.js";import{b as s}from"./chunk-FWFQ6C5B.js";import{b as r}from"./chunk-MNKZUN3S.js";import{a as e}from"./chunk-VI625SQ6.js";import{a as o}from"./chunk-JRGUID65.js";import{c as v,f as t,l as i}from"./chunk-V3TG64QR.js";var a=class extends g(r(n(e(s(i))))){static get is(){return"vaadin-notification-container"}static get styles(){return f}render(){return t`
      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}},d=class extends r(e(s(i))){static get is(){return"vaadin-notification-card"}static get styles(){return p}render(){return t`
      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","alert")}},m=class extends u(n(r(e(i)))){static get is(){return"vaadin-notification"}static get styles(){return v`
      :host {
        display: none !important;
      }
    `}render(){return t`
      <vaadin-notification-card
        theme="${c(this._theme)}"
        aria-live="${this.__computeAriaLive(this.assertive)}"
      ></vaadin-notification-card>
    `}};o(a);o(d);o(m);export{m as a};
/*! Bundled license information:

@vaadin/notification/src/vaadin-notification.js:
  (**
   * @license
   * Copyright (c) 2017 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
