function renderHeader(root) {
    var header = "\n  <div class=\"header__container\">\n\n  <div class=\"header__container__left\">\n      <a href=\"./index.html\">\n          <img src=\"https://geo-genie.co.il/wp-content/uploads/2023/01/TerraGenie_Logo-removebg-preview-768x129.png\"\n              alt=\"\">\n      </a>\n  </div>\n\n  <div class=\"header__container__empty\"></div>\n\n  <div class=\"header__container__right\">\n\n      <div class=\"header__container__right__label\">\n          <a href=\"./index.html\">HOME</a>\n          <div class=\"header__container__right__label__line\"></div>\n      </div>\n\n      <div class=\"header__container__right__label\">\n          <a href=\"./about.html\">ABOUT</a>\n          <div class=\"header__container__right__label__line\"></div>\n      </div>\n\n      <div class=\"header__container__right__label\">\n          <a href=\"./software.html\">SOFTWARE</a>\n          \n          <div class=\"header__container__right__label__line\"></div>\n      </div>\n\n      <div class=\"header__container__right__label hardware\">\n          <a href=\"./hardware.html\">HARDWARE\n              <div class=\"click\"> > </div>\n         </a>\n         <div class=\"header__container__right__label__line\"></div>\n         \n         <ul>\n          <li>\n              <a href=\"/\">TerraGenie PRO</a>\n          </li>\n          <li>\n              <a href=\"/\">TerraGenie NX</a>\n          </li>\n          <li>\n              <a href=\"/\">TerraGenie TAB</a>\n          </li>\n         </ul>\n\n      </div>\n\n      <div class=\"header__container__right__label\">\n          <a href=\"./contact.html\">CONTACT</a>\n          <div class=\"header__container__right__label__line\"></div>\n      </div>\n\n  </div>\n\n</div>";
    if (root) {
        root.innerHTML = header;
    }
}
renderHeader(document.querySelector('#header'));
function renderFooter(root) {
    var footer = "\n\n    <div class=\"footer__columns\">\n    \n    <div class=\"footer__columns__block footer__columns__block--empty\">\n    <a href=\"\"></a>\n    </div>\n\n    <div class=\"footer__columns__block\">\n        <a href=\"./about.html\">ABOUT</a>\n        <a href=\"./hardware.html\">PRODUCTS</a>\n    </div>\n\n    <div class=\"footer__columns__block\">\n        <a href=\"http://www.facebook.com/profile.php?id=100089896091480\">\n            <div></div>\n            Facebook\n        </a>\n\n        <a href=\"http://www.linkedin.com/in/terragenie-ltd-793209257/\">\n            <div></div>\n            Linkedin\n        </a>\n\n        <a href=\"http://api.whatsapp.com/send/?phone=972508282109\">\n            <div></div>\n            Whatsapp\n        </a>\n    </div>\n\n    <div class=\"footer__columns__block footer__columns__block--last\">\n        <p class=\"onlyP\">1 Hashdera St. Zofit, Israel</p>\n\n        <a href=\"tel:+972-9-7415043\">+972-9-7415043</a>\n\n        <p><a href=\"mailto:info@geo-genie.co.il\">info@geo-genie.co.il</a></p>\n    </div>\n    </div>";
    if (root) {
        root.innerHTML = footer;
    }
}
renderFooter(document.querySelector('#footer'));
