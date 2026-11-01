function o(t,e){return t.split(".").reduce((i,r)=>i[r],e)}function s(t,e,i){if(i.length===0)return!1;let r=!0;return t.forEach(({path:n})=>{if(!n||n.indexOf(".")===-1)return;let u=n.replace(/\.[^.]*$/u,"");o(u,i[0])===void 0&&(console.warn(`Path "${n}" used for ${e} does not exist in all of the items, ${e} is disabled.`),r=!1)}),r}function f(t){return[void 0,null].indexOf(t)>=0?"":isNaN(t)?t.toString():t}function c(t,e){return t=f(t),e=f(e),t<e?-1:t>e?1:0}function g(t,e){return t.sort((i,r)=>e.map(n=>n.direction==="asc"?c(o(n.path,i),o(n.path,r)):n.direction==="desc"?c(o(n.path,r),o(n.path,i)):0).reduce((n,u)=>n!==0?n:u,0))}function h(t,e){return t.filter(i=>e.every(r=>{let n=f(o(r.path,i)),u=f(r.value).toString().toLowerCase();return n.toString().toLowerCase().includes(u)}))}var a=t=>(e,i)=>{let r=t?[...t]:[];e.filters&&s(e.filters,"filtering",r)&&(r=h(r,e.filters)),Array.isArray(e.sortOrders)&&e.sortOrders.length&&s(e.sortOrders,"sorting",r)&&(r=g(r,e.sortOrders));let n=Math.min(r.length,e.pageSize),u=e.page*n,l=u+n,d=r.slice(u,l);i(d,r.length)};export{a};
/*! Bundled license information:

@vaadin/grid/src/array-data-provider.js:
  (**
   * @license
   * Copyright (c) 2000 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
