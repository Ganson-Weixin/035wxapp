(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{2145:function(i,n,t){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(t("a34a"));function a(i){return i&&i.__esModule?i:{default:i}}function r(i,n,t,e,a,r,u){try{var o=i[r](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(e,a)}function u(i){return function(){var n=this,t=arguments;return new Promise((function(e,a){var u=i.apply(n,t);function o(i){r(u,e,a,o,s,"next",i)}function s(i){r(u,e,a,o,s,"throw",i)}o(void 0)}))}}t("976b");var o=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(t("dca2"))}.bind(null,t)).catch(t.oe)},s={components:{uniIcons:o},data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"店铺名称"}],queryIndex:0,searchForm:{waimaixinxidianpumingcheng:""},CustomBar:"0",autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],shanghuxinxilist:[],waimaixinxilist:[],homeshanghuxinxilist:[],homewaimaixinxilist:[],news:[]}},onShow:function(){var i=u(e.default.mark((function i(){var n,t,a,r,u,o,s,c;return e.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),n=[],i.next=4,this.$api.page("config",{page:1,limit:5});case 4:for(t=i.sent,a=!0,r=!1,u=void 0,i.prev=8,o=t.data.list[Symbol.iterator]();!(a=(s=o.next()).done);a=!0)c=s.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&n.push({img:c.value});i.next=16;break;case 12:i.prev=12,i.t0=i["catch"](8),r=!0,u=i.t0;case 16:i.prev=16,i.prev=17,a||null==o.return||o.return();case 19:if(i.prev=19,!r){i.next=22;break}throw u;case 22:return i.finish(19);case 23:return i.finish(16);case 24:return n&&(this.swiperList=n),i.next=27,this.$api.list("news",{page:1,limit:3});case 27:return t=i.sent,this.news=t.data.list,i.next=31,this.$api.recommend("shanghuxinxi",1,6);case 31:return t=i.sent,this.shanghuxinxilist=t.data.list,i.next=35,this.$api.recommend("waimaixinxi",1,6);case 35:return t=i.sent,this.waimaixinxilist=t.data.list,i.next=39,this.$api.list("shanghuxinxi",{page:1,limit:4});case 39:return t=i.sent,this.homeshanghuxinxilist=t.data.list,i.next=43,this.$api.list("waimaixinxi",{page:1,limit:4});case 43:t=i.sent,this.homewaimaixinxilist=t.data.list;case 45:case"end":return i.stop()}}),i,this,[[8,12,16,24],[17,,19,23]])})));function n(){return i.apply(this,arguments)}return n}(),methods:{queryChange:function(i){this.queryIndex=i.detail.value,this.searchForm.waimaixinxidianpumingcheng=""},onSwiperTap:function(i){},onNewsDetailTap:function(i){this.$utils.jump("../news-detail/news-detail?id=".concat(i))},onDetailTap:function(i,n){this.$utils.jump("../".concat(i,"/detail?id=").concat(n))},onPageTap:function(n){0==this.queryIndex&&(i.setStorageSync("indexQueryCondition",this.searchForm.waimaixinxidianpumingcheng),this.searchForm.waimaixinxidianpumingcheng=""),i.navigateTo({url:"../".concat(n,"/list"),fail:function(){i.switchTab({url:"../".concat(n,"/list")})}})}}};n.default=s}).call(this,t("543d")["default"])},5729:function(i,n,t){"use strict";var e=t("db23"),a=t.n(e);a.a},"5a80":function(i,n,t){"use strict";var e,a=function(){var i=this,n=i.$createElement,t=(i._self._c,i.__map(i.shanghuxinxilist,(function(n,t){var e=n.mendianzhaopian.split(",");return{$orig:i.__get_orig(n),g0:e}}))),e=i.__map(i.shanghuxinxilist,(function(n,t){var e=n.mendianzhaopian.split(",");return{$orig:i.__get_orig(n),g1:e}})),a=i.__map(i.waimaixinxilist,(function(n,t){var e=n.waimaifengmian.split(",");return{$orig:i.__get_orig(n),g2:e}})),r=i.__map(i.waimaixinxilist,(function(n,t){var e=n.waimaifengmian.split(",");return{$orig:i.__get_orig(n),g3:e}})),u=i.__map(i.homeshanghuxinxilist,(function(n,t){var e=n.mendianzhaopian.split(",");return{$orig:i.__get_orig(n),g4:e}})),o=i.__map(i.homeshanghuxinxilist,(function(n,t){var e=n.mendianzhaopian.split(",");return{$orig:i.__get_orig(n),g5:e}})),s=i.__map(i.homewaimaixinxilist,(function(n,t){var e=n.waimaifengmian.split(",");return{$orig:i.__get_orig(n),g6:e}})),c=i.__map(i.homewaimaixinxilist,(function(n,t){var e=n.waimaifengmian.split(",");return{$orig:i.__get_orig(n),g7:e}}));i.$mp.data=Object.assign({},{$root:{l0:t,l1:e,l2:a,l3:r,l4:u,l5:o,l6:s,l7:c}})},r=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return e}))},"8af3":function(i,n,t){"use strict";t.r(n);var e=t("2145"),a=t.n(e);for(var r in e)"default"!==r&&function(i){t.d(n,i,(function(){return e[i]}))}(r);n["default"]=a.a},cecf:function(i,n,t){"use strict";t.r(n);var e=t("5a80"),a=t("8af3");for(var r in a)"default"!==r&&function(i){t.d(n,i,(function(){return a[i]}))}(r);t("5729");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=s.exports},db23:function(i,n,t){},ee153:function(i,n,t){"use strict";(function(i){t("d515"),t("921b");e(t("66fd"));var n=e(t("cecf"));function e(i){return i&&i.__esModule?i:{default:i}}i(n.default)}).call(this,t("543d")["createPage"])}},[["ee153","common/runtime","common/vendor"]]]);