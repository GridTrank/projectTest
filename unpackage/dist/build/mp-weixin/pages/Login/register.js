(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Login/register"],{"0220":function(e,n,t){"use strict";(function(e){t("1a7b");o(t("66fd"));var n=o(t("2674"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},2674:function(e,n,t){"use strict";t.r(n);var o=t("df84"),r=t("f6c4");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("51f9");var i,c=t("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"199b9838",null,!1,o["a"],i);n["default"]=s.exports},"51f9":function(e,n,t){"use strict";var o=t("9d37"),r=t.n(o);r.a},"91a5":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("3e0a"),r={data:function(){return{tips:"",model:{},rules:{phone:[{required:!0,validator:this.phoneRule,trigger:"blur"}],password:[{required:!0,validator:this.passWordRule,trigger:"blur"}],password_:[{required:!0,validator:this.confirmPassWord,trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},isAgree:!1}},methods:{phoneRule:function(e,n,t){n&&(0,o.checkStr)(n,"mobile")||t(new Error("请输入正确的手机号码")),t()},passWordRule:function(e,n,t){n&&(0,o.checkStr)(n,"pwd")||t(new Error("密码为8-16位，须包含数字、字母、符号")),t()},confirmPassWord:function(e,n,t){n?n!==this.model.password&&t(new Error("两次密码不一致")):t(new Error("请再次输入密码")),t()},changeType:function(){this.$emit("changeType","login")},codeChange:function(e){this.tips=e},getCode:function(){this.$refs.uCode.canGetCode?(e.$u.toast("验证码已发送"),this.$refs.uCode.start()):e.$u.toast("倒计时结束后再发送")},submit:function(){var e=this;this.$refs.form.validate().then((function(n){delete e.model.password_,console.log(e.model)})).catch((function(e){}))}}};n.default=r}).call(this,t("543d")["default"])},"9d37":function(e,n,t){},df84:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={"u-Form":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--form/u--form")]).then(t.bind(null,"598c"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"b0af"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"5e42"))},uCode:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-code/u-code")]).then(t.bind(null,"79ab"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[]},f6c4:function(e,n,t){"use strict";t.r(n);var o=t("91a5"),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=r.a}},[["0220","common/runtime","common/vendor"]]]);