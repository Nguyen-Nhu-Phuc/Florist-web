<template>
    <header class="header">
        <nav class="header__container container">
            <div class="header__logo">
                
                <router-link to="shop">
                    <h1>Huang</h1>
                </router-link>
            </div>
            <ul class="header__links">
                <li class="header__link">
                    <router-link to="/ai">flowers ai
                       
                    </router-link>
                </li>
                <li class="header__link">
                    <router-link to="/home">home</router-link>
                </li>
                <li class="header__link">
                    <router-link to="/shop">shop</router-link>
                </li>
                <li class="header__link">
                    <ul class="navbar-nav ml-auto">
                        <li class="" v-if="!checkAuth">
                            <router-link class="login-cls" to="/login">login</router-link>
                        </li>
                        <li class="nav-item mr-4" v-else>
                            <div class="dropdown">
                                <div type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Xin chào, {{ user.fullName }}
                                </div>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" @click="logOut()">Đăng Xuất</a>
                                    <a class="dropdown-item">
                                        <router-link class="info-link" to="/info">Thông Tin Của Tôi</router-link>
                                    </a>
                                    <a class="dropdown-item">
                                        <router-link class="info-link" to="/admin">Admin</router-link>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="header__link">
                    <router-link :to="{ name: 'cart' }"><span class="cart_icon">
                            <i class="fas fa-shopping-cart mr-1 bx bx-cart cartNum"><span>{{
                                cart?.idProduct_item?.length ?? 0
                                    }}</span></i>
                        </span></router-link>
                </li>
            </ul>
            <div class="header__btn">
                <span style="--i: 0"></span>
                <span style="--i: 10"></span>
                <span style="--i: 20"></span>
            </div>
        </nav>
    </header>
</template>
<script>
import axios from "axios";
export default {
    inject: ["checkAuth"],
    data() {
        return {
            user: {},
            idcart: "",
            check: localStorage.getItem("Token"),
            cart: [],
        };
    },
    watch: {
        checkAuth(value) {
            console.log('auth')
            if (value) {
                this.showData();
                this.getCart()
            }
        },
    },
    methods: {
        async showData() {
            const token = JSON.parse(localStorage.getItem("Token"));
            if (token != undefined) {
                axios
                    .get(`http://localhost:3000/api/user/show`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("Token")}`, // Đính kèm Token vào tiêu đề
                        },
                    })
                    .then((res) => {
                        this.user = res.data;
                        this.check = true;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        async getCart() {
            this.idcart = JSON.parse(localStorage.getItem("cart"));
            if (this.idcart != undefined) {
                axios
                    .get(`http://localhost:3000/api/cart/show/${this.idcart}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("Token")}`, // Đính kèm Token vào tiêu đề
                        },
                    })
                    .then((res) => {
                        this.cart = res.data;
                        this.check = true;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        async logOut() {
            localStorage.clear();
            this.checkAuth = false;
            this.$router.replace({ path: "/login" });
        },
    },
};
</script>
<style>

.button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  font-size: 14px;
  background-image: linear-gradient(#353535, #353535);
  color: White;
  border: solid 2px #353535;
  height: 50px;
  margin-left: 30px;
  padding: 0px 20px;
  border-radius: 5px;
  font-weight: 600;
  transform: scale(0.89);
  position: relative;
}

.button:not(:hover) .hide,
.button:not(:hover) .icon::before,
.button:not(:hover) .icon::after {
  opacity: 0;
  visibility: hidden;
  transform: scale(1.4);
}

.hide {
  transition: all 0.2s ease;
}

.button:active {
  background-image: linear-gradient(#353535, #353535);
  border-color: #353535;
}

.icon {
  position: relative;
}

.icon::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 100%;
}

.icon::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-19%, -60%);
  width: 100px;
  height: 33px;
  background-color: transparent;
  border-radius: 12px 22px 2px 2px;
  border-right: solid 2px #ffffff;
  border-top: solid 2px transparent;
}

.icon .text-icon {
  color: red;
  position: absolute;
  font-size: 12px;
  left: -37px;
  top: -38px;
}

.icon svg {
  width: 20px;
  height: 20px;
  border: solid 2px transparent;
  display: flex;
}

.button:hover .icon svg {
  border: solid 2px #ffffff;
}

