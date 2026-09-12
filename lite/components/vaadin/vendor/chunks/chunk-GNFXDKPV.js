import{a as l}from"./chunk-HAFYWNPS.js";import{c,e as f}from"./chunk-4URYSD3Z.js";var b=_=>class extends l(_){get focused(){return(this._getItems()||[]).find(f)}get _vertical(){return!0}get _tabNavigation(){return!1}focus(t){let e=this._getFocusableIndex();e>=0&&this._focus(e,t)}_getFocusableIndex(){let t=this._getItems();return Array.isArray(t)?this._getAvailableIndex(t,0,null,e=>!c(e)):-1}_getItems(){return Array.from(this.children)}_onKeyDown(t){if(super._onKeyDown(t),t.metaKey||t.ctrlKey)return;let{key:e,shiftKey:o}=t,n=this._getItems()||[],s=n.indexOf(this.focused),i,r,a=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKeyPressed(e,o)?(r=-a,i=s-a):this.__isNextKeyPressed(e,o)?(r=a,i=s+a):e==="Home"?(r=1,i=0):e==="End"&&(r=-1,i=n.length-1),i=this._getAvailableIndex(n,i,r,h=>!c(h)),!(this._tabNavigation&&e==="Tab"&&(i>s&&t.shiftKey||i<s&&!t.shiftKey||i===s))&&i>=0&&(t.preventDefault(),this._focus(i,{focusVisible:!0,preventScroll:!0},!0))}__isPrevKeyPressed(t,e){return this._vertical?t==="ArrowUp":t==="ArrowLeft"||this._tabNavigation&&t==="Tab"&&e}__isNextKeyPressed(t,e){return this._vertical?t==="ArrowDown":t==="ArrowRight"||this._tabNavigation&&t==="Tab"&&!e}_focus(t,e,o=!1){let n=this._getItems();this._focusItem(n[t],e,o)}_focusItem(t,e){t&&t.focus(e)}_getAvailableIndex(t,e,o,n){let s=t.length,i=e;for(let r=0;typeof i=="number"&&r<s;r+=1,i+=o||1){i<0?i=s-1:i>=s&&(i=0);let u=t[i];if(this._isItemFocusable(u)&&this.__isMatchingItem(u,n))return i}return-1}__isMatchingItem(t,e){return typeof e=="function"?e(t):!0}_isItemFocusable(t){return!t.hasAttribute("disabled")}};export{b as a};
/*! Bundled license information:

@vaadin/a11y-base/src/keyboard-direction-mixin.js:
  (**
   * @license
   * Copyright (c) 2022 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
