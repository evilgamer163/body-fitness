!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.getElementById("free_visit_form"),t=e.querySelector(".form-wrapper"),n=document.getElementById("callback_form"),o=n.querySelector(".form-wrapper"),r=document.getElementById("gift"),l="";r&&(l=r.querySelector(".form-wrapper"));var c=0,i=function(e,t){!function n(){c++,e.style.display="block",t.style.top=c+"vh";var o=requestAnimationFrame(n);c>=20&&cancelAnimationFrame(o)}()},a=function(e){c=0,e.style.display="none"};document.body.addEventListener("click",(function(c){var s=c.target,u=s.closest(".open-popup"),d=s.closest(".close-btn"),f=s.closest(".form-content"),p=s.closest(".callback-btn"),y=s.closest(".fixed-gift");u?(c.preventDefault(),i(e,t)):f&&!d||a(e),p?i(n,o):f&&!d||a(n),y?(i(r,l),y.remove()):f&&!d||r&&a(r)}))},r=function(){var e,t=document.querySelector(".main-slider").querySelectorAll(".slide"),n=0,o=-400,r=function(){t[n].style.display="none",cancelAnimationFrame(e),++n>=t.length&&(n=0),function(e,t){e[t].style.display="flex"}(t,n),function r(){o+=20,t[n].style.left=o+"px",e=requestAnimationFrame(r),o>=0&&(o=-400,cancelAnimationFrame(e))}()};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;setInterval(r,e)}(5e3)},l=function(){var e=document.querySelector(".top-menu"),t=e.querySelector(".hidden-small"),n=e.querySelector(".hidden-large"),o=document.querySelector(".popup-menu");window.addEventListener("resize",(function(){document.body.clientWidth<=768?(t.style.display="none",n.style.display="block",window.addEventListener("scroll",(function(){window.pageYOffset>=124?e.style.position="fixed":e.style.position=""}))):(t.style.display="flex",n.style.display="none")})),document.addEventListener("click",(function(e){var t=e.target,n=t.closest(".menu-button"),r=t.closest(".close-menu-btn"),l=t.closest(".scroll");n&&(o.style.display="flex"),(r||l)&&(o.style.display="none")}))},c=function(){var e,t=document.querySelector(".gallery-bg>.wrapper"),n=document.querySelector(".gallery-slider").querySelectorAll(".slide"),o=document.querySelector(".points"),r=o.querySelectorAll(".point"),l=0;r.forEach((function(e){e.style.cssText="\n            width: 30px;\n            height: 5px;\n            background-color: #fff;\n            border-radius: 5px;\n            cursor: pointer;\n        "})),r[0].style.cssText+="background-color: #f4c71b",t.style.cssText+="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    ",o.style.cssText="\n        position: absolute;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 200px;\n        left: calc(50% - 100px);\n        margin-top: 300px\n    ",t.insertAdjacentHTML("afterbegin",'<div class="arrow left-arrow" style="width: 36px;\n        cursor: pointer;\n        height: 37px;\n        background-color: #f4c71b;\n        border-radius: 50%;\n        text-align: center;\n        padding-top: 11px"><</div>'),t.insertAdjacentHTML("beforeend",'<div class="arrow right-arrow" style="width: 36px;\n        cursor: pointer;\n        height: 37px;\n        background-color: #f4c71b;\n        border-radius: 50%;\n        text-align: center;\n        padding-top: 11px">></div>');var c=function(e,t){e[t].style.display="flex",r[t].style.cssText+="background-color: #f4c71b"},i=function(e,t){e[t].style.display="none",r[t].style.cssText+="background-color: #fff"},a=function(){i(n,l),++l>=n.length-1&&(l=0),c(n,l)};t.addEventListener("click",(function(e){var t=e.target,o=t.closest(".left-arrow"),a=t.closest(".right-arrow"),s=t.closest(".point");o&&(i(n,l),--l<0&&(l=n.length-1,console.log(l)),c(n,l)),a&&(i(n,l),++l>=n.length&&(l=0),c(n,l)),r.forEach((function(e,t){s===e&&(i(n,l),c(n,l=t))}))})),n.forEach((function(e){e.style.display="none"})),n[0].style.display="flex";var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;e=setInterval(a,t)};t.addEventListener("mouseover",(function(t){var n=t.target,o=n.closest(".left-arrow"),r=n.closest(".right-arrow"),l=n.closest(".point");(o||r||l)&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){var t=e.target,n=t.closest(".left-arrow"),o=t.closest(".right-arrow"),r=t.closest(".point");(n||o||r)&&s(5e3)})),s(5e3)},i=function(){var e=document.getElementById("totop");e.style.display="none",window.addEventListener("scroll",(function(){window.pageYOffset>=700?e.style.display="block":e.style.display="none"})),document.body.addEventListener("click",(function(e){var t=e.target,n=t.closest(".scroll"),o=t.closest("#totop");if(n){e.preventDefault();var r=t.href.split("#");window.scroll({left:0,top:document.querySelector("#".concat(r[1])).offsetTop,behavior:"smooth"})}o&&(e.preventDefault(),window.scroll({left:0,top:0,behavior:"smooth"}))}))},a=function(){var e,t,n=document.querySelector(".time"),o=document.getElementById("card_leto_schelkovo"),r=document.getElementById("card_leto_mozaika"),l=document.getElementById("card_order").querySelectorAll("input"),c=document.querySelector('input[placeholder="Промокод"]');n&&(e=n.querySelectorAll('input[type="radio"]'),(t=document.getElementById("price-total")).textContent="1990"),l.forEach((function(n){n.addEventListener("change",(function(){r&&r.checked&&e.forEach((function(e){e.checked&&("1"===e.value?t.textContent="1990":"6"===e.value?t.textContent="9990":"9"===e.value?t.textContent="13990":"12"===e.value&&(t.textContent="19990"))})),o&&o.checked&&e.forEach((function(e){e.checked&&("1"===e.value?t.textContent="2990":"6"===e.value?t.textContent="14990":"9"===e.value?t.textContent="21990":"12"===e.value&&(t.textContent="24990"))})),c&&"ТЕЛО2019"===c.value&&(t.textContent-=.3*t.textContent)}))}))},s=function(){var e=document.querySelectorAll("form"),t=/^[а-яА-Я]+$/,n=document.getElementById("thanks"),o=document.createElement("div");o.style.cssText="\n        font-size: 20px;\n        color: red;\n        text-align: center;\n        margin-top: 10px;\n    ",n.addEventListener("click",(function(e){var t=e.target,o=t.closest(".form-wrapper"),r=t.closest(".close-btn"),l=t.closest(".close-form");(!o||r||l)&&(n.style.display="none")})),e.forEach((function(e){e.querySelectorAll("input").forEach((function(e){e.hasAttribute("required")&&(e.removeAttribute("required"),e.style.outline="none")})),e.addEventListener("input",(function(e){e.preventDefault();var n=e.target;"text"!==n.type||"Промокод"===n.placeholder||t.test(n.value)?n.style.border="":(n.value="",n.style.border="2px solid red")})),e.addEventListener("submit",(function(t){t.preventDefault();t.target;var r=e.querySelector('input[type="checkbox"]'),l=e.querySelector('input[type="text"]'),c=e.querySelector('input[type="tel"]');if(""===l.value||""===c.value)return e.append(o),void(o.textContent="Необходимо заполнить все поля!");if(!r.checked)return e.append(o),void(o.textContent="Необходимо принять условия!");var i=new FormData(e);i.forEach((function(t,n){if(i[n]=t,"card-type"===n){var o=e.querySelector('input[value="'.concat(t,'"]')),r=document.querySelector('label[for="'.concat(o.id,'"]')),l=r.querySelector(".long").textContent,c="- дневная -"!==r.querySelector(".solo").textContent,a=r.querySelector(".cost").textContent,s="* Без заморозки"!==r.querySelector(".frost").textContent;i[n]={month:l,solo:c,price:a,frost:s}}}));var a,s=function(e){n.querySelector("p").textContent=e,n.style.display="block"};(a=i,fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:JSON.stringify(a)})).then((function(e){if(200!==e.status)throw new Error("Ошибка! Статус не равен 200!");s("Мы обязательно с вами свяжемся!")})).catch((function(e){s("Упс! Что то пошло не так..."),console.error(e)}))}))}))},u=function(){document.querySelectorAll('input[type="tel"]').forEach((function(e){var t,n=function(n){n.keyCode&&(t=n.keyCode),e.selectionStart<3&&n.preventDefault();var o="+7 (___) ___ ____",r=0,l=o.replace(/\D/g,""),c=e.value.replace(/\D/g,""),i=o.replace(/[_\d]/g,(function(e){return r<c.length?c.charAt(r++)||l.charAt(r):e}));-1!==(r=i.indexOf("_"))&&(r<5&&(r=3),i=i.slice(0,r));var a=o.substr(0,e.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(e.value)||e.value.length<5||t>47&&t<58)&&(e.value=i),"blur"===n.type&&e.value.length<15&&(e.style.border="2px solid red",e.value="")};e.addEventListener("input",n,!1),e.addEventListener("focus",n,!1),e.addEventListener("blur",n,!1),e.addEventListener("keydown",n,!1)}))};(function(){var e=document.querySelector(".clubs-list>ul");document.querySelector(".header-main").addEventListener("click",(function(t){var n=t.target.closest(".club-select");e.style.display=n?"block":"none"}))})(),o(),r(),l(),c(),i(),a(),s(),u()}]);