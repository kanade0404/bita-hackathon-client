(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{201:function(t,e,n){var content=n(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("ead948da",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n(201)},204:function(t,e,n){var r=n(57)(!1);r.push([t.i,".header[data-v-7a5b3067],.headerWrapper[data-v-7a5b3067]{height:80px}.header[data-v-7a5b3067]{display:flex;padding:0 20px;margin:0 auto}.header__nav[data-v-7a5b3067]{width:100%}.headerLinks[data-v-7a5b3067]{display:flex;align-items:center;justify-content:flex-end;list-style:none;height:100%}.logo[data-v-7a5b3067]{cursor:pointer;margin-right:auto}.logo[data-v-7a5b3067],.logo__img[data-v-7a5b3067]{height:50px;width:50px}.link[data-v-7a5b3067]:not(:last-of-type){margin-right:20px}.userName[data-v-7a5b3067]{font-size:16px;font-weight:700;margin-right:8px}.iconWrapper[data-v-7a5b3067]{position:relative}.icon[data-v-7a5b3067]{cursor:pointer;overflow:hidden;border-radius:50px}.icon[data-v-7a5b3067],.icon__img[data-v-7a5b3067]{height:50px;width:50px}.tabMenuWrapper[data-v-7a5b3067]{position:fixed;top:0;left:0;bottom:0;right:0;z-index:1000}.tabMenu[data-v-7a5b3067]{padding:0 10px;height:100%;flex-direction:column}.tabMenu[data-v-7a5b3067],.tabMenu__link[data-v-7a5b3067]{display:flex;justify-content:center}.tabMenu__link[data-v-7a5b3067]{background-color:#fff;align-items:center;height:50px;text-align:center;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:5px;z-index:100}.tabMenu__background[data-v-7a5b3067]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);width:100%;height:100%}",""]),t.exports=r},205:function(t,e,n){"use strict";n.r(e);n(37),n(31),n(36),n(59),n(32),n(60);var r=n(6),o=n(25),c=(n(44),n(23),n(12),n(24),n(33),n(155),n(206)),l=n.n(c),d=n(34);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"Header",data:function(){return{isMenuVisible:!1}},computed:h(h({},Object(d.c)(["userData"])),{},{userName:function(){return this.userData.name},setImg:function(){return"data:image/png;base64,".concat(this.userData.picture)},hasUserData:function(){return this.userData.id}}),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,d,data,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.a.defaults.headers.get["Access-Control-Allow-Origin"]="*",n=new URL(window.location),r=n.searchParams.get("userId"),o=n.searchParams.get("token"),c=t.$cookies.get("token"),r||c){e.next=8;break}return window.location="/login",e.abrupt("return");case 8:if(!c){e.next=21;break}return e.prev=9,e.next=12,l.a.get("http://localhost:8080/api/user/".concat(r));case 12:return d=e.sent,data=d.data,t.setUserActions(data.data),e.abrupt("return");case 18:e.prev=18,e.t0=e.catch(9),alert("処理に失敗しました");case 21:if(r&&o){e.next=23;break}return e.abrupt("return");case 23:return e.prev=23,e.next=26,l.a.get("http://localhost:8080/api/user/".concat(r));case 26:v=e.sent,h=v.data,t.setUserActions(h.data),t.$cookies.set("token",o),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(23),alert("処理に失敗しました");case 35:case"end":return e.stop()}}),e,null,[[9,18],[23,32]])})))()},methods:h(h({},Object(d.b)(["setUserActions"])),{},{setMenuOpen:function(){this.isMenuVisible=!0,document.body.style.overflow="hidden"},setMenuClose:function(){this.isMenuVisible=!1,document.body.style.overflow=""},toUserScreen:function(){this.setMenuClose(),this.$router.push("/user")},toReviewScreen:function(){this.setMenuClose(),this.$router.push("/review")},toMatchScreen:function(){this.setMenuClose(),this.$router.push("/match")},logout:function(){this.$cookies.set("token",""),window.location="http://localhost:8080/logout"},toHomeScreen:function(){this.setMenuClose(),this.$router.push("/")}})},m=(n(203),n(35)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerWrapper"},[t.hasUserData?n("header",{staticClass:"header"},[n("nav",{staticClass:"header__nav"},[n("ul",{staticClass:"headerLinks"},[n("h1",{staticClass:"logo",on:{click:t.toHomeScreen}},[n("img",{staticClass:"logo__img",attrs:{src:"/logo.png",alt:"ロゴ"}})]),t._v(" "),n("div",{staticClass:"userName"},[t._v(t._s(t.userName))]),t._v(" "),n("div",{staticClass:"iconWrapper"},[n("div",{staticClass:"icon",on:{click:t.setMenuOpen}},[n("img",{staticClass:"icon__img",attrs:{src:t.userData.picture,alt:""}})])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuVisible,expression:"isMenuVisible"}],staticClass:"tabMenuWrapper"},[n("div",{staticClass:"tabMenu__background",on:{click:t.setMenuClose}}),t._v(" "),n("ul",{staticClass:"tabMenu"},[n("li",{staticClass:"tabMenu__link",on:{click:t.toHomeScreen}},[t._v("Home")]),t._v(" "),n("li",{staticClass:"tabMenu__link",on:{click:t.toReviewScreen}},[t._v("レビュー一覧")]),t._v(" "),n("li",{staticClass:"tabMenu__link",on:{click:t.toMatchScreen}},[t._v("すれ違い一覧")]),t._v(" "),n("li",{staticClass:"tabMenu__link",on:{click:t.toUserScreen}},[t._v("ユーザー情報")]),t._v(" "),n("li",{staticClass:"tabMenu__link",on:{click:t.logout}},[t._v("ログアウト")])])])]):t._e()])}),[],!1,null,"7a5b3067",null);e.default=component.exports},217:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("785ed152",content,!0,{sourceMap:!1})},244:function(t,e,n){"use strict";n(217)},245:function(t,e,n){var r=n(57)(!1);r.push([t.i,".container[data-v-251dfdf5]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.reviewForm[data-v-251dfdf5]{margin-bottom:20px}.reviewForm__item[data-v-251dfdf5]{display:flex;align-items:center}.reviewForm__title[data-v-251dfdf5]{margin-bottom:20px}.reviewForm__inputTextarea[data-v-251dfdf5]{border:1px solid #000;width:100%}.reviewForm__submitButton[data-v-251dfdf5]{margin-top:40px;background-color:#4169e1;width:200px;height:40px;color:#fff;border-radius:100px;font-weight:700}",""]),t.exports=r},258:function(t,e,n){"use strict";n.r(e);var r={components:{Header:n(205).default}},o=(n(244),n(35)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("Header"),t._v(" "),n("main",{staticClass:"report"},[n("div",{staticClass:"container"},[n("form",{staticClass:"reviewForm",attrs:{action:"http://localhost:8080/api/review",method:"post"}},[n("fieldset",{staticClass:"reviewForm__item"},[n("legend",{staticClass:"reviewForm__title"},[t._v("店舗レビュー")]),t._v(" "),n("input",{staticClass:"reviewForm__inputTextarea",attrs:{type:"textarea",name:"content",value:""}})]),t._v(" "),n("input",{attrs:{type:"hidden",name:"userId",value:""}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"reviewId",value:""}}),t._v(" "),n("button",{staticClass:"reviewForm__submitButton",attrs:{type:"submit"}},[t._v("\n          投稿する\n        ")])])])])],1)}),[],!1,null,"251dfdf5",null);e.default=component.exports}}]);