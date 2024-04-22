<template>
  <div class="section__title">
    <h1>shop</h1>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <form action="#" class="search">
          <button class="search__button">
            <div class="search__icon">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>magnifying-glass</title>
                <path
                  d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z">
                </path>
              </svg>
            </div>
          </button>
          <input type="text" class="search__input" placeholder="Search...">
          <button class="mic__button">
            <div class="mic__icon">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 83.44 122.88"
                style="enable-background: new 0 0 83.44 122.88" xml:space="preserve">
                <g>
                  <path
                    d="M45.04,95.45v24.11c0,1.83-1.49,3.32-3.32,3.32c-1.83,0-3.32-1.49-3.32-3.32V95.45c-10.16-0.81-19.32-5.3-26.14-12.12 C4.69,75.77,0,65.34,0,53.87c0-1.83,1.49-3.32,3.32-3.32s3.32,1.49,3.32,3.32c0,9.64,3.95,18.41,10.31,24.77 c6.36,6.36,15.13,10.31,24.77,10.31h0c9.64,0,18.41-3.95,24.77-10.31c6.36-6.36,10.31-15.13,10.31-24.77 c0-1.83,1.49-3.32,3.32-3.32s3.32,1.49,3.32,3.32c0,11.48-4.69,21.91-12.25,29.47C64.36,90.16,55.2,94.64,45.04,95.45L45.04,95.45z M41.94,0c6.38,0,12.18,2.61,16.38,6.81c4.2,4.2,6.81,10,6.81,16.38v30c0,6.38-2.61,12.18-6.81,16.38c-4.2,4.2-10,6.81-16.38,6.81 s-12.18-2.61-16.38-6.81c-4.2-4.2-6.81-10-6.81-16.38v-30c0-6.38,2.61-12.18,6.81-16.38C29.76,2.61,35.56,0,41.94,0L41.94,0z M53.62,11.51c-3-3-7.14-4.86-11.68-4.86c-4.55,0-8.68,1.86-11.68,4.86c-3,3-4.86,7.14-4.86,11.68v30c0,4.55,1.86,8.68,4.86,11.68 c3,3,7.14,4.86,11.68,4.86c4.55,0,8.68-1.86,11.68-4.86c3-3,4.86-7.14,4.86-11.68v-30C58.49,18.64,56.62,14.51,53.62,11.51 L53.62,11.51z">
                  </path>
                </g>
              </svg>
            </div>
          </button>

          <div class="camera__upload">
            <label for="file">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                <path
                  d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              </svg>
            </label>
            <input type="file" id="file" name="file" />

          </div>

        </form>
      </div>
    </div>
  </div>


  <div class="container-fluid">
    <div class="row">
      <div class="col-2 category">
        <!-- DanhMuc -->
        <div class="box border-bottom">
          <div class="box-label text-uppercase d-flex align-items-center">DANH MỤC <button class="btn ml-auto"
              type="button" data-toggle="collapse" data-target="#inner-box2" aria-expanded="false"
              aria-controls="inner-box2" id="out1" onclick="outerFilter()">
            </button>
          </div>

          <div class="my-2">
            <label>
              Tất cả
              <input class="nut" style="visibility: initial;" type="radio" name="b" :value="''" v-model="this.search2">
            </label>
          </div>

          <div v-for="(item, index) in this.danhmuc" :key="index">
            <div class="my-1">
              <label>
                {{ item.nameDM }}
                <input class="nut" style="visibility: initial;" type="radio" name="b" :value="item.nameDM"
                  v-model="this.search2">
              </label>
            </div>
          </div>
        </div>

        <button class="chatBtn" @click="toggleChat">
          <svg height="1.6em" fill="white" xml:space="preserve" viewBox="0 0 1000 1000" y="0px" x="0px" version="1.1">
            <path
              d="M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z">
            </path>
          </svg>
          <span class="tooltip">Chat</span>
        </button>

        <div class="chat-card" id="app" v-show="showChat">
          <div class="chat-header">
            <div class="h2">Huang</div>
          </div>
          <div class="chat-body">
            <div v-for="(message, index) in messages" :key="index"
              :class="message.sender === 'user' ? 'message outgoing' : 'message incoming'">
              <p>{{ message.text }}</p>
            </div>
          </div>
          <div class="chat-footer">
            <input v-model="userMessage" @keyup.enter="sendMessage" placeholder="Type your message" type="text">
            <button @click="sendMessage">Send</button>
          </div>
        </div>

      </div>
      <div class="col-10">

        <div id="products">
          <div class="card-container">
            <div type="button" data-toggle="modal" data-target="#exampleModalCenter" class="col-lg-3 col-md-6"
              v-for="product in filteredProducts" :key="product.id">

              <div @click="copyID(product._id)" class="card d-flex flex-column align-items-center">


                <div class="card-img"> <img class="img-product" :src="product.image.url" alt=""> </div>

                <div class="product-name">{{ product.name }}</div>

                <div class="card-body pt-5">
                  <div class="d-flex align-items-center price">
                    <div class="font-weight-bold price">
                      {{ (product.price).toLocaleString('vi-VN') }} VND
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- </section> -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6">

              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="about__product text-center">
                      <img v-if="element.image.url !== undefined" :src="`${element.image.url}`">
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="about__product text-center">
                      <img v-if="element.image.url !== undefined" :src="`${element.image.url}`">
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="about__product text-center">
                      <img v-if="element.image.url !== undefined" :src="`${element.image.url}`">
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="col-6">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Thông tin sản phẩm</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form method="PUT" @submit.prevent="addCart(this.IDcart)">
                <div class="modal-body">
                  <div class="d-flex justify-content-center mt-0 mb-0 container">
                    <div class="card_item p-1 bg-white">

                      <div class="stats mt-2">
                        <div class="d-flex justify-content-between p-price">
                          <span>Giá</span><span>{{ this.element.price }}</span>
                        </div>
                        <div class="d-flex justify-content-between p-price">
                          <span>Số lượng sản phẩm</span><span>{{ this.element.Quantity }}</span>
                        </div>
                        <div class="d-flex justify-content-between p-price"><span>Chọn Số lượng</span><span><input
                              type="number" :max="this.element.Quantity" min="1"
                              v-model="this.cart.idProduct_item[0].quantity"></span>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between p-price">
                        <span>
                          <b>Thành tiền</b>
                        </span>
                        <b><span><input class="" style="text-align: right;" type="number" disabled
                              :value="TTien(this.cart.idProduct_item[0].quantity, this.element.price)"></span></b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button @click="checklogin()" class="btn btn-primary">Thêm vào giỏ hàng</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Header from '../components/Header/Header.main.vue';
