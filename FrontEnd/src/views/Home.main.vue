<template>

    <div class="card bg-dark text-white">
        <img class="card-img" src="../assets/images/flower.jpg" alt="Card image">
        <div class="card-img-overlay">
            <router-link class="home__btn btn shop-btn" :to="{ name: 'shop' }">shop now</router-link>
        </div>
    </div>
    <!-- ============= New Section ============= -->

    <section class="section new" id="new">
        <div class="section__title">
            <h1>new arrivals</h1>
        </div>

        <div class="new_product">
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src="../assets/images/rose_hr.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Hoa Mèo</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="../assets/images/sen_hr.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Hoa Mèo</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional
                            content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="../assets/images/sen1_hr.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Hoa Mèo</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal
                            height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section brands">
        <div class="section__title">
            <h1>Popular</h1>
        </div>
        <div class="brands__container container">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <img src="../" alt="">
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">

                </div>ll
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">

                </div>
            </div>
        </div>
    </section>

    <section class="section subscribe">
        <div class="section__title">
            <h1>newsletter</h1>
        </div>
        <div class="subscribe__container container">
            <div class="subscribe__text">
                <p>subscribe to our newsletter to get what's new in products</p>
            </div>
            <form class="form" autocomplete="off">
                <input type="text" class="form__input" name="email" id="email" placeholder="Subscribe" />
                <button type="submit" class="form__btn btn btn-border btn-border-white">subscribe</button>
            </form>
        </div>
    </section>

</template>
<script>
export default {
    mounted() {
        let circleBtn = document.querySelector(".go-down-btn");
        let circleText = circleBtn.querySelector(".circle-text");
        circleText.innerHTML = circleText.textContent
            .split("")
            .map((char, index) => `<span style="transform: rotate(${index * 28.3}deg)">${char}</span>`)
            .join("");
    }, // Thêm dấu phẩy ở đây

    data() {
        return {
            newProducts: [
                // Thông tin về các sản phẩm mới ở đây
                {
                    id: 1,
                    title: 'Product 1',
                    image: '',
                    image2: '../assets/images/product1_2.png',
                    category: 'Category 1',
                    price: 10.99
                },
                {
                    id: 2,
                    title: 'Product 2',
                    image: '../assets/images/product2.png',
                    image2: '../assets/images/product2_2.png',
                    category: 'Category 2',
                    price: 19.99
                },
                // Thêm các sản phẩm khác tương tự ở đây
            ]
        };
    }
};
</script>
<style lang="css">
.card-img-top {
    border-radius: 20px;
}

.home {
    position: relative;
    height: 100vh;
    padding-top: 70px;
}

.home__content {
    display: flex;
    width: 100%;
    height: 100%;
}

.home__slide {
    height: 600px;
    width: 100%;
    background-color: #ffffff;
}

.home__image {
    width: 100%;
    height: 100%;

    /* opacity: 0; */
}

/* .home__slide.reveal .home__image {
    transform: translateY(0) scale(1);
    opacity: 1;
} */

.home__image img {
    object-fit: contain !important;
}

.home__description {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.home__sub-heading {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 600;
    text-transform: capitalize;
    color: #98a390;
    transform: scaleX(0.2);
    opacity: 0;
    transition: transform 1500ms ease, opacity 1500ms ease;
}

.home__heading {
    font-size: clamp(2.5rem, 6vw, 3rem * 1.5);
    color: #000000;
    text-transform: capitalize;
    transform: scaleX(0.2);
    opacity: 0;
    transition: transform 1500ms ease, opacity 1500ms ease;
    transition-delay: 0.5s;
}

.home__slide.reveal :where(.home__sub-heading, .home__heading) {
    transform: scaleX(1);
    opacity: 1;
}

.shop-btn {
    display: block;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem 3rem;
    background-color: #98a390;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    white-space: nowrap;
    z-index: 20;
    transition: background 300ms ease;
}

.shop-btn:hover {
    background-color: #a1ac99;
}

.go-down-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 50px;
    right: 15%;
    width: 90px;
    height: 90px;
    z-index: 20;
    transition: transform 300ms linear;
}

.go-down-btn:hover {
    transform: scale(1.1);
}

.go-down-btn .icon {
    font-size: 2rem;
}

.go-down-btn .circle-text {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: rotateText 8000ms infinite linear;
}

.go-down-btn .circle-text span {
    position: absolute;
    font-size: calc(1rem / 1.3);
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: 0 45px;
}

@keyframes rotateText {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

/* ============= END Home SECTION ============= */

.section__title {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.section__title h1 {
    text-transform: uppercase;
}

/* ============= START NEW SECTION ============= */

.new_product {
    /* padding: 15px; */
    display: flex;
}

.card {
    margin: 15px;
    width: auto;
    height: auto;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
}

.card-details {
    color: black;
    height: 100%;
    gap: .5em;
    display: grid;
    place-content: center;
}

.card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #353535;
    color: #fff;
    font-size: 1rem;
    padding: .5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
}

.text-body {
    color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
    font-size: 1.5em;
    font-weight: bold;
}

/*Hover*/
.card:hover {
    border-color: #353535;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
}

.new {
    padding: calc(3rem * 1.3) 0;
    min-height: 100vh;
}

@media screen and (max-width: 992px) {
    .new__content {
        max-width: 600px;
    }
}

@media screen and (max-width: 768px) {
    .new__content {
        max-width: 300px;
    }
}

.swiper-btns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.swiper-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: static !important;
    width: 40px !important;
    height: 40px !important;
}

.swiper-btn::after {
    display: none;
}

.new__products {
    padding: 20px;
    transition-delay: 0s !important;
}

.product-card {
    overflow: hidden;
}

