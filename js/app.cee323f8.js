(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)r=o[d],s[r]&&h.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={0:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,1]),i()})({"/Mlu":function(t,e,i){"use strict";var n=i("AqND"),s=i.n(n);s.a},0:function(t,e,i){t.exports=i("Vtdi")},"0eei":function(t,e,i){},"42SU":function(t,e,i){},"6Sz4":function(t,e,i){},"9UNG":function(t,e,i){"use strict";var n=i("UWc5"),s=i.n(n);s.a},"A0++":function(t,e,i){"use strict";var n=i("BPUQ"),s=i.n(n);s.a},AqND:function(t,e,i){},AxVw:function(t,e,i){"use strict";var n=i("MwPc"),s=i.n(n);s.a},BPUQ:function(t,e,i){},Cepv:function(t,e,i){"use strict";var n=i("axXn"),s=i.n(n);s.a},MwPc:function(t,e,i){},N8h6:function(t,e,i){},NDPA:function(t,e,i){},PbQS:function(t,e,i){},RtW8:function(t,e,i){"use strict";var n=i("w3R5"),s=i.n(n);s.a},U0ut:function(t,e,i){"use strict";var n=i("NDPA"),s=i.n(n);s.a},UDp2:function(t,e,i){"use strict";var n=i("rYj6"),s=i.n(n);s.a},UWc5:function(t,e,i){},"V/kG":function(t,e,i){"use strict";var n=i("X0Qm"),s=i.n(n);s.a},VBR8:function(t,e,i){},Vtdi:function(t,e,i){"use strict";i.r(e);i("yt8O"),i("VRzm");var n=i("Kw5r"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",[i("router-view")],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("swiper",{attrs:{list:t.swiperList}}),i("icons",{attrs:{list:t.iconList}}),i("recommend",{attrs:{list:t.recommendList}}),i("weekend",{attrs:{list:t.weekendList}})],1)},o=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._m(1),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n                "+t._s(this.city)+" "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left"},[i("div",{staticClass:"iconfont back-iconfont"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-input"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v("输入城市/景点/游玩主题")])}],u=i("yT7P"),d=i("L2JU"),h={name:"HomeHeader",computed:Object(u["a"])({},Object(d["c"])(["city"]))},f=h,m=(i("v1NP"),i("KHd+")),v=Object(m["a"])(f,c,l,!1,null,"210f2269",null),p=v.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showSliper?i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(t){return i("swiper-slide",{key:t.id},[i("img",{key:t.id,staticClass:"wiper-image",attrs:{src:t.imageUrl}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},g=[],C={name:"carrousel",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSliper:function(){return this.list.length}}},w=C,_=(i("n6QA"),Object(m["a"])(w,y,g,!1,null,"cd4736e2",null)),b=_.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons-wrapper",staticStyle:{"margin-top":".1rem"}},[i("swiper",t._l(t.pages,function(e,n){return t.showList?i("swiper-slide",{key:n},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"img-content",attrs:{src:e.imgUrl}})]),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.text))])])})):t._e()}))],1)},j=[],x=(i("rGqo"),{props:{list:Array},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)}),t},showList:function(){return this.list.length}}}),O=x,H=(i("yzt4"),Object(m["a"])(O,k,j,!1,null,"7c65b547",null)),E=H.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"title"},[t._v("热销推荐")]),i("div",{staticClass:"cont"},[i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{attrs:{src:e.imgUrl}}),i("div",{staticClass:"text"},[i("div",{staticClass:"recommend-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"recommend-desc"},[t._v(t._s(e.detail))]),i("button",{staticClass:"recommend-detail"},[t._v("查看详情")])])])}))])])},$=[],L={props:{list:Array}},I=L,N=(i("AxVw"),Object(m["a"])(I,S,$,!1,null,"3057eb36",null)),P=N.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),i("div",{staticClass:"cont"},[i("ul",t._l(t.list,function(e){return i("li",{key:e.id},[i("img",{attrs:{src:e.imgUrl}}),i("div",{staticClass:"text"},[i("p",{staticClass:"desc"},[t._v(t._s(e.title))]),i("p",{staticClass:"detail"},[t._v("\n                        "+t._s(e.detail)+"\n                    ")])])])}))])])},B=[],T={props:{list:Array}},U=T,D=(i("UDp2"),Object(m["a"])(U,A,B,!1,null,"8e936196",null)),M=D.exports,R=i("vDqi"),V=i.n(R),G={data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},components:{Header:p,Swiper:b,Icons:E,Recommend:P,Weekend:M},methods:{getHomeInfo:function(){V.a.get("/api/index.json?"+this.$store.state.city).then(this.getHomeInfoSuccss)},getHomeInfoSuccss:function(t){t.data.success&&(this.swiperList=t.data.info.swiperList,this.iconList=t.data.info.iconList,this.recommendList=t.data.info.recommendList,this.weekendList=t.data.info.weekendList)}},computed:{},mounted:function(){this.lastCity=this.$store.state.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.$store.state.city&&(this.getHomeInfo(),this.lastCity=this.$store.state.city)}},Q=G,q=(i("U0ut"),Object(m["a"])(Q,r,o,!1,null,null,null)),F=q.exports,Z={components:{Home:F}},z=Z,W=(i("A0++"),Object(m["a"])(z,s,a,!1,null,null,null)),X=W.exports,Y=i("jE9Z"),J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("CityHeader"),i("CitySearch",{attrs:{cities:t.cities}}),i("List",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),i("letter",{attrs:{list:t.cities},on:{clickEvent:t.handleClick}})],1)},K=[],tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city-header"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont header-back"},[t._v("")])]),t._v("城市选择\n")],1)},et=[],it={},nt=it,st=(i("uHlQ"),Object(m["a"])(nt,tt,et,!1,null,"47026f0d",null)),at=st.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"city-search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyworlds,expression:"keyworlds"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市名称或者拼音"},domProps:{value:t.keyworlds},on:{input:function(e){e.target.composing||(t.keyworlds=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:this.keyworlds,expression:"this.keyworlds"}],ref:"searchContent",staticClass:"search-content"},[i("ul",[t._l(t.matchList,function(e){return i("li",{key:e.id,staticClass:"border-bottom",on:{click:function(i){t.handleClickCity(e.name)}}},[t._v(t._s(e.name))])}),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNotFound,expression:"showNotFound"}],staticClass:"border-bottom"},[t._v("未匹配到任何内容！")])],2)])])},ot=[],ct=(i("f3/d"),i("H7qB")),lt={props:{cities:Object},data:function(){return{keyworlds:"",matchList:[],timer:null}},mounted:function(){this.scroll=new ct["a"](this.$refs.searchContent,{click:!0})},watch:{keyworlds:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=[];for(var n in e.cities)e.cities[n].forEach(function(e){(e.spell.indexOf(t)>-1||e.name.indexOf(t)>-1)&&i.push(e)});e.matchList=i},16)}},computed:{showNotFound:function(){return!this.matchList.length}},methods:Object(u["a"])({handleClickCity:function(t){this.changeCity(t),this.keyworlds="",this.$router.push("/")}},Object(d["b"])(["changeCity"]))},ut=lt,dt=(i("kV4x"),Object(m["a"])(ut,rt,ot,!1,null,"a922f8fe",null)),ht=dt.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title boder-topbottom"},[t._v("当前城市")]),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),i("div",{staticClass:"area"},[i("div",{staticClass:"title boder-topbottom"},[t._v("热门城市")]),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.clickCityHandle(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._l(t.cities,function(e,n){return i("div",{key:n,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title boder-topbottom"},[t._v(t._s(n))]),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item boder-topbottom",on:{click:function(i){t.clickCityHandle(e.name)}}},[t._v(t._s(e.name))])}))])})],2)])},mt=[],vt={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},computed:Object(u["a"])({},Object(d["c"])({currentCity:"city"})),mounted:function(){this.bscroll=new ct["a"](this.$refs.wrapper,{click:!0})},methods:Object(u["a"])({clickCityHandle:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},Object(d["b"])(["changeCity"])),watch:{letter:function(t){this.bscroll.scrollToElement(this.$refs[this.letter][0])}}},pt=vt,yt=(i("/Mlu"),Object(m["a"])(pt,ft,mt,!1,null,"04b5643f",null)),gt=yt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"letter"},t._l(t.list,function(e,n){return i("li",{key:n,ref:n,refInFor:!0,on:{click:t.handleClick,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v(t._s(n))])}))},wt=[],_t=(i("RW0V"),{props:{list:Object},data:function(){return{moveStatus:!1,startPos:0,height:0,timer:null}},updated:function(){var t=this.$refs["A"][0];this.startPos=t.getBoundingClientRect().top,this.height=t.offsetHeight},methods:{handleClick:function(t){var e=t.target.innerText;this.$emit("clickEvent",e)},handleTouchStart:function(){this.moveStatus=!0},handleTouchMove:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){if(e.moveStatus){var i=t.touches[0].clientY,n=Math.floor((i-e.startPos)/e.height),s=Object.keys(e.list);n>=0&&n<=21&&e.$emit("clickEvent",s[n])}},16)},handleTouchEnd:function(){this.moveStatus=!1}}}),bt=_t,kt=(i("RtW8"),Object(m["a"])(bt,Ct,wt,!1,null,"37b874d0",null)),jt=kt.exports,xt={components:{CityHeader:at,CitySearch:ht,List:gt,Letter:jt},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){V.a.get("/api/city.json").then(this.getCityHandle)},getCityHandle:function(t){t&&t.data.ret&&(this.cities=t.data.data.cities,this.hotCities=t.data.data.hotCities)},handleClick:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},Ot=xt,Ht=(i("Cepv"),Object(m["a"])(Ot,J,K,!1,null,"6c9682ee",null)),Et=Ht.exports,St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,gallaryImgs:t.gallaryImgs}}),i("DetailHeader"),i("DetailList",{attrs:{list:t.list}}),i("div",{staticStyle:{height:"600px"}})],1)},$t=[],Lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner-image",on:{click:t.handleClickBanner}},[i("img",{attrs:{src:t.bannerImg}}),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),i("div",{staticClass:"banner-number"},[t._v(t._s(t.gallaryImgs.length)+"  "),i("span",{staticClass:"iconfont"},[t._v("")])])])]),i("FadeAnimation",[i("Gallary",{directives:[{name:"show",rawName:"v-show",value:t.showBanner,expression:"showBanner"}],attrs:{imageUrl:t.gallaryImgs,gallaryImgs:t.gallaryImgs},on:{"handle-click":t.handleClick}})],1)],1)},It=[],Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",on:{click:t.handleClickGalary}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imageUrl,function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"wiper-image",attrs:{src:t}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},Pt=[],At={props:{imageUrl:Array,showBanner:Boolean,gallaryImgs:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{handleClickGalary:function(){this.$emit("handle-click")}}},Bt=At,Tt=(i("mDsh"),Object(m["a"])(Bt,Nt,Pt,!1,null,"56de9728",null)),Ut=Tt.exports,Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",[t._t("default")],2)},Mt=[],Rt={},Vt=Rt,Gt=(i("yjmq"),Object(m["a"])(Vt,Dt,Mt,!1,null,"3bb62e08",null)),Qt=Gt.exports,qt={name:"Banner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},components:{Gallary:Ut,FadeAnimation:Qt},data:function(){return{showBanner:!1}},methods:{handleClickBanner:function(){this.showBanner=!0},handleClick:function(){this.showBanner=!1}}},Ft=qt,Zt=(i("V/kG"),Object(m["a"])(Ft,Lt,It,!1,null,"3b352dee",null)),zt=Zt.exports,Wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showHeader,expression:"showHeader"}],staticClass:"header",style:t.headerStyle,attrs:{id:"header"}},[i("router-link",{staticClass:"iconfont left",attrs:{to:"/",tag:"div"}},[t._v("")]),i("div",{staticClass:"title"},[t._v("旅游详情页")])],1),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showBack,expression:"showBack"}],staticClass:"iconfont back",attrs:{tag:"div",to:"/"}},[t._v("")])],1)},Xt=[],Yt={data:function(){return{showHeader:!1,headerStyle:{opacity:0},scrollHeight:0,scrollTop:0}},computed:{showBack:function(){return!this.showHeader}},mounted:function(){this.scrollHeight=document.getElementById("header").offsetHeight},methods:{scrollEvent:function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;if(t>this.scrollHeight){this.showHeader||(this.showHeader=!0);var e=t/140;e=e>1?1:e,e=e.toFixed(1),this.headerStyle={opacity:e}}else this.showHeader=!1,this.headerStyle={opacity:0}}},activated:function(){window.addEventListener("scroll",this.scrollEvent)},deactivated:function(){window.removeEventListener("scroll",this.scrollEvent)}},Jt=Yt,Kt=(i("daPX"),Object(m["a"])(Jt,Wt,Xt,!1,null,"78fae43f",null)),te=Kt.exports,ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"item border-bottom"},[i("div",{staticClass:"item-box border-bottom"},[t._v("\n            "+t._s(e.title)+"\n        ")]),e.children?i("div",{staticClass:"sub-item"},[i("ListItem",{attrs:{list:e.children}})],1):t._e()])}))},ie=[],ne={name:"ListItem",props:{list:Array},data:function(){return{}}},se=ne,ae=(i("sH9y"),Object(m["a"])(se,ee,ie,!1,null,"14e84507",null)),re=ae.exports,oe={name:"Detail",data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){V.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleResponse).catch(function(t){console.log("cannot connect to server")})},handleResponse:function(t){if(t.data&&t.data.ret){var e=t.data.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList,console.log()}else console.log("server cannot find query result")}},components:{DetailBanner:zt,DetailHeader:te,DetailList:re},activated:function(){this.getDetailInfo()}},ce=oe,le=(i("9UNG"),Object(m["a"])(ce,St,$t,!1,null,"cb22e1bc",null)),ue=le.exports;n["a"].use(Y["a"]);var de=new Y["a"]({routes:[{path:"/city",name:"city",component:Et},{path:"/",name:"home",component:F},{path:"/detail/:id",name:"detail",component:ue}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),he=i("/jzl"),fe=i.n(he),me=(i("PbQS"),i("yPTG"),i("VBR8"),i("H4Ca")),ve=i.n(me),pe=(i("36R9"),"武汉");try{pe=localStorage.city||"武汉"}catch(t){}var ye={city:pe},ge={changeCity:function(t,e){try{localStorage.city=e,t.city=e}catch(t){}}};n["a"].use(d["a"]);var Ce=new d["a"].Store({state:ye,mutations:ge});n["a"].use(ve.a),n["a"].config.productionTip=!1,fe.a.attach(document.body),new n["a"]({router:de,store:Ce,render:function(t){return t(X)}}).$mount("#app")},X0Qm:function(t,e,i){},axXn:function(t,e,i){},daPX:function(t,e,i){"use strict";var n=i("6Sz4"),s=i.n(n);s.a},fHZZ:function(t,e,i){},jeMh:function(t,e,i){},kV4x:function(t,e,i){"use strict";var n=i("42SU"),s=i.n(n);s.a},ls6i:function(t,e,i){},mDsh:function(t,e,i){"use strict";var n=i("ls6i"),s=i.n(n);s.a},n6QA:function(t,e,i){"use strict";var n=i("rdAl"),s=i.n(n);s.a},rYj6:function(t,e,i){},rdAl:function(t,e,i){},sH9y:function(t,e,i){"use strict";var n=i("fHZZ"),s=i.n(n);s.a},uB9Z:function(t,e,i){},uHlQ:function(t,e,i){"use strict";var n=i("N8h6"),s=i.n(n);s.a},v1NP:function(t,e,i){"use strict";var n=i("jeMh"),s=i.n(n);s.a},w3R5:function(t,e,i){},yPTG:function(t,e,i){},yjmq:function(t,e,i){"use strict";var n=i("0eei"),s=i.n(n);s.a},yzt4:function(t,e,i){"use strict";var n=i("uB9Z"),s=i.n(n);s.a}});
//# sourceMappingURL=app.cee323f8.js.map