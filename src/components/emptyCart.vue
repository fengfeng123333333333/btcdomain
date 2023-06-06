  
<style scoped>
.empty_app {
  width: 100%;
  height: 853px;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 78%, #ffffff 100%);
  position: relative;
}
.empty_body {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-top: 90px;
}
.empty_head {
  width: 390px;
  margin: 0 auto;
}
.empty_head_animal {
  animation: empty_headbox 0.2s forwards;
  overflow: hidden;
}
@keyframes empty_headbox {
  from {
    height: 100px;
  }
  to {
    height: 0;
  }
}
.empty_head_img {
  width: 390px;
  height: 340px;
  background: url("../assets/cart/icon_cartempty@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 40px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
}
.empty_head_dec {
  margin-top: 12px;
  font-size: 24px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}
.home_search {
  width: 100%;
  margin-top: 30px;
}
.search_box {
  width: 100%;
  height: 80px;
  position: relative;
}
.searchInput {
  width: 100%;
  height: 80px;
  border: 0;
  outline: 0;
  padding: 0 20px;
  font-size: 16px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  border-radius: 16px;
}
.searchInput::-webkit-input-placeholder {
  color: #a7a9be;
}
.icon_search {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.icon_clear {
  position: absolute;
  right: 90px;
  top: 18px;
  width: 44px;
  height: 44px;
  cursor: pointer;
}
.home_content {
  width: 100%;
  height: 0;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e6ed;
  margin-top: 2px;
  overflow: hidden;
  overflow-y: auto;
}
.home_content::-webkit-scrollbar {
  display: none;
}
.home_kongbai {
  height: 640px;
}
.home_content_show {
  animation: searchbox 0.5s forwards;
}
@keyframes searchbox {
  from {
    height: 0px;
  }
  to {
    height: 640px;
  }
}
.home_content_result {
  width: 100%;
  height: 120px;
  background: #f9f9fc;
  border-bottom: 1px solid #4540d6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.result_left {
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.result_left_bottom {
  margin-top: 10px;
  display: flex;
}
.result_left_bottom_item {
  height: 20px;
  border-radius: 10px;
  padding: 0 5px;
  line-height: 20px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  margin-right: 10px;
}
.result_right {
  width: 154px;
  height: 44px;
  background: #4540d6;
  border-radius: 22px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  padding-left: 15px;
}
.result_right img {
  width: 24px;
  height: 24px;
  margin-right: 4px;
}
.home_content_link {
  width: 1160px;
  margin: 0 auto;
}
.link_head {
  height: 56px;
  border-bottom: 1px solid #e2e3ed;
  font-size: 13px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  line-height: 56px;
}
.link_box {
  width: 100%;
}
.link_item {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.link_item_add {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.link_item_right {
  width: 64px;
  height: 44px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link_item_right:hover {
  background: rgba(69, 64, 214, 0.06);
}
.link_more {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  line-height: 44px;
  height: 44px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  cursor: pointer;
}
.home_foot_cart {
  width: 100%;
  height: 0;
  background: #ffffff;
  box-shadow: 0px -6px 14px 0px rgba(46, 47, 62, 0.1);
  animation: cart 0.2s forwards;
}
@keyframes cart {
  from {
    height: 0;
  }
  to {
    height: 100px;
  }
}
.home_cart {
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding-right: 20px;
  justify-content: space-between;
  position: relative;
}
.home_cart_num {
  widows: 130px;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.home_cart_button {
  width: 180px;
  height: 44px;
  background: #2ea449;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
}
.home_cart_button img {
  width: 24px;
  height: 24px;
}
.home_cart_list {
  position: absolute;
  top: 34px;
  left: 150px;
  width: 750px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.cart_item {
  height: 32px;
  background: rgba(235, 236, 243, 0.5);
  border-radius: 17px;
  font-size: 14px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: relative;
  animation: cartItem 1s forwards;
  margin-right: 10px;
}
@keyframes cartItem {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.cart_item img {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  cursor: pointer;
}
</style>
    <template>
  <div class="empty_app">
    <div class="empty_body">
      <div class="empty_head" :class="{empty_head_animal:contentShow}">
        <div class="empty_head_img">
          Your cart is empty.
        </div>
        <div class="empty_head_dec">Find your .btc domain.</div>
      </div>
      <div class="home_search">
        <div class="search_box" @click.stop>
          <input type="text" @focus.stop='onfucusFun' @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder-class="placeholderClass" placeholder="Your name / product / brand / company / industry…"
            class="searchInput">
          <img src="../assets/home/icon_search@2x.png" alt="" class="icon_search" @click="searchFun">
          <img src="../assets/home/icon_close_search@2x.png" alt="" v-show="searchStutas" class="icon_clear" @click="clearSearchFun">
        </div>
      </div>
      <div class="home_content" @click.stop v-show="contentShow" :class="{home_content_show:contentShow}">
        <div class="home_content_result">
          <div class="result_left">
            <span>{{resultData.name}}</span>
            <div class="result_left_bottom">
              <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)" v-if="resultData.status==='Available'">{{resultData.status}}</div>
              <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)" v-if="resultData.status==='Registered'">{{resultData.status}}</div>
              <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)" v-if="resultData.status==='Registering'">{{resultData.status}}</div>
              <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)">{{resultData.feegas}}</div>
            </div>
          </div>
          <div class="result_right" v-if="resultData.status==='Available'&&!resultData.isSelect" @click="addResultFun">
            <img src="../assets/home/icon_add_white@2x.png" alt="">
            <span>Add To Cart</span>
          </div>
          <img src="../assets/home/icon_ok_p@2x.png" alt="" v-if="resultData.status==='Available'&&resultData.isSelect" class="link_item_add">
        </div>
        <div class="home_content_link">
          <div class="link_head">More Domains</div>
          <div class="link_box">
            <div class="link_item" v-for="(item,index) in linkList" :key="index">
              <div class="result_left">
                <span style="font-size: 16px;">{{item.name}}</span>
                <div class="result_left_bottom">
                  <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)" v-if="item.status==='Available'">{{item.status}}</div>
                  <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)" v-if="item.status==='Registered'">{{item.status}}</div>
                  <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)" v-if="item.status==='Registering'">{{item.status}}</div>
                  <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)">{{item.feegas}}</div>
                </div>
              </div>
              <div class="link_item_right" v-if="item.status==='Available'">
                <img src="../assets/home/icon_add_black@2x.png" alt="" v-if="!item.isSelect" class="link_item_add" @click="addLinkFun(item)">
                <img src="../assets/home/icon_ok_p@2x.png" alt="" v-else class="link_item_add">
              </div>
            </div>
          </div>
          <div class="link_more">More…</div>
        </div>
      </div>
    </div>
    <div class="home_foot_cart" v-show="cartNum>0">
      <div class="home_cart">
        <div class="home_cart_num">{{cartNum}} Domains</div>
        <div class="home_cart_list">
          <div class="cart_item" v-for="(item,index) in cartList" :key="index">
            <span>{{item.name}}</span>
            <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectcartFun(item,index)">
          </div>
        </div>
        <div class="home_cart_button" @click.stop="cartPageFun">
          <img src="../assets/home/icon_cart.png" alt="">
          <span>Continue To Cart</span>
        </div>
      </div>
    </div>
  </div>
</template>
          
    <script>
export default {
  data() {
    return {
      searchText: null,
      searchTabList: [
        {
          id: 1,
          text: "Domains",
          isSelect: true
        },
        {
          id: 2,
          text: "Address",
          isSelect: false
        },
      ],
      selectId: 1,
      searchStutas: false,
      contentShow: false,
      resultData: {
        name: "momomobile.btc",
        status: "Available",
        feegas: "0.001132 BTC/yr",
        isSelect: false
      },
      linkList: [
        {
          name: "momomobile.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "momomobile.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "momomobile.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "momomobile.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "momomobile.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "momomobile.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "momomobile.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "momomobile.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng1.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng2.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng3.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng4.btc",
          status: "Registered",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng5.btc",
          status: "Registering",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
      ],
      cartList: [],
      cartNum: 0
    }
  },
  watch: {
    cartList: {
      handler(newValue) {
        this.cartNum = newValue.length;
      },
      deep: true
    }
  },
  methods: {
    outClick() {
      this.contentShow = false;
    },
    changeSearchTypeFun(item) {
      if (item.isSelect) {
        return
      }
      this.searchTabList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.selectId = item.id;
      this.searchText = null;
    },
    clearSearchFun() {
      this.searchStutas = false;
      this.searchText = null;
    },
    searchFun() {
      if (!this.searchText) {
        return
      }
      this.contentShow = true;
      if (this.selectId === 1) {
      } else {

      }
    },
    isInputFun(e) {
      if (e.target.value) {
        this.searchStutas = true;
      } else {
        this.searchStutas = false;
      }
    },
    onfucusFun() {
      if (this.searchStutas) {
        console.log("dfdfd")
        // this.contentShow = true;
      }
    },
    addLinkFun(item) {
      if (item.isSelect) {
        return
      }
      item.isSelect = true
      this.cartList.push(item)
    },
    addResultFun() {
      if (this.resultData.isSelect) {
        return
      }
      this.resultData.isSelect = true
      this.cartList.push(this.resultData)
    },
    delectcartFun(item, index) {
      this.cartList.splice(index, 1)
      this.linkList.forEach(element => {
        if (element.name === item.name) {
          element.isSelect = false
        }
      })
      if (item.name === this.resultData.name) {
        this.resultData.isSelect = false
      }
    },
    cartPageFun() {
      this.$emit("addDomain", this.cartList)
    }
  },
  mounted() {
    document.addEventListener("click", this.outClick);
  },
  destroyed() {
    document.removeEventListener("click", this.outClick)
  }
}
    </script>
          