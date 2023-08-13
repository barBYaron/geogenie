// <a href="/hardware.html#TerraGeniePRO">TerraGeniePRO</a>
//<a href="/hardware.html#TerraGenieNX">TerraGenie NX</a>
// <a href="/hardware.html#GeoGeneiTAB">TerraGenie TAB</a>

function renderHeader(root: HTMLElement | null) {
    const header = `
  <div class="header__container">

  <div class="header__container__left">
      <a href="./index.html">
          <img src="https://geo-genie.co.il/wp-content/uploads/2023/01/TerraGenie_Logo-removebg-preview-768x129.png"
              alt="">
      </a>
  </div>

  <div class="header__container__empty"></div>

  <div class="header__container__menuMobile" onclick="showMenu()">
  <i class="fas fa-bars">O</i> </div>

  <div class="header__container__right">

      <div class="header__container__right__label"  id="index">
          <a href="./index.html">HOME</a>
          <div class="header__container__right__label__line"></div>
      </div>

      <div class="header__container__right__label"  id="about">
          <a href="./about.html">ABOUT</a>
          <div class="header__container__right__label__line"></div>
      </div>

      <div class="header__container__right__label" id="software">
          <a href="./software.html">SOFTWARE</a>
          
          <div class="header__container__right__label__line"></div>
      </div>

      <div class="header__container__right__label hardware" onmouseover="showUl()" onmouseout="hideUl()" id="hardware">
          <a href="./hardware.html">HARDWARE
              <div class="click"> > </div>
         </a>
         <div class="header__container__right__label__line" ></div>
         
         <ul>
         <li onclick="hendleScroll('TerraGeniePRO')">
             TerraGenie PRO
         </li>
         <li onclick="hendleScroll('TerraGenieNX')">
             TerraGenie NX
         </li>
         <li onclick="hendleScroll('GeoGeneiTAB')">
             TerraGenie TAB
         </li>
        </ul>

      </div>

      <div class="header__container__right__label" id="contact">
          <a href="./contact.html">CONTACT</a>
          <div class="header__container__right__label__line"></div>
      </div>

  </div>

</div>`;

    if (root) {
        root.innerHTML = header;
    }
}
renderHeader(document.querySelector('#header'));


function renderMobileMenu(root: HTMLElement | null) {
    const mobileMenu = `
    <div class="forMobile">

    <div class="forMobile__label" id="index">
        <a href="./index.html">HOME</a>
        <div class="forMobile__label__line"></div>
    </div>

    <div class="forMobile__label" id="about">
        <a href="./about.html">ABOUT</a>
        <div class="forMobile__label__line"></div>
    </div>

    <div class="forMobile__label" id="software">
        <a href="./software.html">SOFTWARE</a>

        <div class="forMobile__label__line"></div>
    </div>

    <div class="forMobile__label hardware" onmouseover="showUl()" onmouseout="hideUl()" id="hardware">
        <a href="./hardware.html">HARDWARE
            <div class="click"> > </div>
        </a>
        <div class="forMobile__label__line"></div>

        <ul class="mobile">
            <li onclick="hendleScroll('TerraGeniePRO')">
                TerraGenie PRO
            </li>
            <li onclick="hendleScroll('TerraGenieNX')">
                TerraGenie NX
            </li>
            <li onclick="hendleScroll('GeoGeneiTAB')">
                TerraGenie TAB
            </li>
        </ul>

    </div>

    <div class="forMobile__label" id="contact">
        <a href="./contact.html">CONTACT</a>
        <div class="forMobile__label__line"></div>
    </div>

</div>`

    if (root) {
        root.innerHTML = mobileMenu;
    }
}
renderMobileMenu(document.querySelector('#mobileMenu'));


function renderFooter(root: HTMLElement | null) {
    const footer = `

    <div class="footer__columns">
    
    <div class="footer__columns__block footer__columns__block--empty">
    <a href=""></a>
    </div>

    <div class="footer__columns__block">
        <a href="./about.html">ABOUT</a>
        <a href="./hardware.html">PRODUCTS</a>
    </div>

    <div class="footer__columns__block">
        <a href="http://www.facebook.com/profile.php?id=100089896091480" target="_blank">
            <div></div>
            Facebook
        </a>

        <a href="http://www.linkedin.com/in/terragenie-ltd-793209257/" target="_blank">
            <div></div>
            Linkedin
        </a>

        <a href="http://api.whatsapp.com/send/?phone=972508282109" target="_blank">
            <div></div>
            Whatsapp
        </a>
    </div>

    <div class="footer__columns__block footer__columns__block--last">
        <p class="onlyP">1 Hashdera St. Zofit, Israel</p>

        <a href="tel:+972-9-7415043">+972-9-7415043</a>

        <p><a href="mailto:info@geo-genie.co.il">info@geo-genie.co.il</a></p>
    </div>
    </div>`;

    if (root) {
        root.innerHTML = footer;
    }
}
renderFooter(document.querySelector('#footer'));

function showUl() {
    const ul = document.querySelector('ul');

    if (ul) {
        ul.style.opacity = '1';
    }
}

function hideUl() {
    const ul = document.querySelector('ul');

    if (ul) {
        ul.style.opacity = '0';
    }
}

function getPath() {
    const path = window.location.pathname;
    const pathArr = path.split('/');
    const pathName = pathArr[pathArr.length - 1];

    const pageName = pathName.split('.')[0];

    console.log(pageName)

    return pageName;
}
getPath();
function renderCurrentMenu() {
    const pageName = getPath();

    const menu = document.querySelector(`#${pageName}`);


    if (menu) {
        menu.classList.add('current');
    }
}
renderCurrentMenu();

function getElementPositionFromTop(elementId: string) {
    try {
        const element = document.getElementById(elementId);

        if (!element) throw new Error('element not found');
        let pos = element.offsetTop;

    } catch (error) {
        console.error(error)
    }
}

function hendleScroll(elementId: string) {
    try {
        const element = document.getElementById(elementId);

        if (!element) throw new Error('element not found');
        let pos = element.offsetTop;

        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        })
    } catch (error) {
        console.error(error)
    }
}

function showMenu() {
    const menu = document.querySelector('.forMobile');

    if (menu) {
        menu.classList.toggle('show');
    }
}