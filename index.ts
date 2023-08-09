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

  <div class="header__container__right">

      <div class="header__container__right__label">
          <a href="./index.html">HOME</a>
          <div class="header__container__right__label__line"></div>
      </div>

      <div class="header__container__right__label">
          <a href="./about.html">ABOUT</a>
          <div class="header__container__right__label__line"></div>
      </div>

      <div class="header__container__right__label">
          <a href="./software.html">SOFTWARE</a>
          
          <div class="header__container__right__label__line"></div>
      </div>

      <div class="header__container__right__label hardware">
          <a href="./hardware.html">HARDWARE
              <div class="click"> > </div>
         </a>
         <div class="header__container__right__label__line"></div>
         
         <ul>
          <li>
              <a href="/">TerraGenie PRO</a>
          </li>
          <li>
              <a href="/">TerraGenie NX</a>
          </li>
          <li>
              <a href="/">TerraGenie TAB</a>
          </li>
         </ul>

      </div>

      <div class="header__container__right__label">
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

function renderFooter(root: HTMLElement | null) {
    const footer = `

    <div class="footer__columns">
    
    <div class="footer__columns__block footer__columns__block--empty"></div>

    <div class="footer__columns__block">
        <a href="./about.html">ABOUT</a>
        <a href="./hardware.html">PRODUCTS</a>
    </div>

    <div class="footer__columns__block">
        <a href="http://www.facebook.com/profile.php?id=100089896091480">
            <div></div>
            Facebook
        </a>

        <a href="http://www.linkedin.com/in/terragenie-ltd-793209257/">
            <div></div>
            Linkedin
        </a>

        <a href="http://api.whatsapp.com/send/?phone=972508282109">
            <div></div>
            Whatsapp
        </a>
    </div>

    <div class="footer__columns__block">
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
