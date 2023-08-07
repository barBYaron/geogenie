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

</div>`

    if (root) {
        root.innerHTML = header;
        }
}
renderHeader(document.querySelector('#header'));