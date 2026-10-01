function a(i,e,r=0){let n=e;for(let o of i.subCaches){let t=o.parentCacheIndex;if(n<=t)break;if(n<=t+o.flatSize)return a(o,n-t-1,r+1);n-=o.flatSize}return{cache:i,item:i.items[n],index:n,page:Math.floor(n/i.pageSize),level:r}}function u({getItemId:i},e,r,n=0,o=0){for(let t=0;t<e.items.length;t++){let f=e.items[t];if(f&&i(f)===i(r))return{cache:e,level:n,item:f,index:t,page:Math.floor(t/e.pageSize),subCache:e.getSubCache(t),flatIndex:o+e.getFlatIndex(t)}}for(let t of e.subCaches){let f=o+e.getFlatIndex(t.parentCacheIndex),s=u({getItemId:i},t,r,n+1,f+1);if(s)return s}}function x(i,[e,...r],n=0){e===1/0&&(e=i.size-1);let o=i.getFlatIndex(e),t=i.getSubCache(e);return t?.flatSize>0&&r.length?x(t,r,n+o+1):n+o}export{a,u as b,x as c};
/*! Bundled license information:

@vaadin/component-base/src/data-provider-controller/helpers.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
