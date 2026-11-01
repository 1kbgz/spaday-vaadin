var i=new Set,c=class t{static debounce(e,s,l){return e instanceof t?e._cancelAsync():e=new t,e.setConfig(s,l),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,s){this._asyncModule=e,this._callback=s,this._timer=this._asyncModule.run(()=>{this._timer=null,i.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),i.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function h(t){i.add(t)}function n(){let t=!!i.size;return i.forEach(e=>{try{e.flush()}catch(s){setTimeout(()=>{throw s})}}),t}var u=()=>{let t;do t=n();while(t)};export{c as a,h as b,n as c,u as d};
/*! Bundled license information:

@vaadin/component-base/src/debounce.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)
*/
