!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.getElementById("free_visit_form"),t=e.querySelector(".form-wrapper"),n=document.getElementById("callback_form"),r=n.querySelector(".form-wrapper"),o=document.getElementById("gift"),l="";o&&(l=o.querySelector(".form-wrapper"));var c=0,i=function(e,t){!function n(){c++,e.style.display="block",t.style.top=c+"vh";var r=requestAnimationFrame(n);c>=20&&cancelAnimationFrame(r)}()},s=function(e){c=0,e.style.display="none"};document.body.addEventListener("click",(function(c){var a=c.target,u=a.closest(".open-popup"),d=a.closest(".close-btn"),f=a.closest(".form-content"),y=a.closest(".callback-btn"),p=a.closest(".fixed-gift");u?(c.preventDefault(),i(e,t)):f&&!d||s(e),y?i(n,r):f&&!d||s(n),p?(i(o,l),p.remove()):f&&!d||s(o)}))},o=function(){var e,t=document.querySelector(".main-slider").querySelectorAll(".slide"),n=0,r=-400,o=function(){t[n].style.display="none",cancelAnimationFrame(e),++n>=t.length&&(n=0),function(e,t){e[t].style.display="flex"}(t,n),function o(){r+=20,t[n].style.left=r+"px",e=requestAnimationFrame(o),r>=0&&(r=-400,cancelAnimationFrame(e))}()};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;setInterval(o,e)}(5e3)},l=function(){var e=document.querySelector(".top-menu"),t=e.querySelector(".hidden-small"),n=e.querySelector(".hidden-large"),r=document.querySelector(".popup-menu");window.addEventListener("resize",(function(){document.body.clientWidth<=768?(t.style.display="none",n.style.display="block",window.addEventListener("scroll",(function(){window.pageYOffset>=124?e.style.position="fixed":e.style.position=""}))):(t.style.display="flex",n.style.display="none")})),document.addEventListener("click",(function(e){var t=e.target,n=t.closest(".menu-button"),o=t.closest(".close-menu-btn"),l=t.closest(".scroll");n&&(r.style.display="flex"),(o||l)&&(r.style.display="none")}))},c=function(){var e,t=document.querySelector(".gallery-bg>.wrapper"),n=document.querySelector(".gallery-slider").querySelectorAll(".slide"),r=document.querySelector(".points"),o=r.querySelectorAll(".point"),l=0;o.forEach((function(e){e.style.cssText="\n            width: 30px;\n            height: 5px;\n            background-color: #fff;\n            border-radius: 5px;\n        "})),o[0].style.cssText+="background-color: #f4c71b",t.style.cssText+="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    ",r.style.cssText="\n        position: absolute;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 200px;\n        left: calc(50% - 100px);\n        margin-top: 300px\n    ",t.insertAdjacentHTML("afterbegin",'<div class="arrow left-arrow" style="width: 36px;\n        cursor: pointer;\n        height: 37px;\n        background-color: #f4c71b;\n        border-radius: 50%;\n        text-align: center;\n        padding-top: 11px"><</div>'),t.insertAdjacentHTML("beforeend",'<div class="arrow right-arrow" style="width: 36px;\n        cursor: pointer;\n        height: 37px;\n        background-color: #f4c71b;\n        border-radius: 50%;\n        text-align: center;\n        padding-top: 11px">></div>');var c=function(e,t){e[t].style.display="flex",o[t].style.cssText+="background-color: #f4c71b"},i=function(e,t){e[t].style.display="none",o[t].style.cssText+="background-color: #fff"},s=function(){i(n,l),++l>=n.length&&(l=0),c(n,l)};t.addEventListener("click",(function(e){var t=e.target,r=t.closest(".left-arrow"),o=t.closest(".right-arrow");r&&(i(n,l),--l<=0&&(l=n.length-1),c(n,l)),o&&(i(n,l),++l>=n.length&&(l=0),c(n,l))})),n.forEach((function(e){e.style.display="none"})),n[0].style.display="flex";var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;e=setInterval(s,t)},u=function(){clearInterval(e)};t.addEventListener("mouseover",(function(e){var t=e.target,n=t.closest(".left-arrow"),r=t.closest(".right-arrow");n&&u(),r&&u()})),t.addEventListener("mouseout",(function(e){var t=e.target,n=t.closest(".left-arrow"),r=t.closest(".right-arrow");n&&a(5e3),r&&a(5e3)})),a(5e3)};(function(){var e=document.querySelector(".clubs-list>ul");document.querySelector(".header-main").addEventListener("click",(function(t){var n=t.target.closest(".club-select");e.style.display=n?"block":"none"}))})(),r(),o(),l(),c()}]);