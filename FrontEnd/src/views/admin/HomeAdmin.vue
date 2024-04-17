<template>
    <headerAdmin></headerAdmin>

    <div class="container-fluid">
        <div class="panel">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-sm-12 col-xs-12 Text-sp">
                        <h3 class="abc">KHO SẢN PHẨM</h3>
                    </div>
                    <div>
                        <AddProduct></AddProduct>
                    </div>
                </div>
            </div>
            <div class="panel-body table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>TT</th>
                            <th>Tên</th>
                            <th>Thương hiệu</th>
                            <th>Giá tiền (VNĐ)</th>
                            <th>Số lượng</th>
                            <th>Ảnh minh họa</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="pictures.length == 0">
                            <th colspan="8" class="text-center">
                                <h3>
                                    Không có sản phẩm nào trong kho
                                </h3>
                            </th>
                        </tr>
                        <tr v-for="(item, index) in paginatedData" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.address }}</td>
                            <td>{{ (item.price).toLocaleString('vi-VN') }} VND</td>
                            <td>{{ item.Quantity }}</td>
                            <td v-if="item.image != undefined"><img class="img-item" :src="`${item.image.url}`"
                                    alt="Ảnh minh họa"></td>
                            <td>
                                <div class="row">
                                    <div class="col-6">
                                        <button class="editBtn">
                                            <svg height="1em" viewBox="0 0 512 512" data-toggle="modal"
                                                data-target="#exampleModalCenter" @click="getOneProduct(item._id)">
                                                <path
                                                    d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button class="bin-button" @click="copyID(item._id)" type="button"
                                            data-toggle="modal" data-target="#exampleModal">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 7"
                                                class="bin-top">
                                                <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5">
                                                </line>
                                                <line stroke-width="3" stroke="white" y2="1.5" x2="26.0357" y1="1.5"
                                                    x1="12"></line>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 39"
                                                class="bin-bottom">
                                                <mask fill="white" id="path-1-inside-1_8_19">
                                                    <path
                                                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z">
                                                    </path>
                                                </mask>
                                                <path mask="url(#path-1-inside-1_8_19)" fill="white"
                                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z">
                                                </path>
                                                <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                                                <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 89 80"
                                                class="garbage">
                                                <path fill="white"
                                                    d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <ul class="action-list">
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr class="tongnav">
                            <th class="tong" colspan="2">
                                <h6>Tổng số: <b>{{ pictures.length }}</b> sản phẩm</h6>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="8">
                                <div class="btn-pt">
                                    <div class="phantrang">
                                        <button class="btn" @click="prevPage" :disabled="currentPage === 1">Trang
                                            Trước</button>
                                        <span>Trang {{ currentPage }} / {{ pageCount }}</span>
                                        <button class="btn" @click="nextPage"
                                            :disabled="currentPage === pageCount">Trang
                                            Sau</button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Xóa sản phẩm</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Bạn có chắc chắn muốn xóa sản phẩm?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Trở
                                    lại</button>
                                <button type="button" @click="deleteProduct()" class="btn btn-danger">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Huang</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <form @submit.prevent="updateProduct(this.product._id)">
                                    <div class="card-details">
                                        <h3 class="title">Chỉnh sửa thông tin</h3>
                                        <div class="row">

                                            <div class="col-2">
                                                    <label for="gen">Chọn Danh mục:</label>
                                                    <div v-for="(item, index) in Danhmuc" :key="index">                                                                                                        
                                                        <input type="checkbox" :id="index + 'ascsc'" name="vehicle1"
                                                             @change="(e) => { inputChange(e, item._id, item.nameDM) }" v-model="this.product.gen" :value="item.nameDM">
                                                        <label :for="index + 'ascsc'"> {{ item.nameDM }}</label><br>
                                                    </div>
                                                </div>

                                            <div class="form-group col-sm-7">
                                                <label for="add">Thương hiệu</label>
                                                <div class="input-group expiration-date ">
                                                    <select class="form-control select-TH" name="add" id="add"
                                                        v-model="this.product.address" required="true">
                                                        <option disabled selected value="">Chọn thương hiệu
                                                        </option>
                                                        <option v-for="(item, index) in this.thuonghieu" :key="index"
                                                            :value="item.nameTH">
                                                            {{ item.nameTH }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group col-sm-5">
                                                <label for="prices">Giá gốc</label>
                                                <div class="input-group expiration-date">
                                                    <input type="number" class="form-control" placeholder="VNĐ"
                                                        id="prices" v-model="this.product.priceR" required="true">
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-5">
                                                <label for="prices">Giảm giá</label>
                                                <div class="input-group expiration-date">
                                                    <input type="number" max="100" min="0" class="form-control"
                                                        placeholder="Tỉ lệ %" id="prices"
                                                        v-model="this.product.discount">
                                                </div>
                                            </div>

                                            <div class="form-group col-sm-5">
                                                <label for="prices">Giá tiền</label>
                                                <div class="input-group expiration-date">
                                                    <input type="radio" checked class="form-control ip-price"
                                                        placeholder="VNĐ" :value="this.gia" id="prices"
                                                        v-model="this.product.price" required="true">
                                                    <div class="form-control">{{
                                                        this.gia = priceSum(this.product.priceR,
                                                            this.product.discount) }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-8">
                                                <label for="names">Tên sản phẩm</label>
                                                <input type="text" class="form-control" id="names"
                                                    placeholder="Nhập tên giày..." v-model="this.product.name"
                                                    required="true">
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <label for="cvc">Số lượng</label>
                                                <input id="cvc" min="1" type="number" class="form-control"
                                                    placeholder="SL" v-model="this.product.Quantity" required="true">
                                            </div>
                                            <div class="form-group col-sm-8">
                                                <label for="image">Ảnh minh họa</label>
                                                <input type="file" class="form-control" id="image" ref="imageInput">
                                                <div v-if="this.product.image.url != undefined">
                                                    <img class="img-product" :src="this.product.image.url" alt="">
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                        <button class="btn btn-primary">Cập nhật</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import AddProduct from '../../components/Addmin/AddProduct.vue';
import CreactTrademark from '../../components/Addmin/CreactTrademark.vue';
import CreateProductPortfolio from '../../components/Addmin/CreateProductPortfolio.vue';
import headerAdmin from '../../components/Header/headerAdmin.vue';
export default {
    components: {
        CreactTrademark,
        AddProduct,
        CreateProductPortfolio,
        headerAdmin
    },
    data() {
        return {
            thuonghieu: [],
            Danhmuc: [],
            product: {
                gen: '',
                name: '',
                address: '',
                price: 0,
                priceR: 0,
                image: {
                    url: '',
                    id: ''
                }
            },
            pictures: [],
            id: '',
            pageSize: 4, // Số lượng mục trên mỗi trang
            currentPage: 1, // Trang hiện tại
            gia: 0
        }
    },

    computed: {
        pageCount() {
            return Math.ceil(this.pictures.length / this.pageSize);
        },
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.pictures.slice(startIndex, endIndex);
        },
    },

    mounted() {
        // Simulate fetching data from an API
        // Mô phỏng việc lấy dữ liệu từ API
        setTimeout(() => {
            this.pictures
        }, 1000);
    },
    methods: {
        async fetchData() {
            try {
                const res = await axios.get('http://localhost:3000/api/picture/stored',);
                this.pictures = res.data;
            } catch (error) {
                console.error(error);
            }
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.pageCount) {
                this.currentPage++;
            }
        },

        copyID(id) {
            this.id = id
            console.log(this.id);
        },

        deleteProduct() {
            axios.delete(`http://localhost:3000/api/picture/delete/${this.id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`, // Đính kèm Token vào tiêu đề
                }
            })
                .then(() => {
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err);
                })
        },

        priceSum(a, b) {
            if (b == undefined) {
                return a
            }
            let s = a * (b / 100)
            return a - s

        },

        getOneProduct(id) {
            axios.get(`http://localhost:3000/api/picture/product/${id}`)
                .then(res => {
                    this.product = res.data
                })
                .catch(err => {
                    console.log(err);
                })
        },

        async upLoadFiles() {
            const fileInput = this.$refs.imageInput;

            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];

                const CLOUD_NAME = "dllc8aaxl";
                const PRESET_NAME = "NienLuan";
                const FOLDER_NAME = "NienLuan";
                const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

                const formData = new FormData();

                formData.append("upload_preset", PRESET_NAME);
                formData.append("folder", FOLDER_NAME);

                formData.append("file", file);

                try {
                    const response = await axios.put(api, formData, {
                        headers: {
                            "content-type": "multipart/formdata"
                        },
                    });

                    if (response) {
                        this.product.image.id = response.data.public_id;
                        this.product.image.url = response.data.secure_url;
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        },


        async updateProduct(id) {
            await this.upLoadFiles(); // Tải lên hình ảnh mới
            const dataItem = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`, // Đính kèm Token vào tiêu đề
                },
                product: this.product,
                gia: this.gia
            };
            const oldBrand = this.thuonghieu.find(brand => brand.idProduct.includes(id) && brand.nameTH !== this.product.address);
            // Kiểm tra xem sản phẩm đã được chuyển sang thương hiệu mới hay không
            if (this.product.thươnghieu !== oldBrand) {
                axios.put(`http://localhost:3000/api/picture/update/${id}`, dataItem)
                alert('Cập nhật thành công');
                // Nếu sản phẩm đã chuyển sang thương hiệu mới
                const newBrand = this.thuonghieu.find(brand => brand.nameTH === this.product.address);

                newBrand.idProduct.push(id);

                axios.put(`http://localhost:3000/api/thuonghieu/update/${newBrand._id}`, newBrand, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Token')}`
                    }
                });

                const oldBrand = this.thuonghieu.find(brand => brand.idProduct.includes(id) && brand.nameTH !== this.product.address);

                const updatedBrandData = {
                    ...oldBrand,
                    idProduct: oldBrand.idProduct.filter(productId => productId !== id)
                };
                axios.put(`http://localhost:3000/api/thuonghieu/update/${oldBrand._id}`, updatedBrandData, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Token')}`
                    }
                }).then(() => {
                    window.location.reload();
                }).catch(err => {
                    console.log(err);
                });

            }
            else {

                axios.put(`http://localhost:3000/api/picture/update/${id}`, dataItem)
                    .then(() => {
                        alert('Cập nhật thành công');
                        window.location.reload();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }

        },
    },
    

    async created() {
        await this.fetchData();

        axios.get(`http://localhost:3000/api/thuonghieu/stored`)
            .then(res => {
                this.thuonghieu = res.data
            })
            .catch(err => {
                console.log(err);
            })
        axios.get(`http://localhost:3000/api/danhmuc/stored`)
            .then(res => {
                this.Danhmuc = res.data
            })
            .catch(err => {
                console.log(err);
            })

    },
}
</script>


