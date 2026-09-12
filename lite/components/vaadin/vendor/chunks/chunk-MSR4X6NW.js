import{a as n}from"./chunk-YXX6RKRX.js";import{a as m}from"./chunk-7OWPVA7E.js";import{a as l}from"./chunk-IFGP4HAJ.js";import{a as r}from"./chunk-3L4GMY4H.js";import{b as d}from"./chunk-NTKMB3I6.js";import{b as s}from"./chunk-PAUVTU3L.js";import{a}from"./chunk-J42WYUFU.js";import{a as o}from"./chunk-IVOULKKW.js";import{f as e,l as i}from"./chunk-V3TG64QR.js";var t=class extends n(r(s(a(d(i))))){static get is(){return"vaadin-grid"}static get styles(){return m}render(){return e`
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
          aria-label="${l(this.accessibleName)}"
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