.padding-left {
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #ffffff;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.padding-left:before {
  content: "";
  width: 2px;
  height: 10px;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.padding-left:after {
  content: "";
  width: 2px;
  height: 10px;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.padding-left-line {
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: #ffffff;
  left: -24px;
  top: 11px;
  transform: rotate(-50deg);
}

.padding-left-line::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 100%;
}

.padding-left-text {
  color: red;
  font-size: 12px;
  position: absolute;
  white-space: nowrap;
  transform: rotate(50deg);
  bottom: 30px;
  left: -67px;
}

.padding-right {
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #ffffff;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.padding-right:before {
  content: "";
  width: 2px;
  height: 10px;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.padding-right:after {
  content: "";
  width: 2px;
  height: 10px;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.padding-right-line {
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: #ffffff;
  right: -24px;
  top: 11px;
  transform: rotate(50deg);
}

.padding-right-line::before {
  content: "";
  position: absolute;
  left: 30px;
  top: 0;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 100%;
}

.padding-right-text {
  color: red;
  font-size: 12px;
  position: absolute;
  white-space: nowrap;
  transform: rotate(-50deg);
  bottom: 34px;
  left: 21px;
}

.background {
  position: absolute;
}

.background::before {
  content: "";
  position: absolute;
  right: 27px;
  bottom: -70px;
  width: 100px;
  height: 53px;
  background-color: transparent;
  border-radius: 0px 0px 22px 22px;
  border-right: solid 2px #ffffff;
  border-bottom: solid 2px transparent;
}

.background::after {
  content: "";
  position: absolute;
  right: 25px;
  bottom: -20px;
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 100%;
}

.background-text {
  position: absolute;
  color: red;
  font-size: 12px;
  bottom: -70px;
  left: -115px;
}

.border {
  position: absolute;
  right: 0;
  top: 0;
}

.border:before {
  content: "";
  width: 15px;
  height: 15px;
  border: solid 2px #ffffff;
  position: absolute;
  right: 0%;
  top: 0;
  transform: translate(50%, -50%);
  border-radius: 100%;
}

.border:after {
  content: "";
  width: 2px;
  height: 25px;
  background-color: #ffffff;
  position: absolute;
  right: -10px;
  top: -15px;
  transform: translate(50%, -50%) rotate(60deg);
}

.border .border-text {
  position: absolute;
  color: red;
  font-size: 12px;
  right: -112px;
  top: -30px;
  white-space: nowrap;
}


.modal-dialog {
  max-width: 1600px;

}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "lora", sans-serif;
}

.header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    height: 70px;
    background-color: #fff;
    transition: background 300ms ease;
    z-index: 1000;
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.header__logo h1 {
    color: #353535;
    font-size: 2rem;
}

.header__links {
    list-style: none;
    display: flex;
}

.header__link {
    position: relative;
    padding: 1rem;
    font-size: calc 1rem * 1.1;
    color: #353535;
    text-transform: uppercase;
}

.header__link a {
    color: #353535;
    position: relative;
}

.header__link a::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #353535;
    opacity: 0;
    transition: all var(--default-duration) ease;
}

.header__link a:hover::after,
.header__link a.active::after {
    bottom: -5px;
    opacity: 1;
}

.header__btn {
    display: none;
    flex-direction: column;
    position: relative;
    width: 30px;
    height: 20px;
    cursor: pointer;
}

.header__btn span {
    position: absolute;
    top: calc(var(--i) * 1px);
    width: 100%;
    height: 1px;
    background-color: var(--black-100);
    transition: all 300ms ease;
}

.menu-toggled .header__btn span:nth-child(1) {
    transform: rotate(-45deg);
    top: 10px;
}

.menu-toggled .header__btn span:nth-child(2) {
    opacity: 0;
}

.menu-toggled .header__btn span:nth-child(3) {
    transform: rotate(45deg);
    top: 10px;
}

@media screen and (max-width: 768px) {
    .header__btn {
        display: flex;
    }

    .header__links {
        position: fixed;
        flex-direction: column;
        align-items: center;
        row-gap: 1.5rem;
        top: 70px;
        left: -200%;
        bottom: 0;
        min-width: 240px;
        width: 100%;
        max-width: 300px;
        background-color: #ffffffd4;
        border: 1px solid #f5f5f5;
        transition: left 300ms ease;
    }

    .menu-toggled .header__links {
        left: 0;
    }
}
</style>