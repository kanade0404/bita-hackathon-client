(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{201:function(t,e,r){var content=r(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("ead948da",content,!0,{sourceMap:!1})},203:function(t,e,r){"use strict";r(201)},204:function(t,e,r){var n=r(57)(!1);n.push([t.i,".header[data-v-7a5b3067],.headerWrapper[data-v-7a5b3067]{height:80px}.header[data-v-7a5b3067]{display:flex;padding:0 20px;margin:0 auto}.header__nav[data-v-7a5b3067]{width:100%}.headerLinks[data-v-7a5b3067]{display:flex;align-items:center;justify-content:flex-end;list-style:none;height:100%}.logo[data-v-7a5b3067]{cursor:pointer;margin-right:auto}.logo[data-v-7a5b3067],.logo__img[data-v-7a5b3067]{height:50px;width:50px}.link[data-v-7a5b3067]:not(:last-of-type){margin-right:20px}.userName[data-v-7a5b3067]{font-size:16px;font-weight:700;margin-right:8px}.iconWrapper[data-v-7a5b3067]{position:relative}.icon[data-v-7a5b3067]{cursor:pointer;overflow:hidden;border-radius:50px}.icon[data-v-7a5b3067],.icon__img[data-v-7a5b3067]{height:50px;width:50px}.tabMenuWrapper[data-v-7a5b3067]{position:fixed;top:0;left:0;bottom:0;right:0;z-index:1000}.tabMenu[data-v-7a5b3067]{padding:0 10px;height:100%;flex-direction:column}.tabMenu[data-v-7a5b3067],.tabMenu__link[data-v-7a5b3067]{display:flex;justify-content:center}.tabMenu__link[data-v-7a5b3067]{background-color:#fff;align-items:center;height:50px;text-align:center;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:5px;z-index:100}.tabMenu__background[data-v-7a5b3067]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);width:100%;height:100%}",""]),t.exports=n},205:function(t,e,r){"use strict";r.r(e);r(37),r(31),r(36),r(59),r(32),r(60);var n=r(6),o=r(25),c=(r(44),r(23),r(12),r(24),r(33),r(155),r(206)),d=r.n(c),l=r(34);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Header",data:function(){return{isMenuVisible:!1}},computed:h(h({},Object(l.c)(["userData"])),{},{userName:function(){return this.userData.name},setImg:function(){return"data:image/png;base64,".concat(this.userData.picture)},hasUserData:function(){return this.userData.id}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,data,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d.a.defaults.headers.get["Access-Control-Allow-Origin"]="*",r=new URL(window.location),n=r.searchParams.get("userId"),o=r.searchParams.get("token"),c=t.$cookies.get("token"),n||c){e.next=8;break}return window.location="/login",e.abrupt("return");case 8:if(!c){e.next=21;break}return e.prev=9,e.next=12,d.a.get("http://localhost:8080/api/user/".concat(n));case 12:return l=e.sent,data=l.data,t.setUserActions(data.data),e.abrupt("return");case 18:e.prev=18,e.t0=e.catch(9),alert("処理に失敗しました");case 21:if(n&&o){e.next=23;break}return e.abrupt("return");case 23:return e.prev=23,e.next=26,d.a.get("http://localhost:8080/api/user/".concat(n));case 26:v=e.sent,h=v.data,t.setUserActions(h.data),t.$cookies.set("token",o),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(23),alert("処理に失敗しました");case 35:case"end":return e.stop()}}),e,null,[[9,18],[23,32]])})))()},methods:h(h({},Object(l.b)(["setUserActions"])),{},{setMenuOpen:function(){this.isMenuVisible=!0,document.body.style.overflow="hidden"},setMenuClose:function(){this.isMenuVisible=!1,document.body.style.overflow=""},toUserScreen:function(){this.setMenuClose(),this.$router.push("/user")},toReviewScreen:function(){this.setMenuClose(),this.$router.push("/review")},toMatchScreen:function(){this.setMenuClose(),this.$router.push("/match")},logout:function(){this.$cookies.set("token",""),window.location="http://localhost:8080/logout"},toHomeScreen:function(){this.setMenuClose(),this.$router.push("/")}})},f=(r(203),r(35)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"headerWrapper"},[t.hasUserData?r("header",{staticClass:"header"},[r("nav",{staticClass:"header__nav"},[r("ul",{staticClass:"headerLinks"},[r("h1",{staticClass:"logo",on:{click:t.toHomeScreen}},[r("img",{staticClass:"logo__img",attrs:{src:"/logo.png",alt:"ロゴ"}})]),t._v(" "),r("div",{staticClass:"userName"},[t._v(t._s(t.userName))]),t._v(" "),r("div",{staticClass:"iconWrapper"},[r("div",{staticClass:"icon",on:{click:t.setMenuOpen}},[r("img",{staticClass:"icon__img",attrs:{src:t.userData.picture,alt:""}})])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuVisible,expression:"isMenuVisible"}],staticClass:"tabMenuWrapper"},[r("div",{staticClass:"tabMenu__background",on:{click:t.setMenuClose}}),t._v(" "),r("ul",{staticClass:"tabMenu"},[r("li",{staticClass:"tabMenu__link",on:{click:t.toHomeScreen}},[t._v("Home")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toReviewScreen}},[t._v("レビュー一覧")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toMatchScreen}},[t._v("すれ違い一覧")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.toUserScreen}},[t._v("ユーザー情報")]),t._v(" "),r("li",{staticClass:"tabMenu__link",on:{click:t.logout}},[t._v("ログアウト")])])])]):t._e()])}),[],!1,null,"7a5b3067",null);e.default=component.exports},218:function(t,e,r){var content=r(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("0b5c13be",content,!0,{sourceMap:!1})},246:function(t,e,r){"use strict";r(218)},247:function(t,e,r){var n=r(57)(!1);n.push([t.i,'.container[data-v-0d04d9da]{margin:0 auto;min-height:100vh;text-decoration:none;padding:0 20px 20px}.title[data-v-0d04d9da]{font-weight:600;font-size:1.2em;margin-top:10px}.reviewItemList[data-v-0d04d9da]{border-top:1px solid #d5d5d8;margin-top:10px}.reviewItemCard[data-v-0d04d9da]{border-bottom:1px solid #d5d5d8;padding:10px 0}.cardHeader[data-v-0d04d9da]{display:flex}.profileImgWrapper[data-v-0d04d9da]{height:10vw;margin-right:10px}.profileImg[data-v-0d04d9da]{height:100%;border-radius:50%}.userName[data-v-0d04d9da]{color:#2e2e3b;font-size:1.07692rem;font-weight:700;margin-bottom:3px}.rating[data-v-0d04d9da]{color:#6c6c75;font-size:.85rem}.ratingStar[data-v-0d04d9da]{color:#e00031}.reviewWrapper[data-v-0d04d9da]{margin-top:10px}.reviewSentenceWrapper[data-v-0d04d9da]{position:relative;line-height:1.35;max-height:2.7em;overflow:hidden;font-size:.85rem;color:#2e2e3b}.reviewSentenceWrapper[data-v-0d04d9da]:before{content:"…";bottom:0;right:0;position:absolute;background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff 40%);padding-left:1em}.reviewSentenceWrapper[data-v-0d04d9da]:after{content:"";width:100%;height:100%;margin-left:-1em;position:absolute;background:#fff}.photoImageList[data-v-0d04d9da]{display:flex;overflow-x:auto;white-space:nowrap;margin-top:10px}.photoImageItemWrapper[data-v-0d04d9da]{height:30vw;margin-right:10px}.photoImageItem[data-v-0d04d9da]{height:100%}.footerWrapper[data-v-0d04d9da]{color:#6c6c75;display:flex;align-items:center;font-size:.7rem;margin-top:18px}.footerImgWrapper[data-v-0d04d9da]{height:3vh;margin-right:5px}.footerImg[data-v-0d04d9da]{height:100%}.favoriteNumber[data-v-0d04d9da],.postedDate[data-v-0d04d9da]{margin-right:5px}',""]),t.exports=n},259:function(t,e,r){"use strict";r.r(e);var n=r(206),o=r.n(n),c={name:"Review",components:{Header:r(205).default},data:function(){return{reviewList:[]}},created:function(){var t=this;o.a.get("http://localhost:8080/api/review/").then((function(e){t.reviewList=e.data.data})).catch((function(t){alert(t.message)}))}},d=(r(246),r(35)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Fragment",[r("Header"),t._v(" "),r("div",{staticClass:"container"},[r("NuxtLink",{attrs:{to:"/"}},[t._v("Back To Home")]),t._v(" "),r("h1",{staticClass:"title"},[t._v("レビューリスト")]),t._v(" "),r("ul",{staticClass:"reviewItemList"},t._l(t.reviewList,(function(e){return r("li",{key:e.id,staticClass:"reviewItemCard"},[r("div",{staticClass:"cardHeader"},[r("div",{staticClass:"profileImgWrapper"},[r("img",{staticClass:"profileImg",attrs:{src:"https://mikan.bita.jp//img/members_img/15857163963koudai_kudou_mikan.jpg",alt:e.user.picture}})]),t._v(" "),r("div",[r("div",{staticClass:"userName"},[t._v(t._s(e.user.name))]),t._v(" "),r("div",{staticClass:"rating"},[t._v("\n              評価 :\n              "),r("span",{staticClass:"ratingStar"},[t._v("★★★")])])])]),t._v(" "),r("div",{staticClass:"reviewWrapper"},[r("div",{staticClass:"reviewSentenceWrapper"},[r("p",{staticClass:"reviewSentence"},[t._v("\n              "+t._s(e.content)+"\n              スシローに行ってきました！回転寿司にも関わらず、新鮮なネタが多くて美味しいです！\n              オススメは『えび3点盛り』ですね。3種類のえびを食べられて味は大満足。値段も170円(だった気がする)なので財布にも優しいのが推しポイントです。\n              五反田のスシローはかなり人気なので、昼も夜も予約を取らないと入れないのが難点です。\n              13時に予約を取ろうとすると30,40分待ちはざらにあるため、予約するタイミングは10時に出勤してすぐが良いです。\n              今度一緒にスシロー行きましょう！\n            ")])]),t._v(" "),r("ul",{staticClass:"photoImageList"},[r("li",{staticClass:"photoImageItemWrapper"},[r("img",{staticClass:"photoImageItem",attrs:{src:"https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/13914219.jpg",alt:"店舗写真"}})]),t._v(" "),r("li",{staticClass:"photoImageItemWrapper"},[r("img",{staticClass:"photoImageItem",attrs:{src:"https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/13914223.jpg",alt:"店舗写真"}})]),t._v(" "),r("li",{staticClass:"photoImageItemWrapper"},[r("img",{staticClass:"photoImageItem",attrs:{src:"https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/24430815.jpg",alt:"店舗写真"}})])])]),t._v(" "),r("div",{staticClass:"footerWrapper"},[r("div",{staticClass:"footerImgWrapper"},[r("img",{staticClass:"footerImg",attrs:{src:"https://illust8.com/wp-content/uploads/2018/08/weather_sun_solar_illust_1080.png",alt:"ランチ"}})]),t._v(" "),r("div",{staticClass:"postedDate"},[t._v("2021/04/11")]),t._v(" "),r("div",{staticClass:"favoriteNumber"},[t._v("70いいね")])])])})),0)],1)],1)}),[],!1,null,"0d04d9da",null);e.default=component.exports}}]);