webpackJsonp([1],{HZb1:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"topbar"}},[e("div",{staticClass:"logo"},[this._v("VueResumer")]),this._v(" "),e("div",{staticClass:"actions"},[e("el-button",[this._v("登录")]),this._v(" "),e("el-button",{attrs:{type:"primary"}},[this._v("注册")])],1)])},staticRenderFns:[]};var n=s("VU/8")(null,i,!1,function(t){s("OVoA")},"data-v-1b6b9288",null).exports,a=s("fZjL"),o=s.n(a),c={props:["title","items","labels","action"],computed:{Keys:function(){return this.items instanceof Array?o()(this.items[0]):this.items},Action:function(){return!("false"===this.action)},IsList:function(){return this.items instanceof Array}},methods:{addItem:function(){var t={};this.Keys.map(function(e){t[e]=""}),this.items.push(t)},removeItem:function(t){0!==t&&this.items.splice(t,1)}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v(t._s(t.title))]),t._v(" "),t.IsList?s("el-form",[t._l(t.items,function(e,r){return s("div",{key:r,staticClass:"container"},[t._l(t.Keys,function(e){return s("el-form-item",{key:e,attrs:{label:t.labels[e]}},[s("el-input",{model:{value:t.items[e],callback:function(s){t.$set(t.items,e,s)},expression:"items[key]"}})],1)}),t._v(" "),t.Action?s("i",{staticClass:"el-icon-delete",on:{click:function(e){t.removeItem(r)}}}):t._e(),t._v(" "),s("hr")],2)}),t._v(" "),t.Action?s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addItem()}}},[t._v("添加")]):t._e()],2):s("el-form",[s("div",{staticClass:"container"},t._l(t.items,function(e,r){return s("el-form-item",{key:r,attrs:{label:t.labels[r]}},[s("el-input",{model:{value:t.items[r],callback:function(e){t.$set(t.items,r,e)},expression:"items[k]"}})],1)}))])],1)},staticRenderFns:[]},u={components:{ItemsEditor:s("VU/8")(c,l,!1,null,null,null).exports},props:["resume"],data:function(){return{currentTab:0,icons:["cardid","work","book","zan1","icon--","dianhua1"]}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"editor"}},[s("nav",[s("ol",t._l([0,1,2,3,4,5],function(e){return s("li",{key:e,class:{active:t.currentTab===e},on:{click:function(s){t.currentTab=e}}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":"#icon-"+t.icons[e]}})])])}))]),t._v(" "),s("main",[s("ol",[s("li",{class:{active:0===t.currentTab}},[s("ItemsEditor",{attrs:{items:t.resume.profile,title:"个人信息",labels:t.resume.profileLabels,action:"false"}})],1),t._v(" "),s("li",{class:{active:1===t.currentTab}},[s("ItemsEditor",{attrs:{items:t.resume.workHistory,title:"工作经历",labels:t.resume.workLabels}})],1),t._v(" "),s("li",{class:{active:2===t.currentTab}},[s("ItemsEditor",{attrs:{items:t.resume.studyHistory,title:"学习经历",labels:t.resume.studyLabels}})],1),t._v(" "),s("li",{class:{active:3===t.currentTab}},[s("ItemsEditor",{attrs:{items:t.resume.projectHistory,title:"项目经历",labels:t.resume.projectLabels}})],1),t._v(" "),s("li",{class:{active:4===t.currentTab}},[s("ItemsEditor",{attrs:{items:t.resume.awardsHistory,title:"获奖情况",labels:t.resume.awardsLabels}})],1),t._v(" "),s("li",{class:{active:5===t.currentTab}},[s("ItemsEditor",{attrs:{items:t.resume.contact,title:"联系方式",labels:t.resume.contactLabels,action:"false"}})],1)])])])},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"preview"}},[s("h1",[t._v(t._s(t.resume.profile.name))]),t._v(" "),s("p",[t._v(t._s(t.resume.profile.city)+" | "+t._s(t.resume.profile.birth))])])},staticRenderFns:[]};var f={name:"App",components:{Topbar:n,Editor:s("VU/8")(u,m,!1,function(t){s("a7aM")},null,null).exports,Preview:s("VU/8")({props:["resume"],methods:{fitrer:function(t){var e=this;return t.fitrer(function(s){return!e.isEmpty(t)})},isEmpty:function(t){var e=!0;for(var s in t)if(t[s]){e=!1;break}return e}}},d,!1,function(t){s("gbwJ")},"data-v-2fa80fd0",null).exports},data:function(){return{resume:{profile:{name:"",city:"",birth:""},profileLabels:{name:"姓名",city:"城市",birth:"出生年月"},workHistory:[{company:"",content:""}],workLabels:{company:"公司",content:"工作内容"},studyHistory:[{school:"",duration:"",degree:""}],studyLabels:{school:"就读学校",duration:"时间",degree:"学位"},projectHistory:[{name:"",content:""}],projectLabels:{name:"项目",content:"内容"},awardsHistory:[{name:"",descr:""}],awardsLabels:{name:"获得奖项",descr:"描述"},contact:{phone:"",email:"",address:""},contactLabels:{phone:"手机",email:"邮箱",address:"地址"}}}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Topbar",{staticClass:"topbar"}),this._v(" "),e("main",[e("Editor",{staticClass:"editor",attrs:{resume:this.resume}}),this._v(" "),e("Preview",{staticClass:"preview",attrs:{resume:this.resume}})],1)],1)},staticRenderFns:[]};var p=s("VU/8")(f,v,!1,function(t){s("HZb1")},null,null).exports,b=(s("uMhA"),s("NcP2"),s("zL8q")),_=s.n(b);s("tvR6");r.default.use(_.a),r.default.config.productionTip=!1,new r.default({el:"#app",components:{App:p},template:"<App/>"})},NcP2:function(t,e){},OVoA:function(t,e){},a7aM:function(t,e){},gbwJ:function(t,e){},tvR6:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.89559c10664b6c7c1e9b.js.map