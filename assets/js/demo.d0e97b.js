webpackJsonpwedn([0],{257:function(e,t,n){n(357);var o=n(90)(n(299),n(393),null,null);e.exports=o.exports},258:function(e,t,n){n(349);var o=n(90)(n(300),n(363),null,null);e.exports=o.exports},259:function(e,t,n){var o=n(90)(n(301),n(398),null,null);e.exports=o.exports},260:function(e,t,n){var o=n(90)(n(302),n(372),null,null);e.exports=o.exports},261:function(e,t,n){var o=n(90)(n(303),n(368),null,null);e.exports=o.exports},262:function(e,t,n){n(350);var o=n(90)(n(304),n(365),null,null);e.exports=o.exports},263:function(e,t,n){n(355);var o=n(90)(n(305),n(385),"data-v-57c4f976",null);e.exports=o.exports},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-cors",data:function(){return{photos:{},error:!1}},methods:{fetch:function(){var e=this;this.$axios.get("http://jsonplaceholder.typicode.com/photos").then(function(t){console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config),e.photos=t.data,e.error=!1}).catch(function(t){e.error=t})}}}},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-data",data:function(){for(var e=[],t=0;t<100;t++)e.push({text:"JavaScript "+t,competed:t%2});return{todos:e}}}},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-i18n"}},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo",computed:{demos:function(){return this.$store.getters.header.menus.find(function(e){return"demo"===e.name}).children.filter(function(e){return e.name})}}}},303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-params"}},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-proxy",data:function(){return{posts:{},error:!1}},methods:{fetch:function(){var e=this;this.$axios.get("/posts").then(function(t){console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config),e.posts=t.data,e.error=!1}).catch(function(t){e.error=t})}}}},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(91);t.default={name:"demo-vuex",computed:n.i(o.a)({count:"count"}),methods:n.i(o.b)({increment:"increment",incrementAsync:"incrementAsync",decrement:"decrement",decrementAsync:"decrementAsync"})}},337:function(e,t,n){t=e.exports=n(251)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"data.vue",sourceRoot:""}])},338:function(e,t,n){t=e.exports=n(251)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"proxy.vue",sourceRoot:""}])},343:function(e,t,n){t=e.exports=n(251)(!0),t.push([e.i,"h2[data-v-57c4f976]{width:20rem;margin:2rem auto;padding:5rem;font-size:10rem;text-align:center;background-color:#e0e0e0}.actions[data-v-57c4f976]{display:-webkit-box;display:flex;width:20rem;margin:2rem auto;justify-content:space-around}","",{version:3,sources:["/Users/zce/Local/wedn/dashboard/app/views/demo/vuex.vue"],names:[],mappings:"AACA,oBACE,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,wBAA0B,CAC3B,AACD,0BACE,oBAAqB,AACrB,aAAc,AACd,YAAa,AACb,iBAAkB,AAClB,4BAA8B,CAC/B",file:"vuex.vue",sourcesContent:["\nh2[data-v-57c4f976] {\n  width: 20rem;\n  margin: 2rem auto;\n  padding: 5rem;\n  font-size: 10rem;\n  text-align: center;\n  background-color: #e0e0e0;\n}\n.actions[data-v-57c4f976] {\n  display: -webkit-box;\n  display: flex;\n  width: 20rem;\n  margin: 2rem auto;\n  justify-content: space-around;\n}\n"],sourceRoot:""}])},345:function(e,t,n){t=e.exports=n(251)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"cors.vue",sourceRoot:""}])},349:function(e,t,n){var o=n(337);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(252)("123aa538",o,!0)},350:function(e,t,n){var o=n(338);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(252)("46f4b7d2",o,!0)},355:function(e,t,n){var o=n(343);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(252)("b748b0fc",o,!0)},357:function(e,t,n){var o=n(345);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(252)("15139bed",o,!0)},363:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("ul",e._l(e.todos,function(t){return n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.competed,expression:"todo.competed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.competed)?e._i(t.competed,null)>-1:t.competed},on:{__c:function(n){var o=t.competed,r=n.target,s=!!r.checked;if(Array.isArray(o)){var c=e._i(o,null);s?c<0&&(t.competed=o.concat(null)):c>-1&&(t.competed=o.slice(0,c).concat(o.slice(c+1)))}else t.competed=s}}}),e._v(" "),n("span",[e._v(e._s(t.text))])])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("数据绑定")])])}]}},365:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",[n("p",[e._v("本示例只有在本地开发环境工作，线上托管环境没有代理配置。")]),e._v(" "),n("p",[e._v("！！！过时的示例！！！")]),e._v(" "),n("button",{on:{click:function(t){e.fetch()}}},[e._v("Fetch jsonplaceholder api by proxy")])]),e._v(" "),e.error?n("div",[n("h2",[e._v(e._s(e.error.message))]),e._v(" "),n("pre",[n("code",[e._v(e._s(e.error.stack))])])]):n("ul",e._l(e.posts,function(t){return n("li",[e._v(e._s(t.title))])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("HTTP 代理")])])}]}},368:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("h3",[e._v("Param: "+e._s(e.$route.params.name))]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("路由参数")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("尝试修改URL中的"),n("strong",[e._v("汪磊")]),e._v("为其他的值，然后回车查看。")])}]}},372:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("ul",{staticClass:"demos-links"},e._l(e.demos,function(t){return n("li",[n("router-link",{attrs:{to:t}},[e._v(e._s(t.text))])],1)}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("演示")])])}]}},385:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("h2",[e._v(e._s(e.count))]),e._v(" "),n("div",{staticClass:"actions"},[n("button",{on:{click:e.increment}},[e._v("INC")]),e._v(" "),n("button",{on:{click:e.incrementAsync}},[e._v("INC ASYNC")]),e._v(" "),n("button",{on:{click:e.decrement}},[e._v("DEC")]),e._v(" "),n("button",{on:{click:e.decrementAsync}},[e._v("DEC ASYNC")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("Vuex - Counter")])])}]}},393:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",[n("button",{on:{click:function(t){e.fetch()}}},[e._v("Fetch typicode api by cors")])]),e._v(" "),e.error?n("div",[n("h2",[e._v(e._s(e.error.message))]),e._v(" "),n("pre",[n("code",[e._v(e._s(e.error.stack))])])]):n("ul",e._l(e.photos,function(t){return n("li",[e._v(e._s(t.title))])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("CORS")])])}]}},398:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("p",[e._v(e._s(e.$t("message.hello")))]),e._v(" "),n("p",[e._v(e._s(e.$t("message.hello2",{name:"汪磊"})))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("多语言")])])}]}}});
//# sourceMappingURL=demo.d0e97b.js.map