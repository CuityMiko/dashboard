webpackJsonpwedn([0,20],{193:function(e,t,n){n(277);var s=n(63)(n(233),n(288),null,null);e.exports=s.exports},194:function(e,t,n){var s=n(63)(n(234),n(321),null,null);e.exports=s.exports},195:function(e,t,n){var s=n(63)(n(235),n(296),null,null);e.exports=s.exports},196:function(e,t,n){n(279);var s=n(63)(n(236),n(303),null,null);e.exports=s.exports},197:function(e,t,n){var s=n(63)(n(237),n(292),null,null);e.exports=s.exports},198:function(e,t,n){n(278);var s=n(63)(n(238),n(290),null,null);e.exports=s.exports},199:function(e,t,n){n(282);var s=n(63)(n(239),n(311),"data-v-57c4f976",null);e.exports=s.exports},233:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-data",data:function(){for(var e=[],t=0;t<100;t++)e.push({text:"JavaScript "+t,competed:t%2});return{todos:e}}}},234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-i18n"}},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo"}},236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-jsonp",data:function(){return{photos:{},error:!1}},mounted:function(){},methods:{fetch:function(){var e=this;this.$http.jsonp("http://jsonplaceholder.typicode.com/photos").then(function(t){e.photos=t.data}).catch(function(t){e.error=t})}}}},237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-params"}},238:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo-proxy",data:function(){return{posts:{},error:!1}},mounted:function(){},methods:{fetch:function(){var e=this;this.$http.get("/api/posts").then(function(t){e.posts=t.data}).catch(function(t){e.error=t})}}}},239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(64);t.default={name:"demo-vuex",computed:n.i(s.a)({count:"count"}),methods:n.i(s.b)({increment:"increment",incrementAsync:"incrementAsync",decrement:"decrement",decrementAsync:"decrementAsync"})}},268:function(e,t,n){t=e.exports=n(186)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"data.vue",sourceRoot:""}])},269:function(e,t,n){t=e.exports=n(186)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"proxy.vue",sourceRoot:""}])},270:function(e,t,n){t=e.exports=n(186)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"jsonp.vue",sourceRoot:""}])},273:function(e,t,n){t=e.exports=n(186)(),t.push([e.i,"h2[data-v-57c4f976]{width:20rem;margin:2rem auto;padding:5rem;font-size:10rem;text-align:center;background-color:#e0e0e0}.actions[data-v-57c4f976]{display:-webkit-box;display:flex;width:20rem;margin:2rem auto;justify-content:space-around}","",{version:3,sources:["/Users/zce/Local/wedn/dashboard/app/views/demo/vuex.vue"],names:[],mappings:"AACA,oBACE,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,wBAA0B,CAC3B,AACD,0BACE,oBAAqB,AACrB,aAAc,AACd,YAAa,AACb,iBAAkB,AAClB,4BAA8B,CAC/B",file:"vuex.vue",sourcesContent:["\nh2[data-v-57c4f976] {\n  width: 20rem;\n  margin: 2rem auto;\n  padding: 5rem;\n  font-size: 10rem;\n  text-align: center;\n  background-color: #e0e0e0;\n}\n.actions[data-v-57c4f976] {\n  display: -webkit-box;\n  display: flex;\n  width: 20rem;\n  margin: 2rem auto;\n  justify-content: space-around;\n}\n"],sourceRoot:""}])},277:function(e,t,n){var s=n(268);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(187)("48e4af08",s,!0)},278:function(e,t,n){var s=n(269);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(187)("affbc5e4",s,!0)},279:function(e,t,n){var s=n(270);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(187)("7934bf0b",s,!0)},282:function(e,t,n){var s=n(273);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(187)("26b92bbe",s,!0)},288:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[e._m(0),e._v(" "),n("ul",e._l(e.todos,function(t){return n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.competed,expression:"todo.competed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.competed)?e._i(t.competed,null)>-1:t.competed},on:{__c:function(n){var s=t.competed,r=n.target,o=!!r.checked;if(Array.isArray(s)){var i=null,c=e._i(s,i);o?c<0&&(t.competed=s.concat(i)):c>-1&&(t.competed=s.slice(0,c).concat(s.slice(c+1)))}else t.competed=o}}}),e._v(" "),n("span",[e._v(e._s(t.text))])])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("数据绑定")])])}]}},290:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[e._m(0),e._v(" "),n("div",[n("p",[e._v("本示例只有在本地开发环境工作，线上托管环境没有代理配置。")]),e._v(" "),n("button",{on:{click:function(t){e.fetch()}}},[e._v("Fetch typicode api by proxy")])]),e._v(" "),e.error?n("div",[n("h2",[e._v(e._s(e.error.status)+" - "+e._s(e.error.statusText))]),e._v(" "),n("p",[e._v(e._s(e.error.body))])]):e._e(),e._v(" "),e.error?e._e():n("ul",e._l(e.posts,function(t){return n("li",[n("span",[e._v(e._s(t.title))])])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("HTTP代理")])])}]}},292:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[e._m(0),e._v(" "),n("h3",[e._v("Param: "+e._s(e.$route.params.name))]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("路由参数")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("尝试修改URL中的"),n("strong",[e._v("汪磊")]),e._v("为其他的值，然后回车查看。")])}]}},296:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("演示")])])])}]}},303:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[e._m(0),e._v(" "),n("div",[n("button",{on:{click:function(t){e.fetch()}}},[e._v("Fetch typicode api by jsonp")])]),e._v(" "),e.error?n("div",[n("h2",[e._v(e._s(e.error.status)+" - "+e._s(e.error.statusText))]),e._v(" "),n("p",[e._v(e._s(e.error.body))])]):e._e(),e._v(" "),e.error?e._e():n("ul",e._l(e.photos,function(t){return n("li",[n("span",[e._v(e._s(t.title))])])}))])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("JSONP")])])}]}},311:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[e._m(0),e._v(" "),n("h2",[e._v(e._s(e.count))]),e._v(" "),n("div",{staticClass:"actions"},[n("button",{on:{click:e.increment}},[e._v("INC")]),e._v(" "),n("button",{on:{click:e.incrementAsync}},[e._v("INC ASYNC")]),e._v(" "),n("button",{on:{click:e.decrement}},[e._v("DEC")]),e._v(" "),n("button",{on:{click:e.decrementAsync}},[e._v("DEC ASYNC")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("Vuex - Counter")])])}]}},321:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[e._m(0),e._v(" "),n("p",[e._v(e._s(e.$t("message.hello")))]),e._v(" "),n("p",[e._v(e._s(e.$t("message.hello2",{name:"汪磊"})))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("多语言")])])}]}}});
//# sourceMappingURL=demo.581363.js.map