(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{201:function(t,e,r){var content=r(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("2b6fb20c",content,!0,{sourceMap:!1})},203:function(t,e,r){"use strict";r(201)},204:function(t,e,r){var n=r(57)(!1);n.push([t.i,".header[data-v-5e6ccf3a],.headerWrapper[data-v-5e6ccf3a]{height:80px}.header[data-v-5e6ccf3a]{display:flex;padding:0 20px;margin:0 auto}.header__nav[data-v-5e6ccf3a]{width:100%}.headerLinks[data-v-5e6ccf3a]{display:flex;align-items:center;justify-content:flex-end;list-style:none;height:100%}.logo[data-v-5e6ccf3a]{cursor:pointer;margin-right:auto}.logo[data-v-5e6ccf3a],.logo__img[data-v-5e6ccf3a]{height:50px;width:50px}.link[data-v-5e6ccf3a]:not(:last-of-type){margin-right:20px}.userName[data-v-5e6ccf3a]{font-size:16px;font-weight:700;margin-right:8px}.iconWrapper[data-v-5e6ccf3a]{position:relative}.icon[data-v-5e6ccf3a]{cursor:pointer;overflow:hidden;border-radius:50px}.icon[data-v-5e6ccf3a],.icon__img[data-v-5e6ccf3a]{height:50px;width:50px}.tabMenuWrapper[data-v-5e6ccf3a]{position:fixed;top:0;left:0;bottom:0;right:0;z-index:1000}.tabMenu[data-v-5e6ccf3a]{padding:0 10px;height:100%;flex-direction:column}.tabMenu[data-v-5e6ccf3a],.tabMenu__link[data-v-5e6ccf3a]{display:flex;justify-content:center}.tabMenu__link[data-v-5e6ccf3a]{background-color:#fff;align-items:center;height:50px;text-align:center;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:5px;z-index:100}.tabMenu__background[data-v-5e6ccf3a]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);width:100%;height:100%}",""]),t.exports=n},205:function(t,e,r){"use strict";r.r(e);r(37),r(32),r(36),r(59),r(31),r(60);var n=r(6),c=r(24),o=(r(44),r(23),r(206)),l=r.n(o),d=r(33);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"Header",data:function(){return{isMenuVisible:!1,hasUserData:!1}},computed:v(v({},Object(d.c)(["userData"])),{},{userName:function(){return this.userData.profile?this.userData.profile.name:""},setImg:function(){return this.userData.profile?"".concat(this.userData.profile.picture):""}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.a.defaults.headers.get["Access-Control-Allow-Origin"]="*",r=t.$cookies.get("userId"),t.hasUserData=Boolean(r),r){e.next=6;break}return window.location="/login",e.abrupt("return");case 6:return e.prev=6,e.next=9,l.a.get("https://hackathon-starter-305913.an.r.appspot.com/api/user/".concat(r));case 9:return n=e.sent,data=n.data,t.setUserActions(data.data),e.abrupt("return");case 15:e.prev=15,e.t0=e.catch(6),alert("処理に失敗しました");case 18:case"end":return e.stop()}}),e,null,[[6,15]])})))()},methods:v(v({},Object(d.b)(["setUserActions"])),{},{setMenuOpen:function(){this.isMenuVisible=!0,document.body.style.overflow="hidden"},setMenuClose:function(){this.isMenuVisible=!1,document.body.style.overflow=""},toUserScreen:function(){this.setMenuClose(),this.$router.push("/user")},toReviewScreen:function(){this.setMenuClose(),this.$router.push("/review")},toMatchScreen:function(){this.setMenuClose(),this.$router.push("/match")},logout:function(){this.$cookies.set("token",""),window.location="https://hackathon-starter-305913.an.r.appspot.com/logout"},toHomeScreen:function(){this.setMenuClose(),this.$router.push("/")}})},f=(r(203),r(35)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"headerWrapper"},[t.hasUserData?r("header",{staticClass:"header"},[r("nav",{staticClass:"header__nav"},[r("ul",{staticClass:"headerLinks"},[r("h1",{staticClass:"logo",on:{click:t.toHomeScreen}},[r("img",{staticClass:"logo__img",attrs:{src:"/logo.png",alt:"ロゴ"}})]),t._v(" "),r("div",{staticClass:"userName"},[t._v(t._s(t.userName))]),t._v(" "),r("div",{staticClass:"iconWrapper"},[r("div",{staticClass:"icon",on:{click:t.setMenuOpen}},[r("img",{staticClass:"icon__img",attrs:{src:t.setImg,alt:""}})])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuVisible,expression:"isMenuVisible"}],staticClass:"tabMenuWrapper"},[r("div",{staticClass:"tabMenu__background",on:{click:t.setMenuClose}}),t._v(" "),r("ul",{staticClass:"tabMenu"},[r("li",{staticClass:"tabMenu__link",on:{click:t.toHomeScreen}},[t._v("Home")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toReviewScreen}},[t._v("レビュー一覧")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toMatchScreen}},[t._v("すれ違い一覧")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toUserScreen}},[t._v("ユーザー情報")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.logout}},[t._v("ログアウト")])])])]):t._e()])}),[],!1,null,"5e6ccf3a",null);e.default=component.exports},216:function(t,e,r){var content=r(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("41d2d02c",content,!0,{sourceMap:!1})},242:function(t,e,r){"use strict";r(216)},243:function(t,e,r){var n=r(57)(!1);n.push([t.i,".container[data-v-50b3bbdb]{margin:0 auto;min-height:100vh;text-decoration:none;padding:0 20px 20px}.selectTypeTab[data-v-50b3bbdb]{display:flex;justify-content:space-around;margin-top:10px}.title[data-v-50b3bbdb]{font-weight:600;font-size:1.2em;padding-bottom:5px}.title.isActive[data-v-50b3bbdb]{border-bottom:3px solid #ff8856}.richUi-move[data-v-50b3bbdb]{transition:1s}.matchDisplay-enter[data-v-50b3bbdb]{position:relative;top:10px;opacity:0}.matchDisplay-enter-active[data-v-50b3bbdb]{opacity:.5}.matchDisplay-leave[data-v-50b3bbdb]{top:0;opacity:1}.matchDisplay-leave-active[data-v-50b3bbdb]{top:10px;opacity:.5}.matchItemList[data-v-50b3bbdb]{border-top:1px solid #d5d5d8}.matchItemCard[data-v-50b3bbdb],.notMatchItemCard[data-v-50b3bbdb]{border-bottom:1px solid #d5d5d8;padding:10px 15px;box-shadow:0 0 6px #ddd;margin:15px 0;border-radius:5px}.notMatchItemCard[data-v-50b3bbdb]{min-height:57.5px}.cardInner[data-v-50b3bbdb],.notMatchCardHeader[data-v-50b3bbdb]{display:flex;align-items:center}.profileImgWrapper[data-v-50b3bbdb]{height:15vw;margin-right:10px}.notMatchProfileWrapper[data-v-50b3bbdb]{height:10vw;margin-right:10px}.profileImg[data-v-50b3bbdb]{height:100%;border-radius:50%}.userName[data-v-50b3bbdb]{color:#2e2e3b;font-size:1.07692rem;font-weight:700;margin-bottom:3px}.matchNumber[data-v-50b3bbdb]{border-radius:50%;background-color:#ff8856;color:#fff;font-weight:600;width:20px;height:20px;text-align:center;margin-left:auto;padding-top:1px}.commonTagsList[data-v-50b3bbdb]{display:flex;flex-wrap:wrap;margin-top:8px}.commonTagItem[data-v-50b3bbdb]{color:#ff773e;background-color:#ffefe0;border-radius:10px;padding:4px 6px;font-weight:600;font-size:80%;margin:2.5px}",""]),t.exports=n},257:function(t,e,r){"use strict";r.r(e);var n=r(206),c=r.n(n),o={name:"Match",components:{Header:r(205).default},data:function(){return{commonMatchList:[],uncommonMatchList:[],showListFlag:!0,commonProfiles:[1,2,3,4]}},created:function(){var t=this;c.a.get("https://hackathon-starter-305913.an.r.appspot.com/api/review/").then((function(e){t.commonMatchList=e.data.data,t.uncommonMatchList=e.data.data})).catch((function(t){alert(t.message)}))},methods:{selectListType:function(t){this.showListFlag="common"===t}}},l=(r(242),r(35)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Fragment",[r("Header"),t._v(" "),r("div",{staticClass:"container"},[r("NuxtLink",{attrs:{to:"/"}},[t._v("Back To Home")]),t._v(" "),r("div",{staticClass:"selectTypeTab"},[r("div",{staticClass:"title",class:{isActive:t.showListFlag},on:{click:function(e){return t.selectListType("common")}}},[t._v("\n        Match!\n      ")]),t._v(" "),r("div",{staticClass:"title",class:{isActive:!t.showListFlag},on:{click:function(e){return t.selectListType("uncommon")}}},[t._v("\n        Not match\n      ")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showListFlag,expression:"showListFlag"}]},[r("transition-group",{staticClass:"matchItemList",attrs:{name:"richUi",tag:"ul"}},[t._l(t.commonMatchList,(function(e){return r("li",{key:e.id,staticClass:"matchItemCard"},[r("div",{staticClass:"cardInner"},[r("div",{staticClass:"profileImgWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp/img/members_img/16019679213tatsuya_takahashi_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",[r("div",{staticClass:"userName"},[t._v(t._s(e.user.name))])]),t._v(" "),r("div",{staticClass:"matchNumber"},[t._v("9")])])])})),t._v(" "),t._l(t.commonMatchList,(function(e){return r("li",{key:e.id,staticClass:"matchItemCard"},[r("div",{staticClass:"cardInner"},[r("div",{staticClass:"profileImgWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp/img/members_img/16097438781toshinobu_sato_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",[r("div",{staticClass:"userName"},[t._v(t._s(e.user.name))])]),t._v(" "),r("div",{staticClass:"matchNumber"},[t._v("6")])])])})),t._v(" "),t._l(t.commonMatchList,(function(e){return r("li",{key:e.id,staticClass:"matchItemCard"},[r("div",{staticClass:"cardInner"},[r("div",{staticClass:"profileImgWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp/img/members_img/15656647750seiya_sakata_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",[r("div",{staticClass:"userName"},[t._v(t._s(e.user.name))])]),t._v(" "),r("div",{staticClass:"matchNumber"},[t._v("5")])])])})),t._v(" "),t._l(t.commonMatchList,(function(e){return r("li",{key:e.id,staticClass:"matchItemCard"},[r("div",{staticClass:"cardInner"},[r("div",{staticClass:"profileImgWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp/img/members_img/15656647750seiya_sakata_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",[r("div",{staticClass:"userName"},[t._v(t._s(e.user.name))])]),t._v(" "),r("div",{staticClass:"matchNumber"},[t._v("3")])])])})),t._v(" "),t._l(t.commonMatchList,(function(e){return r("li",{key:e.id,staticClass:"matchItemCard"},[r("div",{staticClass:"cardInner"},[r("div",{staticClass:"profileImgWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp/img/members_img/15656647750seiya_sakata_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",[r("div",{staticClass:"userName"},[t._v(t._s(e.user.name))])]),t._v(" "),r("div",{staticClass:"matchNumber"},[t._v("2")])])])})),t._v(" "),t._l(t.commonMatchList,(function(e){return r("li",{key:e.id,staticClass:"matchItemCard"},[r("div",{staticClass:"cardInner"},[r("div",{staticClass:"profileImgWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp/img/members_img/15656647750seiya_sakata_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",[r("div",{staticClass:"userName"},[t._v(t._s(e.user.name))])]),t._v(" "),r("div",{staticClass:"matchNumber"},[t._v("1")])])])}))],2)],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.showListFlag,expression:"!showListFlag"}]},[r("ul",{staticClass:"matchItemList"},[t._l(t.uncommonMatchList,(function(e){return r("li",{key:e.id,staticClass:"notMatchItemCard"},[r("div",{staticClass:"notMatchCardHeader"},[r("div",{staticClass:"notMatchProfileWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp/img/members_img/15226410800makoto_tatsumi_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",{staticClass:"userName"},[t._v("まことさん")])]),t._v(" "),r("ul",{staticClass:"commonTagsList"},t._l(t.commonProfiles,(function(e){return r("li",{key:e,staticClass:"commonTagItem"},[t._v("\n              出身地が近い\n            ")])})),0)])})),t._v(" "),t._l(t.uncommonMatchList,(function(e){return r("li",{key:e.id,staticClass:"notMatchItemCard"},[r("div",{staticClass:"notMatchCardHeader"},[r("div",{staticClass:"notMatchProfileWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp/img/members_img/15857163963koudai_kudou_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",{staticClass:"userName"},[t._v("工藤 昂大")])]),t._v(" "),r("ul",{staticClass:"commonTagsList"},t._l(t.commonProfiles,(function(e){return r("li",{key:e,staticClass:"commonTagItem"},[t._v("\n              ボードゲーム\n            ")])})),0)])}))],2)])],1)],1)}),[],!1,null,"50b3bbdb",null);e.default=component.exports}}]);