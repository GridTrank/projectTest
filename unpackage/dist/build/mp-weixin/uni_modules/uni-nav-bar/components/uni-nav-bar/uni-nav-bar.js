(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar"],{4194:function(t,n,e){"use strict";var i=e("e19c"),u=e.n(i);u.a},"6d1a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar").then(function(){return resolve(e("5027"))}.bind(null,e)).catch(e.oe)},u={name:"UniNavBar",components:{statusBar:i},emits:["clickLeft","clickRight","clickTitle"],props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){t.report&&""!==this.title&&t.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")},onClickTitle:function(){this.$emit("clickTitle")}}};n.default=u}).call(this,e("543d")["default"])},"776b":function(t,n,e){"use strict";e.r(n);var i=e("6d1a"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},d59c:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"de8e"))}},u=function(){var t=this,n=t.$createElement;t._self._c},o=[]},e19c:function(t,n,e){},e23d:function(t,n,e){"use strict";e.r(n);var i=e("d59c"),u=e("776b");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("4194");var c,r=e("f0c5"),a=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"50fddd24",null,!1,i["a"],c);n["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e23d"))
        })
    },
    [['uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component']]
]);