<template>
    <!-- <div class="">
       
            <div class="col-2">
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                
                    <div class="sidebar__admin d-flex align-items-center justify-content-center">
                        <div class="sidebar__admin-name">Huang Admin </div>
                    </div>

                 
                    <hr class="sidebar-divider my-0">

                  
                    <li class="nav-item ">
                        <router-link class="nav__item-link" to="/admin"> Kho sản phẩm </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav__item-link" to="/admin/listTrademark"> Thương hiệu </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav__item-link" to="/admin/List_Category"> Danh mục </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav__item-link" to="/admin/list_user"> Tài khoản </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav__item-link" to="/admin/order"> Order </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav__item-link" to="/admin/revenue"> Danh thu </router-link>
                    </li>
                    <hr class="sidebar-divider">
                </ul>
            </div>
        
    </div> -->




    <div>
        <div class="">
            <div class="container-fluid">
                <div class="d-flex justify-content-between">
                    <div class="">
                        <router-link to="/admin"> <button class="btn-12"><span>Sản phẩm</span></button> </router-link>

                    </div>
                    <div class="">
                        <router-link to="/admin/listTrademark" class=""><button class="btn-12"><span>Thương
                                    hiệu</span></button></router-link>
                    </div>
                    <div class="">
                        <router-link to="/admin/List_Category" class=""><button class="btn-12"><span>Danh
                                    mục</span></button></router-link>
                    </div>
                    <div class="">
                        <router-link to="/admin/list_user" class=""><button class="btn-12"><span>Tài
                                    khoản</span></button></router-link>
                    </div>
                    <div class="">
                        <router-link to="/admin/order" class=""><button
                                class="btn-12"><span>Order</span></button></router-link>
                    </div>
                    <div class="">
                        <router-link to="/admin/revenue" class=""><button class="btn-12"><span>Doanh
                                    thu</span></button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    methods: {
        async logOut2() {
            localStorage.clear()
            this.$router.replace({ path: '/home' });
        }
    }
}
</script>

<style scoped>
.btn-12,
.btn-12 *,
.btn-12 :after,
.btn-12 :before,
.btn-12:after,
.btn-12:before {
    border: 0 solid;
    box-sizing: border-box;
}

.btn-12 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #353535;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 100%;
    font-weight: 900;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
    text-transform: uppercase;
}

.btn-12:disabled {
    cursor: default;
}

.btn-12:-moz-focusring {
    outline: auto;
}

.btn-12 svg {
    display: block;
    vertical-align: middle;
}

.btn-12 [hidden] {
    display: none;
}

.btn-12 {
    border-radius: 99rem;
    border-width: 2px;
    overflow: hidden;
    padding: 0.8rem 3rem;
    position: relative;
}

.btn-12 span {
    mix-blend-mode: difference;
}

.btn-12:after,
.btn-12:before {
    background: linear-gradient(90deg,
            #fff 25%,
            transparent 0,
            transparent 50%,
            #fff 0,
            #fff 75%,
            transparent 0);
    content: "";
    inset: 0;
    position: absolute;
    transform: translateY(var(--progress, 100%));
    transition: transform 0.2s ease;
}

.btn-12:after {
    --progress: -100%;
    background: linear-gradient(90deg,
            transparent 0,
            transparent 25%,
            #fff 0,
            #fff 50%,
            transparent 0,
            transparent 75%,
            #fff 0);
    z-index: -1;
}

.btn-12:hover:after,
.btn-12:hover:before {
    --progress: 0;
}


/* ====================================== */
/* .sidebar__admin {
    border: 1px solid #fff;
}

.sidebar__admin-name {
    font-size: 30px;
    height: 80px;
}

.nav-item {
    border: 5px solid White;
    padding-top: 5px;
    height: 65px;
}

.nav__item-link {
    color: #353535;
} */
/* ====================================== */
.container {
    position: relative;
}

.item-admin {
    position: relative;
    margin-top: 20px;
    padding: 20px;
    width: 200px;
    background-color: rgb(76, 96, 106);
    border-radius: 5px;
    color: rgb(255, 255, 255);
    text-decoration: none;
}


.item-admin2 {
    font-size: 12px;
    height: 60px;
    width: 60px;
    background-color: rgb(42, 55, 61);
    border-radius: 5px;
    color: rgb(255, 255, 255);
    text-decoration: none;
}

.form-admin {
    display: flex;
    justify-content: center;
    /* căn giữa theo chiều ngang */
    align-items: center;
    /* căn giữa theo chiều dọc */
    width: 1260px;
    height: 100px;
    margin: 20px auto;
    background-color: #353535;
}


.item-admin:hover {
    color: rgb(0, 0, 0);
    /* background-color: rgb(255, 127, 81); */
}

.item-admin2:hover {
    color: rgb(0, 0, 0);
    background-color: rgb(134, 193, 255);
}

.logoutad {
    position: relative;
    bottom: 43px;
    left: 1120px;
    width: 60px;


}

.col-sm {
    position: relative;
}

.row {
    position: relative;
}
</style>