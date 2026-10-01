import{a as c}from"./chunk-EXS2PFSR.js";import{a as p}from"./chunk-DMTKDPRR.js";import{a as n}from"./chunk-BIYKDIRQ.js";import{a as m}from"./chunk-IFGP4HAJ.js";import{a as r}from"./chunk-AMOAO6W6.js";import{a as l}from"./chunk-7XKBCZAN.js";import{b as s}from"./chunk-OE6EL2BJ.js";import{b as d}from"./chunk-JAKARO6H.js";import{a}from"./chunk-7S27BS3R.js";import{a as o}from"./chunk-5JFSSCCH.js";import{f as e,l as i}from"./chunk-V3TG64QR.js";var u={selectAll:"Select All",selectAllUnavailable:"Select All unavailable",selectRow:"Select Row {rowHeader}",sorter:"Sort by {column}"},t=class extends c(n(l(d(a(s(i)))))){static get is(){return"vaadin-grid"}static get styles(){return[p,r]}static get defaultI18n(){return u}get i18n(){return super.i18n}set i18n(f){super.i18n=f}render(){return e`
      <div
        id="scroller"
        ?safari="${this._safari}"
        ?ios="${this._ios}"
        ?loading="${this.loading}"
        ?column-reordering-allowed="${this.columnReorderingAllowed}"
        ?empty-state="${this.__emptyState}"
      >
        <table
          id="table"
          role="treegrid"
          aria-multiselectable="true"
          tabindex="0"
          aria-label="${m(this.accessibleName)}"
        >
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tbody id="emptystatebody">
            <tr id="emptystaterow">
              <td part="empty-state" class="empty-state" id="emptystatecell" tabindex="0">
                <slot name="empty-state" id="emptystateslot"></slot>
              </td>
            </tr>
          </tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost" class="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}};o(t);export{t as a};
/*! Bundled license information:

@vaadin/grid/src/vaadin-grid.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
