<style scoped>
.mobile_emptyCart_app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.empty_head_img {
  margin-top: 1.8rem;
  width: 5.2rem;
  height: 4.56rem;
  font-size: 0.4rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: url("../assets/cart/icon_cartempty@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.empty_head_dec {
  margin-top: 0.12rem;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #ffffff;
}
.home_search {
  width: 100%;
  margin-top: 0.4rem;
  padding: 0 0.2rem;
  position: relative;
}
.searchInput {
  width: 100%;
  height: 1.2rem;
  border: 0;
  outline: 0;
  padding: 0 0.4rem;
  font-size: 0.32rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  border-radius: 0.16rem;
}
.icon_search {
  position: absolute;
  right: 0.4rem;
  top: 0.36rem;
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.icon_clear {
  position: absolute;
  right: 0.88rem;
  top: 0.36rem;
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.search_box_history {
  width: 7.1rem;
  background: #ffffff;
  box-shadow: 0 0.2rem 0.48rem 0 rgba(17, 15, 77, 0.1);
  border-radius: 0.16rem;
  position: absolute;
  left: 50%;
  margin-left: -3.55rem;
  top: 1.24rem;
  padding: 0 0.2rem;
  z-index: 9;
}
.search_box_history_head {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.search_box_history_head_item {
  display: flex;
  align-items: center;
}
.search_box_history_head_item img {
  width: 0.48rem;
  height: 0.48rem;
  margin-left: 0.04rem;
}
.history_box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.history_item {
  height: 0.64rem;
  background: rgba(235, 236, 243, 0.5);
  border-radius: 0.34rem;
  font-size: 0.28rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}
.history_item img {
  width: 0.32rem;
  height: 0.32rem;
}
.home_content {
  width: 7.1rem;
  margin: 0 auto;
  margin-top: 0.04rem;
}
.home_content_result {
  width: 100%;
  height: 2.9rem;
  background: #ffffff;
  border-radius: 0.16rem;
  border: 0.02rem solid #e6e7f0;
  padding: 0.6rem 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.mobile_result_name {
  font-size: 0.44rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.result_left_bottom_item {
  height: 0.4rem;
  border-radius: 0.2rem;
  padding: 0 0.12rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  margin-bottom: 0.1rem;
  margin-right: 0.08rem;
}
.result_right {
  width: 3.08rem;
  height: 0.88rem;
  background: #4540d6;
  border-radius: 0.44rem;
  display: flex;
  align-items: center;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  padding-left: 0.32rem;
  position: absolute;
  bottom: 0.6rem;
  right: 0.2rem;
}
.result_right img {
  width: 0.48rem;
  height: 0.48rem;
  margin-right: 0.12rem;
}
.home_content_link {
  margin-top: 0.04rem;
  width: 100%;
  height: 10rem;
  background: #ffffff;
  border-radius: 0.16rem;
  border: 0.02rem solid #e6e7f0;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 0.2rem;
  position: relative;
}
.home_content_link::-webkit-scrollbar {
  display: none;
}
.link_head {
  height: 1rem;
  border-bottom: 0.02rem solid #e2e3ed;
  font-size: 0.26rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  line-height: 1rem;
}
.link_box {
  width: 100%;
  position: relative;
}
.link_item {
  width: 100%;
  height: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.32rem 0;
  position: relative;
}
.mobile_result_noAvalibable {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.link_item_right {
  position: absolute;
  right: 0.4rem;
  top: 0.56rem;
  width: 0.48rem;
  height: 0.48rem;
}
.link_item_right img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.mobile_result_available {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.result_item_add {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  bottom: 0.6rem;
}
.mobile_home_cart {
  width: 100%;
  padding: 0.4rem;
}
.mobile_home_cart_title {
  font-size: 0.32rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.mobile_home_cart_option {
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #8d90ab;
  margin-top: 0.2rem;
}
.home_cart_button {
  width: 3.6rem;
  height: 0.88rem;
  background: #0a0a0b;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
}
.home_cart_button img {
  width: 0.48rem;
  height: 0.48rem;
}
.home_cart_list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1.3rem;
}
.cart_item {
  height: 0.64rem;
  background: rgba(235, 236, 243, 0.5);
  border-radius: 0.34rem;
  font-size: 0.28rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
  animation: cartItem 1s forwards;
  margin-right: 0.2rem;
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
  width: 0.32rem;
  height: 0.32rem;
  margin-left: 0.16rem;
  cursor: pointer;
}
.link_item_add {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.empty_head {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.empty_head_animal {
  animation: empty_headbox 0.2s forwards;
  overflow: hidden;
}
@keyframes empty_headbox {
  from {
    height: 1rem;
  }
  to {
    height: 0;
  }
}
</style>
<template>
  <div class="mobile_emptyCart_app" :style="{minHeight:clientHeight+'px'}">
    <div class="empty_head" :class="{empty_head_animal:contentShow}">
      <div class="empty_head_img">
        Your cart is empty.
      </div>
      <div class="empty_head_dec">Find your .btc domain.</div>
    </div>
    <div class="home_search">
      <input type="text" @focus.stop='onfucusDomainFun' @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder="Your name / product / brand …" class="searchInput">
      <img src="../assets/mobileHead/icon_m_search@2x.png" alt="" class="icon_search" @click="searchFun">
      <img src="../assets/mobileHead/icon_m_close_search@2x.png" alt="" v-show="searchStutas" class="icon_clear" @click="clearSearchFun">
      <div class="search_box_history" @click.stop="histroyBoolean=!histroyBoolean" v-if="histroyBoolean">
        <div class="search_box_history_head">
          <div class="search_box_history_head_item">
            <img src="../assets/home/icon_timehistory@2x.png" alt="">
            <span>Histroy</span>
          </div>
          <div class="search_box_history_head_item" style="cursor: pointer;" @click.stop="clearHistoryFun">
            <img src="../assets/home/icon_clear@2x.png" alt="">
            <span>Clear</span>
          </div>
        </div>
        <div class="history_box">
          <div class="history_item" v-for="(item,index) in historyList" :key="index" @click="historyseachFun(item)">
            <span style="margin-right:0.16rem">{{item.domain}}</span>
            <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectHistroyFun(index)">
          </div>
        </div>
      </div>
    </div>
    <div class="home_content" @click.stop v-show="contentShow">
      <div class="home_content_result">
        <span class="mobile_result_name">{{resultData.dom_name}}</span>
        <div class="mobile_result_available" v-if="resultData.dom_state===9">
          <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)">Available</div>
          <div class="result_left_bottom_item" style="margin-top:0.12rem; color:#2E2F3E;background:rgba(83,85,112,0.1)" v-if="resultData.dom_state===9">{{resultData.fee.total_fee}} BTC/yr</div>
        </div>
        <div class="mobile_result_noAvalibable" v-else-if="resultData.dom_state===0||resultData.dom_state===5">
          <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)">Registered</div>
          <div class="result_left_bottom_item xiahua" style="background:rgba(137,140,181,0.1)" @click="copyFun(resultData)">Owner:{{resultData.showAddress}}</div>
          <div class="result_left_bottom_item" style="background:rgba(137,140,181,0.1)">Expiration Date:{{resultData.expire_date_show}}</div>
          <div class="result_left_bottom_item xiahua" style="background:rgba(137,140,181,0.1)" @click="toINSFun(resultData.inscribe_id)">INS#{{resultData.number}}</div>
        </div>
        <div v-else class="mobile_result_noAvalibable">
          <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)">Registering...</div>
        </div>
        <div class="result_right" v-if="resultData.dom_state===9&&!resultData.isSelect" @click="addResultFun">
          <img src="../assets/home/icon_add_white@2x.png" alt="">
          <span>Add To Cart</span>
        </div>
        <img src="../assets/home/icon_ok_p@2x.png" alt="" v-if="resultData.dom_state===9&&resultData.isSelect" class="result_item_add">
        <div class="vant_loading_box" v-show="spanResultBoolean">
          <van-loading type="spinner" color="#1989fa" class='vant_loading' />
        </div>
      </div>
      <div class="home_content_link">
        <div class="link_head">More Domains</div>
        <div class="link_box">
          <div class="link_item" v-for="(item,index) in linkList" :key="index">
            <span style="font-size: 0.32rem">{{item.dom_name}}</span>
            <div class="mobile_result_noAvalibable" v-if="item.dom_state===9">
              <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)">Available</div>
              <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)" v-if="item.dom_state===9">{{item.fee.total_fee}} BTC/yr</div>
            </div>
            <div class="mobile_result_noAvalibable" v-else-if="item.dom_state===0||item.dom_state===5">
              <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)">Registered</div>
              <div class="result_left_bottom_item xiahua" style="background:rgba(137,140,181,0.1)" @click="copyFun(item)">Owner:{{item.showAddress}}</div>
              <div class="result_left_bottom_item" style="background:rgba(137,140,181,0.1)">Expiration Date:{{item.expire_date_show}}</div>
              <div class="result_left_bottom_item xiahua" style="background:rgba(137,140,181,0.1)" @click="toINSFun(item.inscribe_id)">INS#{{item.number}}</div>
            </div>
            <div v-else class="mobile_result_noAvalibable">
              <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)">Registering</div>
            </div>
            <div class="link_item_right" v-if="item.dom_state==9">
              <img src="../assets/home/icon_add_black@2x.png" alt="" v-if="!item.isSelect" class="link_item_add" @click="addLinkFun(item)">
              <img src="../assets/home/icon_ok_p@2x.png" alt="" v-else class="link_item_add">
            </div>
          </div>
        </div>
        <div class="vant_loading_box" v-show="spanMoreBoolean">
          <van-loading type="spinner" color="#1989fa" class='vant_loading' />
        </div>
      </div>
    </div>
    <div class="home_kongbai" v-show="!contentShow"></div>
    <van-action-sheet v-model:show="cartBoolean" :lock-scroll="false" :round="false" :overlay="false">
      <div class="mobile_home_cart">
        <div class="mobile_home_cart_title" v-if="cartNum>1">{{cartNum}} Domains</div>
        <div class="mobile_home_cart_title" v-else>{{cartNum}} Domain</div>
        <div class="home_cart_list">
          <div class="cart_item" v-for="(item,index) in cartList" :key="index">
            <span>{{item.domain}}</span>
            <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectcartFun(item,index)">
          </div>
        </div>
        <!-- <div class="mobile_home_cart_option">View All</div> -->
        <div class="home_cart_button" @click.stop="topCartPageFun">
          <img src="../assets/home/icon_cart.png" alt="">
          <span>Continue To Cart</span>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>
  
<script>
import apis from '../util/apis/apis'
import { copyAction, changeStatusFun } from '../util/func/index'
const moment = require('moment');
import { showFailToast } from 'vant';
export default {
  watch: {
    cartList: {
      handler(newValue) {
        this.cartNum = newValue.length;
        if (this.cartNum > 0) {
          this.cartBoolean = true
        }
        console.log(this.cartNum)
      },
      deep: true
    }
  },
  data() {
    return {
      spanMoreBoolean: false,
      clientHeight: 0,
      searchText: null,
      searchStutas: false,
      historyList: [],
      histroyBoolean: false,
      contentShow: false,
      resultData: {
        dom_name: null,
        fee: {},
        dom_state: null,
        isSelect: false,
        owner_address: null,
        expire_date: null,
        showAddress: null,
        expire_date_show: null,
        inscribe_id: null,
        number: null
      },
      linkList: [],
      cartList: [],
      cartNum: 0,
      spanResultBoolean: false,
      cartBoolean: false
    }
  },
  methods: {
    delectcartFun(item, index) {
      this.cartList.splice(index, 1)
      this.linkList.forEach(element => {
        if (element.domain === item.domain) {
          element.isSelect = false
        }
      })
      if (item.domain === this.resultData.domain) {
        this.resultData.isSelect = false
      }
    },
    topCartPageFun() {
      let arr = []
      this.cartList.forEach(element => {
        let temp = {};
        temp.domain = element.dom_name;
        temp.year = 1;
        arr.push(temp)
      })
      localStorage.cartList = JSON.stringify(arr);
      this.$emit("addDomain", arr)
    },
    copyFun(obj) {
      copyAction(obj.owner_address)
    },
    toINSFun(id) {
      let url = "https://ordinals.com/inscription/" + id;
      window.open(url, '_blank');
    },
    addResultFun() {
      if (this.resultData.isSelect) {
        return
      }
      this.resultData.isSelect = true
      this.cartList.push(this.resultData)
    },
    addLinkFun(item) {
      if (item.isSelect) {
        return
      }
      item.isSelect = true
      item.domain = item.dom_name;
      console.log(item)
      this.cartList.push(item)
    },
    showAddressFun(address) {
      if (address) {
        let addressBefor = address.slice(0, 8);
        let addressBehand = address.slice(address.length - 8)
        let newAddress = addressBefor + "..." + addressBehand
        return newAddress
      } else {
        return address
      }
    },
    queryDomainFun() {
      this.spanResultBoolean = true;
      let param = {};
      param.domain = this.searchText + ".btc"
      this.$axios({
        method: "post",
        data: param,
        url: apis.queryDomainApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            res.data.data.isSelect = false;
            let data = res.data.data;
            data.domain = data.dom_name
            data = changeStatusFun(data);
            if (data.dom_state != 9) {
              data.showAddress = this.showAddressFun(data.owner_address)
              data.expire_date_show = moment(data.expire_date).format("YYYY-MM-DD")
            }
            this.cartList.forEach(element => {
              if (element.domain === data.domain) {
                data.isSelect = true
              }
            })
            this.resultData = data;
            let temp = {};
            temp.domain = this.searchText;
            this.historyList.unshift(temp);
            this.historyList = this.historyList.slice(0, 20);
            localStorage.historyList = JSON.stringify(this.historyList);
            this.histroyBoolean = false;
            this.spanResultBoolean = false;
          } else {
            this.contentShow = false
            this.spanResultBoolean = false;
            showFailToast(res.data.message)
          }
        }
      }).catch(err => {
        this.contentShow = false
      });
    },
    queryMoreDomainFun() {
      this.spanMoreBoolean = true
      let param = {};
      param.domain = this.searchText + ".btc"
      this.$axios({
        method: "post",
        data: param,
        url: apis.queryMoreDomainApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          let data = res.data.data;
          data.forEach(element => {
            element.domain = element.dom_name
            this.cartList.forEach(ele => {
              if (element.domain === ele.domain) {
                element.isSelect = true
              } else {
                element.isSelect = false
              }
            })
            if (element.dom_state != 9) {
              element.showAddress = this.showAddressFun(element.owner_address)
              element.expire_date_show = moment(element.expire_date).format("YYYY-MM-DD HH:mm:ss")
            }
          })
          this.linkList = res.data.data;
          this.spanMoreBoolean = false
        }
      }).catch(err => {
        this.spanMoreBoolean = false
      });
    },
    searchFun() {
      if (!this.searchText) {
        return
      }
      this.contentShow = true;
      this.queryDomainFun()
      this.queryMoreDomainFun()
    },
    clearSearchFun() {
      this.searchStutas = false;
      this.searchText = null;
      this.contentShow = false;
    },
    onfucusDomainFun() {
      let historyList = localStorage.historyList;
      if (historyList) {
        let arr = JSON.parse(historyList);
        let set = new Set(arr.map((item) => JSON.stringify(item)));
        this.historyList = [...set].map((item) => JSON.parse(item));
        localStorage.historyList = JSON.stringify(this.historyList)
      } else {
        return
      }
      if (historyList.length > 0) {
        this.histroyBoolean = true;
      }
    },
    isInputFun(e) {
      this.searchText = e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, '');
      if (e.target.value) {
        this.searchStutas = true;
      } else {
        this.searchStutas = false;
      }
    },
    clearHistoryFun() {
      localStorage.removeItem("historyList");
      this.historyList = []
      this.histroyBoolean = false
    },
    historyseachFun(item) {
      this.searchText = item.domain;
      this.searchFun()
    },
    delectHistroyFun(index) {
      this.historyList.splice(index, 1);
      if (this.historyList.length === 0) {
        localStorage.removeItem("historyList")
        this.histroyBoolean = false
      } else {
        localStorage.historyList = JSON.stringify(this.historyList);
      }
    },
  },
  mounted() {
    this.clientHeight = document.documentElement.clientHeight - 70;
  }
}
</script>
  
  