import Footer from '../components/Footer/footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      money: 0,
      thuonghieu: [],
      danhmuc: [],
      selectedBrands: [],
      cart: {
        idProduct_item: [
          {
            quantity: 1,
            id_item: '',
          }
        ]
      },
      search: '',
      search2: '',
      product: [],
      id: '',
      gen: '',
      element: {
        image: {
          url: ''
        }
      },
      discount: '',
      messages: [],
      userMessage: '',
      IDcart: null, // Khai báo biến IDcart để sử dụng trong created()
      showChat: false // Thêm thuộc tính showChat vào data
    };
  },
  created() {
    this.IDcart = JSON.parse(localStorage.getItem('cart'));
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const [pictureResponse, thuonghieuResponse, danhmucResponse] = await Promise.all([
          axios.get('http://localhost:3000/api/picture/stored'),
          axios.get('http://localhost:3000/api/thuonghieu/stored'),
          axios.get('http://localhost:3000/api/danhmuc/stored')
        ]);
        this.product = pictureResponse.data;
        this.thuonghieu = thuonghieuResponse.data;
        this.danhmuc = danhmucResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    copyID(id) {
      this.id = id;
      axios.get(`http://localhost:3000/api/picture/product/${this.id}`)
        .then(res => {
          this.element = res.data;
        })
        .catch(err => {
          console.error('Error fetching product data:', err);
        });
    },
    async sendMessage() {
      if (this.userMessage.trim() === '') return;
      this.messages.push({ text: this.userMessage, sender: 'user' });
      try {
        const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
          message: this.userMessage
        });
        this.messages.push(...response.data.map(message => ({ text: message.text, sender: 'bot' })));
      } catch (error) {
        console.error('Error sending message:', error);
      }
      this.userMessage = '';
    },
    addCart(id) {
      this.cart.idProduct_item[0].id_item = this.id;
      const dataItem = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`
        },
        product: this.cart
      };
      axios.post(`http://localhost:3000/api/cart/add/${id}`, dataItem)
        .then(() => {
          alert('Thêm vào giỏ hàng thành công');
        })
        .catch(err => {
          console.error('Error adding to cart:', err);
        });
    },
    TTien(a, b) {
      if (a !== undefined && b !== undefined) {
        return a * b;
      }
    },
    checklogin() {
      if (this.IDcart == undefined) {
        alert('Bạn cần đăng nhập khi thêm vào giỏ hàng');
        this.$router.replace({ path: '/login' });
      }
    },
    toggleChat() {
      this.showChat = !this.showChat;
    }
  },
  mounted() {
    $('#filterbar').collapse(true);
    $('#inner-box').collapse(true);
    $('#inner-box2').collapse(true);
  },
  computed: {
    filteredProducts() {
      const searchLower = this.search.toLowerCase();
      const searchLower2 = this.search2.toLowerCase();
      return this.product.filter(product => {
        return (
          product.address && product.address.toLowerCase().includes(searchLower) &&
          (product.gen && product.gen.some(category => category.toLowerCase().includes(searchLower2)))
        );
      });
    }
  }
};
</script>



