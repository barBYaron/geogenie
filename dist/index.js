var settings = {
    showMenu: false
};
function renderHeader(root) {
    var header = "\n  <div class=\"header__container\">\n\n  <div class=\"header__container__left\">\n\t  <a href=\"./index.html\">\n\t\t  <img src=\"https://geo-genie.co.il/wp-content/uploads/2023/01/TerraGenie_Logo-removebg-preview-768x129.png\"\n\t\t\t  alt=\"\">\n\t  </a>\n  </div>\n\n  <div class=\"header__container__empty\"></div>\n\n  <div class=\"header__container__menuMobile\" onclick=\"toggleMenu()\">\n  " + (settings.showMenu ? "<img src=\"./meinDist/mailImage/XMenuMobile.png\" alt=\"\">" : "<img src=\"./meinDist/mailImage/menuMobile.png\" alt=\"\">") + " </div>\n\n  <div class=\"header__container__right\">\n\n\t  <div class=\"header__container__right__label\"  id=\"index\">\n\t\t  <a href=\"./index.html\">HOME</a>\n\t\t  <div class=\"header__container__right__label__line\"></div>\n\t  </div>\n\n\t  <div class=\"header__container__right__label\"  id=\"about\">\n\t\t  <a href=\"./about.html\">ABOUT</a>\n\t\t  <div class=\"header__container__right__label__line\"></div>\n\t  </div>\n\n\t  <div class=\"header__container__right__label\" id=\"software\">\n\t\t  <a href=\"./software.html\">SOFTWARE</a>\n\t\t  \n\t\t  <div class=\"header__container__right__label__line\"></div>\n\t  </div>\n\n\t  <div class=\"header__container__right__label hardware\" onmouseover=\"showUl()\" onmouseout=\"hideUl()\" id=\"hardware\">\n\t\t  <a href=\"./hardware.html\">HARDWARE\n\t\t\t  <div class=\"click\"> \n\t\t\t  <img src=\"./meinDist/mailImage/errow.png\" alt=\"\"> </div>\n\t\t </a>\n\t\t <div class=\"header__container__right__label__line\" ></div>\n\t\t \n\t\t <ul>\n\t\t <li onclick=\"hendleScroll('TerraGeniePRO')\">\n\t\t\t TerraGenie PRO\n\t\t </li>\n\t\t <li onclick=\"hendleScroll('TerraGenieNX')\">\n\t\t\t TerraGenie NX\n\t\t </li>\n\t\t <li onclick=\"hendleScroll('GeoGeneiTAB')\">\n\t\t\t TerraGenie TAB\n\t\t </li>\n\t\t</ul>\n\n\t  </div>\n\n\t  <div class=\"header__container__right__label\" id=\"contact\">\n\t\t  <a href=\"./contact.html\">CONTACT</a>\n\t\t  <div class=\"header__container__right__label__line\"></div>\n\t  </div>\n\n  </div>\n\n</div>";
    if (root) {
        root.innerHTML = header;
    }
}
renderHeader(document.querySelector('#header'));
function renderMobileMenu(root) {
    var mobileMenu = "\n\t<div class=\"forMobile__label\" id=\"index\">\n\t\t<a href=\"./index.html\">HOME</a>\n\t\t<div class=\"forMobile__label__line\"></div>\n\t</div>\n\n\t<div class=\"forMobile__label\" id=\"about\">\n\t\t<a href=\"./about.html\">ABOUT</a>\n\t\t<div class=\"forMobile__label__line\"></div>\n\t</div>\n\n\t<div class=\"forMobile__label\" id=\"software\">\n\t\t<a href=\"./software.html\">SOFTWARE</a>\n\n\t\t<div class=\"forMobile__label__line\"></div>\n\t</div>\n\n\t<div class=\"forMobile__label hardware\" id=\"hardware\" onclick=\"toggleHardware()\">\n\t\t<a>HARDWARE\n\t\t\t<div class=\"click\" onclick=\"showUl()\" onclick=\"hideUl()\"> \n\t\t\t<img src=\"./meinDist/mailImage/errow.png\" alt=\"\"> </div>\n\t\t</a>\n\t\t<div class=\"forMobile__label__line\"></div>\n\n\t\t<ul id=\"ul-hardware\" class=\"mobile close\" style=\"height:0px; transform:scale(1,0)\">\n\t\t\t<li onclick=\"hendleScroll('TerraGeniePRO')\">\n\t\t\t\tTerraGenie PRO\n\t\t\t</li>\n\t\t\t<li onclick=\"hendleScroll('TerraGenieNX')\">\n\t\t\t\tTerraGenie NX\n\t\t\t</li>\n\t\t\t<li onclick=\"hendleScroll('GeoGeneiTAB')\">\n\t\t\t\tTerraGenie TAB\n\t\t\t</li>\n\t\t</ul>\n\n\t</div>\n\n\t<div class=\"forMobile__label\" id=\"contact\">\n\t\t<a href=\"./contact.html\">CONTACT</a>\n\t\t<div class=\"forMobile__label__line\"></div>\n\t</div>";
    if (root) {
        root.innerHTML = mobileMenu;
    }
}
renderMobileMenu(document.querySelector('#menuForMobile'));
function renderFooter(root) {
    var footer = "\n\n\t<div class=\"footer__columns\">\n\t\n\t<div class=\"footer__columns__block footer__columns__block--empty\">\n\t<a href=\"\"></a>\n\t</div>\n\n\t<div class=\"footer__columns__block\">\n\t\t<a href=\"./about.html\">ABOUT</a>\n\t\t<a href=\"./hardware.html\">PRODUCTS</a>\n\t</div>\n\n\t<div class=\"footer__columns__block\">\n\t\t<a href=\"http://www.facebook.com/profile.php?id=100089896091480\" target=\"_blank\">\n\t\t\t<div class=\"footer__columns__block__icon\"><svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 320 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d=\"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\"/></svg></div>\n\t\t\tFacebook\n\t\t</a>\n\n\t\t<a href=\"http://www.linkedin.com/in/terragenie-ltd-793209257/\" target=\"_blank\">\n\t\t\t<div class=\"footer__columns__block__icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 448 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"/></svg></div>\n\t\t\tLinkedin\n\t\t</a>\n\n\t\t<a href=\"http://api.whatsapp.com/send/?phone=972508282109\" target=\"_blank\">\n\t\t\t<div class=\"divWhatsApp\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 448 512\"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d=\"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z\"/></svg></div>\n\t\t\tWhatsapp\n\t\t</a>\n\t</div>\n\n\t<div class=\"footer__columns__block footer__columns__block--last\">\n\t\t<p class=\"onlyP\">1 Hashdera St. Zofit, Israel</p>\n\n\t\t<a href=\"tel:+972-9-7415043\">+972-9-7415043</a>\n\n\t\t<p><a href=\"\"><img src=\"./meinDist/mailImage/image-removebg-preview.png\" alt=\"\"></a></p>\n\t</div>\n\t</div>";
    if (root) {
        root.innerHTML = footer;
    }
}
renderFooter(document.querySelector('#footer'));
function showUl() {
    var ul = document.querySelector('ul');
    var contact = document.querySelector('#contact');
    if (ul) {
        ul.style.opacity = '1';
        ul.style.zIndex = '999';
    }
    if (contact) {
        contact.style.top = '30px';
    }
}
function hideUl() {
    var ul = document.querySelector('ul');
    if (ul) {
        ul.style.opacity = '0';
    }
}
function getPath() {
    var path = window.location.pathname;
    var pathArr = path.split('/');
    var pathName = pathArr[pathArr.length - 1];
    var pageName = pathName.split('.')[0];
    console.log(pageName);
    return pageName;
}
getPath();
function renderCurrentMenu() {
    var pageName = getPath();
    var menu = document.querySelector("#" + pageName);
    if (menu) {
        menu.classList.add('current');
    }
}
renderCurrentMenu();
function getElementPositionFromTop(elementId) {
    try {
        var element = document.getElementById(elementId);
        if (!element)
            throw new Error('element not found');
        var pos = element.offsetTop;
    }
    catch (error) {
        console.error(error);
    }
}
function hendleScroll(elementId) {
    try {
        var pageName = getPath();
        console.log(pageName);
        if (pageName !== 'hardware') {
            window.location.href = "./hardware.html#" + elementId;
        }
        else {
            var element = document.getElementById(elementId);
            if (!element)
                throw new Error('element not found');
            var pos = element.offsetTop;
            window.scrollTo({
                top: pos,
                behavior: 'smooth'
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function toggleMenu() {
    console.log('toggleMenu');
    var menu = document.querySelector('#menuForMobile');
    if (menu === null || menu === void 0 ? void 0 : menu.classList.contains('display')) {
        menu.classList.remove('display');
        menu.classList.add('hide');
        settings.showMenu = false;
        document.body.style.overflow = 'auto';
    }
    else {
        menu === null || menu === void 0 ? void 0 : menu.classList.remove('hide');
        menu === null || menu === void 0 ? void 0 : menu.classList.add('display');
        settings.showMenu = true;
        document.body.style.overflow = 'hidden';
    }
    renderHeader(document.querySelector('#header'));
}
function toggleHardware() {
    try {
        console.log('toggleHardware');
        var hardware = document.querySelector('#hardware');
        if (!hardware)
            throw new Error('hardware element not found');
        var ul = document.querySelector('#ul-hardware');
        if (!ul)
            throw new Error('ul element not found');
        if (ul.classList.contains('close')) {
            ul.classList.remove('close');
            ul.classList.add('open');
            ul.style.height = '100px';
            ul.style.transform = 'scale(1,1) translateY(0px)';
        }
        else {
            ul.classList.remove('open');
            ul.classList.add('close');
            // hardware.classList.remove('open');
            ul.style.height = '0px';
            ul.style.transform = 'scale(1,0) translateY(-100px)';
        }
    }
    catch (error) {
        console.error(error);
    }
}
