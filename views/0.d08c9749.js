(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{304:function(t,i,e){"use strict";
/*!
 * better-normal-scroll v1.10.2
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */var s=function(){return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],s=!0,o=!1,n=void 0;try{for(var r,h=t[Symbol.iterator]();!(s=(r=h.next()).done)&&(e.push(r.value),!i||e.length!==i);s=!0);}catch(t){o=!0,n=t}finally{try{!s&&h.return&&h.return()}finally{if(o)throw n}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)};var n="undefined"!=typeof window,r=n&&navigator.userAgent.toLowerCase(),h=r&&/wechatdevtools/.test(r),a=r&&r.indexOf("android")>0;function l(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function c(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var n=e[o];for(var r in n)t[r]=n[r]}return t}function p(t){return void 0===t||null===t}var u=n&&document.createElement("div").style,d=function(){if(!n)return!1;var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==u[t[i]])return i;return!1}();function g(t){return!1!==d&&("standard"===d?"transitionEnd"===t?"transitionend":t:d+t.charAt(0).toUpperCase()+t.substr(1))}function f(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s})}function m(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s})}function v(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return{left:i,top:e}}var y=g("transform"),w=n&&g("perspective")in u,x=n&&("ontouchstart"in window||h),T=!1!==y,b=n&&g("transition")in u,_={transform:y,transitionTimingFunction:g("transitionTimingFunction"),transitionDuration:g("transitionDuration"),transitionProperty:g("transitionProperty"),transitionDelay:g("transitionDelay"),transformOrigin:g("transformOrigin"),transitionEnd:g("transitionEnd")},S=1,P={touchstart:S,touchmove:S,touchend:S,mousedown:2,mousemove:2,mouseup:2};function M(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function X(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}function Y(t,i){t.removeChild(i)}var D={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:800,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.001,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:x,disableTouch:!x,observeDOM:!0,autoBlur:!0,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,mouseWheel:!1,stopPropagation:!1};var E={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}};function k(t,i,e,s,o,n){var r=t-i,h=Math.abs(r)/e,a=n.deceleration,l=n.itemHeight,c=n.swipeBounceTime,p=n.wheel,u=n.swipeTime,d=p?4:15,g=t+h/a*(r<0?-1:1);return p&&l&&(g=Math.round(g/l)*l),g<s?(g=o?Math.max(s-o/4,s-o/d*h):s,u=c):g>0&&(g=o?Math.min(o/4,o/d*h):0,u=c),{destination:Math.round(g),duration:u}}function W(){}var H=n?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)}:W,O=n?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}:W,L=1,z=-1,C=1,A=-1,I=1,F=3;function R(t){console.error("[BScroll warn]: "+t)}function U(t){var i=document.createElement("div"),e=document.createElement("div");return i.style.cssText="position:absolute;z-index:9999;pointerEvents:none",e.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",e.className="bscroll-indicator","horizontal"===t?(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",e.style.height="100%",i.className="bscroll-horizontal-scrollbar"):(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",e.style.width="100%",i.className="bscroll-vertical-scrollbar"),i.style.cssText+=";overflow:hidden",i.appendChild(e),i}function B(t,i){this.wrapper=i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.direction=i.direction,i.fade?(this.visible=0,this.wrapperStyle.opacity="0"):this.visible=1,this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.x=0,this.y=0,i.interactive&&this._addDOMEvents()}function N(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||R("Can not resolve the wrapper DOM."),this.scroller=this.wrapper.children[0],this.scroller||R("The wrapper need at least one child element to be scroller."),this.scrollerStyle=this.scroller.style,this._init(t,i)}B.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t)}},B.prototype.refresh=function(){this.transitionTime(),this._calculate(),this.updatePosition()},B.prototype.fade=function(t,i){var e=this;if(!i||this.visible){var s=t?250:500;t=t?"1":"0",this.wrapperStyle[_.transitionDuration]=s+"ms",clearTimeout(this.fadeTimeout),this.fadeTimeout=setTimeout(function(){e.wrapperStyle.opacity=t,e.visible=+t},0)}},B.prototype.updatePosition=function(){if("vertical"===this.direction){var t=Math.round(this.sizeRatioY*this.scroller.y);if(t<0){this.transitionTime(500);var i=Math.max(this.indicatorHeight+3*t,8);this.indicatorStyle.height=i+"px",t=0}else if(t>this.maxPosY){this.transitionTime(500);var e=Math.max(this.indicatorHeight-3*(t-this.maxPosY),8);this.indicatorStyle.height=e+"px",t=this.maxPosY+this.indicatorHeight-e}else this.indicatorStyle.height=this.indicatorHeight+"px";this.y=t,this.scroller.options.useTransform?this.indicatorStyle[_.transform]="translateY("+t+"px)"+this.scroller.translateZ:this.indicatorStyle.top=t+"px"}else{var s=Math.round(this.sizeRatioX*this.scroller.x);if(s<0){this.transitionTime(500);var o=Math.max(this.indicatorWidth+3*s,8);this.indicatorStyle.width=o+"px",s=0}else if(s>this.maxPosX){this.transitionTime(500);var n=Math.max(this.indicatorWidth-3*(s-this.maxPosX),8);this.indicatorStyle.width=n+"px",s=this.maxPosX+this.indicatorWidth-n}else this.indicatorStyle.width=this.indicatorWidth+"px";this.x=s,this.scroller.options.useTransform?this.indicatorStyle[_.transform]="translateX("+s+"px)"+this.scroller.translateZ:this.indicatorStyle.left=s+"px"}},B.prototype.transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.indicatorStyle[_.transitionDuration]=t+"ms"},B.prototype.transitionTimingFunction=function(t){this.indicatorStyle[_.transitionTimingFunction]=t},B.prototype.destroy=function(){this._removeDOMEvents(),this.wrapper.parentNode.removeChild(this.wrapper)},B.prototype._start=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=l(),this._handleMoveEvents(f),this.scroller.trigger("beforeScrollStart")},B.prototype._move=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.moved||this.scroller.trigger("scrollStart"),this.moved=!0;var e=i.pageX-this.lastPointX;this.lastPointX=i.pageX;var s=i.pageY-this.lastPointY;this.lastPointY=i.pageY;var o=this.x+e,n=this.y+s;this._pos(o,n)},B.prototype._end=function(t){if(this.initiated){this.initiated=!1,t.preventDefault(),t.stopPropagation(),this._handleMoveEvents(m);var i=this.scroller.options.snap;if(i){var e=i.speed,s=i.easing,o=void 0===s?E.bounce:s,n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),r=e||Math.max(Math.max(Math.min(Math.abs(this.scroller.x-n.x),1e3),Math.min(Math.abs(this.scroller.y-n.y),1e3)),300);this.scroller.x===n.x&&this.scroller.y===n.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=n,this.scroller.scrollTo(n.x,n.y,r,o))}this.moved&&this.scroller.trigger("scrollEnd",{x:this.scroller.x,y:this.scroller.y})}},B.prototype._pos=function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=Math.round(t/this.sizeRatioX),i=Math.round(i/this.sizeRatioY),this.scroller.scrollTo(t,i),this.scroller.trigger("scroll",{x:this.scroller.x,y:this.scroller.y})},B.prototype._calculate=function(){if("vertical"===this.direction){var t=this.wrapper.clientHeight;this.indicatorHeight=Math.max(Math.round(t*t/(this.scroller.scrollerHeight||t||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=t-this.indicatorHeight,this.sizeRatioY=this.maxPosY/this.scroller.maxScrollY}else{var i=this.wrapper.clientWidth;this.indicatorWidth=Math.max(Math.round(i*i/(this.scroller.scrollerWidth||i||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=i-this.indicatorWidth,this.sizeRatioX=this.maxPosX/this.scroller.maxScrollX}},B.prototype._addDOMEvents=function(){var t=f;this._handleDOMEvents(t)},B.prototype._removeDOMEvents=function(){var t=m;this._handleDOMEvents(t),this._handleMoveEvents(t)},B.prototype._handleMoveEvents=function(t){this.scroller.options.disableTouch||t(window,"touchmove",this),this.scroller.options.disableMouse||t(window,"mousemove",this)},B.prototype._handleDOMEvents=function(t){this.scroller.options.disableTouch||(t(this.indicator,"touchstart",this),t(window,"touchend",this)),this.scroller.options.disableMouse||(t(this.indicator,"mousedown",this),t(window,"mouseup",this))},function(t){t.prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.options.observeDOM&&this._initDOMObserver(),this.options.autoBlur&&this._handleAutoBlur(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable()},t.prototype._handleOptions=function(t){this.options=c({},D,t),this.translateZ=this.options.HWCompositing&&w?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&b,this.options.useTransform=this.options.useTransform&&T,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap")},t.prototype._addDOMEvents=function(){var t=f;this._handleDOMEvents(t)},t.prototype._removeDOMEvents=function(){var t=m;this._handleDOMEvents(t)},t.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),x&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,_.transitionEnd,this)},t.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel(),this.options.mouseWheel&&this._initMouseWheel()},t.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var t=this,i=!1;Object.defineProperty(this,"isInTransition",{get:function(){return i},set:function(e){i=e;for(var s=t.scroller.children.length?t.scroller.children:[t.scroller],o=i&&!t.pulling?"none":"auto",n=0;n<s.length;n++)s[n].style.pointerEvents=o}})}},t.prototype._handleAutoBlur=function(){this.on("beforeScrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()})},t.prototype._initDOMObserver=function(){var t=this;if("undefined"!=typeof MutationObserver){var i=void 0,e=new MutationObserver(function(e){if(!t._shouldNotRefresh()){for(var s=!1,o=!1,n=0;n<e.length;n++){var r=e[n];if("attributes"!==r.type){s=!0;break}if(r.target!==t.scroller){o=!0;break}}s?t.refresh():o&&(clearTimeout(i),i=setTimeout(function(){t._shouldNotRefresh()||t.refresh()},60))}});e.observe(this.scroller,{attributes:!0,childList:!0,subtree:!0}),this.on("destroy",function(){e.disconnect()})}else this._checkDOMUpdate()},t.prototype._shouldNotRefresh=function(){var t=this.x>0||this.x<this.maxScrollX||this.y>0||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},t.prototype._checkDOMUpdate=function(){var t=M(this.scroller),i=t.width,e=t.height;function s(){var o=this;setTimeout(function(){(function(){if(!this.destroyed){var o=(t=M(this.scroller)).width,n=t.height;i===o&&e===n||this.refresh(),i=o,e=n,s.call(this)}}).call(o)},1e3)}s.call(this)},t.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(X(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation()));break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._onMouseWheel(t)}},t.prototype.refresh=function(){var t=M(this.wrapper);this.wrapperWidth=t.width,this.wrapperHeight=t.height;var i=M(this.scroller);this.scrollerWidth=i.width,this.scrollerHeight=i.height;var e=this.options.wheel;e?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=e.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=v(this.wrapper),this.trigger("refresh"),this.resetPosition()},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1}}(N),function(t){t.prototype._start=function(t){var i=P[t.type];if((i===S||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!X(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=l(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart")}},t.prototype._move=function(t){if(this.enabled&&!this.destroyed&&P[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,s=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=s;var o=Math.abs(this.distX),n=Math.abs(this.distY),r=l();if(!(r-this.endTime>this.options.momentumLimitTime&&n<this.options.momentumLimitDistance&&o<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(o>n+this.options.directionLockThreshold?this.directionLocked="h":n>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);s=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0}e=this.hasHorizontalScroll?e:0,s=this.hasVerticalScroll?s:0,this.movingDirectionX=e>0?A:e<0?C:0,this.movingDirectionY=s>0?z:s<0?L:0;var h=this.x+e,a=this.y+s,c=!1,p=!1,u=!1,d=!1,g=this.options.bounce;!1!==g&&(c=void 0===g.top||g.top,p=void 0===g.bottom||g.bottom,u=void 0===g.left||g.left,d=void 0===g.right||g.right),(h>0||h<this.maxScrollX)&&(h=h>0&&u||h<this.maxScrollX&&d?this.x+e/3:h>0?0:this.maxScrollX),(a>0||a<this.maxScrollY)&&(a=a>0&&c||a<this.maxScrollY&&p?this.y+s/3:a>0?0:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(h,a),r-this.startTime>this.options.momentumLimitTime&&(this.startTime=r,this.startX=this.x,this.startY=this.y,this.options.probeType===I&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>I&&this.trigger("scroll",{x:this.x,y:this.y});var f=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,m=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,v=this.pointX-f,y=this.pointY-m;(v>document.documentElement.clientWidth-this.options.momentumLimitDistance||v<this.options.momentumLimitDistance||y<this.options.momentumLimitDistance||y>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},t.prototype._end=function(t){if(this.enabled&&!this.destroyed&&P[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!X(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),e=Math.round(this.y),s=i-this.absStartX,o=e-this.absStartY;if(this.directionX=s>0?A:s<0?C:0,this.directionY=o>0?z:o<0?L:0,!this.options.pullDownRefresh||!this._checkPullDown())if(this._checkClick(t))this.trigger("scrollCancel");else if(!this.resetPosition(this.options.bounceTime,E.bounce)){this.scrollTo(i,e),this.endTime=l();var n=this.endTime-this.startTime,r=Math.abs(i-this.startX),h=Math.abs(e-this.startY);if(this._events.flick&&n<this.options.flickLimitTime&&r<this.options.flickLimitDistance&&h<this.options.flickLimitDistance)this.trigger("flick");else{var a=0;if(this.options.momentum&&n<this.options.momentumLimitTime&&(h>this.options.momentumLimitDistance||r>this.options.momentumLimitDistance)){var c=!1,p=!1,u=!1,d=!1,g=this.options.bounce;!1!==g&&(c=void 0===g.top||g.top,p=void 0===g.bottom||g.bottom,u=void 0===g.left||g.left,d=void 0===g.right||g.right);var f=this.directionX===A&&u||this.directionX===C&&d?this.wrapperWidth:0,m=this.directionY===z&&c||this.directionY===L&&p?this.wrapperHeight:0,v=this.hasHorizontalScroll?k(this.x,this.startX,n,this.maxScrollX,f,this.options):{destination:i,duration:0},y=this.hasVerticalScroll?k(this.y,this.startY,n,this.maxScrollY,m,this.options):{destination:e,duration:0};i=v.destination,e=y.destination,a=Math.max(v.duration,y.duration),this.isInTransition=!0}else this.options.wheel&&(e=Math.round(e/this.itemHeight)*this.itemHeight,a=this.options.wheel.adjustTime||400);var w=E.swipe;if(this.options.snap){var x=this._nearestSnap(i,e);this.currentPage=x,a=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-x.x),1e3),Math.min(Math.abs(e-x.y),1e3)),300),i=x.x,e=x.y,this.directionX=0,this.directionY=0,w=this.options.snap.easing||E.bounce}if(i!==this.x||e!==this.y)return(i>0||i<this.maxScrollX||e>0||e<this.maxScrollY)&&(w=E.swipeBounce),void this.scrollTo(i,e,a,w);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y})}}}},t.prototype._checkClick=function(t){var i=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,!this.moved){if(this.options.wheel){if(this.target&&this.target.className===this.options.wheel.wheelWrapperClass){var e=Math.abs(Math.round(this.y/this.itemHeight)),s=Math.round((this.pointY+v(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[e+s]}return this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,E.swipe),!0}return!i&&(this.options.tap&&function(t,i){var e=document.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)}(t,this.options.tap),this.options.click&&!X(t.target,this.options.preventDefaultException)&&function(t){var i=void 0;"mouseup"===t.type||"mousecancel"===t.type?i=t:"touchend"!==t.type&&"touchcancel"!==t.type||(i=t.changedTouches[0]);var e={};i&&(e.screenX=i.screenX||0,e.screenY=i.screenY||0,e.clientX=i.clientX||0,e.clientY=i.clientY||0);var s=void 0,o="click",n=!0,r=!0;if("undefined"!=typeof MouseEvent)try{s=new MouseEvent(o,c({bubbles:n,cancelable:r},e))}catch(t){h()}else h();function h(){(s=document.createEvent("Event")).initEvent(o,n,r),c(s,e)}s.forwardedTouchEvent=!0,s._constructed=!0,t.target.dispatchEvent(s)}(t),!0)}return!1},t.prototype._resize=function(){var t=this;this.enabled&&(a&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))},t.prototype._startProbe=function(){O(this.probeTimer),this.probeTimer=H(function i(){var e=t.getComputedPosition();t.trigger("scroll",e),t.isInTransition?t.probeTimer=H(i):t.trigger("scrollEnd",e)});var t=this},t.prototype._transitionProperty=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";this.scrollerStyle[_.transitionProperty]=t},t.prototype._transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[_.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[_.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t)},t.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[_.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[_.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t)},t.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.pulling||this.resetPosition(this.options.bounceTime,E.bounce)||(this.isInTransition=!1,this.options.probeType!==F&&this.trigger("scrollEnd",{x:this.x,y:this.y})))},t.prototype._translate=function(t,i){if(function(t,i){if(!t)throw new Error("[BScroll] "+i)}(!p(t)&&!p(i),"Oops! translate x or y is null or undefined. please check your code."),this.options.useTransform?this.scrollerStyle[_.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var e=this.options.wheel.rotate,s=void 0===e?25:e,o=0;o<this.items.length;o++){var n=s*(i/this.itemHeight+o);this.items[o].style[_.transform]="rotateX("+n+"deg)"}if(this.x=t,this.y=i,this.indicators)for(var r=0;r<this.indicators.length;r++)this.indicators[r].updatePosition()},t.prototype._animate=function(t,i,e,s){var o=this,n=this.x,r=this.y,h=l(),a=h+e;this.isAnimating=!0,O(this.animateTimer),function c(){var p=l();if(p>=a)return o.isAnimating=!1,o._translate(t,i),void(o.pulling||o.resetPosition(o.options.bounceTime)||o.trigger("scrollEnd",{x:o.x,y:o.y}));var u=s(p=(p-h)/e),d=(t-n)*u+n,g=(i-r)*u+r;o._translate(d,g),o.isAnimating&&(o.animateTimer=H(c)),o.options.probeType===F&&o.trigger("scroll",{x:o.x,y:o.y})}()},t.prototype.scrollBy=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:E.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s)},t.prototype.scrollTo=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:E.bounce;this.isInTransition=this.options.useTransition&&e>0&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionProperty(),this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&this.options.probeType===F&&this._startProbe(),this.options.wheel&&(i>0?this.selectedIndex=0:i<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn)},t.prototype.scrollToElement=function(t,i,e,s,o){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.className===this.options.wheel.wheelItemClass)){var n=v(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=e||0,n.top-=s||0,n.left=n.left>0?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top,this.options.wheel&&(n.top=Math.round(n.top/this.itemHeight)*this.itemHeight),this.scrollTo(n.left,n.top,i,o)}},t.prototype.resetPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.bounce,e=this.x,s=Math.round(e);!this.hasHorizontalScroll||s>0?e=0:s<this.maxScrollX&&(e=this.maxScrollX);var o=this.y,n=Math.round(o);return!this.hasVerticalScroll||n>0?o=0:n<this.maxScrollY&&(o=this.maxScrollY),(e!==this.x||o!==this.y)&&(this.scrollTo(e,o,t,i),!0)},t.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return this.options.useTransform?(i=+((t=t[_.transform].split(")")[0].split(", "))[12]||t[4]),e=+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),e=+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},t.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0)},t.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),this._removeDOMEvents(),this._events={}}}(N),function(t){t.prototype.on=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e])},t.prototype.once=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;function s(){this.off(t,s),i.apply(e,arguments)}s.fn=i,this.on(t,s)},t.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&(e[s][0]=void 0)},t.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,n=[].concat(o(i)),r=0;r<e;r++){var h=n[r],a=s(h,2),l=a[0],c=a[1];l&&l.apply(c,[].slice.call(arguments,1))}}}(N),function(t){t.prototype._initSnap=function(){var t=this;this.currentPage={};var i=this.options.snap;if(i.loop){var e=this.scroller.children;e.length>1?(function(t,i){i.firstChild?function(t,i){i.parentNode.insertBefore(t,i)}(t,i.firstChild):i.appendChild(t)}(e[e.length-1].cloneNode(!0),this.scroller),this.scroller.appendChild(e[1].cloneNode(!0))):i.loop=!1}var s=i.el;"string"==typeof s&&(s=this.scroller.querySelectorAll(s)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var e=i.stepX||t.wrapperWidth,o=i.stepY||t.wrapperHeight,n=0,r=void 0,h=void 0,a=void 0,l=0,c=void 0,p=0,u=void 0,d=void 0;if(s)for(c=s.length,u=-1;l<c;l++)d=M(s[l]),(0===l||d.left<=M(s[l-1]).left)&&(p=0,u++),t.pages[p]||(t.pages[p]=[]),n=Math.max(-d.left,t.maxScrollX),r=Math.max(-d.top,t.maxScrollY),h=n-Math.round(d.width/2),a=r-Math.round(d.height/2),t.pages[p][u]={x:n,y:r,width:d.width,height:d.height,cx:h,cy:a},n>t.maxScrollX&&p++;else for(h=Math.round(e/2),a=Math.round(o/2);n>-t.scrollerWidth;){for(t.pages[l]=[],c=0,r=0;r>-t.scrollerHeight;)t.pages[l][c]={x:Math.max(n,t.maxScrollX),y:Math.max(r,t.maxScrollY),width:e,height:o,cx:n-h,cy:r-a},r-=o,c++;n-=e,l++}t._checkSnapLoop();var g=i._loopX?1:0,f=i._loopY?1:0;t._goToPage(t.currentPage.pageX||g,t.currentPage.pageY||f,0);var m=i.threshold;m%1==0?(t.snapThresholdX=m,t.snapThresholdY=m):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*m),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*m))}}),this.on("scrollEnd",function(){i.loop&&(i._loopX?(0===t.currentPage.pageX&&t._goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t._goToPage(1,t.currentPage.pageY,0)):(0===t.currentPage.pageY&&t._goToPage(t.currentPage.pageX,t.pages[0].length-2,0),t.currentPage.pageY===t.pages[0].length-1&&t._goToPage(t.currentPage.pageX,1,0)))}),!1!==i.listenFlick&&this.on("flick",function(){var e=i.speed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t._goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,e)}),this.on("destroy",function(){if(i.loop){var e=t.scroller.children;e.length>2&&(Y(t.scroller,e[e.length-1]),Y(t.scroller,e[0]))}})},t.prototype._checkSnapLoop=function(){var t=this.options.snap;t.loop&&this.pages&&this.pages.length&&(this.pages.length>1&&(t._loopX=!0),this.pages[0]&&this.pages[0].length>1&&(t._loopY=!0),t._loopX&&t._loopY&&R("Loop does not support two direction at the same time."))},t.prototype._nearestSnap=function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0;if(Math.abs(t-this.absStartX)<=this.snapThresholdX&&Math.abs(i-this.absStartY)<=this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);for(var s=this.pages.length;e<s;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}s=this.pages[e].length;for(var o=0;o<s;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return e===this.currentPage.pageX&&((e+=this.directionX)<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),o===this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:e,pageY:o}},t.prototype._goToPage=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments[2],s=arguments[3],o=this.options.snap;if(o&&this.pages&&this.pages.length&&(s=s||o.easing||E.bounce,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),this.pages[t])){i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=void 0===e?o.speed||Math.max(Math.max(Math.min(Math.abs(n-this.x),1e3),Math.min(Math.abs(r-this.y),1e3)),300):e,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,s)}},t.prototype.goToPage=function(t,i,e,s){var o=this.options.snap;if(o&&this.pages&&this.pages.length){if(o.loop){var n=void 0;o._loopX?(t>=(n=this.pages.length-2)?t=n-1:t<0&&(t=0),t+=1):(i>=(n=this.pages[0].length-2)?i=n-1:i<0&&(i=0),i+=1)}this._goToPage(t,i,e,s)}},t.prototype.next=function(t,i){if(this.options.snap){var e=this.currentPage.pageX,s=this.currentPage.pageY;++e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this._goToPage(e,s,t,i)}},t.prototype.prev=function(t,i){if(this.options.snap){var e=this.currentPage.pageX,s=this.currentPage.pageY;--e<0&&this.hasVerticalScroll&&(e=0,s--),this._goToPage(e,s,t,i)}},t.prototype.getCurrentPage=function(){var t=this.options.snap;return t?t.loop?t._loopX?c({},this.currentPage,{pageX:this.currentPage.pageX-1}):c({},this.currentPage,{pageY:this.currentPage.pageY-1}):this.currentPage:null}}(N),function(t){t.prototype.wheelTo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))},t.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},t.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,R("wheel option selectedIndex is required!"))}}(N),function(t){t.prototype._initScrollbar=function(){var t=this,i=this.options.scrollbar,e=i.fade,s=void 0===e||e,o=i.interactive,n=void 0!==o&&o;this.indicators=[];var r=void 0;this.options.scrollX&&(r={el:U("horizontal"),direction:"horizontal",fade:s,interactive:n},this._insertScrollBar(r.el),this.indicators.push(new B(this,r))),this.options.scrollY&&(r={el:U("vertical"),direction:"vertical",fade:s,interactive:n},this._insertScrollBar(r.el),this.indicators.push(new B(this,r))),this.on("refresh",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].refresh()}),s&&(this.on("scrollEnd",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollCancel",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0)}),this.on("beforeScrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0,!0)})),this.on("destroy",function(){t._removeScrollBars()})},t.prototype._insertScrollBar=function(t){this.wrapper.appendChild(t)},t.prototype._removeScrollBars=function(){for(var t=0;t<this.indicators.length;t++)this.indicators[t].destroy()}}(N),function(t){t.prototype._initPullDown=function(){this.options.probeType=F},t.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,e=void 0===i?90:i,s=t.stop,o=void 0===s?40:s;return!(this.directionY!==z||this.y<e)&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,o,this.options.bounceTime,E.bounce),this.pulling)},t.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,E.bounce)},t.prototype.openPullDown=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.options.pullDownRefresh=t,this._initPullDown()},t.prototype.closePullDown=function(){this.options.pullDownRefresh=!1}}(N),function(t){t.prototype._initPullUp=function(){this.options.probeType=F,this.pullupWatching=!1,this._watchPullUp()},t.prototype._watchPullUp=function(){this.pullupWatching||(this.pullupWatching=!0,this.on("scroll",this._checkToEnd))},t.prototype._checkToEnd=function(t){var i=this,e=this.options.pullUpLoad.threshold,s=void 0===e?0:e;this.movingDirectionY===L&&t.y<=this.maxScrollY+s&&(this.once("scrollEnd",function(){i.pullupWatching=!1}),this.trigger("pullingUp"),this.off("scroll",this._checkToEnd))},t.prototype.finishPullUp=function(){var t=this;this.pullupWatching?this.once("scrollEnd",function(){t._watchPullUp()}):this._watchPullUp()},t.prototype.openPullUp=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.options.pullUpLoad=t,this._initPullUp()},t.prototype.closePullUp=function(){this.options.pullUpLoad=!1,this.pullupWatching&&(this.pullupWatching=!1,this.off("scroll",this._checkToEnd))}}(N),function(t){t.prototype._initMouseWheel=function(){var t=this;this._handleMouseWheelEvent(f),this.on("destroy",function(){clearTimeout(t.mouseWheelTimer),t._handleMouseWheelEvent(m)}),this.firstWheelOpreation=!0},t.prototype._handleMouseWheelEvent=function(t){t(this.wrapper,"wheel",this),t(this.wrapper,"mousewheel",this),t(this.wrapper,"DOMMouseScroll",this)},t.prototype._onMouseWheel=function(t){var i=this;if(this.enabled){t.preventDefault(),this.firstWheelOpreation&&this.trigger("scrollStart"),this.firstWheelOpreation=!1,clearTimeout(this.mouseWheelTimer),this.mouseWheelTimer=setTimeout(function(){i.options.snap||i.trigger("scrollEnd",{x:i.x,y:i.y}),i.firstWheelOpreation=!0},400);var e=this.options.mouseWheel,s=e.speed,o=void 0===s?20:s,n=e.invert,r=void 0!==n&&n,h=e.easeTime,a=void 0===h?300:h,l=void 0,c=void 0;switch(!0){case"deltaX"in t:1===t.deltaMode?(l=-t.deltaX*o,c=-t.deltaY*o):(l=-t.deltaX,c=-t.deltaY);break;case"wheelDeltaX"in t:l=t.wheelDeltaX/120*o,c=t.wheelDeltaY/120*o;break;case"wheelDelta"in t:l=c=t.wheelDelta/120*o;break;case"detail"in t:l=c=-t.detail/3*o;break;default:return}var p=r?-1:1;l*=p,c*=p,this.hasVerticalScroll||(l=c,c=0);var u=void 0,d=void 0;if(this.options.snap)return u=this.currentPage.pageX,d=this.currentPage.pageY,l>0?u--:l<0&&u++,c>0?d--:c<0&&d++,void this._goToPage(u,d);u=this.x+Math.round(this.hasHorizontalScroll?l:0),d=this.y+Math.round(this.hasVerticalScroll?c:0),this.movingDirectionX=this.directionX=l>0?-1:l<0?1:0,this.movingDirectionY=this.directionY=c>0?-1:c<0?1:0,u>0?u=0:u<this.maxScrollX&&(u=this.maxScrollX),d>0?d=0:d<this.maxScrollY&&(d=this.maxScrollY),this.scrollTo(u,d,a,E.swipe),this.trigger("scroll",{x:this.x,y:this.y})}}}(N),N.Version="1.10.2",i.a=N}}]);