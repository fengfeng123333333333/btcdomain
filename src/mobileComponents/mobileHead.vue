<style scoped>
.mobile_head_app {
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.mobile_head_app_left {
  display: flex;
  align-items: center;
}
.mobile_head_app_right {
  display: flex;
  align-items: center;
}
.mobile_menu {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.mobile_logo {
  width: 3.16rem;
  height: 0.6rem;
  margin-left: 0.2rem;
}
.mobile_connet {
  width: 1.32rem;
  height: 0.64rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.4rem;
  text-align: center;
  line-height: 0.64rem;
  cursor: pointer;
  font-size: 0.26rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
}
.mobile_cart {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.2rem;
}
.mobile_menu_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 7.56rem;
  background: #ffffff;
  box-shadow: 0 0.2rem 0.48rem 0 rgba(16, 38, 92, 0.1);
  border-radius: 0.16rem;
  border: 0.02rem solid #2e2f3e;
}
.mobile_menu_box_head {
  width: 100%;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.4rem;
  position: relative;
}
.mobile_menu_box_close {
  width: 0.48rem;
  height: 0.48rem;
  position: absolute;
  left: 0.2rem;
  top: 50%;
  margin-top: -0.24rem;
  cursor: pointer;
}
.mobile_logo_black {
  width: 3.16rem;
  height: 0.6rem;
}
.mobile_menu_body {
  margin-top: 0.1rem;
  padding: 0 0.4rem;
  display: flex;
  flex-direction: column;
}
.mobile_menu_item {
  width: 100%;
  border-top: 0.02rem solid rgba(167, 169, 190, 0.4);
  height: 1.2rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #1e2844;
  cursor: pointer;
  text-align: center;
  line-height: 1.2rem;
}
.mobile_menu_connect {
  margin: 0 auto;
  width: 2.64rem;
  height: 0.8rem;
  background: #2e2f3e;
  border-radius: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  margin-top: 0.8rem;
  cursor: pointer;
}
.mobile_login_box {
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mobile_login_avtar {
  width: 3.3rem;
  height: 0.8rem;
  background: rgba(46, 47, 62, 0.1);
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  padding-left: 0.08rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2e2f3e;
}
.mobile_login_avtar img {
  width: 0.64rem;
  height: 0.64rem;
  margin-right: 0.12rem;
  border-radius: 50%;
}
.out_login_disconnent {
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #868899;
  margin-top: 0.2rem;
}
.out_login_disconnent img {
  margin-right: 0.16rem;
  width: 0.48rem;
  height: 0.48rem;
}
.out_login_avater {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
</style>
<template>
  <div class="mobile_head_app">
    <div class="mobile_head_app_left">
      <img src="../assets/mobileHead/icon_menu@2x.png" alt="" class="mobile_menu" @click="openFun">
      <img src="../assets/mobileHead/logo_nav_white@2x.png" alt="" class="mobile_logo" @click='toHomeFun'>
    </div>
    <div class="mobile_head_app_right">
      <div class="mobile_connet" v-if="!showAddress&&connetShow" @click='collectFun'>Wallet</div>
      <img :src="avaterImg" alt="" class="out_login_avater" v-if="avaterImg&&showAddress" @click='toPersonFun'>
      <img src="../assets/head/avater_def@2x.png" alt="" class="out_login_avater" v-else-if="!avaterImg&&showAddress" @click='toPersonFun'>
      <img src="../assets/mobileHead/icon_cart@2x.png" alt="" class="mobile_cart" @click='toCartPageFun'>
    </div>
    <div class="mobile_menu_box" v-if="menuBoolean">
      <div class="mobile_menu_box_head">
        <img src="../assets/mobileHead/icon_close_nav@2x.png" alt="" class="mobile_menu_box_close" @click="closeFun">
        <img src="../assets/mobileHead/logo_nav_black@2x.png" alt="" class="mobile_logo_black" @click='toHomeFun'>
      </div>
      <div class="mobile_menu_body">
        <a class="mobile_menu_item" href="https://docs.btcdomains.io" target="_blank">Document</a>
        <a class="mobile_menu_item" href="https://linktr.ee/btcdomain_btc" target="_blank">Linktree</a>
        <div class="mobile_menu_item" style="border-bottom: 0.02rem solid rgba(167, 169, 190, 0.4);" @click='toCartPageFun'>Cart</div>
        <div class="mobile_menu_connect" @click='collectFun' v-if="!showAddress&&connetShow">Collect Wallet</div>
        <div class="mobile_login_box" v-else-if='showAddress&&connetShow'>
          <div class="mobile_login_avtar">
            <img :src="avaterImg" alt="" v-if="avaterImg">
            <img src="../assets/head/avater_def@2x.png" alt="" v-else>
            <span>{{showAddress}}</span>
          </div>
          <div class="out_login_disconnent" @click.stop="outLoginFun">
            <img src="../assets/head/icon_disconnect@2x.png" alt="">
            <span>Disconnect Wallet</span>
          </div>
        </div>
      </div>
    </div>
    <MobileLogin v-if="walletTypeBoolean" @loginEnd="loginEndFun" @avater="avaterFun" @closemask="closeMaskFun" :typeclick="typeclick">
    </MobileLogin>
  </div>
</template>
  
<script>
import MobileLogin from './mobileLogin.vue'
import { copyAction, traceFun } from '../util/func/index'
import apis from '../util/apis/apis'
export default {
  components: {
    MobileLogin
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
          this.typeclick = 2
        }
      }
    },
  },
  data() {
    return {
      typeclick: 1,
      connetShow: false,
      menuBoolean: false,
      walletTypeBoolean: false,
      showAddress: null,
      downBoolean: false,
      goTcartpageChild: this.goTcartpage,
      typePage: false,
      avaterImg: null,
    }
  },
  methods: {
    toPersonFun() {
      this.$router.push({
        name: "mobile_person"
      })
    },
    collectFun() {
      localStorage.headclick = 1;
      this.typeclick = 1;
      this.walletTypeBoolean = true
    },
    closeMaskFun() {
      this.$emit('loginShow', false)
      this.walletTypeBoolean = false
    },
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
        name: "mobile_home"
      })
    },
    openFun() {
      this.typeclick = 1;
      this.menuBoolean = true;
    },
    closeFun() {
      this.menuBoolean = false
    },
    toCartPageFun() {
      let herf = window.location.href;
      if (herf.indexOf('mobile_cart') != -1) {
        return
      }
      let address = localStorage.bitcoin_address;
      if (address) {
        let params = JSON.parse(localStorage.params);
        params.data_type = "进入购物车"
        traceFun(params)
        this.$router.push({
          name: "mobile_cart"
        })
      } else {
        this.typeclick = 2;
        this.typePage = true
        this.walletTypeBoolean = true
      }
    },
    loginEndFun(value) {
      if (value != 'custom') {
        this.showAddress = value;
      } else {
        this.showAddress = null;
      }
      this.$emit("cartChange")
      this.walletTypeBoolean = false;
      if (this.goTcartpageChild) {
        this.$router.push({
          name: "mobile_cart"
        })
      }
      if (this.typePage) {
        this.$router.push({
          name: "mobile_cart"
        })
      }
    },
    avaterFun(value) {
      if (value) {
        this.avaterImg = value;
      }
    },
    toHomeFun() {
      this.$router.push({
        name: "mobile_home"
      })
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
    let arr = [];
    let connetShow = false;
    if (window.foxwallet && window.foxwallet.bitcoin) {
      let temp = {
        name: "FoxWallet",
        url: require("../assets/head/connect_foxwallet@2x.png"),
        isSelect: false
      }
      arr.push(temp);
      connetShow = true
    } else {
      if (typeof window.ethereum != 'undefined') {
        let temp = {
          name: "Metamask",
          url: require("../assets/head/connect_metamask@2x.png"),
          isSelect: false
        }
        arr.push(temp)
        connetShow = true
      }
    }
    if (tp.isConnected()) {
      let temp = {
        name: "TokenPocket",
        url: require("../assets/head/connect_tokenpocket@2x.png"),
        isSelect: false
      }
      arr.push(temp)
      connetShow = true
    }
    this.connetShow = connetShow;
  }
}
</script>
  
  