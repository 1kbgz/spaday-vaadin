var a=class r{context;items=[];pendingRequests={};#e={};#i;#t=0;#s=0;constructor(e,t,s,i,h){this.context=e,this.pageSize=t,this.size=s,this.parentCache=i,this.parentCacheIndex=h,this.#s=s||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.#e)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(e=>e.isLoading)}get flatSize(){return this.#s}get pageSize(){return this.#i}set pageSize(e){this.#i=e,this.pendingRequests={},this.subCaches.forEach(t=>{t.pageSize=e})}get size(){return this.#t}set size(e){if(this.#t!==e){if(this.#t=e,this.context.placeholder!==void 0){this.items.length=e||0;for(let s=0;s<e;s++)this.items[s]||=this.context.placeholder}this.items.length>e&&(this.items.length=e||0),Object.keys(this.pendingRequests).forEach(s=>{parseInt(s)*this.pageSize>=this.size&&delete this.pendingRequests[s]})}}recalculateFlatSize(){this.#s=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((e,t)=>(t.recalculateFlatSize(),e+t.flatSize),0):0}setPage(e,t){let s=e*this.pageSize;t.forEach((i,h)=>{let n=s+h;(this.size===void 0||n<this.size)&&(this.items[n]=i)})}getSubCache(e){return this.#e[e]}removeSubCache(e){delete this.#e[e]}removeSubCaches(){this.#e={}}createSubCache(e){let t=new r(this.context,this.pageSize,0,this,e);return this.#e[e]=t,t}getFlatIndex(e){let t=Math.max(0,Math.min(this.size-1,e));return this.subCaches.reduce((s,i)=>{let h=i.parentCacheIndex;return t>h?s+i.flatSize:s},t)}};export{a};
/*! Bundled license information:

@vaadin/component-base/src/data-provider-controller/cache.js:
  (**
   * @license
   * Copyright (c) 2021 - 2026 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