.product-card__image {
    width: 100%;
    height: 360px;
    background-color: #f5f5f5;
    overflow: hidden;
}

.product-card__image img {
    transition: transform 8000ms ease;
}

.product-card:hover .product-card__image img {
    transform: scale(1.2);
}

.product-card__description {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    position: relative;
    padding: 1rem 3px;
    background-color: #ffffff;
}

.product-card__description .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-card__description .border-animation {
    display: block;
    position: absolute;
    background-color: #000000;
    transition: all 300ms ease;
}

.product-card__description .border-animation:nth-of-type(1) {
    height: 0px;
    width: 2px;
    left: 0;
    top: 0;
}

.product-card__description .border-animation:nth-of-type(2) {
    height: 2px;
    width: 0px;
    left: 0;
    bottom: 0;
}

.product-card__description .border-animation:nth-of-type(3) {
    height: 0px;
    width: 2px;
    right: 0;
    bottom: 0;
}

.product-card:hover .product-card__description .border-animation:nth-of-type(1) {
    height: 100%;
}

.product-card:hover .product-card__description .border-animation:nth-of-type(2) {
    width: 100%;
}

.product-card:hover .product-card__description .border-animation:nth-of-type(3) {
    height: 100%;
}

.product-card__btn {
    transition: color 300ms ease;
}

.product-card__btn:hover {
    color: #98a390;
}

.product-card__btn,
.explore-more {
    display: flex;
    align-items: center;
    column-gap: 5px;
    width: fit-content;
    background-color: transparent;
}

.explore-more span {
    transition: transform 300ms ease;
}

.explore-more:hover span {
    transform: translateX(2px);
}

.product-card__title {
    text-transform: capitalize;
    font-size: calc(1.5rem / 1.3);
}

.product-card__price {
    font-size: calc(1.5rem / 1.3);
    color: #98a390;
}

.new__content {
    display: flex;
    width: 269.5px;
    margin-right: 20px px;

}

/* ============= END NEW SECTION ============= */

/* ============= START SHOP SECTION ============= */

.shop {
    padding: calc(3rem * 1.3) 0;
    min-height: 100vh;
}

.shop__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
}

.shop__categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.shop__category {
    text-transform: capitalize;
    padding: calc(1rem / 2) 1rem;
}

.shop__category.selected {
    background-color: #000000;
    color: #ffffff !important;
}

.shop__products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.shop__product {
    width: 100%;
    max-width: 268px;
}

.shop__product.hide {
    display: none;
}

/* ============= END SHOP SECTION ============= */

/* ============= START BRANDS SECTION ============= */

.brands {
    padding: calc(3rem * 1.3) 0;
}

.brands__container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.brands__logo {
    width: 150px;
    background-color: #f5f5f5;
    padding: 10px;
}

.brands__logo img {
    aspect-ratio: 3/2;
    object-fit: contain;
}

/* ============= END  BRANDS SECTION ============= */

/* ============= START TRENDING SECTION ============= */

.trending {
    padding: calc(3rem * 1.3) 0;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.trending__container {
    padding: 0 !important;
}

.trending__content {
    width: 100%;
    height: 100vh;
}

.trending__product {
    display: flex !important;
    width: 100% !important;
    height: 100% !important;
    column-gap: 2rem;
    background-color: #f5f5f5;
    position: relative;
}

.trending__product__image {
    width: 50%;
    height: 100%;
}

.trending__product__description {
    display: flex;
    flex-direction: column;
    padding: clamp(1rem, 6vw, 3rem);
    padding-right: 1rem;
    margin-top: clamp(1rem, 6vw, 3rem);
    width: 50%;
}

.trending__product__text h1 {
    margin-bottom: calc(1rem / 2);
    font-size: clamp(2rem, 6vw, 3rem);
}

.trending__product__text h1 span {
    color: #98a390;
}

.trending__product__text h1 p {
    font-size: clamp(2rem, 6vw, 2.5rem);
}

.trending__product__text .category {
    font-size: 1rem;
    font-weight: 600;
    font-variant: small-caps;
    color: #6d6d6d;
    margin-bottom: 2rem;
}

.trending__product__text .desc {
    margin-bottom: 3rem;
    font-size: clamp(1rem, 4vw, 1rem * 1.2);
    letter-spacing: 0.06em;
    line-height: 1.4em;
}

@media screen and (max-width: 992px) {
    .trending__product__image {
        width: 100%;
    }

    .trending__product__description {
        position: absolute;
        width: 100%;
        height: 100%;
        margin-top: 0;
        justify-content: center;
        text-align: center;
        background-color: #ffffff;
    }

    .trending__product__text .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
    }
}

/* ============= END TRENDING SECTION ============= */

/* ============= START SUBSCRIBE SECTION ============= */

.subscribe {
    position: relative;
    padding: calc(3rem * 1.3) 0;
    background-image: url("../assets/images/subscribe1.jpg");
    background-position: center;
    background-size: cover;
}

.subscribe::before {
    content: "";
    position: absolute;
    background-color: #00000047;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.subscribe .section__title {
    color: #ffffff;
    position: relative;
    z-index: 10;
}

.subscribe__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    position: relative;
    z-index: 10;
}

.subscribe__text {
    text-transform: capitalize;
    font-size: 1.5rem;
    text-align: center;
    color: #ffffff;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 100%;
}

.form__input {
    font-size: 1rem;
    border: 2px solid var();
    outline: none;
    background-color: transparent;
    padding: calc(1rem / 2);
    min-width: 230px;
    width: 100%;
    max-width: 350px;
    color: #ffffff;
}

.form__input::placeholder {
    color: #e5e5e5;
}

.form__btn {
    padding: calc(1rem / 2) 1rem;
}
</style>