<style scoped>
/* ==================================== */
.bin-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: rgb(255, 95, 95);
    cursor: pointer;
    border: 2px solid rgb(255, 201, 201);
    transition-duration: 0.3s;
    position: relative;
    overflow: hidden;
}

.bin-bottom {
    width: 15px;
    z-index: 2;
}

.bin-top {
    width: 17px;
    transform-origin: right;
    transition-duration: 0.3s;
    z-index: 2;
}

.bin-button:hover .bin-top {
    transform: rotate(45deg);
}

.bin-button:hover {
    background-color: rgb(255, 0, 0);
}

.bin-button:active {
    transform: scale(0.9);
}

.garbage {
    position: absolute;
    width: 14px;
    height: auto;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
}

.bin-button:hover .garbage {
    animation: throw 0.4s linear;
}

@keyframes throw {
    from {
        transform: translate(-400%, -700%);
        opacity: 0;
    }

    to {
        transform: translate(0%, 0%);
        opacity: 1;
    }
}


/* ==================================== */
.editBtn {
    width: 55px;
    height: 55px;
    border-radius: 20px;
    border: none;
    background-color: rgb(93, 93, 116);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.123);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
}

.editBtn::before {
    content: "";
    width: 200%;
    height: 200%;
    background-color: rgb(102, 102, 141);
    position: absolute;
    z-index: 1;
    transform: scale(0);
    transition: all 0.3s;
    border-radius: 50%;
    filter: blur(10px);
}

