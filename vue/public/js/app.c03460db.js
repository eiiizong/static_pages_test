(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/test/vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"0019":function(t,e,s){"use strict";var a=s("f197"),n=s.n(a);n.a},"123c":function(t,e,s){t.exports=s.p+"public/img/home-bg-01.f1f1d957.jpg"},1258:function(t,e,s){},"15be":function(t,e,s){},"1fc7":function(t,e,s){"use strict";var a=s("c218"),n=s.n(a);n.a},"28da":function(t,e,s){},2939:function(t,e,s){"use strict";var a=s("76a8"),n=s.n(a);n.a},"2c54":function(t,e,s){"use strict";var a=s("66ba"),n=s.n(a);n.a},"31ae":function(t,e,s){"use strict";var a=s("b2e3"),n=s.n(a);n.a},"32bb":function(t,e,s){"use strict";var a=s("9795"),n=s.n(a);n.a},"34ca":function(t,e,s){"use strict";var a=s("b841"),n=s.n(a);n.a},"3e0c":function(t,e,s){"use strict";var a=s("15be"),n=s.n(a);n.a},"4d5d":function(t,e,s){"use strict";var a=s("9c65"),n=s.n(a);n.a},"5c48":function(t,e,s){},"66ba":function(t,e,s){},7618:function(t,e,s){"use strict";var a=s("28da"),n=s.n(a);n.a},"76a8":function(t,e,s){},7702:function(t,e,s){},"7c55":function(t,e,s){"use strict";var a=s("5c48"),n=s.n(a);n.a},"8ff5":function(t,e,s){"use strict";var a=s("b93c"),n=s.n(a);n.a},9795:function(t,e,s){},"9c65":function(t,e,s){},b04c:function(t,e,s){t.exports=s.p+"public/img/record-banner-01.112ba0b3.jpg"},b2e3:function(t,e,s){},b37a:function(t,e,s){},b841:function(t,e,s){},b93c:function(t,e,s){},c10c:function(t,e,s){"use strict";var a=s("b37a"),n=s.n(a);n.a},c218:function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r={name:"App"},o=r,c=(s("7c55"),s("2877")),l=Object(c["a"])(o,n,i,!1,null,null,null),u=l.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("TopNav",{attrs:{topData:t.topData}}),s("div",{staticClass:"content"},[s("router-view")],1),s("BottomNav")],1)},m=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-nav"},[s("div",{staticClass:"content",style:{backgroundColor:t.topData.bgc,color:t.topData.color}},[t.topData.hasGoBack?s("div",{staticClass:"btn-goback",on:{click:t.goBack}},[s("i",{staticClass:"icon-go-back",style:{color:t.topData.color}})]):t._e(),s("div",{staticClass:"text-warrper"},[s("span",[t._v(t._s(t.topData.title))])]),s("div",{staticClass:"right"})])])},v=[],C={name:"topNav",props:{topData:Object,required:!0},data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}}},h=C,b=(s("d411"),Object(c["a"])(h,f,v,!1,null,"e31470ea",null)),_=b.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"bottom-nav"},[t.nav?s("ul",{staticClass:"clearfix"},t._l(t.nav,function(e){return s("li",{key:e.index},[s("router-link",{attrs:{to:e.path}},[s("i",{staticClass:"icon",class:e.className}),s("span",[t._v(t._s(e.name))])])],1)}),0):t._e()])},g=[],y="icon-bottom-nav-",x={name:"bottomNav",data:function(){return{nav:[{index:0,path:"/",name:"首页",className:y+"one"},{index:1,path:"/task",name:"社群任务",className:y+"two"},{index:2,path:"/realTime",name:"实时播报",className:y+"three"},{index:3,path:"/my",name:"个人中心",className:y+"four"}]}}},P=x,k=(s("4d5d"),Object(c["a"])(P,w,g,!1,null,"72d6c66c",null)),N=k.exports,$={name:"Index",data:function(){return{topData:{title:"首页",hasGoBack:!1,bgc:"",color:""}}},created:function(){this.topData.title=this.$route.meta.title},components:{TopNav:_,BottomNav:N},watch:{$route:function(t,e){this.topData.title=t.meta.title}}},E=$,S=(s("3e0c"),Object(c["a"])(E,p,m,!1,null,null,null)),j=S.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"banner"},[t._m(0),s("div",{staticClass:"ad"},[s("div",{staticClass:"bg"},[s("h2",{staticClass:"title"},[t._v("做任务·得佣金")]),s("p",{staticClass:"red"},[t._v("做对的投资，赚更多的钱")]),s("p",[t._v("邀请新人成为你的组员，她赚你也赚")]),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:""}},[s("span",[t._v("了解更多")])])],1)])])]),s("nav",{staticClass:"nav"},[t.navData?s("ul",{staticClass:"clearfix"},t._l(t.navData,function(e,a){return s("li",{key:a},[s("router-link",{attrs:{to:e.path}},[s("i",{staticClass:"icon",class:e.iconClassName}),s("span",[t._v(t._s(e.name))])])],1)}),0):t._e()]),s("div",{staticClass:"news"},[s("h3",[t._v("今日热点")]),s("ul",[s("li",[s("h4",{staticClass:"text-one-ellipsis"},[t._v("成都某工地发现UFO")]),s("p",{staticClass:"text-two-ellipsis"},[t._v("这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容这是新闻内容...")]),s("div",{staticClass:"time clearfix"},[s("span",{staticClass:"left"},[t._v("发布于2018.09.01")]),s("div",{staticClass:"right"},[s("router-link",{attrs:{to:""}},[t._v("查看详情")])],1)])])])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-warrper"},[a("img",{attrs:{src:s("123c"),alt:""}})])}],T={name:"index",data:function(){return{navData:[{path:"/recommendedStudents",name:"推荐学员",iconClassName:"icon-recommended-students"},{path:"/buyCourse",name:"课程购买",iconClassName:"icon-buy-course"},{path:"/studentsGrades",name:"学员等级",iconClassName:"icon-students-grades"},{path:"/aboutUs",name:"关于我们",iconClassName:"icon-about-us"},{path:"/communityProducts",name:"社群产品",iconClassName:"icon-community-products"},{path:"/localCommunity",name:"各地社群",iconClassName:"icon-local-community"}]}},components:{}},R=T,A=(s("32bb"),Object(c["a"])(R,O,D,!1,null,"56976a15",null)),I=A.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task"},[t._v("\n  task\n")])},G=[],M={name:"Task",data:function(){return{}},components:{}},F=M,J=(s("fb87"),Object(c["a"])(F,B,G,!1,null,"2ec2eb68",null)),U=J.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my"},[t._v("\n  my\n")])},H=[],L={name:"My",data:function(){return{}},components:{}},W=L,z=(s("0019"),Object(c["a"])(W,q,H,!1,null,"69b7c13e",null)),K=z.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"real-time"},[t._v("\n  real-time\n")])},V=[],X={name:"RealTime",data:function(){return{}},components:{}},Y=X,Z=(s("f30f"),Object(c["a"])(Y,Q,V,!1,null,"8d8d4b70",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-sign"},[s("h1",[t._v("登录")]),s("form",{staticClass:"form",attrs:{action:""}},[t._m(0),s("div",{staticClass:"input-warpper"},[t._m(1),s("input",{staticClass:"input",attrs:{id:"password",type:t.isPassword?"password":"text",placeholder:"请输入登录密码"}}),s("i",{staticClass:"icon icon-see-password",class:t.isPassword?"":"active",on:{click:t.seePassword}})]),s("div",{staticClass:"btn-warpper"},[s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.login}},[t._v("登录")])]),s("div",{staticClass:"link clearfix"},[s("router-link",{staticClass:"left",attrs:{to:"/forgetPassword"}},[s("span",[t._v("忘记密码？")])]),s("router-link",{staticClass:"right",attrs:{to:"/sign"}},[s("span",[t._v("没有账号，去注册？")])])],1)])])},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-warpper"},[s("label",{attrs:{for:"tel"}},[s("i",{staticClass:"icon icon-tel"})]),s("input",{staticClass:"input",attrs:{type:"number",id:"tel",placeholder:"请输入手机号"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"password"}},[s("i",{staticClass:"icon icon-password"})])}],at={name:"login",data:function(){return{isPassword:!0}},methods:{seePassword:function(){this.isPassword=!this.isPassword,console.log(this)},login:function(){this.$router.push({path:"/"})}}},nt=at,it=(s("31ae"),Object(c["a"])(nt,et,st,!1,null,null,null)),rt=it.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-sign"},[s("h1",[t._v("注册")]),s("form",{staticClass:"form",attrs:{action:""}},[t._m(0),s("div",{staticClass:"input-warpper get-code"},[t._m(1),s("input",{staticClass:"input",attrs:{type:"number",id:"verificationCode",placeholder:"请输入验证码"}}),s("div",{staticClass:"btn-warpper send-code"},[s("button",{staticClass:"btn",attrs:{type:"button",disabled:t.isSendCode},on:{click:t.sendCode}},[t.isSendCode?s("span",[t._v("已发送("+t._s(t.timeNumber)+"s)")]):s("span",[t._v("发送验证码")])])])]),s("div",{staticClass:"input-warpper"},[t._m(2),s("input",{staticClass:"input",attrs:{type:t.isPassword?"password":"text",id:"password",placeholder:"请输入密码"}}),s("i",{staticClass:"icon icon-see-password",class:t.isPassword?"":"active",on:{click:t.seePassword}})]),s("div",{staticClass:"input-warpper"},[t._m(3),s("input",{staticClass:"input",attrs:{type:t.isPassword?"password":"text",id:"passwordAgain",placeholder:"请再次输入密码"}})]),t._m(4),t._m(5),s("div",{staticClass:"link clearfix"},[s("router-link",{staticClass:"right",attrs:{to:"/"}},[s("span",[t._v("已有账号，去登录")])])],1)])])},ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-warpper"},[s("label",{attrs:{for:"tel"}},[s("i",{staticClass:"icon icon-tel"})]),s("input",{staticClass:"input",attrs:{type:"number",id:"tel",placeholder:"请输入手机号"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"verificationCode"}},[s("i",{staticClass:"icon icon-verification-code"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"password"}},[s("i",{staticClass:"icon icon-password"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"passwordAgain"}},[s("i",{staticClass:"icon icon-password"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-warpper"},[s("label",{attrs:{for:"inviteCode"}},[s("i",{staticClass:"icon icon-invite-code"})]),s("input",{staticClass:"input",attrs:{type:"text",id:"inviteCode",placeholder:"请输入邀请码"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btn-warpper"},[s("button",{staticClass:"btn",attrs:{type:"button"}},[t._v("注册")])])}],lt={name:"sign-in",data:function(){return{isPassword:!0,isSendCode:!1,timeNumber:60}},methods:{seePassword:function(){this.isPassword=!this.isPassword},sendCode:function(){var t,e=this;this.isSendCode=!this.isSendCode;this.num;t=setInterval(function(){e.timeNumber--,-1===e.timeNumber&&(clearInterval(t),e.isSendCode=!e.isSendCode,e.timeNumber=60)},1e3)}}},ut=lt,dt=(s("c10c"),Object(c["a"])(ut,ot,ct,!1,null,null,null)),pt=dt.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-sign"},[s("h1",[t._v("重置密码")]),s("form",{staticClass:"form",attrs:{action:""}},[t._m(0),s("div",{staticClass:"input-warpper get-code"},[t._m(1),s("input",{staticClass:"input",attrs:{type:"number",id:"verificationCode",placeholder:"请输入验证码"}}),s("div",{staticClass:"btn-warpper send-code"},[s("button",{staticClass:"btn",attrs:{type:"button",disabled:t.isSendCode},on:{click:t.sendCode}},[t.isSendCode?s("span",[t._v("已发送("+t._s(t.timeNumber)+"s)")]):s("span",[t._v("发送验证码")])])])]),s("div",{staticClass:"input-warpper"},[t._m(2),s("input",{staticClass:"input",attrs:{type:t.isPassword?"password":"text",id:"password",placeholder:"请输入密码"}}),s("i",{staticClass:"icon icon-see-password",class:t.isPassword?"":"active",on:{click:t.seePassword}})]),s("div",{staticClass:"input-warpper"},[t._m(3),s("input",{staticClass:"input",attrs:{type:t.isPassword?"password":"text",id:"passwordAgain",placeholder:"请再次输入密码"}})]),t._m(4),s("div",{staticClass:"link clearfix"},[s("router-link",{staticClass:"right",attrs:{to:"/"}},[s("span",[t._v("已有账号，去登录")])])],1)])])},ft=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-warpper"},[s("label",{attrs:{for:"tel"}},[s("i",{staticClass:"icon icon-tel"})]),s("input",{staticClass:"input",attrs:{type:"number",id:"tel",placeholder:"请输入手机号"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"verificationCode"}},[s("i",{staticClass:"icon icon-verification-code"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"password"}},[s("i",{staticClass:"icon icon-password"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"passwordAgain"}},[s("i",{staticClass:"icon icon-password"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btn-warpper"},[s("button",{staticClass:"btn",attrs:{type:"button"}},[t._v("确定")])])}],vt={name:"sign-in",data:function(){return{isPassword:!0,isSendCode:!1,timeNumber:60}},methods:{seePassword:function(){this.isPassword=!this.isPassword},sendCode:function(){var t,e=this;this.isSendCode=!this.isSendCode;this.num;t=setInterval(function(){e.timeNumber--,-1===e.timeNumber&&(clearInterval(t),e.isSendCode=!e.isSendCode,e.timeNumber=60)},1e3)}}},Ct=vt,ht=Object(c["a"])(Ct,mt,ft,!1,null,null,null),bt=ht.exports,_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-records"},[s("TopNav",{attrs:{topData:t.topData}}),t._m(0),s("RecordNav"),s("div",{staticClass:"content"},[s("router-view")],1)],1)},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("ul",{staticClass:"item"},[a("li",{staticClass:"img-warrper"},[a("img",{attrs:{src:s("b04c"),alt:""}})])])])}],gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.routes?s("nav",{staticClass:"record-nav"},[s("ul",{staticClass:"clearfix"},t._l(t.routes,function(e,a){return s("li",{key:a},[s("router-link",{attrs:{to:e.path}},[s("span",[t._v(" "+t._s(e.name)+" ")])])],1)}),0)]):t._e()},yt=[],xt="/accountRecords/",Pt={name:"RecordNav",props:{},data:function(){return{routes:[{path:xt,name:"任务获取"},{path:xt+"buyCourse",name:"课程购买"},{path:xt+"withdraw",name:"提取"},{path:xt+"four",name:"记录"}]}},methods:{}},kt=Pt,Nt=(s("1fc7"),Object(c["a"])(kt,gt,yt,!1,null,"c0c6b432",null)),$t=Nt.exports,Et={name:"accountRecords",data:function(){return{topData:{title:"账户记录",hasGoBack:!0,bgc:"#fff",color:"#000"}}},methods:{},components:{TopNav:_,RecordNav:$t}},St=Et,jt=(s("f04f"),Object(c["a"])(St,_t,wt,!1,null,"e6799e2a",null)),Ot=jt.exports,Dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"records-buy-course"},[s("Card")],1)},Tt=[],Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.d?s("nav",{staticClass:"card"},[s("ul",t._l(t.d,function(e,a){return s("li",{key:a},[t._m(0,!0),s("p",{staticClass:"text-one-ellipsis"},[t._v("下载某某APP获得相对佣金，可邀请组员一起下载某某APP获得相对佣金，可邀请组员一起...")]),s("div",{staticClass:"clearfix link"},[s("div",{staticClass:"left"},[t._v("今天 12:34")]),s("div",{staticClass:"right"},[s("router-link",{attrs:{to:"/"}},[s("span",[t._v("查看详情")]),s("i",{staticClass:"icon icon-db-link"})])],1)])])}),0)]):t._e()},At=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title clearfix"},[s("span",{staticClass:"left text-one-ellipsis"},[t._v("下载某某APP")])])}],It={name:"RecordNav",props:{},data:function(){return{d:[{title:"2323",name:"任务获取"}]}},methods:{}},Bt=It,Gt=(s("34ca"),Object(c["a"])(Bt,Rt,At,!1,null,"14b3b948",null)),Mt=Gt.exports,Ft={name:"RecordsBuyCourse",data:function(){return{}},created:function(){},methods:{},components:{Card:Mt}},Jt=Ft,Ut=(s("2c54"),Object(c["a"])(Jt,Dt,Tt,!1,null,null,null)),qt=Ut.exports,Ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"records-withdraw"},[t._v("\n  records-withdraw\n")])},Lt=[],Wt={name:"task",data:function(){return{isPassword:!0,isSendCode:!1,timeNumber:60}},created:function(){},methods:{seePassword:function(){this.isPassword=!this.isPassword},sendCode:function(){var t,e=this;this.isSendCode=!this.isSendCode;this.num;t=setInterval(function(){e.timeNumber--,-1===e.timeNumber&&(clearInterval(t),e.isSendCode=!e.isSendCode,e.timeNumber=60)},1e3)}}},zt=Wt,Kt=(s("8ff5"),Object(c["a"])(zt,Ht,Lt,!1,null,null,null)),Qt=Kt.exports,Vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"records-get-task"},[t.pageData?s("div",{staticClass:"records"},t._l(t.pageData,function(t,e){return s("Card",{key:e})}),1):s("div",{staticClass:"no-records"},[s("p",[t._v("暂无数据")])])])},Xt=[],Yt={name:"RecordsGetTask",data:function(){return{pageData:[{id:0,title:"下载APP获佣金",content:"下载某某APP获得相对佣金，可邀请组员一起...",deta:"12:34"},{},{},{},{},{}]}},created:function(){},methods:{},components:{Card:Mt}},Zt=Yt,te=(s("7618"),Object(c["a"])(Zt,Vt,Xt,!1,null,null,null)),ee=te.exports,se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"records-buy-course"},[t._v("\n  records-buy-course\n")])},ae=[],ne={name:"task",data:function(){return{isPassword:!0,isSendCode:!1,timeNumber:60}},created:function(){},methods:{seePassword:function(){this.isPassword=!this.isPassword},sendCode:function(){var t,e=this;this.isSendCode=!this.isSendCode;this.num;t=setInterval(function(){e.timeNumber--,-1===e.timeNumber&&(clearInterval(t),e.isSendCode=!e.isSendCode,e.timeNumber=60)},1e3)}},components:{TopNav:_}},ie=ne,re=(s("2939"),Object(c["a"])(ie,se,ae,!1,null,null,null)),oe=re.exports;a["a"].use(d["a"]);var ce=[{path:"/",name:"Index",component:j,children:[{path:"",name:"Home",component:I,meta:{title:"首页"}},{path:"my",name:"My",component:K,meta:{title:"个人中心"}},{path:"realTime",name:"RealTime",component:tt,meta:{title:"实时播报"}},{path:"task",name:"task",component:U,meta:{title:"社群任务"}}]},{path:"/accountRecords",component:Ot,meta:{title:"账户记录"},children:[{path:"",name:"GetTask",component:ee,meta:{title:"账户记录"}},{path:"buyCourse",name:"RecordsBuyCourse",component:qt,meta:{title:"账户记录"}},{path:"withdraw",name:"RecordsWithdraw",component:Qt,meta:{title:"账户记录"}},{path:"four",name:"RecordsFour",component:oe,meta:{title:"账户记录"}}]},{path:"/login",name:"Login",component:rt,meta:{title:"登录"}},{path:"/sign",name:"Sign",component:pt,meta:{title:"注册"}},{path:"/forgetPassword",name:"ForgetPassword",component:bt,meta:{title:"重置密码"}}],le=new d["a"]({mode:"history",base:"/test/vue/",routes:ce}),ue=s("2f62");a["a"].use(ue["a"]);var de=new ue["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,le.beforeEach(function(t,e,s){t.meta.title&&(document.title=t.meta.title),s()}),new a["a"]({router:le,store:de,render:function(t){return t(u)}}).$mount("#app")},d09f:function(t,e,s){},d411:function(t,e,s){"use strict";var a=s("1258"),n=s.n(a);n.a},ee41:function(t,e,s){},f04f:function(t,e,s){"use strict";var a=s("d09f"),n=s.n(a);n.a},f197:function(t,e,s){},f30f:function(t,e,s){"use strict";var a=s("ee41"),n=s.n(a);n.a},fb87:function(t,e,s){"use strict";var a=s("7702"),n=s.n(a);n.a}});
//# sourceMappingURL=app.c03460db.js.map