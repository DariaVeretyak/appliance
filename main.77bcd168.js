parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".animTitles");function t(){var t=e,o=t.offsetHeight,i=n(t).top,c=window.innerHeight-o/4;o>window.innerHeight&&(c=window.innerHeight-window.innerHeight/4),pageYOffset>i-c&&pageYOffset<i+o?t.classList.add("_active"):t.classList.contains("anim-no-hide")||t.classList.remove("_active")}function n(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,leff:t.left+n}}e&&(window.addEventListener("scroll",t),setTimeout(function(){t()},200));var o=document.querySelector(".header__menu"),i=document.querySelector(".header__menu-close"),c=document.querySelector(".header__footer");o.addEventListener("click",function(e){c.classList.add("header__footer--active")}),i.addEventListener("click",function(e){c.classList.remove("header__footer--active")});var r=document.getElementById("city"),a=document.querySelector(".header__search-btn");r.addEventListener("keypress",function(e){"Enter"===e.key&&(e.target.value="")}),a.addEventListener("click",function(e){r.value=""});var d=document.querySelectorAll(".header__nav-item");d.forEach(function(e){e.addEventListener("click",function(e){c.classList.remove("header__footer--active")})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.77bcd168.js.map