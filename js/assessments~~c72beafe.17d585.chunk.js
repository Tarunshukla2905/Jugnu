!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="31542ba2-a707-4b28-8d2a-dba22719f50e",e._sentryDebugIdIdentifier="sentry-dbid-31542ba2-a707-4b28-8d2a-dba22719f50e")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"10884b2713d298895327df808592d097bbe5aab2"},(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+tDs":function(e,t,n){"use strict";var a=n("9xVN");n.d(t,"a",(function(){return a.a}));var r=n("BPy/");n.d(t,"b",(function(){return r.a}));var o=n("2BAX");n.d(t,"c",(function(){return o.a}));n("hj4t")},"0zje":function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"j",(function(){return g})),n.d(t,"i",(function(){return p})),n.d(t,"n",(function(){return O})),n.d(t,"x",(function(){return v})),n.d(t,"r",(function(){return y})),n.d(t,"A",(function(){return h})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return w})),n.d(t,"m",(function(){return C})),n.d(t,"v",(function(){return k})),n.d(t,"t",(function(){return _})),n.d(t,"s",(function(){return E})),n.d(t,"w",(function(){return D})),n.d(t,"u",(function(){return S})),n.d(t,"y",(function(){return N})),n.d(t,"p",(function(){return P})),n.d(t,"z",(function(){return A})),n.d(t,"q",(function(){return B})),n.d(t,"o",(function(){return T}));n("DjBF"),n("qJpn");var a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=["January","February","March","April","May","June","July","August","September","October","November","December"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=1e3,i=60*c,s=60*i,u=24*s,l=7*u,d=30*u;function f(e){var t=new Date(e);return t.setMilliseconds(0),t.setSeconds(0),t.setMinutes(0),t.setHours(0),t}function m(e,t){var n=f(e),a=f(t),r=n.getTime()-a.getTime();return parseInt(r/864e5,10)}function b(e,t){var n=new Date(e),a=new Date(t),r=n.getTime()-a.getTime();return parseInt(r/6e4,10)}function g(e){return b(new Date,new Date(e))}function p(e){var t=new Date(e),n=new Date,a=t.getTime()-n.getTime();return parseInt(a/6e4,10)}function O(e,t){return 0===m(e,t)}function v(e){var t=new Date(e),n=t.getHours(),a=n>=12?"PM":"AM";n=n%12||12;var r="".concat(t.getMinutes());return"".concat(n,":").concat(r.padStart(2,"0")," ").concat(a)}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.humanFriendly,a=t.fullMonth,c=t.withOrdinal,i=new Date(e);if(n){var s=m(Date.now(),i);if(0===s)return"Today";if(1===s)return"Yesterday"}var u,l=i.getDate(),d=i.getMonth(),f=c?(u=l)>=4&&u<=20||u>=24&&u<=30?"th":["st","nd","rd"][u%10-1]:"";return"".concat(l).concat(f," ")+"".concat(a?r[d]:o[d])}function h(e){var t=new Date(e);return a[t.getDay()]}function j(e){var t=new Date(e);return O(t,Date.now())?v(t):y(t,{humanFriendly:!0})}function w(e){var t=new Date(e),n=y(t,{humanFriendly:!0}),a=v(t);return"".concat(n,", ").concat(a)}function C(e){var t=Math.floor(e/31536e3);return t>1?"".concat(t," years"):(t=Math.floor(e/2592e3))>1?"".concat(t," months"):(t=Math.floor(e/86400))>1?"".concat(t," days"):(t=Math.floor(e/3600))>1?"".concat(t," hours"):(t=Math.floor(e/60))>1?"".concat(t," minutes"):(t=Math.floor(e),"".concat(Math.max(2,t)," seconds"))}function k(e){var t=new Date(e),n=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),r=t.getFullYear(),o=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),i=[r,n,a].join("-"),s=[o,c].join(":");return"".concat(i,"T").concat(s)}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=new Date(e),a=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return[n.getFullYear(),a,r].join(t)}function E(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).fullMonth,n=new Date(e),a=n.getFullYear();return"".concat(y(n,{fullMonth:t})," ").concat(a)}function D(e){var t=new Date(e);return"".concat(h(t),", ").concat(y(t))}function S(e){var t=h(e),n=E(e),a=v(e);return"".concat(n,", ").concat(t,", ").concat(a," ")}function N(e){var t=_(e),n=v(e);return"".concat(n,", ").concat(t)}function P(e){return C(Math.floor((new Date-new Date(e))/1e3))}function A(e){var t=e;return t<0?[0,0,0,0]:[u,s,i,c].map((function(e){var n=parseInt(t/e,10);return t%=e,n}))}function B(e){var t=new Date(e).toISOString();return new Date(t)}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=new Date(t);return n.setDate(n.getDate()+(parseInt(e.days,10)||0)),n.setHours(n.getHours()+(parseInt(e.hours,10)||0)),n.setMinutes(n.getMinutes()+(parseInt(e.minutes,10)||0)),n.setSeconds(n.getSeconds()+(parseInt(e.seconds,10)||0)),n}},"1GZ3":function(e,t,n){"use strict";var a=n("g4DW"),r=n("7cf5"),o=n("gbB/"),c=n.n(o),i=n("i5Br"),s=n.n(i),u=n("5mc/"),l=n("q7zV"),d=n("zXLR");function f(e){var t=e.canClose,n=e.children,i=e.className,f=e.containerClassName,m=e.closeOnBackdropClick,b=e.closeOnEscPress,g=e.hasBackdrop,p=e.hasCloseButton,O=e.isAbsolute,v=e.isFlat,y=e.position,h=e.isOpen,j=e.onClose,w=e.size,C=e.title,k=e.backgroundScroll,_=e.unMountOnClose,E=e.withoutHeader,D=e.titleClassName,S=e.headerClassName,N=e.backdropClassName,P=Object(r.a)(e,["canClose","children","className","containerClassName","closeOnBackdropClick","closeOnEscPress","hasBackdrop","hasCloseButton","isAbsolute","isFlat","position","isOpen","onClose","size","title","backgroundScroll","unMountOnClose","withoutHeader","titleClassName","headerClassName","backdropClassName"]);function A(e){var n=e.closeClassName;return t&&p?c.a.createElement(d.a,{className:s()(Object(a.a)({},n,n)),onClick:j,"aria-label":"close"},c.a.createElement(l.a,{name:"close"})):null}return Object(o.useEffect)((function(){var e=document.getElementsByClassName("react-root")[0];return h&&!k?null==e||e.classList.add("hide-overflow"):null==e||e.classList.remove("hide-overflow"),function(){null==e||e.classList.remove("hide-overflow")}}),[k,h]),h||!_?c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{canClose:t,closeOnBackdropClick:m,closeOnEscPress:b,isAbsolute:O,isOpen:g&&h,onClose:j,className:N}),c.a.createElement("div",Object.assign({className:s()("sr-modal",{"sr-modal--absolute":O},{"sr-modal--flat":v},Object(a.a)({},"sr-modal--".concat(y),y),Object(a.a)({},"sr-modal--".concat(w),w),{"sr-modal--open":h},Object(a.a)({},i,i))},P),E&&A({closeClassName:"sr-modal__close-alt no-highlight"}),E?null:c.a.createElement("div",{className:s()("sr-modal__header",Object(a.a)({},S,S))},c.a.createElement("div",{className:s()("sr-modal__title",Object(a.a)({},D,D))},C),c.a.createElement("div",{className:"sr-modal__close"},A({closeClassName:"btn btn-icon btn-inverted"}))),c.a.createElement("div",{className:s()("sr-modal__body",Object(a.a)({},f,f))},n))):null}f.defaultProps={canClose:!0,hasBackdrop:!0,hasCloseButton:!0,isAbsolute:!1,isOpen:!1,isFlat:!1,withoutHeader:!1,unMountOnClose:!1,backgroundScroll:!0},t.a=f},"2BAX":function(e,t,n){"use strict";var a=n("g4DW"),r=n("7cf5"),o=n("gbB/"),c=n.n(o),i=n("tH77");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){return function(t){var n=t.gtmEventType,a=t.gtmEventAction,s=t.gtmEventResult,l=t.gtmEventCategory,d=t.gtmEventData,f=void 0===d?{}:d,m=t.gtmEventLink,b=t.onClick,g=t.onFocus,p=Object(r.a)(t,["gtmEventType","gtmEventAction","gtmEventResult","gtmEventCategory","gtmEventData","gtmEventLink","onClick","onFocus"]),O=Object(o.useCallback)((function(e){if(a===e&&n){var t=m||f.link;Object(i.a)(n,s,a,l,u(u({},f),{},{link:t}))}}),[n,s,a,l,f,m]),v=Object(o.useCallback)((function(){O("click"),b&&b.apply(void 0,arguments)}),[b,O]),y=Object(o.useCallback)((function(){O("focus"),g&&g.apply(void 0,arguments)}),[g,O]);return c.a.createElement(e,Object.assign({},p,{onClick:v,onFocus:y}))}}},"5mc/":function(e,t,n){"use strict";var a=n("g4DW"),r=n("7cf5"),o=n("gbB/"),c=n.n(o),i=n("i5Br"),s=n.n(i),u=n("ZUQt");function l(e){var t=e.canClose,n=e.className,i=e.closeOnBackdropClick,l=e.closeOnEscPress,d=e.isAbsolute,f=e.isOpen,m=e.onClick,b=e.onClose,g=Object(r.a)(e,["canClose","className","closeOnBackdropClick","closeOnEscPress","isAbsolute","isOpen","onClick","onClose"]);Object(o.useEffect)((function(){function e(t){new u.a(t).didPress("esc")&&f&&(b(),window.removeEventListener("keydown",e))}if(t&&l)return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t,l,b,f]);var p=Object(o.useCallback)((function(e){t&&i&&b(),m&&m(e)}),[t,i,m,b]);return(c.a.createElement("div",Object.assign({"data-testid":"backdrop",className:s()("sr-backdrop",{"sr-backdrop--absolute":d},{"sr-backdrop--open":f},Object(a.a)({},n,n)),onClick:p},g)))}l.defaultProps={canClose:!0,closeOnBackdropClick:!0,closeOnEscPress:!0,isAbsolute:!1,isOpen:!1},t.a=l},"7zL1":function(e,t,n){"use strict";var a=n("2bPg"),r=n("BRlI"),o=function(){function e(t){var n=this;if(Object(a.a)(this,e),this.sync=function(){n._data=n._loadLocalStorage()},!e.initializing)throw new Error("Use LocalStorage.getInstance instead");this._key=t,this.sync(),e.initializing=!1}return Object(r.a)(e,[{key:"addItem",value:function(e,t){this._data[e]=t,this._saveLocalStorage()}},{key:"removeItem",value:function(e){delete this._data[e],this._saveLocalStorage()}},{key:"_loadLocalStorage",value:function(){var e=window.localStorage.getItem(this._key);return e?JSON.parse(e):{}}},{key:"_saveLocalStorage",value:function(){window.localStorage.setItem(this._key,JSON.stringify(this._data))}}],[{key:"getInstance",value:function(t){if(!this.instance[t]){this.initializing=!0;try{this.instance[t]=new Proxy(new e(t),{get:function(e,t){return t.startsWith("$_")?e[t.substring("$_".length)]:e._data[t]},set:function(e,t,n){return e.addItem(t,n),!0},deleteProperty:function(e,t){return e.removeItem(t),!0}})}catch(e){}}return this.instance[t]}}]),e}();o.instance={},o.initializing=!1,t.a=o},"9xVN":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("gbB/"),r=n.n(a);function o(e){return r.a.forwardRef((function(t,n){return r.a.createElement(e,Object.assign({},t,{forwardedRef:n}))}))}},A18l:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"g",(function(){return m})),n.d(t,"j",(function(){return b})),n.d(t,"f",(function(){return g}));var a=n("DjBF"),r=n("laTo"),o=n("/l5M");function c(e){var t=e.closest("[data-gtm-section]");return t?t.dataset.gtmSection:null}function i(e){if(e){var t=e.closest("[data-gtm-sub-product]");return t?t.dataset.gtmSubProduct:null}var n=document.querySelector("[data-gtm-page-sub-product]");return n?n.dataset.gtmPageSubProduct:null}function s(e){var t,n=null!==(t=e.getAttribute("data-gtm-element"))&&void 0!==t?t:e.getAttribute("data-name");if(n)return n;var a=e.closest(".gtm-track-element");return null!=a&&a.getAttribute("data-gtm-parent")?a.getAttribute("data-gtm-parent"):e.getAttribute("name")}function u(e){return null!=e&&e.closest(".gtm-track-element")?e.closest(".gtm-track-element"):e}function l(e){var t;if(!e)return r.c.CTA;var n=u(e);return null!=n&&n.getAttribute("data-gtm-type")?n.getAttribute("data-gtm-type"):"submit"===e.type?r.c.FORM_SUBMIT:"input"===(null===(t=e.tagName)||void 0===t?void 0:t.toLowerCase())?r.c.FORM_INPUT:r.c.CTA}function d(e){if(!e)return{};var t=e;e.startsWith("/")&&(t=window.location.origin+e);try{var n=new URL(t),a=n.pathname;return a.endsWith("/")||(a+="/"),{destination_url:n.href,destination_host:n.host,destination_path:a}}catch(e){return{}}}function f(e){var t={},n=!0,o=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var u=i.value,l=Object(a.a)(u,2),d=l[0],f=l[1];r.f.includes(d)&&(t[d]=f),r.a.includes(d)&&(t.mktg_click_id="".concat(d,"=").concat(f))}}catch(e){o=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw c}}return t}function m(e,t){var n,a,o=e.split("/");return o.includes("meetings")?r.h.DRONA:o.includes("edge")?r.h.EDGE:o.includes("academy")?r.h.ACADEMY:o.includes("plus")?r.h.PLUS:o.includes("contests")||o.includes("contest")?r.h.CONTESTS:o.includes("know-where-you-stand-free-self-assessment-test")?r.h.SAT:o.includes("codex")?r.h.CODEX:o.includes("events")||o.includes("event")?"software_development"===(a=null===(n=document.querySelector("[data-program]"))||void 0===n?void 0:n.getAttribute("data-program"))?r.h.ACADEMY:"data_science"===a?r.h.DATA_SCIENCE:r.h.EVENTS:o.includes("data-science-course")?r.h.DATA_SCIENCE:o.includes("review")?r.h.REVIEW:t}function b(e){if(!e)return{};var t={};return Object.keys(e).forEach((function(n){t[n]=function(e,t){return r.b.includes(e)?new Date(t):r.g.includes(e)?null==(n=t)?void 0:n.replace(/[^0-9]/g,""):t;var n}(n,e[n])})),Object(o.c)(t)}function g(){var e;return document.cookie.match(/_ga=(.+?);/)&&(e=document.cookie.match(/_ga=(.+?);/)[1].split(".").slice(-2).join(".")),e}},"BPy/":function(e,t,n){"use strict";var a=n("gbB/"),r=n.n(a),o=n("tkKH"),c=n("AYEn");t.a=function(e){return function(t){var n=Object(o.k)(),a=Object(c.useLastLocation)();return r.a.createElement(e,Object.assign({goBack:function(e){a?n.goBack():n.replace(e)}},t))}}},BmKa:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var a=n("g4DW"),r=n("DjBF"),o=n("gbB/"),c=n.n(o),i=n("i5Br"),s=n.n(i),u=n("CnJU");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={show:function(e){u.a.emit("toast.open",e)},hide:function(){u.a.emit("toast.close")}},m={duration:3e3,message:"",position:"top-center",type:"info",className:"normal"};t.a=function(){var e=Object(o.useState)(d({},m)),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(!1),l=Object(r.a)(i,2),f=l[0],b=l[1],g=Object(o.useRef)();return Object(o.useEffect)((function(){function e(){b(!1)}function t(t){var n=d(d({},m),t);a(n),b(!0),window.clearTimeout(g.current),g.current=window.setTimeout((function(){var n;e(),"function"==typeof(null===(n=t.onClose)||void 0===n?void 0:n.call)&&t.onClose()}),n.duration)}return u.a.on("toast.open",t),u.a.on("toast.close",e),function(){u.a.off("toast.open",t),u.a.off("toast.close",e),window.clearTimeout(g.current)}}),[]),f?c.a.createElement("div",{className:s()("toast","toast--".concat(n.position),"toast--".concat(n.type),"toast--".concat(n.className))},c.a.createElement("div",{className:"toast__message bold"},n.message)):null}},CnJU:function(e,t,n){"use strict";var a=new(n("zSml").a);t.a=a},ZUQt:function(e,t,n){"use strict";var a=n("g4DW"),r=n("2bPg"),o=n("BRlI"),c=n("HvSC"),i=n.n(c),s=n("KU2s"),u=n.n(s);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={esc:27,tab:9,enter:13,shift:16,space:32,left:37,up:38,right:39,down:40},m={leftCmd:91,cmd:93,option:18,control:17},b=["alt","ctrl","meta","shift"],g=function(){function e(t){Object(r.a)(this,e),this._event=t,this._handlers={},this._init()}return Object(o.a)(e,[{key:"didPress",value:function(e){var t=this,n=this._parseFlagsAndKey(e),a=n.flags,r=n.key,o=a.every((function(e){return t.event["".concat(e,"Key")]})),c=this._findCodeForKey(r)===this.keyCode;return o&&c}},{key:"execute",value:function(){var e=this;return Object.keys(this._handlers).some((function(t){return!!e.didPress(t)&&(e._handlers[t](e._event),!0)}))}},{key:"on",value:function(e,t){this._handlers[e]=t}},{key:"_findCodeForKey",value:function(e){if(1===e.length&&e>="a"&&e<="z")return e.toUpperCase().charCodeAt(0);if(this._keyCodes[e])return this._keyCodes[e];throw new Error("Invalid hot key combination")}},{key:"_init",value:function(){this._keyCodes=d(d({},f),m)}},{key:"_parseFlags",value:function(e){return u()(e,b)}},{key:"_parseFlagsAndKey",value:function(e){var t=e.split("+");return{flags:this._parseFlags(t),key:this._parseKey(t)}}},{key:"_parseKey",value:function(e){return i()(e,b)[0]}},{key:"event",get:function(){return this._event}},{key:"keyCode",get:function(){return this.event.keyCode}}]),e}();t.a=g},hj4t:function(e,t,n){"use strict";n("gbB/"),n("H41b"),n("EsI2")},laTo:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return d}));var a={FORM_INPUT_FOCUS:"form_input_focus",FORM_SUBMIT_STATUS:"form_submit_status",TRACK_USER:"track_user",REGISTER_USER:"register_user",LOGOUT:"logout",MODAL_CHANGE:"modal_change",PAGE_LOAD:"we_page_load",PAYMENT:"payment",VERTICAL_SCROLL:"scroll_vertical",HORIZONTAL_SCROLL:"scroll_horizontal",USER_DETAILS_FILLED:"user_details_filled",SET_USER_ATTRIBUTE:"set_user_attribute",LEAD_FORM_ATTRIBUTION:"lead_form_attribution"},r={CTA:"cta",FORM_SUBMIT:"form_submit",FORM_INPUT:"form_input"},o=["utm_source","utm_medium","utm_content","utm_campaign","utm_term","param1","param2","param3","param4","param5"],c=["gclid","fbclid","msclkid"],i={EDGE:"edge",ACADEMY:"academy",PLUS:"plus",CONTESTS:"contests",SAT:"selfassessment",CODEX:"codex",EVENTS:"events",DRONA:"drona",DATA_SCIENCE:"data_science",REVIEW:"alumni_directory"},s=[a.PAGE_LOAD],u=["end_time","start_time"],l=["we_phone","phone_number"],d={method:"POST",endpoint:"/api/v3/analytics/tracking/gtm/track"}},q7zV:function(e,t,n){"use strict";var a=n("g4DW"),r=n("7cf5"),o=n("gbB/"),c=n.n(o),i=n("i5Br"),s=n.n(i),u=n("+tDs");t.a=Object(u.a)((function(e){var t=e.forwardedRef,n=e.name,o=e.className,i=e.prefix,u=void 0===i?"icon":i,l=Object(r.a)(e,["forwardedRef","name","className","prefix"]);return c.a.createElement("i",Object.assign({ref:t,className:s()("".concat(u,"-").concat(n),Object(a.a)({},o,o))},l))}))},tH77:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n("g4DW");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n,a=t.category,r="".concat(a,"_").concat(e);null===(n=window.TrackingHelper)||void 0===n||n.track("submitFormatter",o(o({name:r},t),window.TrackingHelper.getContext(a)||{}))}function i(e,t,n,a,r){var c,i,s=t||e;i=e&&a?"".concat(a,"_").concat(e):e,null===(c=window.TrackingHelper)||void 0===c||c.track("eventFormatter",o(o({element:s,tagName:i,category:a,eventType:n||"click"},r||{}),window.TrackingHelper.getContext(a)||{}))}},x1g2:function(e,t,n){"use strict";n.d(t,"b",(function(){return g}));var a=n("g4DW"),r=n("DjBF"),o=n("7cf5"),c=n("gbB/"),i=n.n(c),s=n("i5Br"),u=n.n(s),l=n("1GZ3"),d=n("zXLR"),f=n("CnJU"),m=n("tH77");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g={show:function(e){var t=e.name,n=void 0===t?"default":t,a=Object(o.a)(e,["name"]),r="dialog.".concat(n);f.a.emit("".concat(r,".open"),a)},close:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t="dialog.".concat(e);f.a.emit("".concat(t,".close"))},areYouSure:function(e){var t=e.name,n=void 0===t?"default":t,a=Object(o.a)(e,["name"]),r={name:n,title:a.title||"Are you sure?",okLabel:a.okLabel||"Yes, Proceed",cancelLabel:a.cancelLabel||"No, Cancel",cancelClass:a.cancelClass||"",okClass:a.okClass||"btn-danger",content:a.content,onOk:a.onOk,gtmData:a.gtmData,hideCancel:a.hideCancel||!1,withoutHeader:a.withoutHeader||!1,size:a.size||void 0,hasCloseButton:a.hasCloseButton||!1,modalClassName:a.modalClassName||"",modalBodyClassName:a.modalBodyClassName||"",modalBackdropClassName:a.modalBackdropClassName||""};g.show(r)}},p={title:"",okLabel:"",cancelLabel:"",okClass:"",cancelClass:"",content:"",onCancel:function(){},onOk:function(){},onClose:function(){},hideCancel:!1,withoutHeader:!1,size:void 0,hasCloseButton:!1,modalClassName:"",modalBodyClassName:"",modalBackdropClassName:""};function O(e){var t=e.className,n=e.name,s=Object(o.a)(e,["className","name"]),g=Object(c.useState)(p),O=Object(r.a)(g,2),v=O[0],y=O[1],h=Object(c.useState)(!1),j=Object(r.a)(h,2),w=j[0],C=j[1],k=Object(c.useCallback)((function(e){if(v.gtmData){var t=v.gtmData,n=t.eventName,r=Object(o.a)(t,["eventName"]);Object(m.b)(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isConfirm:!0,confirmAction:e},r))}}),[v]),_=Object(c.useCallback)((function(){k(!1),v.onClose&&v.onClose(),C(!1)}),[v,k]),E=Object(c.useCallback)((function(){k(!1),v.onCancel&&v.onCancel(),C(!1)}),[v,k]),D=Object(c.useCallback)((function(){k(!0),v.onOk&&v.onOk(),C(!1)}),[v,k]);return Object(c.useEffect)((function(){function e(e){y(e),C(!0)}function t(){C(!1)}var a="dialog.".concat(n);return f.a.on("".concat(a,".open"),e),f.a.on("".concat(a,".close"),t),function(){f.a.off("".concat(a,".open"),e),f.a.off("".concat(a,".close"),t)}}),[n]),i.a.createElement(l.a,Object.assign({className:u()("dialog",Object(a.a)({},t,t),Object(a.a)({},v.modalClassName,v.modalClassName)),containerClassName:u()(Object(a.a)({},v.modalBodyClassName,v.modalBodyClassName)),backdropClassName:u()(Object(a.a)({},v.modalBackdropClassName,v.modalBackdropClassName)),isOpen:w,title:v.title,onClose:_,withoutHeader:v.withoutHeader,size:v.size,hasCloseButton:v.hasCloseButton},s),i.a.createElement("div",{className:"dialog__body"},v.content),i.a.createElement("div",{className:"dialog__actions"},!v.hideCancel&&i.a.createElement(d.a,{className:u()("btn btn-outlined dialog__action",v.cancelClass),onClick:E},v.cancelLabel),i.a.createElement(d.a,{className:u()("btn dialog__action",v.okClass),onClick:D},v.okLabel)))}O.defaultProps={name:"default"},t.a=O},zXLR:function(e,t,n){"use strict";var a=n("g4DW"),r=n("7cf5"),o=n("gbB/"),c=n.n(o),i=n("i5Br"),s=n.n(i),u=n("6WMW"),l=n.n(u),d=n("+tDs");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m=l()(d.a,d.c);t.a=m((function(e){var t=e.className,n=e.component,o=e.disabled,i=e.forwardedRef,u=Object(r.a)(e,["className","component","disabled","forwardedRef"]);return c.a.createElement(n||"a",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:s()("tappable",{disabled:o},Object(a.a)({},t,t)),ref:i},u))}))}}]);
//# sourceMappingURL=assessments~~c72beafe.17d585.chunk.js.map