<style scoped>
.mobile_person_app {
  width: 100%;
  position: relative;
}
.mobile_person_head {
  width: 100%;
  height: 3.68rem;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 78%, #ffffff 100%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.mobile_person_body {
  width: 100%;
  padding-top: 1.6rem;
  padding-bottom: 0.8rem;
}
.person_body_left {
  width: 7.1rem;
  height: 3.9rem;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.16rem;
  backdrop-filter: blur(0.1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.4rem;
}
.set_avater {
  width: 2.4rem;
  height: 2.4rem;
  position: relative;
  margin-bottom: 0.2rem;
}
.avaterImg {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.ogImg {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0.64rem;
  height: 0.64rem;
}
.set_domain {
  font-size: 0.36rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.set_options {
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.set_options_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2.24rem;
  height: 1.28rem;
  font-size: 0.26rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.set_options_item img {
  width: 0.48rem;
  height: 0.48rem;
  margin-bottom: 0.08rem;
}
.set_options_item_select {
  color: #4540d6;
}
.person_body_right {
  margin-top: 1.8rem;
}
</style>
<template>
  <div class="mobile_person_app">
    <MobileHead></MobileHead>
    <div class="mobile_person_head"></div>
    <div class="mobile_person_body" :style="{minHeight:clientHeight+'px'}">
      <div class="person_body_left">
        <div class="set_avater">
          <img :src="personData.content_url" alt="" class="avaterImg" v-if="personData.content_url&&personData.content_url.length>3">
          <img src="https://app.btcdomains.io/images/assets/avater_def@2x.png" alt="" class="avaterImg" v-else>
          <img src="../assets/person/og@2x.png" v-if="ogShow" alt="" class="ogImg">
        </div>
        <div class="set_domain" v-if="personData">{{personData.domain}}</div>
        <div class="set_options">
          <div class="set_options_item" v-for="(item,index) in optionsList" :key="index" @click="changeOptionFun(item)">
            <img :src="item.selUrl" alt="" v-if="item.isSelect&&loginType!='custom'">
            <img :src="item.norUrl" alt="" v-else-if="!item.isSelect&&loginType!='custom'">
            <img :src="item.cusUrl" alt="" v-else-if="loginType==='custom'">
            <span :class="{set_options_item_select:item.isSelect,set_options_item_cus:loginType==='custom'&&item.name!='Inscription'}">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="person_body_right">
        <MobileInscription v-if="type==='Inscription'"></MobileInscription>
        <MobileWallet v-if="type==='Wallet'"></MobileWallet>
        <MobileSetting v-if="type==='Setting'"></MobileSetting>
        <!-- <MobilePersonContent :type="type" @sendBtc="sendBtcFun" @receiveBtc="receiveBtcFun" @imgNum="imgNumFun" @og="ogFun"></MobilePersonContent> -->
      </div>
    </div>
    <MobileFoot></MobileFoot>
  </div>
</template>
  
<script>
import MobileHead from '@/mobileComponents/mobileHead.vue'
import MobileFoot from '@/mobileComponents/mobileFoot.vue'
import MobileInscription from '@/mobileComponents/mobile_inscription.vue'
import MobileWallet from '@/mobileComponents/mobile_wallet.vue'
import MobileSetting from '@/mobileComponents/mobile_setting.vue'
import apis from '../util/apis/apis'
import BigNumber from "bignumber.js";
export default {
  components: {
    MobileHead, MobileFoot, MobileInscription, MobileWallet, MobileSetting
  },
  ogBoolean: {
    immediate: true,
    handler(val) {
      this.ogShow = val
    }
  },
  data() {
    return {
      loginType: null,
      clientHeight: null,
      personData: {
        content_url: "",
        domain: ""
      },
      ogShow: false,
      monywallet: null,
      type: "Inscription",
      optionsList: [
        {
          selUrl: require("../assets/person/icon_24px_inscription_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_inscription_nor@2x.png"),
          cusUrl: require("../assets/person/icon_24px_inscription_sel@2x.png"),
          name: "Inscription",
          isSelect: true
        },
        {
          selUrl: require("../assets/person/icon_24px_wallet_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_wallet_nor@2x.png"),
          cusUrl: require("../assets/person/icon_24px_wallet_dis@2x.png"),
          name: "Wallet",
          isSelect: false
        },
        {
          selUrl: require("../assets/person/icon_24px_setting_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_setting_nor@2x.png"),
          cusUrl: require("../assets/person/icon_24px_setting_dis@2x.png"),
          name: "Setting",
          isSelect: false
        },
      ],
    }
  },
  methods: {
    imgNumFun(value) {
      this.saveImgObj = value
    },
    ogFun(value) {
      this.ogBoolean = value
    },
    changeOptionFun(item) {
      if (this.loginType === 'custom') {
        return
      }
      if (item.isSelect) {
        return
      }
      this.optionsList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      localStorage.optionName = item.name;
      this.type = item.name;
    },
    addressPersonFun() {
      let param = {};
      param.address = this.monywallet
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
              this.personData = res.data.data[0];
            }
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    balanceFun() {
      this.$axios({
        method: "get",
        url: apis.oldBalanceApi + "?address=" + this.monywallet,
        headers: {
          "Content-Type": "application/json",
          'X-Client': 'UniSat Wallet'
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.message === "OK") {
            let balance = res.data.result
            this.inscriptionsFun(balance.confirm_amount)
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    inscriptionsFun(confirm_amount) {
      this.$axios({
        method: "get",
        url: apis.inscriptionsApi + "?address=" + this.monywallet,
        headers: {
          "Content-Type": "application/json",
          'X-Client': 'UniSat Wallet'
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.message === "OK") {
            let inscriptions = res.data.result;
            let totalSatoshi = new BigNumber(0);
            inscriptions.forEach(element => {
              if (element.detail) {
                let tmp = new BigNumber(element.detail.output_value)
                totalSatoshi = totalSatoshi.plus(tmp)
              }
            });
            let amout_tmp = new BigNumber(confirm_amount);
            let amount_sat = amout_tmp.multipliedBy(100000000);
            let available_sat = amount_sat.minus(totalSatoshi);
            localStorage.balance = available_sat.div(100000000).toPrecision(8).toString();;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
  },
  mounted() {
    this.clientHeight = document.documentElement.clientHeight - 70;
    this.monywallet = localStorage.bitcoin_address;
    this.addressPersonFun();
    this.balanceFun()
    let name = localStorage.optionName;
    if (name) {
      this.optionsList.forEach(element => {
        if (element.name === name) {
          element.isSelect = true
        } else {
          element.isSelect = false;
        }
      })
      this.type = name;
    }
  }
}
</script>
  
  