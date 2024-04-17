<template>
  <div>
    <headerAdmin></headerAdmin>
    <div class="container-fluid">
      <div class="headanhmuc mb-5">
        <h3 class="abc">DANH SÁCH ORDER</h3>
      </div>
      <div :style="{  overflow: 'scroll' }">
        <table class="table" :style="{  overflowX: 'auto' }">
          <thead
            :style="{  height: '100%', overflowX: 'auto' }"
          >
            <tr>
              <th class="tab" >TT</th>
              <th class="tab" >Người Dùng</th>
              <th class="tab" >Ảnh</th>
              <th class="tab" >Tên Sản Phẩm</th>
              <th class="tab" >Số Lượng</th>
              <th class="tab" >Giá</th>
              <th class="tab" >Tổng Tiền</th>
              <th class="tab" >Thời Gian Order</th>
              <th class="tab" >Địa chỉ chi tiết</th>
              <th class="tab" >Trạng Thái</th>
              <th class="tab" >Thao Tác</th>
            </tr>
          </thead>
          <tbody :style="{ maxWidth: '1000px', overflowX: 'auto' }">
            <tr v-if="orders.length < 1">
              <th colspan="8" class="text-center">
                <h3>Không có Order nào</h3>
              </th>
            </tr>

            

            <tr v-for="(item, index) in orders" :key="index">

              <td class="tab">
                <span 
                  class="form-center" 
                  :style="{ height: `${item.products.length * 50}px` }"
                  >{{ index + 1 }}</span>
              </td>

              <td class="tab">
                <span style="font-size: 12px;"
                  class="form-center"
                  :style="{ height: `${item.products.length * 50}px` }"
                  >{{ item.user.fullName }}</span
                >
              </td>
              <td class="tab">
                <div
                  style="margin-bottom: 20px;"
                  class="container-img"
                  v-for="(product, index) in item.products"
                  :key="index"
                >
                  <img style="height: 60px;" :src="product.info.image.url" class="img-product" />
                </div>
              </td>

              <td class="tab">
                <div
                  class="container-img"
                  v-for="(product, index) in item.products"
                  :key="index"
                >
                  <span  style="text-align: left; font-size: 12px;">{{ product.info.name }}</span>
                </div>
              </td>

              <td class="tab">
                <div
                  class="container-img"
                  v-for="(product, index) in item.products"
                  :key="index"
                >
                  <span style="margin-left:20px;">{{ product.quantity }}</span>
                </div>
              </td>
    
              <td class="tab">
                <div
                  class="container-img"
                  v-for="(product, index) in item.products"
                  :key="index"
                >
                  <span style="font-size: 12px;"
                    >{{
                      new Intl.NumberFormat().format(product.info.price)
                    }}
                    đ</span
                  >
                </div>
              </td>

         
              <td class="tab">
                <span style="font-size: 12px;"
                  class="form-center"
                  :style="{
                    height: `${item.products.length * 50}px`,
                    color: 'red',
                    fontWeight: 'bold',
                  }"
                >
                  {{ new Intl.NumberFormat().format(sumPrice(item)) }} đ
                </span>
              </td>
              <td class="tab">
                <span style="font-size: 12px;"
                  class="form-center"
                  :style="{ height: `${item.products.length * 50}px` }"
                >
                  {{ dayjs(item.createdAt).format("hh:mm ngày DD-MM-YYYY") }}
                </span>
              </td>
              <td class="tab">
                <span
                  class="adress-style"
                  :style="{ maxHeight: `${item.products.length * 100}px`, overflowY: 'auto' }"
                >
                  <div :style="{fontSize: '12px'}">Người Nhận: {{ item.name }}</div>
                  <div :style="{fontSize: '12px'}">Số điện thoại: {{ item.phone }}</div>
                  <div :style="{fontSize: '12px'}">Địa chỉ cụ thể: <span v-html="item.address"></span></div>
                </span>
              </td>
              <td class="tab">
                <div
                  class="form-center"
                  :style="{ height: `${item.products.length * 50}px` }"
                >
                  <span :class="`${item.status ? 'approve' : 'pending'}`">{{
                    !item.status ? "Đang Chờ Xác Nhận" : "Đã Xác Nhận Đơn Hàng"
                  }}</span>
                </div>
              </td>
              <td v-if="!item.status" class="tab">
                <div
                  :style="{ height: `${item.products.length * 50}px` }"
                  class="form-center"
                >
                  <span class="action-approve" @click="approved(item._id)"
                    >Xác Nhận</span
                  >
                </div>
              </td>
              <td v-else>
                <div
                  :style="{ height: `${item.products.length * 50}px` }"
                  class="form-center"
                >
                  <span>...</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="pagination?.total" class="mt-5">
        <div class="d-flex justify-content-center">
          <div
            v-for="paginate in pagination?.pageSize ?? 0"
            :key="paginate"
            class="pagination"
            :class="{
              'pagination-active': paginate === (pagination?.currentPage ?? 1),
            }"
            @click="getOrderData(paginate)"
          >
            {{ paginate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import headerAdmin from "../../components/Header/headerAdmin.vue";
import { onMounted, ref, inject } from "vue";
import { getOrder, updateOrder } from "../../api/order.api";
import dayjs from "dayjs";

const startLoading = inject("startLoading");
const stopLoading = inject("stopLoading");

const orders = ref([]);
const pagination = ref();

const sumPrice = (item) => {
  return item.products
    ?.map((product) => product.info.price * product.quantity)
    .reduce((a, b) => a + b);
};

const getOrderData = async (page) => {
  startLoading();
  try {
    const { data, pagination: paginate } = await getOrder({
      page: page ?? 1,
    });
    pagination.value = paginate;
    orders.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    stopLoading();
  }
};

const approved = async (id) => {
  try {
    await updateOrder(id, {
      status: true,
    });
    getOrderData();
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getOrderData();
});
</script>

<style scoped>
.bodys {
  display: flex;
  height: 700px;
  flex-direction: column;
  align-items: center; /* Căn giữa theo chiều ngang */
}
.tab{
  border: 2px solid #c5c5c5;
}
.headanhmuc {
  text-align: center;
  position: relative;
  min-height: 100px;
  /* width: 1150px; */
  background-color: #535353;
  margin-top: 20px;
  color: white;
}
.abc {
  position: relative;
  top: 30px;
}
.table {
  text-align: center;
  /* max-width: 800px; */
  overflow-x: auto;
  border: 2px solid rgb(212, 212, 212);
  margin-top: 10px;
  /* left: -225px; */
}
.form-center {
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.container-img {
  height: 50px;
  margin: 5px 0;
  display: flex;
  align-items: center;
}
.img-product {
  height: 50px;
  width: 60px;
  border-radius: 6px;
}
.approve {
  background: rgb(129, 167, 243);
  padding: 5px 10px;
  border-radius: 6px;
}
.pending {
  background: rgb(255, 213, 0);
  padding: 5px 10px;
  border-radius: 6px;
}
.action-approve {
  background: rgb(255, 191, 0);
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}
.action-cancle {
  background: rgb(243, 56, 56);
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
}

.pagination {
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #888;
  border-radius: 4px;
  margin: 0 4px;
}

.pagination-active {
  background: #535353;
  color: white;
}

.adress-style {
  display: flex;
  flex-direction: column;
  text-align: left;

}
</style>
