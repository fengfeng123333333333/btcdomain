<style scoped>
.wallet_app {
  width: 100%;
}
.wallet_box {
  width: 100%;
  padding: 0 0.2rem;
}
.wallet_address {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 0.6rem;
}
.wallet_address img {
  width: 0.32rem;
  height: 0.32rem;
  cursor: pointer;
}
.wallet_balance {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.32rem;
}
.wallet_balance_right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.32rem;
}
.wallet_balance_right_item {
  width: 3.44rem;
  height: 0.8rem;
  border-radius: 0.08rem;
  border: 0.02rem solid rgba(69, 64, 214, 0.1);
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  text-align: center;
  line-height: 0.8rem;
  cursor: pointer;
}
.wallet_content {
  width: 100%;
  margin-top: 0.8rem;
}
.wallet_table_head {
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 0.02rem solid #2e2f3e;
}
.wallet_table_com {
  width: 2.3rem;
}
.wallet_table_head_com {
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.wallet_table {
  width: 100%;
  height: 6rem;
  overflow: hidden;
  overflow-y: auto;
}
.wallet_table::-webkit-scrollbar {
  display: none;
}
.wallet_table_item {
  width: 100%;
  height: 1.08rem;
  border-bottom: 0.02rem solid rgba(167, 169, 190, 0.3);
  display: flex;
  align-items: center;
}
.wallet_table_item_com {
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.pageBox {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.copyclass {
  cursor: pointer;
  text-decoration: underline;
}
.send_btc {
  width: 7.1rem;
  margin: 0 auto;
  padding-bottom: 0.4rem;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #2e2f3e;
  margin-top: 1rem;
}
.send_inscript_box {
  width: 100%;
  padding: 0 0.4rem;
  margin-top: 0.2rem;
}
.send_btc_title {
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.send_btc_title_balance {
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.set_input {
  width: 100%;
  height: 0.88rem;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #d5d6e0;
  outline: none;
  padding: 0 0.2rem;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 0rem;
}
.set_input:focus {
  border: 0.02rem solid #4540d6;
}
.maskheadcom {
  font-size: 0.32rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  height: 1.08rem;
  padding: 0 0.4rem;
}
.maskheadcomImg {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.send_inscript_dec {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.cart_right_gas {
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 0.2rem;
}
.cart_right_gas img {
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.06rem;
}
.gas_tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.2rem;
  flex-wrap: wrap;
}
.gas_tab_item {
  width: 3.1rem;
  height: 1.2rem;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #d5d6e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
  font-size: 0.28rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2e2f3e;
  cursor: pointer;
  margin-bottom: 0.1rem;
}
.gas_tab_item_sel {
  border: 0.02rem solid #4540d6;
}
.gas_tab_item_value {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7a9be;
}
.gas_input {
  width: 100%;
  position: relative;
  margin-top: 0.2rem;
}
.input_number_year_position {
  position: absolute;
  right: 0.88rem;
  top: 0.05rem;
  height: 0.28rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7a9be;
}
.inscript_button {
  margin-top: 0.4rem;
  width: 100%;
  height: 0.88rem;
  background: #4540d6;
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(82, 82, 102, 0.08);
  border-radius: 0.08rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
.receive_btc {
  width: 7.1rem;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #2e2f3e;
  margin-top: 2rem;
  padding-bottom: 0.4rem;
}
.codeImg {
  margin: 0 auto;
  width: 3.36rem;
  height: 3.36rem;
  display: flex;
  justify-content: center;
  margin-top: 0.8rem;
}
.copyBox {
  margin: 0 auto;
  width: 6.3rem;
  height: 1.6rem;
  background: #f6f6fc;
  border: 0.02rem solid #a7a9be;
  border-radius: 0.04rem;
  padding: 0 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;
}
.copyBoxContent {
  width: 4.6rem;
  height: 1.2rem;
  word-break: break-all;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #090c1d;
}
.copyBox img {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.qrcode {
  width: 100% !important;
  height: 100% !important;
}
.jiexiError {
  color: red;
}
</style>
<template>
  <div class="wallet_app">
    <div class="wallet_box">
      <div class="wallet_address">
        <span>{{walletShow}}</span>
        <img src="../assets/person/icon_16px_copy@2x.png" alt="" @click="copyActionFun(1)">
      </div>
      <div class="wallet_balance">{{balance}} BTC</div>
      <div class="wallet_balance_right">
        <div class="wallet_balance_right_item" :class="{set_option_com_cuton:loginType==='custom',unisatGray:unisatPriver}" @click="openMaskFun(1)">Send</div>
        <div class="wallet_balance_right_item" style="margin-left:10px" @click="openMaskFun(2)">Receive</div>
      </div>
      <div class="wallet_content">
        <div class="wallet_table_head">
          <div class="wallet_table_com wallet_table_head_com" style="width:1.8rem">Date</div>
          <div class="wallet_table_com wallet_table_head_com" style="width:2.5rem">Address</div>
          <div class="wallet_table_com wallet_table_head_com" style="text-align: right;">Amount</div>
        </div>
        <div class="wallet_table">
          <div class="wallet_table_item" v-for="(item,index) in historyList" :key="index">
            <div class="wallet_table_com wallet_table_item_com" style="width:1.8rem">{{item.date}}</div>
            <div class="wallet_table_com wallet_table_item_com copyclass" style="width:2.4rem" @click="copyActionFun(2,item)">{{item.addressShow}}</div>
            <div class="wallet_table_com wallet_table_item_com" style="text-align: right;">{{item.amount}} {{item.symbol}}</div>
          </div>
        </div>
      </div>
    </div>
    <Spin size="large" fix :show="spanBoolean"></Spin>
    <div class="mask" v-show="receive_btc_boolean">
      <div class="receive_btc">
        <div class="displayCom  maskheadcom">
          <span>Receive BTC/Inscription</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(2)">
        </div>
        <div class="codeImg">
          <canvas id="canvas"></canvas>
        </div>
        <div class="copyBox">
          <span class="copyBoxContent">{{wallet}}</span>
          <img src="../assets/cart/16px_icon_copy@2x.png" alt="" @click="copyActionFun(4)">
        </div>
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
          <input v-model="sendBtcaddress" @input="jiexiFun" type="text" class="set_input" placeholder="Bitcoin address or .btc domain name">
          <div :class="{jiexiError:!jiexiType}">{{showAddressFun(jiexiAddress)}}</div>
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
            <span class="input_number_year_position">sats/vB</span>
            <van-stepper integer v-if="gasSelectData.name!='Custom'" :min="0" v-model="gasSelectData.value" disabled input-width="5rem" button-size="0.48rem" />
            <van-stepper integer v-else @change="changeGasInputFun" :min="0" v-model="gasSelectData.customValue" input-width="5rem" button-size="0.48rem" />
            <div v-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.economyFee" style="color:red">Minimun Fee：{{gasSelectData.economyFee}}sats/vB</div>
            <div v-else-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.avg">This fee is below the average, which may lead to a long wait time for inscription.</div>
          </div>
          <div class="inscript_button" @click="confirmFun" v-if="!unisatPriver">
            <div class="mobile_button_loading" v-if="loadingBoolean" style="margin-right:5px;" color="#1989fa">
              <van-loading type="spinner" color="#1989fa" class='vant_loading' />
            </div>
            <span>Confirm</span>
          </div>
          <div class="inscript_button unisatGray" v-else>Confirm</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { Tooltip, Page, Spin, InputNumber, Message, Icon } from 'view-ui-plus'
import apis from '../util/apis/apis'
import { copyAction } from '../util/func/index'
import VueQrcode from 'qrcode';

import { validate } from "bitcoin-address-validation";
import BigNumber from "bignumber.js";
import { generateBitcoinAddr, formatUTXOs, formatInscriptions, sendBTCTransFun } from '../util/func/index'
export default {
  components: {
    Tooltip, Page, Spin, InputNumber, Icon
  },
  data() {
    return {
      walletShow: null,
      loadingBoolean: false,
      sendBtcaddress: null,
      jiexiType: false,
      jiexiAddress: null,
      loginType: null,
      unisatPriver: false,
      spanBoolean: false,
      historyList: [],
      balance: null,
      wallet: null,
      receive_btc_boolean: false,
      send_btc_boolean: false,
      gasSelectData: {},
      personBalanceData: {},
      sendAmount: null,
      gasList: [],
    }
  },
  methods: {
    domainChangeFun(type) {
      let param = {};
      param.domain = this.sendBtcaddress
      this.$axios({
        method: "post",
        url: apis.domainChangeApi,
        data: param,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            if (type === 1) {
              this.jiexiAddress = res.data.data.owner_address;
              this.jiexiType = true
              return
            }
            this.sendRealAddress = res.data.data.owner_address;
            if (!validate(this.sendRealAddress)) {
              Message.warning("to address is not valid");
              return;
            }
            if (localStorage.walletType === 'uniSat') {
              this.unisatAction()
            } else {
              this.submitBtcTxAction()
            }
          } else {
            this.jiexiAddress = "the address is  error"
            this.jiexiType = false;
            this.sendRealAddress = null;
          }
        }
      }).catch(err => {
      });
    },
    confirmFun() {
      if (this.loadingBoolean) {
        return
      }
      if (!this.sendBtcaddress) {
        Message.error("Receive address must not be empty")
        return
      }
      if (this.sendBtcaddress.endsWith(".btc")) {
        this.domainChangeFun();
        return
      } else {
        if (!validate(this.sendBtcaddress)) {
          Message.error("Receive bitcoin address is not valid")
          return
        }
      }
      this.sendRealAddress = this.sendBtcaddress;
      if (localStorage.walletType === 'uniSat') {
        this.unisatAction()
      } else {
        this.submitBtcTxAction()
      }
    },
    openMaskFun(index) {
      if (index === 1) {
        if (this.loginType === 'custom') {
          return
        }
        if (this.unisatPriver) {
          return
        }
        this.goToCartFun()
      } else {
        var canvas = document.getElementById("canvas")
        console.log(canvas)
        VueQrcode.toCanvas(canvas, this.wallet)
        this.receive_btc_boolean = true;
      }
    },
    goToCartFun() {
      this.$axios({
        method: "get",
        url: apis.getRateFeeApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            let data = res.data.data;
            this.gasList = this.recommendedFeeFun(data.fastestFee, data.halfHourFee, data.hourFee, this.gasSelectData.name)
            if (!this.gasSelectData.name) {
              this.gasSelectData.name = this.gasList[0].name;
              this.gasSelectData.fast = data.fastestFee;
              this.gasSelectData.avg = data.halfHourFee
              this.gasSelectData.slow = data.hourFee
              this.gasSelectData.economyFee = data.economyFee
              this.gasSelectData.value = this.gasList[0].value
            }
            this.send_btc_boolean = true;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    recommendedFeeFun(fastestFee, halfHourFee, hourFee, type) {
      let arr = [];
      let temp1 = {};
      let temp2 = {};
      let temp3 = {};
      let temp4 = {};
      temp1.name = "Fast";
      temp1.value = fastestFee;
      temp1.fast = fastestFee;
      temp1.isSelect = false;

      temp2.name = "Avg";
      temp2.value = halfHourFee;
      temp2.avg = halfHourFee;
      temp2.isSelect = false;

      temp3.name = "Slow";
      temp3.value = hourFee;
      temp3.slow = hourFee;
      temp3.isSelect = false;

      temp4.name = "Custom";
      temp4.value = null;
      temp4.isSelect = false;
      arr.push(temp1);
      arr.push(temp2);
      arr.push(temp3);
      arr.push(temp4);
      if (type) {
        arr.forEach(element => {
          if (element.name === type) {
            element.isSelect = true
          } else {
            element.isSelect = false
          }
        })
      } else {
        arr[0].isSelect = true
      }
      return arr
    },
    changeGasInputFun(value) {
      if (!value) {
        return
      }
      if (this.gasSelectData.slow > value) {
        return
      }
      if (this.gasSelectData.avg > value) {
        return
      }
      this.gasSelectData.customValue = value
    },
    changeGasFun(item) {
      this.gasList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      if (item.name === 'Custom') {
        this.gasSelectData.customValue = this.gasSelectData.value
        this.gasSelectData.name = "Custom"
        return
      }
      this.gasSelectData.value = item.value;
      this.gasSelectData.name = item.name;
    },
    jiexiFun(e) {
      if (this.sendBtcaddress.endsWith(".btc")) {
        this.domainChangeFun(1)
      }
      if (!e.target.value) {
        this.jiexiAddress = null;
      }
    },
    choseMaskFun(index) {
      if (index === 1) {
        this.loadingBoolean = false
        this.send_btc_boolean = false;
      } else if (index === 2) {
        this.receive_btc_boolean = false;
      } else {
        this.save_pic_boolean = false;
      }
    },
    async unisatAction() {
      this.loadingBoolean = true;
      const num = new BigNumber(this.sendAmount);
      const weivalue = num.multipliedBy(100000000).toNumber();
      let feeRate = "";
      if (this.gasSelectData.name === "Custom") {
        feeRate = this.gasSelectData.customValue
      } else {
        feeRate = this.gasSelectData.value
      }
      const txid = await window.unisat.sendBitcoin(
        this.sendRealAddress,
        weivalue,
        {
          feeRate: feeRate,
        }
      );
      Message.info("submit transaction: " + txid);
    },
    async submitBtcTxAction() {
      let addr = localStorage.getItem("bitcoin_address");
      if (!addr) {
        Message.warning("from address must not be empty");
        return;
      }
      // to address
      if (!this.sendRealAddress) {
        Message.warning("to address must not be empty");
        return;
      }
      // amount
      if (!this.sendAmount) {
        Message.warning("amount must not be empty");
        return;
      }
      // state.sendInsOrBtc.amount = new BigNumber(state.info.total).toNumber();
      let amount = new BigNumber(this.sendAmount).toNumber();
      let one = new BigNumber(amount);
      let targetSat = one.multipliedBy(100000000);
      if (targetSat.lt(new BigNumber(1000))) {
        Message.warning("min sat you must transfer is" + 1000);
        return;
      }
      let avail = new BigNumber(this.personBalanceData.amount);
      if (one.gte(avail)) {
        Message.warning(
          "max value you must transfer is " + this.personBalanceData.amount + "btc"
        );
        return;
      }
      let feeRate = "";
      if (this.gasSelectData.name === "Custom") {
        feeRate = this.gasSelectData.customValue
      } else {
        feeRate = this.gasSelectData.value
      }
      const walletType = localStorage.walletType;
      this.loadingBoolean = true;
      const privKey = await generateBitcoinAddr(walletType);
      if (!privKey) {
        this.loadingBoolean = false;
        return;
      }

      // assembly
      this.queryExtIns(addr, privKey, this.sendRealAddress, targetSat, feeRate)
    },
    async queryExtIns(address, privKey, tempAddr, targetSat, feeRate) {
      this.$axios({
        method: "get",
        url: apis.walletInfoApi + "?address=" + address,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async res => {
        if (res.status == "200") {
          let retOut = res.data;
          let waltOut = retOut.data;
          let gutxos = formatUTXOs(waltOut.txrefs);
          let insOutPut = formatInscriptions(waltOut.inscriptions_by_outputs);
          let sBtcResq = {
            privateKey: privKey,
            utxos: gutxos,
            inscriptions: insOutPut,
            receiver: this.sendRealAddress,
            amount: targetSat.toNumber(),
            feeRate: feeRate,
          };
          const { txID, txHex } = await sendBTCTransFun(sBtcResq);
          // submit
          this.pushTx(txHex);
        }
      }).catch(err => {
        this.loadingBoolean = false;
      });
    },
    pushTx(rawtx) {
      let param = {};
      param.rawtx = rawtx
      this.$axios({
        method: "post",
        data: param,
        url: apis.pushTxApi,
        headers: {
          "Content-Type": "application/json",
          "X-Client": "UniSat Wallet",
        },
      }).then(res => {
        if (res.status == "200") {
          this.loadingBoolean = false;
          if (res.data.message === 'OK') {
            this.send_btc_boolean = false
            Message.success("tx: " + res.data.result + " has been publiced");
          } else {
            Message.info(res.data.message);
          }
        }
      }).catch(err => {
      });
    },
    copyActionFun(index, item) {
      if (index === 1) {
        copyAction(this.wallet)
      } else if (index === 2) {
        copyAction(item.address)
      } else if (index === 3) {
        copyAction(item.txid)
      } else if (index === 4) {
        copyAction(this.wallet)
      }
    },
    changePageFun() { },
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
    recentHistoryFun() {
      let wallet = localStorage.bitcoin_address
      this.spanBoolean = true
      this.$axios({
        method: "get",
        url: apis.recentHistoryApi + "/" + wallet,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            let data = res.data.data.result;
            data.forEach(element => {
              element.addressShow = this.showAddressFun(element.address)
              element.tixdShow = this.showAddressFun(element.txid)
            });
            this.historyList = data;
            this.spanBoolean = false
          } else {
            this.spanBoolean = false
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.spanBoolean = false
      });
    },
    sendBtcFun() {
      this.$emit("sendBtc")
    },
    receiveBtcFun() {
      this.$emit("receiveBtc")
    }
  },
  mounted() {
    if (localStorage.walletType != 'metaMask') {
      this.unisatPriver = true
    }
    this.personBalanceData.amount = localStorage.balance;
    this.loginType = localStorage.walletType
    this.balance = localStorage.balance;
    this.wallet = localStorage.bitcoin_address;
    this.walletShow = this.showAddressFun(localStorage.bitcoin_address)
    this.recentHistoryFun();
  }
}
</script>
  
  