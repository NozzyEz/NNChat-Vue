(function(t){function e(e){for(var a,r,o=e[0],i=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],a=!0,o=1;o<s.length;o++){var i=s[o];0!==n[i]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},c=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"0f7d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-wrapper row",class:[t.message.received?"start-xs":"end-xs"]},[s("div",{staticClass:"message",class:[t.message.received?"received":"sent"]},[t._v(" "+t._s(t.message.content)+" ")])])},n=[],c={props:["message"]},r=c,o=(s("34a4"),s("2877")),i=Object(o["a"])(r,a,n,!1,null,"4ada1d50",null);e["default"]=i.exports},1:function(t,e){},"284c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"messages"},t._l(t.chat,(function(t){return s("message",{attrs:{message:t}})})),1)},n=[],c={props:["chat"]},r=c,o=(s("ce1e"),s("2877")),i=Object(o["a"])(r,a,n,!1,null,"531b7145",null);e["default"]=i.exports},"34a4":function(t,e,s){"use strict";var a=s("3b05"),n=s.n(a);n.a},"3b05":function(t,e,s){},"3c27":function(t,e,s){},"40f8":function(t,e,s){"use strict";var a=s("554f"),n=s.n(a);n.a},"554f":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],r=(s("034f"),s("2877")),o={},i=Object(r["a"])(o,n,c,!1,null,null,null),l=i.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-2"},[s("chats")],1),s("div",{staticClass:"col-xs-8"},[s("chat")],1)])])},f=[],h=s("ced0"),p={data(){return{contacts:{abcdefg:{name:"Kris",key:"key123"},hijklmn:{name:"Mark",key:"key456"}},chats:{abcdefg:[],hijklmn:[]}}},created(){this.getData(),this.$store.state.contacts=this.contacts},methods:{getData(){Object(h["a"])("chats").then(t=>{void 0===t?(console.log("stored chats not found..."),Object(h["b"])("chats",this.chats).then(()=>{console.log("empty chats list created."),this.$store.state.chats=this.chats})):this.$store.state.chats=t}),Object(h["a"])("credentials").then(t=>{void 0===t?(console.log("stored credentials not found..."),Object(h["b"])("credentials",this.generateCredentials()).then(()=>{console.log("new credentials generated."),this.$store.state.credentials=this.credentials})):this.$store.state.credentials=t}),Object(h["a"])("contacts").then(t=>{void 0===t?(console.log("stored contacts not found..."),Object(h["b"])("contacts",this.contacts).then(()=>{console.log("empty contacts list created."),this.$store.state.contacts=this.contacts})):this.$store.state.contacts=t})},generateCredentials(){return{hash:"myhash",pass:"mypass"}}}},v=p,m=Object(r["a"])(v,d,f,!1,null,null,null),g=m.exports;a["a"].use(u["a"]);const b=[{path:"/",name:"frontpage",component:g}],y=new u["a"]({mode:"history",base:"/",routes:b});var C=y,_=s("2f62");a["a"].use(_["a"]);var x=new _["a"].Store({state:{selectedChat:"abcdefg",contacts:{},chats:{},credentials:{}}}),O=s("28dd"),w=(s("05cc"),s("660e"));a["a"].use(O["a"]),a["a"].use(w["a"],{breakpoints:{sm:768,lg:1/0}}),a["a"].filter("date",(function(t){if(!t)return"";let e=["January","February","March","April","May","June","July","August","September","October","November","December"],s=t.toString().split(" ")[0].replace(/-/g,"/"),a=new Date(s);return e[a.getMonth()]+" "+a.getDate()+", "+a.getFullYear()})),a["a"].config.productionTip=!1;const $=s("6ae9");$.keys().forEach(t=>{a["a"].component(t.split("/").pop().split(".")[0],$(t).default||$(t))}),new a["a"]({router:C,store:x,render:function(t){return t(l)}}).$mount("#app")},"6ae9":function(t,e,s){var a={"./Chat.vue":"e6b0","./ChatItem.vue":"6b87","./Chats.vue":"ac11","./Message.vue":"0f7d","./Messages.vue":"284c"};function n(t){var e=c(t);return s(e)}function c(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=c,t.exports=n,n.id="6ae9"},"6b87":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-item row middle-xs",on:{click:t.selectChat}},[s("div",{staticClass:"user col-xs-12"},[t._v(" "+t._s(t.$store.state.contacts[t.contact].name)+" ")]),s("div",{staticClass:"last-message col-xs-12"},[t._v(" hash="+t._s(t.contact)+" key="+t._s(t.$store.state.contacts[t.contact].key)+" ")])])},n=[],c={props:["contact"],methods:{selectChat(){this.$store.state.selectedChat=this.contact}}},r=c,o=(s("40f8"),s("2877")),i=Object(o["a"])(r,a,n,!1,null,"fc724150",null);e["default"]=i.exports},"85ec":function(t,e,s){},8606:function(t,e,s){},"8a8b":function(t,e,s){},9497:function(t,e,s){"use strict";var a=s("8a8b"),n=s.n(a);n.a},ac11:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chats"},[s("div",{staticClass:"add-contact row middle-xs",on:{click:t.addContact}},[s("div",{staticClass:"col-xs start-xs"},[t._v(" Add Contact ")]),s("div",{staticClass:"col-xs end-xs"},[t._v(" + ")])]),t._l(t.$store.state.contacts,(function(t,e){return s("chat-item",{attrs:{contact:e}})}))],2)},n=[],c={data(){return{contact:{name:"Cata",key:"key789"}}},methods:{addContact(){this.$set(this.$store.state.contacts,"opqrstu",this.contact),console.log(this.$store.state.contacts)}}},r=c,o=(s("9497"),s("2877")),i=Object(o["a"])(r,a,n,!1,null,"28f77fb2",null);e["default"]=i.exports},ce1e:function(t,e,s){"use strict";var a=s("8606"),n=s.n(a);n.a},e6b0:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"user-wrapper row middle-xs"},[s("div",{staticClass:"col-xs"},[t._v(" "+t._s(t.$store.state.contacts[t.$store.state.selectedChat].name)+" ")])]),s("div",{staticClass:"messages-wrapper"},[s("messages",{attrs:{chat:t.$store.state.chats[t.$store.state.selectedChat]}})],1),s("div",{staticClass:"input-wrapper row middle-xs"},[s("div",{staticClass:"col-xs"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"input-field",attrs:{type:"text"},domProps:{value:t.message},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)},input:function(e){e.target.composing||(t.message=e.target.value)}}})])])])},n=[],c=s("ced0"),r={data(){return{message:""}},methods:{sendMessage(){this.$store.state.chats[this.$store.state.selectedChat].push({received:!1,content:this.message}),Object(c["b"])("chats",this.$store.state.chats).then(()=>{}),this.message=""}}},o=r,i=(s("ee0d"),s("2877")),l=Object(i["a"])(o,a,n,!1,null,"2f52ac63",null);e["default"]=l.exports},ee0d:function(t,e,s){"use strict";var a=s("3c27"),n=s.n(a);n.a}});
//# sourceMappingURL=app.8ee5af44.js.map