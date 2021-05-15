(()=>{"use strict";const a=function(a){return'\n    <div class="header__main">\n        <section class="logo__container">\n            <a class="logo__link" href="https://frijolmagico.cl">\n                <svg class="logo__svg" viewBox="280 120 300 300">\n                    <path class="st0" d="M506.7 202.6c25.8 2 72 17 72 29.5 -20.9 8-53-13.5-66.2-23.9C508.7 205.3 506.7 202.6 506.7 202.6"/>\n                    <path class="st0" d="M402.4 201.3c0 0-148.9 44.5-90.2 57.2 27.2 5.9 76.4 1.7 75.8 1.7 -0.6 0-12.6 21.9-39.9 27.8 -39.8 8.6-81.2 36.4-50.9 89.9 27.4 48.4 175.7-38 175.7-38l45.1-97.1 -63.4-54.2L402.4 201.3z"/>\n                    <path class="st1" d="M514.1 209.2c0 0 13.6 36.8 13.5 47 -0.2 10.2 14.8 101.4-88.7 146.5 -103.5 45.1-137.4-16.8-137.4-16.8s-18.8-27.2-8.7-53.4c9.5-24.4 27.7-33.1 55.5-38.7 29.2-5.8 46.2-30.3 48.4-33.8l-0.2-0.4c-43.7 3-124 5.9-81-20.2 32.1-19.4 86.6-28.6 111.6-32 1-0.1 1-1.7-0.1-1.7 -14.2-0.7-27.5-2.8-28.9-3.1l-0.2-0.1c-15.2-28-46.1-34-46.1-34s-8.8-3.5-15.8-4.9c-12-2.3-32.2-4.1-20.8-13.7C386.7 89.9 492.5 152.2 514.1 209.2L514.1 209.2l-2.1 0c0 0 39.8-0.7 63.5 17.9 24.6 19.3-104 48-116.3 23.7 -12.3-24.3 52.8-41.5 52.8-41.5"/>\n                    <path class="st0" d="M445.3 268.7c-1 11.7-6.9 20.7-13.4 20.2 -6.4-0.5-10.8-10.4-9.9-22.1 1-11.7 6.9-20.7 13.4-20.2C441.9 247.1 446.3 257 445.3 268.7"/>\n                    <path class="st0" d="M488 270.9c-1 11.7-6.9 20.7-13.4 20.2 -6.4-0.5-10.8-10.4-9.9-22.1 1-11.7 6.9-20.7 13.4-20.2C484.6 249.3 489 259.2 488 270.9"/>      \n                </svg>\n            <h1 class="logo__text">Frijol <br> Mágico</h1>\n            </a>\n        </section>\n\n        <input class="nav__input" id="nav__input" type="checkbox">\n        <label class="nav__toggle" for="nav__input"><span></span></label>\n    </div>\n\n    <nav class="nav__container" style="margin-top: -100vh;">\n      <ul class="nav__general">\n        <li class="nav__li"><a class="nav__a" target="_self" href="https://frijolmagico.cl">Inicio</a></li>\n        <li class="nav__li"><a class="nav__a" target="_self" href="'.concat(a,'ilustradorxs">Ilustradorxs</a></li>\n        <li class="nav__li"><a class="nav__a" target="_self" href="').concat(a,'talleres">Talleres</a></li>\n        <li class="nav__li"><a class="nav__a" target="_self" href="https://blog.frijolmagico.cl">Blog</a></li>\n        <li class="nav__li"><a class="nav__a" target="_self" href="').concat(a,'nosotrxs">Nosotrxs</a></li>\n      </ul>\n    </nav>\n    ')};const n=function(){return'\n    <p class="footer__text"> Frijol Mágico 2021  | \n    Hecho con &hearts; por <a href="https://www.instagram.com/_strocs/">_Strocs.</a></p>\n    '};const s=function(){var a=document.getElementsByClassName("nav__toggle")[0],n=document.getElementsByClassName("nav__container")[0];a.onclick=function(){var a=n.style.marginTop;n.style.marginTop="-100vh"==a?"0vh":"-100vh"}};const t=function(a){return'\n    <div class="bg__root">\n      <img class="bg__left" src="'.concat(a,'assets/gallery/ramaLeft.png" alt="">\n      <img class="bg__right" src="').concat(a,'assets/gallery/ramaRight.png" alt="">\n    </div>\n    ')};const l=function(){window.onscroll=function(){var a=window.scrollY,n=document.getElementsByClassName("header__container")[0];a>0?n.classList.add("header__container-bg"):n.classList.remove("header__container-bg")}};(function(c){var e=document.getElementsByClassName("header__container")[0],o=document.getElementsByClassName("footer__container")[0];e.innerHTML=a(c),o.innerHTML=n(),document.body.insertAdjacentHTML("afterbegin",t(c)),s(),l()})("")})();