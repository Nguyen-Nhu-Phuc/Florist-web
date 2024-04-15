<template>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="obj">
                    <div class="objchild">
                        <span class="inn6">
                            <img src="../assets/images/hoa_cat.jpg" alt="">
                        </span>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.obj {
    position: relative;
    width: 200px;
    height: 200px;
    /* background-color: rgb(96, 96, 232); */
    transform-style: preserve-3d;
    transition: 0.5s all;
    transform: rotateX(-25deg) rotateY(20deg);
}

.objchild {
    animation: rotate 4s infinite linear;
    transform-style: preserve-3d;
    position: absolute;
    width: 100%;
    height: 100%;
    /* background:linear-gradient( to top,rgb(11, 11, 102),rgb(96, 96, 232) ) ; */
}

.objchild::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: rgb(37, 101, 230); */
    /* background: radial-gradient(center center, farthest-side , #9993, transparent); */
    filter: blur(20px);
    box-shadow: 0 0 200px 15px white;
    transform: rotateX(90deg) scale(1.1) translateZ(-120px);
}

.inn6 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(21, 21, 21);
    transform: rotateX(90deg) translateZ(100px);
    animation: updown 4s infinite ease-in-out;
}

@keyframes rotate {
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 360deg);
    }
}

@keyframes updown {
    0% {
        transform: translateY(100px) rotateX(90deg) translateZ(100px);
    }

    50% {
        transform: translateY(200px);
    }

    100% {
        transform: translateY(100px) rotateX(450deg) translateZ(100px);
    }
}

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
</style>