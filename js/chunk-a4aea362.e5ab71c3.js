(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4aea362"],{"4d44":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"DashboardAppeals"},[a("div",{staticClass:"container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!0,data:t.appeals,"default-sort":{prop:"created_at",order:"descending"},"row-key":"id"},on:{"row-click":t.showAppeal}},[a("el-table-column",{attrs:{prop:"id",label:"№",width:"80"}}),a("el-table-column",{attrs:{formatter:t.formatDate,label:"Создано",sortable:"",prop:"created_at"}}),a("el-table-column",{attrs:{prop:"user.email",label:"Автор"}}),a("el-table-column",{attrs:{label:"Текст"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"truncate"},[t._v(t._s(e.row.description))])]}}])})],1)],1),a("el-dialog",{attrs:{visible:t.showAppealDialog,title:"№ "+t.appeal.id},on:{"update:visible":function(e){t.showAppealDialog=e}}},[a("h4",[t._v("Текст обращения")]),a("p",[t._v("\n      "+t._s(t.appeal.description)+"\n    ")]),a("h4",[t._v("Предложенные решения")]),a("p",[t._v("\n      "+t._s(t.appeal.proposal)+"\n    ")]),t.appeal.attachments.length>0?[a("h4",[t._v("Вложения")]),t._l(t.appeal.attachments,function(e,n){return a("div",{key:e.id},[a("a",{attrs:{href:t.getUrl(e.attachment_url),target:"_blank"}},[t._v("\n          Вложение №"+t._s(n+1)+"\n        ")])])})]:t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"warning"},on:{click:t.delAppeal}},[t._v("Удалить")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showAppealDialog=!1}}},[t._v("Закрыть")])],1)],2)],1)},r=[],s=(a("96cf"),a("1da1")),i=a("b166"),l={name:"DashboardAppeals",data:function(){return{appeals:null,appeal:{attachments:[]},showAppealDialog:!1}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getAppeals();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{getAppeals:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("civil_appeals");case 2:e=t.sent,this.appeals=e.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),formatDate:function(t,e,a){return Object(i["a"])(a,"dd.MM.yyyy, HH:mm")},showAppeal:function(t){this.appeal=t,this.showAppealDialog=!0},getUrl:function(t){return t?"".concat("//psk35.int.netintel.ru:32713").concat(t):""},delAppeal:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$confirm("Обращение будет удалено. Вы уверены?","Удаление обращения",{confirmButtonText:"Удалить",cancelButtonText:"Отменить",type:"warning"});case 3:return t.next=5,this.$http.delete("/civil_appeals/".concat(this.appeal.id));case 5:this.$message.success("Вы удалили обращение"),this.showAppealDialog=!1,this.appeals=this.appeals.filter(function(t){var a=t.id;return a!==e.appeal.id}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.$message.warning("Обращение не было удалено.");case 13:case"end":return t.stop()}},t,this,[[0,10]])}));return function(){return t.apply(this,arguments)}}()}},p=l,o=(a("ebe3"),a("2877")),c=Object(o["a"])(p,n,r,!1,null,"979f1750",null);c.options.__file="DashboardAppeals.vue";e["default"]=c.exports},"907a":function(t,e,a){},ebe3:function(t,e,a){"use strict";var n=a("907a"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-a4aea362.e5ab71c3.js.map