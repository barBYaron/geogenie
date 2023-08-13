// <a href="/hardware.html#TerraGeniePRO">TerraGeniePRO</a>
//<a href="/hardware.html#TerraGenieNX">TerraGenie NX</a>
// <a href="/hardware.html#GeoGeneiTAB">TerraGenie TAB</a>
function renderHeader(root) {
    var header = "\n  <div class=\"header__container\">\n\n  <div class=\"header__container__left\">\n      <a href=\"./index.html\">\n          <img src=\"https://geo-genie.co.il/wp-content/uploads/2023/01/TerraGenie_Logo-removebg-preview-768x129.png\"\n              alt=\"\">\n      </a>\n  </div>\n\n  <div class=\"header__container__empty\"></div>\n\n  <div class=\"header__container__menuMobile\" onclick=\"showMenu()\">\n  <i class=\"fas fa-bars\">O</i> </div>\n\n  <div class=\"header__container__right\">\n\n      <div class=\"header__container__right__label\"  id=\"index\">\n          <a href=\"./index.html\">HOME</a>\n          <div class=\"header__container__right__label__line\"></div>\n      </div>\n\n      <div class=\"header__container__right__label\"  id=\"about\">\n          <a href=\"./about.html\">ABOUT</a>\n          <div class=\"header__container__right__label__line\"></div>\n      </div>\n\n      <div class=\"header__container__right__label\" id=\"software\">\n          <a href=\"./software.html\">SOFTWARE</a>\n          \n          <div class=\"header__container__right__label__line\"></div>\n      </div>\n\n      <div class=\"header__container__right__label hardware\" onmouseover=\"showUl()\" onmouseout=\"hideUl()\" id=\"hardware\">\n          <a href=\"./hardware.html\">HARDWARE\n              <div class=\"click\"> > </div>\n         </a>\n         <div class=\"header__container__right__label__line\" ></div>\n         \n         <ul>\n         <li onclick=\"hendleScroll('TerraGeniePRO')\">\n             TerraGenie PRO\n         </li>\n         <li onclick=\"hendleScroll('TerraGenieNX')\">\n             TerraGenie NX\n         </li>\n         <li onclick=\"hendleScroll('GeoGeneiTAB')\">\n             TerraGenie TAB\n         </li>\n        </ul>\n\n      </div>\n\n      <div class=\"header__container__right__label\" id=\"contact\">\n          <a href=\"./contact.html\">CONTACT</a>\n          <div class=\"header__container__right__label__line\"></div>\n      </div>\n\n  </div>\n\n</div>";
    if (root) {
        root.innerHTML = header;
    }
}
renderHeader(document.querySelector('#header'));
function renderMobileMenu(root) {
    var mobileMenu = "\n    <div class=\"forMobile\">\n\n    <div class=\"forMobile__label\" id=\"index\">\n        <a href=\"./index.html\">HOME</a>\n        <div class=\"forMobile__label__line\"></div>\n    </div>\n\n    <div class=\"forMobile__label\" id=\"about\">\n        <a href=\"./about.html\">ABOUT</a>\n        <div class=\"forMobile__label__line\"></div>\n    </div>\n\n    <div class=\"forMobile__label\" id=\"software\">\n        <a href=\"./software.html\">SOFTWARE</a>\n\n        <div class=\"forMobile__label__line\"></div>\n    </div>\n\n    <div class=\"forMobile__label hardware\" onmouseover=\"showUl()\" onmouseout=\"hideUl()\" id=\"hardware\">\n        <a href=\"./hardware.html\">HARDWARE\n            <div class=\"click\"> > </div>\n        </a>\n        <div class=\"forMobile__label__line\"></div>\n\n        <ul class=\"mobile\">\n            <li onclick=\"hendleScroll('TerraGeniePRO')\">\n                TerraGenie PRO\n            </li>\n            <li onclick=\"hendleScroll('TerraGenieNX')\">\n                TerraGenie NX\n            </li>\n            <li onclick=\"hendleScroll('GeoGeneiTAB')\">\n                TerraGenie TAB\n            </li>\n        </ul>\n\n    </div>\n\n    <div class=\"forMobile__label\" id=\"contact\">\n        <a href=\"./contact.html\">CONTACT</a>\n        <div class=\"forMobile__label__line\"></div>\n    </div>\n\n</div>";
    if (root) {
        root.innerHTML = mobileMenu;
    }
}
renderMobileMenu(document.querySelector('#mobileMenu'));
function renderFooter(root) {
    var footer = "\n\n    <div class=\"footer__columns\">\n    \n    <div class=\"footer__columns__block footer__columns__block--empty\">\n    <a href=\"\"></a>\n    </div>\n\n    <div class=\"footer__columns__block\">\n        <a href=\"./about.html\">ABOUT</a>\n        <a href=\"./hardware.html\">PRODUCTS</a>\n    </div>\n\n    <div class=\"footer__columns__block\">\n        <a href=\"http://www.facebook.com/profile.php?id=100089896091480\" target=\"_blank\">\n            <div></div>\n            Facebook\n        </a>\n\n        <a href=\"http://www.linkedin.com/in/terragenie-ltd-793209257/\" target=\"_blank\">\n            <div></div>\n            Linkedin\n        </a>\n\n        <a href=\"http://api.whatsapp.com/send/?phone=972508282109\" target=\"_blank\">\n            <div></div>\n            Whatsapp\n        </a>\n    </div>\n\n    <div class=\"footer__columns__block footer__columns__block--last\">\n        <p class=\"onlyP\">1 Hashdera St. Zofit, Israel</p>\n\n        <a href=\"tel:+972-9-7415043\">+972-9-7415043</a>\n\n        <p><a href=\"mailto:info@geo-genie.co.il\">info@geo-genie.co.il</a></p>\n    </div>\n    </div>";
    if (root) {
        root.innerHTML = footer;
    }
}
renderFooter(document.querySelector('#footer'));
function showUl() {
    var ul = document.querySelector('ul');
    if (ul) {
        ul.style.opacity = '1';
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
        var element = document.getElementById(elementId);
        if (!element)
            throw new Error('element not found');
        var pos = element.offsetTop;
        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        });
    }
    catch (error) {
        console.error(error);
    }
}
function showMenu() {
    var menu = document.querySelector('.forMobile');
    if (menu) {
        menu.classList.toggle('show');
    }
}
