(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6poT":function(t,e,s){"use strict";var n={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},r=(s("f8y5"),s("KHd+")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.row[t.entry.key]?s("span",{},[t._v("\n    "+t._s(t.row[t.entry.key][t.entry.field])+"\n  ")]):s("span",{staticClass:"badge badge-pill badge-orange"},[t._v("\n    Not Assigned\n  ")])])}),[],!1,null,"63040303",null);e.a=i.exports},"8pV7":function(t,e,s){"use strict";var n={props:["value"]},r=(s("Pj5m"),s("KHd+"));Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-check"},[e("label",{staticClass:"form-check-label"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",disabled:""},domProps:{checked:this.value}}),this._v(" "),this._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"form-check-sign"},[e("span",{staticClass:"check"})])}],!1,null,"d92f9e34",null).exports},"9pPG":function(t,e,s){"use strict";var n={props:["field","row"]},r=s("KHd+");Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  "+this._s(this.row[this.field+"_label"])+"\n")])}),[],!1,null,null,null).exports},"C+fe":function(t,e,s){var n=s("gZrl");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,r);n.locals&&(t.exports=n.locals)},CZQh:function(t,e,s){"use strict";s("DQi7")},D6y7:function(t,e,s){"use strict";var n={props:["row","xprops"],data:function(){return{}},created:function(){},methods:{destroyData:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonText:"Delete",confirmButtonColor:"#dd4b39",focusCancel:!0,reverseButtons:!0}).then((function(s){s.value&&e.$store.dispatch(e.xprops.module+"/destroyData",t).then((function(t){e.$eventHub.$emit("delete-success")}))}))}}},r=s("KHd+"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dt-action-container"},[t.$can(t.xprops.permission_prefix+"show")?s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-azure",attrs:{to:{name:t.xprops.route+".show",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])]):t._e(),t._v(" "),t.$can(t.xprops.permission_prefix+"edit")?s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-success",attrs:{to:{name:t.xprops.route+".edit",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("edit")])]):t._e(),t._v(" "),t.$can(t.xprops.permission_prefix+"delete")?s("a",{staticClass:"btn btn-just-icon btn-round btn-link text-rose",attrs:{href:"#",type:"button"},on:{click:function(e){return e.preventDefault(),t.destroyData(t.row.id)}}},[s("i",{staticClass:"material-icons"},[t._v("delete")])]):t._e()],1)}),[],!1,null,null,null);e.a=i.exports},DQi7:function(t,e,s){var n=s("Fiyb");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,r);n.locals&&(t.exports=n.locals)},Fiyb:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".badge[data-v-211360dd]{font-size:.875rem;font-weight:500;text-transform:none}",""])},Pj5m:function(t,e,s){"use strict";s("wCGv")},f8y5:function(t,e,s){"use strict";s("C+fe")},gZrl:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".badge[data-v-63040303]{font-size:.875rem;font-weight:500;text-transform:none}",""])},nVY4:function(t,e,s){"use strict";var n={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},r=(s("CZQh"),s("KHd+")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.row[t.entry.key],(function(e,n){return s("span",{key:n,staticClass:"badge badge-pill badge-azure mr-1"},[t._v("\n    "+t._s(e[t.entry.field])+"\n  ")])})),t._v(" "),0===t.row[t.entry.key].length?s("span",{staticClass:"badge badge-pill badge-orange"},[t._v("\n    Not Assigned\n  ")]):t._e()],2)}),[],!1,null,"211360dd",null);e.a=i.exports},oW8z:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".check[data-v-d92f9e34]{opacity:1!important}.form-check .form-check-label[data-v-d92f9e34]{cursor:default!important}",""])},srnm:function(t,e,s){"use strict";s.r(e);var n=s("L2JU"),r=s("D6y7");s("6poT"),s("nVY4"),s("8pV7"),s("9pPG");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={data:function(){return{columns:[{title:"ID",field:"id",sortable:!0,colStyle:"width: 50px;"},{title:"Name",field:"name",sortable:!0},{title:"Admission Number",field:"admission_number"},{title:"Date of  Birth",field:"dob"},{title:"Actions",tdComp:r.a,visible:!0,thClass:"text-right",tdClass:"text-right td-actions",colStyle:"width: 150px;"}],query:{sort:"id",order:"desc",limit:100},xprops:{module:"StudentsIndex",route:"students",permission_prefix:"student_"}}},beforeDestroy:function(){this.resetState()},computed:a({},Object(n.c)("StudentsIndex",["data","total","loading"])),watch:{query:{handler:function(t){t.page=(t.offset+t.limit)/t.limit,this.setQuery(t),this.fetchIndexData()},deep:!0}},methods:a({},Object(n.b)("StudentsIndex",["fetchIndexData","setQuery","resetState"]))},l=s("KHd+"),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[t.$can(t.xprops.permission_prefix+"create")?s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:t.xprops.route+".create"}}},[s("i",{staticClass:"material-icons"},[t._v("\n              add\n            ")]),t._v("\n            Add new\n          ")]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-default",class:{disabled:t.loading},attrs:{type:"button",disabled:t.loading},on:{click:t.fetchIndexData}},[s("i",{staticClass:"material-icons",class:{"fa-spin":t.loading}},[t._v("\n              refresh\n            ")]),t._v("\n            Refresh\n          ")])],1),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"table-overlay"},[s("div",{staticClass:"table-overlay-container"},[s("material-spinner"),t._v(" "),s("span",[t._v("Loading...")])],1)]),t._v(" "),s("datatable",{attrs:{tblClass:"table",columns:t.columns,data:t.data,total:t.total,query:t.query,xprops:t.xprops,pageSizeOptions:[10,25,50,100]}})],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-primary card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("assignment")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("Students Table")])])}],!1,null,null,null);e.default=d.exports},wCGv:function(t,e,s){var n=s("oW8z");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,r);n.locals&&(t.exports=n.locals)}}]);