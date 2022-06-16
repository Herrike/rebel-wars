/*! For license information please see 877.b02cb40c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[877],{877:function(t,e,r){r.r(e),r.d(e,{AllianceLogo:function(){return P},ApiError:function(){return a},Filter:function(){return g},Layout:function(){return S},Loading:function(){return c},Navigation:function(){return d},Pagination:function(){return h},Space:function(){return m},SwitchLang:function(){return v}});var n=r(791),i=r(257),o=r(184),a=function(t){var e=t.error,r=void 0===e?new Error("Error: Unable to fetch resource"):e,a=(0,n.useContext)(i.o).activeSection;return(0,o.jsxs)("div",{"data-testid":"api-error-".concat(a.toLowerCase()),children:["Api Error for ",a,", ",null===r||void 0===r?void 0:r.message]})},c=function(t){var e=t.resourceName,r=void 0===e?"resources":e;return(0,o.jsxs)("div",{"data-testid":"loading-".concat(r.toLowerCase()),children:["Scanning for ",r]})},u=r(501),s=n.lazy((function(){return Promise.resolve().then(r.bind(r,877)).then((function(t){return{default:t.AllianceLogo}}))})),l=n.lazy((function(){return Promise.resolve().then(r.bind(r,877)).then((function(t){return{default:t.SwitchLang}}))})),f=["planets","vehicles","species","starships"],d=function(){return(0,o.jsx)("nav",{className:"main-nav",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"rebel-alliance-logo",children:(0,o.jsx)(u.rU,{"data-testid":"anchor-home",to:"/",children:(0,o.jsx)(s,{})})}),f.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{"data-testid":"anchor-".concat(t),to:"/".concat(t),children:t})},t)})),(0,o.jsxs)("li",{className:"lang",children:["Language ",(0,o.jsx)(l,{})]})]})})},h=function(t){var e,r=t.items,n=t.page,i=t.setPage,a=t.disabled,c=Math.ceil(r/10),u=function(t){var e=parseInt(t.currentTarget.getAttribute("data-page")||"");Number.isInteger(e)&&i("".concat(e))};return(0,o.jsxs)("nav",{className:"pagination-nav",children:[a&&(0,o.jsx)("p",{className:"message-pagination-disabled",children:"[ ! ] Pagination disabled when a strategy filter is active"}),(0,o.jsx)("ul",{children:(e=c,Array.from(new Array(e))).map((function(t,e){var r=e+1,i="page-".concat(r);return(0,o.jsx)("li",{children:(0,o.jsx)("button",{onClick:u,"data-page":r,"data-testid":i,disabled:a,children:String(r)===n?(0,o.jsx)("strong",{children:r}):r})},i)}))})]})},p=r(475),v=function(){return(0,o.jsx)("form",{action:"#",children:(0,o.jsxs)("select",{name:"lang",id:"switch-lang",value:"",disabled:!0,title:"wookiee language support coming soon",children:[(0,o.jsx)("option",{value:"",children:"English"}),(0,o.jsx)("option",{value:p.s1,children:p.s1})]})})},y=r(28),g=function(t){var e=t.section,r=t.activeFilter,n=t.setActiveFilter;return(0,o.jsxs)("ul",{className:"filter",children:[(0,o.jsxs)("li",{children:["Filter ",(0,o.jsx)("strong",{children:e.toUpperCase()})," by:"]}),(0,o.jsx)("li",{children:(0,o.jsxs)("button",{onClick:function(t){n(!r)},"data-filter":r,title:"filters results per page",children:[(0,y.cH)(e,!0)," strategy"]})})]})},m=function(){return(0,o.jsx)("div",{className:"stars-wrapper",children:(0,o.jsxs)("svg",{className:"extras",width:"100%",height:"100%",preserveAspectRatio:"none",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("radialGradient",{id:"comet-gradient",cx:"0",cy:".5",r:"0.5",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:"rgba(255,255,255,.8)"}),(0,o.jsx)("stop",{offset:"100%",stopColor:"rgba(255,255,255,0)"})]})}),(0,o.jsx)("g",{transform:"rotate(-135)",children:(0,o.jsx)("ellipse",{className:"comet comet-a",fill:"url(#comet-gradient)",cx:"0",cy:"0",rx:"150",ry:"2"})}),(0,o.jsx)("g",{transform:"rotate(20)",children:(0,o.jsx)("ellipse",{className:"comet comet-b",fill:"url(#comet-gradient)",cx:"100%",cy:"0",rx:"150",ry:"2"})}),(0,o.jsx)("g",{transform:"rotate(300)",children:(0,o.jsx)("ellipse",{className:"comet comet-c",fill:"url(#comet-gradient)",cx:"40%",cy:"100%",rx:"150",ry:"2"})})]})})},x=r(885),w=r(871),b=r(328),j=r(516),L=function(){return(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:"unauthorized",children:"On behalf of the Admiral and the Princess, any attempt to use this system from terminals with resolution less than 1024 are prohibited and punished by banishment."})})},E=n.lazy((function(){return Promise.resolve().then(r.bind(r,877)).then((function(t){return{default:t.Navigation}}))})),k=n.lazy((function(){return Promise.resolve().then(r.bind(r,877)).then((function(t){return{default:t.Space}}))})),O=n.lazy((function(){return Promise.resolve().then(r.bind(r,877)).then((function(t){return{default:t.ApiError}}))})),S=function(t){var e=t.children,r=(0,w.TH)().pathname,a=(0,n.useContext)(i.o),s=a.activeSection,l=a.contentSection,f=a.setActiveSection,d=a.setContentSection,h=(0,u.lr)(),v=(0,x.Z)(h,1)[0],y=(0,b.iP)().width,g=(0,b.ib)("api".concat(r).concat((0,p.W2)(v.get("page")))),m=g.data,S=g.error;return(0,n.useEffect)((function(){v.get("page")||""===s||v.set("page","1")}),[v]),(0,n.useEffect)((function(){if((0,j.SF)(m)&&(0,j.zH)(null===m||void 0===m?void 0:m.results)){var t=r.slice(1);d(m),s!==t&&(0,j.uj)(t)&&f(t)}}),[l,m]),(0,o.jsx)(n.Suspense,{fallback:(0,o.jsx)(c,{resourceName:s}),children:S?(0,o.jsx)(O,{error:S}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E,{}),(0,o.jsx)(k,{}),y<1024?(0,o.jsx)(L,{}):e]})})},P=function(){return(0,o.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M7.42,145.986C9.185,99.193,32.899,56.035,76.25,27.516c0.128,0.048,1.251-0.361,0.738,0.61\r c-3.434,3.184-65.172,76.114-8.344,133.68c0,0,29.858,28.704,53.011,1.468c0,0,22.847-29.577-0.289-74.413\r c0,0-5.856-14.64-26.955-23.721l16.992-18.748c0,0,14.359,6.161,25.478,22.871c0,0,0.593-17.593-12.884-36.34l26.345-29.89\r l26.08,29.609c0,0-11.993,16.991-12.876,36.902c0,0,8.191-13.477,25.776-23.151l16.686,18.748c0,0-16.045,5.287-26.794,23.529\r c-9.242,16.902-16.357,53.05,0.416,75.223c0,0,18.772,26.618,51.792-1.571c0,0,60.712-54.399-6.226-133.048\r c0,0-3.658-3.233,0.449-1.476c29.586,21.54,65.012,49.946,68.67,120.837c-1.444,85.966-59.012,147.334-143.074,147.334\r C68.934,295.968,4.95,227.283,7.42,145.986"})})})}},328:function(t,e,r){r.d(e,{OR:function(){return p},ib:function(){return h},LI:function(){return o},KS:function(){return i},iP:function(){return v}});var n=r(791);var i=function(t,e){var r=(0,n.useRef)(t);o((function(){r.current=t}),[t]),(0,n.useEffect)((function(){if(e||0===e){var t=setTimeout((function(){return r.current()}),e);return function(){return clearTimeout(t)}}}),[e])},o="undefined"!==typeof window?n.useLayoutEffect:n.useEffect;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),a=new k(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return S()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var d={};function h(){}function p(){}function v(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==e&&r.call(m,i)&&(y=m);var x=v.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(i,o,c,u){var s=f(t[i],t,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==a(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=v,s(x,"constructor",v),s(v,"constructor",p),p.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new b(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}var s=r(885);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=function(t,e){var r=(0,n.useRef)({}),i=(0,n.useRef)(!1),o={error:void 0,data:void 0},a=(0,n.useReducer)((function(t,e){switch(e.type){case"loading":return d({},o);case"fetched":return d(d({},o),{},{data:e.payload});case"error":return d(d({},o),{},{error:e.payload});default:return t}}),o),l=(0,s.Z)(a,2),f=l[0],h=l[1];return(0,n.useEffect)((function(){if(t){i.current=!1;var n=function(){var n,o=(n=c().mark((function n(){var o,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(h({type:"loading"}),!r.current[t]){n.next=4;break}return h({type:"fetched",payload:r.current[t]}),n.abrupt("return");case 4:return n.prev=4,n.next=7,fetch(t,e);case 7:if((o=n.sent).ok){n.next=10;break}throw new Error(o.statusText);case 10:return n.next=12,o.json();case 12:if(a=n.sent,r.current[t]=a,!i.current){n.next=16;break}return n.abrupt("return");case 16:h({type:"fetched",payload:a}),n.next=24;break;case 19:if(n.prev=19,n.t0=n.catch(4),!i.current){n.next=23;break}return n.abrupt("return");case 23:h({type:"error",payload:n.t0});case 24:case"end":return n.stop()}}),n,null,[[4,19]])})),function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function a(t){u(o,r,i,a,c,"next",t)}function c(t){u(o,r,i,a,c,"throw",t)}a(void 0)}))});return function(){return o.apply(this,arguments)}}();return n(),function(){i.current=!0}}}),[t]),f};var p=function(t,e,r){var i=(0,n.useRef)(e);o((function(){i.current=e}),[e]),(0,n.useEffect)((function(){var e=(null===r||void 0===r?void 0:r.current)||window;if(e&&e.addEventListener){var n=function(t){return i.current(t)};return e.addEventListener(t,n),function(){e.removeEventListener(t,n)}}}),[t,r])};var v=function(){var t=(0,n.useState)({width:0,height:0}),e=(0,s.Z)(t,2),r=e[0],i=e[1],a=function(){i({width:window.innerWidth,height:window.innerHeight})};return p("resize",a),o((function(){a()}),[]),r}},28:function(t,e,r){r.d(e,{cH:function(){return a},wc:function(){return c},zK:function(){return f}});var n=r(475),i=r(516),o={planets:"Admiral",vehicles:"Admiral",species:"Princess",starships:"Admiral"},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t)return t;var r=o["".concat(t)];return e?"".concat(r,"'").concat("s"===r.toLowerCase().slice(-1)?"":"s"):r},c=function(t){var e=parseInt(t);return isNaN(e)?"unknown":"".concat(e<=100?"land":"aerial"," vehicle")},u={climate:{preferred:["temperate","arid","tropical"],discarded:["artic","subartic","frigid","frozen"]},terrain:{preferred:["mountains","forests","valleys"],discarded:[]},gravity:{min:.85,max:1.2}},s={classification:{preferred:["mammal","gastropod","amphibian"],discarded:["droid","reptilian"]},designation:{preferred:["sentient"],discarded:[]},skin_colors:{preferred:[],discarded:["pink","peach"]}},l={name:{preferred:[],discarded:["Death Star"]}},f=function(t,e){var r=[];if("planets"===e&&(0,i.ki)(t)){var o=u,a=o.climate,c=o.terrain,f=o.gravity,d=f.min,h=f.max;r=t.filter((function(t){var e=(0,n.Xe)(t.gravity);return a.preferred.includes(t.climate)&&!a.discarded.includes(t.climate)&&c.preferred.some((function(e){return t.terrain.includes(e)}))&&"number"===typeof e&&(0,n.$i)(e,d,h)}))}else if("species"===e&&(0,i.ok)(t)){var p=s,v=p.classification,y=p.designation,g=p.skin_colors;r=t.filter((function(t){return v.preferred.includes(t.classification)&&!v.discarded.includes(t.classification)&&y.preferred.includes(t.designation)&&!g.preferred.includes(t.skin_colors)}))}else if("starships"===e&&(0,i.vh)(t)){var m=l.name;r=t.filter((function(t){return!m.discarded.includes(t.name)}))}return r.length>0?r:[]}},475:function(t,e,r){r.d(e,{$i:function(){return o},W2:function(){return a},Xe:function(){return i},s1:function(){return n}});var n="wookiee",i=function(t){if(t.includes("standard")&&!t.includes(","))return parseFloat(t.split(" ")[0]);if(t.includes("surface")&&t.includes(",")){var e=t.split(","),r=e.findIndex((function(t){return t.includes("surface")}));return parseFloat(e[r].split(" ")[0])}return t},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t>=e&&t<=r},a=function(t){return t&&parseInt(t)>1?"?page=".concat(t):""}},516:function(t,e,r){r.d(e,{ZB:function(){return f},zH:function(){return i},SF:function(){return o},ki:function(){return a},ok:function(){return c},vh:function(){return s},uj:function(){return l},qH:function(){return u}});var n=function(t,e){return function(t){return t instanceof Object}(t)&&e.every((function(e){return e in t}))},i=function(t){return Array.isArray(t)},o=function(t){return t instanceof Object&&i(t.results)&&"count"in t},a=function(t){return Array.isArray(t)&&function(t){return n(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:["name","diameter","gravity","population","terrain"])}(t[0])},c=function(t){return Array.isArray(t)&&function(t){return n(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:["people","homeworld","classification","designation","language"])}(t[0])},u=function(t){return Array.isArray(t)&&function(t){return n(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:["model","vehicle_class","manufacturer","length","cost_in_credits"])}(t[0])},s=function(t){return Array.isArray(t)&&function(t){return n(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:["model","starship_class","manufacturer","length","cost_in_credits"])}(t[0])},l=function(t){return"string"===typeof t&&["planets","vehicles","species","starships",""].includes(t)},f=function(t){return"vehicles"!==t}}}]);
//# sourceMappingURL=877.b02cb40c.chunk.js.map