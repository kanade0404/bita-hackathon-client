(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{201:function(t,e,r){var content=r(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("ead948da",content,!0,{sourceMap:!1})},203:function(t,e,r){"use strict";r(201)},204:function(t,e,r){var n=r(57)(!1);n.push([t.i,".header[data-v-7a5b3067],.headerWrapper[data-v-7a5b3067]{height:80px}.header[data-v-7a5b3067]{display:flex;padding:0 20px;margin:0 auto}.header__nav[data-v-7a5b3067]{width:100%}.headerLinks[data-v-7a5b3067]{display:flex;align-items:center;justify-content:flex-end;list-style:none;height:100%}.logo[data-v-7a5b3067]{cursor:pointer;margin-right:auto}.logo[data-v-7a5b3067],.logo__img[data-v-7a5b3067]{height:50px;width:50px}.link[data-v-7a5b3067]:not(:last-of-type){margin-right:20px}.userName[data-v-7a5b3067]{font-size:16px;font-weight:700;margin-right:8px}.iconWrapper[data-v-7a5b3067]{position:relative}.icon[data-v-7a5b3067]{cursor:pointer;overflow:hidden;border-radius:50px}.icon[data-v-7a5b3067],.icon__img[data-v-7a5b3067]{height:50px;width:50px}.tabMenuWrapper[data-v-7a5b3067]{position:fixed;top:0;left:0;bottom:0;right:0;z-index:1000}.tabMenu[data-v-7a5b3067]{padding:0 10px;height:100%;flex-direction:column}.tabMenu[data-v-7a5b3067],.tabMenu__link[data-v-7a5b3067]{display:flex;justify-content:center}.tabMenu__link[data-v-7a5b3067]{background-color:#fff;align-items:center;height:50px;text-align:center;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:5px;z-index:100}.tabMenu__background[data-v-7a5b3067]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);width:100%;height:100%}",""]),t.exports=n},205:function(t,e,r){"use strict";r.r(e);r(37),r(31),r(36),r(59),r(32),r(60);var n=r(6),o=r(25),c=(r(44),r(23),r(12),r(24),r(33),r(155),r(206)),l=r.n(c),d=r(34);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"Header",data:function(){return{isMenuVisible:!1}},computed:h(h({},Object(d.c)(["userData"])),{},{userName:function(){return this.userData.name},setImg:function(){return"data:image/png;base64,".concat(this.userData.picture)},hasUserData:function(){return this.userData.id}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,d,data,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.a.defaults.headers.get["Access-Control-Allow-Origin"]="*",r=new URL(window.location),n=r.searchParams.get("userId"),o=r.searchParams.get("token"),c=t.$cookies.get("token"),n||c){e.next=8;break}return window.location="/login",e.abrupt("return");case 8:if(!c){e.next=21;break}return e.prev=9,e.next=12,l.a.get("http://localhost:8080/api/user/".concat(n));case 12:return d=e.sent,data=d.data,t.setUserActions(data.data),e.abrupt("return");case 18:e.prev=18,e.t0=e.catch(9),alert("処理に失敗しました");case 21:if(n&&o){e.next=23;break}return e.abrupt("return");case 23:return e.prev=23,e.next=26,l.a.get("http://localhost:8080/api/user/".concat(n));case 26:f=e.sent,h=f.data,t.setUserActions(h.data),t.$cookies.set("token",o),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(23),alert("処理に失敗しました");case 35:case"end":return e.stop()}}),e,null,[[9,18],[23,32]])})))()},methods:h(h({},Object(d.b)(["setUserActions"])),{},{setMenuOpen:function(){this.isMenuVisible=!0,document.body.style.overflow="hidden"},setMenuClose:function(){this.isMenuVisible=!1,document.body.style.overflow=""},toUserScreen:function(){this.setMenuClose(),this.$router.push("/user")},toReviewScreen:function(){this.setMenuClose(),this.$router.push("/review")},toMatchScreen:function(){this.setMenuClose(),this.$router.push("/match")},logout:function(){this.$cookies.set("token",""),window.location="http://localhost:8080/logout"},toHomeScreen:function(){this.setMenuClose(),this.$router.push("/")}})},m=(r(203),r(35)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"headerWrapper"},[t.hasUserData?r("header",{staticClass:"header"},[r("nav",{staticClass:"header__nav"},[r("ul",{staticClass:"headerLinks"},[r("h1",{staticClass:"logo",on:{click:t.toHomeScreen}},[r("img",{staticClass:"logo__img",attrs:{src:"/logo.png",alt:"ロゴ"}})]),t._v(" "),r("div",{staticClass:"userName"},[t._v(t._s(t.userName))]),t._v(" "),r("div",{staticClass:"iconWrapper"},[r("div",{staticClass:"icon",on:{click:t.setMenuOpen}},[r("img",{staticClass:"icon__img",attrs:{src:t.userData.picture,alt:""}})])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuVisible,expression:"isMenuVisible"}],staticClass:"tabMenuWrapper"},[r("div",{staticClass:"tabMenu__background",on:{click:t.setMenuClose}}),t._v(" "),r("ul",{staticClass:"tabMenu"},[r("li",{staticClass:"tabMenu__link",on:{click:t.toHomeScreen}},[t._v("Home")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toReviewScreen}},[t._v("レビュー一覧")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toMatchScreen}},[t._v("すれ違い一覧")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toUserScreen}},[t._v("ユーザー情報")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.logout}},[t._v("ログアウト")])])])]):t._e()])}),[],!1,null,"7a5b3067",null);e.default=component.exports},219:function(t,e,r){var content=r(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("1405f84f",content,!0,{sourceMap:!1})},248:function(t,e,r){"use strict";r(219)},249:function(t,e,r){var n=r(57)(!1);n.push([t.i,".usersMe[data-v-fb513f10]{margin:50px auto 0}.usersImg[data-v-fb513f10]{overflow:hidden;border-radius:150px;margin:0 auto 50px}.usersImg[data-v-fb513f10],.usersImg__img[data-v-fb513f10]{height:150px;width:150px}.info[data-v-fb513f10]{text-align:center;margin:0 auto 50px;max-width:800px}.name[data-v-fb513f10]{font-size:26px;font-weight:700}.likes[data-v-fb513f10]{margin:10px 0}.like[data-v-fb513f10]{font-size:14px;display:inline-block;padding-right:5px;margin-bottom:5px}.description[data-v-fb513f10]{padding:0 10px;font-size:14px;margin-top:20px}.editWrapper[data-v-fb513f10]{margin:0 auto;max-width:800px}.edit[data-v-fb513f10]{border-radius:4px;background-color:#4169e1;color:#fff;margin-left:auto;margin-right:10px;align-items:center;justify-content:center;display:flex;height:30px;width:50px}",""]),t.exports=n},260:function(t,e,r){"use strict";r.r(e);r(37),r(31),r(36),r(59),r(32),r(60);var n=r(25),o=r(34);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={components:{Header:r(205).default},data:function(){return{likes:["モンスターハンター","柿","山","お祈り","Vue","React","初心者","つながりたい"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["userData"])),methods:{toEditScreen:function(){this.$router.push("/userEdit")}}},d=(r(248),r(35)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Fragment",[r("Header"),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"usersMe"},[r("div",{staticClass:"usersImg"},[r("img",{staticClass:"usersImg__img",attrs:{src:t.userData.picture,alt:"サンプル画像"}})]),t._v(" "),r("div",{staticClass:"info"},[r("p",{staticClass:"name"},[t._v(t._s(t.userData.name))]),t._v(" "),r("div",{staticClass:"likes"},t._l(t.likes,(function(e,n){return r("span",{key:n,staticClass:"like"},[t._v("\n            #"+t._s(e)+"\n          ")])})),0),t._v(" "),r("p",{staticClass:"description"},[t._v("\n          自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介\n        ")])]),t._v(" "),r("div",{staticClass:"editWrapper"},[r("button",{staticClass:"edit",on:{click:t.toEditScreen}},[t._v("edit")])])])])],1)}),[],!1,null,"fb513f10",null);e.default=component.exports}}]);