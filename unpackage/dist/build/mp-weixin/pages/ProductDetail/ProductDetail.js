(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ProductDetail/ProductDetail"],{"5b47":function(t,e,n){"use strict";(function(t){n("1a7b");r(n("66fd"));var e=r(n("6afe"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"6afe":function(t,e,n){"use strict";n.r(e);var r=n("7a52"),a=n("815f");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("e680"),n("9b20");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"2bb3e629",null,!1,r["a"],u);e["default"]=c.exports},"7a52":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"815f":function(t,e,n){"use strict";n.r(e);var r=n("bab5"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"9b20":function(t,e,n){"use strict";var r=n("a812"),a=n.n(r);a.a},a812:function(t,e,n){},bab5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,a,i,u){try{var o=t[i](u),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function o(t){i(u,r,a,o,c,"next",t)}function c(t){i(u,r,a,o,c,"throw",t)}o(void 0)}))}}var o=function(){n.e("pages/ProductDetail/components/detail-page-header").then(function(){return resolve(n("e6af"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("pages/ProductDetail/components/mix-swiper").then(function(){return resolve(n("a39b"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("pages/ProductDetail/components/bottom-operation").then(function(){return resolve(n("6006"))}.bind(null,n)).catch(n.oe)},d={components:{pageHeader:o,mixSwiper:c,bottomOperation:s},data:function(){return{currentSku:{},data:{images:[]},ratingData:{}}},onLoad:function(t){this.id=t.id},onShow:function(){},onPageScroll:function(t){this.$refs.pageHeader&&this.$refs.pageHeader.pageScroll(t)},onShareAppMessage:function(t){return{title:this.data.title,path:"/pages/product/detail?id="+this.data._id,imageUrl:this.data.thumb}},methods:{loadData:function(){var e=this;return u(r.default.mark((function n(){var a,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$request("product","getDetail",{id:e.id});case 2:if(a=n.sent,0!==a.status){n.next=7;break}return e.$util.msg(a.msg||"产品不存在或已下架"),setTimeout((function(){t.navigateBack()}),1e3),n.abrupt("return");case 7:i=a.data,i.content=i.content.replace(/img src="/g,'img style="display:block;width:100%;height:auto" src="'),e.data=i,e.$nextTick((function(){e.calcAnchor()})),e.addProductHistory();case 12:case"end":return n.stop()}}),n)})))()},loadRating:function(){var t=this;return u(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request("rating","getDetailRating",{product_id:t.id});case 2:n=e.sent,t.ratingData=n,t.$nextTick((function(){t.calcAnchor()}));case 5:case"end":return e.stop()}}),e)})))()},addToCart:function(){var e=this;this.$util.throttle(u(r.default.mark((function n(){var a,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.getConfirmData(),a){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.$request("cart","add",a,{showLoading:!0,login:!0});case 5:if(i=n.sent,i){n.next=8;break}return n.abrupt("return");case 8:e.log(i),e.$util.msg(i.msg),1===i.status&&(e.hidePopup("skuPopup"),e.$store.dispatch("getCartCount"),t.$emit("refreshCart"));case 11:case"end":return n.stop()}}),n)}))))},buyNow:function(){var t=this.getConfirmData();t&&(this.hidePopup("skuPopup"),this.navTo("/pages/order/createOrder?data="+JSON.stringify(t),{login:!0}))},setCurrentSku:function(t){this.currentSku=t},getConfirmData:function(){var t=this.currentSku._id?this.currentSku:this.data.sku[0];if(t.stock<=0||this.data.stock<=0)return this.$util.msg("库存不足"),!1;var e={product_id:this.data._id,number:this.$refs.skuPopup.buyNumber||1,sku:this.currentSku._id?this.currentSku:this.data.sku[0]};return e},calcAnchor:function(){var e=this;return u(r.default.mark((function n(){var a,i,u,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(e){t.createSelectorQuery().select("#rating").boundingClientRect((function(t){e(t)})).exec()}));case 2:a=n.sent,i=e.systemInfo.statusBarHeight+e.systemInfo.navigationBarHeight,u=(a?a.top:0)-i,o=(a?a.bottom:0)+t.upx2px(12)-i,e.$refs.pageHeader.anchorList[1].top=u,e.$refs.pageHeader.anchorList[2].top=o,[0,u,o];case 9:case"end":return n.stop()}}),n)})))()},addProductHistory:function(){var e=this.data,n=t.getStorageSync("productHistory");n||(n=[]);var r=n.findIndex((function(t){return t.id===e._id}));-1!==r&&n.splice(r,1),n.unshift({id:e._id,thumb:e.thumb}),t.setStorageSync("productHistory",n)},delHistory:function(){var e=t.getStorageSync("productHistory");if(e){var n=e.findIndex((function(t){return t._id===data._id}));-1!==n&&(e.splice(n,1),t.setStorageSync("productHistory",e))}},showPopup:function(t,e){this.$refs[t].open(e)},onOprationClick:function(t){this.showPopup("skuPopup",t)},doAppShare:function(){var e=this;this.$util.throttle(u(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a={provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:e.data.thumb,title:e.data.title,miniProgram:{id:"gh_3dada2e0f833",path:"/pages/product/detail?id="+e.data._id,type:0,webUrl:"http://guoyunnet.com"},success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}},t.share(a);case 2:case"end":return n.stop()}}),n)}))))}}};e.default=d}).call(this,n("543d")["default"])},d04a:function(t,e,n){},e680:function(t,e,n){"use strict";var r=n("d04a"),a=n.n(r);a.a}},[["5b47","common/runtime","common/vendor"]]]);