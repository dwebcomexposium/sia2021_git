!function(){"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,l=void 0,l=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(i,"string"),"symbol"===e(l)?l:String(l)),o)}var i,l}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e}();var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quicklinks=document.querySelector("#zone3 .quicklinks"),this.quicklinks&&this.detectScrollAtBottom()}var e,n,o;return e=t,(n=[{key:"detectScrollAtBottom",value:function(){var t=this;window.addEventListener("scroll",(function(e){var r=document.body,n="at-bottom";window.scrollY+window.innerHeight+40>=r.clientHeight?t.addClassToQuicklinks(n):t.removeClassToQuicklinks(n)}))}},{key:"addClassToQuicklinks",value:function(t){this.quicklinks.classList.contains(t)||this.quicklinks.classList.add(t)}},{key:"removeClassToQuicklinks",value:function(t){this.quicklinks.classList.contains(t)&&this.quicklinks.classList.remove(t)}}])&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,l=void 0,l=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===o(l)?l:String(l)),n)}var i,l}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.addNavOverlay()}var e,r,n;return e=t,(r=[{key:"addNavOverlay",value:function(){var t=document.querySelectorAll(".mn-item-has-submenu"),e=document.querySelector(".site-footer");e&&e.insertAdjacentHTML("afterend",'<div class="nav-overlay"></div>');var r=document.querySelector(".nav-overlay");t&&t.forEach((function(t){t.addEventListener("mouseover",(function(t){r.classList.add("is-visible")}),!1),t.addEventListener("mouseout",(function(t){r.classList.remove("is-visible")}),!1)}))}}])&&i(e.prototype,r),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===a(i)?i:String(i)),n)}var o,i}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.banner=document.querySelector(".alert-banner"),this.bannerText=document.querySelector(".alert-banner .inside span"),this.banner&&this.centerSmallText()}var e,r,n;return e=t,(r=[{key:"centerSmallText",value:function(){this.bannerText&&this.bannerText.innerHTML.length<120&&this.banner.classList.add("text--center")}}])&&s(e.prototype,r),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===u(i)?i:String(i)),n)}var o,i}var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.blockSEO=document.querySelector(".block-seo"),this.blockSEO&&this.wrapText()}var e,r,n;return e=t,(r=[{key:"wrapText",value:function(){var t='<div class="block-content">'+this.blockSEO.innerHTML+"</div>";this.blockSEO.innerHTML=t;var e=document.querySelector(".block-seo .block-content .af-title");this.blockSEO.prepend(e)}}])&&f(e.prototype,r),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===y(i)?i:String(i)),n)}var o,i}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.landing=document.querySelector(".page-landing:not(.front .page-landing)"),this.landing&&(this.moveImg(),this.addParallax())}var e,r,n;return e=t,(r=[{key:"moveImg",value:function(){var t=this.landing.querySelector(".at-illust");t&&this.landing.querySelector(".page-landing__img__wrap").append(t)}},{key:"addParallax",value:function(){void 0!==window.gsap&&ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(".page-landing__img__wrap img",{y:275,ease:"none",scrollTrigger:{trigger:".page-landing",start:"bottom bottom",end:"bottom top",scrub:!0}})},"(max-width: 992px)":function(){gsap.to(".page-landing__img__wrap img",{yPercent:27,ease:"none",scrollTrigger:{trigger:".page-landing .edito p",start:"top bottom",end:"top top",scrub:!0}})}})}}])&&p(e.prototype,r),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===b(i)?i:String(i)),n)}var o,i}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.keyFigures=document.querySelector(".key-figures__list"),this.keyFigures&&this.toggleGridType()}var e,r,n;return e=t,(r=[{key:"toggleGridType",value:function(){this.keyFigures.querySelectorAll("li").length>5&&this.keyFigures.classList.add("key-figures__list--long")}}])&&v(e.prototype,r),n&&v(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),h=t.p+"img/illu-informations.png";function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===w(i)?i:String(i)),n)}var o,i}var k=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.infosList=document.querySelector(".content873743 .list-articles"),this.figuresImg=document.querySelector(".key-figures__illu"),this.infosList&&(this.addImg(),this.addParallax()),this.figuresImg&&this.figuresParallax()}var e,r,n;return e=t,(r=[{key:"addImg",value:function(){var t=document.createElement("img");t.src=h,t.classList.add("article-illu"),this.infosList.querySelector(".cxp-pagination").prepend(t)}},{key:"addParallax",value:function(){var t=document.querySelector(".content873743 .list-articles .cxp-pagination .article-illu"),e=document.querySelector(".useful-infos");ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(t,{y:-220,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})},"(max-width: 992px)":function(){gsap.to(t,{yPercent:-55,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})}})}},{key:"figuresParallax",value:function(){void 0!==window.gsap&&(gsap.set(".key-figures__illu",{y:"-50%"}),gsap.to(".key-figures__illu",{scale:1.25,scrollTrigger:{ease:"none",trigger:".key-figures",start:"top bottom",end:"bottom top",scrub:!0}}))}}])&&S(e.prototype,r),n&&S(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),P=t.p+"img/illu-prepare.png";function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===T(i)?i:String(i)),n)}var o,i}var j=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.infosList=document.querySelector(".content873744 .list-articles"),this.infosList&&this.addImg()}var e,r,n;return e=t,(r=[{key:"addImg",value:function(){var t=document.createElement("img");t.src=P,t.classList.add("article-illu"),this.infosList.querySelector(".cxp-pagination").append(t),this.addParallax()}},{key:"addParallax",value:function(){var t=document.querySelector(".content873744 .list-articles .cxp-pagination .article-illu"),e=document.querySelector(".your-journey");ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(t,{x:-65,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})},"(max-width: 992px)":function(){gsap.to(t,{xPercent:-15,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})}})}}])&&E(e.prototype,r),n&&E(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),L=t.p+"img/illu-pressrelease.png";function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===q(i)?i:String(i)),n)}var o,i}var x=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.articleIntro=document.querySelector(".content873745 .communiques-presse .list-articles .intro"),this.articleDescriptions=document.querySelectorAll(".content873745 .communiques-presse .gla-item-desc"),this.pressEdito=document.querySelector(".content873745 .communiques-presse .edito"),this.articleIntro&&this.moveIntro(),this.articleDescriptions&&this.truncate(),this.pressEdito&&(this.addImg(),this.addParallax())}var e,r,n;return e=t,(r=[{key:"moveIntro",value:function(){var t=document.querySelector(".content873745 .communiques-presse .list-articles .la-main-title");t&&t.append(this.articleIntro)}},{key:"truncate",value:function(){this.articleDescriptions.forEach((function(t){t.innerText.length>50&&(t.innerText=t.innerText.substring(0,165)+"...")}))}},{key:"addImg",value:function(){var t=document.createElement("img");t.src=L,t.classList.add("article-illu"),this.pressEdito.append(t)}},{key:"addParallax",value:function(){var t=document.querySelector(".content873745 .communiques-presse .edito .article-illu"),e=document.querySelector(".block.block-page.edito.communiques-exposants");ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(t,{x:-50,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})},"(max-width: 992px)":function(){gsap.to(t,{xPercent:-15,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:!0}})}})}}])&&_(e.prototype,r),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),O=t.p+"img/illu-citron.png",N=t.p+"img/illu-cocoa.png",I=t.p+"img/illu-eolienne.png",C=t.p+"img/illu-framboise.png",B=t.p+"img/illu-mais.png",M=t.p+"img/illu-tranche-citron.png";function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==z(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===z(i)?i:String(i)),n)}var o,i}var F=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.landings=["content873743","content873744","content873745","content938347"],this.body=document.querySelector("body"),this.checkIfIsLanding()}var e,r,n;return e=t,r=[{key:"checkIfIsLanding",value:function(){var t=this;this.landings.forEach((function(e){if(t.body.classList.contains(e))switch(e){case"content873743":t.addImg(O,M);break;case"content938347":t.addImg(I,B);break;case"content873744":t.addImg(N);break;case"content873745":t.addImg(C)}}))}},{key:"addImg",value:function(){var t=document.querySelector(".landing-outro");if(t){if(arguments.length>1){var e=document.createElement("img");e.src=arguments.length<=0?void 0:arguments[0],e.classList.add("landing-outro__illu");var r=document.createElement("img");if(r.src=arguments.length<=1?void 0:arguments[1],r.classList.add("landing-outro__illu"),!t.classList.contains("article-focus")){var n=t.querySelector(".article-focus:nth-of-type(1)"),o=t.querySelector(".article-focus:nth-of-type(2)");n&&n.append(e),o&&o.append(r)}}else{var i=document.createElement("img");i.src=arguments.length<=0?void 0:arguments[0],i.classList.add("landing-outro__illu"),t.classList.contains("article-focus")&&t.append(i)}this.addParallax()}}},{key:"addParallax",value:function(){void 0!==window.gsap&&(gsap.set(".article-focus.landing-outro .landing-outro__illu",{y:"-55%"}),ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(".article-focus.landing-outro .landing-outro__illu",{scale:1.3,ease:"none",scrollTrigger:{trigger:".landing-outro",start:"top bottom",end:"bottom top",scrub:!0}})}}),ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(".landing-outro:not(.article-focus) .article-focus:first-child .landing-outro__illu",{y:120,ease:"none",scrollTrigger:{trigger:".landing-outro",start:"top bottom",end:"bottom top",scrub:!0}})}}),ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(".landing-outro:not(.article-focus) .article-focus:last-child .landing-outro__illu",{y:-120,ease:"none",scrollTrigger:{trigger:".landing-outro",start:"top bottom",end:"bottom top",scrub:!0}})}}))}}],r&&A(e.prototype,r),n&&A(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==H(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===H(i)?i:String(i)),n)}var o,i}var R=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.hasImg=document.querySelector("body.article .article-title .at-illust"),this.hasImg&&this.addClass()}var e,r,n;return e=t,(r=[{key:"addClass",value:function(){document.querySelector("body.article .article-title").classList.add("has-illust")}}])&&Q(e.prototype,r),n&&Q(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function V(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===D(i)?i:String(i)),n)}var o,i}var $=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.navMenu=document.querySelector(".site-banner__infos"),this.open=document.querySelector(".js-toggle-nav"),this.body=document.querySelector("body"),this.navContainer=document.querySelector(".site-banner"),this.moveNavigation(),this.toggleNavigation(),this.watchResize()}var e,r,n;return e=t,(r=[{key:"moveNavigation",value:function(){window.matchMedia("(max-width: 992px)").matches?document.querySelector(".site-banner").prepend(this.navMenu):document.querySelector(".site-banner > .inside").prepend(this.navMenu)}},{key:"toggleNavigation",value:function(){var t=this;this.navContainer.classList.add("is-closed"),this.open.classList.add("is-closed"),this.body.classList.remove("scroll-locked"),document.documentElement.classList.remove("scroll-locked"),this.open.addEventListener("click",(function(){t.open.classList.toggle("is-closed"),t.navContainer.classList.toggle("is-closed"),t.body.classList.toggle("scroll-locked"),document.documentElement.classList.toggle("scroll-locked")}))}},{key:"watchResize",value:function(){var t=this;window.addEventListener("resize",(function(){t.moveNavigation()}))}}])&&V(e.prototype,r),n&&V(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==G(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===G(i)?i:String(i)),n)}var o,i}var Y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.switcher=document.querySelector(".prepare-yourself"),this.previousItem=0,this.switcher&&this.initSwitcher()}var e,r,n;return e=t,(r=[{key:"initSwitcher",value:function(){var t=this;this.switcher.querySelectorAll(".block-linklist").forEach((function(e){for(var r=e.querySelectorAll(".block-linklist__list li"),n=0,o=function(o){r[o].addEventListener("mouseenter",(function(){n=o+1;for(var r=e.classList.length-1;r>=0;r--)e.classList[r].startsWith("leave-")?e.classList.remove(e.classList[r]):e.classList[r].startsWith("show--")&&!e.classList.contains("show--"+(o+1))&&(e.classList.add("leave-"+e.classList[r]),e.classList.remove(e.classList[r]));e.classList.add("show--"+(o+1)),n<t.previousItem&&!e.classList.contains("invert")?e.classList.add("invert"):n>=t.previousItem&&e.classList.contains("invert")&&e.classList.remove("invert"),t.previousItem=n}))},i=0;i<r.length;i++)o(i)}))}}])&&W(e.prototype,r),n&&W(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==J(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===J(i)?i:String(i)),n)}var o,i}var U=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.watchScreenChange()}var e,r,n;return e=t,(r=[{key:"watchScreenChange",value:function(){var t=this;["scroll","resize","fullscreenchange","fullscreenerror","touchcancel","touchend","touchmove","touchstart","mozbrowserscroll","mozbrowserscrollareachanged","mozbrowserscrollviewchange","mozbrowserresize","MozScrolledAreaChanged","mozbrowserresize","orientationchange"].forEach((function(e){window.addEventListener(e,t.setRealVH)}))}},{key:"setRealVH",value:function(){document.documentElement.style.setProperty("--real-vh",window.innerHeight/100+"px")}}])&&K(e.prototype,r),n&&K(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function X(t){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(t)}function Z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==X(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==X(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===X(i)?i:String(i)),n)}var o,i}var tt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.newsletterForm=document.querySelector("#zone4 .newsletter-form"),this.newsletterButton=document.querySelector(".site-banner .quicklinks .linkid875046 .btn-primary"),this.newsletterButton2=document.querySelector(".site-footer .article-focus:nth-child(2) .btn-primary"),this.newsletterButton3=document.querySelector(".sia-gallery__title .btn"),this.newsletterForm&&(this.addOverlay(),this.addCloseButton()),this.newsletterButton&&this.setNewsletterButton(),this.newsletterButton2&&this.setNewsletterButton2(),this.newsletterButton3&&this.setNewsletterButton3()}var e,r,n;return e=t,(r=[{key:"setNewsletterButton",value:function(){var t=this;this.newsletterButton.removeAttribute("onclick"),this.newsletterButton.addEventListener("click",(function(){t.openNewsletter()}))}},{key:"setNewsletterButton2",value:function(){var t=this;this.newsletterButton2.setAttribute("href","javascript:void(0)"),this.newsletterButton2.setAttribute("target","_self"),this.newsletterButton2.addEventListener("click",(function(){t.openNewsletter()}))}},{key:"setNewsletterButton3",value:function(){var t=this;this.newsletterButton3.removeAttribute("onclick"),this.newsletterButton3.addEventListener("click",(function(){t.openNewsletter()}))}},{key:"addOverlay",value:function(){var t=this,e=document.createElement("div");e.classList.add("newsletter-form__overlay"),this.newsletterForm.append(e),e.addEventListener("click",(function(){t.closeNewsletter()}))}},{key:"addCloseButton",value:function(){var t=this,e=document.createElement("div");e.classList.add("newsletter-form__close"),this.newsletterForm.querySelector(".nf-main-content").append(e),e.addEventListener("click",(function(){t.closeNewsletter()}))}},{key:"closeNewsletter",value:function(){this.newsletterForm.classList.remove("is-open")}},{key:"openNewsletter",value:function(){this.newsletterForm.classList.add("is-open")}}])&&Z(e.prototype,r),n&&Z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function rt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==et(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==et(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===et(i)?i:String(i)),n)}var o,i}var nt=[t.p+"img/illu-wheat-single.png",t.p+"img/illu-poussin.png"],ot=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.news=document.querySelector(".front .list-articles .inside"),this.news&&(this.addImg(),this.addParallax())}var e,r,n;return e=t,(r=[{key:"addImg",value:function(){var t=this;nt.forEach((function(e){var r=document.createElement("img");r.src=e,r.classList.add("news-illu"),t.news.append(r)}))}},{key:"addParallax",value:function(){void 0!==window.gsap&&(ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(".list-articles .news-illu:last-child",{y:-200,ease:"none",scrollTrigger:{trigger:".front .list-articles .inside",start:"top bottom",end:"bottom top",scrub:!0}})}}),ScrollTrigger.matchMedia({"(min-width: 993px)":function(){gsap.to(".list-articles .news-illu:nth-last-child(2)",{y:200,ease:"none",scrollTrigger:{trigger:".front .list-articles .inside",start:"top bottom",end:"bottom top",scrub:!0}})}}))}}])&&rt(e.prototype,r),n&&rt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function it(t){return it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(t)}function lt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==it(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==it(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===it(i)?i:String(i)),n)}var o,i}function at(t,e,r){return e&&lt(t.prototype,e),r&&lt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var st=at((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quicklinks=new n,this.header=new l,this.alertBanner=new c,this.blockSEO=new m,this.landings=new d,this.keyFigures=new g,this.exposants=new k,this.visiteursPro=new j,this.presse=new x,this.landingOutro=new F,this.article=new R,this.mobileNav=new $,this.imgSwitcher=new Y,this.realVH=new U,this.newsletter=new tt,this.homeNews=new ot}));window.app=new st}();
