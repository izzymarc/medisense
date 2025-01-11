import{a as ET}from"./index-LTi5NpLj.js";function wT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var iy={exports:{}},Vl={},sy={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),TT=Symbol.for("react.portal"),IT=Symbol.for("react.fragment"),ST=Symbol.for("react.strict_mode"),RT=Symbol.for("react.profiler"),AT=Symbol.for("react.provider"),PT=Symbol.for("react.context"),kT=Symbol.for("react.forward_ref"),CT=Symbol.for("react.suspense"),NT=Symbol.for("react.memo"),OT=Symbol.for("react.lazy"),Ip=Symbol.iterator;function DT(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ay=Object.assign,ly={};function Ui(t,e,n){this.props=t,this.context=e,this.refs=ly,this.updater=n||oy}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uy(){}uy.prototype=Ui.prototype;function Gf(t,e,n){this.props=t,this.context=e,this.refs=ly,this.updater=n||oy}var Qf=Gf.prototype=new uy;Qf.constructor=Gf;ay(Qf,Ui.prototype);Qf.isPureReactComponent=!0;var Sp=Array.isArray,cy=Object.prototype.hasOwnProperty,Jf={current:null},fy={key:!0,ref:!0,__self:!0,__source:!0};function hy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cy.call(e,r)&&!fy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:go,type:t,key:s,ref:o,props:i,_owner:Jf.current}}function xT(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function LT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rp=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LT(""+t.key):e.toString(36)}function wa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case TT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ju(o,0):r,Sp(i)?(n="",t!=null&&(n=t.replace(Rp,"$&/")+"/"),wa(i,e,n,"",function(f){return f})):i!=null&&(Xf(i)&&(i=xT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ju(s,l);o+=wa(s,e,n,u,i)}else if(u=DT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ju(s,l++),o+=wa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var r=[],i=0;return wa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function MT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Ta={transition:null},VT={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:Jf};function dy(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!Xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Ui;X.Fragment=IT;X.Profiler=RT;X.PureComponent=Gf;X.StrictMode=ST;X.Suspense=CT;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VT;X.act=dy;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ay({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)cy.call(e,u)&&!fy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];r.children=l}return{$$typeof:go,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:PT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AT,_context:t},t.Consumer=t};X.createElement=hy;X.createFactory=function(t){var e=hy.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:kT,render:t}};X.isValidElement=Xf;X.lazy=function(t){return{$$typeof:OT,_payload:{_status:-1,_result:t},_init:MT}};X.memo=function(t,e){return{$$typeof:NT,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=Ta.transition;Ta.transition={};try{t()}finally{Ta.transition=e}};X.unstable_act=dy;X.useCallback=function(t,e){return ot.current.useCallback(t,e)};X.useContext=function(t){return ot.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};X.useEffect=function(t,e){return ot.current.useEffect(t,e)};X.useId=function(){return ot.current.useId()};X.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return ot.current.useMemo(t,e)};X.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};X.useRef=function(t){return ot.current.useRef(t)};X.useState=function(t){return ot.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return ot.current.useTransition()};X.version="18.3.1";sy.exports=X;var z=sy.exports;const bT=ET(z),UT=wT({__proto__:null,default:bT},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT=z,BT=Symbol.for("react.element"),jT=Symbol.for("react.fragment"),zT=Object.prototype.hasOwnProperty,$T=FT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HT={key:!0,ref:!0,__self:!0,__source:!0};function py(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zT.call(e,r)&&!HT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BT,type:t,key:s,ref:o,props:i,_owner:$T.current}}Vl.Fragment=jT;Vl.jsx=py;Vl.jsxs=py;iy.exports=Vl;var WN=iy.exports,my={exports:{}},Tt={},gy={exports:{}},yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,K){var Q=j.length;j.push(K);e:for(;0<Q;){var de=Q-1>>>1,ie=j[de];if(0<i(ie,K))j[de]=K,j[Q]=ie,Q=de;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var K=j[0],Q=j.pop();if(Q!==K){j[0]=Q;e:for(var de=0,ie=j.length,we=ie>>>1;de<we;){var nn=2*(de+1)-1,rn=j[nn],sn=nn+1,on=j[sn];if(0>i(rn,Q))sn<ie&&0>i(on,rn)?(j[de]=on,j[sn]=Q,de=sn):(j[de]=rn,j[nn]=Q,de=nn);else if(sn<ie&&0>i(on,Q))j[de]=on,j[sn]=Q,de=sn;else break e}}return K}function i(j,K){var Q=j.sortIndex-K.sortIndex;return Q!==0?Q:j.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],f=[],d=1,p=null,y=3,P=!1,R=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(j){for(var K=n(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=j)r(f),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(f)}}function x(j){if(k=!1,T(j),!R)if(n(u)!==null)R=!0,Qi(M);else{var K=n(f);K!==null&&tn(x,K.startTime-j)}}function M(j,K){R=!1,k&&(k=!1,w(g),g=-1),P=!0;var Q=y;try{for(T(K),p=n(u);p!==null&&(!(p.expirationTime>K)||j&&!A());){var de=p.callback;if(typeof de=="function"){p.callback=null,y=p.priorityLevel;var ie=de(p.expirationTime<=K);K=t.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(u)&&r(u),T(K)}else r(u);p=n(u)}if(p!==null)var we=!0;else{var nn=n(f);nn!==null&&tn(x,nn.startTime-K),we=!1}return we}finally{p=null,y=Q,P=!1}}var F=!1,E=null,g=-1,v=5,I=-1;function A(){return!(t.unstable_now()-I<v)}function O(){if(E!==null){var j=t.unstable_now();I=j;var K=!0;try{K=E(!0,j)}finally{K?S():(F=!1,E=null)}}else F=!1}var S;if(typeof _=="function")S=function(){_(O)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,mr=St.port2;St.port1.onmessage=O,S=function(){mr.postMessage(null)}}else S=function(){C(O,0)};function Qi(j){E=j,F||(F=!0,S())}function tn(j,K){g=C(function(){j(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){R||P||(R=!0,Qi(M))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Q=y;y=K;try{return j()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Q=y;y=j;try{return K()}finally{y=Q}},t.unstable_scheduleCallback=function(j,K,Q){var de=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?de+Q:de):Q=de,j){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Q+ie,j={id:d++,callback:K,priorityLevel:j,startTime:Q,expirationTime:ie,sortIndex:-1},Q>de?(j.sortIndex=Q,e(f,j),n(u)===null&&j===n(f)&&(k?(w(g),g=-1):k=!0,tn(x,Q-de))):(j.sortIndex=ie,e(u,j),R||P||(R=!0,Qi(M))),j},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(j){var K=y;return function(){var Q=y;y=K;try{return j.apply(this,arguments)}finally{y=Q}}}})(yy);gy.exports=yy;var WT=gy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qT=z,wt=WT;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _y=new Set,js={};function Wr(t,e){Si(t,e),Si(t+"Capture",e)}function Si(t,e){for(js[t]=e,t=0;t<e.length;t++)_y.add(e[t])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=Object.prototype.hasOwnProperty,KT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ap={},Pp={};function GT(t){return kc.call(Pp,t)?!0:kc.call(Ap,t)?!1:KT.test(t)?Pp[t]=!0:(Ap[t]=!0,!1)}function QT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JT(t,e,n,r){if(e===null||typeof e>"u"||QT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yf=/[\-:]([a-z])/g;function Zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yf,Zf);ze[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yf,Zf);ze[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yf,Zf);ze[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function eh(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JT(e,n,i,r)&&(n=null),r||i===null?GT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=qT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),vy=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Oc=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),wy=Symbol.for("react.offscreen"),kp=Symbol.iterator;function us(t){return t===null||typeof t!="object"?null:(t=kp&&t[kp]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,zu;function Es(t){if(zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||""}return`
`+zu+t}var $u=!1;function Hu(t,e){if(!t||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function XT(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function Dc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ni:return"Fragment";case ti:return"Portal";case Cc:return"Profiler";case th:return"StrictMode";case Nc:return"Suspense";case Oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ey:return(t.displayName||"Context")+".Consumer";case vy:return(t._context.displayName||"Context")+".Provider";case nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:Dc(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return Dc(t(e))}catch{}}return null}function YT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dc(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ty(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZT(t){var e=Ty(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=ZT(t))}function Iy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ty(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sy(t,e){e=e.checked,e!=null&&eh(t,"checked",e,!1)}function Lc(t,e){Sy(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mc(t,e,n){(e!=="number"||$a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(ws(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Ry(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ay(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ay(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,Py=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e0=["Webkit","ms","Moz","O"];Object.keys(Ps).forEach(function(t){e0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ps[e]=Ps[t]})});function ky(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ps.hasOwnProperty(t)&&Ps[t]?(""+e).trim():e+"px"}function Cy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ky(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var t0=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uc(t,e){if(e){if(t0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bc=null;function ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jc=null,mi=null,gi=null;function xp(t){if(t=vo(t)){if(typeof jc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=jl(e),jc(t.stateNode,t.type,e))}}function Ny(t){mi?gi?gi.push(t):gi=[t]:mi=t}function Oy(){if(mi){var t=mi,e=gi;if(gi=mi=null,xp(t),e)for(t=0;t<e.length;t++)xp(e[t])}}function Dy(t,e){return t(e)}function xy(){}var Wu=!1;function Ly(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return Dy(t,e,n)}finally{Wu=!1,(mi!==null||gi!==null)&&(xy(),Oy())}}function $s(t,e){var n=t.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var zc=!1;if(En)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){zc=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{zc=!1}function n0(t,e,n,r,i,s,o,l,u){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(d){this.onError(d)}}var ks=!1,Ha=null,Wa=!1,$c=null,r0={onError:function(t){ks=!0,Ha=t}};function i0(t,e,n,r,i,s,o,l,u){ks=!1,Ha=null,n0.apply(r0,arguments)}function s0(t,e,n,r,i,s,o,l,u){if(i0.apply(this,arguments),ks){if(ks){var f=Ha;ks=!1,Ha=null}else throw Error(b(198));Wa||(Wa=!0,$c=f)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function My(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lp(t){if(qr(t)!==t)throw Error(b(188))}function o0(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Lp(i),t;if(s===r)return Lp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Vy(t){return t=o0(t),t!==null?by(t):null}function by(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=by(t);if(e!==null)return e;t=t.sibling}return null}var Uy=wt.unstable_scheduleCallback,Mp=wt.unstable_cancelCallback,a0=wt.unstable_shouldYield,l0=wt.unstable_requestPaint,Te=wt.unstable_now,u0=wt.unstable_getCurrentPriorityLevel,sh=wt.unstable_ImmediatePriority,Fy=wt.unstable_UserBlockingPriority,qa=wt.unstable_NormalPriority,c0=wt.unstable_LowPriority,By=wt.unstable_IdlePriority,bl=null,Qt=null;function f0(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:p0,h0=Math.log,d0=Math.LN2;function p0(t){return t>>>=0,t===0?32:31-(h0(t)/d0|0)|0}var na=64,ra=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ts(l):(s&=o,s!==0&&(r=Ts(s)))}else o=n&~i,o!==0?r=Ts(o):s!==0&&(r=Ts(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function m0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=m0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jy(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function y0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function zy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $y,ah,Hy,Wy,qy,Wc=!1,ia=[],Wn=null,qn=null,Kn=null,Hs=new Map,Ws=new Map,Vn=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(t,e){switch(t){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(e.pointerId)}}function fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vo(e),e!==null&&ah(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function v0(t,e,n,r,i){switch(e){case"focusin":return Wn=fs(Wn,t,e,n,r,i),!0;case"dragenter":return qn=fs(qn,t,e,n,r,i),!0;case"mouseover":return Kn=fs(Kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hs.set(s,fs(Hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ws.set(s,fs(Ws.get(s)||null,t,e,n,r,i)),!0}return!1}function Ky(t){var e=Ir(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=My(n),e!==null){t.blockedOn=e,qy(t.priority,function(){Hy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ia(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bc=r,n.target.dispatchEvent(r),Bc=null}else return e=vo(n),e!==null&&ah(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){Ia(t)&&n.delete(e)}function E0(){Wc=!1,Wn!==null&&Ia(Wn)&&(Wn=null),qn!==null&&Ia(qn)&&(qn=null),Kn!==null&&Ia(Kn)&&(Kn=null),Hs.forEach(bp),Ws.forEach(bp)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Wc||(Wc=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,E0)))}function qs(t){function e(i){return hs(i,t)}if(0<ia.length){hs(ia[0],t);for(var n=1;n<ia.length;n++){var r=ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wn!==null&&hs(Wn,t),qn!==null&&hs(qn,t),Kn!==null&&hs(Kn,t),Hs.forEach(e),Ws.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)Ky(n),n.blockedOn===null&&Vn.shift()}var yi=An.ReactCurrentBatchConfig,Ga=!0;function w0(t,e,n,r){var i=re,s=yi.transition;yi.transition=null;try{re=1,lh(t,e,n,r)}finally{re=i,yi.transition=s}}function T0(t,e,n,r){var i=re,s=yi.transition;yi.transition=null;try{re=4,lh(t,e,n,r)}finally{re=i,yi.transition=s}}function lh(t,e,n,r){if(Ga){var i=qc(t,e,n,r);if(i===null)nc(t,e,r,Qa,n),Vp(t,r);else if(v0(i,t,e,n,r))r.stopPropagation();else if(Vp(t,r),e&4&&-1<_0.indexOf(t)){for(;i!==null;){var s=vo(i);if(s!==null&&$y(s),s=qc(t,e,n,r),s===null&&nc(t,e,r,Qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nc(t,e,r,null,n)}}var Qa=null;function qc(t,e,n,r){if(Qa=null,t=ih(r),t=Ir(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=My(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qa=t,null}function Gy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u0()){case sh:return 1;case Fy:return 4;case qa:case c0:return 16;case By:return 536870912;default:return 16}default:return 16}}var zn=null,uh=null,Sa=null;function Qy(){if(Sa)return Sa;var t,e=uh,n=e.length,r,i="value"in zn?zn.value:zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sa=i.slice(t,1<r?1-r:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function Up(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:Up,this.isPropagationStopped=Up,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ch=It(Fi),_o=ye({},Fi,{view:0,detail:0}),I0=It(_o),Ku,Gu,ds,Ul=ye({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(Ku=t.screenX-ds.screenX,Gu=t.screenY-ds.screenY):Gu=Ku=0,ds=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),Fp=It(Ul),S0=ye({},Ul,{dataTransfer:0}),R0=It(S0),A0=ye({},_o,{relatedTarget:0}),Qu=It(A0),P0=ye({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=It(P0),C0=ye({},Fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N0=It(C0),O0=ye({},Fi,{data:0}),Bp=It(O0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=L0[t])?!!e[t]:!1}function fh(){return M0}var V0=ye({},_o,{key:function(t){if(t.key){var e=D0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b0=It(V0),U0=ye({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=It(U0),F0=ye({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),B0=It(F0),j0=ye({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),z0=It(j0),$0=ye({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),H0=It($0),W0=[9,13,27,32],hh=En&&"CompositionEvent"in window,Cs=null;En&&"documentMode"in document&&(Cs=document.documentMode);var q0=En&&"TextEvent"in window&&!Cs,Jy=En&&(!hh||Cs&&8<Cs&&11>=Cs),zp=" ",$p=!1;function Xy(t,e){switch(t){case"keyup":return W0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ri=!1;function K0(t,e){switch(t){case"compositionend":return Yy(e);case"keypress":return e.which!==32?null:($p=!0,zp);case"textInput":return t=e.data,t===zp&&$p?null:t;default:return null}}function G0(t,e){if(ri)return t==="compositionend"||!hh&&Xy(t,e)?(t=Qy(),Sa=uh=zn=null,ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jy&&e.locale!=="ko"?null:e.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q0[t.type]:e==="textarea"}function Zy(t,e,n,r){Ny(r),e=Ja(e,"onChange"),0<e.length&&(n=new ch("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ns=null,Ks=null;function J0(t){c_(t,0)}function Fl(t){var e=oi(t);if(Iy(e))return t}function X0(t,e){if(t==="change")return e}var e_=!1;if(En){var Ju;if(En){var Xu="oninput"in document;if(!Xu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Xu=typeof Wp.oninput=="function"}Ju=Xu}else Ju=!1;e_=Ju&&(!document.documentMode||9<document.documentMode)}function qp(){Ns&&(Ns.detachEvent("onpropertychange",t_),Ks=Ns=null)}function t_(t){if(t.propertyName==="value"&&Fl(Ks)){var e=[];Zy(e,Ks,t,ih(t)),Ly(J0,e)}}function Y0(t,e,n){t==="focusin"?(qp(),Ns=e,Ks=n,Ns.attachEvent("onpropertychange",t_)):t==="focusout"&&qp()}function Z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Ks)}function eI(t,e){if(t==="click")return Fl(e)}function tI(t,e){if(t==="input"||t==="change")return Fl(e)}function nI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:nI;function Gs(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kc.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,e){var n=Kp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kp(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r_(){for(var t=window,e=$a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$a(t.document)}return e}function dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rI(t){var e=r_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n_(n.ownerDocument.documentElement,n)){if(r!==null&&dh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gp(n,s);var o=Gp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iI=En&&"documentMode"in document&&11>=document.documentMode,ii=null,Kc=null,Os=null,Gc=!1;function Qp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gc||ii==null||ii!==$a(r)||(r=ii,"selectionStart"in r&&dh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Gs(Os,r)||(Os=r,r=Ja(Kc,"onSelect"),0<r.length&&(e=new ch("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var si={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},Yu={},i_={};En&&(i_=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Bl(t){if(Yu[t])return Yu[t];if(!si[t])return t;var e=si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i_)return Yu[t]=e[n];return t}var s_=Bl("animationend"),o_=Bl("animationiteration"),a_=Bl("animationstart"),l_=Bl("transitionend"),u_=new Map,Jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){u_.set(t,e),Wr(e,[t])}for(var Zu=0;Zu<Jp.length;Zu++){var ec=Jp[Zu],sI=ec.toLowerCase(),oI=ec[0].toUpperCase()+ec.slice(1);ur(sI,"on"+oI)}ur(s_,"onAnimationEnd");ur(o_,"onAnimationIteration");ur(a_,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(l_,"onTransitionEnd");Si("onMouseEnter",["mouseout","mouseover"]);Si("onMouseLeave",["mouseout","mouseover"]);Si("onPointerEnter",["pointerout","pointerover"]);Si("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function Xp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,s0(r,e,void 0,t),t.currentTarget=null}function c_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,f=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Xp(i,l,f),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,f=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Xp(i,l,f),s=u}}}if(Wa)throw t=$c,Wa=!1,$c=null,t}function ce(t,e){var n=e[Zc];n===void 0&&(n=e[Zc]=new Set);var r=t+"__bubble";n.has(r)||(f_(e,t,2,!1),n.add(r))}function tc(t,e,n){var r=0;e&&(r|=4),f_(n,t,r,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[aa]){t[aa]=!0,_y.forEach(function(n){n!=="selectionchange"&&(aI.has(n)||tc(n,!1,t),tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,tc("selectionchange",!1,e))}}function f_(t,e,n,r){switch(Gy(e)){case 1:var i=w0;break;case 4:i=T0;break;default:i=lh}n=i.bind(null,e,n,t),i=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ir(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ly(function(){var f=s,d=ih(n),p=[];e:{var y=u_.get(t);if(y!==void 0){var P=ch,R=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":P=b0;break;case"focusin":R="focus",P=Qu;break;case"focusout":R="blur",P=Qu;break;case"beforeblur":case"afterblur":P=Qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=R0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=B0;break;case s_:case o_:case a_:P=k0;break;case l_:P=z0;break;case"scroll":P=I0;break;case"wheel":P=H0;break;case"copy":case"cut":case"paste":P=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=jp}var k=(e&4)!==0,C=!k&&t==="scroll",w=k?y!==null?y+"Capture":null:y;k=[];for(var _=f,T;_!==null;){T=_;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,w!==null&&(x=$s(_,w),x!=null&&k.push(Js(_,x,T)))),C)break;_=_.return}0<k.length&&(y=new P(y,R,null,n,d),p.push({event:y,listeners:k}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",P=t==="mouseout"||t==="pointerout",y&&n!==Bc&&(R=n.relatedTarget||n.fromElement)&&(Ir(R)||R[wn]))break e;if((P||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,P?(R=n.relatedTarget||n.toElement,P=f,R=R?Ir(R):null,R!==null&&(C=qr(R),R!==C||R.tag!==5&&R.tag!==6)&&(R=null)):(P=null,R=f),P!==R)){if(k=Fp,x="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=jp,x="onPointerLeave",w="onPointerEnter",_="pointer"),C=P==null?y:oi(P),T=R==null?y:oi(R),y=new k(x,_+"leave",P,n,d),y.target=C,y.relatedTarget=T,x=null,Ir(d)===f&&(k=new k(w,_+"enter",R,n,d),k.target=T,k.relatedTarget=C,x=k),C=x,P&&R)t:{for(k=P,w=R,_=0,T=k;T;T=Zr(T))_++;for(T=0,x=w;x;x=Zr(x))T++;for(;0<_-T;)k=Zr(k),_--;for(;0<T-_;)w=Zr(w),T--;for(;_--;){if(k===w||w!==null&&k===w.alternate)break t;k=Zr(k),w=Zr(w)}k=null}else k=null;P!==null&&Yp(p,y,P,k,!1),R!==null&&C!==null&&Yp(p,C,R,k,!0)}}e:{if(y=f?oi(f):window,P=y.nodeName&&y.nodeName.toLowerCase(),P==="select"||P==="input"&&y.type==="file")var M=X0;else if(Hp(y))if(e_)M=tI;else{M=Z0;var F=Y0}else(P=y.nodeName)&&P.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=eI);if(M&&(M=M(t,f))){Zy(p,M,n,d);break e}F&&F(t,y,f),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&Mc(y,"number",y.value)}switch(F=f?oi(f):window,t){case"focusin":(Hp(F)||F.contentEditable==="true")&&(ii=F,Kc=f,Os=null);break;case"focusout":Os=Kc=ii=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,Qp(p,n,d);break;case"selectionchange":if(iI)break;case"keydown":case"keyup":Qp(p,n,d)}var E;if(hh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ri?Xy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Jy&&n.locale!=="ko"&&(ri||g!=="onCompositionStart"?g==="onCompositionEnd"&&ri&&(E=Qy()):(zn=d,uh="value"in zn?zn.value:zn.textContent,ri=!0)),F=Ja(f,g),0<F.length&&(g=new Bp(g,t,null,n,d),p.push({event:g,listeners:F}),E?g.data=E:(E=Yy(n),E!==null&&(g.data=E)))),(E=q0?K0(t,n):G0(t,n))&&(f=Ja(f,"onBeforeInput"),0<f.length&&(d=new Bp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:f}),d.data=E))}c_(p,e)})}function Js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$s(t,n),s!=null&&r.unshift(Js(t,s,i)),s=$s(t,e),s!=null&&r.push(Js(t,s,i))),t=t.return}return r}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,f=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&f!==null&&(l=f,i?(u=$s(n,s),u!=null&&o.unshift(Js(n,u,l))):i||(u=$s(n,s),u!=null&&o.push(Js(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lI=/\r\n?/g,uI=/\u0000|\uFFFD/g;function Zp(t){return(typeof t=="string"?t:""+t).replace(lI,`
`).replace(uI,"")}function la(t,e,n){if(e=Zp(e),Zp(t)!==e&&n)throw Error(b(425))}function Xa(){}var Qc=null,Jc=null;function Xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,cI=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,fI=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(hI)}:Yc;function hI(t){setTimeout(function(){throw t})}function rc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qs(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Bi,Xs="__reactProps$"+Bi,wn="__reactContainer$"+Bi,Zc="__reactEvents$"+Bi,dI="__reactListeners$"+Bi,pI="__reactHandles$"+Bi;function Ir(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wn]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[Kt])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[Kt]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function jl(t){return t[Xs]||null}var ef=[],ai=-1;function cr(t){return{current:t}}function fe(t){0>ai||(t.current=ef[ai],ef[ai]=null,ai--)}function ae(t,e){ai++,ef[ai]=t.current,t.current=e}var sr={},et=cr(sr),ct=cr(!1),xr=sr;function Ri(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Ya(){fe(ct),fe(et)}function nm(t,e,n){if(et.current!==sr)throw Error(b(168));ae(et,e),ae(ct,n)}function h_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,YT(t)||"Unknown",i));return ye({},n,r)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,xr=et.current,ae(et,t),ae(ct,ct.current),!0}function rm(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=h_(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,fe(ct),fe(et),ae(et,t)):fe(ct),ae(ct,n)}var cn=null,zl=!1,ic=!1;function d_(t){cn===null?cn=[t]:cn.push(t)}function mI(t){zl=!0,d_(t)}function fr(){if(!ic&&cn!==null){ic=!0;var t=0,e=re;try{var n=cn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cn=null,zl=!1}catch(i){throw cn!==null&&(cn=cn.slice(t+1)),Uy(sh,fr),i}finally{re=e,ic=!1}}return null}var li=[],ui=0,el=null,tl=0,Rt=[],At=0,Lr=null,fn=1,hn="";function Er(t,e){li[ui++]=tl,li[ui++]=el,el=t,tl=e}function p_(t,e,n){Rt[At++]=fn,Rt[At++]=hn,Rt[At++]=Lr,Lr=t;var r=fn;t=hn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Ft(e)+i|n<<i|r,hn=s+t}else fn=1<<s|n<<i|r,hn=t}function ph(t){t.return!==null&&(Er(t,1),p_(t,1,0))}function mh(t){for(;t===el;)el=li[--ui],li[ui]=null,tl=li[--ui],li[ui]=null;for(;t===Lr;)Lr=Rt[--At],Rt[At]=null,hn=Rt[--At],Rt[At]=null,fn=Rt[--At],Rt[At]=null}var vt=null,_t=null,he=!1,Mt=null;function m_(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,_t=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:fn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,_t=null,!0):!1;default:return!1}}function tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nf(t){if(he){var e=_t;if(e){var n=e;if(!im(t,e)){if(tf(t))throw Error(b(418));e=Gn(n.nextSibling);var r=vt;e&&im(t,e)?m_(r,n):(t.flags=t.flags&-4097|2,he=!1,vt=t)}}else{if(tf(t))throw Error(b(418));t.flags=t.flags&-4097|2,he=!1,vt=t}}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function ua(t){if(t!==vt)return!1;if(!he)return sm(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xc(t.type,t.memoizedProps)),e&&(e=_t)){if(tf(t))throw g_(),Error(b(418));for(;e;)m_(t,e),e=Gn(e.nextSibling)}if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=vt?Gn(t.stateNode.nextSibling):null;return!0}function g_(){for(var t=_t;t;)t=Gn(t.nextSibling)}function Ai(){_t=vt=null,he=!1}function gh(t){Mt===null?Mt=[t]:Mt.push(t)}var gI=An.ReactCurrentBatchConfig;function ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function y_(t){function e(w,_){if(t){var T=w.deletions;T===null?(w.deletions=[_],w.flags|=16):T.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=Yn(w,_),w.index=0,w.sibling=null,w}function s(w,_,T){return w.index=T,t?(T=w.alternate,T!==null?(T=T.index,T<_?(w.flags|=2,_):T):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,T,x){return _===null||_.tag!==6?(_=fc(T,w.mode,x),_.return=w,_):(_=i(_,T),_.return=w,_)}function u(w,_,T,x){var M=T.type;return M===ni?d(w,_,T.props.children,x,T.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ln&&om(M)===_.type)?(x=i(_,T.props),x.ref=ps(w,_,T),x.return=w,x):(x=Da(T.type,T.key,T.props,null,w.mode,x),x.ref=ps(w,_,T),x.return=w,x)}function f(w,_,T,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=hc(T,w.mode,x),_.return=w,_):(_=i(_,T.children||[]),_.return=w,_)}function d(w,_,T,x,M){return _===null||_.tag!==7?(_=Cr(T,w.mode,x,M),_.return=w,_):(_=i(_,T),_.return=w,_)}function p(w,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=fc(""+_,w.mode,T),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:return T=Da(_.type,_.key,_.props,null,w.mode,T),T.ref=ps(w,null,_),T.return=w,T;case ti:return _=hc(_,w.mode,T),_.return=w,_;case Ln:var x=_._init;return p(w,x(_._payload),T)}if(ws(_)||us(_))return _=Cr(_,w.mode,T,null),_.return=w,_;ca(w,_)}return null}function y(w,_,T,x){var M=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:l(w,_,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Zo:return T.key===M?u(w,_,T,x):null;case ti:return T.key===M?f(w,_,T,x):null;case Ln:return M=T._init,y(w,_,M(T._payload),x)}if(ws(T)||us(T))return M!==null?null:d(w,_,T,x,null);ca(w,T)}return null}function P(w,_,T,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return w=w.get(T)||null,l(_,w,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:return w=w.get(x.key===null?T:x.key)||null,u(_,w,x,M);case ti:return w=w.get(x.key===null?T:x.key)||null,f(_,w,x,M);case Ln:var F=x._init;return P(w,_,T,F(x._payload),M)}if(ws(x)||us(x))return w=w.get(T)||null,d(_,w,x,M,null);ca(_,x)}return null}function R(w,_,T,x){for(var M=null,F=null,E=_,g=_=0,v=null;E!==null&&g<T.length;g++){E.index>g?(v=E,E=null):v=E.sibling;var I=y(w,E,T[g],x);if(I===null){E===null&&(E=v);break}t&&E&&I.alternate===null&&e(w,E),_=s(I,_,g),F===null?M=I:F.sibling=I,F=I,E=v}if(g===T.length)return n(w,E),he&&Er(w,g),M;if(E===null){for(;g<T.length;g++)E=p(w,T[g],x),E!==null&&(_=s(E,_,g),F===null?M=E:F.sibling=E,F=E);return he&&Er(w,g),M}for(E=r(w,E);g<T.length;g++)v=P(E,w,g,T[g],x),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?g:v.key),_=s(v,_,g),F===null?M=v:F.sibling=v,F=v);return t&&E.forEach(function(A){return e(w,A)}),he&&Er(w,g),M}function k(w,_,T,x){var M=us(T);if(typeof M!="function")throw Error(b(150));if(T=M.call(T),T==null)throw Error(b(151));for(var F=M=null,E=_,g=_=0,v=null,I=T.next();E!==null&&!I.done;g++,I=T.next()){E.index>g?(v=E,E=null):v=E.sibling;var A=y(w,E,I.value,x);if(A===null){E===null&&(E=v);break}t&&E&&A.alternate===null&&e(w,E),_=s(A,_,g),F===null?M=A:F.sibling=A,F=A,E=v}if(I.done)return n(w,E),he&&Er(w,g),M;if(E===null){for(;!I.done;g++,I=T.next())I=p(w,I.value,x),I!==null&&(_=s(I,_,g),F===null?M=I:F.sibling=I,F=I);return he&&Er(w,g),M}for(E=r(w,E);!I.done;g++,I=T.next())I=P(E,w,g,I.value,x),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?g:I.key),_=s(I,_,g),F===null?M=I:F.sibling=I,F=I);return t&&E.forEach(function(O){return e(w,O)}),he&&Er(w,g),M}function C(w,_,T,x){if(typeof T=="object"&&T!==null&&T.type===ni&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Zo:e:{for(var M=T.key,F=_;F!==null;){if(F.key===M){if(M=T.type,M===ni){if(F.tag===7){n(w,F.sibling),_=i(F,T.props.children),_.return=w,w=_;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ln&&om(M)===F.type){n(w,F.sibling),_=i(F,T.props),_.ref=ps(w,F,T),_.return=w,w=_;break e}n(w,F);break}else e(w,F);F=F.sibling}T.type===ni?(_=Cr(T.props.children,w.mode,x,T.key),_.return=w,w=_):(x=Da(T.type,T.key,T.props,null,w.mode,x),x.ref=ps(w,_,T),x.return=w,w=x)}return o(w);case ti:e:{for(F=T.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(w,_.sibling),_=i(_,T.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=hc(T,w.mode,x),_.return=w,w=_}return o(w);case Ln:return F=T._init,C(w,_,F(T._payload),x)}if(ws(T))return R(w,_,T,x);if(us(T))return k(w,_,T,x);ca(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,T),_.return=w,w=_):(n(w,_),_=fc(T,w.mode,x),_.return=w,w=_),o(w)):n(w,_)}return C}var Pi=y_(!0),__=y_(!1),nl=cr(null),rl=null,ci=null,yh=null;function _h(){yh=ci=rl=null}function vh(t){var e=nl.current;fe(nl),t._currentValue=e}function rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _i(t,e){rl=t,yh=ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},ci===null){if(rl===null)throw Error(b(308));ci=t,rl.dependencies={lanes:0,firstContext:t}}else ci=ci.next=t;return e}var Sr=null;function Eh(t){Sr===null?Sr=[t]:Sr.push(t)}function v_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Eh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tn(t,n)}return i=r.interleaved,i===null?(e.next=e,Eh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tn(t,n)}function Aa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oh(t,n)}}function am(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,f=u.next;u.next=null,o===null?s=f:o.next=f,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=f:l.next=f,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=f=u=null,l=s;do{var y=l.lane,P=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:P,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,k=l;switch(y=e,P=n,k.tag){case 1:if(R=k.payload,typeof R=="function"){p=R.call(P,p,y);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,y=typeof R=="function"?R.call(P,p,y):R,y==null)break e;p=ye({},p,y);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else P={eventTime:P,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(f=d=P,u=p):d=d.next=P,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=p}}function lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Eo={},Jt=cr(Eo),Ys=cr(Eo),Zs=cr(Eo);function Rr(t){if(t===Eo)throw Error(b(174));return t}function Th(t,e){switch(ae(Zs,e),ae(Ys,t),ae(Jt,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bc(e,t)}fe(Jt),ae(Jt,e)}function ki(){fe(Jt),fe(Ys),fe(Zs)}function w_(t){Rr(Zs.current);var e=Rr(Jt.current),n=bc(e,t.type);e!==n&&(ae(Ys,t),ae(Jt,n))}function Ih(t){Ys.current===t&&(fe(Jt),fe(Ys))}var me=cr(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sc=[];function Sh(){for(var t=0;t<sc.length;t++)sc[t]._workInProgressVersionPrimary=null;sc.length=0}var Pa=An.ReactCurrentDispatcher,oc=An.ReactCurrentBatchConfig,Mr=0,ge=null,ke=null,De=null,ol=!1,Ds=!1,eo=0,yI=0;function qe(){throw Error(b(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function Ah(t,e,n,r,i,s){if(Mr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pa.current=t===null||t.memoizedState===null?wI:TI,t=n(r,i),Ds){s=0;do{if(Ds=!1,eo=0,25<=s)throw Error(b(301));s+=1,De=ke=null,e.updateQueue=null,Pa.current=II,t=n(r,i)}while(Ds)}if(Pa.current=al,e=ke!==null&&ke.next!==null,Mr=0,De=ke=ge=null,ol=!1,e)throw Error(b(300));return t}function Ph(){var t=eo!==0;return eo=0,t}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ge.memoizedState=De=t:De=De.next=t,De}function Nt(){if(ke===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=De===null?ge.memoizedState:De.next;if(e!==null)De=e,ke=t;else{if(t===null)throw Error(b(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},De===null?ge.memoizedState=De=t:De=De.next=t}return De}function to(t,e){return typeof e=="function"?e(t):e}function ac(t){var e=Nt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,f=s;do{var d=f.lane;if((Mr&d)===d)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var p={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ge.lanes|=d,Vr|=d}f=f.next}while(f!==null&&f!==s);u===null?o=r:u.next=l,jt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function T_(){}function I_(t,e){var n=ge,r=Nt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,kh(A_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,no(9,R_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(b(349));Mr&30||S_(n,e,i)}return i}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R_(t,e,n,r){e.value=n,e.getSnapshot=r,P_(e)&&k_(t)}function A_(t,e,n){return n(function(){P_(e)&&k_(t)})}function P_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function k_(t){var e=Tn(t,1);e!==null&&Bt(e,t,1,-1)}function um(t){var e=qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=EI.bind(null,ge,t),[e.memoizedState,t]}function no(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function C_(){return Nt().memoizedState}function ka(t,e,n,r){var i=qt();ge.flags|=t,i.memoizedState=no(1|e,n,void 0,r===void 0?null:r)}function $l(t,e,n,r){var i=Nt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&Rh(r,o.deps)){i.memoizedState=no(e,n,s,r);return}}ge.flags|=t,i.memoizedState=no(1|e,n,s,r)}function cm(t,e){return ka(8390656,8,t,e)}function kh(t,e){return $l(2048,8,t,e)}function N_(t,e){return $l(4,2,t,e)}function O_(t,e){return $l(4,4,t,e)}function D_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function x_(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,D_.bind(null,e,t),n)}function Ch(){}function L_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function M_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return Mr&21?(jt(n,e)||(n=jy(),ge.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function _I(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=oc.transition;oc.transition={};try{t(!1),e()}finally{re=n,oc.transition=r}}function b_(){return Nt().memoizedState}function vI(t,e,n){var r=Xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},U_(t))F_(e,n);else if(n=v_(t,e,n,r),n!==null){var i=st();Bt(n,t,r,i),B_(n,e,r)}}function EI(t,e,n){var r=Xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(U_(t))F_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jt(l,o)){var u=e.interleaved;u===null?(i.next=i,Eh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=v_(t,e,i,r),n!==null&&(i=st(),Bt(n,t,r,i),B_(n,e,r))}}function U_(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function F_(t,e){Ds=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oh(t,n)}}var al={readContext:Ct,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},wI={readContext:Ct,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ka(4194308,4,D_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return ka(4,2,t,e)},useMemo:function(t,e){var n=qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vI.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:um,useDebugValue:Ch,useDeferredValue:function(t){return qt().memoizedState=t},useTransition:function(){var t=um(!1),e=t[0];return t=_I.bind(null,t[1]),qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=qt();if(he){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Le===null)throw Error(b(349));Mr&30||S_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cm(A_.bind(null,r,s,t),[t]),r.flags|=2048,no(9,R_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qt(),e=Le.identifierPrefix;if(he){var n=hn,r=fn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TI={readContext:Ct,useCallback:L_,useContext:Ct,useEffect:kh,useImperativeHandle:x_,useInsertionEffect:N_,useLayoutEffect:O_,useMemo:M_,useReducer:ac,useRef:C_,useState:function(){return ac(to)},useDebugValue:Ch,useDeferredValue:function(t){var e=Nt();return V_(e,ke.memoizedState,t)},useTransition:function(){var t=ac(to)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:T_,useSyncExternalStore:I_,useId:b_,unstable_isNewReconciler:!1},II={readContext:Ct,useCallback:L_,useContext:Ct,useEffect:kh,useImperativeHandle:x_,useInsertionEffect:N_,useLayoutEffect:O_,useMemo:M_,useReducer:lc,useRef:C_,useState:function(){return lc(to)},useDebugValue:Ch,useDeferredValue:function(t){var e=Nt();return ke===null?e.memoizedState=t:V_(e,ke.memoizedState,t)},useTransition:function(){var t=lc(to)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:T_,useSyncExternalStore:I_,useId:b_,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=Xn(t),s=gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(Bt(e,t,i,r),Aa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=Xn(t),s=gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(Bt(e,t,i,r),Aa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=Xn(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qn(t,i,r),e!==null&&(Bt(e,t,r,n),Aa(e,t,r))}};function fm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gs(n,r)||!Gs(i,s):!0}function j_(t,e,n){var r=!1,i=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=ft(e)?xr:et.current,r=e.contextTypes,s=(r=r!=null)?Ri(t,i):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hl.enqueueReplaceState(e,e.state,null)}function of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=ft(e)?xr:et.current,i.context=Ri(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hl.enqueueReplaceState(i,i.state,null),il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e){try{var n="",r=e;do n+=XT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SI=typeof WeakMap=="function"?WeakMap:Map;function z_(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ul||(ul=!0,yf=r),af(t,e)},n}function $_(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=UI.bind(null,t,e,n),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Qn(n,e,1))),n.lanes|=1),t)}var RI=An.ReactCurrentOwner,ut=!1;function it(t,e,n,r){e.child=t===null?__(e,null,n,r):Pi(e,t.child,n,r)}function gm(t,e,n,r,i){n=n.render;var s=e.ref;return _i(e,i),r=Ah(t,e,n,r,s,i),n=Ph(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(he&&n&&ph(e),e.flags|=1,it(t,e,r,i),e.child)}function ym(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H_(t,e,s,r,i)):(t=Da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=Yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function H_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gs(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,In(t,e,i)}return lf(t,e,n,r,i)}function W_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(hi,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(hi,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(hi,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(hi,yt),yt|=r;return it(t,e,i,n),e.child}function q_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lf(t,e,n,r,i){var s=ft(n)?xr:et.current;return s=Ri(e,s),_i(e,i),n=Ah(t,e,n,r,s,i),r=Ph(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(he&&r&&ph(e),e.flags|=1,it(t,e,n,i),e.child)}function _m(t,e,n,r,i){if(ft(n)){var s=!0;Za(e)}else s=!1;if(_i(e,i),e.stateNode===null)Ca(t,e),j_(e,n,r),of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ct(f):(f=ft(n)?xr:et.current,f=Ri(e,f));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==f)&&hm(e,o,r,f),Mn=!1;var y=e.memoizedState;o.state=y,il(e,r,o,i),u=e.memoizedState,l!==r||y!==u||ct.current||Mn?(typeof d=="function"&&(sf(e,n,d,r),u=e.memoizedState),(l=Mn||fm(e,n,l,r,y,u,f))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=f,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,E_(t,e),l=e.memoizedProps,f=e.type===e.elementType?l:xt(e.type,l),o.props=f,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=ft(n)?xr:et.current,u=Ri(e,u));var P=n.getDerivedStateFromProps;(d=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&hm(e,o,r,u),Mn=!1,y=e.memoizedState,o.state=y,il(e,r,o,i);var R=e.memoizedState;l!==p||y!==R||ct.current||Mn?(typeof P=="function"&&(sf(e,n,P,r),R=e.memoizedState),(f=Mn||fm(e,n,f,r,y,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return uf(t,e,n,r,s,i)}function uf(t,e,n,r,i,s){q_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rm(e,n,!1),In(t,e,s);r=e.stateNode,RI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Pi(e,t.child,null,s),e.child=Pi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&rm(e,n,!0),e.child}function K_(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),Th(t,e.containerInfo)}function vm(t,e,n,r,i){return Ai(),gh(i),e.flags|=256,it(t,e,n,r),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function G_(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(me,i&1),t===null)return nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ff(n),e.memoizedState=cf,t):Nh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return AI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Yn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Yn(l,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,r}return s=t.child,t=s.sibling,r=Yn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nh(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fa(t,e,n,r){return r!==null&&gh(r),Pi(e,t.child,null,n),t=Nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uc(Error(b(422))),fa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kl({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Pi(e,t.child,null,o),e.child.memoizedState=ff(o),e.memoizedState=cf,s);if(!(e.mode&1))return fa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=uc(s,r,void 0),fa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ut||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tn(t,i),Bt(r,t,i,-1))}return Vh(),r=uc(Error(b(421))),fa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Gn(i.nextSibling),vt=e,he=!0,Mt=null,t!==null&&(Rt[At++]=fn,Rt[At++]=hn,Rt[At++]=Lr,fn=t.id,hn=t.overflow,Lr=e),e=Nh(e,r.children),e.flags|=4096,e)}function Em(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rf(t.return,e,n)}function cc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Q_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Em(t,n,e);else if(t.tag===19)Em(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cc(e,!0,n,null,s);break;case"together":cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PI(t,e,n){switch(e.tag){case 3:K_(e),Ai();break;case 5:w_(e);break;case 1:ft(e.type)&&Za(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?G_(t,e,n):(ae(me,me.current&1),t=In(t,e,n),t!==null?t.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Q_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,W_(t,e,n)}return In(t,e,n)}var J_,hf,X_,Y_;J_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};X_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(Jt.current);var s=null;switch(n){case"input":i=xc(t,i),r=xc(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Vc(t,i),r=Vc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xa)}Uc(n,r);var o;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var l=i[f];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(js.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var u=r[f];if(l=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==l&&(u!=null||l!=null))if(f==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(js.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&ce("scroll",t),s||l===u||(s=[])):(s=s||[]).push(f,u))}n&&(s=s||[]).push("style",n);var f=s;(e.updateQueue=f)&&(e.flags|=4)}};Y_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ms(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kI(t,e,n){var r=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return ft(e.type)&&Ya(),Ke(e),null;case 3:return r=e.stateNode,ki(),fe(ct),fe(et),Sh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Ef(Mt),Mt=null))),hf(t,e),Ke(e),null;case 5:Ih(e);var i=Rr(Zs.current);if(n=e.type,t!==null&&e.stateNode!=null)X_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ke(e),null}if(t=Rr(Jt.current),ua(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[Xs]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)ce(Is[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Cp(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Op(r,s),ce("invalid",r)}Uc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",""+l]):js.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":ea(r),Np(r,s,!0);break;case"textarea":ea(r),Dp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ay(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[Xs]=r,J_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fc(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)ce(Is[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":Cp(t,r),i=xc(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Op(t,r),i=Vc(t,r),ce("invalid",t);break;default:i=r}Uc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Cy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Py(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zs(t,u):typeof u=="number"&&zs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(js.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ce("scroll",t):u!=null&&eh(t,s,u,o))}switch(n){case"input":ea(t),Np(t,r,!1);break;case"textarea":ea(t),Dp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)Y_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Rr(Zs.current),Rr(Jt.current),ua(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:la(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return Ke(e),null;case 13:if(fe(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&_t!==null&&e.mode&1&&!(e.flags&128))g_(),Ai(),e.flags|=98560,s=!1;else if(s=ua(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Kt]=e}else Ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Mt!==null&&(Ef(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Ce===0&&(Ce=3):Vh())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return ki(),hf(t,e),t===null&&Qs(e.stateNode.containerInfo),Ke(e),null;case 10:return vh(e.type._context),Ke(e),null;case 17:return ft(e.type)&&Ya(),Ke(e),null;case 19:if(fe(me),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ms(s,!1);else{if(Ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sl(t),o!==null){for(e.flags|=128,ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Ni&&(e.flags|=128,r=!0,ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return Ke(e),null}else 2*Te()-s.renderingStartTime>Ni&&n!==1073741824&&(e.flags|=128,r=!0,ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Mh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function CI(t,e){switch(mh(e),e.tag){case 1:return ft(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(),fe(ct),fe(et),Sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ih(e),null;case 13:if(fe(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(me),null;case 4:return ki(),null;case 10:return vh(e.type._context),null;case 22:case 23:return Mh(),null;case 24:return null;default:return null}}var ha=!1,Je=!1,NI=typeof WeakSet=="function"?WeakSet:Set,$=null;function fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function df(t,e,n){try{n()}catch(r){ve(t,e,r)}}var wm=!1;function OI(t,e){if(Qc=Ga,t=r_(),dh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,f=0,d=0,p=t,y=null;t:for(;;){for(var P;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(P=p.firstChild)!==null;)y=p,p=P;for(;;){if(p===t)break t;if(y===n&&++f===i&&(l=o),y===s&&++d===r&&(u=o),(P=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=P}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jc={focusedElem:t,selectionRange:n},Ga=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,C=R.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:xt(e.type,k),C);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){ve(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=wm,wm=!1,R}function xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&df(e,n,s)}i=i.next}while(i!==r)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Z_(t){var e=t.alternate;e!==null&&(t.alternate=null,Z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[Xs],delete e[Zc],delete e[dI],delete e[pI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ev(t){return t.tag===5||t.tag===3||t.tag===4}function Tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(r!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}function gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var be=null,Lt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)tv(t,e,n),n=n.sibling}function tv(t,e,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Je||fi(n,e);case 6:var r=be,i=Lt;be=null,Dn(t,e,n),be=r,Lt=i,be!==null&&(Lt?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Lt?(t=be,n=n.stateNode,t.nodeType===8?rc(t.parentNode,n):t.nodeType===1&&rc(t,n),qs(t)):rc(be,n.stateNode));break;case 4:r=be,i=Lt,be=n.stateNode.containerInfo,Lt=!0,Dn(t,e,n),be=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&df(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!Je&&(fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ve(n,e,l)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Dn(t,e,n),Je=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function Im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NI),e.forEach(function(r){var i=BI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,Lt=!1;break e;case 3:be=l.stateNode.containerInfo,Lt=!0;break e;case 4:be=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(be===null)throw Error(b(160));tv(s,o,i),be=null,Lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){ve(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nv(e,t),e=e.sibling}function nv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Ht(t),r&4){try{xs(3,t,t.return),Wl(3,t)}catch(k){ve(t,t.return,k)}try{xs(5,t,t.return)}catch(k){ve(t,t.return,k)}}break;case 1:Dt(e,t),Ht(t),r&512&&n!==null&&fi(n,n.return);break;case 5:if(Dt(e,t),Ht(t),r&512&&n!==null&&fi(n,n.return),t.flags&32){var i=t.stateNode;try{zs(i,"")}catch(k){ve(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sy(i,s),Fc(l,o);var f=Fc(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Cy(i,p):d==="dangerouslySetInnerHTML"?Py(i,p):d==="children"?zs(i,p):eh(i,d,p,f)}switch(l){case"input":Lc(i,s);break;case"textarea":Ry(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var P=s.value;P!=null?pi(i,!!s.multiple,P,!1):y!==!!s.multiple&&(s.defaultValue!=null?pi(i,!!s.multiple,s.defaultValue,!0):pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xs]=s}catch(k){ve(t,t.return,k)}}break;case 6:if(Dt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){ve(t,t.return,k)}}break;case 3:if(Dt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(k){ve(t,t.return,k)}break;case 4:Dt(e,t),Ht(t);break;case 13:Dt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xh=Te())),r&4&&Im(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(f=Je)||d,Dt(e,t),Je=f):Dt(e,t),Ht(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(y=$,P=y.child,y.tag){case 0:case 11:case 14:case 15:xs(4,y,y.return);break;case 1:fi(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){ve(r,n,k)}}break;case 5:fi(y,y.return);break;case 22:if(y.memoizedState!==null){Rm(p);continue}}P!==null?(P.return=y,$=P):Rm(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ky("display",o))}catch(k){ve(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=f?"":p.memoizedProps}catch(k){ve(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dt(e,t),Ht(t),r&4&&Im(t);break;case 21:break;default:Dt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ev(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zs(i,""),r.flags&=-33);var s=Tm(t);gf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Tm(t);mf(t,l,o);break;default:throw Error(b(161))}}catch(u){ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DI(t,e,n){$=t,rv(t)}function rv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ha;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=ha;var f=Je;if(ha=o,(Je=u)&&!f)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Am(i):u!==null?(u.return=o,$=u):Am(i);for(;s!==null;)$=s,rv(s),s=s.sibling;$=i,ha=l,Je=f}Sm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Sm(t)}}function Sm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var d=f.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&qs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Je||e.flags&512&&pf(e)}catch(y){ve(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Rm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Am(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(u){ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ve(e,i,u)}}var s=e.return;try{pf(e)}catch(u){ve(e,s,u)}break;case 5:var o=e.return;try{pf(e)}catch(u){ve(e,o,u)}}}catch(u){ve(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var xI=Math.ceil,ll=An.ReactCurrentDispatcher,Oh=An.ReactCurrentOwner,kt=An.ReactCurrentBatchConfig,te=0,Le=null,Ae=null,je=0,yt=0,hi=cr(0),Ce=0,ro=null,Vr=0,ql=0,Dh=0,Ls=null,lt=null,xh=0,Ni=1/0,un=null,ul=!1,yf=null,Jn=null,da=!1,$n=null,cl=0,Ms=0,_f=null,Na=-1,Oa=0;function st(){return te&6?Te():Na!==-1?Na:Na=Te()}function Xn(t){return t.mode&1?te&2&&je!==0?je&-je:gI.transition!==null?(Oa===0&&(Oa=jy()),Oa):(t=re,t!==0||(t=window.event,t=t===void 0?16:Gy(t.type)),t):1}function Bt(t,e,n,r){if(50<Ms)throw Ms=0,_f=null,Error(b(185));yo(t,n,r),(!(te&2)||t!==Le)&&(t===Le&&(!(te&2)&&(ql|=n),Ce===4&&bn(t,je)),ht(t,r),n===1&&te===0&&!(e.mode&1)&&(Ni=Te()+500,zl&&fr()))}function ht(t,e){var n=t.callbackNode;g0(t,e);var r=Ka(t,t===Le?je:0);if(r===0)n!==null&&Mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mp(n),e===1)t.tag===0?mI(Pm.bind(null,t)):d_(Pm.bind(null,t)),fI(function(){!(te&6)&&fr()}),n=null;else{switch(zy(r)){case 1:n=sh;break;case 4:n=Fy;break;case 16:n=qa;break;case 536870912:n=By;break;default:n=qa}n=fv(n,iv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iv(t,e){if(Na=-1,Oa=0,te&6)throw Error(b(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=Ka(t,t===Le?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fl(t,r);else{e=r;var i=te;te|=2;var s=ov();(Le!==t||je!==e)&&(un=null,Ni=Te()+500,kr(t,e));do try{VI();break}catch(l){sv(t,l)}while(!0);_h(),ll.current=s,te=i,Ae!==null?e=0:(Le=null,je=0,e=Ce)}if(e!==0){if(e===2&&(i=Hc(t),i!==0&&(r=i,e=vf(t,i))),e===1)throw n=ro,kr(t,0),bn(t,r),ht(t,Te()),n;if(e===6)bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!LI(i)&&(e=fl(t,r),e===2&&(s=Hc(t),s!==0&&(r=s,e=vf(t,s))),e===1))throw n=ro,kr(t,0),bn(t,r),ht(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:wr(t,lt,un);break;case 3:if(bn(t,r),(r&130023424)===r&&(e=xh+500-Te(),10<e)){if(Ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yc(wr.bind(null,t,lt,un),e);break}wr(t,lt,un);break;case 4:if(bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xI(r/1960))-r,10<r){t.timeoutHandle=Yc(wr.bind(null,t,lt,un),r);break}wr(t,lt,un);break;case 5:wr(t,lt,un);break;default:throw Error(b(329))}}}return ht(t,Te()),t.callbackNode===n?iv.bind(null,t):null}function vf(t,e){var n=Ls;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=lt,lt=n,e!==null&&Ef(e)),t}function Ef(t){lt===null?lt=t:lt.push.apply(lt,t)}function LI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~Dh,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function Pm(t){if(te&6)throw Error(b(327));vi();var e=Ka(t,0);if(!(e&1))return ht(t,Te()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var r=Hc(t);r!==0&&(e=r,n=vf(t,r))}if(n===1)throw n=ro,kr(t,0),bn(t,e),ht(t,Te()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,lt,un),ht(t,Te()),null}function Lh(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(Ni=Te()+500,zl&&fr())}}function br(t){$n!==null&&$n.tag===0&&!(te&6)&&vi();var e=te;te|=1;var n=kt.transition,r=re;try{if(kt.transition=null,re=1,t)return t()}finally{re=r,kt.transition=n,te=e,!(te&6)&&fr()}}function Mh(){yt=hi.current,fe(hi)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cI(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:ki(),fe(ct),fe(et),Sh();break;case 5:Ih(r);break;case 4:ki();break;case 13:fe(me);break;case 19:fe(me);break;case 10:vh(r.type._context);break;case 22:case 23:Mh()}n=n.return}if(Le=t,Ae=t=Yn(t.current,null),je=yt=e,Ce=0,ro=null,Dh=ql=Vr=0,lt=Ls=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sr=null}return t}function sv(t,e){do{var n=Ae;try{if(_h(),Pa.current=al,ol){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(Mr=0,De=ke=ge=null,Ds=!1,eo=0,Oh.current=null,n===null||n.return===null){Ce=1,ro=e,Ae=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var P=pm(o);if(P!==null){P.flags&=-257,mm(P,o,l,s,e),P.mode&1&&dm(s,f,e),e=P,u=f;var R=e.updateQueue;if(R===null){var k=new Set;k.add(u),e.updateQueue=k}else R.add(u);break e}else{if(!(e&1)){dm(s,f,e),Vh();break e}u=Error(b(426))}}else if(he&&l.mode&1){var C=pm(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),mm(C,o,l,s,e),gh(Ci(u,l));break e}}s=u=Ci(u,l),Ce!==4&&(Ce=2),Ls===null?Ls=[s]:Ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=z_(s,u,e);am(s,w);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Jn===null||!Jn.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=$_(s,l,e);am(s,x);break e}}s=s.return}while(s!==null)}lv(n)}catch(M){e=M,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function ov(){var t=ll.current;return ll.current=al,t===null?al:t}function Vh(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Le===null||!(Vr&268435455)&&!(ql&268435455)||bn(Le,je)}function fl(t,e){var n=te;te|=2;var r=ov();(Le!==t||je!==e)&&(un=null,kr(t,e));do try{MI();break}catch(i){sv(t,i)}while(!0);if(_h(),te=n,ll.current=r,Ae!==null)throw Error(b(261));return Le=null,je=0,Ce}function MI(){for(;Ae!==null;)av(Ae)}function VI(){for(;Ae!==null&&!a0();)av(Ae)}function av(t){var e=cv(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?lv(t):Ae=e,Oh.current=null}function lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CI(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ce=6,Ae=null;return}}else if(n=kI(n,e,yt),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Ce===0&&(Ce=5)}function wr(t,e,n){var r=re,i=kt.transition;try{kt.transition=null,re=1,bI(t,e,n,r)}finally{kt.transition=i,re=r}return null}function bI(t,e,n,r){do vi();while($n!==null);if(te&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(y0(t,s),t===Le&&(Ae=Le=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,fv(qa,function(){return vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=re;re=1;var l=te;te|=4,Oh.current=null,OI(t,n),nv(n,t),rI(Jc),Ga=!!Qc,Jc=Qc=null,t.current=n,DI(n),l0(),te=l,re=o,kt.transition=s}else t.current=n;if(da&&(da=!1,$n=t,cl=i),s=t.pendingLanes,s===0&&(Jn=null),f0(n.stateNode),ht(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,t=yf,yf=null,t;return cl&1&&t.tag!==0&&vi(),s=t.pendingLanes,s&1?t===_f?Ms++:(Ms=0,_f=t):Ms=0,fr(),null}function vi(){if($n!==null){var t=zy(cl),e=kt.transition,n=re;try{if(kt.transition=null,re=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,cl=0,te&6)throw Error(b(331));var i=te;for(te|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var f=l[u];for($=f;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:xs(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var y=d.sibling,P=d.return;if(Z_(d),d===f){$=null;break}if(y!==null){y.return=P,$=y;break}$=P}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xs(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,$=T;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wl(9,l)}}catch(M){ve(l,l.return,M)}if(l===o){$=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,$=x;break e}$=l.return}}if(te=i,fr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(bl,t)}catch{}r=!0}return r}finally{re=n,kt.transition=e}}return!1}function km(t,e,n){e=Ci(n,e),e=z_(t,e,1),t=Qn(t,e,1),e=st(),t!==null&&(yo(t,1,e),ht(t,e))}function ve(t,e,n){if(t.tag===3)km(t,t,n);else for(;e!==null;){if(e.tag===3){km(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=Ci(n,t),t=$_(e,t,1),e=Qn(e,t,1),t=st(),e!==null&&(yo(e,1,t),ht(e,t));break}}e=e.return}}function UI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(je&n)===n&&(Ce===4||Ce===3&&(je&130023424)===je&&500>Te()-xh?kr(t,0):Dh|=n),ht(t,e)}function uv(t,e){e===0&&(t.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var n=st();t=Tn(t,e),t!==null&&(yo(t,e,n),ht(t,n))}function FI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uv(t,n)}function BI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),uv(t,n)}var cv;cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,PI(t,e,n);ut=!!(t.flags&131072)}else ut=!1,he&&e.flags&1048576&&p_(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ca(t,e),t=e.pendingProps;var i=Ri(e,et.current);_i(e,n),i=Ah(null,e,r,t,i,n);var s=Ph();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,Za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wh(e),i.updater=Hl,e.stateNode=i,i._reactInternals=e,of(e,r,t,n),e=uf(null,e,r,!0,s,n)):(e.tag=0,he&&s&&ph(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zI(r),t=xt(r,t),i){case 0:e=lf(null,e,r,t,n);break e;case 1:e=_m(null,e,r,t,n);break e;case 11:e=gm(null,e,r,t,n);break e;case 14:e=ym(null,e,r,xt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),lf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),_m(t,e,r,i,n);case 3:e:{if(K_(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,E_(t,e),il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ci(Error(b(423)),e),e=vm(t,e,r,n,i);break e}else if(r!==i){i=Ci(Error(b(424)),e),e=vm(t,e,r,n,i);break e}else for(_t=Gn(e.stateNode.containerInfo.firstChild),vt=e,he=!0,Mt=null,n=__(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ai(),r===i){e=In(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return w_(e),t===null&&nf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xc(r,i)?o=null:s!==null&&Xc(r,s)&&(e.flags|=32),q_(t,e),it(t,e,o,n),e.child;case 6:return t===null&&nf(e),null;case 13:return G_(t,e,n);case 4:return Th(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Pi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),gm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(nl,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!ct.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=gn(-1,n&-n),u.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var d=f.pending;d===null?u.next=u:(u.next=d.next,d.next=u),f.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_i(e,n),i=Ct(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=xt(r,e.pendingProps),i=xt(r.type,i),ym(t,e,r,i,n);case 15:return H_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xt(r,i),Ca(t,e),e.tag=1,ft(r)?(t=!0,Za(e)):t=!1,_i(e,n),j_(e,r,i),of(e,r,i,n),uf(null,e,r,!0,t,n);case 19:return Q_(t,e,n);case 22:return W_(t,e,n)}throw Error(b(156,e.tag))};function fv(t,e){return Uy(t,e)}function jI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new jI(t,e,n,r)}function bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zI(t){if(typeof t=="function")return bh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nh)return 11;if(t===rh)return 14}return 2}function Yn(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Da(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ni:return Cr(n.children,i,s,e);case th:o=8,i|=8;break;case Cc:return t=Pt(12,n,e,i|2),t.elementType=Cc,t.lanes=s,t;case Nc:return t=Pt(13,n,e,i),t.elementType=Nc,t.lanes=s,t;case Oc:return t=Pt(19,n,e,i),t.elementType=Oc,t.lanes=s,t;case wy:return Kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vy:o=10;break e;case Ey:o=9;break e;case nh:o=11;break e;case rh:o=14;break e;case Ln:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Kl(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=wy,t.lanes=n,t.stateNode={isHidden:!1},t}function fc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function hc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $I(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uh(t,e,n,r,i,s,o,l,u){return t=new $I(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(s),t}function HI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hv(t){if(!t)return sr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(ft(n))return h_(t,n,e)}return e}function dv(t,e,n,r,i,s,o,l,u){return t=Uh(n,r,!0,t,i,s,o,l,u),t.context=hv(null),n=t.current,r=st(),i=Xn(n),s=gn(r,i),s.callback=e??null,Qn(n,s,i),t.current.lanes=i,yo(t,i,r),ht(t,r),t}function Gl(t,e,n,r){var i=e.current,s=st(),o=Xn(i);return n=hv(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qn(i,e,o),t!==null&&(Bt(t,i,o,s),Aa(t,i,o)),o}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fh(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}var pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bh(t){this._internalRoot=t}Ql.prototype.render=Bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Gl(t,e,null,null)};Ql.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){Gl(null,t,null,null)}),e[wn]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&Ky(t)}};function jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function WI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=hl(o);s.call(f)}}var o=dv(e,r,t,0,null,!1,!1,"",Nm);return t._reactRootContainer=o,t[wn]=o.current,Qs(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var f=hl(u);l.call(f)}}var u=Uh(t,0,!1,null,null,!1,!1,"",Nm);return t._reactRootContainer=u,t[wn]=u.current,Qs(t.nodeType===8?t.parentNode:t),br(function(){Gl(e,u,n,r)}),u}function Xl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=hl(o);l.call(u)}}Gl(e,o,t,i)}else o=WI(n,e,t,i,r);return hl(o)}$y=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(oh(e,n|1),ht(e,Te()),!(te&6)&&(Ni=Te()+500,fr()))}break;case 13:br(function(){var r=Tn(t,1);if(r!==null){var i=st();Bt(r,t,1,i)}}),Fh(t,1)}};ah=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=st();Bt(e,t,134217728,n)}Fh(t,134217728)}};Hy=function(t){if(t.tag===13){var e=Xn(t),n=Tn(t,e);if(n!==null){var r=st();Bt(n,t,e,r)}Fh(t,e)}};Wy=function(){return re};qy=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};jc=function(t,e,n){switch(e){case"input":if(Lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=jl(r);if(!i)throw Error(b(90));Iy(r),Lc(r,i)}}}break;case"textarea":Ry(t,n);break;case"select":e=n.value,e!=null&&pi(t,!!n.multiple,e,!1)}};Dy=Lh;xy=br;var qI={usingClientEntryPoint:!1,Events:[vo,oi,jl,Ny,Oy,Lh]},gs={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KI={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vy(t),t===null?null:t.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{bl=pa.inject(KI),Qt=pa}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qI;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(e))throw Error(b(200));return HI(t,e,null,n)};Tt.createRoot=function(t,e){if(!jh(t))throw Error(b(299));var n=!1,r="",i=pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Uh(t,1,!1,null,null,n,!1,r,i),t[wn]=e.current,Qs(t.nodeType===8?t.parentNode:t),new Bh(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Vy(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return br(t)};Tt.hydrate=function(t,e,n){if(!Jl(e))throw Error(b(200));return Xl(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!jh(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=pv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dv(e,null,t,1,n??null,i,!1,s,o),t[wn]=e.current,Qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ql(e)};Tt.render=function(t,e,n){if(!Jl(e))throw Error(b(200));return Xl(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(b(40));return t._reactRootContainer?(br(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1};Tt.unstable_batchedUpdates=Lh;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Xl(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mv)}catch(t){console.error(t)}}mv(),my.exports=Tt;var GI=my.exports,QI,Om=GI;QI=Om.createRoot,Om.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},io.apply(this,arguments)}var Hn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hn||(Hn={}));const Dm="popstate";function JI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return wf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:dl(i)}return YI(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XI(){return Math.random().toString(36).substr(2,8)}function xm(t,e){return{usr:t.state,key:t.key,idx:e}}function wf(t,e,n,r){return n===void 0&&(n=null),io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ji(e):e,{state:n,key:e&&e.key||r||XI()})}function dl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ji(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function YI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Hn.Pop,u=null,f=d();f==null&&(f=0,o.replaceState(io({},o.state,{idx:f}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Hn.Pop;let C=d(),w=C==null?null:C-f;f=C,u&&u({action:l,location:k.location,delta:w})}function y(C,w){l=Hn.Push;let _=wf(k.location,C,w);f=d()+1;let T=xm(_,f),x=k.createHref(_);try{o.pushState(T,"",x)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(x)}s&&u&&u({action:l,location:k.location,delta:1})}function P(C,w){l=Hn.Replace;let _=wf(k.location,C,w);f=d();let T=xm(_,f),x=k.createHref(_);o.replaceState(T,"",x),s&&u&&u({action:l,location:k.location,delta:0})}function R(C){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:dl(C);return _=_.replace(/ $/,"%20"),Ie(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let k={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Dm,p),u=C,()=>{i.removeEventListener(Dm,p),u=null}},createHref(C){return e(i,C)},createURL:R,encodeLocation(C){let w=R(C);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:y,replace:P,go(C){return o.go(C)}};return k}var Lm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Lm||(Lm={}));function ZI(t,e,n){return n===void 0&&(n="/"),eS(t,e,n)}function eS(t,e,n,r){let i=typeof e=="string"?ji(e):e,s=zh(i.pathname||"/",n);if(s==null)return null;let o=yv(t);tS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let f=dS(s);l=cS(o[u],f)}return l}function yv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let f=Zn([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),yv(s.children,e,d,f)),!(s.path==null&&!s.index)&&e.push({path:f,score:lS(f,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of _v(s.path))i(s,o,u)}),e}function _v(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_v(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function tS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:uS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nS=/^:[\w-]+$/,rS=3,iS=2,sS=1,oS=10,aS=-2,Mm=t=>t==="*";function lS(t,e){let n=t.split("/"),r=n.length;return n.some(Mm)&&(r+=aS),e&&(r+=iS),n.filter(i=>!Mm(i)).reduce((i,s)=>i+(nS.test(s)?rS:s===""?sS:oS),r)}function uS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function cS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],f=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=fS({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},d),y=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Zn([s,p.pathname]),pathnameBase:yS(Zn([s,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(s=Zn([s,p.pathnameBase]))}return o}function fS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((f,d,p)=>{let{paramName:y,isOptional:P}=d;if(y==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const R=l[p];return P&&!R?f[y]=void 0:f[y]=(R||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:o,pattern:t}}function hS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ji(t):t;return{pathname:n?n.startsWith("/")?n:mS(n,e):e,search:_S(r),hash:vS(i)}}function mS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $h(t,e){let n=gS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ji(t):(i=io({},t),Ie(!i.pathname||!i.pathname.includes("?"),dc("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),dc("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),dc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),p-=1;i.pathname=y.join("/")}l=p>=0?e[p]:"/"}let u=pS(i,l),f=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(f||d)&&(u.pathname+="/"),u}const Zn=t=>t.join("/").replace(/\/\/+/g,"/"),yS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_S=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ES(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vv=["post","put","patch","delete"];new Set(vv);const wS=["get",...vv];new Set(wS);/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},so.apply(this,arguments)}const Wh=z.createContext(null),TS=z.createContext(null),hr=z.createContext(null),Yl=z.createContext(null),dr=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Ev=z.createContext(null);function IS(t,e){let{relative:n}=e===void 0?{}:e;zi()||Ie(!1);let{basename:r,navigator:i}=z.useContext(hr),{hash:s,pathname:o,search:l}=Iv(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Zn([r,o])),i.createHref({pathname:u,search:l,hash:s})}function zi(){return z.useContext(Yl)!=null}function wo(){return zi()||Ie(!1),z.useContext(Yl).location}function wv(t){z.useContext(hr).static||z.useLayoutEffect(t)}function Tv(){let{isDataRoute:t}=z.useContext(dr);return t?VS():SS()}function SS(){zi()||Ie(!1);let t=z.useContext(Wh),{basename:e,future:n,navigator:r}=z.useContext(hr),{matches:i}=z.useContext(dr),{pathname:s}=wo(),o=JSON.stringify($h(i,n.v7_relativeSplatPath)),l=z.useRef(!1);return wv(()=>{l.current=!0}),z.useCallback(function(f,d){if(d===void 0&&(d={}),!l.current)return;if(typeof f=="number"){r.go(f);return}let p=Hh(f,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Zn([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function Iv(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(hr),{matches:i}=z.useContext(dr),{pathname:s}=wo(),o=JSON.stringify($h(i,r.v7_relativeSplatPath));return z.useMemo(()=>Hh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function RS(t,e){return AS(t,e)}function AS(t,e,n,r){zi()||Ie(!1);let{navigator:i}=z.useContext(hr),{matches:s}=z.useContext(dr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let f=wo(),d;if(e){var p;let C=typeof e=="string"?ji(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||Ie(!1),d=C}else d=f;let y=d.pathname||"/",P=y;if(u!=="/"){let C=u.replace(/^\//,"").split("/");P="/"+y.replace(/^\//,"").split("/").slice(C.length).join("/")}let R=ZI(t,{pathname:P}),k=OS(R&&R.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Zn([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Zn([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&k?z.createElement(Yl.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Hn.Pop}},k):k}function PS(){let t=MS(),e=ES(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const kS=z.createElement(PS,null);class CS extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(dr.Provider,{value:this.props.routeContext},z.createElement(Ev.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NS(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(Wh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(dr.Provider,{value:e},r)}function OS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ie(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=d),p.route.id){let{loaderData:y,errors:P}=n,R=p.route.loader&&y[p.route.id]===void 0&&(!P||P[p.route.id]===void 0);if(p.route.lazy||R){u=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((d,p,y)=>{let P,R=!1,k=null,C=null;n&&(P=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||kS,u&&(f<0&&y===0?(R=!0,C=null):f===y&&(R=!0,C=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,y+1)),_=()=>{let T;return P?T=k:R?T=C:p.route.Component?T=z.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=d,z.createElement(NS,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?z.createElement(CS,{location:n.location,revalidation:n.revalidation,component:k,error:P,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var Sv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Sv||{}),pl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pl||{});function DS(t){let e=z.useContext(Wh);return e||Ie(!1),e}function xS(t){let e=z.useContext(TS);return e||Ie(!1),e}function LS(t){let e=z.useContext(dr);return e||Ie(!1),e}function Rv(t){let e=LS(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function MS(){var t;let e=z.useContext(Ev),n=xS(pl.UseRouteError),r=Rv(pl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function VS(){let{router:t}=DS(Sv.UseNavigateStable),e=Rv(pl.UseNavigateStable),n=z.useRef(!1);return wv(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,so({fromRouteId:e},s)))},[t,e])}const Vm={};function bS(t,e){Vm[e]||(Vm[e]=!0,console.warn(e))}const bm=(t,e,n)=>bS(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function US(t,e){(t==null?void 0:t.v7_startTransition)===void 0&&bm("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(t==null?void 0:t.v7_relativeSplatPath)===void 0&&bm("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function qN(t){let{to:e,replace:n,state:r,relative:i}=t;zi()||Ie(!1);let{future:s,static:o}=z.useContext(hr),{matches:l}=z.useContext(dr),{pathname:u}=wo(),f=Tv(),d=Hh(e,$h(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return z.useEffect(()=>f(JSON.parse(p),{replace:n,state:r,relative:i}),[f,p,i,n,r]),null}function FS(t){Ie(!1)}function BS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Hn.Pop,navigator:s,static:o=!1,future:l}=t;zi()&&Ie(!1);let u=e.replace(/^\/*/,"/"),f=z.useMemo(()=>({basename:u,navigator:s,static:o,future:so({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ji(r));let{pathname:d="/",search:p="",hash:y="",state:P=null,key:R="default"}=r,k=z.useMemo(()=>{let C=zh(d,u);return C==null?null:{location:{pathname:C,search:p,hash:y,state:P,key:R},navigationType:i}},[u,d,p,y,P,R,i]);return k==null?null:z.createElement(hr.Provider,{value:f},z.createElement(Yl.Provider,{children:n,value:k}))}function KN(t){let{children:e,location:n}=t;return RS(Tf(e),n)}new Promise(()=>{});function Tf(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(r,i)=>{if(!z.isValidElement(r))return;let s=[...e,i];if(r.type===z.Fragment){n.push.apply(n,Tf(r.props.children,s));return}r.type!==FS&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Tf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function If(){return If=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},If.apply(this,arguments)}function jS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $S(t,e){return t.button===0&&(!e||e==="_self")&&!zS(t)}const HS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],WS="6";try{window.__reactRouterVersion=WS}catch{}const qS="startTransition",Um=UT[qS];function GN(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=JI({window:i,v5Compat:!0}));let o=s.current,[l,u]=z.useState({action:o.action,location:o.location}),{v7_startTransition:f}=r||{},d=z.useCallback(p=>{f&&Um?Um(()=>u(p)):u(p)},[u,f]);return z.useLayoutEffect(()=>o.listen(d),[o,d]),z.useEffect(()=>US(r),[r]),z.createElement(BS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const KS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,QN=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:f,preventScrollReset:d,viewTransition:p}=e,y=jS(e,HS),{basename:P}=z.useContext(hr),R,k=!1;if(typeof f=="string"&&GS.test(f)&&(R=f,KS))try{let T=new URL(window.location.href),x=f.startsWith("//")?new URL(T.protocol+f):new URL(f),M=zh(x.pathname,P);x.origin===T.origin&&M!=null?f=M+x.search+x.hash:k=!0}catch{}let C=IS(f,{relative:i}),w=QS(f,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function _(T){r&&r(T),T.defaultPrevented||w(T)}return z.createElement("a",If({},y,{href:R||C,onClick:k||s?r:_,ref:n,target:u}))});var Fm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fm||(Fm={}));var Bm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Bm||(Bm={}));function QS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Tv(),f=wo(),d=Iv(t,{relative:o});return z.useCallback(p=>{if($S(p,n)){p.preventDefault();let y=r!==void 0?r:dl(f)===dl(d);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[f,u,d,r,i,n,t,s,o,l])}function Av(t,e){return function(){return t.apply(e,arguments)}}const{toString:JS}=Object.prototype,{getPrototypeOf:qh}=Object,Zl=(t=>e=>{const n=JS.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$t=t=>(t=t.toLowerCase(),e=>Zl(e)===t),eu=t=>e=>typeof e===t,{isArray:$i}=Array,oo=eu("undefined");function XS(t){return t!==null&&!oo(t)&&t.constructor!==null&&!oo(t.constructor)&&Et(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Pv=$t("ArrayBuffer");function YS(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Pv(t.buffer),e}const ZS=eu("string"),Et=eu("function"),kv=eu("number"),tu=t=>t!==null&&typeof t=="object",e1=t=>t===!0||t===!1,xa=t=>{if(Zl(t)!=="object")return!1;const e=qh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},t1=$t("Date"),n1=$t("File"),r1=$t("Blob"),i1=$t("FileList"),s1=t=>tu(t)&&Et(t.pipe),o1=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Et(t.append)&&((e=Zl(t))==="formdata"||e==="object"&&Et(t.toString)&&t.toString()==="[object FormData]"))},a1=$t("URLSearchParams"),[l1,u1,c1,f1]=["ReadableStream","Request","Response","Headers"].map($t),h1=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function To(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),$i(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function Cv(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Nv=t=>!oo(t)&&t!==Ar;function Sf(){const{caseless:t}=Nv(this)&&this||{},e={},n=(r,i)=>{const s=t&&Cv(e,i)||i;xa(e[s])&&xa(r)?e[s]=Sf(e[s],r):xa(r)?e[s]=Sf({},r):$i(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&To(arguments[r],n);return e}const d1=(t,e,n,{allOwnKeys:r}={})=>(To(e,(i,s)=>{n&&Et(i)?t[s]=Av(i,n):t[s]=i},{allOwnKeys:r}),t),p1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),m1=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},g1=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&qh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},y1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},_1=t=>{if(!t)return null;if($i(t))return t;let e=t.length;if(!kv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},v1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&qh(Uint8Array)),E1=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},w1=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},T1=$t("HTMLFormElement"),I1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),jm=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),S1=$t("RegExp"),Ov=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};To(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},R1=t=>{Ov(t,(e,n)=>{if(Et(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Et(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},A1=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return $i(t)?r(t):r(String(t).split(e)),n},P1=()=>{},k1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,pc="abcdefghijklmnopqrstuvwxyz",zm="0123456789",Dv={DIGIT:zm,ALPHA:pc,ALPHA_DIGIT:pc+pc.toUpperCase()+zm},C1=(t=16,e=Dv.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function N1(t){return!!(t&&Et(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const O1=t=>{const e=new Array(10),n=(r,i)=>{if(tu(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=$i(r)?[]:{};return To(r,(o,l)=>{const u=n(o,i+1);!oo(u)&&(s[l]=u)}),e[i]=void 0,s}}return r};return n(t,0)},D1=$t("AsyncFunction"),x1=t=>t&&(tu(t)||Et(t))&&Et(t.then)&&Et(t.catch),xv=((t,e)=>t?setImmediate:e?((n,r)=>(Ar.addEventListener("message",({source:i,data:s})=>{i===Ar&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Ar.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Et(Ar.postMessage)),L1=typeof queueMicrotask<"u"?queueMicrotask.bind(Ar):typeof process<"u"&&process.nextTick||xv,L={isArray:$i,isArrayBuffer:Pv,isBuffer:XS,isFormData:o1,isArrayBufferView:YS,isString:ZS,isNumber:kv,isBoolean:e1,isObject:tu,isPlainObject:xa,isReadableStream:l1,isRequest:u1,isResponse:c1,isHeaders:f1,isUndefined:oo,isDate:t1,isFile:n1,isBlob:r1,isRegExp:S1,isFunction:Et,isStream:s1,isURLSearchParams:a1,isTypedArray:v1,isFileList:i1,forEach:To,merge:Sf,extend:d1,trim:h1,stripBOM:p1,inherits:m1,toFlatObject:g1,kindOf:Zl,kindOfTest:$t,endsWith:y1,toArray:_1,forEachEntry:E1,matchAll:w1,isHTMLForm:T1,hasOwnProperty:jm,hasOwnProp:jm,reduceDescriptors:Ov,freezeMethods:R1,toObjectSet:A1,toCamelCase:I1,noop:P1,toFiniteNumber:k1,findKey:Cv,global:Ar,isContextDefined:Nv,ALPHABET:Dv,generateString:C1,isSpecCompliantForm:N1,toJSONObject:O1,isAsyncFn:D1,isThenable:x1,setImmediate:xv,asap:L1};function G(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const Lv=G.prototype,Mv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Mv[t]={value:t}});Object.defineProperties(G,Mv);Object.defineProperty(Lv,"isAxiosError",{value:!0});G.from=(t,e,n,r,i,s)=>{const o=Object.create(Lv);return L.toFlatObject(t,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),G.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const M1=null;function Rf(t){return L.isPlainObject(t)||L.isArray(t)}function Vv(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function $m(t,e,n){return t?t.concat(e).map(function(i,s){return i=Vv(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function V1(t){return L.isArray(t)&&!t.some(Rf)}const b1=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function nu(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,C){return!L.isUndefined(C[k])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function f(R){if(R===null)return"";if(L.isDate(R))return R.toISOString();if(!u&&L.isBlob(R))throw new G("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(R)||L.isTypedArray(R)?u&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function d(R,k,C){let w=R;if(R&&!C&&typeof R=="object"){if(L.endsWith(k,"{}"))k=r?k:k.slice(0,-2),R=JSON.stringify(R);else if(L.isArray(R)&&V1(R)||(L.isFileList(R)||L.endsWith(k,"[]"))&&(w=L.toArray(R)))return k=Vv(k),w.forEach(function(T,x){!(L.isUndefined(T)||T===null)&&e.append(o===!0?$m([k],x,s):o===null?k:k+"[]",f(T))}),!1}return Rf(R)?!0:(e.append($m(C,k,s),f(R)),!1)}const p=[],y=Object.assign(b1,{defaultVisitor:d,convertValue:f,isVisitable:Rf});function P(R,k){if(!L.isUndefined(R)){if(p.indexOf(R)!==-1)throw Error("Circular reference detected in "+k.join("."));p.push(R),L.forEach(R,function(w,_){(!(L.isUndefined(w)||w===null)&&i.call(e,w,L.isString(_)?_.trim():_,k,y))===!0&&P(w,k?k.concat(_):[_])}),p.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return P(t),e}function Hm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Kh(t,e){this._pairs=[],t&&nu(t,this,e)}const bv=Kh.prototype;bv.append=function(e,n){this._pairs.push([e,n])};bv.toString=function(e){const n=e?function(r){return e.call(this,r,Hm)}:Hm;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function U1(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Uv(t,e,n){if(!e)return t;const r=n&&n.encode||U1;L.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(e,n):s=L.isURLSearchParams(e)?e.toString():new Kh(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Wm{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Fv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},F1=typeof URLSearchParams<"u"?URLSearchParams:Kh,B1=typeof FormData<"u"?FormData:null,j1=typeof Blob<"u"?Blob:null,z1={isBrowser:!0,classes:{URLSearchParams:F1,FormData:B1,Blob:j1},protocols:["http","https","file","blob","url","data"]},Gh=typeof window<"u"&&typeof document<"u",Af=typeof navigator=="object"&&navigator||void 0,$1=Gh&&(!Af||["ReactNative","NativeScript","NS"].indexOf(Af.product)<0),H1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",W1=Gh&&window.location.href||"http://localhost",q1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Gh,hasStandardBrowserEnv:$1,hasStandardBrowserWebWorkerEnv:H1,navigator:Af,origin:W1},Symbol.toStringTag,{value:"Module"})),Ye={...q1,...z1};function K1(t,e){return nu(t,new Ye.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Ye.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function G1(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Q1(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Bv(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),u=s>=n.length;return o=!o&&L.isArray(i)?i.length:o,u?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&L.isArray(i[o])&&(i[o]=Q1(i[o])),!l)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(G1(r),i,n,0)}),n}return null}function J1(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const Io={transitional:Fv,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i?JSON.stringify(Bv(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return K1(e,this.formSerializer).toString();if((l=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return nu(l?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),J1(e)):e}],transformResponse:[function(e){const n=this.transitional||Io.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?G.from(l,G.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ye.classes.FormData,Blob:Ye.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{Io.headers[t]={}});const X1=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Y1=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&X1[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},qm=Symbol("internals");function ys(t){return t&&String(t).trim().toLowerCase()}function La(t){return t===!1||t==null?t:L.isArray(t)?t.map(La):String(t)}function Z1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const eR=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function mc(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function tR(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function nR(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class dt{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,u,f){const d=ys(u);if(!d)throw new Error("header name must be a non-empty string");const p=L.findKey(i,d);(!p||i[p]===void 0||f===!0||f===void 0&&i[p]!==!1)&&(i[p||u]=La(l))}const o=(l,u)=>L.forEach(l,(f,d)=>s(f,d,u));if(L.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(L.isString(e)&&(e=e.trim())&&!eR(e))o(Y1(e),n);else if(L.isHeaders(e))for(const[l,u]of e.entries())s(u,l,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=ys(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Z1(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ys(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||mc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=ys(o),o){const l=L.findKey(r,o);l&&(!n||mc(r,r[l],l,n))&&(delete r[l],i=!0)}}return L.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||mc(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,s)=>{const o=L.findKey(r,s);if(o){n[o]=La(i),delete n[s];return}const l=e?tR(s):String(s).trim();l!==s&&delete n[s],n[l]=La(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[qm]=this[qm]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=ys(o);r[l]||(nR(i,o),r[l]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}}dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(dt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(dt);function gc(t,e){const n=this||Io,r=e||n,i=dt.from(r.headers);let s=r.data;return L.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function jv(t){return!!(t&&t.__CANCEL__)}function Hi(t,e,n){G.call(this,t??"canceled",G.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(Hi,G,{__CANCEL__:!0});function zv(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function rR(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function iR(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const f=Date.now(),d=r[s];o||(o=f),n[i]=u,r[i]=f;let p=s,y=0;for(;p!==i;)y+=n[p++],p=p%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),f-o<e)return;const P=d&&f-d;return P?Math.round(y*1e3/P):void 0}}function sR(t,e){let n=0,r=1e3/e,i,s;const o=(f,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t.apply(null,f)};return[(...f)=>{const d=Date.now(),p=d-n;p>=r?o(f,d):(i=f,s||(s=setTimeout(()=>{s=null,o(i)},r-p)))},()=>i&&o(i)]}const ml=(t,e,n=3)=>{let r=0;const i=iR(50,250);return sR(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,u=o-r,f=i(u),d=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:u,rate:f||void 0,estimated:f&&l&&d?(l-o)/f:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(p)},n)},Km=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Gm=t=>(...e)=>L.asap(()=>t(...e)),oR=Ye.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Ye.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Ye.origin),Ye.navigator&&/(msie|trident)/i.test(Ye.navigator.userAgent)):()=>!0,aR=Ye.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function lR(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function uR(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function $v(t,e){return t&&!lR(e)?uR(t,e):e}const Qm=t=>t instanceof dt?{...t}:t;function Ur(t,e){e=e||{};const n={};function r(f,d,p,y){return L.isPlainObject(f)&&L.isPlainObject(d)?L.merge.call({caseless:y},f,d):L.isPlainObject(d)?L.merge({},d):L.isArray(d)?d.slice():d}function i(f,d,p,y){if(L.isUndefined(d)){if(!L.isUndefined(f))return r(void 0,f,p,y)}else return r(f,d,p,y)}function s(f,d){if(!L.isUndefined(d))return r(void 0,d)}function o(f,d){if(L.isUndefined(d)){if(!L.isUndefined(f))return r(void 0,f)}else return r(void 0,d)}function l(f,d,p){if(p in e)return r(f,d);if(p in t)return r(void 0,f)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(f,d,p)=>i(Qm(f),Qm(d),p,!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=u[d]||i,y=p(t[d],e[d],d);L.isUndefined(y)&&p!==l||(n[d]=y)}),n}const Hv=t=>{const e=Ur({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=e;e.headers=o=dt.from(o),e.url=Uv($v(e.baseURL,e.url),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if(L.isFormData(n)){if(Ye.hasStandardBrowserEnv||Ye.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[f,...d]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([f||"multipart/form-data",...d].join("; "))}}if(Ye.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(e)),r||r!==!1&&oR(e.url))){const f=i&&s&&aR.read(s);f&&o.set(i,f)}return e},cR=typeof XMLHttpRequest<"u",fR=cR&&function(t){return new Promise(function(n,r){const i=Hv(t);let s=i.data;const o=dt.from(i.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:f}=i,d,p,y,P,R;function k(){P&&P(),R&&R(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let C=new XMLHttpRequest;C.open(i.method.toUpperCase(),i.url,!0),C.timeout=i.timeout;function w(){if(!C)return;const T=dt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),M={data:!l||l==="text"||l==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:T,config:t,request:C};zv(function(E){n(E),k()},function(E){r(E),k()},M),C=null}"onloadend"in C?C.onloadend=w:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(w)},C.onabort=function(){C&&(r(new G("Request aborted",G.ECONNABORTED,t,C)),C=null)},C.onerror=function(){r(new G("Network Error",G.ERR_NETWORK,t,C)),C=null},C.ontimeout=function(){let x=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const M=i.transitional||Fv;i.timeoutErrorMessage&&(x=i.timeoutErrorMessage),r(new G(x,M.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,C)),C=null},s===void 0&&o.setContentType(null),"setRequestHeader"in C&&L.forEach(o.toJSON(),function(x,M){C.setRequestHeader(M,x)}),L.isUndefined(i.withCredentials)||(C.withCredentials=!!i.withCredentials),l&&l!=="json"&&(C.responseType=i.responseType),f&&([y,R]=ml(f,!0),C.addEventListener("progress",y)),u&&C.upload&&([p,P]=ml(u),C.upload.addEventListener("progress",p),C.upload.addEventListener("loadend",P)),(i.cancelToken||i.signal)&&(d=T=>{C&&(r(!T||T.type?new Hi(null,t,C):T),C.abort(),C=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const _=rR(i.url);if(_&&Ye.protocols.indexOf(_)===-1){r(new G("Unsupported protocol "+_+":",G.ERR_BAD_REQUEST,t));return}C.send(s||null)})},hR=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(f){if(!i){i=!0,l();const d=f instanceof Error?f:this.reason;r.abort(d instanceof G?d:new Hi(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new G(`timeout ${e} of ms exceeded`,G.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(f=>{f.unsubscribe?f.unsubscribe(s):f.removeEventListener("abort",s)}),t=null)};t.forEach(f=>f.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>L.asap(l),u}},dR=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},pR=async function*(t,e){for await(const n of mR(t))yield*dR(n,e)},mR=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Jm=(t,e,n,r)=>{const i=pR(t,e);let s=0,o,l=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:f,value:d}=await i.next();if(f){l(),u.close();return}let p=d.byteLength;if(n){let y=s+=p;n(y)}u.enqueue(new Uint8Array(d))}catch(f){throw l(f),f}},cancel(u){return l(u),i.return()}},{highWaterMark:2})},ru=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Wv=ru&&typeof ReadableStream=="function",gR=ru&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),qv=(t,...e)=>{try{return!!t(...e)}catch{return!1}},yR=Wv&&qv(()=>{let t=!1;const e=new Request(Ye.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Xm=64*1024,Pf=Wv&&qv(()=>L.isReadableStream(new Response("").body)),gl={stream:Pf&&(t=>t.body)};ru&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!gl[e]&&(gl[e]=L.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new G(`Response type '${e}' is not supported`,G.ERR_NOT_SUPPORT,r)})})})(new Response);const _R=async t=>{if(t==null)return 0;if(L.isBlob(t))return t.size;if(L.isSpecCompliantForm(t))return(await new Request(Ye.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(L.isArrayBufferView(t)||L.isArrayBuffer(t))return t.byteLength;if(L.isURLSearchParams(t)&&(t=t+""),L.isString(t))return(await gR(t)).byteLength},vR=async(t,e)=>{const n=L.toFiniteNumber(t.getContentLength());return n??_R(e)},ER=ru&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:l,onUploadProgress:u,responseType:f,headers:d,withCredentials:p="same-origin",fetchOptions:y}=Hv(t);f=f?(f+"").toLowerCase():"text";let P=hR([i,s&&s.toAbortSignal()],o),R;const k=P&&P.unsubscribe&&(()=>{P.unsubscribe()});let C;try{if(u&&yR&&n!=="get"&&n!=="head"&&(C=await vR(d,r))!==0){let M=new Request(e,{method:"POST",body:r,duplex:"half"}),F;if(L.isFormData(r)&&(F=M.headers.get("content-type"))&&d.setContentType(F),M.body){const[E,g]=Km(C,ml(Gm(u)));r=Jm(M.body,Xm,E,g)}}L.isString(p)||(p=p?"include":"omit");const w="credentials"in Request.prototype;R=new Request(e,{...y,signal:P,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:w?p:void 0});let _=await fetch(R);const T=Pf&&(f==="stream"||f==="response");if(Pf&&(l||T&&k)){const M={};["status","statusText","headers"].forEach(v=>{M[v]=_[v]});const F=L.toFiniteNumber(_.headers.get("content-length")),[E,g]=l&&Km(F,ml(Gm(l),!0))||[];_=new Response(Jm(_.body,Xm,E,()=>{g&&g(),k&&k()}),M)}f=f||"text";let x=await gl[L.findKey(gl,f)||"text"](_,t);return!T&&k&&k(),await new Promise((M,F)=>{zv(M,F,{data:x,headers:dt.from(_.headers),status:_.status,statusText:_.statusText,config:t,request:R})})}catch(w){throw k&&k(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,t,R),{cause:w.cause||w}):G.from(w,w&&w.code,t,R)}}),kf={http:M1,xhr:fR,fetch:ER};L.forEach(kf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ym=t=>`- ${t}`,wR=t=>L.isFunction(t)||t===null||t===!1,Kv={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!wR(n)&&(r=kf[(o=String(n)).toLowerCase()],r===void 0))throw new G(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Ym).join(`
`):" "+Ym(s[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:kf};function yc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Hi(null,t)}function Zm(t){return yc(t),t.headers=dt.from(t.headers),t.data=gc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Kv.getAdapter(t.adapter||Io.adapter)(t).then(function(r){return yc(t),r.data=gc.call(t,t.transformResponse,r),r.headers=dt.from(r.headers),r},function(r){return jv(r)||(yc(t),r&&r.response&&(r.response.data=gc.call(t,t.transformResponse,r.response),r.response.headers=dt.from(r.response.headers))),Promise.reject(r)})}const Gv="1.7.9",iu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{iu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const eg={};iu.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Gv+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new G(i(o," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!eg[o]&&(eg[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};iu.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function TR(t,e,n){if(typeof t!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],u=l===void 0||o(l,s,t);if(u!==!0)throw new G("option "+s+" must be "+u,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+s,G.ERR_BAD_OPTION)}}const Ma={assertOptions:TR,validators:iu},Wt=Ma.validators;class Nr{constructor(e){this.defaults=e,this.interceptors={request:new Wm,response:new Wm}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ur(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Ma.assertOptions(r,{silentJSONParsing:Wt.transitional(Wt.boolean),forcedJSONParsing:Wt.transitional(Wt.boolean),clarifyTimeoutError:Wt.transitional(Wt.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:Ma.assertOptions(i,{encode:Wt.function,serialize:Wt.function},!0)),Ma.assertOptions(n,{baseUrl:Wt.spelling("baseURL"),withXsrfToken:Wt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","common"],R=>{delete s[R]}),n.headers=dt.concat(o,s);const l=[];let u=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(n)===!1||(u=u&&k.synchronous,l.unshift(k.fulfilled,k.rejected))});const f=[];this.interceptors.response.forEach(function(k){f.push(k.fulfilled,k.rejected)});let d,p=0,y;if(!u){const R=[Zm.bind(this),void 0];for(R.unshift.apply(R,l),R.push.apply(R,f),y=R.length,d=Promise.resolve(n);p<y;)d=d.then(R[p++],R[p++]);return d}y=l.length;let P=n;for(p=0;p<y;){const R=l[p++],k=l[p++];try{P=R(P)}catch(C){k.call(this,C);break}}try{d=Zm.call(this,P)}catch(R){return Promise.reject(R)}for(p=0,y=f.length;p<y;)d=d.then(f[p++],f[p++]);return d}getUri(e){e=Ur(this.defaults,e);const n=$v(e.baseURL,e.url);return Uv(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){Nr.prototype[e]=function(n,r){return this.request(Ur(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(Ur(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Nr.prototype[e]=n(),Nr.prototype[e+"Form"]=n(!0)});class Qh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Hi(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Qh(function(i){e=i}),cancel:e}}}function IR(t){return function(n){return t.apply(null,n)}}function SR(t){return L.isObject(t)&&t.isAxiosError===!0}const Cf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cf).forEach(([t,e])=>{Cf[e]=t});function Qv(t){const e=new Nr(t),n=Av(Nr.prototype.request,e);return L.extend(n,Nr.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Qv(Ur(t,i))},n}const Ne=Qv(Io);Ne.Axios=Nr;Ne.CanceledError=Hi;Ne.CancelToken=Qh;Ne.isCancel=jv;Ne.VERSION=Gv;Ne.toFormData=nu;Ne.AxiosError=G;Ne.Cancel=Ne.CanceledError;Ne.all=function(e){return Promise.all(e)};Ne.spread=IR;Ne.isAxiosError=SR;Ne.mergeConfig=Ur;Ne.AxiosHeaders=dt;Ne.formToJSON=t=>Bv(L.isHTMLForm(t)?new FormData(t):t);Ne.getAdapter=Kv.getAdapter;Ne.HttpStatusCode=Cf;Ne.default=Ne;var tg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,f=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|f>>6,P=f&63;u||(P=64,o||(y=64)),r.push(n[d],n[p],n[y],n[P])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||f==null||p==null)throw new AR;const y=s<<2|l>>4;if(r.push(y),f!==64){const P=l<<4&240|f>>2;if(r.push(P),p!==64){const R=f<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PR=function(t){const e=Jv(t);return Xv.encodeByteArray(e,!0)},yl=function(t){return PR(t).replace(/\./g,"")},Yv=function(t){try{return Xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=()=>kR().__FIREBASE_DEFAULTS__,NR=()=>{if(typeof process>"u"||typeof tg>"u")return;const t=tg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yv(t[1]);return e&&JSON.parse(e)},su=()=>{try{return CR()||NR()||OR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zv=t=>{var e,n;return(n=(e=su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DR=t=>{const e=Zv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eE=()=>{var t;return(t=su())===null||t===void 0?void 0:t.config},tE=t=>{var e;return(e=su())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function VR(){var t;const e=(t=su())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BR(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jR(){return!VR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zR(){try{return typeof indexedDB=="object"}catch{return!1}}function $R(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HR,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,So.prototype.create)}}class So{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function WR(t,e){return t.replace(qR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qR=/\{\$([^}]+)}/g;function KR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ng(s)&&ng(o)){if(!_l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ss(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function GR(t,e){const n=new QR(t,e);return n.subscribe.bind(n)}class QR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_c),i.error===void 0&&(i.error=_c),i.complete===void 0&&(i.complete=_c);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _c(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class Fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZR(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YR(t){return t===Tr?void 0:t}function ZR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const tA={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},nA=Y.INFO,rA={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},iA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jh{constructor(e){this.name=e,this._logLevel=nA,this._logHandler=iA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const sA=(t,e)=>e.some(n=>t instanceof n);let rg,ig;function oA(){return rg||(rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aA(){return ig||(ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nE=new WeakMap,Nf=new WeakMap,rE=new WeakMap,vc=new WeakMap,Xh=new WeakMap;function lA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nE.set(n,t)}).catch(()=>{}),Xh.set(e,t),e}function uA(t){if(Nf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nf.set(t,e)}let Of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cA(t){Of=t(Of)}function fA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ec(this),e,...n);return rE.set(r,e.sort?e.sort():[e]),er(r)}:aA().includes(t)?function(...e){return t.apply(Ec(this),e),er(nE.get(this))}:function(...e){return er(t.apply(Ec(this),e))}}function hA(t){return typeof t=="function"?fA(t):(t instanceof IDBTransaction&&uA(t),sA(t,oA())?new Proxy(t,Of):t)}function er(t){if(t instanceof IDBRequest)return lA(t);if(vc.has(t))return vc.get(t);const e=hA(t);return e!==t&&(vc.set(t,e),Xh.set(e,t)),e}const Ec=t=>Xh.get(t);function dA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(er(o.result),u.oldVersion,u.newVersion,er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const pA=["get","getKey","getAll","getAllKeys","count"],mA=["put","add","delete","clear"],wc=new Map;function sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),i&&u.done]))[0]};return wc.set(e,s),s}cA(t=>({...t,get:(e,n,r)=>sg(e,n)||t.get(e,n,r),has:(e,n)=>!!sg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Df="@firebase/app",og="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Jh("@firebase/app"),_A="@firebase/app-compat",vA="@firebase/analytics-compat",EA="@firebase/analytics",wA="@firebase/app-check-compat",TA="@firebase/app-check",IA="@firebase/auth",SA="@firebase/auth-compat",RA="@firebase/database",AA="@firebase/data-connect",PA="@firebase/database-compat",kA="@firebase/functions",CA="@firebase/functions-compat",NA="@firebase/installations",OA="@firebase/installations-compat",DA="@firebase/messaging",xA="@firebase/messaging-compat",LA="@firebase/performance",MA="@firebase/performance-compat",VA="@firebase/remote-config",bA="@firebase/remote-config-compat",UA="@firebase/storage",FA="@firebase/storage-compat",BA="@firebase/firestore",jA="@firebase/vertexai-preview",zA="@firebase/firestore-compat",$A="firebase",HA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="[DEFAULT]",WA={[Df]:"fire-core",[_A]:"fire-core-compat",[EA]:"fire-analytics",[vA]:"fire-analytics-compat",[TA]:"fire-app-check",[wA]:"fire-app-check-compat",[IA]:"fire-auth",[SA]:"fire-auth-compat",[RA]:"fire-rtdb",[AA]:"fire-data-connect",[PA]:"fire-rtdb-compat",[kA]:"fire-fn",[CA]:"fire-fn-compat",[NA]:"fire-iid",[OA]:"fire-iid-compat",[DA]:"fire-fcm",[xA]:"fire-fcm-compat",[LA]:"fire-perf",[MA]:"fire-perf-compat",[VA]:"fire-rc",[bA]:"fire-rc-compat",[UA]:"fire-gcs",[FA]:"fire-gcs-compat",[BA]:"fire-fst",[zA]:"fire-fst-compat",[jA]:"fire-vertex","fire-js":"fire-js",[$A]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Map,qA=new Map,Lf=new Map;function ag(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Oi(t){const e=t.name;if(Lf.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Lf.set(e,t);for(const n of vl.values())ag(n,t);for(const n of qA.values())ag(n,t);return!0}function Yh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new So("app","Firebase",KA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=HA;function QA(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=eE()),!n)throw tr.create("no-options");const s=vl.get(i);if(s){if(_l(n,s.options)&&_l(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new eA(i);for(const u of Lf.values())o.addComponent(u);const l=new GA(n,r,o);return vl.set(i,l),l}function iE(t=xf){const e=vl.get(t);if(!e&&t===xf&&eE())return QA();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let i=(r=WA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(l.join(" "));return}Oi(new Fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="firebase-heartbeat-database",XA=1,ao="firebase-heartbeat-store";let Tc=null;function sE(){return Tc||(Tc=dA(JA,XA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function YA(t){try{const n=(await sE()).transaction(ao),r=await n.objectStore(ao).get(oE(t));return await n.done,r}catch(e){if(e instanceof Pn)Sn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function lg(t,e){try{const r=(await sE()).transaction(ao,"readwrite");await r.objectStore(ao).put(e,oE(t)),await r.done}catch(n){if(n instanceof Pn)Sn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function oE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=1024,eP=30*24*60*60*1e3;class tP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ug();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=eP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ug(),{heartbeatsToSend:r,unsentEntries:i}=nP(this._heartbeatsCache.heartbeats),s=yl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Sn.warn(n),""}}}function ug(){return new Date().toISOString().substring(0,10)}function nP(t,e=ZA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zR()?$R().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cg(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){Oi(new Fr("platform-logger",e=>new gA(e),"PRIVATE")),Oi(new Fr("heartbeat",e=>new tP(e),"PRIVATE")),nr(Df,og,t),nr(Df,og,"esm2017"),nr("fire-js","")}iP("");var sP="firebase",oP="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(sP,oP,"app");function Zh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function aE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aP=aE,lE=new So("auth","Firebase",aE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Jh("@firebase/auth");function lP(t,...e){El.logLevel<=Y.WARN&&El.warn(`Auth (${Wi}): ${t}`,...e)}function Va(t,...e){El.logLevel<=Y.ERROR&&El.error(`Auth (${Wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw ed(t,...e)}function Xt(t,...e){return ed(t,...e)}function uE(t,e,n){const r=Object.assign(Object.assign({},aP()),{[e]:n});return new So("auth","Firebase",r).create(e,{appName:t.name})}function yn(t){return uE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ed(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lE.create(t,...e)}function W(t,e,...n){if(!t)throw ed(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function Rn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uP(){return fg()==="http:"||fg()==="https:"}function fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uP()||UR()||"connection"in navigator)?navigator.onLine:!0}function fP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=MR()||FR()}get(){return cP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new Ao(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kn(t,e,n,r,i={}){return fE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ro(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},s);return bR()||(f.referrerPolicy="no-referrer"),cE.fetch()(hE(t,t.config.apiHost,n,l),f)})}async function fE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hP),e);try{const i=new mP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw uE(t,d,f);zt(t,d)}}catch(i){if(i instanceof Pn)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function Po(t,e,n,r,i={}){const s=await kn(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?td(t.config,i):`${t.config.apiScheme}://${i}`}function pP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),dP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}function hg(t){return t!==void 0&&t.enterprise!==void 0}class gP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yP(t,e){return kn(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e){return kn(t,"POST","/v1/accounts:delete",e)}async function dE(t,e){return kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vP(t,e=!1){const n=pt(t),r=await n.getIdToken(e),i=nd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vs(Ic(i.auth_time)),issuedAtTime:Vs(Ic(i.iat)),expirationTime:Vs(Ic(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ic(t){return Number(t)*1e3}function nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yv(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dg(t){const e=nd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&EP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Di(t,dE(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pE(s.providerUserInfo):[],l=IP(t.providerData,o),u=t.isAnonymous,f=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?f:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Vf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function TP(t){const e=pt(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pE(t){return t.map(e=>{var{providerId:n}=e,r=Zh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){const n=await fE(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",cE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RP(t,e){return kn(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await SP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ei;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vP(this,e)}reload(){return TP(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await Di(this,_P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,f,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,P=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(f=n.createdAt)!==null&&f!==void 0?f:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:x,isAnonymous:M,providerData:F,stsTokenManager:E}=n;W(T&&E,e,"internal-error");const g=Ei.fromJSON(this.name,E);W(typeof T=="string",e,"internal-error"),xn(p,e.name),xn(y,e.name),W(typeof x=="boolean",e,"internal-error"),W(typeof M=="boolean",e,"internal-error"),xn(P,e.name),xn(R,e.name),xn(k,e.name),xn(C,e.name),xn(w,e.name),xn(_,e.name);const v=new pn({uid:T,auth:e,email:y,emailVerified:x,displayName:p,isAnonymous:M,photoURL:R,phoneNumber:P,tenantId:k,stsTokenManager:g,createdAt:w,lastLoginAt:_});return F&&Array.isArray(F)&&(v.providerData=F.map(I=>Object.assign({},I))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ei;i.updateFromServerResponse(n);const s=new pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?pE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ei;l.updateFromIdToken(r);const u=new pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Map;function mn(t){Rn(t instanceof Function,"Expected a class definition");let e=pg.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mE.type="NONE";const mg=mE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ba(this.userKey,i.apiKey,s),this.fullPersistenceKey=ba("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(mn(mg),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||mn(mg);const o=ba(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(o);if(d){const p=pn._fromJSON(e,d);f!==s&&(l=p),s=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new wi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(o)}catch{}})),new wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wE(e))return"Blackberry";if(TE(e))return"Webos";if(yE(e))return"Safari";if((e.includes("chrome/")||_E(e))&&!e.includes("edge/"))return"Chrome";if(EE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gE(t=tt()){return/firefox\//i.test(t)}function yE(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _E(t=tt()){return/crios\//i.test(t)}function vE(t=tt()){return/iemobile/i.test(t)}function EE(t=tt()){return/android/i.test(t)}function wE(t=tt()){return/blackberry/i.test(t)}function TE(t=tt()){return/webos/i.test(t)}function rd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AP(t=tt()){var e;return rd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PP(){return BR()&&document.documentMode===10}function IE(t=tt()){return rd(t)||EE(t)||TE(t)||wE(t)||/windows phone/i.test(t)||vE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t,e=[]){let n;switch(t){case"Browser":n=gg(tt());break;case"Worker":n=`${gg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e={}){return kn(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=6;class OP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yg(this),this.idTokenSubscription=new yg(this),this.beforeStateQueue=new kP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dE(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(yn(this));const n=e?pt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CP(this),n=new OP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new So("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kr(t){return pt(t)}class yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=GR(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xP(t){ou=t}function RE(t){return ou.loadJS(t)}function LP(){return ou.recaptchaEnterpriseScript}function MP(){return ou.gapiScript}function VP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bP="recaptcha-enterprise",UP="NO_RECAPTCHA";class FP{constructor(e){this.type=bP,this.auth=Kr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{yP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new gP(u);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,o(f.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;hg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(f=>{o(f)}).catch(()=>{o(UP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&hg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=LP();u.length!==0&&(u+=l),RE(u).then(()=>{i(l,s,o)}).catch(f=>{o(f)})}}).catch(l=>{o(l)})})}}async function _g(t,e,n,r=!1){const i=new FP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _g(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _g(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t,e){const n=Yh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_l(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function jP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zP(t,e,n){const r=Kr(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=AE(e),{host:o,port:l}=$P(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),HP()}function AE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $P(t){const e=AE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vg(o)}}}function vg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function WP(t,e){return kn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){return Po(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function GP(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends id{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(e,n,"signInWithPassword",qP);case"emailLink":return KP(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(e,r,"signUpPassword",WP);case"emailLink":return GP(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e){return Po(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP="http://localhost";class Br extends id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ti(e,n)}buildRequest(){const e={requestUri:QP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XP(t){const e=Ss(Rs(t)).link,n=e?Ss(Rs(e)).deep_link_id:null,r=Ss(Rs(t)).deep_link_id;return(r?Ss(Rs(r)).link:null)||r||n||e||t}class sd{constructor(e){var n,r,i,s,o,l;const u=Ss(Rs(e)),f=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=JP((i=u.mode)!==null&&i!==void 0?i:null);W(f&&d&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=XP(e);try{return new sd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.providerId=qi.PROVIDER_ID}static credential(e,n){return lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sd.parseLink(n);return W(r,"argument-error"),lo._fromEmailAndCode(e,r.code,r.tenantId)}}qi.PROVIDER_ID="password";qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends PE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ko{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ko{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ko{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e){return Po(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pn._fromIdTokenResponse(e,r,i),o=Eg(r);return new jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Eg(r);return new jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Eg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function kE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function ZP(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(yn(r));const i="reauthenticate";try{const s=await Di(t,kE(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=nd(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(t,e,n=!1){if(Gt(t.app))return Promise.reject(yn(t));const r="signIn",i=await kE(t,r,e),s=await jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tk(t,e){return CE(Kr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t){const e=Kr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JN(t,e,n){if(Gt(t.app))return Promise.reject(yn(t));const r=Kr(t),o=await bf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&NE(t),u}),l=await jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function XN(t,e,n){return Gt(t.app)?Promise.reject(yn(t)):tk(pt(t),qi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&NE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=pt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Di(r,nk(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function rk(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function ik(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function ZN(t){return pt(t).signOut()}const Il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=1e3,ok=10;class DE extends OE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ok):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DE.type="LOCAL";const ak=DE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE extends OE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xE.type="SESSION";const LE=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new au(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async f=>f(n.origin,s)),u=await lk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}au.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const f=od("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function ck(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dk(){return ME()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="firebaseLocalStorageDb",pk=1,Sl="firebaseLocalStorage",bE="fbase_key";class Co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lu(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function mk(){const t=indexedDB.deleteDatabase(VE);return new Co(t).toPromise()}function Uf(){const t=indexedDB.open(VE,pk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:bE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await mk(),e(await Uf()))})})}async function wg(t,e,n){const r=lu(t,!0).put({[bE]:e,value:n});return new Co(r).toPromise()}async function gk(t,e){const n=lu(t,!1).get(e),r=await new Co(n).toPromise();return r===void 0?null:r.value}function Tg(t,e){const n=lu(t,!0).delete(e);return new Co(n).toPromise()}const yk=800,_k=3;class UE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_k)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ME()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=au._getInstance(dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fk(),!this.activeServiceWorker)return;this.sender=new uk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uf();return await wg(e,Il,"1"),await Tg(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lu(i,!1).getAll();return new Co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UE.type="LOCAL";const vk=UE;new Ao(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t,e){return e?mn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wk(t){return CE(t.auth,new ad(t),t.bypassAuthState)}function Tk(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),ek(n,new ad(t),t.bypassAuthState)}async function Ik(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),ZP(n,new ad(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wk;case"linkViaPopup":case"linkViaRedirect":return Ik;case"reauthViaPopup":case"reauthViaRedirect":return Tk;default:zt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new Ao(2e3,1e4);class di extends FE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sk.get())};e()}}di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="pendingRedirect",Ua=new Map;class Ak extends FE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await Pk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pk(t,e){const n=Nk(e),r=Ck(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kk(t,e){Ua.set(t._key(),e)}function Ck(t){return mn(t._redirectPersistence)}function Nk(t){return ba(Rk,t.config.apiKey,t.name)}async function Ok(t,e,n=!1){if(Gt(t.app))return Promise.reject(yn(t));const r=Kr(t),i=Ek(r,e),o=await new Ak(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=10*60*1e3;class xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ig(e))}saveEventToCache(e){this.cachedEventUids.add(Ig(e)),this.lastProcessedEventTime=Date.now()}}function Ig(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e={}){return kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bk=/^https?/;async function Uk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mk(t);for(const n of e)try{if(Fk(n))return}catch{}zt(t,"unauthorized-domain")}function Fk(t){const e=Mf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bk.test(n))return!1;if(Vk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new Ao(3e4,6e4);function Sg(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jk(t){return new Promise((e,n)=>{var r,i,s;function o(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),n(Xt(t,"network-request-failed"))},timeout:Bk.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const l=VP("iframefcb");return Yt()[l]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},RE(`${MP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function zk(t){return Fa=Fa||jk(t),Fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new Ao(5e3,15e3),Hk="__/auth/iframe",Wk="emulator/auth/iframe",qk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gk(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?td(e,Wk):`https://${t.config.authDomain}/${Hk}`,r={apiKey:e.apiKey,appName:t.name,v:Wi},i=Kk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ro(r).slice(1)}`}async function Qk(t){const e=await zk(t),n=Yt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:Gk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),l=Yt().setTimeout(()=>{s(o)},$k.get());function u(){Yt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xk=500,Yk=600,Zk="_blank",eC="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tC(t,e,n,r=Xk,i=Yk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Jk),{width:r.toString(),height:i.toString(),top:s,left:o}),f=tt().toLowerCase();n&&(l=_E(f)?Zk:n),gE(f)&&(e=e||eC,u.scrollbars="yes");const d=Object.entries(u).reduce((y,[P,R])=>`${y}${P}=${R},`,"");if(AP(f)&&l!=="_self")return nC(e||"",l),new Rg(null);const p=window.open(e||"",l,d);W(p,t,"popup-blocked");try{p.focus()}catch{}return new Rg(p)}function nC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="__/auth/handler",iC="emulator/auth/handler",sC=encodeURIComponent("fac");async function Ag(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wi,eventId:i};if(e instanceof PE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ko){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),f=u?`#${sC}=${encodeURIComponent(u)}`:"";return`${oC(t)}?${Ro(l).slice(1)}${f}`}function oC({config:t}){return t.emulator?td(t,iC):`https://${t.authDomain}/${rC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class aC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LE,this._completeRedirectFn=Ok,this._overrideRedirectResult=kk}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ag(e,n,r,Mf(),i);return tC(e,o,od())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ag(e,n,r,Mf(),i);return ck(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Qk(e),r=new xk(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sc];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return IE()||yE()||rd()}}const lC=aC;var Pg="@firebase/auth",kg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fC(t){Oi(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SE(t)},f=new DP(r,i,s,u);return jP(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Oi(new Fr("auth-internal",e=>{const n=Kr(e.getProvider("auth").getImmediate());return(r=>new uC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(Pg,kg,cC(t)),nr(Pg,kg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=5*60,dC=tE("authIdTokenMaxAge")||hC;let Cg=null;const pC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dC)return;const i=n==null?void 0:n.token;Cg!==i&&(Cg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eO(t=iE()){const e=Yh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BP(t,{popupRedirectResolver:lC,persistence:[vk,ak,LE]}),r=tE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pC(s.toString());ik(n,o,()=>o(n.currentUser)),rk(n,l=>o(l))}}const i=Zv("auth");return i&&zP(n,`http://${i}`),n}function mC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fC("Browser");var Ng=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function v(){}v.prototype=g.prototype,E.D=g.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(I,A,O){for(var S=Array(arguments.length-2),St=2;St<arguments.length;St++)S[St-2]=arguments[St];return g.prototype[A].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,v){v||(v=0);var I=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)I[A]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=E.g[0],v=E.g[1],A=E.g[2];var O=E.g[3],S=g+(O^v&(A^O))+I[0]+3614090360&4294967295;g=v+(S<<7&4294967295|S>>>25),S=O+(A^g&(v^A))+I[1]+3905402710&4294967295,O=g+(S<<12&4294967295|S>>>20),S=A+(v^O&(g^v))+I[2]+606105819&4294967295,A=O+(S<<17&4294967295|S>>>15),S=v+(g^A&(O^g))+I[3]+3250441966&4294967295,v=A+(S<<22&4294967295|S>>>10),S=g+(O^v&(A^O))+I[4]+4118548399&4294967295,g=v+(S<<7&4294967295|S>>>25),S=O+(A^g&(v^A))+I[5]+1200080426&4294967295,O=g+(S<<12&4294967295|S>>>20),S=A+(v^O&(g^v))+I[6]+2821735955&4294967295,A=O+(S<<17&4294967295|S>>>15),S=v+(g^A&(O^g))+I[7]+4249261313&4294967295,v=A+(S<<22&4294967295|S>>>10),S=g+(O^v&(A^O))+I[8]+1770035416&4294967295,g=v+(S<<7&4294967295|S>>>25),S=O+(A^g&(v^A))+I[9]+2336552879&4294967295,O=g+(S<<12&4294967295|S>>>20),S=A+(v^O&(g^v))+I[10]+4294925233&4294967295,A=O+(S<<17&4294967295|S>>>15),S=v+(g^A&(O^g))+I[11]+2304563134&4294967295,v=A+(S<<22&4294967295|S>>>10),S=g+(O^v&(A^O))+I[12]+1804603682&4294967295,g=v+(S<<7&4294967295|S>>>25),S=O+(A^g&(v^A))+I[13]+4254626195&4294967295,O=g+(S<<12&4294967295|S>>>20),S=A+(v^O&(g^v))+I[14]+2792965006&4294967295,A=O+(S<<17&4294967295|S>>>15),S=v+(g^A&(O^g))+I[15]+1236535329&4294967295,v=A+(S<<22&4294967295|S>>>10),S=g+(A^O&(v^A))+I[1]+4129170786&4294967295,g=v+(S<<5&4294967295|S>>>27),S=O+(v^A&(g^v))+I[6]+3225465664&4294967295,O=g+(S<<9&4294967295|S>>>23),S=A+(g^v&(O^g))+I[11]+643717713&4294967295,A=O+(S<<14&4294967295|S>>>18),S=v+(O^g&(A^O))+I[0]+3921069994&4294967295,v=A+(S<<20&4294967295|S>>>12),S=g+(A^O&(v^A))+I[5]+3593408605&4294967295,g=v+(S<<5&4294967295|S>>>27),S=O+(v^A&(g^v))+I[10]+38016083&4294967295,O=g+(S<<9&4294967295|S>>>23),S=A+(g^v&(O^g))+I[15]+3634488961&4294967295,A=O+(S<<14&4294967295|S>>>18),S=v+(O^g&(A^O))+I[4]+3889429448&4294967295,v=A+(S<<20&4294967295|S>>>12),S=g+(A^O&(v^A))+I[9]+568446438&4294967295,g=v+(S<<5&4294967295|S>>>27),S=O+(v^A&(g^v))+I[14]+3275163606&4294967295,O=g+(S<<9&4294967295|S>>>23),S=A+(g^v&(O^g))+I[3]+4107603335&4294967295,A=O+(S<<14&4294967295|S>>>18),S=v+(O^g&(A^O))+I[8]+1163531501&4294967295,v=A+(S<<20&4294967295|S>>>12),S=g+(A^O&(v^A))+I[13]+2850285829&4294967295,g=v+(S<<5&4294967295|S>>>27),S=O+(v^A&(g^v))+I[2]+4243563512&4294967295,O=g+(S<<9&4294967295|S>>>23),S=A+(g^v&(O^g))+I[7]+1735328473&4294967295,A=O+(S<<14&4294967295|S>>>18),S=v+(O^g&(A^O))+I[12]+2368359562&4294967295,v=A+(S<<20&4294967295|S>>>12),S=g+(v^A^O)+I[5]+4294588738&4294967295,g=v+(S<<4&4294967295|S>>>28),S=O+(g^v^A)+I[8]+2272392833&4294967295,O=g+(S<<11&4294967295|S>>>21),S=A+(O^g^v)+I[11]+1839030562&4294967295,A=O+(S<<16&4294967295|S>>>16),S=v+(A^O^g)+I[14]+4259657740&4294967295,v=A+(S<<23&4294967295|S>>>9),S=g+(v^A^O)+I[1]+2763975236&4294967295,g=v+(S<<4&4294967295|S>>>28),S=O+(g^v^A)+I[4]+1272893353&4294967295,O=g+(S<<11&4294967295|S>>>21),S=A+(O^g^v)+I[7]+4139469664&4294967295,A=O+(S<<16&4294967295|S>>>16),S=v+(A^O^g)+I[10]+3200236656&4294967295,v=A+(S<<23&4294967295|S>>>9),S=g+(v^A^O)+I[13]+681279174&4294967295,g=v+(S<<4&4294967295|S>>>28),S=O+(g^v^A)+I[0]+3936430074&4294967295,O=g+(S<<11&4294967295|S>>>21),S=A+(O^g^v)+I[3]+3572445317&4294967295,A=O+(S<<16&4294967295|S>>>16),S=v+(A^O^g)+I[6]+76029189&4294967295,v=A+(S<<23&4294967295|S>>>9),S=g+(v^A^O)+I[9]+3654602809&4294967295,g=v+(S<<4&4294967295|S>>>28),S=O+(g^v^A)+I[12]+3873151461&4294967295,O=g+(S<<11&4294967295|S>>>21),S=A+(O^g^v)+I[15]+530742520&4294967295,A=O+(S<<16&4294967295|S>>>16),S=v+(A^O^g)+I[2]+3299628645&4294967295,v=A+(S<<23&4294967295|S>>>9),S=g+(A^(v|~O))+I[0]+4096336452&4294967295,g=v+(S<<6&4294967295|S>>>26),S=O+(v^(g|~A))+I[7]+1126891415&4294967295,O=g+(S<<10&4294967295|S>>>22),S=A+(g^(O|~v))+I[14]+2878612391&4294967295,A=O+(S<<15&4294967295|S>>>17),S=v+(O^(A|~g))+I[5]+4237533241&4294967295,v=A+(S<<21&4294967295|S>>>11),S=g+(A^(v|~O))+I[12]+1700485571&4294967295,g=v+(S<<6&4294967295|S>>>26),S=O+(v^(g|~A))+I[3]+2399980690&4294967295,O=g+(S<<10&4294967295|S>>>22),S=A+(g^(O|~v))+I[10]+4293915773&4294967295,A=O+(S<<15&4294967295|S>>>17),S=v+(O^(A|~g))+I[1]+2240044497&4294967295,v=A+(S<<21&4294967295|S>>>11),S=g+(A^(v|~O))+I[8]+1873313359&4294967295,g=v+(S<<6&4294967295|S>>>26),S=O+(v^(g|~A))+I[15]+4264355552&4294967295,O=g+(S<<10&4294967295|S>>>22),S=A+(g^(O|~v))+I[6]+2734768916&4294967295,A=O+(S<<15&4294967295|S>>>17),S=v+(O^(A|~g))+I[13]+1309151649&4294967295,v=A+(S<<21&4294967295|S>>>11),S=g+(A^(v|~O))+I[4]+4149444226&4294967295,g=v+(S<<6&4294967295|S>>>26),S=O+(v^(g|~A))+I[11]+3174756917&4294967295,O=g+(S<<10&4294967295|S>>>22),S=A+(g^(O|~v))+I[2]+718787259&4294967295,A=O+(S<<15&4294967295|S>>>17),S=v+(O^(A|~g))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+O&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var v=g-this.blockSize,I=this.B,A=this.h,O=0;O<g;){if(A==0)for(;O<=v;)i(this,E,O),O+=this.blockSize;if(typeof E=="string"){for(;O<g;)if(I[A++]=E.charCodeAt(O++),A==this.blockSize){i(this,I),A=0;break}}else for(;O<g;)if(I[A++]=E[O++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var v=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=v&255,v/=256;for(this.u(E),E=Array(16),g=v=0;4>g;++g)for(var I=0;32>I;I+=8)E[v++]=this.g[g]>>>I&255;return E};function s(E,g){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=g(E)}function o(E,g){this.h=g;for(var v=[],I=!0,A=E.length-1;0<=A;A--){var O=E[A]|0;I&&O==g||(v[A]=O,I=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return C(f(-E));for(var g=[],v=1,I=0;E>=v;I++)g[I]=E/v|0,v*=4294967296;return new o(g,0)}function d(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return C(d(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=f(Math.pow(g,8)),I=p,A=0;A<E.length;A+=8){var O=Math.min(8,E.length-A),S=parseInt(E.substring(A,A+O),g);8>O?(O=f(Math.pow(g,O)),I=I.j(O).add(f(S))):(I=I.j(v),I=I.add(f(S)))}return I}var p=u(0),y=u(1),P=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-C(this).m();for(var E=0,g=1,v=0;v<this.g.length;v++){var I=this.i(v);E+=(0<=I?I:4294967296+I)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(k(this))return"-"+C(this).toString(E);for(var g=f(Math.pow(E,6)),v=this,I="";;){var A=x(v,g).g;v=w(v,A.j(g));var O=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=A,R(v))return O+I;for(;6>O.length;)O="0"+O;I=O+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=w(this,E),k(E)?-1:R(E)?0:1};function C(E){for(var g=E.g.length,v=[],I=0;I<g;I++)v[I]=~E.g[I];return new o(v,~E.h).add(y)}t.abs=function(){return k(this)?C(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],I=0,A=0;A<=g;A++){var O=I+(this.i(A)&65535)+(E.i(A)&65535),S=(O>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);I=S>>>16,O&=65535,S&=65535,v[A]=S<<16|O}return new o(v,v[v.length-1]&-2147483648?-1:0)};function w(E,g){return E.add(C(g))}t.j=function(E){if(R(this)||R(E))return p;if(k(this))return k(E)?C(this).j(C(E)):C(C(this).j(E));if(k(E))return C(this.j(C(E)));if(0>this.l(P)&&0>E.l(P))return f(this.m()*E.m());for(var g=this.g.length+E.g.length,v=[],I=0;I<2*g;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<E.g.length;A++){var O=this.i(I)>>>16,S=this.i(I)&65535,St=E.i(A)>>>16,mr=E.i(A)&65535;v[2*I+2*A]+=S*mr,_(v,2*I+2*A),v[2*I+2*A+1]+=O*mr,_(v,2*I+2*A+1),v[2*I+2*A+1]+=S*St,_(v,2*I+2*A+1),v[2*I+2*A+2]+=O*St,_(v,2*I+2*A+2)}for(I=0;I<g;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=g;I<2*g;I++)v[I]=0;return new o(v,0)};function _(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function T(E,g){this.g=E,this.h=g}function x(E,g){if(R(g))throw Error("division by zero");if(R(E))return new T(p,p);if(k(E))return g=x(C(E),g),new T(C(g.g),C(g.h));if(k(g))return g=x(E,C(g)),new T(C(g.g),g.h);if(30<E.g.length){if(k(E)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var v=y,I=g;0>=I.l(E);)v=M(v),I=M(I);var A=F(v,1),O=F(I,1);for(I=F(I,2),v=F(v,2);!R(I);){var S=O.add(I);0>=S.l(E)&&(A=A.add(v),O=S),I=F(I,1),v=F(v,1)}return g=w(E,A.j(g)),new T(A,g)}for(A=p;0<=E.l(g);){for(v=Math.max(1,Math.floor(E.m()/g.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),O=f(v),S=O.j(g);k(S)||0<S.l(E);)v-=I,O=f(v),S=O.j(g);R(O)&&(O=y),A=A.add(O),E=w(E,S)}return new T(A,E)}t.A=function(E){return x(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],I=0;I<g;I++)v[I]=this.i(I)&E.i(I);return new o(v,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],I=0;I<g;I++)v[I]=this.i(I)|E.i(I);return new o(v,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],I=0;I<g;I++)v[I]=this.i(I)^E.i(I);return new o(v,this.h^E.h)};function M(E){for(var g=E.g.length+1,v=[],I=0;I<g;I++)v[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(v,E.h)}function F(E,g){var v=g>>5;g%=32;for(var I=E.g.length-v,A=[],O=0;O<I;O++)A[O]=0<g?E.i(O+v)>>>g|E.i(O+v+1)<<32-g:E.i(O+v);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=d,jE=o}).apply(typeof Ng<"u"?Ng:typeof self<"u"?self:typeof window<"u"?window:{});var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zE,As,$E,Ba,Ff,HE,WE,qE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ga=="object"&&ga];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var h=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in h))break e;h=h[N]}a=a[a.length-1],m=h[a],c=c(m),c!=m&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var h=0,m=!1,N={next:function(){if(!m&&h<a.length){var D=h++;return{value:c(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function f(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function d(a,c,h){return a.call.apply(a.bind,arguments)}function p(a,c,h){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function y(a,c,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function P(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(m,N,D){for(var B=Array(arguments.length-2),se=2;se<arguments.length;se++)B[se-2]=arguments[se];return c.prototype[N].apply(m,B)}}function k(a){const c=a.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=a[m];return h}return[]}function C(a,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(u(m)){const N=a.length||0,D=m.length||0;a.length=N+D;for(let B=0;B<D;B++)a[N+B]=m[B]}else a.push(m)}}class w{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var M=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function F(a,c,h){for(const m in a)c.call(h,a[m],m,a)}function E(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function g(a){const c={};for(const h in a)c[h]=a[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let h,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(h in m)a[h]=m[h];for(let D=0;D<v.length;D++)h=v[D],Object.prototype.hasOwnProperty.call(m,h)&&(a[h]=m[h])}}function A(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function O(a){l.setTimeout(()=>{throw a},0)}function S(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class St{constructor(){this.h=this.g=null}add(c,h){const m=mr.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var mr=new w(()=>new Qi,a=>a.reset());class Qi{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let tn,j=!1,K=new St,Q=()=>{const a=l.Promise.resolve(void 0);tn=()=>{a.then(de)}};var de=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(h){O(h)}var c=mr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}j=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var nn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function rn(a,c){if(we.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(M){e:{try{x(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:sn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&rn.aa.h.call(this)}}R(rn,we);var sn={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var on="closure_listenable_"+(1e6*Math.random()|0),$w=0;function Hw(a,c,h,m,N){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=N,this.key=++$w,this.da=this.fa=!1}function Lo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mo(a){this.src=a,this.g={},this.h=0}Mo.prototype.add=function(a,c,h,m,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=vu(a,c,m,N);return-1<B?(c=a[B],h||(c.fa=!1)):(c=new Hw(c,this.src,D,!!m,N),c.fa=h,a.push(c)),c};function _u(a,c){var h=c.type;if(h in a.g){var m=a.g[h],N=Array.prototype.indexOf.call(m,c,void 0),D;(D=0<=N)&&Array.prototype.splice.call(m,N,1),D&&(Lo(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function vu(a,c,h,m){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==c&&D.capture==!!h&&D.ha==m)return N}return-1}var Eu="closure_lm_"+(1e6*Math.random()|0),wu={};function Sd(a,c,h,m,N){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Sd(a,c[D],h,m,N);return null}return h=Pd(h),a&&a[on]?a.K(c,h,f(m)?!!m.capture:!1,N):Ww(a,c,h,!1,m,N)}function Ww(a,c,h,m,N,D){if(!c)throw Error("Invalid event type");var B=f(N)?!!N.capture:!!N,se=Iu(a);if(se||(a[Eu]=se=new Mo(a)),h=se.add(c,h,m,B,D),h.proxy)return h;if(m=qw(),h.proxy=m,m.src=a,m.listener=h,a.addEventListener)nn||(N=B),N===void 0&&(N=!1),a.addEventListener(c.toString(),m,N);else if(a.attachEvent)a.attachEvent(Ad(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function qw(){function a(h){return c.call(a.src,a.listener,h)}const c=Kw;return a}function Rd(a,c,h,m,N){if(Array.isArray(c))for(var D=0;D<c.length;D++)Rd(a,c[D],h,m,N);else m=f(m)?!!m.capture:!!m,h=Pd(h),a&&a[on]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],h=vu(D,h,m,N),-1<h&&(Lo(D[h]),Array.prototype.splice.call(D,h,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Iu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=vu(c,h,m,N)),(h=-1<a?c[a]:null)&&Tu(h))}function Tu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[on])_u(c.i,a);else{var h=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(h,m,a.capture):c.detachEvent?c.detachEvent(Ad(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Iu(c))?(_u(h,a),h.h==0&&(h.src=null,c[Eu]=null)):Lo(a)}}}function Ad(a){return a in wu?wu[a]:wu[a]="on"+a}function Kw(a,c){if(a.da)a=!0;else{c=new rn(c,this);var h=a.listener,m=a.ha||a.src;a.fa&&Tu(a),a=h.call(m,c)}return a}function Iu(a){return a=a[Eu],a instanceof Mo?a:null}var Su="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pd(a){return typeof a=="function"?a:(a[Su]||(a[Su]=function(c){return a.handleEvent(c)}),a[Su])}function $e(){ie.call(this),this.i=new Mo(this),this.M=this,this.F=null}R($e,ie),$e.prototype[on]=!0,$e.prototype.removeEventListener=function(a,c,h,m){Rd(this,a,c,h,m)};function nt(a,c){var h,m=a.F;if(m)for(h=[];m;m=m.F)h.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new we(c,a);else if(c instanceof we)c.target=c.target||a;else{var N=c;c=new we(m,a),I(c,N)}if(N=!0,h)for(var D=h.length-1;0<=D;D--){var B=c.g=h[D];N=Vo(B,m,!0,c)&&N}if(B=c.g=a,N=Vo(B,m,!0,c)&&N,N=Vo(B,m,!1,c)&&N,h)for(D=0;D<h.length;D++)B=c.g=h[D],N=Vo(B,m,!1,c)&&N}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],m=0;m<h.length;m++)Lo(h[m]);delete a.g[c],a.h--}}this.F=null},$e.prototype.K=function(a,c,h,m){return this.i.add(String(a),c,!1,h,m)},$e.prototype.L=function(a,c,h,m){return this.i.add(String(a),c,!0,h,m)};function Vo(a,c,h,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,D=0;D<c.length;++D){var B=c[D];if(B&&!B.da&&B.capture==h){var se=B.listener,Ve=B.ha||B.src;B.fa&&_u(a.i,B),N=se.call(Ve,m)!==!1&&N}}return N&&!m.defaultPrevented}function kd(a,c,h){if(typeof a=="function")h&&(a=y(a,h));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Cd(a){a.g=kd(()=>{a.g=null,a.i&&(a.i=!1,Cd(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Gw extends ie{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Cd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(a){ie.call(this),this.h=a,this.g={}}R(Ji,ie);var Nd=[];function Od(a){F(a.g,function(c,h){this.g.hasOwnProperty(h)&&Tu(c)},a),a.g={}}Ji.prototype.N=function(){Ji.aa.N.call(this),Od(this)},Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ru=l.JSON.stringify,Qw=l.JSON.parse,Jw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Au(){}Au.prototype.h=null;function Dd(a){return a.h||(a.h=a.i())}function xd(){}var Xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pu(){we.call(this,"d")}R(Pu,we);function ku(){we.call(this,"c")}R(ku,we);var gr={},Ld=null;function bo(){return Ld=Ld||new $e}gr.La="serverreachability";function Md(a){we.call(this,gr.La,a)}R(Md,we);function Yi(a){const c=bo();nt(c,new Md(c))}gr.STAT_EVENT="statevent";function Vd(a,c){we.call(this,gr.STAT_EVENT,a),this.stat=c}R(Vd,we);function rt(a){const c=bo();nt(c,new Vd(c,a))}gr.Ma="timingevent";function bd(a,c){we.call(this,gr.Ma,a),this.size=c}R(bd,we);function Zi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function es(){this.g=!0}es.prototype.xa=function(){this.g=!1};function Xw(a,c,h,m,N,D){a.info(function(){if(a.g)if(D)for(var B="",se=D.split("&"),Ve=0;Ve<se.length;Ve++){var ne=se[Ve].split("=");if(1<ne.length){var He=ne[0];ne=ne[1];var We=He.split("_");B=2<=We.length&&We[1]=="type"?B+(He+"="+ne+"&"):B+(He+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+c+`
`+h+`
`+B})}function Yw(a,c,h,m,N,D,B){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+c+`
`+h+`
`+D+" "+B})}function Qr(a,c,h,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+eT(a,h)+(m?" "+m:"")})}function Zw(a,c){a.info(function(){return"TIMEOUT: "+c})}es.prototype.info=function(){};function eT(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var m=h[a];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return Ru(h)}catch{return c}}var Uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ud={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cu;function Fo(){}R(Fo,Au),Fo.prototype.g=function(){return new XMLHttpRequest},Fo.prototype.i=function(){return{}},Cu=new Fo;function Cn(a,c,h,m){this.j=a,this.i=c,this.l=h,this.R=m||1,this.U=new Ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fd}function Fd(){this.i=null,this.g="",this.h=!1}var Bd={},Nu={};function Ou(a,c,h){a.L=1,a.v=$o(an(c)),a.m=h,a.P=!0,jd(a,null)}function jd(a,c){a.F=Date.now(),Bo(a),a.A=an(a.v);var h=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),tp(h.i,"t",m),a.C=0,h=a.j.J,a.h=new Fd,a.g=vp(a.j,h?c:null,!a.m),0<a.O&&(a.M=new Gw(y(a.Y,a,a.g),a.O)),c=a.U,h=a.g,m=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Nd[0]=N.toString()),N=Nd);for(var D=0;D<N.length;D++){var B=Sd(h,N[D],m||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Yi(),Xw(a.i,a.u,a.A,a.l,a.R,a.m)}Cn.prototype.ca=function(a){a=a.target;const c=this.M;c&&ln(a)==3?c.j():this.Y(a)},Cn.prototype.Y=function(a){try{if(a==this.g)e:{const We=ln(this.g);var c=this.g.Ba();const Yr=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||lp(this.g)))){this.J||We!=4||c==7||(c==8||0>=Yr?Yi(3):Yi(2)),Du(this);var h=this.g.Z();this.X=h;t:if(zd(this)){var m=lp(this.g);a="";var N=m.length,D=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),ts(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(D&&c==N-1)});m.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=h==200,Yw(this.i,this.u,this.A,this.l,this.R,We,h),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ve=this.g;if((se=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(se)){var ne=se;break t}}ne=null}if(h=ne)Qr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xu(this,h);else{this.o=!1,this.s=3,rt(12),yr(this),ts(this);break e}}if(this.P){h=!0;let Ot;for(;!this.J&&this.C<B.length;)if(Ot=tT(this,B),Ot==Nu){We==4&&(this.s=4,rt(14),h=!1),Qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Bd){this.s=4,rt(15),Qr(this.i,this.l,B,"[Invalid Chunk]"),h=!1;break}else Qr(this.i,this.l,Ot,null),xu(this,Ot);if(zd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||B.length!=0||this.h.h||(this.s=1,rt(16),h=!1),this.o=this.o&&h,!h)Qr(this.i,this.l,B,"[Invalid Chunked Response]"),yr(this),ts(this);else if(0<B.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Fu(He),He.M=!0,rt(11))}}else Qr(this.i,this.l,B,null),xu(this,B);We==4&&yr(this),this.o&&!this.J&&(We==4?mp(this.j,this):(this.o=!1,Bo(this)))}else _T(this.g),h==400&&0<B.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),yr(this),ts(this)}}}catch{}finally{}};function zd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function tT(a,c){var h=a.C,m=c.indexOf(`
`,h);return m==-1?Nu:(h=Number(c.substring(h,m)),isNaN(h)?Bd:(m+=1,m+h>c.length?Nu:(c=c.slice(m,m+h),a.C=m+h,c)))}Cn.prototype.cancel=function(){this.J=!0,yr(this)};function Bo(a){a.S=Date.now()+a.I,$d(a,a.I)}function $d(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zi(y(a.ba,a),c)}function Du(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Zw(this.i,this.A),this.L!=2&&(Yi(),rt(17)),yr(this),this.s=2,ts(this)):$d(this,this.S-a)};function ts(a){a.j.G==0||a.J||mp(a.j,a)}function yr(a){Du(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Od(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function xu(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||Lu(h.h,a))){if(!a.K&&Lu(h.h,a)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Qo(h),Ko(h);else break e;Uu(h),rt(18)}}else h.za=N[1],0<h.za-h.T&&37500>N[2]&&h.F&&h.v==0&&!h.C&&(h.C=Zi(y(h.Za,h),6e3));if(1>=qd(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else vr(h,11)}else if((a.K||h.g==a)&&Qo(h),!_(c))for(N=h.Da.g.parse(c),c=0;c<N.length;c++){let ne=N[c];if(h.T=ne[0],ne=ne[1],h.G==2)if(ne[0]=="c"){h.K=ne[1],h.ia=ne[2];const He=ne[3];He!=null&&(h.la=He,h.j.info("VER="+h.la));const We=ne[4];We!=null&&(h.Aa=We,h.j.info("SVER="+h.Aa));const Yr=ne[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(m=1.5*Yr,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Ot=a.g;if(Ot){const Xo=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var D=m.h;D.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Mu(D,D.h),D.h=null))}if(m.D){const Bu=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Bu&&(m.ya=Bu,ue(m.I,m.D,Bu))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var B=a;if(m.qa=_p(m,m.J?m.ia:null,m.W),B.K){Kd(m.h,B);var se=B,Ve=m.L;Ve&&(se.I=Ve),se.B&&(Du(se),Bo(se)),m.g=B}else dp(m);0<h.i.length&&Go(h)}else ne[0]!="stop"&&ne[0]!="close"||vr(h,7);else h.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?vr(h,7):bu(h):ne[0]!="noop"&&h.l&&h.l.ta(ne),h.v=0)}}Yi(4)}catch{}}var nT=class{constructor(a,c){this.g=a,this.map=c}};function Hd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qd(a){return a.h?1:a.g?a.g.size:0}function Lu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Mu(a,c){a.g?a.g.add(c):a.h=c}function Kd(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Hd.prototype.cancel=function(){if(this.i=Gd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return k(a.i)}function rT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,m=0;m<h;m++)c.push(a[m]);return c}c=[],h=0;for(m in a)c[h++]=a[m];return c}function iT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const m in a)c[h++]=m;return c}}}function Qd(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=iT(a),m=rT(a),N=m.length,D=0;D<N;D++)c.call(void 0,m[D],h&&h[D],a)}var Jd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sT(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var m=a[h].indexOf("="),N=null;if(0<=m){var D=a[h].substring(0,m);N=a[h].substring(m+1)}else D=a[h];c(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,jo(this,a.j),this.o=a.o,this.g=a.g,zo(this,a.s),this.l=a.l;var c=a.i,h=new is;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Xd(this,h),this.m=a.m}else a&&(c=String(a).match(Jd))?(this.h=!1,jo(this,c[1]||"",!0),this.o=ns(c[2]||""),this.g=ns(c[3]||"",!0),zo(this,c[4]),this.l=ns(c[5]||"",!0),Xd(this,c[6]||"",!0),this.m=ns(c[7]||"")):(this.h=!1,this.i=new is(null,this.h))}_r.prototype.toString=function(){var a=[],c=this.j;c&&a.push(rs(c,Yd,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(rs(c,Yd,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(rs(h,h.charAt(0)=="/"?lT:aT,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",rs(h,cT)),a.join("")};function an(a){return new _r(a)}function jo(a,c,h){a.j=h?ns(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function zo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Xd(a,c,h){c instanceof is?(a.i=c,fT(a.i,a.h)):(h||(c=rs(c,uT)),a.i=new is(c,a.h))}function ue(a,c,h){a.i.set(c,h)}function $o(a){return ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ns(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function rs(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,oT),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function oT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yd=/[#\/\?@]/g,aT=/[#\?:]/g,lT=/[#\?]/g,uT=/[#\?@]/g,cT=/#/g;function is(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&sT(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=is.prototype,t.add=function(a,c){Nn(this),this.i=null,a=Jr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function Zd(a,c){Nn(a),c=Jr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ep(a,c){return Nn(a),c=Jr(a,c),a.g.has(c)}t.forEach=function(a,c){Nn(this),this.g.forEach(function(h,m){h.forEach(function(N){a.call(c,N,m,this)},this)},this)},t.na=function(){Nn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const N=a[m];for(let D=0;D<N.length;D++)h.push(c[m])}return h},t.V=function(a){Nn(this);let c=[];if(typeof a=="string")ep(this,a)&&(c=c.concat(this.g.get(Jr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return Nn(this),this.i=null,a=Jr(this,a),ep(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function tp(a,c,h){Zd(a,c),0<h.length&&(a.i=null,a.g.set(Jr(a,c),k(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const D=encodeURIComponent(String(m)),B=this.V(m);for(m=0;m<B.length;m++){var N=D;B[m]!==""&&(N+="="+encodeURIComponent(String(B[m]))),a.push(N)}}return this.i=a.join("&")};function Jr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function fT(a,c){c&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(h,m){var N=m.toLowerCase();m!=N&&(Zd(this,m),tp(this,N,h))},a)),a.j=c}function hT(a,c){const h=new es;if(l.Image){const m=new Image;m.onload=P(On,h,"TestLoadImage: loaded",!0,c,m),m.onerror=P(On,h,"TestLoadImage: error",!1,c,m),m.onabort=P(On,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=P(On,h,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function dT(a,c){const h=new es,m=new AbortController,N=setTimeout(()=>{m.abort(),On(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(N),D.ok?On(h,"TestPingServer: ok",!0,c):On(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),On(h,"TestPingServer: error",!1,c)})}function On(a,c,h,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(h)}catch{}}function pT(){this.g=new Jw}function mT(a,c,h){const m=h||"";try{Qd(a,function(N,D){let B=N;f(N)&&(B=Ru(N)),c.push(m+D+"="+encodeURIComponent(B))})}catch(N){throw c.push(m+"type="+encodeURIComponent("_badmap")),N}}function Ho(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Ho,Au),Ho.prototype.g=function(){return new Wo(this.l,this.j)},Ho.prototype.i=function(a){return function(){return a}}({});function Wo(a,c){$e.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Wo,$e),t=Wo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,os(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;np(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function np(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ss(this):os(this),this.readyState==3&&np(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ss(this))},t.Qa=function(a){this.g&&(this.response=a,ss(this))},t.ga=function(){this.g&&ss(this)};function ss(a){a.readyState=4,a.l=null,a.j=null,a.v=null,os(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rp(a){let c="";return F(a,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Vu(a,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=rp(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ue(a,c,h))}function _e(a){$e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(_e,$e);var gT=/^https?$/i,yT=["POST","PUT"];t=_e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cu.g(),this.v=this.o?Dd(this.o):Dd(Cu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){ip(this,D);return}if(a=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)h.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())h.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(D=>D.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yT,c,void 0))||m||N||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of h)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ap(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){ip(this,D)}};function ip(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,sp(a),qo(a)}function sp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qo(this,!0)),_e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?op(this):this.bb())},t.bb=function(){op(this)};function op(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ln(a)!=4||a.Z()!=2)){if(a.u&&ln(a)==4)kd(a.Ea,0,a);else if(nt(a,"readystatechange"),ln(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=B===0){var N=String(a.D).match(Jd)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),m=!gT.test(N?N.toLowerCase():"")}h=m}if(h)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var D=2<ln(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",sp(a)}}finally{qo(a)}}}}function qo(a,c){if(a.g){ap(a);const h=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{h.onreadystatechange=m}catch{}}}function ap(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Qw(c)}};function lp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _T(a){const c={};a=(a.g&&2<=ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var h=A(a[m]);const N=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const D=c[N]||[];c[N]=D,D.push(h)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function up(a){this.Aa=0,this.i=[],this.j=new es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=as("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=as("baseRetryDelayMs",5e3,a),this.cb=as("retryDelaySeedMs",1e4,a),this.Wa=as("forwardChannelMaxRetries",2,a),this.wa=as("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hd(a&&a.concurrentRequestLimit),this.Da=new pT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=up.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,m){rt(0),this.W=a,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=_p(this,null,this.W),Go(this)};function bu(a){if(cp(a),a.G==3){var c=a.U++,h=an(a.I);if(ue(h,"SID",a.K),ue(h,"RID",c),ue(h,"TYPE","terminate"),ls(a,h),c=new Cn(a,a.j,c),c.L=2,c.v=$o(an(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=vp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Bo(c)}yp(a)}function Ko(a){a.g&&(Fu(a),a.g.cancel(),a.g=null)}function cp(a){Ko(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Go(a){if(!Wd(a.h)&&!a.s){a.s=!0;var c=a.Ga;tn||Q(),j||(tn(),j=!0),K.add(c,a),a.B=0}}function vT(a,c){return qd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zi(y(a.Ga,a,c),gp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Cn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=hp(this,N,c),h=an(this.I),ue(h,"RID",a),ue(h,"CVER",22),this.D&&ue(h,"X-HTTP-Session-Id",this.D),ls(this,h),D&&(this.O?c="headers="+encodeURIComponent(String(rp(D)))+"&"+c:this.m&&Vu(h,this.m,D)),Mu(this.h,N),this.Ua&&ue(h,"TYPE","init"),this.P?(ue(h,"$req",c),ue(h,"SID","null"),N.T=!0,Ou(N,h,null)):Ou(N,h,c),this.G=2}}else this.G==3&&(a?fp(this,a):this.i.length==0||Wd(this.h)||fp(this))};function fp(a,c){var h;c?h=c.l:h=a.U++;const m=an(a.I);ue(m,"SID",a.K),ue(m,"RID",h),ue(m,"AID",a.T),ls(a,m),a.m&&a.o&&Vu(m,a.m,a.o),h=new Cn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=hp(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mu(a.h,h),Ou(h,m,c)}function ls(a,c){a.H&&F(a.H,function(h,m){ue(c,m,h)}),a.l&&Qd({},function(h,m){ue(c,m,h)})}function hp(a,c,h){h=Math.min(a.i.length,h);var m=a.l?y(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const B=["count="+h];D==-1?0<h?(D=N[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let se=!0;for(let Ve=0;Ve<h;Ve++){let ne=N[Ve].g;const He=N[Ve].map;if(ne-=D,0>ne)D=Math.max(0,N[Ve].g-100),se=!1;else try{mT(He,B,"req"+ne+"_")}catch{m&&m(He)}}if(se){m=B.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,m}function dp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;tn||Q(),j||(tn(),j=!0),K.add(c,a),a.v=0}}function Uu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zi(y(a.Fa,a),gp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,pp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zi(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Ko(this),pp(this))};function Fu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function pp(a){a.g=new Cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=an(a.qa);ue(c,"RID","rpc"),ue(c,"SID",a.K),ue(c,"AID",a.T),ue(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ue(c,"TO",a.ja),ue(c,"TYPE","xmlhttp"),ls(a,c),a.m&&a.o&&Vu(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=$o(an(c)),h.m=null,h.P=!0,jd(h,a)}t.Za=function(){this.C!=null&&(this.C=null,Ko(this),Uu(this),rt(19))};function Qo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function mp(a,c){var h=null;if(a.g==c){Qo(a),Fu(a),a.g=null;var m=2}else if(Lu(a.h,c))h=c.D,Kd(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;m=bo(),nt(m,new bd(m,h)),Go(a)}else dp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(m==1&&vT(a,c)||m==2&&Uu(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),N){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function gp(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function vr(a,c){if(a.j.info("Error code "+c),c==2){var h=y(a.fb,a),m=a.Xa;const N=!m;m=new _r(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||jo(m,"https"),$o(m),N?hT(m.toString(),h):dT(m.toString(),h)}else rt(2);a.G=0,a.l&&a.l.sa(c),yp(a),cp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function yp(a){if(a.G=0,a.ka=[],a.l){const c=Gd(a.h);(c.length!=0||a.i.length!=0)&&(C(a.ka,c),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function _p(a,c,h){var m=h instanceof _r?an(h):new _r(h);if(m.g!="")c&&(m.g=c+"."+m.g),zo(m,m.s);else{var N=l.location;m=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var D=new _r(null);m&&jo(D,m),c&&(D.g=c),N&&zo(D,N),h&&(D.l=h),m=D}return h=a.D,c=a.ya,h&&c&&ue(m,h,c),ue(m,"VER",a.la),ls(a,m),m}function vp(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new _e(new Ho({eb:h})):new _e(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ep(){}t=Ep.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Jo(){}Jo.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){$e.call(this),this.g=new up(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Xr(this)}R(gt,$e),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){bu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Ru(a),a=h);c.i.push(new nT(c.Ya++,a)),c.G==3&&Go(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,bu(this.g),delete this.g,gt.aa.N.call(this)};function wp(a){Pu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(wp,Pu);function Tp(){ku.call(this),this.status=1}R(Tp,ku);function Xr(a){this.g=a}R(Xr,Ep),Xr.prototype.ua=function(){nt(this.g,"a")},Xr.prototype.ta=function(a){nt(this.g,new wp(a))},Xr.prototype.sa=function(a){nt(this.g,new Tp)},Xr.prototype.ra=function(){nt(this.g,"b")},Jo.prototype.createWebChannel=Jo.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,qE=function(){return new Jo},WE=function(){return bo()},HE=gr,Ff={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Uo.NO_ERROR=0,Uo.TIMEOUT=8,Uo.HTTP_ERROR=6,Ba=Uo,Ud.COMPLETE="complete",$E=Ud,xd.EventType=Xi,Xi.OPEN="a",Xi.CLOSE="b",Xi.ERROR="c",Xi.MESSAGE="d",$e.prototype.listen=$e.prototype.K,As=xd,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,zE=_e}).apply(typeof ga<"u"?ga:typeof self<"u"?self:typeof window<"u"?window:{});const Og="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Jh("@firebase/firestore");function _s(){return zr.logLevel}function H(t,...e){if(zr.logLevel<=Y.DEBUG){const n=e.map(ld);zr.debug(`Firestore (${Ki}): ${t}`,...n)}}function $r(t,...e){if(zr.logLevel<=Y.ERROR){const n=e.map(ld);zr.error(`Firestore (${Ki}): ${t}`,...n)}}function Rl(t,...e){if(zr.logLevel<=Y.WARN){const n=e.map(ld);zr.warn(`Firestore (${Ki}): ${t}`,...n)}}function ld(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw $r(e),new Error(e)}function Se(t,e){t||Z()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class yC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _C{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new KE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new Qe(e)}}class vC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class EC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new wC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=IC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Me(0,0))}static max(){return new pe(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return uo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof uo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends uo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const SC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends uo{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return SC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ee.fromString(e))}static fromName(e){return new J(Ee.fromString(e).popFirst(5))}static empty(){return new J(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ee(e.slice()))}}function RC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new or(i,J.empty(),e)}function AC(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(pe.min(),J.empty(),-1)}static max(){return new or(pe.max(),J.empty(),-1)}}function PC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==kC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const f=u;n(e[f]).next(d=>{o[f]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function NC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function uu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}JE.oe=-1;function ud(t){return t==null}function Al(t){return t===0&&1/t==-1/0}function OC(t){return typeof t=="number"&&Number.isInteger(t)&&!Al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function No(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new mt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new mt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xg(this.data.getIterator())}getIteratorFrom(e){return new xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Ze(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new DC("Invalid base64 string: "+s):s}}(e);return new Zt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const xC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=xC.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function co(t){return typeof t=="string"?Zt.fromBase64String(t):Zt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function YE(t){const e=t.mapValue.fields.__previous_value__;return cd(e)?YE(e):e}function Pl(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,i,s,o,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}class kl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new kl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cd(t)?4:VC(t)?9007199254740991:MC(t)?10:11:Z()}function en(t,e){if(t===e)return!0;const n=Li(t);if(n!==Li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pl(t).isEqual(Pl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),l=Hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return co(i.bytesValue).isEqual(co(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),l=Fe(s.doubleValue);return o===l?Al(o)===Al(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Dg(o)!==Dg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!en(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function fo(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=Li(t),r=Li(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Fe(s.integerValue||s.doubleValue),u=Fe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Lg(t.timestampValue,e.timestampValue);case 4:return Lg(Pl(t),Pl(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=co(s),u=co(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let f=0;f<l.length&&f<u.length;f++){const d=oe(l[f],u[f]);if(d!==0)return d}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Fe(s.latitude),Fe(o.latitude));return l!==0?l:oe(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Mg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,f,d;const p=s.fields||{},y=o.fields||{},P=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=y.value)===null||u===void 0?void 0:u.arrayValue,k=oe(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Mg(P,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===_a.mapValue&&o===_a.mapValue)return 0;if(s===_a.mapValue)return 1;if(o===_a.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),f=o.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const y=oe(u[p],d[p]);if(y!==0)return y;const P=Mi(l[u[p]],f[d[p]]);if(P!==0)return P}return oe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Lg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Hr(t),r=Hr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Mg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Mi(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Vi(t){return Bf(t)}function Bf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return co(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bf(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function jf(t){return!!t&&"integerValue"in t}function fd(t){return!!t&&"arrayValue"in t}function ja(t){return!!t&&"mapValue"in t}function MC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return No(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=bs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ja(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){No(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(bs(this.value))}}function ZE(t){const e=[];return No(t.fields,(n,r)=>{const i=new Be([n]);if(ja(r)){const s=ZE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Vt(e,0,pe.min(),pe.min(),pe.min(),bt.empty(),0)}static newFoundDocument(e,n,r,i){return new Vt(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,pe.min(),pe.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,pe.min(),pe.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.position=e,this.inclusive=n}}function Vg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Mi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n="asc"){this.field=e,this.dir=n}}function bC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{}class xe extends ew{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FC(e,n,r):n==="array-contains"?new zC(e,r):n==="in"?new $C(e,r):n==="not-in"?new HC(e,r):n==="array-contains-any"?new WC(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BC(e,r):new jC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mi(n,this.value)):n!==null&&Li(this.value)===Li(n)&&this.matchesComparison(Mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends ew{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ar(e,n)}matches(e){return tw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tw(t){return t.op==="and"}function nw(t){return UC(t)&&tw(t)}function UC(t){for(const e of t.filters)if(e instanceof ar)return!1;return!0}function zf(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Vi(t.value);if(nw(t))return t.filters.map(e=>zf(e)).join(",");{const e=t.filters.map(n=>zf(n)).join(",");return`${t.op}(${e})`}}function rw(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&en(r.value,i.value)}(t,e):t instanceof ar?function(r,i){return i instanceof ar&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&rw(o,i.filters[l]),!0):!1}(t,e):void Z()}function iw(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Vi(n.value)}`}(t):t instanceof ar?function(n){return n.op.toString()+" {"+n.getFilters().map(iw).join(" ,")+"}"}(t):"Filter"}class FC extends xe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class BC extends xe{constructor(e,n){super(e,"in",n),this.keys=sw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jC extends xe{constructor(e,n){super(e,"not-in",n),this.keys=sw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class zC extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fd(n)&&fo(n.arrayValue,this.value)}}class $C extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fo(this.value.arrayValue,n)}}class HC extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fo(this.value.arrayValue,n)}}class WC extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ug(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qC(t,e,n,r,i,s,o)}function hd(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ud(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),e.ue=n}return e.ue}function dd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bg(t.startAt,e.startAt)&&bg(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KC(t,e,n,r,i,s,o,l){return new cu(t,e,n,r,i,s,o,l)}function GC(t){return new cu(t)}function Fg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function QC(t){return t.collectionGroup!==null}function Us(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Nl(s,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new Nl(Be.keyField(),r))}return e.ce}function Dr(t){const e=le(t);return e.le||(e.le=JC(e,Us(t))),e.le}function JC(t,e){if(t.limitType==="F")return Ug(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nl(i.field,s)});const n=t.endAt?new Cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cl(t.startAt.position,t.startAt.inclusive):null;return Ug(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $f(t,e,n){return new cu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ow(t,e){return dd(Dr(t),Dr(e))&&t.limitType===e.limitType}function aw(t){return`${hd(Dr(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>iw(i)).join(", ")}]`),ud(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vi(i)).join(",")),`Target(${r})`}(Dr(t))}; limitType=${t.limitType})`}function pd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Us(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const f=Vg(o,l,u);return o.inclusive?f<=0:f<0}(r.startAt,Us(r),i)||r.endAt&&!function(o,l,u){const f=Vg(o,l,u);return o.inclusive?f>=0:f>0}(r.endAt,Us(r),i))}(t,e)}function XC(t){return(e,n)=>{let r=!1;for(const i of Us(t)){const s=YC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YC(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),f=l.data.field(s);return u!==null&&f!==null?Mi(u,f):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){No(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return XE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new mt(J.comparator);function Ol(){return ZC}const lw=new mt(J.comparator);function va(...t){let e=lw;for(const n of t)e=e.insert(n.key,n);return e}function uw(t){let e=lw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return Fs()}function cw(){return Fs()}function Fs(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const e2=new mt(J.comparator),t2=new Ze(J.comparator);function Xe(...t){let e=t2;for(const n of t)e=e.add(n);return e}const n2=new Ze(oe);function r2(){return n2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Al(e)?"-0":e}}function fw(t){return{integerValue:""+t}}function i2(t,e){return OC(e)?fw(e):md(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this._=void 0}}function s2(t,e,n){return t instanceof Dl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cd(s)&&(s=YE(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ho?dw(t,e):t instanceof po?pw(t,e):function(i,s){const o=hw(i,s),l=Bg(o)+Bg(i.Pe);return jf(o)&&jf(i.Pe)?fw(l):md(i.serializer,l)}(t,e)}function o2(t,e,n){return t instanceof ho?dw(t,e):t instanceof po?pw(t,e):n}function hw(t,e){return t instanceof xl?function(r){return jf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Dl extends fu{}class ho extends fu{constructor(e){super(),this.elements=e}}function dw(t,e){const n=mw(e);for(const r of t.elements)n.some(i=>en(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends fu{constructor(e){super(),this.elements=e}}function pw(t,e){let n=mw(e);for(const r of t.elements)n=n.filter(i=>!en(i,r));return{arrayValue:{values:n}}}class xl extends fu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Bg(t){return Fe(t.integerValue||t.doubleValue)}function mw(t){return fd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function a2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ho&&i instanceof ho||r instanceof po&&i instanceof po?xi(r.elements,i.elements,en):r instanceof xl&&i instanceof xl?en(r.Pe,i.Pe):r instanceof Dl&&i instanceof Dl}(t.transform,e.transform)}class l2{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hu{}function gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _w(t.key,_n.none()):new Oo(t.key,t.data,_n.none());{const n=t.data,r=bt.empty();let i=new Ze(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gr(t.key,r,new Ut(i.toArray()),_n.none())}}function u2(t,e,n){t instanceof Oo?function(i,s,o){const l=i.value.clone(),u=zg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(i,s,o){if(!za(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=zg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(yw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof Oo?function(s,o,l,u){if(!za(s.precondition,o))return l;const f=s.value.clone(),d=$g(s.fieldTransforms,u,o);return f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(s,o,l,u){if(!za(s.precondition,o))return l;const f=$g(s.fieldTransforms,u,o),d=o.data;return d.setAll(yw(s)),d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return za(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function c2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=hw(r.transform,i||null);s!=null&&(n===null&&(n=bt.empty()),n.set(r.field,s))}return n||null}function jg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xi(r,i,(s,o)=>a2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends hu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gr extends hu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zg(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,o2(o,l,n[i]))}return r}function $g(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,s2(s,o,e))}return r}class _w extends hu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class f2 extends hu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&u2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=gw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Xe())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>jg(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>jg(n,r))}}class gd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return e2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new gd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ee;function p2(t){switch(t){default:return Z();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function m2(t){if(t===void 0)return $r("GRPC error has no .code"),U.UNKNOWN;switch(t){case Re.OK:return U.OK;case Re.CANCELLED:return U.CANCELLED;case Re.UNKNOWN:return U.UNKNOWN;case Re.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Re.INTERNAL:return U.INTERNAL;case Re.UNAVAILABLE:return U.UNAVAILABLE;case Re.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Re.NOT_FOUND:return U.NOT_FOUND;case Re.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Re.ABORTED:return U.ABORTED;case Re.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Re.DATA_LOSS:return U.DATA_LOSS;default:return Z()}}(ee=Re||(Re={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new jE([4294967295,4294967295],0);class g2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _2(t,e){return Hf(t,e.toTimestamp())}function Ii(t){return Se(!!t),pe.fromTimestamp(function(n){const r=Hr(n);return new Me(r.seconds,r.nanos)}(t))}function vw(t,e){return Wf(t,e).canonicalString()}function Wf(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function v2(t){const e=Ee.fromString(t);return Se(P2(e)),e}function qf(t,e){return vw(t.databaseId,e.path)}function E2(t){const e=v2(t);return e.length===4?Ee.emptyPath():T2(e)}function w2(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function T2(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hg(t,e,n){return{name:qf(t,e),fields:n.value.mapValue.fields}}function I2(t,e){let n;if(e instanceof Oo)n={update:Hg(t,e.key,e.value)};else if(e instanceof _w)n={delete:qf(t,e.key)};else if(e instanceof Gr)n={update:Hg(t,e.key,e.data),updateMask:A2(e.fieldMask)};else{if(!(e instanceof f2))return Z();n={verify:qf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function S2(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ii(i.updateTime):Ii(s);return o.isEqual(pe.min())&&(o=Ii(s)),new l2(o,i.transformResults||[])}(n,e))):[]}function R2(t){let e=E2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const y=Ew(p);return y instanceof ar&&nw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(R){return new Nl(ei(R.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,ud(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,P=p.values||[];return new Cl(P,y)}(n.startAt));let f=null;return n.endAt&&(f=function(p){const y=!p.before,P=p.values||[];return new Cl(P,y)}(n.endAt)),KC(e,i,o,s,l,"F",u,f)}function Ew(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ei(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ei(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ar.create(n.compositeFilter.filters.map(r=>Ew(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function ei(t){return Be.fromServerFormat(t.fieldPath)}function A2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function P2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.ct=e}}function C2(t){const e=R2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$f(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(){this.un=new O2}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(or.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class O2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new bi(0)}static kn(){return new bi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,Ut.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Xe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Xe()){const i=Pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=va();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Xe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ol();const o=Fs(),l=function(){return Fs()}();return n.forEach((u,f)=>{const d=r.get(f.key);i.has(f.key)&&(d===void 0||d.mutation instanceof Gr)?s=s.insert(f.key,f):d!==void 0?(o.set(f.key,d.mutation.getFieldMask()),Bs(d.mutation,f,d.mutation.getFieldMask(),Me.now())):o.set(f.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((f,d)=>o.set(f,d)),n.forEach((f,d)=>{var p;return l.set(f,new x2(d,(p=o.get(f))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Fs();let i=new mt((o,l)=>o-l),s=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||Ut.empty();d=l.applyToLocalView(f,d),r.set(u,d);const p=(i.get(l.batchId)||Xe()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,d=u.value,p=cw();d.forEach(y=>{if(!s.has(y)){const P=gw(n.get(y),r.get(y));P!==null&&p.set(y,P),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,f,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Pr());let l=-1,u=s;return o.next(f=>V.forEach(f,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{u=u.insert(d,y)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,u,f,Xe())).next(d=>({batchId:l,changes:uw(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=va();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=va();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const f=function(p,y){return new cu(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,f)=>{const d=f.getKey();o.get(d)===null&&(o=o.insert(d,Vt.newInvalidDocument(d)))});let l=va();return o.forEach((u,f)=>{const d=s.get(u);d!==void 0&&Bs(d.mutation,f,Ut.empty(),Me.now()),pd(n,f)&&(l=l.insert(u,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ii(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:C2(i.bundledQuery),readTime:Ii(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.overlays=new mt(J.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Pr(),s=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new mt((f,d)=>f-d);const o=this.overlays.getIterator();for(;o.hasNext();){const f=o.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=s.get(f.largestBatchId);d===null&&(d=Pr(),s=s.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new d2(n,r));let s=this.Ir.get(n);s===void 0&&(s=Xe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.sessionToken=Zt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.Tr=new Ze(Oe.Er),this.dr=new Ze(Oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Oe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Ee([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Ee([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=Xe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(Oe.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new h2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Oe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(oe);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new J(s),0);let l=new Ze(oe);return this.br.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Oe(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.Mr=e,this.docs=function(){return new mt(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=Ol();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ol();const o=n.path,l=new J(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!o.isPrefixOf(f.path))break;f.path.length>o.length+1||PC(AC(d),r)<=0||(i.has(d.key)||pd(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new B2(this)}getSize(e){return V.resolve(this.size)}}class B2 extends D2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.persistence=e,this.Nr=new Gi(n=>hd(n),dd),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yd,this.targetCount=0,this.kr=bi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new JE(0),this.Kr=!1,this.Kr=!0,this.$r=new b2,this.referenceDelegate=e(this),this.Ur=new j2(this),this.indexManager=new N2,this.remoteDocumentCache=function(i){return new F2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new k2(n),this.Gr=new M2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new V2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new U2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new $2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $2 extends CC{constructor(e){super(),this.currentSequenceNumber=e}}class _d{constructor(e){this.persistence=e,this.Jr=new yd,this.Yr=null}static Zr(e){return new _d(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Xe(),i=Xe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jR()?8:NC(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new H2;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(_s()<=Y.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(_s()<=Y.DEBUG&&H("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(_s()<=Y.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(n))):V.resolve())}Yi(e,n){if(Fg(n))return V.resolve(null);let r=Dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$f(n,null,"F"),r=Dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Xe(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.ts(n,l);return this.ns(n,f,o,u.readTime)?this.Yi(e,$f(n,null,"F")):this.rs(e,f,n,u)}))})))}Zi(e,n,r,i){return Fg(n)||i.isEqual(pe.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(_s()<=Y.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vs(n)),this.rs(e,o,n,RC(i,-1)).next(l=>l))})}ts(e,n){let r=new Ze(XC(e));return n.forEach((i,s)=>{pd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return _s()<=Y.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,or.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new mt(oe),this._s=new Gi(s=>hd(s),dd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function K2(t,e,n,r){return new q2(t,e,n,r)}async function ww(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Xe();for(const f of i){o.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of s){l.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(f=>({hs:f,removedBatchIds:o,addedBatchIds:l}))})})}function G2(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,f,d){const p=f.batch,y=p.keys();let P=V.resolve();return y.forEach(R=>{P=P.next(()=>d.getEntry(u,R)).next(k=>{const C=f.docVersions.get(R);Se(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),d.addEntry(k)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Xe();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Q2(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function J2(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Wg{constructor(){this.activeTargetIds=r2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class X2{constructor(){this.so=new Wg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea=null;function Rc(){return Ea===null?Ea=function(){return 268435456+Math.round(2147483648*Math.random())}():Ea++,"0x"+Ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class tN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Rc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,s,o),this.No(n,u,f,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Rl("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ki}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Z2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Rc();return new Promise((o,l)=>{const u=new zE;u.setWithCredentials(!0),u.listenOnce($E.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ba.NO_ERROR:const d=u.getResponseJson();H(Ge,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ba.TIMEOUT:H(Ge,`RPC '${e}' ${s} timed out`),l(new q(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const p=u.getStatus();if(H(Ge,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const P=y==null?void 0:y.error;if(P&&P.status&&P.message){const R=function(C){const w=C.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(w)>=0?w:U.UNKNOWN}(P.status);l(new q(R,P.message))}else l(new q(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(U.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(Ge,`RPC '${e}' ${s} completed.`)}});const f=JSON.stringify(i);H(Ge,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",f,r,15)})}Bo(e,n,r){const i=Rc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qE(),l=WE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(Ge,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let y=!1,P=!1;const R=new eN({Io:C=>{P?H(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(y||(H(Ge,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),H(Ge,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),k=(C,w,_)=>{C.listen(w,T=>{try{_(T)}catch(x){setTimeout(()=>{throw x},0)}})};return k(p,As.EventType.OPEN,()=>{P||(H(Ge,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),k(p,As.EventType.CLOSE,()=>{P||(P=!0,H(Ge,`RPC '${e}' stream ${i} transport closed`),R.So())}),k(p,As.EventType.ERROR,C=>{P||(P=!0,Rl(Ge,`RPC '${e}' stream ${i} transport errored:`,C),R.So(new q(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,As.EventType.MESSAGE,C=>{var w;if(!P){const _=C.data[0];Se(!!_);const T=_,x=T.error||((w=T[0])===null||w===void 0?void 0:w.error);if(x){H(Ge,`RPC '${e}' stream ${i} received error:`,x);const M=x.status;let F=function(v){const I=Re[v];if(I!==void 0)return m2(I)}(M),E=x.message;F===void 0&&(F=U.INTERNAL,E="Unknown error status: "+M+" with message "+x.message),P=!0,R.So(new q(F,E)),p.close()}else H(Ge,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),k(l,HE.STAT_EVENT,C=>{C.stat===Ff.PROXY?H(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Ff.NOPROXY&&H(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return new g2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Tw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rN extends nN{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=S2(e.writeResults,e.commitTime),r=Ii(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=w2(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>I2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Wf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Wf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($r(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{xo(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=le(u);f.L_.add(4),await Do(f),f.q_.set("Unknown"),f.L_.delete(4),await pu(f)}(this))})}),this.q_=new sN(r,i)}}async function pu(t){if(xo(t))for(const e of t.B_)await e(!0)}async function Do(t){for(const e of t.B_)await e(!1)}function xo(t){return le(t).L_.size===0}async function Iw(t,e,n){if(!uu(e))throw e;t.L_.add(1),await Do(t),t.q_.set("Offline"),n||(n=()=>Q2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await pu(t)})}function Sw(t,e){return e().catch(n=>Iw(t,n,e))}async function mu(t){const e=le(t),n=lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;aN(e);)try{const i=await J2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,lN(e,i)}catch(i){await Iw(e,i)}Rw(e)&&Aw(e)}function aN(t){return xo(t)&&t.O_.length<10}function lN(t,e){t.O_.push(e);const n=lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Rw(t){return xo(t)&&!lr(t).n_()&&t.O_.length>0}function Aw(t){lr(t).start()}async function uN(t){lr(t).p_()}async function cN(t){const e=lr(t);for(const n of t.O_)e.m_(n.mutations)}async function fN(t,e,n){const r=t.O_.shift(),i=gd.from(r,e,n);await Sw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mu(t)}async function hN(t,e){e&&lr(t).V_&&await async function(r,i){if(function(o){return p2(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();lr(r).s_(),await Sw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mu(r)}}(t,e),Rw(t)&&Aw(t)}async function Kg(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=xo(n);n.L_.add(3),await Do(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await pu(n)}async function dN(t,e){const n=le(t);e?(n.L_.delete(2),await pu(n)):e||(n.L_.add(2),await Do(n),n.q_.set("Unknown"))}function lr(t){return t.U_||(t.U_=function(n,r,i){const s=le(n);return s.w_(),new rN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:uN.bind(null,t),mo:hN.bind(null,t),f_:cN.bind(null,t),g_:fN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await mu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ed(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pw(t,e){if($r("AsyncQueue",`${e}: ${t}`),uu(t))return new q(U.UNAVAILABLE,`${e}: ${t}`);throw t}class pN{constructor(){this.queries=Gg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=le(n),s=i.queries;i.queries=Gg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(U.ABORTED,"Firestore shutting down"))}}function Gg(){return new Gi(t=>aw(t),ow)}function mN(t){t.Y_.forEach(e=>{e.next()})}var Qg,Jg;(Jg=Qg||(Qg={})).ea="default",Jg.Cache="cache";class gN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Gi(l=>aw(l),ow),this.Ma=new Map,this.xa=new Set,this.Oa=new mt(J.comparator),this.Na=new Map,this.La=new yd,this.Ba={},this.ka=new Map,this.qa=bi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function yN(t,e,n){const r=wN(t);try{const i=await function(o,l){const u=le(o),f=Me.now(),d=l.reduce((P,R)=>P.add(R.key),Xe());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",P=>{let R=Ol(),k=Xe();return u.cs.getEntries(P,d).next(C=>{R=C,R.forEach((w,_)=>{_.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(P,R)).next(C=>{p=C;const w=[];for(const _ of l){const T=c2(_,p.get(_.key).overlayedDocument);T!=null&&w.push(new Gr(_.key,T,ZE(T.value.mapValue),_n.exists(!0)))}return u.mutationQueue.addMutationBatch(P,f,w,l)}).next(C=>{y=C;const w=C.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(P,C.batchId,w)})}).then(()=>({batchId:y.batchId,changes:uw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let f=o.Ba[o.currentUser.toKey()];f||(f=new mt(oe)),f=f.insert(l,u),o.Ba[o.currentUser.toKey()]=f}(r,i.batchId,n),await gu(r,i.changes),await mu(r.remoteStore)}catch(i){const s=Pw(i,"Failed to persist write");n.reject(s)}}function Xg(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=le(o);u.onlineState=l;let f=!1;u.queries.forEach((d,p)=>{for(const y of p.j_)y.Z_(l)&&(f=!0)}),f&&mN(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _N(t,e){const n=le(t),r=e.batch.batchId;try{const i=await G2(n.localStore,e);Cw(n,r,null),kw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gu(n,i)}catch(i){await QE(i)}}async function vN(t,e,n){const r=le(t);try{const i=await function(o,l){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return u.mutationQueue.lookupMutationBatch(f,l).next(p=>(Se(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(f,p))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>u.localDocuments.getDocuments(f,d))})}(r.localStore,e);Cw(r,e,n),kw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gu(r,i)}catch(i){await QE(i)}}function kw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Cw(t,e,n){const r=le(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function gu(t,e,n){const r=le(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const p=f?!f.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(f){i.push(f);const p=vd.Wi(u.targetId,f);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,f){const d=le(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(f,y=>V.forEach(y.$i,P=>d.persistence.referenceDelegate.addReference(p,y.targetId,P)).next(()=>V.forEach(y.Ui,P=>d.persistence.referenceDelegate.removeReference(p,y.targetId,P)))))}catch(p){if(!uu(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of f){const y=p.targetId;if(!p.fromCache){const P=d.os.get(y),R=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(y,k)}}}(r.localStore,s))}async function EN(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await ww(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gu(n,r.hs)}}function wN(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_N.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vN.bind(null,e),e}class Ll{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return K2(this.persistence,new W2,e.initialUser,this.serializer)}Ga(e){return new z2(_d.Zr,this.serializer)}Wa(e){return new X2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ll.provider={build:()=>new Ll};class Kf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EN.bind(null,this.syncEngine),await dN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pN}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),r=function(s){return new tN(s)}(e.databaseInfo);return function(s,o,l,u){return new iN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new oN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xg(this.syncEngine,n,0),function(){return qg.D()?new qg:new Y2}())}createSyncEngine(e,n){return function(i,s,o,l,u,f,d){const p=new gN(i,s,o,l,u,f);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=le(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Do(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Kf.provider={build:()=>new Kf};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=GE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pw(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ww(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kg(e.remoteStore,i)),t._onlineComponents=e}async function IN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Rl("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new Ll)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Pc(t,new Ll);return t._offlineComponents}async function SN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Yg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Yg(t,new Kf))),t._onlineComponents}function RN(t){return SN(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t,e,n){if(!n)throw new q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AN(t,e,n,r){if(e===!0&&r===!0)throw new q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ey(t){if(!J.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ty(t){if(J.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Dw(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wd(t);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ny({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ny(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gC;switch(r.type){case"firstParty":return new EC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zg.get(n);r&&(H("ComponentProvider","Removing Datastore"),Zg.delete(n),r.terminate())}(this),Promise.resolve()}}function PN(t,e,n,r={}){var i;const s=(t=Dw(t,yu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Rl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Qe.MOCK_USER;else{l=LR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Qe(f)}t._authCredentials=new yC(new KE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Td(this.firestore,e,this._query)}}class vn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class rr extends Td{constructor(e,n,r){super(e,n,GC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new J(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function sO(t,e,...n){if(t=pt(t),Ow("collection","path",e),t instanceof yu){const r=Ee.fromString(e,...n);return ty(r),new rr(t,null,r)}{if(!(t instanceof vn||t instanceof rr))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return ty(r),new rr(t.firestore,null,r)}}function kN(t,e,...n){if(t=pt(t),arguments.length===1&&(e=GE.newId()),Ow("doc","path",e),t instanceof yu){const r=Ee.fromString(e,...n);return ey(r),new vn(t,null,new J(r))}{if(!(t instanceof vn||t instanceof rr))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return ey(r),new vn(t.firestore,t instanceof rr?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Tw(this,"async_queue_retry"),this.Vu=()=>{const r=Ac();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ac();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Or;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!uu(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw $r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ed.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class xw extends yu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ry,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ry(e),this._firestoreClient=void 0,await e}}}function oO(t,e){const n=typeof t=="object"?t:iE(),r=typeof t=="string"?t:"(default)",i=Yh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=DR("firestore");s&&PN(i,...s)}return i}function CN(t){if(t._terminated)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NN(t),t._firestoreClient}function NN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,f,d){return new LC(l,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Nw(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new TN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mo(Zt.fromBase64String(e))}catch(n){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mo(Zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=/^__.*__$/;class DN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}function Uw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Id{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Id(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ml(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Uw(this.Cu)&&ON.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class xN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}Qu(e,n,r,i=!1){return new Id({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function LN(t){const e=t._freezeSettings(),n=du(t._databaseId);return new xN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MN(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);zw("Data must be an object, but it was:",o,r);const l=Bw(r,o);let u,f;if(s.merge)u=new Ut(o.fieldMask),f=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const y=VN(e,p,n);if(!o.contains(y))throw new q(U.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);FN(d,y)||d.push(y)}u=new Ut(d),f=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,f=o.fieldTransforms;return new DN(new bt(l),u,f)}function Fw(t,e){if(jw(t=pt(t)))return zw("Unsupported field value:",e,t),Bw(t,e);if(t instanceof Mw)return function(r,i){if(!Uw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Fw(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:Hf(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hf(i.serializer,s)}}if(r instanceof Vw)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mo)return{bytesValue:y2(i.serializer,r._byteString)};if(r instanceof vn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vw(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bw)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return md(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${wd(r)}`)}(t,e)}function Bw(t,e){const n={};return XE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):No(t,(r,i)=>{const s=Fw(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Vw||t instanceof mo||t instanceof vn||t instanceof Mw||t instanceof bw)}function zw(t,e,n){if(!jw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function VN(t,e,n){if((e=pt(e))instanceof Lw)return e._internalPath;if(typeof e=="string")return UN(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const bN=new RegExp("[~\\*/\\[\\]]");function UN(t,e,n){if(e.search(bN)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lw(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(U.INVALID_ARGUMENT,l+t+u)}function FN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function aO(t,e){const n=Dw(t.firestore,xw),r=kN(t),i=BN(t.converter,e);return jN(n,[MN(LN(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function jN(t,e){return function(r,i){const s=new Or;return r.asyncQueue.enqueueAndForget(async()=>yN(await RN(r),i,s)),s.promise}(CN(t),e)}(function(e,n=!0){(function(i){Ki=i})(Wi),Oi(new Fr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new xw(new _C(r.getProvider("auth-internal")),new TC(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kl(f.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nr(Og,"4.7.3",e),nr(Og,"4.7.3","esm2017")})();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Pe=(t,e)=>{const n=z.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...f},d)=>z.createElement("svg",{ref:d,...zN,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${$N(t)}`,l].join(" "),...f},[...e.map(([p,y])=>z.createElement(p,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=Pe("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=Pe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=Pe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=Pe("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=Pe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=Pe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=Pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=Pe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=Pe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=Pe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=Pe("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=Pe("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=Pe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=Pe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=Pe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=Pe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=Pe("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=Pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=Pe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=Pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);export{lO as A,fO as B,pO as C,FS as D,QI as E,mO as H,QN as L,yO as M,qN as N,vO as P,KN as R,TO as S,RO as T,AO as U,wO as a,SO as b,IO as c,cO as d,uO as e,EO as f,hO as g,dO as h,Ne as i,WN as j,gO as k,_O as l,QA as m,eO as n,oO as o,JN as p,YN as q,z as r,XN as s,ZN as t,wo as u,sO as v,aO as w,Tv as x,PO as y,GN as z};
