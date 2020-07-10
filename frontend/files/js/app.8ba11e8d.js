(function(e){function t(t){for(var n,r,l=t[0],d=t[1],s=t[2],c=0,f=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var d=a[l];0!==i[d]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.queues,"sort-by":"_id"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"grey lighten-4"}},[a("v-toolbar-title",[e._v("Monitored Queues")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),n),[e._v("Add new Queue")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Queue ID"},model:{value:e.editedItem._id,callback:function(t){e.$set(e.editedItem,"_id",t)},expression:"editedItem._id"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Queue GUID"},model:{value:e.editedItem.queue,callback:function(t){e.$set(e.editedItem,"queue",t)},expression:"editedItem.queue"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Enabled"},model:{value:e.editedItem.enabled,callback:function(t){e.$set(e.editedItem,"enabled",t)},expression:"editedItem.enabled"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"item.status",fn:function(t){var n=t.item;return[a("v-switch",{staticClass:"ma-2",attrs:{label:"","input-value":n.enabled},on:{change:function(t){return e.toggleItem(n.enabled,n._id)}},model:{value:n.enabled,callback:function(t){e.$set(n,"enabled",t)},expression:"item.enabled"}},[e._v(" mdi-dense ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})],1)],1)},o=[],r=(a("c740"),a("c975"),a("a434"),{data:function(){return{dialog:!1,headers:[{text:"Queue ID",align:"start",sortable:!1,value:"_id"},{text:"GUID",value:"queue"},{text:"Name",value:"name"},{text:"Enabled",value:"status",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],queues:[],editedIndex:-1,editedItem:{_id:"",queue:"",name:"",enabled:!1},defaultItem:{_id:"",queue:"",name:"",enabled:!1}}},computed:{formTitle:function(){return-1===this.editedIndex?"Add new queue for monitoring":"Edit queue"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.queues=[{queue:"7986b8f4-6035-4280-8adf-40244ce4ba10",name:"testi3",enabled:!0,_id:"JCpK6TAoPXBR5jR6"},{queue:"7986b8f3-6035-4280-8adf-40244ce4ba10",name:"testi2",enabled:!0,_id:"NuDZNukzbv8k8mpo"},{queue:"7986b8f5-6035-4280-8adf-40244ce4ba10",name:"testi5",enabled:!0,_id:"TCDfzBtf4yfZNHZg"},{queue:"7986b8f2-6035-4280-8adf-40244ce4ba10",name:"testi1",enabled:!1,_id:"XCayEJ5G0bNez94i"}]},toggleItem:function(e,t){console.log(e,t);var a=this.queues.findIndex((function(e){return e._id===t}));console.log(a),console.log(this.queues[a].enabled)},editItem:function(e){this.editedIndex=this.queues.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.queues.indexOf(e);confirm("Are you sure you want to delete this queue?")&&this.queues.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.queues[this.editedIndex],this.editedItem):this.queues.push(this.editedItem),this.close()}}}),l=r,d=a("2877"),s=a("6544"),u=a.n(s),c=a("7496"),f=a("8336"),v=a("b0af"),m=a("99d9"),b=a("62ad"),p=a("a523"),h=a("8fea"),x=a("169a"),g=a("ce7e"),I=a("132d"),_=a("0fd9"),y=a("2fa4"),k=a("b73d"),q=a("8654"),w=a("71d9"),V=a("2a7f"),O=Object(d["a"])(l,i,o,!1,null,null,null),C=O.exports;u()(O,{VApp:c["a"],VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:b["a"],VContainer:p["a"],VDataTable:h["a"],VDialog:x["a"],VDivider:g["a"],VIcon:I["a"],VRow:_["a"],VSpacer:y["a"],VSwitch:k["a"],VTextField:q["a"],VToolbar:w["a"],VToolbarTitle:V["a"]});var T=a("f309");n["a"].use(T["a"]);var j=new T["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:j,render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.8ba11e8d.js.map