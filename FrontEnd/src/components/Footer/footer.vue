<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__col">
        <div class="footer__logo">
          <h1>
            <a href="./">huang.</a>
          </h1>
        </div>
        <div class="footer__description">
          <p>It was found to sell the best products from the most popular brands in the world.</p>
        </div>
      </div>
      <div class="footer__col">
        <div class="footer__title">
          <h3>company</h3>
          <ul class="footer__links">
            <li class="footer__link"><a href="#home">Home</a></li>
            <li class="footer__link"><a href="#new">New</a></li>
            <li class="footer__link"><a href="#shop">Shop</a></li>
            <li class="footer__link"><a href="#trending">Trending</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__col">
        <div class="footer__title">
          <h3>information</h3>
          <ul class="footer__links">
            <li class="footer__link">
              <a href="#">
                <span class="material-symbols-rounded"> location_on </span>
                <p>Can Tho, Viet Nam</p>
              </a>
            </li>
            <li class="footer__link">
              <a href="#">
                <span class="material-symbols-rounded"> schedule </span>
                <p>
                  Saturday - Thursday <br />
                  9AM - 12PM
                </p>
              </a>
            </li>
            <li class="footer__link">
              <a href="tel:+12334567775">
                <span class="material-symbols-rounded"> call </span>
                <p>+84 394241676</p>
              </a>
            </li>
            <li class="footer__link">
              <a href="mailto:shopy@gmail.com">
                <span class="material-symbols-rounded"> mail </span>
                <p>huang@gmail.com</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__col">
        <div class="footer__title">
          <h3>social media</h3>
        </div>
        <ul class="footer__links">
          <li class="footer__link"><a href="">Inestagram</a></li>
          <li class="footer__link"><a href="">Facebook</a></li>
          <li class="footer__link"><a href="">Whatsapp</a></li>
          <li class="footer__link"><a href="">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__copyRight">
      <p>&copy; 2023 <span>Huang</span> All Rights Reserved</p>
    </div>
  </footer>
</template>
<style lang="css">
.footer {
    background-color: var(--white-95);
    padding-top: calc(var(--padding-3) * 1.3);
}

.footer__container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-between;
    padding-bottom: calc(var(--padding-3) * 1.3);
}

.footer__col {
    flex-basis: 230px;
}

.footer__links {
    list-style: none;
}

.footer__link {
    margin: calc(var(--margin-1) / 1.5) 0;
}

.footer__link a {
    display: flex;
    column-gap: 10px;
}

.footer__copyRight {
    text-align: center;
    padding: var(--padding-1) 0;
    border-top: 2px solid var(--black-4\13);
}

.footer__copyRight span {
    color: var(--dark-lead);
    font-weight: var(--font-sime-bold);
}

@media screen and (max-width: 584px) {
    .footer__container {
        justify-content: center;
    }
}
</style>