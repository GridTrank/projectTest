(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ProductDetail/components/detail-page-header"],{"30b3":function(t,n,a){"use strict";a.r(n);var e=a("4bc0"),r=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=r.a},"4bc0":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=!1,e={name:"ProductPageHeader",data:function(){return{headerOpacity:0,currentAnchor:0,anchorList:[{id:1,name:"商品",top:0},{id:2,name:"评价",top:0},{id:3,name:"详情",top:0}]}},props:{},computed:{statusBarHeight:function(){return this.systemInfo.statusBarHeight},navigationBarHeight:function(){return this.systemInfo.navigationBarHeight}},methods:{navToAnchor:function(n){this.headerOpacity;var e=this.anchorList;this.statusBarHeight,this.navigationBarHeight;0!=this.headerOpacity&&(a=!0,t.pageScrollTo({scrollTop:e[n].top-1,duration:200}),this.currentAnchor=n,setTimeout((function(){a=!1}),400))},pageScroll:function(t){if(this.headerOpacity=t.scrollTop/150,!a){var n=this.currentAnchor,e=this.anchorList,r=t.scrollTop>=e[2].top?2:t.scrollTop>=e[1].top?1:0;r!==n&&(this.currentAnchor=r)}},navBack:function(){t.navigateBack()}}};n.default=e}).call(this,a("543d")["default"])},"5ba8":function(t,n,a){},"7ed7":function(t,n,a){"use strict";var e=a("5ba8"),r=a.n(e);r.a},c557:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var r=function(){var t=this,n=t.$createElement;t._self._c},i=[]},e6af:function(t,n,a){"use strict";a.r(n);var e=a("c557"),r=a("30b3");for(var i in r)"default"!==i&&function(t){a.d(n,t,(function(){return r[t]}))}(i);a("7ed7");var o,c=a("f0c5"),u=Object(c["a"])(r["default"],e["b"],e["c"],!1,null,"4a1eaed1",null,!1,e["a"],o);n["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ProductDetail/components/detail-page-header-create-component',
    {
        'pages/ProductDetail/components/detail-page-header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e6af"))
        })
    },
    [['pages/ProductDetail/components/detail-page-header-create-component']]
]);