<style>
.nut {
  display: none;
}

/* Thêm khung bao quanh khi được chọn */
.my-1 label input[type="radio"]:checked+span {
  border: 1px solid #007bff;
  /* Màu và kiểu viền khung */
  padding: 3px;
  /* Khoảng cách giữa nội dung và viền khung */
  border-radius: 4px;
  /* Bo góc */
}

/* =========================== */

.chatBtn {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: #FFE53B;
  background-image: linear-gradient(147deg, #FFE53B, #FF2525, #FFE53B);
  cursor: pointer;
  padding-top: 3px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.164);
  position: relative;
  background-size: 300%;
  background-position: left;
  transition-duration: 1s;
}

.tooltip {
  position: absolute;
  top: -40px;
  opacity: 0;
  background-color: rgb(255, 180, 82);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: .5s;
  pointer-events: none;
  letter-spacing: 0.5px;
}

.chatBtn:hover .tooltip {
  opacity: 1;
  transition-duration: .5s;
}

.chatBtn:hover {
  background-position: right;
  transition-duration: 1s;
}

/* ============================= */
.chat-card {
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-header {
  padding: 10px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
}

.chat-header .h2 {
  font-size: 16px;
  color: #333;
}

.chat-body {
  padding: 20px;
}

.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.incoming {
  background-color: #e1e1e1;
}

.outgoing {
  background-color: #f2f2f2;
  text-align: right;
}

.message p {
  font-size: 14px;
  color: #333;
  margin: 0;
}

.chat-footer {
  padding: 10px;
  background-color: #f2f2f2;
  display: flex;
}

.chat-footer input[type="text"] {
  flex-grow: 1;
  padding: 5px;
  border: none;
  border-radius: 3px;
}

.chat-footer button {
  padding: 5px 10px;
  border: none;
  background-color: #4285f4;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.chat-footer button:hover {
  background-color: #0f9d58;
}

@keyframes chatAnimation {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-card .message {
  animation: chatAnimation 0.3s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 0.1s;
}

.chat-card .message:nth-child(even) {
  animation-delay: 0.2s;
}

.chat-card .message:nth-child(odd) {
  animation-delay: 0.3s;
}


/* ============================== */
.modal-dialog {
  max-width: 100%;
}


.modal-content {
  width: 100%;

}


.col-6 {
  width: 80%;

}

.about__product {
  height: 700px;
  width: auto;
}

#file {
  display: none;
}

svg {
  height: 1.5rem;
  width: 1.5rem;
}


.search {
  border-radius: 25px;
  border: 1px solid #353535;
  flex: 0 0 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search__input {
  font-family: "lora", sans-serif;
  font-size: 17px;
  color: #333333;
  background-color: #f4f2f2;
  border: none;
  padding: 14px 72px 14px 42px;
  border-radius: 1000px;
  width: 94%;
  margin-left: -34px;
  margin-right: -66px;
  transition: all 0.2s;
}

.search__input:focus {
  outline: none;
  width: 100%;
  background-color: #f0eeee;
}

.search__input::-webkit-input-placeholder {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 500;
  color: #353535;
}

.search__button {
  border: none;
  background-color: transparent;
  z-index: 999;
  cursor: pointer;
}

.search__button:focus {
  outline: none;
}

.search__button:active {
  transform: translateY(2px);
}

.search__icon {
  height: 20px;
  width: 20px;
  fill: #353535;
}

.mic__button {
  border: none;
  background-color: transparent;
  margin-right: 10px;
  cursor: pointer;
}

.mic__button:focus {
  outline: none;
}

.mic__button:active {
  transform: translateY(2px);
}

.mic__icon {
  height: 28px;
  width: 20px;
  fill: #353535;
}

.mic__icon:hover {
  fill: #353535;
}

.picture__button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.picture__button:focus {
  outline: none;
}

.picture__button:active {
  transform: translateY(2px);
}

.picture__icon {
  height: 16px;
  width: 20px;
  fill: #353535;
}

.picture__icon:hover {
  fill: #353535;
}


.item {
  margin-top: 16px;
  font-size: 40px;
  color: #ffff;
  text-align: center;
  min-height: 380px;
  line-height: 380px;
  background-color: orange;
}

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

/* ============================================== */

/* ================================================= */
.nut {
  position: relative;
  float: left;
  margin-right: 10px;
  bottom: 5px;
  width: 25px;
  height: 25px;
  margin: 5px 5px 5px 5px;

}

.my-1 {
  position: relative;
  margin-left: 5px;

}

.my-2 {
  position: relative;
  margin-left: 5px;

}

/* CSS cho phân trang begin*/
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  border: 1px solid #333;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  background-color: #fff;
}

.pagination button.active {
  background-color: #16c79a;
  color: #fff;
}

/* CSS cho phân trang end*/
.discount-pt {
  position: relative;
  border: 1px solid rgb(255, 255, 255);
  width: 40px;
  text-align: center;
  background-color: rgb(212, 48, 48);
  color: rgb(255, 255, 255);
  margin-left: 190px;
  bottom: 25px;
}

.discount-tt {
  position: relative;
  border: 1px solid rgb(255, 255, 255);
  width: 100px;
  text-align: center;
  background-color: rgb(212, 48, 48);
  color: rgb(255, 255, 255);
  margin-left: -130px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  /* Adjust as needed */
}

.col-lg-4 {
  flex: 0 0 calc(33.33% - 20px);
  /* 3 cards per row, adjust the width and margins as needed */
  margin: 0 10px;
  /* Adjust as needed */
}

body {
  background-color: #f4f4f4
}

.home {
  width: 1400px;
  position: relative;
  height: auto;
  margin-top: 10px;
  min-height: 830px;
  margin-left: auto;
  margin-right: auto;

}

.bt-gia {
  display: none;
}

.number_TT {
  border: none;
}

.modal {
  left: none;
}

.container {
  margin: 40px auto
}

#header {
  width: 100%;
  height: 150px;
  box-shadow: 5px 5px 15px #e8e8e8
}

