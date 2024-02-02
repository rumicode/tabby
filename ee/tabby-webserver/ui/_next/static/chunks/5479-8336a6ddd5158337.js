"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5479],{85859:function(e,n,t){t.d(n,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},i=0,c=function(e){return e&&(e.host||c(e.parentNode))},u=function(e,n,t,u){var l=(Array.isArray(e)?e:[e]).map(function(e){if(n.contains(e))return e;var t=c(e);return t&&n.contains(t)?t:(console.error("aria-hidden",e,"in not contained inside",n,". Doing nothing"),null)}).filter(function(e){return!!e});a[t]||(a[t]=new WeakMap);var d=a[t],f=[],s=new Set,p=new Set(l),h=function(e){!e||s.has(e)||(s.add(e),h(e.parentNode))};l.forEach(h);var v=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))v(e);else{var n=e.getAttribute(u),a=null!==n&&"false"!==n,i=(r.get(e)||0)+1,c=(d.get(e)||0)+1;r.set(e,i),d.set(e,c),f.push(e),1===i&&a&&o.set(e,!0),1===c&&e.setAttribute(t,"true"),a||e.setAttribute(u,"true")}})};return v(n),s.clear(),i++,function(){f.forEach(function(e){var n=r.get(e)-1,a=d.get(e)-1;r.set(e,n),d.set(e,a),n||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(t)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,n,t){void 0===t&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=n||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),u(r,o,t,"aria-hidden")):function(){return null}}},17552:function(e,n,t){t.d(n,{Z:function(){return D}});var r,o,a,i,c,u,l=t(50044),d=t(2265),f="right-scroll-bar-position",s="width-before-scroll-bar",p=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),a=[],i=!1,c={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var n=o(e,i);return a.push(n),function(){a=a.filter(function(e){return e!==n})}},assignSyncMedium:function(e){for(i=!0;a.length;){var n=a;a=[],n.forEach(e)}a={push:function(n){return e(n)},filter:function(){return a}}},assignMedium:function(e){i=!0;var n=[];if(a.length){var t=a;a=[],t.forEach(e),n=a}var r=function(){var t=n;n=[],t.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){n.push(e),o()},filter:function(e){return n=n.filter(e),a}}}}).options=(0,l.pi)({async:!0,ssr:!1},r),c),h=function(){},v=d.forwardRef(function(e,n){var t,r,o,a=d.useRef(null),i=d.useState({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:h}),c=i[0],u=i[1],f=e.forwardProps,s=e.children,v=e.className,m=e.removeScrollBar,g=e.enabled,y=e.shards,b=e.sideCar,w=e.noIsolation,E=e.inert,S=e.allowPinchZoom,C=e.as,k=void 0===C?"div":C,A=(0,l._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),x=(t=[a,n],r=function(e){return t.forEach(function(n){return"function"==typeof n?n(e):n&&(n.current=e),n})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),R=(0,l.pi)((0,l.pi)({},A),c);return d.createElement(d.Fragment,null,g&&d.createElement(b,{sideCar:p,removeScrollBar:m,shards:y,noIsolation:w,inert:E,setCallbacks:u,allowPinchZoom:!!S,lockRef:a}),f?d.cloneElement(d.Children.only(s),(0,l.pi)((0,l.pi)({},R),{ref:x})):d.createElement(k,(0,l.pi)({},R,{className:v,ref:x}),s))});v.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},v.classNames={fullWidth:s,zeroRight:f};var m=function(e){var n=e.sideCar,t=(0,l._T)(e,["sideCar"]);if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,(0,l.pi)({},t))};m.isSideCarExport=!0;var g=function(){var e=0,n=null;return{add:function(r){if(0==e&&(n=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=u||t.nc;return n&&e.setAttribute("nonce",n),e}())){var o,a;(o=n).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=n,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!n||(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},y=function(){var e=g();return function(n,t){d.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},b=function(){var e=y();return function(n){return e(n.styles,n.dynamic),null}},w={left:0,top:0,right:0,gap:0},E=function(e){return parseInt(e||"",10)||0},S=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[E(t),E(r),E(o)]},C=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return w;var n=S(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},k=b(),A=function(e,n,t,r){var o=e.left,a=e.top,i=e.right,c=e.gap;return void 0===t&&(t="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(f," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(s," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(s," .").concat(s," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(c,"px;\n  }\n")},x=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=d.useMemo(function(){return C(o)},[o]);return d.createElement(k,{styles:A(a,!n,o,t?"":"!important")})},R=!1;if("undefined"!=typeof window)try{var M=Object.defineProperty({},"passive",{get:function(){return R=!0,!0}});window.addEventListener("test",M,M),window.removeEventListener("test",M,M)}catch(e){R=!1}var T=!!R&&{passive:!1},N=function(e,n){var t=window.getComputedStyle(e);return"hidden"!==t[n]&&!(t.overflowY===t.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===t[n])},L=function(e,n){var t=n;do{if("undefined"!=typeof ShadowRoot&&t instanceof ShadowRoot&&(t=t.host),W(e,t)){var r=O(e,t);if(r[1]>r[2])return!0}t=t.parentNode}while(t&&t!==document.body);return!1},W=function(e,n){return"v"===e?N(n,"overflowY"):N(n,"overflowX")},O=function(e,n){return"v"===e?[n.scrollTop,n.scrollHeight,n.clientHeight]:[n.scrollLeft,n.scrollWidth,n.clientWidth]},P=function(e,n,t,r,o){var a,i=(a=window.getComputedStyle(n).direction,"h"===e&&"rtl"===a?-1:1),c=i*r,u=t.target,l=n.contains(u),d=!1,f=c>0,s=0,p=0;do{var h=O(e,u),v=h[0],m=h[1]-h[2]-i*v;(v||m)&&W(e,u)&&(s+=m,p+=v),u=u.parentNode}while(!l&&u!==document.body||l&&(n.contains(u)||n===u));return f&&(o&&0===s||!o&&c>s)?d=!0:!f&&(o&&0===p||!o&&-c>p)&&(d=!0),d},j=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},B=function(e){return[e.deltaX,e.deltaY]},I=function(e){return e&&"current"in e?e.current:e},X=0,Y=[],_=(p.useMedium(function(e){var n=d.useRef([]),t=d.useRef([0,0]),r=d.useRef(),o=d.useState(X++)[0],a=d.useState(function(){return b()})[0],i=d.useRef(e);d.useEffect(function(){i.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var n=(0,l.ev)([e.lockRef.current],(e.shards||[]).map(I),!0).filter(Boolean);return n.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),n.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=d.useCallback(function(e,n){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=j(e),c=t.current,u="deltaX"in e?e.deltaX:c[0]-a[0],l="deltaY"in e?e.deltaY:c[1]-a[1],d=e.target,f=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===f&&"range"===d.type)return!1;var s=L(f,d);if(!s)return!0;if(s?o=f:(o="v"===f?"h":"v",s=L(f,d)),!s)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var p=r.current||o;return P(p,n,e,"h"===p?u:l,!0)},[]),u=d.useCallback(function(e){if(Y.length&&Y[Y.length-1]===a){var t="deltaY"in e?B(e):j(e),r=n.current.filter(function(n){var r;return n.name===e.type&&n.target===e.target&&(r=n.delta)[0]===t[0]&&r[1]===t[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(I).filter(Boolean).filter(function(n){return n.contains(e.target)});(o.length>0?c(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),f=d.useCallback(function(e,t,r,o){var a={name:e,delta:t,target:r,should:o};n.current.push(a),setTimeout(function(){n.current=n.current.filter(function(e){return e!==a})},1)},[]),s=d.useCallback(function(e){t.current=j(e),r.current=void 0},[]),p=d.useCallback(function(n){f(n.type,B(n),n.target,c(n,e.lockRef.current))},[]),h=d.useCallback(function(n){f(n.type,j(n),n.target,c(n,e.lockRef.current))},[]);d.useEffect(function(){return Y.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",u,T),document.addEventListener("touchmove",u,T),document.addEventListener("touchstart",s,T),function(){Y=Y.filter(function(e){return e!==a}),document.removeEventListener("wheel",u,T),document.removeEventListener("touchmove",u,T),document.removeEventListener("touchstart",s,T)}},[]);var v=e.removeScrollBar,m=e.inert;return d.createElement(d.Fragment,null,m?d.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?d.createElement(x,{gapMode:"margin"}):null)}),m),Z=d.forwardRef(function(e,n){return d.createElement(v,(0,l.pi)({},e,{ref:n,sideCar:_}))});Z.classNames=v.classNames;var D=Z},31244:function(e,n,t){t.d(n,{EW:function(){return a}});var r=t(2265);let o=0;function a(){(0,r.useEffect)(()=>{var e,n;let t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=t[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(n=t[1])&&void 0!==n?n:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},50044:function(e,n,t){t.d(n,{_T:function(){return o},ev:function(){return a},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function o(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>n.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t}function a(e,n,t){if(t||2==arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}"function"==typeof SuppressedError&&SuppressedError}}]);