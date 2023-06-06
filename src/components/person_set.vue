<style scoped>
.person_set_app {
  width: 100%;
}
.set_head {
  width: 100%;
  height: 324px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  border: 1px solid #f2f2f5;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.set_avater {
  width: 120px;
  height: 120px;
  position: relative;
}
.avaterImg {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.ogImg {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
}
.set_domain {
  margin-top: 10px;
  font-size: 18px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.set_address {
  margin-top: 27px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.set_address img {
  width: 16px;
  height: 16px;
  margin-left: 6px;
}
.set_value {
  margin-top: 14px;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.set_option {
  margin-top: 8px;
  display: flex;
  align-items: center;
}
.set_option_com {
  width: 120px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  border: 1px solid #4540d6;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  cursor: pointer;
}
.set_options {
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
}
.set_options_item {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  padding-left: 10px;
  cursor: pointer;
}
.set_options_item img {
  margin-left: 8px;
  width: 24px;
  height: 24px;
}
.set_options_item_select {
  color: #4540d6;
}
.send_btc {
  width: 840px;
  height: 481px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 1.4rem;
}
.send_inscript_box {
  width: 100%;
  padding: 0 20px;
}
.send_btc_title {
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.set_input {
  width: 100%;
  height: 44px;
  background: #ffffff;
  border-radius: 4px;
  border: 2px solid #d5d6e0;
  outline: none;
  padding: 10px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 2px;
}
.set_input:focus {
  border: 2px solid #4540d6;
}
.maskheadcom {
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  height: 54px;
  padding: 0 20px;
}
.maskheadcomImg {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.send_inscript_dec {
  margin-top: 10px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.cart_right_gas {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 10px;
}
.cart_right_gas img {
  width: 16px;
  height: 16px;
  margin-right: 3px;
}
.gas_tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gas_tab_item {
  width: 190px;
  height: 60px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #d5d6e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2e2f3e;
  cursor: pointer;
}
.gas_tab_item_sel {
  border: 2px solid #4540d6;
}
.gas_tab_item_value {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7a9be;
}
.gas_input {
  width: 100%;
  position: relative;
  margin-top: 8px;
}
.input_number_year {
  position: absolute;
  right: 30px;
  top: 7px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2e2f3e;
  z-index: 2;
}
.inscript_button {
  margin-top: 20px;
  width: 100%;
  height: 44px;
  background: #4540d6;
  box-shadow: 0px -4px 8px 0px rgba(82, 82, 102, 0.08);
  border-radius: 4px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
.receive_btc {
  width: 500px;
  height: 413px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 2rem;
}
.codeImg {
  width: 100%;
  height: 168px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.copyBox {
  margin: 0 auto;
  width: 460px;
  height: 60px;
  background: #f6f6fc;
  border: 1px solid #a7a9be;
  border-radius: 2px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.copyBoxContent {
  width: 370px;
  height: 40px;
  word-break: break-all;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #090c1d;
}
.copyBox img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.send_btc_title_balance {
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
</style>
  
<template>
  <div class="person_set_app">
    <div class="set_head">
      <div class="set_avater">
        <img :src="personData.domain_img" alt="" class="avaterImg">
        <img src="../assets/person/og@2x.png" alt="" class="ogImg">
      </div>
      <div class="set_domain">{{personData.domain}}</div>
      <div class="set_address">
        <span>{{showAddress}}</span>
        <img src="../assets/person/icon_16px_copy@2x.png" alt="">
      </div>
      <div class="set_value">{{personBalanceData.amount}} BTC</div>
      <div class="set_option">
        <div class="set_option_com" @click='openMaskFun(1)'>Send</div>
        <div class="set_option_com" style="margin-left:10px" @click='openMaskFun(2)'>Receive</div>
      </div>
    </div>
    <div class="set_options">
      <div class="set_options_item" v-for="(item,index) in optionsList" :key="index" @click="changeOptionFun(item)">
        <img :src="item.selUrl" alt="" v-if="item.isSelect">
        <img :src="item.norUrl" alt="" v-else>
        <span :class="{set_options_item_select:item.isSelect}">{{item.name}}</span>
      </div>
    </div>
    <div class="mask" v-if="send_btc_boolean">
      <div class="send_btc">
        <div class="displayCom  maskheadcom">
          <span>Send BTC</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(1)">
        </div>
        <div class="send_inscript_box">
          <div class="send_btc_title">To</div>
          <input v-model="btcaddress" type="text" class="set_input" placeholder="Bitcoin address or .btc domain name">
          <div class="send_btc_title">
            <span>Amount</span>
            <span class="send_btc_title_balance">Balance：{{personBalanceData.amount}} BTC</span>
          </div>
          <input v-model="sendAmount" type="text" class="set_input" placeholder="Amount">
          <div class="send_inscript_dec">Select the network fee you want to pay:</div>
          <div class="cart_right_gas">
            <img src="../assets/cart/16px_icon_gasrate@2x.png" alt="">
            <span>Gas rate</span>
          </div>
          <div class="gas_tab">
            <div class="gas_tab_item" @click="changeGasFun(item)" :class="{gas_tab_item_sel:item.isSelect}" v-for="(item,index) in gasList" :key="index">
              <span>{{item.name}}</span>
              <span class="gas_tab_item_value">{{item.value}} sats/vB</span>
            </div>
          </div>
          <div class="gas_input">
            <span class="input_number_year">sats/vB</span>
            <InputNumber :min="1" v-model="gasSelectData.value" class="InputNumberClass" style="width: 100%;" />
          </div>
          <div class="inscript_button" @click="confirmFun">Confirm</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="receive_btc_boolean">
      <div class="receive_btc">
        <div class="displayCom  maskheadcom">
          <span>Receive BTC/Inscription</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(2)">
        </div>
        <div class="codeImg">
          <vue-qrcode :value="monywallet" :options="{ width: 168 }"></vue-qrcode>
        </div>
        <div class="copyBox">
          <span class="copyBoxContent">{{monywallet}}</span>
          <img src="../assets/cart/16px_icon_copy@2x.png" alt="">
        </div>
      </div>
    </div>
    <Spin size="large" fix :show="spanBoolean"></Spin>
  </div>
</template>
  
<script>
import { InputNumber, Message, Spin } from 'view-ui-plus'
import VueQrcode from '@chenfengyuan/vue-qrcode';
import apis from '../util/apis/apis'
import BigNumber from "bignumber.js";
export default {
  components: {
    InputNumber, VueQrcode, Spin
  },
  data() {
    return {
      optionsList: [
        {
          selUrl: require("../assets/person/icon_24px_inscription_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_inscription_nor@2x.png"),
          name: "Inscription",
          isSelect: true
        },
        {
          selUrl: require("../assets/person/icon_24px_wallet_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_wallet_nor@2x.png"),
          name: "Wallet",
          isSelect: false
        },
        {
          selUrl: require("../assets/person/icon_24px_setting_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_setting_nor@2x.png"),
          name: "Setting",
          isSelect: false
        },
      ],
      gasSelectData: {},
      send_btc_boolean: false,
      receive_btc_boolean: false,
      btcaddress: null,
      amount: null,
      gasList: [],
      monywallet: null,
      personData: {},
      personBalanceData: {},
      showAddress: null,
      spanBoolean: false,
      sendAmount: null
    }
  },
  methods: {
    choseMaskFun(index) {
      if (index === 1) {
        this.send_btc_boolean = false;
      } else {
        this.receive_btc_boolean = false;
      }
    },
    changeOptionFun(item) {
      if (item.isSelect) {
        return
      }
      this.optionsList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      localStorage.optionName = item.name;
      this.$emit("changeOption", item.name)
    },
    changeGasFun(item) {
      this.gasList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.gasSelectData = item;
    },
    searchFun() { },
    confirmFun() {
      this.send_btc_boolean = false
    },
    openMaskFun(index) {
      if (index === 1) {
        this.send_btc_boolean = true;
        this.goToCartFun()
      } else {
        this.receive_btc_boolean = true;
      }
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
    addressPersonFun() {
      let param = {};
      param.inscribe_type = this.type;
      param.address = this.searchText
      param.sign = ""
      this.$axios({
        method: "get",
        data: param,
        url: apis.addressPersonApi + "/" + this.monywallet,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            this.personData = res.data.data.result[0];
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    inscriptionsFun() {
      this.spanBoolean = true
      this.$axios({
        method: "get",
        url: apis.inscriptionsApi + "?address=" + this.monywallet,
        headers: {
          "Content-Type": "application/json",
          "X-Client": "UniSat Wallet",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.message === "OK") {
            let totalSatoshi = new BigNumber(0);
            res.data.result.forEach((element) => {
              if (element.detail) {
                let tmp = new BigNumber(element.detail.output_value);
                totalSatoshi = totalSatoshi.plus(tmp);
              }
            });
            console.log("totalSatoshitotalSatoshitotalSatoshi", totalSatoshi)
            this.balanceFun(totalSatoshi)
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    balanceFun(totalSatoshi) {
      this.$axios({
        method: "get",
        url: apis.balanceApi + "?address=" + this.monywallet,
        headers: {
          "Content-Type": "application/json",
          "X-Client": "UniSat Wallet",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.message === "OK") {
            let balance = res.data.result
            let amout_tmp = new BigNumber(balance.confirm_amount);
            let amount_sat = amout_tmp.multipliedBy(100000000);
            let available_sat = amount_sat.minus(totalSatoshi);
            balance.amount = available_sat.div(100000000).toPrecision(8).toString();
            this.personBalanceData = balance
            this.usdFun()
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    usdFun() {
      this.$axios({
        method: "get",
        url: apis.usdApi,
        headers: {
          'X-CoinAPI-Key': apis.coinapiKey
        },
      }).then(res => {
        if (res.status == "200") {
          let ratio = res.data;
          let ratioNum = new BigNumber(ratio.rate);
          let btcNum = new BigNumber(this.personBalanceData.amount);
          let usdtNum = ratioNum.multipliedBy(btcNum);
          this.personBalanceData.usd_value = usdtNum.toPrecision(8).toString();
          this.sendAmount = this.personBalanceData.amount
          this.spanBoolean = false
        }
      }).catch(err => {
      });
    },
    goToCartFun() {
      let param = {};
      let arr = []
      let temp = {};
      temp.year = 1;
      temp.domain = this.personData.domain;
      arr.push(temp)
      param.domains = arr;
      param.out_wallet = this.monywallet,
        param.rate_fee = 0,
        param.promo_code = ""
      this.$axios({
        method: "post",
        data: param,
        url: apis.goToCartApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            this.gasList = this.recommendedFeeFun(res.data.data.recommended_fee.fastestFee, res.data.data.recommended_fee.halfHourFee, res.data.data.recommended_fee.economyFee)
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    recommendedFeeFun(fastestFee, halfHourFee, economyFee) {
      let arr = [];
      let temp1 = {};
      let temp2 = {};
      let temp3 = {};
      let temp4 = {};
      temp1.name = "Fast";
      temp1.value = fastestFee;
      temp1.isSelect = true;

      temp2.name = "Avg";
      temp2.value = halfHourFee;
      temp2.isSelect = false;

      temp3.name = "Slow";
      temp3.value = economyFee;
      temp3.isSelect = false;

      temp4.name = "Custom";
      temp4.value = null;
      temp4.isSelect = false;
      arr.push(temp1);
      arr.push(temp2);
      arr.push(temp3);
      arr.push(temp4);
      return arr
    },
  },
  mounted() {
    this.monywallet = localStorage.bitcoinAddr;
    this.showAddress = this.showAddressFun(this.monywallet)
    this.addressPersonFun();
    this.inscriptionsFun()
    let name = localStorage.optionName;
    if (name) {
      this.optionsList.forEach(element => {
        if (element.name === name) {
          element.isSelect = true
        } else {
          element.isSelect = false;
        }
      })
    }
  }
}
</script>
  