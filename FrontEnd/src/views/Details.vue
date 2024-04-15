<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-5">
                <img v-if="element.image.url !== undefined" :src="`${element.image.url}`">
            </div>
            <div class="col-7"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Header from '../components/Header/Header.main.vue';
import fotter from '../components/Footer/footer.vue';

export default {
  components: {
    fotter,
    Header
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
      search: [],
      search2: [],
      product: [],
      id: '',
      gen: '',
      element: {
        image: {
          url: ''
        }
      },
      discount: '',

    }
  },

  created() {
    // console.log(this.totalPages);
    this.IDcart = JSON.parse(localStorage.getItem('cart'));
    axios.get(`http://localhost:3000/api/picture/stored`)
      .then(res => {
        // if (this.selectedBrands.length === 0) {
        // Nếu không có tên `nameTH` nào được chọn, hiển thị tất cả sản phẩm
        this.product = res.data;
        // } else {
        // Nếu có tên `nameTH` được chọn, lọc danh sách sản phẩm theo tên `nameTH`
        // this.product = res.data.filter(item => this.selectedBrands.includes(item.nameTH));
        // }
      })
      .catch(err => {
        console.log(err);
      });
    axios.get(`http://localhost:3000/api/thuonghieu/stored`)
      .then(res => {
        this.thuonghieu = res.data
      })
      .catch(err => {
        console.log(err);
      })
    axios.get(`http://localhost:3000/api/danhmuc/stored`)
      .then(res => {
        this.danhmuc = res.data
      })
      .catch(err => {
        console.log(err);
      })
  },

  methods: {
    copyID(id) {
      this.id = id
      axios.get(`http://localhost:3000/api/picture/product/${this.id}`)
        .then(res => {
          this.element = res.data
        })
        .catch(err => {
          console.log(err);
        })
    },

    addCart(id) {
      this.cart.idProduct_item[0].id_item = this.id
      const dataItem = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`, // Đính kèm Token vào tiêu đề
        },
        product: this.cart,
      }
      console.log(dataItem);
      axios.post(`http://localhost:3000/api/cart/add/${id}`, dataItem)
        .then(() => {
          alert('Thêm vào giỏ hàng thành công')
        })
        .catch(err => {
          console.log(err);
        })
    },

    TTien(a, b) {
      if (a != undefined && b != undefined)
        return a * b
    },

    checklogin() {
      if (this.IDcart == undefined) {
        alert('Bạn cần đăng nhập khi thêm vào giỏ hàng')
        this.$router.replace({ path: '/login' });
      }
      return;
    },

  },

  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      $('#filterbar').collapse(true);
      $('#inner-box').collapse(true);
      $('#inner-box2').collapse(true);
    });
  },

  computed: {
    filteredProducts() {
      return this.product.filter((product) => {
        const searchLower = this.search.toString().toLowerCase();
        const searchLower2 = this.search2.toString().toLowerCase();
        return (
          product.address && product.address.toLowerCase().includes(searchLower) &&
          (product.gen && product.gen.some(category => category.toLowerCase().includes(searchLower2)))

        )
      });
    }
  },
}
</script>
<style></style>