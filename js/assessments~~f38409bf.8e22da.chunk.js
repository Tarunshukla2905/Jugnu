!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="57b883c1-cfd2-4b46-bf05-85e20ab9f9d0",t._sentryDebugIdIdentifier="sentry-dbid-57b883c1-cfd2-4b46-bf05-85e20ab9f9d0")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"d103cf96f47525efb287e50d31a45a9845612572"},(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/l5M":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return a}));var r=n("D6QT"),o=n.n(r),c=n("YqKy");function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;t.forEach((function(t){n[t]=n[t].bind(e)}))}function u(t){return o()(t,(function(t){return!Object(c.d)(t)}))}var a=function(t){return t&&0===Object.keys(t).length}},"230Q":function(t,e,n){"use strict";function r(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,r=t.split(" ").filter((function(t){return Boolean(t)})),o=[],c=0;c<r.length;c+=1){var i=r[c];if(o.push(i[0]),c+1===n)break}return o.join(e)}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return a}));var o=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};function c(t,e){var n=t;return Object.keys(e).forEach((function(t){n=n.replace(new RegExp("{{".concat(t,"}}"),"g"),e[t])})),n}function i(t,e,n){return[t.slice(0,n),e,t.slice(n)].join("")}var u=function(t){return null==t?void 0:t.trim().toLowerCase().replace(/[\s,\-_]/g,"")},a=function(t){return t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}},"44ut":function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"d",(function(){return h}));var r,o=n("butC"),c=n("MkmS"),i=n.n(c),u=n("RUa/"),a=n("YqKy");Object(a.d)(document.hidden)?Object(a.d)(document.msHidden)?Object(a.d)(document.webkitHidden)||(r="webkitHidden"):r="msHidden":r="hidden";"Notification"in window&&"serviceWorker"in navigator&&window;function s(){return!r||r&&document[r]}function d(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(i.a.mark((function t(){var e,n=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.length>0&&void 0!==n[0]?n[0]:document.documentElement,t.prev=1,!Object(u.j)()){t.next=7;break}return t.next=5,e.webkitEnterFullscreen();case 5:t.next=25;break;case 7:if(!e.requestFullscreen){t.next=12;break}return t.next=10,e.requestFullscreen();case 10:t.next=25;break;case 12:if(!e.mozRequestFullScreen){t.next=17;break}return t.next=15,e.mozRequestFullScreen();case 15:t.next=25;break;case 17:if(!e.webkitRequestFullscreen){t.next=22;break}return t.next=20,e.webkitRequestFullscreen();case 20:t.next=25;break;case 22:if(!e.msRequestFullscreen){t.next=25;break}return t.next=25,e.msRequestFullscreen();case 25:t.next=29;break;case 27:t.prev=27,t.t0=t.catch(1);case 29:case"end":return t.stop()}}),t,null,[[1,27]])})))).apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!document.exitFullscreen){t.next=6;break}return t.next=4,document.exitFullscreen();case 4:t.next=19;break;case 6:if(!document.mozCancelFullScreen){t.next=11;break}return t.next=9,document.mozCancelFullScreen();case 9:t.next=19;break;case 11:if(!document.webkitExitFullscreen){t.next=16;break}return t.next=14,document.webkitExitFullscreen();case 14:t.next=19;break;case 16:if(!document.msExitFullscreen){t.next=19;break}return t.next=19,document.msExitFullscreen();case 19:t.next=23;break;case 21:t.prev=21,t.t0=t.catch(0);case 23:case"end":return t.stop()}}),t,null,[[0,21]])})))).apply(this,arguments)}function h(t){Object(u.o)()||Object(u.j)()?t.current.scrollIntoView():t.current.scrollIntoView({behavior:"smooth"})}},"8bDF":function(t,e,n){"use strict";function r(){return!1}function o(t){}function c(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o.apply(void 0,["log"].concat(e))}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o.apply(void 0,["warn"].concat(e))}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return i}))},"9zAL":function(t,e,n){"use strict";n.d(e,"e",(function(){return g})),n.d(e,"d",(function(){return y})),n.d(e,"f",(function(){return O})),n.d(e,"g",(function(){return j})),n.d(e,"a",(function(){return k})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return E}));var r=n("DjBF"),o=n("upjz"),c=n("TatS"),i=n.n(c),u=n("YN7H"),a=n.n(u),s=n("b7fI"),d=n("nr7j"),f=n.n(d),l=n("johb"),p=n("YqKy"),h=n("/l5M"),v="bypass_utm",b="utm_medium",m="utm_source";function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t;return n.startsWith("http")||(n="http".concat(e?"s":"","://").concat(n)),n}function y(t){return!!t.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)}function w(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map((function(t){return Object(p.e)(t)?String(t):t})).filter(Boolean);return a.a.apply(void 0,Object(o.a)(r))}function O(t,e){var n=w.apply(void 0,Object(o.a)(t));return e&&Object.keys(e).length>0&&(n+="?".concat(i.a.stringify(e,{skipNull:!0,skipEmptyString:!0}))),n}function j(){return window.location.origin+window.location.pathname}function k(){var t=window.location.href,e=Object(s.b)(v);t.includes(b)||t.includes(m)||!e||(t+=window.location.search?"&".concat(e):"?".concat(e));return t}function _(){var t,e,n=(null===(t=window.TrackingHelper)||void 0===t?void 0:t.getContext("utm_propagation_params"))||{};if(!Object(h.b)(n))return n;var o=Object(s.b)(v);if(o){var c=o.split("&");c&&c.forEach((function(t){var e=t.split("="),o=Object(r.a)(e,2),c=o[0],i=o[1];n[c]=i}))}return null===(e=window.TrackingHelper)||void 0===e||e.setContext("utm_propagation_params",n),n}var x=f()().tlds(l);function E(t){return x.test(t)}},ACai:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("DjBF"),o=n("8bDF"),c=n("RUa/"),i=n("YqKy"),u=[];function a(t,e){return!(null==e||!e.isFromServer)||!(!window.__SENTRY__||!window.Sentry)&&window.__SENTRY__.ignoreErrors.some((function(n){return[t,null==e?void 0:e.message].filter(Boolean).some((function(t){return function(t,e){return!!Object(i.i)(e)&&(Object(i.i)(t)?e.includes(t):!!Object(i.g)(t,RegExp)&&t.test(e))}(n,t)}))}))}function s(t,e,n){var i;Object(o.b)()?Object(o.a)(t,e,{data:n}):(u.push([t,e,n]),(i=window.Sentry)&&(u.forEach((function(t){var e=Object(r.a)(t,3),n=e[0],o=e[1],u=e[2];try{if(a(o,u))return;i.withScope((function(t){t.setLevel(n),t.setExtra("data",u),t.setTag("request.source",Object(c.c)()),i.captureException(new Error(o))}))}catch(t){}})),u=[]))}},EsI2:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"m",(function(){return o})),n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return i})),n.d(e,"l",(function(){return u})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"g",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"h",(function(){return l})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return v}));var r=480,o=768,c=1024,i=1200,u="https://i.imgur.com/URiqMtc.png",a="create-diagram-tab",s="data:image/svg+xml;base64,",d={promoter:"promoter",detractor:"detractor",neutral:"neutral"},f="desktop-playstore",l="header__playstore-popup-container",p="app-playstore-link",h="app-playstore-strip-link",v="contact-us-top-nav"},Q1SX:function(t,e,n){"use strict";function r(t){var e=window.document,n=e.createElement("input");e.body.appendChild(n),n.value=t,n.select(),e.execCommand("copy"),e.body.removeChild(n)}function o(){var t=Date.now(),e=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var r=16*Math.random();return t>0?(r=(t+r)%16|0,t=Math.floor(t/16)):(r=(e+r)%16|0,e=Math.floor(e/16)),("x"===n?r:3&r|8).toString(16)}))}function c(){var t=document.querySelector("meta[name='current-user']");return null==t?void 0:t.getAttribute("data-id")}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c}))},"RUa/":function(t,e,n){"use strict";function r(){return Boolean(window.chrome)}function o(){return/edge/i.test(navigator.userAgent)}function c(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function i(){return/android/.test(navigator.userAgent.toLowerCase())}function u(){return navigator.platform.indexOf("Mac")>-1}function a(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}function s(){return void 0!==window.opr}function d(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function f(){return/firefox/i.test(navigator.userAgent)}function l(){return Boolean(getComputedStyle(document.documentElement).getPropertyValue("--arc-palette-title"))}function p(){return r()&&!s()&&!o()}function h(){return navigator.platform.toUpperCase().indexOf("MAC")>=0}function v(){return/tablet|iPad/i.test(navigator.userAgent)?"tablet":a()?"mobile":"desktop"}function b(){var t;return(null===(t=window.ENV_VARS)||void 0===t?void 0:t.request_source)||"web"}function m(){return"android"===b()}function g(){return m()||"ios"===b()}function y(){return!g()}n.d(e,"g",(function(){return r})),n.d(e,"h",(function(){return o})),n.d(e,"j",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"k",(function(){return u})),n.d(e,"m",(function(){return a})),n.d(e,"n",(function(){return s})),n.d(e,"o",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return p})),n.d(e,"l",(function(){return h})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return b})),n.d(e,"p",(function(){return m})),n.d(e,"q",(function(){return g})),n.d(e,"r",(function(){return y})),n.d(e,"a",(function(){return w}));var w="x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"},SBIh:function(t,e,n){"use strict";var r=n("2bPg"),o=n("BRlI"),c=n("PK3Q"),i=n("Q5Ww"),u=n("00an"),a=n("VDzl"),s=function(t){return"SocketError::".concat(t)},d=function(t){function e(t,n){var o;return Object(r.a)(this,e),(o=Object(c.a)(this,Object(i.a)(e).call(this,s(t)))).message=s(t),o.socket=n,o}return Object(u.a)(e,t),Object(o.a)(e,[{key:"toJson",value:function(){var t,e,n,r,o,c,i,u,a,s,d,f,l;return{socketStatus:null===(t=this.socket)||void 0===t?void 0:t.status,connectionState:null===(e=this.socket)||void 0===e?void 0:null===(n=e.consumer)||void 0===n?void 0:null===(r=n.connection)||void 0===r?void 0:null===(o=r.webSocket)||void 0===o?void 0:o.readyState,currentTime:Date.now(),lastPinngedAt:new Date(null===(c=this.socket)||void 0===c?void 0:null===(i=c.consumer)||void 0===i?void 0:null===(u=i.connection)||void 0===u?void 0:null===(a=u.monitor)||void 0===a?void 0:a.pingedAt).getTime(),reconnectAttempts:null===(s=this.socket)||void 0===s?void 0:null===(d=s.consumer)||void 0===d?void 0:null===(f=d.connection)||void 0===f?void 0:null===(l=f.monitor)||void 0===l?void 0:l.reconnectAttempts}}}]),e}(Object(a.a)(Error));e.a=d},YqKy:function(t,e,n){"use strict";function r(t,e){switch(e){case"array":return Array.isArray(t);case"boolean":case"function":case"number":case"string":case"object":return typeof t===e;default:return t instanceof e}}function o(t){return r(t,"array")}function c(t){return r(t,"boolean")}function i(t){return r(t,"function")}function u(t){return null==t}function a(t){return r(t,"number")}function s(t){return r(t,"object")}function d(t){return!u(t)&&""!==t}function f(t){return r(t,"string")}n.d(e,"g",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return f}))},b7fI:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var r=n("g4DW");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var i=function(t){if(t){var e=document.cookie.split(";").find((function(e){return e.trim().startsWith("".concat(t,"="))})),n=null==e?void 0:e.split("=").slice(1).join("=");return n?decodeURIComponent(n):void 0}},u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=c({path:"/"},n);n.expires instanceof Date&&(r.expires=n.expires.toUTCString());var o=encodeURIComponent(t),i=encodeURIComponent(e),u="".concat(o,"=").concat(i);Object.keys(r).forEach((function(t){u+="; ".concat(t),u+="=".concat(r[t])})),document.cookie=u},a=function(t){u(t,"",{"max-age":-1})}},bvia:function(t,e,n){"use strict";var r=n("butC"),o=n("g4DW"),c=n("7cf5"),i=n("2bPg"),u=n("BRlI"),a=n("PK3Q"),s=n("Q5Ww"),d=n("00an"),f=n("MkmS"),l=n.n(f),p=n("ZgFe"),h=n("KU2s"),v=n.n(h),b=n("Q1SX"),m=n("YqKy"),g=n("ACai"),y=n("zSml"),w=n("SBIh");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=["_ack","_id","_type"],_="received",x="timeout",E="not_connected",S=function(t){function e(t,n){var r;return Object(i.a)(this,e),(r=Object(a.a)(this,Object(s.a)(e).call(this)))._queue=[],r._timeout=null,r.status="waiting",r._handleConnected=function(){r.emit("connected"),clearTimeout(r._timeout),r._timeout=null,r.status="open",r._sendFromQueue()},r._handleDisconnected=function(){r.emit("disconnected"),r._checkReconnection(),r.status="closed"},r._handleError=function(){r.emit("error"),r.status="closed"},r._handleReceived=function(t){var e=t._type,n=void 0===e?_:e,o=Object(c.a)(t,["_type"]);if(n.startsWith("ack:")){var i="".concat(n,":").concat(o._id);r.emit(i)}else"ping"===n?r._handlePing():r.emit(n,j({socketEventName:n},o))},r._handleRejected=function(){r.emit("rejected"),r.status="closed"},r._handlePing=function(){r._send("pong",{},3)},r._channel=t,r._data=n||{},r.subscribe(),r}var n,o;return Object(d.a)(e,t),Object(u.a)(e,[{key:"destroy",value:function(){if(this.subscription)try{this.subscription.unsubscribe(),this._subscription=null}catch(t){}}},{key:"subscribe",value:function(){this.destroy(),this.emit("connecting"),this._createConsumer(),this._subscription=this._consumer.subscriptions.create(j({channel:this.channel},this.data),{connected:this._handleConnected,disconnected:this._handleDisconnected,rejected:this._handleRejected,received:this._handleReceived})}},{key:"send",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.isActive()?this._send(t,e,n):this._queue.push({event:t,data:e,retries:n})}},{key:"sendAsync",value:(o=Object(r.a)(l.a.mark((function t(e,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this._createPayload(e,n,!0),t.next=3,this._sendAsync(r);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})},{key:"isActive",value:function(){return"open"===this.status}},{key:"_createConsumer",value:function(){if(!e.consumer){var t,n=(t=document.querySelector("meta[name='current-user']"))?t.getAttribute("data-id"):null,r=n?"?token=".concat(n):"";e.consumer=Object(p.createConsumer)("/cable".concat(r)),this._consumer.connection.events.error=this._handleError}}},{key:"_createPayload",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._throwErrorIfHasReservedKeys(n);var o="".concat(t,"_").concat(e.uid,"_").concat(Date.now());return j(j({},n),{},{_ack:r,_id:o,_type:t})}},{key:"_checkReconnection",value:function(){var t=this;this._timeout||(this._timeout=setTimeout((function(){t._timeout=null,"closed"===t.status&&t.emit("error")}),1e4))}},{key:"_send",value:function(t,e,n){var r=n>0,o=this._createPayload(t,e,r);r?this._sendWithRetry(o,n):this._sendToServer(o)}},{key:"_sendAsync",value:function(t){var e=this;return new Promise((function(n,r){var o,c=function(){clearTimeout(o),n()},i="ack:".concat(t._type,":").concat(t._id);if(o=setTimeout((function(){e.off(i,c);var t=new w.a(x,e);r(t.toJson())}),3e3),e.once(i,c),!e._sendToServer(t)){clearTimeout(o),e.off(i,c);var u=new w.a(E,e);r(u.toJson())}}))}},{key:"_sendFromQueue",value:function(){var t=this;this._queue.forEach((function(e){var n=e.event,r=e.data,o=e.retries;t._send(n,r,o)})),this._queue=[]}},{key:"_sendWithRetry",value:(n=Object(r.a)(l.a.mark((function t(e){var n,r,o,c=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c.length>1&&void 0!==c[1]?c[1]:0,r=0,o=n+1;case 3:return r+=1,t.prev=5,t.next=8,this._sendAsync(j({},e));case 8:return t.abrupt("break",18);case 11:if(t.prev=11,t.t0=t.catch(5),!(r>=o)){t.next=16;break}throw Object(g.a)("error","SocketError: Failed to send data",{error:t.t0,payload:e}),t.t0;case 16:t.next=3;break;case 18:case"end":return t.stop()}}),t,this,[[5,11]])}))),function(t){return n.apply(this,arguments)})},{key:"_sendToServer",value:function(t){return this.subscription.send(t)}},{key:"_throwErrorIfHasReservedKeys",value:function(t){if(Object(m.f)(t)){var e=v()(k,Object.keys(t));if(e.length>0)throw new Error("".concat(e.join(", ")," is/are reserved keys in data"))}}},{key:"channel",get:function(){return this._channel}},{key:"data",get:function(){return this._data}},{key:"consumer",get:function(){return this._consumer}},{key:"subscription",get:function(){return this._subscription}},{key:"_consumer",get:function(){return e.consumer}}]),e}(y.a);S.consumer=null,S.uid=Object(b.b)(),e.a=S},hmAS:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return v})),n.d(e,"k",(function(){return b})),n.d(e,"l",(function(){return m})),n.d(e,"j",(function(){return g})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return O}));var r=n("CS1Q"),o=n.n(r),c=n("CWUs"),i=n.n(c),u=n("6adR"),a=n.n(u),s=n("MDmE");function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(t),r=e.attributes||{};i()(r,(function(t,e){t&&n.setAttribute(e,t)}));var o=e.styles||{};return i()(o,(function(t,e){n.style.setProperty(a()(e),t)})),n}function f(t,e){var n=t.nextElementSibling;if(!e)return n;for(;n;){if(n.matches(e))return n;n=n.nextElementSibling}return null}function l(t,e){var n=t.previousElementSibling;if(!e)return n;for(;n;){if(n.matches(e))return n;n=n.previousElementSibling}return null}function p(t){return"HTML"===t.tagName?window:t}function h(t){var e=t.parentElement;if(e){var n=window.getComputedStyle(e),r=n.overflowY,o=n.position,c=!(r.includes("hidden")||r.includes("visible"));return"fixed"===o||c&&e.scrollHeight>e.clientHeight?e:h(e)}return document.scrollingElement}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="string"==typeof t?document.querySelector(t):t;if(!n)return!1;var r=h(n),o=n.offsetTop,c=o+n.offsetHeight,i=r.scrollTop,u=i+r.offsetHeight;return c>i&&o<u-e}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.documentElement,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smooth",c=n.scrollHeight-n.offsetHeight,i=parseInt(o()(t,0,c),10),u=p(n);function a(){parseInt(n.scrollTop,10)===i&&(u.removeEventListener("scroll",a),e())}e&&(u.addEventListener("scroll",a),a()),n.scrollTo({top:i,behavior:r})}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:90,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=h(t);b(t.offsetTop-e,n,o,r)}function g(t){var e=window.getComputedStyle(document.documentElement);return t*parseFloat(e.fontSize)}function y(t,e){var n=t.getBoundingClientRect();switch(e){case"top":return n.top;case"bottom":return window.innerHeight-n.bottom;case"left":return n.left;case"right":return window.innerWidth-n.right;default:throw new Error("Invalid direction. Pass one of top|left|right|bottom")}}n.n(s).a.polyfill();var w=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},O=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)}},upII:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return _})),n.d(e,"a",(function(){return E}));var r=n("7cf5"),o=n("g4DW"),c=n("butC"),i=n("MkmS"),u=n.n(i),a=n("LpSC"),s=n.n(a),d=n("HzcO"),f=n.n(d),l=n("D6QT"),p=n.n(l),h=n("9zAL"),v=n("RUa/"),b=n("YqKy");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=p()(t,(function(t){return!Object(b.d)(t)}));return f()(n,(function(t,n){return e&&Array.isArray(t)?t.map((function(t){return"".concat(n,"[]=").concat(t)})).join("&"):"".concat(n,"=").concat(t)})).join("&")}function w(t){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(u.a.mark((function t(e){var n,r,o,c,i,a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,t.next=4,e.json();case 4:n=t.sent,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:if(e.headers.has("X-Flash-Messages")&&(r=e.headers.get("X-Flash-Messages")||"{}",o=JSON.parse(r)||{},c=o.error,i=o.notice,(c||i)&&(n||(n={}),n.flashError=c||i),c&&(null===(a=window.GTMtracker)||void 0===a||a.pushEvent({event:"gtm_custom_click",data:{click_text:c,click_type:"Flash error"}}))),!e.ok){t.next=14;break}return t.abrupt("return",n);case 14:throw(s=new Error(e.statusText)).isFromServer=!0,s.response=e,s.responseJson=n,s;case 19:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function j(t,e){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(u.a.mark((function t(e,n){var o,c,i,a,d,f,l,p,b,m,O,j=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=j.length>2&&void 0!==j[2]?j[2]:null,c=j.length>3&&void 0!==j[3]?j[3]:{},i={Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest","X-Accept-Flash":!0},a=Object(v.b)(),i="android"===Object(v.c)()?g(g({},i),{},{"X-REQUEST-SOURCE":"AndroidApp"}):g(g({},i),{},{"App-Name":a}),(d=document.querySelector('meta[name="csrf-token"]'))&&(i["X-CSRF-Token"]=d.content),f={method:e},"FormData"===c.dataType?(delete i["Content-Type"],f.body=o):o&&"GET"!==e&&(f.body=JSON.stringify(o)),l=c.headers,p=c.params,b=Object(r.a)(c,["headers","params"]),(m=Object.assign(f,{headers:Object.assign(i,l)},{credentials:"same-origin"},b)).referrer=Object(h.a)(),p?n+="?".concat(y(p)):"GET"===e&&o&&(n+="?".concat(y(o,!0))),t.next=15,s()(n,m);case 15:return O=t.sent,t.abrupt("return",w(O));case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector('meta[name="csrf-token"]'),t.next=3,s()("/generate-jwt",{method:"POST",headers:{"Content-Type":"text","X-Requested-With":"XMLHttpRequest","X-CSRF-Token":e.content},body:JSON.stringify({})}).then((function(t){if(!t.ok)throw new Error(t.status);return t.text()})).then((function(t){n=t})).catch((function(t){"401"===t.message&&(window.location="".concat(window.location.protocol,"//").concat(window.location.host)+"/users/sign_in")}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var E=20},zSml:function(t,e,n){"use strict";var r=n("2bPg"),o=n("BRlI"),c=n("YqKy");function i(t){if(!Object(c.c)(t))throw new TypeError}var u=function(){function t(){Object(r.a)(this,t),this._events={},this.addEventListener=this.on,this.removeEventListener=this.off}return Object(o.a)(t,[{key:"on",value:function(t,e){i(e);var n=this._events[t]||(this._events[t]=[]);return-1!==n.indexOf(e)?this:(n.push(e),this)}},{key:"once",value:function(t,e){var n=this;return this.on(t,(function r(){n.off(t,r),e.apply(void 0,arguments)}))}},{key:"off",value:function(t){if(0==(arguments.length<=1?0:arguments.length-1))return this._events[t]=null,this;var e=arguments.length<=1?void 0:arguments[1];i(e);var n=this._events[t];if(!n||!n.length)return this;var r=n.indexOf(e);return-1===r?this:(n.splice(r,1),this)}},{key:"emit",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=this._events[t];return!(!o||!o.length)&&(o.forEach((function(t){return t.apply(void 0,n)})),!0)}}]),t}();e.a=u}}]);
//# sourceMappingURL=assessments~~f38409bf.8e22da.chunk.js.map