.col-lg-4,
.col-md-6 {
  padding-right: 0
}

button.btn.btn-hide {
  height: inherit;
  background-color: #ff935d;
  color: #fff;
  font-size: 0.82rem;
  padding-left: 40px;
  padding-right: 40px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px
}

.btn:focus {
  box-shadow: none
}

.box-label .btn {
  background-color: #fff;
  padding: 0;
  font-size: 0.8rem
}

.btn-red {
  background-color: #e00000ce
}

.btn-orange {
  background-color: #ffa500
}

.btn-pink {
  background-color: #e0009dce
}

.btn-green {
  background-color: #00811c
}

.btn-blue {
  background-color: #026bc2
}

.btn-brown {
  background-color: #994a00
}

.navbar {
  display: inline-flex
}

.pagination .page-item .page-link {
  color: #333;
  border: none;
  width: 40px;
  text-align: center
}

.pagination .page-item.active .page-link {
  background-color: #fff;
  border: 1px solid #333
}

select {
  outline: none;
  padding: 6px 12px;
  margin: 0px 4px;
  color: #999;
  font-size: 0.85rem;
  width: 140px
}

#select2 {
  border: 1px solid #777;
  color: #999
}

#pro {
  border: none;
  color: #333;
  font-weight: 700;
  padding-left: 0px;
  width: initial
}

