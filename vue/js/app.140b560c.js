(function(t){function e(e){for(var n,c,r=e[0],l=e[1],o=e[2],d=0,p=[];d<r.length;d++)c=r[d],s[c]&&p.push(s[c][0]),s[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},i=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"232b":function(t,e,a){},"2d02":function(t,e,a){t.exports=a.p+"img/detail-bg.fd98c459.jpg"},"37c4":function(t,e,a){"use strict";var n=a("c25a"),s=a.n(n);s.a},"3afe":function(t,e,a){t.exports=a.p+"img/logo-big@2x.abdc7ba0.png"},"3bc8":function(t,e,a){"use strict";var n=a("e8b3"),s=a.n(n);s.a},4738:function(t,e,a){},"4a4c":function(t,e,a){},"4deb":function(t,e,a){"use strict";var n=a("232b"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],c=(a("5c0b"),a("2877")),r={},l=Object(c["a"])(r,s,i,!1,null,null,null),o=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("ul",[a("li",{staticClass:"common"},[t._m(1),a("div",{staticClass:"info"},[t._m(2),a("div",{staticClass:"btn-wrapper"},[a("router-link",{attrs:{to:"/demandsList"}},[a("span",{staticClass:"bg"}),a("span",[t._v("点击进入")])])],1)])]),a("li",{staticClass:"reverse"},[t._m(3),a("div",{staticClass:"info"},[t._m(4),a("div",{staticClass:"btn-wrapper"},[a("router-link",{attrs:{to:"/demandsList"}},[a("span",{staticClass:"bg"}),a("span",[t._v("点击进入")])])],1)])])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{src:a("3afe"),alt:"logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{src:a("ce80"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",[t._v("成都")]),a("span",[t._v("Chengdu")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{src:a("ce80"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",[t._v("成都")]),a("span",[t._v("Chengdu")])])}],v={name:"home",components:{}},f=v,m=(a("733b"),Object(c["a"])(f,d,p,!1,null,"72d27f8e",null)),h=m.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demands-list"},[a("TopNav",{attrs:{iconClassName:t.isShowSearch?"":"icon-filtrate",rightText:t.isShowSearch?"关闭":"筛选"},on:{click:t.showSearch}}),a("div",{staticClass:"content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowSearch,expression:"!isShowSearch"}]},[t._m(0),a("div",{staticClass:"nav"},[a("ul",[a("li",{class:0===t.navIndex?"active":""},[a("div",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.clickNavDemandsList(e)}}},[a("span",{staticClass:"bg"}),a("span",[t._v("需求清单(10)")])])]),a("li",{class:1===t.navIndex?"active":""},[a("div",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.clickNavGetsList(e)}}},[a("span",{staticClass:"bg"}),a("span",[t._v("供给清单(5)")])])])])]),a("div",{staticClass:"list"},[a("ul",t._l(t.cardData,function(e,n){return a("li",{key:e.id},[a("Card",{attrs:{data:e},on:{click:function(e){return t.linkNav(n)}}})],1)}),0)])])]),t.isShowSearch?a("div",[a("Search")],1):t._e()],1)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{src:a("3afe"),alt:"logo"}})])}],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-nav"},[a("div",{staticClass:"left",on:{click:t.goBack}},[a("i",{staticClass:"icon icon-back"})]),a("div",{staticClass:"right",on:{click:function(e){return t.$emit("click")}}},[t.iconClassName?a("i",{staticClass:"icon",class:t.iconClassName}):t._e(),t.rightText?a("span",[t._v(t._s(t.rightText))]):t._e()])])},g=[],k={name:"top-nav",props:{iconClassName:{type:String},rightText:{type:String}},methods:{goBack:function(){this.$router.go(-1)}}},x=k,y=(a("3bc8"),Object(c["a"])(x,C,g,!1,null,"17b0ef92",null)),w=y.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data?a("div",{staticClass:"card",class:t.className?t.className:"",on:{click:function(e){return t.$emit("click")}}},[a("div",{staticClass:"border-bg"}),a("div",{staticClass:"content"},[a("div",{staticClass:"left"},[a("i",{staticClass:"icon",class:t.data.iconClassName})]),a("div",{staticClass:"right"},[a("p",[t._v(t._s(t.data.title))]),a("span",[t._v(t._s(t.data.desc))])])])]):t._e()},S=[],$={name:"card",props:{className:{type:String,default:""},data:{type:Object}}},T=$,E=(a("d06e"),Object(c["a"])(T,N,S,!1,null,"65c0bccd",null)),j=E.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[t._m(0),a("div",{staticClass:"item"},[a("h3",[t._v("需求名目")]),a("div",{staticClass:"checkbox-group"},t._l(6,function(e,n){return a("label",{key:n,attrs:{for:"xqml"+n}},[a("input",{attrs:{type:"checkbox",id:"xqml"+n}}),a("span",[t._v("基础设施建设")])])}),0)]),a("div",{staticClass:"item"},[a("h3",[t._v("类别")]),a("div",{staticClass:"checkbox-group"},t._l(6,function(e,n){return a("label",{key:n,attrs:{for:"type"+n}},[a("input",{attrs:{type:"checkbox",id:"type"+n}}),a("span",[t._v("建设")])])}),0)]),t._m(1)])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-wrapper"},[a("input",{attrs:{type:"text",placeholder:"产品需求"}}),a("button",[t._v("搜索")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-wrapper"},[a("button",[t._v("搜索")])])}],L={name:"search",props:{}},P=L,M=(a("4deb"),Object(c["a"])(P,O,D,!1,null,"25f129cf",null)),G=M.exports,I={name:"demands-list",data:function(){return{cardData:[{id:0,title:"服务实体经济",desc:"共35项"},{id:1,title:"服务实体经济",desc:"共35项"}],isShowSearch:!1,navIndex:0}},components:{TopNav:w,Card:j,Search:G},methods:{showSearch:function(){this.isShowSearch=!this.isShowSearch},linkNav:function(t){console.log(t),this.$router.push({path:"/choice"})},clickNavDemandsList:function(){this.navIndex=0,this.cardData=[{id:0,title:"服务实体经济",desc:"共35项"},{id:1,title:"服务实体经济",desc:"共35项"}]},clickNavGetsList:function(){this.navIndex=1,this.cardData=[{id:0,title:"服务实体经济",desc:"共30项"},{id:1,title:"服务实体经济",desc:"共30项"},{id:2,title:"服务实体经济",desc:"共30项"}]}}},q=I,B=(a("37c4"),Object(c["a"])(q,_,b,!1,null,"84cf0c1a",null)),J=B.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"choice"},[a("TopNav"),a("div",{staticClass:"content"},[a("div",{staticClass:"list"},[a("ul",t._l(t.cardData,function(e,n){return a("li",{key:e.id},[a("Card",{attrs:{className:"big",data:e},on:{click:function(e){return t.clickNav(n)}}})],1)}),0)])])],1)},z=[],F={name:"chioce",data:function(){return{cardData:[{id:1,iconClassName:"",title:"企业",desc:"Translate"},{id:2,iconClassName:"",title:"政府",desc:"Government"}]}},components:{TopNav:w,Card:j},methods:{clickNav:function(t){this.$router.push({path:"/demandsTypeList"})}}},H=F,K=(a("848d"),Object(c["a"])(H,A,z,!1,null,"5571af78",null)),Q=K.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demands-detail"},[a("TopNav",{attrs:{iconClassName:"icon-backMenu",rightText:"回到目录"},on:{click:t.backToMenu}}),a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"main"},[a("ul",t._l(t.detailData,function(e){return a("li",{key:e.id},[a("div",{staticClass:"left"},[t._v("【"+t._s(e.title)+"】")]),a("div",{staticClass:"right"},[a("span",[t._v(t._s(e.desc))]),e.contact?a("span",[t._v(t._s(e.contact))]):t._e()])])}),0)])]),a("Search")],1)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("img",{attrs:{src:a("2d02"),alt:"logo"}}),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[t._v("郫都区万云汇互联网娱乐云计算产业基地项目")]),n("div",{staticClass:"name"},[n("span",{staticClass:"tag"},[t._v("融资需求")]),n("span",[t._v("成都国民沃成半导体有限公司")])])])])}],V={name:"demands-list",data:function(){return{detailData:[{id:0,title:"需求需要",desc:"利用现有厂房62333.49平米，项目总投资1亿元，将建成3条产线1.6吋单晶碳化硅单晶衬底研发线年产6吋碳化硅衬底2000 片2.6外延片生产线：6寸氮化镓外延片 2万片/年8英寸Si-GaN（功率电子+LED）1万片/年；6 英寸 GaAS+GaN1 万片/年 150000"},{id:1,title:"总投资额",desc:"150000万元 "},{id:2,title:"融资需求",desc:"5000万元 "},{id:3,title:"联系方式",desc:"成都国民天成半导体有限公司",contact:"张站峰  13880813191"},{id:4,title:"建设模式",desc:"政府和企业出资共建"}]}},components:{TopNav:w},methods:{backToMenu:function(){this.$router.push({path:"/"})}}},W=V,X=(a("e619"),Object(c["a"])(W,R,U,!1,null,"3d58cb70",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demands-type-list"},[a("TopNav"),a("div",{staticClass:"content"},[a("ul",t._l(6,function(e,n){return a("li",{key:n,on:{click:function(e){return t.linkNav(n)}}},[a("div",{staticClass:"title"},[t._v("郫都区万云汇互联网娱乐云计算产业基地项目")]),t._m(0,!0)])}),0)])],1)},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"name"},[a("span",{staticClass:"tag"},[t._v("融资需求")]),a("span",[t._v("成都国民沃成半导体有限公司")])])}],et={name:"demands-list",data:function(){return{}},components:{TopNav:w},methods:{linkNav:function(t){this.$router.push({path:"/demandsDetail"})}}},at=et,nt=(a("e9d3"),Object(c["a"])(at,Z,tt,!1,null,"166feace",null)),st=nt.exports;n["a"].use(u["a"]);var it=new u["a"]({routes:[{path:"/",name:"index",component:h,meta:{title:"首页"}},{path:"/demandsList",name:"demandsList",component:J,meta:{title:"首页"}},{path:"/demandsTypeList",name:"demandsTypeList",component:st,meta:{title:"首页"}},{path:"/demandsDetail",name:"demandsDetail",component:Y,meta:{title:"首页"}},{path:"/choice",name:"choice",component:Q,meta:{title:"选择"}}]});n["a"].config.productionTip=!1,it.beforeEach(function(t,e,a){t.meta.title&&(document.title=t.meta.title),a()}),new n["a"]({router:it,render:function(t){return t(o)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){},"66e8":function(t,e,a){},"733b":function(t,e,a){"use strict";var n=a("66e8"),s=a.n(n);s.a},"848d":function(t,e,a){"use strict";var n=a("aaca"),s=a.n(n);s.a},aaca:function(t,e,a){},bc95:function(t,e,a){},c25a:function(t,e,a){},ce80:function(t,e,a){t.exports=a.p+"img/img-01.0abdaee3.jpg"},d06e:function(t,e,a){"use strict";var n=a("4738"),s=a.n(n);s.a},e619:function(t,e,a){"use strict";var n=a("bc95"),s=a.n(n);s.a},e8b3:function(t,e,a){},e9d3:function(t,e,a){"use strict";var n=a("4a4c"),s=a.n(n);s.a}});
//# sourceMappingURL=app.140b560c.js.map