var c=0,i=0,n=[],r=!1;function l(){r=!1;let e=n.length;for(let t=0;t<e;t++){let o=n[t];if(o)try{o()}catch(a){setTimeout(()=>{throw a})}}n.splice(0,e),i+=e}var s={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}};var u={run(e){return window.requestAnimationFrame(e)},cancel(e){window.cancelAnimationFrame(e)}};var w={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}};var d={run(e){r||(r=!0,queueMicrotask(()=>l())),n.push(e);let t=c;return c+=1,t},cancel(e){let t=e-i;if(t>=0){if(!n[t])throw new Error(`invalid async handle: ${e}`);n[t]=null}}};export{s as a,u as b,w as c,d};
/*! Bundled license information:

@vaadin/component-base/src/async.js:
  (**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   *)
*/
