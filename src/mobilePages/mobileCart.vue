<style scoped>
.mobile_cart_app {
  width: 100%;
}
.mobile_cart_app_kong {
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 78%, #ffffff 100%);
}
.cart_head {
  width: 100%;
  height: 2.8rem;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 100%);
  padding-top: 1.8rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  font-size: 0.44rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
}
.cart_step {
  width: 100%;
  display: flex;
  align-items: center;
  height: 1.56rem;
  background: rgba(255, 255, 255, 0.6);
  justify-content: center;
}
.cart_step_one {
  width: 3.58rem;
  height: 1.24rem;
  background: #ffffff;
  box-shadow: 0 0.2rem 0.48rem 0 rgba(17, 15, 77, 0.1);
  border: 0.02rem solid #d5d6e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  padding-left: 0.2rem;
}
.cart_step_one_num {
  width: 0.6rem;
  height: 0.6rem;
  background: #eaeaed;
  border-radius: 50%;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.32rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  margin-right: 0.2rem;
  flex-shrink: 0;
}
.cart_body {
  margin-top: 2.82rem;
  padding-bottom: 0.6rem;
}
.cart_receive_box {
  padding: 0 0.2rem;
}
.cart_receive {
  width: 100%;
  height: 1.68rem;
  background: #fcfcff;
  border-radius: 0.08rem;
  border: 0.02rem solid #d5d6e0;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.cart_receive_address {
  height: 100%;
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.26rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.address {
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_change {
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  cursor: pointer;
}
.cart_list {
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  max-height: 7rem;
  margin-top: 0.2rem;
  padding: 0 0.2rem;
}
.cart_list_item {
  padding: 0.32rem 0.2rem;
  width: 100%;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #d5d6e0;
  margin-bottom: 0.2rem;
}
.cart_list_item_name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.36rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_list_item_name img {
  width: 0.32rem;
  height: 0.32rem;
  cursor: pointer;
}
.cart_list_item_empti {
  display: flex;
  margin-top: 0.1rem;
}
.cart_list_item_status {
  height: 0.4rem;
  background: rgba(69, 64, 214, 0.1);
  border-radius: 0.2rem;
  padding: 0 0.12rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #4540d6;
}
.cart_list_item_content {
  margin-top: 0.24rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.88rem;
}
.cart_list_item_value {
  display: flex;
  align-items: center;
  font-size: 0.32rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
}
.cart_list_item_time {
  position: relative;
  display: flex;
  align-items: center;
}
.input_number_year {
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2e2f3e;
  margin-left: 0.1rem;
}
.cart_fee {
  margin-top: 0.36rem;
}
.cart_fee_com {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.24rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
}
.cart_list_item_value img {
  margin-left: 0.08rem;
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.cart_fee_anmil {
  padding: 0.2rem;
  animation: cart_fee_anmil 0.5s forwards;
}
@keyframes cart_fee_anmil {
  from {
    height: 0;
  }
  to {
    height: 2.8rem;
  }
}
.cart_fee_com_sel {
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.cart_fee_com_dec {
  width: 3.6rem;
  word-break: break-all;
}
.cart_order {
  width: 100%;
  margin-top: 0.4rem;
  background: #f7f7fa;
  padding: 0.2rem;
}
.cart_right_title {
  font-size: 0.4rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_right_numeber {
  font-size: 0.24rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  margin-top: 0.4rem;
}
.display_com {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart_right_numeber_value {
  font-weight: 400;
}
.cart_right_receivce_value {
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.cart_right_receivce_value img {
  width: 0.32rem;
  height: 0.32rem;
  margin-left: 0.08rem;
}
.cart_right_line {
  margin-top: 0.4rem;
  width: 100%;
  height: 0.02rem;
  background: #2e2f3e;
  margin-bottom: 0.2rem;
}
.cart_right_gas {
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
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
}
.gas_tab_item {
  width: 1.64rem;
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
.cart_fee_total {
  padding: 0 0.2rem;
}
.cart_totle_value {
  display: flex;
  justify-content: space-between;
  font-size: 0.24rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_totle_value_right {
  font-size: 0.32rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.cart_totle_value_right_number {
  margin-top: 0.08rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.cart_order_button {
  margin: 0 auto;
  margin-top: 0.4rem;
  width: 7.1rem;
  height: 0.88rem;
  background: #4540d6;
  box-shadow: 0 -0.08rem 0.016rem 0 rgba(82, 82, 102, 0.08);
  border-radius: 0.08rem;
  text-align: center;
  line-height: 0.88rem;
  cursor: pointer;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
}
.promoDiv {
  margin-top: 0.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.codeInput {
  width: 5rem;
  height: 0.88rem;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #d5d6e0;
  outline: none;
  padding: 0.2rem;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.codeInput:focus {
  border: 0.02rem solid #4540d6;
}
.promoDivButton {
  width: 2rem;
  height: 0.88rem;
  background: rgba(69, 64, 214, 0.06);
  box-shadow: 0px -0.08rem 0.16rem 0px rgba(82, 82, 102, 0.08);
  border-radius: 0.08rem;
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  cursor: pointer;
}
.cart_fee_right_ze {
  text-decoration: line-through;
}
.cart_fee_child_box {
  margin-top: 0.12rem;
  padding-left: 0.1rem;
  border-left: 0.02rem solid #d5d6e0;
  margin-left: 0.1rem;
}
</style>
<template>
  <div class="mobile_cart_app" :class='{mobile_cart_app_kong:cartNum===0}'>
    <MobileHead :showData="receiveAddressHeadShow" @cartChange="cartChangeFun"></MobileHead>
    <div v-if="cartNum>0">
      <div class="cart_head">Your Cart</div>
      <div class="cart_body">
        <div class="cart_step">
          <div class="cart_step_one">
            <div class="cart_step_one_num">1</div>
            <span>Check out Your Cart</span>
          </div>
          <div class="cart_step_one">
            <div class="cart_step_one_num" style="color:#A7A9BE">2</div>
            <span style="color:#A7A9BE">Place Order</span>
          </div>
        </div>
        <div class="cart_receive_box">
          <div class="cart_receive">
            <div class="cart_receive_address">
              <span>Receive Address</span>
              <span class="address">{{showAddress}}</span>
            </div>
            <div class="cart_change" @click="changeWalletFun">Change</div>
          </div>
        </div>
        <div class="cart_list" ref="cart_list">
          <div class="cart_list_item" @click.stop v-for="(item,index) in cartList" :key="index">
            <div class="cart_list_item_name">
              <span>{{item.dom_name}}</span>
              <img src="../assets/cart/icon_delete_sel@2x.png" alt="" @click.stop="delectcartFun(item,index)">
            </div>
            <div class="cart_list_item_empti">
              <div class="cart_list_item_status" style="color:#4540D6;background:rgba(69,64,214,0.1)" v-if="item.dom_state===9">Available</div>
              <div class="cart_list_item_status" style="color:#75749F;background:rgba(58,56,123,0.1)" v-else-if="item.dom_state===0||item.dom_state===5">Registered</div>
              <div class="cart_list_item_status" style="color:#EEA119;background:rgba(238,161,25,0.1)" v-else-if="item.dom_state">Registering...</div>
            </div>
            <div class="cart_list_item_content">
              <div class="cart_list_item_value">
                <span v-if="item.fee">{{item.fee.total_fee}} BTC</span>
                <img src="../assets/cart/24px_arrow_down@2x.png" alt="" @click="checkFeeFun(item)">
              </div>
              <div class="cart_list_item_time">
                <van-stepper integer @change="changeYearFun" v-if="item.dom_state===9" :max="5" :min="1" v-model="item.expire_year" input-width="0.8rem" button-size="0.48rem" />
                <van-stepper v-else disabled :max="5" :min="1" v-model="item.expire_year" input-width="0.8rem" button-size="0.48rem" />
                <span class="input_number_year" v-if="item.expire_year>1">Years</span>
                <span class="input_number_year" v-else>Year</span>
              </div>
            </div>
            <div class="cart_fee" v-if="item.isPort" :class="{cart_fee_anmil:item.isPort}">
              <div class="cart_fee_com">
                <span>Gas Fee</span>
                <span>{{item.fee.gas_fee}}</span>
              </div>
              <div class="cart_fee_com">
                <span class="cart_fee_com_sel cart_fee_com_dec">The gas fee fluctuates and is updated every 10 seconds</span>
              </div>
              <div class="cart_fee_com" style="margin-top:0.16rem">
                <span>Service Fee</span>
                <div>
                  <span class="cart_fee_right_ze cart_fee_com_sel">{{item.fee.origin_service_fee}} BTC</span>
                  <span>&nbsp;&nbsp;&nbsp;{{item.fee.service_fee}} BTC</span>
                </div>
              </div>
              <div class="cart_fee_child_box">
                <div class="cart_fee_com">
                  <span class="cart_fee_com_sel"> Basic Discount</span>
                  <div class="cart_fee_com_sel">- {{item.fee.promo_service_fee}} BTC</div>
                </div>
                <div class="cart_fee_com" v-if="item.promcode_fee>0">
                  <span class="cart_fee_com_sel"> Promotion Discount</span>
                  <div class="cart_fee_com_sel">- {{item.promcode_fee}} BTC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart_order">
          <span class="cart_right_title">Order</span>
          <div class="cart_right_numeber display_com">
            <span>Total number</span>
            <span class="cart_right_numeber_value">{{cartNum}}</span>
          </div>
          <div class="cart_right_receivce display_com">
            <span>Receive Address</span>
            <div class="cart_right_receivce_value" @click="copyActionFun">
              <span>{{showAddress}}</span>
              <img src="../assets/cart/16px_icon_copy@2x.png" alt="">
            </div>
          </div>
          <div class="cart_right_line"></div>
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
            <van-stepper integer v-if="gasSelectData.name!='Custom'" :min="0" v-model="gasSelectData.value" disabled input-width="6rem" button-size="0.48rem" />
            <van-stepper integer v-else @change="changeGasInputFun" :min="0" v-model="gasSelectData.customValue" input-width="6rem" button-size="0.48rem" />
            <div v-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.economyFee" style="color:red">Minimun Fee：{{gasSelectData.economyFee}}sats/vB</div>
            <div v-else-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.avg">This fee is below the average, which may lead to a long wait time for inscription.</div>
          </div>
          <div class="cart_right_line"></div>
          <!-- <div class="cart_right_gas">
            <img src="../assets/cart/16px_icon_gasrate@2x.png" alt="">
            <span>Promo Code</span>
          </div>
          <div class="promoDiv">
            <input v-model="promo_code_input" placeholder="Enter Promo Code" class="codeInput" />
            <div class="promoDivButton" :class='{unisatGray:!promo_code_input}' @click="confirmCodeFun">Confirm</div>
          </div> -->
        </div>
        <div class="cart_fee_total">
          <div class="cart_fee_com">
            <span>Total Gas Fee</span>
            <span>{{gasTotalData.total_gas_fee}} BTC</span>
          </div>
          <div class="cart_fee_com" style="margin-top:0.16rem">
            <span>Total Service Fee</span>
            <div>
              <span class="cart_fee_right_ze cart_fee_com_sel">{{gasTotalData.total_origin_service_fee}} BTC</span>
              <span>&nbsp;&nbsp;&nbsp;{{gasTotalData.total_service_fee}} BTC</span>
            </div>
          </div>
          <div class="cart_fee_child_box">
            <div class="cart_fee_com">
              <span class="cart_fee_com_sel">Basic Discount</span>
              <div class="cart_fee_com_sel">- {{gasTotalData.total_promo_service_fee}} BTC</div>
            </div>
            <div class="cart_fee_com" v-if="gasTotalData.total_promcode_fee>0">
              <span class="cart_fee_com_sel">Promotion Discount</span>
              <div class="cart_fee_com_sel">- {{gasTotalData.total_promcode_fee}} BTC</div>
            </div>
          </div>
          <div class="cart_right_line" style="background:#D5D6E0"></div>
          <div class="cart_totle_value">
            <span>Total</span>
            <div class="cart_totle_value_right">
              <span>{{gasTotalData.total_fee}} BTC</span>
              <span class="cart_totle_value_right_number"> ≈ {{gasTotalData.usd_value}} USDT</span>
            </div>
          </div>
        </div>
        <div class="cart_order_button" @click="topayPageFun">Ready To Pay</div>
      </div>
      <MobileFoot></MobileFoot>
    </div>
    <div v-if="cartNum===0">
      <MobileEmptyCart @addDomain="addDomainFun"></MobileEmptyCart>
    </div>
    <div class="mobile_page_loading" v-show="spanBoolean">
      <van-loading type="spinner" color="#1989fa" class='vant_loading' />
    </div>
    <MobileLogin v-if="walletTypeBoolean" @loginEnd="loginEndFun" @closemask="closeMaskFun"></MobileLogin>
  </div>
</template>
  
<script>
import MobileHead from '@/mobileComponents/mobileHead.vue'
import MobileFoot from '@/mobileComponents/mobileFoot.vue'
import MobileLogin from '@/mobileComponents/mobileLogin.vue'
import MobileEmptyCart from '@/mobileComponents/mobileEmptyCart'
import { validate } from 'bitcoin-address-validation';
import apis from '../util/apis/apis'
import { copyAction } from '../util/func/index'
import BigNumber from "bignumber.js";
const Decimal = require('decimal.js');
const moment = require('moment');
import { Message } from 'view-ui-plus'
export default {
  components: {
    MobileHead, MobileEmptyCart, MobileFoot, MobileLogin
  },
  watch: {
    cartList: {
      handler(newValue) {
        this.cartNum = newValue.length;
      },
      deep: true
    }
  },
  data() {
    return {
      receiveAddressHeadShow: null,
      promo_code_input: "",
      orderCode: null,
      spanMoreBoolean: false,
      spanResultBoolean: false,
      walletTypeBoolean: false,
      searchText: null,
      searchStutas: false,
      resultData: {
        dom_name: null,
        fee: {},
        dom_state: null,
        isSelect: false,
        owner_address: null,
        expire_date: null,
        showAddress: null,
        expire_date_show: null
      },
      linkList: [],
      cartList: [],
      cartNum: 0,
      gasList: [],
      gasSelectData: {
        value: 0,
        name: null,
        customValue: null,
        fast: null,
        avg: null,
        slow: null,
        economyFee: null
      },
      gasTotalData: {
        total_gas_fee: null,
        total_service_fee: null,
        total_origin_service_fee: null,
        total_promo_service_fee: null,
        total_fee: null,
        total_additional_fee: null,
        usd_value: null,
        service_fee: null,
        total_promcode_fee: null
      },
      spanBoolean: false,
      showAddress: null,
      receiveAddress: null,
      promo_code: ""
    }
  },
  methods: {
    confirmCodeFun() {
      if (!this.promo_code_input) {
        return
      }
      this.goToCartFun(1)
    },
    topayPageFun() {
      if (!this.receiveAddress) {
        Message.error("Receive address must not be empty")
        return
      }
      if (!validate(this.receiveAddress)) {
        Message.error("Receive bitcoin address is not valid")
        return
      }
      this.createPayOrderFun()
    },
    changeYearFun(value) {
      if (!value) {
        return
      }
      this.goToCartFun()
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
      this.goToCartFun()
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
      this.goToCartFun()
    },
    copyActionFun() {
      copyAction(this.receiveAddress)
    },
    checkFeeFun(item) {
      item.isPort = !item.isPort
    },
    delectcartFun(item, index) {
      this.cartList.splice(index, 1)
      localStorage.cartList = JSON.stringify(this.cartList);
      this.goToCartFun();
      this.linkList.forEach(element => {
        if (element.domain === item.domain) {
          element.isSelect = false
        }
      })
      if (item.domain === this.resultData.domain) {
        this.resultData.isSelect = false
      }
    },
    changeWalletFun() {
      this.walletTypeBoolean = true
    },
    closeMaskFun() {
      this.walletTypeBoolean = false
    },
    cartChangeFun(value) {
      this.showAddress = this.showAddressFun(localStorage.bitcoin_address);
      this.receiveAddress = localStorage.bitcoin_address;
    },
    loginEndFun(value) {
      if (value === 'custom') {
        this.receiveAddressHeadShow = 1;
      } else {
        this.receiveAddressHeadShow = localStorage.bitcoin_address;
      }
      this.showAddress = this.showAddressFun(localStorage.bitcoin_address);
      this.receiveAddress = localStorage.bitcoin_address;
      this.walletTypeBoolean = false
      this.goToCartFun()
    },
    createPayOrderFun() {
      this.spanBoolean = true
      let value = null;
      if (this.gasSelectData.name === 'Custom') {
        value = this.gasSelectData.customValue
      } else {
        value = this.gasSelectData.value
      }
      let cartListlocal = localStorage.cartList;
      let param = {};
      param.domains = JSON.parse(cartListlocal);
      param.out_wallet = this.receiveAddress;
      param.rate_fee = Number(value);
      param.source = "btc_domain";
      param.promo_code = this.promo_code;
      this.$axios({
        method: "post",
        data: param,
        url: apis.createPayOrderApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            this.$router.push({
              name: "mobile_order",
              query: {
                orderCode: res.data.data.order_code
              }
            })
            localStorage.orderCode = res.data.data.order_code;
            this.spanBoolean = false
          } else {
            this.orderCode = "";
            localStorage.removeItem('promo_code')
            this.spanBoolean = false
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.orderCode = "";
        localStorage.removeItem('promo_code')
        this.spanBoolean = false
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
    goToCartFun(type) {
      this.gasTotalData.total_promcode_fee = 0
      this.spanBoolean = true
      let param = {};
      let arr = []
      this.cartList.forEach(element => {
        let temp = {};
        if (element.domain) {
          temp.domain = element.domain;
        } else {
          temp.domain = element.dom_name;
        }
        if (element.expire_year) {
          temp.year = element.expire_year;
        } else {
          temp.year = element.year;
        }
        arr.push(temp)
      })
      localStorage.cartList = JSON.stringify(arr)
      param.domains = arr;
      param.out_wallet = this.receiveAddress;
      if (this.gasSelectData.name === 'Custom') {
        param.rate_fee = this.gasSelectData.customValue;
      } else {
        param.rate_fee = this.gasSelectData.value;
      }
      if (type === 1) {
        param.promo_code = this.promo_code_input
      } else {
        param.promo_code = this.promo_code
      }
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
            this.cartList = res.data.data.domains;
            this.cartList.forEach(element => {
              let origin_service_fee = new Decimal(element.fee.origin_service_fee);
              let promo_service_fee = new Decimal(element.fee.promo_service_fee);
              let service_fee = new Decimal(element.fee.service_fee);
              let promcode_fee = origin_service_fee.minus(promo_service_fee).minus(service_fee);
              element.promcode_fee = Number(promcode_fee.toString());
            })
            let data = res.data.data
            this.gasList = this.recommendedFeeFun(data.recommended_fee.fastestFee, data.recommended_fee.halfHourFee, data.recommended_fee.hourFee, this.gasSelectData.name)
            if (!this.gasSelectData.name) {
              this.gasSelectData.name = this.gasList[0].name;
              this.gasSelectData.fast = data.recommended_fee.fastestFee;
              this.gasSelectData.avg = data.recommended_fee.halfHourFee
              this.gasSelectData.slow = data.recommended_fee.hourFee
              this.gasSelectData.economyFee = data.recommended_fee.economyFee
              this.gasSelectData.value = this.gasList[0].value
            }
            this.gasTotalData.total_gas_fee = data.total_gas_fee;
            this.gasTotalData.total_service_fee = data.total_service_fee;
            this.gasTotalData.total_additional_fee = data.total_additional_fee;
            this.gasTotalData.total_promo_service_fee = data.total_promo_service_fee;
            this.gasTotalData.total_origin_service_fee = data.total_origin_service_fee;
            this.gasTotalData.total_fee = data.total_fee;
            let total_origin_service_fee = new Decimal(data.total_origin_service_fee);
            let total_promo_service_fee = new Decimal(data.total_promo_service_fee);
            let total_service_fee = new Decimal(data.total_service_fee);
            let total_promcode_fee = total_origin_service_fee.minus(total_promo_service_fee).minus(total_service_fee);
            this.gasTotalData.total_promcode_fee = Number(total_promcode_fee.toString());
            this.gasTotalData.usd_value = data.total_fee_usd;
            this.spanBoolean = false;
            if (type === 1) {
              this.promo_code = this.promo_code_input;
              localStorage.promo_code = this.promo_code;
            }
          } else {
            this.spanBoolean = false
            if (res.data.code === 500) {
              return
            }
            if (res.data.message === 'promo_rate error') {
              this.gasTotalData.total_promcode_fee = 0
              this.promo_code = "";
              localStorage.removeItem('promo_code')
              this.goToCartFun();
            }
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.spanBoolean = false
      });
    },
    addDomainFun(value) {
      let cartListlocal = value;
      localStorage.cartList = JSON.stringify(value);
      if (cartListlocal) {
        this.cartNum = cartListlocal.length
      }
      this.cartList = cartListlocal;
      if (this.cartNum > 0) {
        this.receiveAddress = localStorage.bitcoin_address;
        this.goToCartFun();
        this.showAddress = this.showAddressFun(this.receiveAddress)
      }
      window.scrollTo(0, 0)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
  beforeMount() {
    let cartList = localStorage.cartList;
    if (cartList) {
      let arr = JSON.parse(cartList);
      let set = new Set(arr.map((item) => JSON.stringify(item)));
      this.cartList = [...set].map((item) => JSON.parse(item));
    }
  },
  mounted() {
    let cartListlocal = localStorage.cartList;
    if (localStorage.promo_code) {
      this.promo_code = localStorage.promo_code;
    }
    if (cartListlocal) {
      this.cartNum = JSON.parse(cartListlocal).length
    }
    if (this.cartNum > 0) {
      this.receiveAddress = localStorage.bitcoin_address;
      this.goToCartFun();
      this.showAddress = this.showAddressFun(this.receiveAddress)
    }
  }
}
</script>
  
  