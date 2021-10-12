!function(){"use strict";var e={980:function(e,t,n){e.exports=n.p+"img/illu-informations.png"},708:function(e,t,n){e.exports=n.p+"img/illu-leaf.png"},885:function(e,t,n){e.exports=n.p+"img/illu-prepare.png"},463:function(e,t,n){e.exports=n.p+"img/illu-pressrelease.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.quicklinks=document.querySelector("#zone3 .quicklinks"),this.quicklinks&&this.detectScrollAtBottom()}var n,i,r;return n=t,(i=[{key:"detectScrollAtBottom",value:function(){var e=this;window.addEventListener("scroll",(function(t){var n=document.body,i="at-bottom";window.scrollY+window.innerHeight+40>=n.clientHeight?e.addClassToQuicklinks(i):e.removeClassToQuicklinks(i)}))}},{key:"addClassToQuicklinks",value:function(e){this.quicklinks.classList.contains(e)||this.quicklinks.classList.add(e)}},{key:"removeClassToQuicklinks",value:function(e){this.quicklinks.classList.contains(e)&&this.quicklinks.classList.remove(e)}}])&&e(n.prototype,i),r&&e(n,r),t}();function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addNavOverlay()}var t,n,r;return t=e,(n=[{key:"addNavOverlay",value:function(){var e=document.querySelectorAll(".mn-item-has-submenu"),t=document.querySelector(".site-footer");t&&t.insertAdjacentHTML("afterend",'<div class="nav-overlay"></div>');var n=document.querySelector(".nav-overlay");e&&e.forEach((function(e){e.addEventListener("mouseover",(function(e){n.classList.add("is-visible")}),!1),e.addEventListener("mouseout",(function(e){n.classList.remove("is-visible")}),!1)}))}}])&&i(t.prototype,n),r&&i(t,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.banner=document.querySelector(".alert-banner"),this.bannerText=document.querySelector(".alert-banner .inside span"),this.banner&&this.centerSmallText()}var t,n,i;return t=e,(n=[{key:"centerSmallText",value:function(){this.bannerText&&this.bannerText.innerHTML.length<120&&this.banner.classList.add("text--center")}}])&&o(t.prototype,n),i&&o(t,i),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.blockSEO=document.querySelector(".block-seo"),this.blockSEO&&this.wrapText()}var t,n,i;return t=e,(n=[{key:"wrapText",value:function(){var e='<div class="block-content">'+this.blockSEO.innerHTML+"</div>";this.blockSEO.innerHTML=e;var t=document.querySelector(".block-seo .block-content .af-title");this.blockSEO.prepend(t)}}])&&s(t.prototype,n),i&&s(t,i),e}();function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.landing=document.querySelector(".page-landing"),this.landing&&(this.moveImg(),this.addParallax())}var t,n,i;return t=e,(n=[{key:"moveImg",value:function(){var e=this.landing.querySelector(".at-illust");e&&this.landing.querySelector(".page-landing__img__wrap").append(e)}},{key:"addParallax",value:function(){void 0!==window.gsap&&gsap.to(".page-landing__img__wrap img",{y:275,ease:"none",scrollTrigger:{trigger:".page-landing",start:"bottom bottom",end:"bottom top",scrub:!0}})}}])&&l(t.prototype,n),i&&l(t,i),e}();function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyFigures=document.querySelector(".key-figures__list"),this.keyFigures&&this.toggleGridType()}var t,n,i;return t=e,(n=[{key:"toggleGridType",value:function(){this.keyFigures.querySelectorAll("li").length>5&&this.keyFigures.classList.add("key-figures__list--long")}}])&&f(t.prototype,n),i&&f(t,i),e}(),h=n(980);function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.infosList=document.querySelector(".content873743 .list-articles"),this.infosList&&this.addImg()}var t,n,i;return t=e,(n=[{key:"addImg",value:function(){var e=document.createElement("img");e.src=h,e.classList.add("article-illu"),this.infosList.querySelector(".cxp-pagination").prepend(e)}}])&&v(t.prototype,n),i&&v(t,i),e}(),p=n(885);function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.infosList=document.querySelector(".content873744 .list-articles"),this.infosList&&this.addImg()}var t,n,i;return t=e,(n=[{key:"addImg",value:function(){var e=document.createElement("img");e.src=p,e.classList.add("article-illu"),this.infosList.querySelector(".cxp-pagination").append(e)}}])&&g(t.prototype,n),i&&g(t,i),e}(),b=n(463);function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.articleIntro=document.querySelector(".content873745 .communiques-presse .list-articles .intro"),this.articleDescriptions=document.querySelectorAll(".content873745 .communiques-presse .gla-item-desc"),this.pressEdito=document.querySelector(".content873745 .communiques-presse .edito"),this.articleIntro&&this.moveIntro(),this.articleDescriptions&&this.truncate(),this.pressEdito&&this.addImg()}var t,n,i;return t=e,(n=[{key:"moveIntro",value:function(){var e=document.querySelector(".content873745 .communiques-presse .list-articles .la-main-title");e&&e.append(this.articleIntro)}},{key:"truncate",value:function(){this.articleDescriptions.forEach((function(e){e.innerText.length>50&&(e.innerText=e.innerText.substring(0,165)+"...")}))}},{key:"addImg",value:function(){var e=document.createElement("img");e.src=b,e.classList.add("article-illu"),this.pressEdito.append(e)}}])&&w(t.prototype,n),i&&w(t,i),e}(),L=n(708);function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var q=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.landings=["content873743","content873744","content873745"],this.body=document.querySelector("body"),this.checkIfIsLanding()}var t,n,i;return t=e,(n=[{key:"checkIfIsLanding",value:function(){var e=this;this.landings.forEach((function(t){e.body.classList.contains(t)&&e.addImg()}))}},{key:"addImg",value:function(){var e=document.createElement("img");e.src=L,e.classList.add("landing-outro__illu");var t=document.querySelector(".landing-outro");t&&(t.classList.contains("article-focus")?t.append(e):t.querySelectorAll(".article-focus").forEach((function(t){t.append(e.cloneNode())})))}}])&&S(t.prototype,n),i&&S(t,i),e}();function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var T=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hasImg=document.querySelector("body.article .article-title .at-illust"),this.hasImg&&this.addClass()}var t,n,i;return t=e,(n=[{key:"addClass",value:function(){document.querySelector("body.article .article-title").classList.add("has-illust")}}])&&E(t.prototype,n),i&&E(t,i),e}();function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.navMenu=document.querySelector(".site-banner__infos"),this.open=document.querySelector(".js-toggle-nav"),this.body=document.querySelector("body"),this.navContainer=document.querySelector(".site-banner"),this.moveNavigation(),this.toggleNavigation(),this.watchResize()}var t,n,i;return t=e,(n=[{key:"moveNavigation",value:function(){window.matchMedia("(max-width: 992px)").matches?document.querySelector(".site-banner").prepend(this.navMenu):document.querySelector(".site-banner > .inside").prepend(this.navMenu)}},{key:"toggleNavigation",value:function(){var e=this;this.navContainer.classList.add("is-closed"),this.open.classList.add("is-closed"),this.body.classList.remove("scroll-locked"),document.documentElement.classList.remove("scroll-locked"),window.matchMedia("(max-width: 992px)").matches&&(this.navContainer.classList.add("is-closed"),this.open.addEventListener("click",(function(){e.open.classList.toggle("is-closed"),e.navContainer.classList.toggle("is-closed"),e.body.classList.toggle("scroll-locked"),document.documentElement.classList.toggle("scroll-locked")})))}},{key:"watchResize",value:function(){var e=this;window.addEventListener("resize",(function(){e.moveNavigation(),e.toggleNavigation()}))}}])&&x(t.prototype,n),i&&x(t,i),e}();function I(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var O=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.switcher=document.querySelector(".prepare-yourself"),this.previousItem=0,this.switcher&&this.initSwitcher()}var t,n,i;return t=e,(n=[{key:"initSwitcher",value:function(){var e=this;this.switcher.querySelectorAll(".block-linklist").forEach((function(t){for(var n=t.querySelectorAll(".block-linklist__list li"),i=0,r=function(r){n[r].addEventListener("mouseenter",(function(){i=r+1;for(var n=t.classList.length-1;n>=0;n--)t.classList[n].startsWith("leave-")?t.classList.remove(t.classList[n]):t.classList[n].startsWith("show--")&&!t.classList.contains("show--"+(r+1))&&(t.classList.add("leave-"+t.classList[n]),t.classList.remove(t.classList[n]));t.classList.add("show--"+(r+1)),i<e.previousItem&&!t.classList.contains("invert")?t.classList.add("invert"):i>=e.previousItem&&t.classList.contains("invert")&&t.classList.remove("invert"),e.previousItem=i}))},o=0;o<n.length;o++)r(o)}))}}])&&I(t.prototype,n),i&&I(t,i),e}();function _(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var P=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.watchScreenChange()}var t,n,i;return t=e,(n=[{key:"watchScreenChange",value:function(){var e=this;["scroll","resize","fullscreenchange","fullscreenerror","touchcancel","touchend","touchmove","touchstart","mozbrowserscroll","mozbrowserscrollareachanged","mozbrowserscrollviewchange","mozbrowserresize","MozScrolledAreaChanged","mozbrowserresize","orientationchange"].forEach((function(t){window.addEventListener(t,e.setRealVH)}))}},{key:"setRealVH",value:function(){document.documentElement.style.setProperty("--real-vh",window.innerHeight/100+"px")}}])&&_(t.prototype,n),i&&_(t,i),e}();window.app=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.quicklinks=new t,this.header=new r,this.alertBanner=new a,this.blockSEO=new c,this.landings=new u,this.keyFigures=new d,this.exposants=new m,this.visiteursPro=new y,this.presse=new k,this.landingOutro=new q,this.article=new T,this.mobileNav=new C,this.imgSwitcher=new O,this.realVH=new P}}()}();