.editBtn:hover::before {
    transform: scale(1);
}

.editBtn:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.336);
}

.editBtn svg {
    height: 17px;
    fill: white;
    z-index: 3;
    transition: all 0.2s;
    transform-origin: bottom;
}

.editBtn:hover svg {
    transform: rotate(-15deg) translateX(5px);
}

.editBtn::after {
    content: "";
    width: 25px;
    height: 1.5px;
    position: absolute;
    bottom: 19px;
    left: -5px;
    background-color: white;
    border-radius: 2px;
    z-index: 2;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease-out;
}

.editBtn:hover::after {
    transform: scaleX(1);
    left: 0px;
    transform-origin: right;
}

/* ==================================== */
.hg {
    align-items: end;
    top: 0px;
    /* display: flex; */
}

/* .select-TH {
    cursor: no-drop;
} */

.container {
    position: relative;
    height: 800px;
}

.ip-price {
    display: none;
}

.img-product {
    margin-top: 10px;
    width: 80px;
    height: 80px;
}

.phantrang {
    text-align: center;
    display: inline-block;
    margin: auto;
}

.btn-i {
    display: inline-block;
    margin-left: 5px;
    padding: 8px;

}

.home {
    position: relative;
    border-radius: 15px;
    background-color: rgb(202, 198, 198);
    margin-top: 10px;
    width: 95%;
    margin-left: 2.5%;

}

