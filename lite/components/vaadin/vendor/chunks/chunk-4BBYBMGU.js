import{a as l}from"./chunk-TYUROXVC.js";import{a as m}from"./chunk-L2FSCNZQ.js";import{b as d}from"./chunk-NTKMB3I6.js";import{b as n}from"./chunk-PAUVTU3L.js";import{a as o}from"./chunk-J42WYUFU.js";import{a as h}from"./chunk-IVOULKKW.js";import{f as i,l as s}from"./chunk-V3TG64QR.js";var a=class extends l(n(o(d(s)))){static get is(){return"vaadin-month-calendar"}static get styles(){return m}render(){let c=this.__computeWeekDayNames(this.i18n,this.showWeekNumbers),D=this._weeks,r=!this.__computeShowWeekSeparator(this.showWeekNumbers,this.i18n);return i`
      <div part="month-header" id="month-header" aria-hidden="true">${this._getTitle(this.month,this.i18n)}</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        @touchend="${this._preventDefault}"
        @touchstart="${this._onMonthGridTouchStart}"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th part="weekday" aria-hidden="true" ?hidden="${r}"></th>
            ${c.map(t=>i`
                <th role="columnheader" part="weekday" scope="col" abbr="${t.weekDay}" aria-hidden="true">
                  ${t.weekDayShort}
                </th>
              `)}
          </tr>
        </thead>
        <tbody id="days-container">
          ${D.map(t=>i`
              <tr role="row">
                <td part="week-number" aria-hidden="true" ?hidden="${r}">
                  ${this.__computeWeekNumber(t)}
                </td>
                ${t.map(e=>i`
                    <td
                      role="gridcell"
                      part="${this.__computeDatePart(e,this.focusedDate,this.selectedDate,this.minDate,this.maxDate,this.isDateDisabled,this.enteredDate,this.__hasFocus)}"
                      .date="${e}"
                      ?disabled="${this.__isDayDisabled(e,this.minDate,this.maxDate,this.isDateDisabled)}"
                      tabindex="${this.__computeDayTabIndex(e,this.focusedDate)}"
                      aria-selected="${this.__computeDayAriaSelected(e,this.selectedDate)}"
                      aria-disabled="${this.__computeDayAriaDisabled(e,this.minDate,this.maxDate,this.isDateDisabled)}"
                      aria-label="${this.__computeDayAriaLabel(e)}"
                      >${this._getDate(e)}</td
                    >
                  `)}
              </tr>
            `)}
        </tbody>
      </table>
    `}};h(a);
/*! Bundled license information:

@vaadin/date-picker/src/vaadin-month-calendar.js:
  (**
   * @license
   * Copyright (c) 2016 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