#filterbar1 {
  margin-right: 5px;
  width: 30%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  float: left
}

#filterbar1 input[type="radio"] {
  visibility: hidden
}

#filterbar1 input[type='radio']:checked {
  background-color: #16c79a;
  border: none
}

#filterbar1 .btn.btn-success {
  background-color: #ddd;
  color: #333;
  border: none;
  width: 115px
}

#filterbar1 .btn.btn-success:hover {
  background-color: #aff1e1;
  color: #444
}

#filterbar1 .btn-success:not(:disabled):not(.disabled).active,
#filterbar1 .btn-success:not(:disabled):not(.disabled):active {
  background-color: #16c79a;
  color: #fff
}

label {
  cursor: pointer
}

.tick {
  display: block;
  position: relative;
  padding-left: 23px;
  cursor: pointer;
  font-size: 0.9rem;
  margin: 0
}

.tick input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0
}

.check {
  position: absolute;
  top: 1px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px
}

.tick:hover input~.check {
  background-color: #f3f3f3
}

.tick input:checked~.check {
  background-color: #ffffff
}

.check:after {
  content: "";
  position: absolute;
  display: none
}

.tick input:checked~.check:after {
  display: block;
  transform: rotate(45deg) scale(1)
}

.tick .check:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid rgb(0, 0, 0);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg) scale(2)
}

.box {
  padding: 10px
}

.box-label {
  color: #353535;
  font-size: 1.5rem;
  font-weight: 800
}

#inner-box,
#inner-box2 {
  height: 150px;
  overflow-y: scroll
}

#inner-box2 {
  height: 132px
}

#inner-box::-webkit-scrollbar,
#inner-box2::-webkit-scrollbar {
  width: 6px
}

#inner-box::-webkit-scrollbar-track,
#inner-box2::-webkit-scrollbar-track {
  background-color: #ddd;
  border-radius: 2px
}

#inner-box::-webkit-scrollbar-thumb,
#inner-box2::-webkit-scrollbar-thumb {
  background-color: #333;
  border-radius: 2px
}

#price {
  height: 45px
}

#size input[type="checkbox"] {
  visibility: hidden
}

#size input[type='checkbox']:checked {
  background-color: #16c79a;
  border: none
}

#size .btn.btn-success {
  background-color: #ddd;
  color: #333;
  border: none;
  width: 40px;
  font-size: 0.8rem;
  border-radius: 0
}

#size .btn.btn-success:hover {
  background-color: #aff1e1;
  color: #444
}

#size .btn-success:not(:disabled):not(.disabled).active,
#size .btn-success:not(:disabled):not(.disabled):active {
  background-color: #16c79a;
  color: #fff
}

#size label {
  margin: 10px;
  margin-left: 0px
}

.card {
  position: relative;
  padding: 1px;
  cursor: pointer;
  transition: .3s all ease-in-out;
  height: 350px;
  margin-bottom: 20px;
  background-color: rgb(250, 250, 250);
}

.card:hover {
  /* box-shadow: 2px 2px 15px #fd9a6ce5; */
  transform: scale(1.02)
}

.card .product-name {
  position: relative;
  font-weight: 700;
  font-size: 18px;
  top: 20px;
}

.card-body {
  position: relative;
  padding-bottom: 0;
  top: 0px;
}

.card .text-muted {
  font-size: 0.82rem
}

.card-img img {
  width: inherit;
  height: 250px;
  border-radius: 20px 20px 0 0;
  display: block
}

.card-body .btn-group .btn {
  padding: 0;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  position: relative
}

.card-body .btn-group>.btn-group:not(:last-child)>.btn,
.card-body .btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
  border-radius: 50%;
  transition: ease-in all .4s
}

