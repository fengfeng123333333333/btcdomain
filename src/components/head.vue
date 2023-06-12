  
<style scoped>
.head_app {
  width: 100%;
  height: 0.7rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01rem solid rgba(255, 255, 255, 0.1);
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
  width: 1.36rem;
  height: 0.14rem;
  margin-right: 0.2rem;
  cursor: pointer;
}
.head_left_line {
  width: 0.01rem;
  height: 0.3rem;
  background: #ffffff;
  margin-right: 0.2rem;
}
.head_nav_item {
  width: 1.24rem;
  height: 0.4rem;
  line-height: 0.4rem;
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
  width: 1.4rem;
  height: 0.4rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.14rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  margin-right: 0.2rem;
  cursor: pointer;
}
.cart {
  width: 0.4rem;
  height: 0.4rem;
  cursor: pointer;
}
.head_right_content_has {
  width: 1.85rem;
  height: 0.4rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.2rem;
  padding-left: 0.04rem;
  padding-right: 0.1rem;
  font-size: 0.16rem;
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
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.06rem;
}
.arrow_down {
  width: 0.16rem;
  height: 0.16rem;
}
.out_login_box {
  position: absolute;
  left: 0;
  top: 0.48rem;
  width: 1.92rem;
  height: 0;
  background: #ffffff;
  box-shadow: 0px 0.1rem 0.24rem 0px rgba(17, 15, 77, 0.1);
  border-radius: 0.08rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.2rem;
  animation: out_login_box 0.2s forwards;
  overflow: hidden;
}
@keyframes out_login_box {
  from {
    height: 0;
  }
  to {
    height: 1.66rem;
  }
}
.out_login_avater {
  width: 0.4rem;
  height: 0.4rem;
}
.out_login_address {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 0.1rem;
}
.out_login_address img {
  width: 0.16rem;
  height: 0.16rem;
  margin-left: 0.08rem;
}
.out_login_disconnent {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #868899;
  margin-top: 0.38rem;
}
.out_login_disconnent img {
  margin-right: 0.08rem;
  width: 0.24rem;
  height: 0.24rem;
}
</style>
<template>
  <div class="head_app">
    <div class="head_left">
      <img src="../assets/head/logo_nav@2x.png" alt="" class="head_logo" @click="toHomePageFun">
      <div class="head_left_line"></div>
      <a class="head_nav_item" href="https://docs.btcdomains.io" target="_blank">Document</a>
      <a class="head_nav_item" href="https://linktr.ee/btcdomain" target="_blank">Exchange</a>
    </div>
    <div class="head_right">
      <div class="head_right_content" @click="collectFun" v-if="!showAddress">Connect Wallet</div>
      <div class="head_right_content_has" v-else @click="toPersonPageFun">
        <div class="head_right_content_has_left">
          <img src="../assets/head/avater_def@2x.png" alt="" class="avater_def">
          <span>{{showAddress}}</span>
        </div>
        <img src="../assets/head/arrow_down_white@2x.png" alt="" @click.stop="downFun" class="arrow_down">
        <div class="out_login_box" v-if="downBoolean">
          <img src="../assets/head/avater_def@2x.png" alt="" class="out_login_avater">
          <div class="out_login_address">
            <span>{{showAddress}}</span>
            <img src="../assets/head/icon_16px_copy@2x.png" alt="" @click="copyActionFun">
          </div>
          <div class="out_login_disconnent" @click.stop="outLoginFun">
            <img src="../assets/head/icon_disconnect@2x.png" alt="">
            <span>Disconnect Wallet</span>
          </div>
        </div>
      </div>
      <img src="../assets/head/icon_cart@2x.png" alt="" class="cart" @click="toCartPageFun" />
    </div>
    <Login v-if="walletTypeBoolean" @loginEnd="loginEndFun" @closemask="closeMaskFun"></Login>
  </div>
</template>
      
<script>
import Login from './login.vue'
import { copyAction } from '../util/func/index'
export default {
  components: {
    Login
  },
  props: ["showData", "loginShow", "goTcartpage"],
  watch: {
    showData: {
      immediate: true,
      handler(val) {
        this.showAddress = this.showAddressFun(val);
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
      typePage: false
    }
  },
  methods: {
    copyActionFun() {
      copyAction(localStorage.bitcoin_address)
    },
    outLoginFun() {
      localStorage.clear();
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
      let address = localStorage.bitcoin_address;
      if (address) {
        this.$router.push({
          name: "cart"
        })
      } else {
        this.typePage = true
        this.walletTypeBoolean = true
      }
    },
    collectFun() {
      this.walletTypeBoolean = true
    },
    closeMaskFun() {
      this.walletTypeBoolean = false
    },
    loginEndFun(value) {
      this.showAddress = value;
      this.walletTypeBoolean = false;
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
    }
  },
  mounted() {
    if (localStorage.bitcoin_address) {
      this.showAddress = this.showAddressFun(localStorage.bitcoin_address)
    }
  }
}
</script>
      