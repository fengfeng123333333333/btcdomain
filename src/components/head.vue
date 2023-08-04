  
<style scoped>
.head_app {
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.head_left {
  display: flex;
  align-items: center;
}
.head_logo {
  width: 136px;
  height: 14px;
  margin-right: 20px;
  cursor: pointer;
}
.head_left_line {
  width: 1px;
  height: 30px;
  background: #ffffff;
  margin-right: 20px;
}
.head_nav_item {
  width: 124px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
}
.head_right {
  display: flex;
  align-items: center;
}
.head_right_content {
  width: 140px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  margin-right: 20px;
  cursor: pointer;
}
.cart {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.head_right_content_has {
  width: 185px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding-left: 4px;
  padding-right: 10px;
  font-size: 16px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}
.head_right_content_has_left {
  display: flex;
  align-items: center;
}
.avater_def {
  width: 32px;
  height: 32px;
  margin-right: 6px;
  border-radius: 50%;
}
.arrow_down {
  width: 16px;
  height: 16px;
}
.out_login_box {
  position: absolute;
  left: 0;
  top: 48px;
  width: 192px;
  height: 0;
  background: #ffffff;
  box-shadow: 0px 10px 24px 0px rgba(17, 15, 77, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  animation: out_login_box 0.2s forwards;
  overflow: hidden;
}
@keyframes out_login_box {
  from {
    height: 0;
  }
  to {
    height: 166px;
  }
}
.out_login_avater {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.out_login_address {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 10px;
}
.out_login_address img {
  width: 16px;
  height: 16px;
  margin-left: 8px;
}
.out_login_disconnent {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #868899;
  margin-top: 38px;
}
.out_login_disconnent img {
  margin-right: 8px;
  width: 24px;
  height: 24px;
}
</style>
<template>
  <div class="head_app">
    <div class="head_left">
      <img src="../assets/head/logo_nav@2x.png" alt="" class="head_logo" @click="toHomePageFun">
      <div class="head_left_line"></div>
      <a class="head_nav_item" href="https://docs.btcdomains.io" target="_blank">Document</a>
      <a class="head_nav_item" href="https://linktr.ee/btcdomain_btc" target="_blank">Linktree</a>
    </div>
    <div class="head_right">
      <div class="head_right_content" @click="collectFun" v-if="!showAddress">Connect Wallet</div>
      <div class="head_right_content_has" v-else @click="toPersonPageFun">
        <div class="head_right_content_has_left">
          <img :src="avaterImg" alt="" class="avater_def" v-if="avaterImg">
          <img src="../assets/head/avater_def@2x.png" alt="" class="avater_def" v-else>
          <span>{{showAddress}}</span>
        </div>
        <img src="../assets/head/arrow_down_white@2x.png" alt="" @click.stop="downFun" class="arrow_down">
        <div class="out_login_box" v-if="downBoolean">
          <img :src="avaterImg" alt="" class="out_login_avater" v-if="avaterImg">
          <img src="../assets/head/avater_def@2x.png" alt="" class="out_login_avater" v-else>
          <div class="out_login_address">
            <span>{{showAddress}}</span>
            <img src="../assets/head/icon_16px_copy@2x.png" alt="" @click.stop="copyActionFun">
          </div>
          <div class="out_login_disconnent" @click.stop="outLoginFun">
            <img src="../assets/head/icon_disconnect@2x.png" alt="">
            <span>Disconnect Wallet</span>
          </div>
        </div>
      </div>
      <img src="../assets/head/icon_cart@2x.png" alt="" class="cart" @click="toCartPageFun" />
    </div>
    <Login v-if="walletTypeBoolean" @loginEnd="loginEndFun" @avater="avaterFun" @closemask="closeMaskFun"></Login>
  </div>
</template>
      
<script>
import Login from './login.vue'
import { copyAction, traceFun } from '../util/func/index'
import apis from '../util/apis/apis'
export default {
  components: {
    Login
  },
  props: ["showData", "loginShow", "goTcartpage"],
  watch: {
    showData: {
      immediate: true,
      handler(val) {
        if (localStorage.bitcoin_address && localStorage.walletType != 'custom') {
          this.showAddress = this.showAddressFun(val);
        } else {
          this.showAddress = null
        }
      }
    },
    goTcartpage: {
      immediate: true,
      handler(val) {
        if (val) {
          this.goTcartpageChild = val
        }
      }
    },
    loginShow: {
      immediate: true,
      handler(val) {
        if (val) {
          this.walletTypeBoolean = true;
        }
      }
    },
  },
  data() {
    return {
      walletTypeBoolean: false,
      showAddress: null,
      downBoolean: false,
      goTcartpageChild: this.goTcartpage,
      typePage: false,
      avaterImg: null,
    }
  },
  methods: {
    copyActionFun() {
      copyAction(localStorage.bitcoin_address)
    },
    outLoginFun() {
      localStorage.removeItem("walletType");
      localStorage.removeItem("balance");
      localStorage.removeItem("bitcoin_address");
      localStorage.removeItem("public_key");
      this.showAddress = null;
      this.downBoolean = false;
      this.$router.push({
        name: "home"
      })
    },
    downFun() {
      this.downBoolean = !this.downBoolean
    },
    toHomePageFun() {
      this.$router.push({
        name: "home"
      })
    },
    toCartPageFun() {
      let herf = window.location.href;
      if (herf.indexOf('cart') != -1) {
        return
      }
      let address = localStorage.bitcoin_address;
      if (address) {
        this.$router.push({
          name: "cart"
        })
        let params = JSON.parse(localStorage.params);
        params.data_type = "进入购物车"
        traceFun(params)
      } else {
        this.typePage = true
        this.walletTypeBoolean = true
      }
    },
    collectFun() {
      localStorage.headclick = 1;
      this.walletTypeBoolean = true
    },
    closeMaskFun() {
      this.$emit('loginShow', false)
      this.walletTypeBoolean = false
    },
    loginEndFun(value) {
      if (value != 'custom') {
        this.showAddress = value;
      } else {
        this.showAddress = null;
      }
      this.$emit("cartChange")
      this.walletTypeBoolean = false;
      let params = JSON.parse(localStorage.params);
      params.data_type = "进入购物车"
      traceFun(params)
      if (this.goTcartpageChild) {
        this.$router.push({
          name: "cart"
        })
      }
      if (this.typePage) {
        this.$router.push({
          name: "cart"
        })
      }
    },
    avaterFun(value) {
      if (value) {
        this.avaterImg = value;
      }
    },
    showAddressFun(address) {
      if (address) {
        let addressBefor = address.slice(0, 6);
        let addressBehand = address.slice(address.length - 4)
        let newAddress = addressBefor + "..." + addressBehand
        return newAddress
      } else {
        return address
      }
    },
    toPersonPageFun() {
      this.$router.push({
        name: "person"
      })
    },
    addressPersonFun(address) {
      this.spanBoolean = true
      let param = {};
      param.address = address
      this.$axios({
        method: "post",
        url: apis.getDomainApi,
        data: param,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            if (res.data.data.length > 0) {
              this.avaterImg = res.data.data[0].content_url;
            }
            this.spanBoolean = false;
          } else {
            Message.error(res.data.message)
            this.spanBoolean = false
          }
        }
      }).catch(err => {
        this.spanBoolean = false
      });
    },
  },
  mounted() {
    if (localStorage.bitcoin_address && localStorage.walletType != 'custom') {
      this.showAddress = this.showAddressFun(localStorage.bitcoin_address)
      this.addressPersonFun(localStorage.bitcoin_address)
    }
  }
}
</script>
      