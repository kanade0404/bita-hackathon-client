(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{201:function(e,t,r){var content=r(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("2b6fb20c",content,!0,{sourceMap:!1})},203:function(e,t,r){"use strict";r(201)},204:function(e,t,r){var n=r(57)(!1);n.push([e.i,".header[data-v-5e6ccf3a],.headerWrapper[data-v-5e6ccf3a]{height:80px}.header[data-v-5e6ccf3a]{display:flex;padding:0 20px;margin:0 auto}.header__nav[data-v-5e6ccf3a]{width:100%}.headerLinks[data-v-5e6ccf3a]{display:flex;align-items:center;justify-content:flex-end;list-style:none;height:100%}.logo[data-v-5e6ccf3a]{cursor:pointer;margin-right:auto}.logo[data-v-5e6ccf3a],.logo__img[data-v-5e6ccf3a]{height:50px;width:50px}.link[data-v-5e6ccf3a]:not(:last-of-type){margin-right:20px}.userName[data-v-5e6ccf3a]{font-size:16px;font-weight:700;margin-right:8px}.iconWrapper[data-v-5e6ccf3a]{position:relative}.icon[data-v-5e6ccf3a]{cursor:pointer;overflow:hidden;border-radius:50px}.icon[data-v-5e6ccf3a],.icon__img[data-v-5e6ccf3a]{height:50px;width:50px}.tabMenuWrapper[data-v-5e6ccf3a]{position:fixed;top:0;left:0;bottom:0;right:0;z-index:1000}.tabMenu[data-v-5e6ccf3a]{padding:0 10px;height:100%;flex-direction:column}.tabMenu[data-v-5e6ccf3a],.tabMenu__link[data-v-5e6ccf3a]{display:flex;justify-content:center}.tabMenu__link[data-v-5e6ccf3a]{background-color:#fff;align-items:center;height:50px;text-align:center;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:5px;z-index:100}.tabMenu__background[data-v-5e6ccf3a]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);width:100%;height:100%}",""]),e.exports=n},205:function(e,t,r){"use strict";r.r(t);r(37),r(32),r(36),r(59),r(31),r(60);var n=r(6),o=r(24),c=(r(44),r(23),r(206)),l=r.n(c),d=r(33);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Header",data:function(){return{isMenuVisible:!1,hasUserData:!1}},computed:h(h({},Object(d.c)(["userData"])),{},{userName:function(){return this.userData.profile?this.userData.profile.name:""},setImg:function(){return this.userData.profile?"".concat(this.userData.profile.picture):""}}),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l.a.defaults.headers.get["Access-Control-Allow-Origin"]="*",r=e.$cookies.get("userId"),e.hasUserData=Boolean(r),r){t.next=6;break}return window.location="/login",t.abrupt("return");case 6:return t.prev=6,t.next=9,l.a.get("https://hackathon-starter-305913.an.r.appspot.com/api/user/".concat(r));case 9:return n=t.sent,data=n.data,e.setUserActions(data.data),t.abrupt("return");case 15:t.prev=15,t.t0=t.catch(6),alert("処理に失敗しました");case 18:case"end":return t.stop()}}),t,null,[[6,15]])})))()},methods:h(h({},Object(d.b)(["setUserActions"])),{},{setMenuOpen:function(){this.isMenuVisible=!0,document.body.style.overflow="hidden"},setMenuClose:function(){this.isMenuVisible=!1,document.body.style.overflow=""},toUserScreen:function(){this.setMenuClose(),this.$router.push("/user")},toReviewScreen:function(){this.setMenuClose(),this.$router.push("/review")},toMatchScreen:function(){this.setMenuClose(),this.$router.push("/match")},logout:function(){this.$cookies.set("token",""),window.location="https://hackathon-starter-305913.an.r.appspot.com/logout"},toHomeScreen:function(){this.setMenuClose(),this.$router.push("/")}})},m=(r(203),r(35)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"headerWrapper"},[e.hasUserData?r("header",{staticClass:"header"},[r("nav",{staticClass:"header__nav"},[r("ul",{staticClass:"headerLinks"},[r("h1",{staticClass:"logo",on:{click:e.toHomeScreen}},[r("img",{staticClass:"logo__img",attrs:{src:"/logo.png",alt:"ロゴ"}})]),e._v(" "),r("div",{staticClass:"userName"},[e._v(e._s(e.userName))]),e._v(" "),r("div",{staticClass:"iconWrapper"},[r("div",{staticClass:"icon",on:{click:e.setMenuOpen}},[r("img",{staticClass:"icon__img",attrs:{src:e.setImg,alt:""}})])])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isMenuVisible,expression:"isMenuVisible"}],staticClass:"tabMenuWrapper"},[r("div",{staticClass:"tabMenu__background",on:{click:e.setMenuClose}}),e._v(" "),r("ul",{staticClass:"tabMenu"},[r("li",{staticClass:"tabMenu__link",on:{click:e.toHomeScreen}},[e._v("Home")]),e._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:e.toReviewScreen}},[e._v("レビュー一覧")]),e._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:e.toMatchScreen}},[e._v("すれ違い一覧")]),e._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:e.toUserScreen}},[e._v("ユーザー情報")]),e._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:e.logout}},[e._v("ログアウト")])])])]):e._e()])}),[],!1,null,"5e6ccf3a",null);t.default=component.exports},217:function(e,t,r){var content=r(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("5e8d489a",content,!0,{sourceMap:!1})},244:function(e,t,r){"use strict";r(217)},245:function(e,t,r){var n=r(57)(!1);n.push([e.i,".container[data-v-ce2c2ada]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.reviewForm[data-v-ce2c2ada]{margin-bottom:20px;width:80%;max-width:600px}.reviewForm__item[data-v-ce2c2ada]{display:flex;align-items:center}.reviewForm__title[data-v-ce2c2ada]{font-size:24px;font-weight:700;flex-shrink:0;margin-bottom:20px}.reviewForm__inputTextarea[data-v-ce2c2ada]{border-radius:4px;border:1px solid #eee;padding:8px;height:3em;font-size:16px;width:100%;resize:vertical}.reviewForm__submitButton[data-v-ce2c2ada]{margin-top:40px;background-color:#4169e1;width:200px;height:40px;color:#fff;border-radius:100px;font-weight:700}",""]),e.exports=n},258:function(e,t,r){"use strict";r.r(t);var n={components:{Header:r(205).default},methods:{toReviewScreen:function(e){e.preventDefault(),this.$router.push("/review")}}},o=(r(244),r(35)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Fragment",[r("Header"),e._v(" "),r("main",{staticClass:"report"},[r("div",{staticClass:"container"},[r("form",{staticClass:"reviewForm",attrs:{action:"",method:"post"}},[r("fieldset",{staticClass:"reviewForm__item"},[r("legend",{staticClass:"reviewForm__title"},[e._v("店舗レビュー")]),e._v(" "),r("textarea",{staticClass:"reviewForm__inputTextarea",attrs:{type:"text",name:"content",value:""}})]),e._v(" "),r("input",{attrs:{type:"hidden",name:"userId",value:""}}),e._v(" "),r("input",{attrs:{type:"hidden",name:"reviewId",value:""}}),e._v(" "),r("button",{staticClass:"reviewForm__submitButton",attrs:{type:"submit"},on:{click:function(t){return e.toReviewScreen(t)}}},[e._v("\n          投稿する\n        ")])])])])],1)}),[],!1,null,"ce2c2ada",null);t.default=component.exports}}]);