(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waimaixinxi/add-or-update"],{"343f":function(i,e,n){"use strict";var t={"w-picker":function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"9689"))}},a=function(){var i=this,e=i.$createElement;i._self._c},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return t}))},"7d2e":function(i,e,n){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(n("a34a"));function a(i){return i&&i.__esModule?i:{default:i}}function r(i,e,n,t,a,r,u){try{var s=i[r](u),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(t,a)}function u(i){return function(){var e=this,n=arguments;return new Promise((function(t,a){var u=i.apply(e,n);function s(i){r(u,t,a,s,o,"next",i)}function o(i){r(u,t,a,s,o,"throw",i)}s(void 0)}))}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("9689"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{ruleForm:{shangjiazhanghao:"",shangjiaxingming:"",dianpumingcheng:"",waimaimingcheng:"",fenlei:"",waimaifengmian:"",waimaifenliang:"",waimaizhuliao:"",waimaixiangqing:"",yueshoushuliang:"",peisongjiage:"",qisongjiage:"",peisongshijian:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:"",price:""},dianpumingchengOptions:[],dianpumingchengIndex:0,fenleiOptions:[],fenleiIndex:0,user:{},ro:{shangjiazhanghao:!1,shangjiaxingming:!1,dianpumingcheng:!1,waimaimingcheng:!1,fenlei:!1,waimaifengmian:!1,waimaifenliang:!1,waimaizhuliao:!1,waimaixiangqing:!1,yueshoushuliang:!1,peisongjiage:!1,qisongjiage:!1,peisongshijian:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1,price:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var e=u(t.default.mark((function e(n){var a,r,u,s;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=i.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:return r=e.sent,this.user=r.data,e.next=7,this.$api.option("shanghuxinxi","dianpumingcheng",{});case 7:return r=e.sent,this.dianpumingchengOptions=r.data,e.next=11,this.$api.option("shipinfenlei","fenlei",{});case 11:if(r=e.sent,this.fenleiOptions=r.data,this.ruleForm.userid=i.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=i.getStorageSync("nickname")),!n.id){e.next=21;break}return this.ruleForm.id=n.id,e.next=19,this.$api.info("waimaixinxi",this.ruleForm.id);case 19:r=e.sent,this.ruleForm=r.data;case 21:if(!n.cross){e.next=100;break}u=i.getStorageSync("crossObj"),e.t0=t.default.keys(u);case 24:if((e.t1=e.t0()).done){e.next=100;break}if(s=e.t1.value,"shangjiazhanghao"!=s){e.next=30;break}return this.ruleForm.shangjiazhanghao=u[s],this.ro.shangjiazhanghao=!0,e.abrupt("continue",24);case 30:if("shangjiaxingming"!=s){e.next=34;break}return this.ruleForm.shangjiaxingming=u[s],this.ro.shangjiaxingming=!0,e.abrupt("continue",24);case 34:if("dianpumingcheng"!=s){e.next=38;break}return this.ruleForm.dianpumingcheng=u[s],this.ro.dianpumingcheng=!0,e.abrupt("continue",24);case 38:if("waimaimingcheng"!=s){e.next=42;break}return this.ruleForm.waimaimingcheng=u[s],this.ro.waimaimingcheng=!0,e.abrupt("continue",24);case 42:if("fenlei"!=s){e.next=46;break}return this.ruleForm.fenlei=u[s],this.ro.fenlei=!0,e.abrupt("continue",24);case 46:if("waimaifengmian"!=s){e.next=50;break}return this.ruleForm.waimaifengmian=u[s],this.ro.waimaifengmian=!0,e.abrupt("continue",24);case 50:if("waimaifenliang"!=s){e.next=54;break}return this.ruleForm.waimaifenliang=u[s],this.ro.waimaifenliang=!0,e.abrupt("continue",24);case 54:if("waimaizhuliao"!=s){e.next=58;break}return this.ruleForm.waimaizhuliao=u[s],this.ro.waimaizhuliao=!0,e.abrupt("continue",24);case 58:if("waimaixiangqing"!=s){e.next=62;break}return this.ruleForm.waimaixiangqing=u[s],this.ro.waimaixiangqing=!0,e.abrupt("continue",24);case 62:if("yueshoushuliang"!=s){e.next=66;break}return this.ruleForm.yueshoushuliang=u[s],this.ro.yueshoushuliang=!0,e.abrupt("continue",24);case 66:if("peisongjiage"!=s){e.next=70;break}return this.ruleForm.peisongjiage=u[s],this.ro.peisongjiage=!0,e.abrupt("continue",24);case 70:if("qisongjiage"!=s){e.next=74;break}return this.ruleForm.qisongjiage=u[s],this.ro.qisongjiage=!0,e.abrupt("continue",24);case 74:if("peisongshijian"!=s){e.next=78;break}return this.ruleForm.peisongshijian=u[s],this.ro.peisongshijian=!0,e.abrupt("continue",24);case 78:if("thumbsupnum"!=s){e.next=82;break}return this.ruleForm.thumbsupnum=u[s],this.ro.thumbsupnum=!0,e.abrupt("continue",24);case 82:if("crazilynum"!=s){e.next=86;break}return this.ruleForm.crazilynum=u[s],this.ro.crazilynum=!0,e.abrupt("continue",24);case 86:if("clicktime"!=s){e.next=90;break}return this.ruleForm.clicktime=u[s],this.ro.clicktime=!0,e.abrupt("continue",24);case 90:if("clicknum"!=s){e.next=94;break}return this.ruleForm.clicknum=u[s],this.ro.clicknum=!0,e.abrupt("continue",24);case 94:if("price"!=s){e.next=98;break}return this.ruleForm.price=u[s],this.ro.price=!0,e.abrupt("continue",24);case 98:e.next=24;break;case 100:this.styleChange();case 101:case"end":return e.stop()}}),e,this)})));function n(i){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},dianpumingchengChange:function(){var i=u(t.default.mark((function i(e){var n;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.dianpumingchengIndex=e.target.value,this.ruleForm.dianpumingcheng=this.dianpumingchengOptions[this.dianpumingchengIndex],i.next=4,this.$api.follow("shanghuxinxi","dianpumingcheng",{columnValue:this.ruleForm.dianpumingcheng});case 4:n=i.sent,n.data.shangjiazhanghao&&(this.ruleForm.shangjiazhanghao=n.data.shangjiazhanghao),n.data.shangjiaxingming&&(this.ruleForm.shangjiaxingming=n.data.shangjiaxingming),n.data.yueshoushuliang&&(this.ruleForm.yueshoushuliang=n.data.yueshoushuliang),n.data.peisongjiage&&(this.ruleForm.peisongjiage=n.data.peisongjiage),n.data.qisongjiage&&(this.ruleForm.qisongjiage=n.data.qisongjiage);case 10:case"end":return i.stop()}}),i,this)})));function e(e){return i.apply(this,arguments)}return e}(),clicktimeConfirm:function(i){console.log(i),this.ruleForm.clicktime=i.result,this.$forceUpdate()},fenleiChange:function(i){this.fenleiIndex=i.target.value,this.ruleForm.fenlei=this.fenleiOptions[this.fenleiIndex]},waimaifengmianTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.waimaifengmian=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=u(t.default.mark((function i(){return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!this.ruleForm.peisongjiage||this.$validate.isIntNumer(this.ruleForm.peisongjiage)){i.next=3;break}return this.$utils.msg("配送价格应输入整数"),i.abrupt("return");case 3:if(!this.ruleForm.qisongjiage||this.$validate.isIntNumer(this.ruleForm.qisongjiage)){i.next=6;break}return this.$utils.msg("起送价格应输入整数"),i.abrupt("return");case 6:if(this.ruleForm.peisongshijian){i.next=9;break}return this.$utils.msg("配送时间不能为空"),i.abrupt("return");case 9:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){i.next=12;break}return this.$utils.msg("赞应输入整数"),i.abrupt("return");case 12:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){i.next=15;break}return this.$utils.msg("踩应输入整数"),i.abrupt("return");case 15:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){i.next=18;break}return this.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 18:if(this.ruleForm.price){i.next=21;break}return this.$utils.msg("价格不能为空"),i.abrupt("return");case 21:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){i.next=24;break}return this.$utils.msg("价格应输入数字"),i.abrupt("return");case 24:if(!this.ruleForm.id){i.next=29;break}return i.next=27,this.$api.update("waimaixinxi",this.ruleForm);case 27:i.next=31;break;case 29:return i.next=31,this.$api.add("waimaixinxi",this.ruleForm);case 31:this.$utils.msgBack("提交成功");case 32:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,n=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===i?n-=60:"end"===i&&(n+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(n,"-").concat(t,"-").concat(a)},toggleTab:function(i){this.$refs[i].show()}}};e.default=o}).call(this,n("543d")["default"])},"7ea8":function(i,e,n){"use strict";var t=n("adf6"),a=n.n(t);a.a},a503:function(i,e,n){"use strict";n.r(e);var t=n("7d2e"),a=n.n(t);for(var r in t)"default"!==r&&function(i){n.d(e,i,(function(){return t[i]}))}(r);e["default"]=a.a},adf6:function(i,e,n){},bbe0:function(i,e,n){"use strict";n.r(e);var t=n("343f"),a=n("a503");for(var r in a)"default"!==r&&function(i){n.d(e,i,(function(){return a[i]}))}(r);n("7ea8");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"7bc7b6be",null,!1,t["a"],u);e["default"]=o.exports},cb1a:function(i,e,n){"use strict";(function(i){n("d515"),n("921b");t(n("66fd"));var e=t(n("bbe0"));function t(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,n("543d")["createPage"])}},[["cb1a","common/runtime","common/vendor"]]]);