.card-body input[type="radio"] {
  visibility: hidden
}

.card-body .btn:not(:disabled):not(.disabled).active::after,
.card-body .btn:not(:disabled):not(.disabled):active::after {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 4px;
  left: 4.2px;
  background-color: #fff;
  position: absolute;
  transition: ease-in all .4s
}

.card-body .btn.btn-light:not(:disabled):not(.disabled).active::after,
.card-body .btn.btn-light:not(:disabled):not(.disabled):active::after {
  background-color: #000
}

#avail-size input[type="checkbox"] {
  visibility: hidden
}

#avail-size input[type='checkbox']:checked {
  background-color: #16c79a;
  border: none
}

#avail-size .btn.btn-success {
  background-color: #ddd;
  color: #333;
  border: none;
  width: 20px;
  font-size: 0.7rem;
  border-radius: 0;
  padding: 0
}

#avail-size .btn.btn-success:hover {
  background-color: #aff1e1;
  color: #444
}

#avail-size .btn-success:not(:disabled):not(.disabled).active,
#avail-size .btn-success:not(:disabled):not(.disabled):active {
  background-color: #16c79a;
  color: #fff
}

#avail-size label {
  margin: 10px;
  margin-left: 0px
}

#shirt {
  height: 170px
}

.middle {
  position: relative;
  width: 100%;
  margin-top: 25px
}

.slider {
  position: relative;
  z-index: 1;
  height: 5px;
  margin: 0 15px
}

.slider>.track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #ddd
}

.slider>.range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #36a31b
}

.slider>.thumb {
  position: absolute;
  top: 2px;
  z-index: 3;
  width: 20px;
  height: 20px;
  background-color: #36a31b;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(63, 204, 75, 0.705);
  transition: box-shadow .3s ease-in-out
}

.slider>.thumb::after {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 28%;
  top: 30%;
  border-radius: 50%;
  content: '';
  background-color: #fff
}

.slider>.thumb.left {
  left: 25%;
  transform: translate(-15px, -10px)
}

.slider>.thumb.right {
  right: 25%;
  transform: translate(15px, -10px)
}

.slider>.thumb.hover {
  box-shadow: 0 0 0 10px rgba(125, 230, 134, 0.507)
}

.slider>.thumb.active {
  box-shadow: 0 0 0 10px rgba(63, 204, 75, 0.623)
}

input[type=range] {
  position: absolute;
  pointer-events: none;
  /* -webkit-appearance: none; */
  z-index: 2;
  height: 10px;
  width: 100%;
  opacity: 0
}

input[type=range]::-webkit-slider-thumb {
  pointer-events: all;
  width: 30px;
  height: 30px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  -webkit-appearance: none
}

.del {
  text-decoration: line-through;
  color: red
}

@media(min-width:1199.6px) {
  #filterbar1 {
    width: 25%
  }
}

@media(max-width:1199.5px) {
  #filterbar1 {
    width: 28%
  }

  .card {
    height: 350px
  }

  .price {
    font-size: 0.9rem
  }

  .product-name {
    font-size: 0.8rem
  }
}

@media(max-width: 991.5px) {
  .navbar-nav {
    min-width: 290px;
    position: absolute;
    left: -168px;
    bottom: -146px;
    padding: 20px 10px;
    display: block;
    background-image: none;
    z-index: 2;
    background-color: #1d1c1cb2
  }

  #filterbar1 {
    width: 36%
  }

  #sort {
    background-color: inherit;
    color: #fff;
    margin: 0;
    margin-bottom: 20px;
    width: 100%
  }

  #sort option,
  #pro option {
    color: #000
  }

  #pro,
  #select2,
  .result {
    background-color: inherit;
    color: #fff
  }

  .card {
    height: 345px
  }

  .price {
    font-size: 0.85rem
  }
}

@media(max-width: 767.5px) {
  #filterbar1 {
    width: 50%
  }
}

@media(max-width: 525.5px) {
  #filterbar1 {
    float: none;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px
  }

  #content.my-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important
  }

  .col-lg-4,
  .col-md-6 {
    padding-left: 0
  }
}

@media(max-width: 500.5px) {
  .pagination {
    display: none
  }
}
</style>