.card {
    border-radius: 10px;
    position: relative;
    display: inline-block;
    width: 16rem;
    margin: 20px 10px 10px 10px;
    left: 12px;
    font-size: 15px;
    margin-left: 20px;
    background-color: rgb(199, 229, 235);

}

.card-img-top {
    border-radius: 10px;
    height: 280px;

}

.item-admin {
    margin-top: 20px;
    padding: 20px;
    width: 200px;
    background-color: aqua;
    border-radius: 5px;
    color: black;
    text-decoration: none;
}

.form-admin {
    margin-bottom: 20px;
    margin-top: 20px;
}

.section {
    position: relative;
    margin-left: 100px;

}

.Text-sp h3 {
    color: #fff;
    font-weight: 700;
}


.form-show-product {
    margin: auto;
    text-align: center;
    width: 100%;


}


.panel {
    font-family: 'Raleway', sans-serif;
    padding: 0;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
}

.panel .panel-heading {
    background: #535353;
    padding: 15px;
    border-radius: 0;
}

.panel-heading {
    position: relative;
    margin-top: 20px;
}

.abc {
    text-align: center;
    position: relative;
    top: 15px;
}

.btn1 {
    position: relative;
    width: 50px;
    height: 40px;
    top: -2px;
    text-align: center;
    border-radius: 5px;
}

.btn2 {
    border-radius: 5px;
    position: relative;
    width: 50px;
    height: 40px;
    top: 3px;
    right: 3px;
    text-align: center;
}

.panel .panel-heading .btn {
    color: #fff;
    background-color: #000;
    font-size: 14px;
    font-weight: 600;
    padding: 7px 15px;
    border: none;
    border-radius: 0;
    transition: all 0.3s ease 0s;
}

.panel .panel-heading .btn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.panel .panel-heading .form-horizontal .form-group {
    margin: 0;
}

.panel .panel-heading .form-horizontal label {
    color: #fff;
    margin-right: 10px;
}

.panel .panel-heading .form-horizontal .form-control {
    display: inline-block;
    width: 80px;
    border: none;
    border-radius: 0;
}

.panel .panel-heading .form-horizontal .form-control:focus {
    box-shadow: none;
    border: none;
}

.panel .panel-body {
    padding: 0;
    border-radius: 0;
}

.panel .panel-body .table thead tr th {
    color: #fff;
    background: #8D8D8D;
    font-size: 17px;
    font-weight: 700;
    padding: 12px;
    border-bottom: none;
}

.panel .panel-body .table thead tr th:nth-of-type(1) {
    width: 1%;
}

.panel .panel-body .table thead tr th:nth-of-type(5) {
    width: 18%;
}

.panel .panel-body .table tbody tr td {
    color: #555;
    background: #fff;
    font-size: 17px;
    font-weight: 500;
    padding: 17px;
    vertical-align: middle;
    border-color: #e7e7e7;
}

.panel .panel-body .table tbody tr:nth-child(odd) td {
    background: #f5f5f5;
}

.panel .panel-body .table tbody .action-list {
    padding: 0;
    margin: 0;
    list-style: none;
}

.panel .panel-body .table tbody .action-list li {
    display: inline-block;
}

.panel .panel-body .table tbody .action-list li a {
    color: #fff;
    font-size: 13px;
    line-height: 28px;
    height: 28px;
    width: 33px;
    padding: 0;
    border-radius: 0;
    transition: all 0.3s ease 0s;
}

.panel .panel-body .table tbody .action-list li a:hover {
    box-shadow: 0 0 5px #ddd;
}

.panel .panel-footer {
    color: #fff;
    background: #535353;
    font-size: 16px;
    line-height: 33px;
    padding: 25px 15px;
    border-radius: 0;
}

.pagination {
    margin: 0;
}

.col-md-10 {
    margin: auto;
}


.pagination li a {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 15px;
    font-weight: 700;
    margin: 0 2px;
    border: none;
    border-radius: 0;
    transition: all 0.3s ease 0s;
}

.pagination li a:hover,
.pagination li a:focus,
.pagination li.active a {
    color: #fff;
    background-color: #000;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}


.img-item {
    width: 60px;
    height: 60px;
    border-radius: 20%;
    border: 1px solid rgb(184, 184, 184);
}
</style>