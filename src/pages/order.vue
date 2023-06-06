  
<style scoped>
.order_app {
  width: 100%;
  position: relative;
}
.order_head {
  width: 100%;
  height: 170px;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 100%);
  padding-top: 94px;
}
.order_head_box {
  width: 1200px;
  margin: 0 auto;
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
}
.order_head_title {
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
}
.cart_body {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
.cart_step {
  width: 100%;
  display: flex;
  align-items: center;
  height: 68px;
  background: #f6f6f8;
  padding-left: 8px;
  justify-content: space-between;
}
.cart_step_one {
  width: 598px;
  height: 52px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #e1e2eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
}
.cart_step_one img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.cart_step_tow {
  width: 588px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #d5d6e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;

  box-shadow: 0px 10px 24px 0px rgba(17, 15, 77, 0.1);
}
.cart_step_tow_num {
  width: 30px;
  height: 30px;
  background: #eaeaed;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  margin-right: 10px;
}
.cart_content {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.cart_left {
  width: 720px;
}
.order_receive {
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #d5d6e0;
}
.order_receive_com {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order_receive_name {
  font-size: 13px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.order_receive_name img {
  width: 24px;
  height: 24px;
}
.order_receive_address {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 12px;
}
.order_receive_total {
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  margin-top: 4px;
}
.order_paymethod {
  margin-top: 23px;
}
.order_paymethod_title {
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.order_pay_box {
  margin-top: 20px;
  padding: 16px 30px 20px 20px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.order_pay_list {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.order_pay_item {
  width: 160px;
  height: 66px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #a7a9be;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
  flex-shrink: 0;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.order_pay_item:nth-child(4n) {
  margin-right: 0;
}
.order_pay_item img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.order_pay_item_sel {
  border: 2px solid #4540d6;
}
.order_pay_btc_div {
  animation: order_pay_btc_div 1s forwards;
}
@keyframes order_pay_btc_div {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.order_pay_line {
  width: 100%;
  height: 0;
  border: 1px dotted #d5d6e0;
  margin-top: 20px;
}
.paywithmixpay {
  width: 138px;
  height: 20px;
}
.order_pay_currency {
  margin-top: 15px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.order_pay_btc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
.order_pay_btc_item {
  width: 330px;
  height: 44px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #a7a9be;
  font-size: 12px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.order_pay_btc_item_sel {
  border: 2px solid #4540d6;
}
.order_pay_btc_item img {
  width: 16px;
  height: 16px;
}
.cart_right {
  width: 460px;
  padding: 20px;
  border-radius: 4px;
}
.cart_right_title {
  font-size: 20px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.display_com {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart_right_numeber {
  font-size: 12px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  margin-top: 20px;
}
.cart_right_numeber_value {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.cart_right_receivce {
  margin-top: 8px;
  font-size: 12px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_right_receivce_value {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.cart_right_receivce_value img {
  width: 16px;
  height: 16px;
  margin-left: 4px;
}
.cart_right_line {
  margin-top: 20px;
  width: 100%;
  height: 1px;
  border: 1px solid #2e2f3e;
  margin-bottom: 10px;
}
.cart_fee {
  margin-top: 8px;
  height: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background: #f9f9fc;
  border-radius: 4px;
}
.cart_fee_gas {
  height: 88px;
  padding: 20px 0;
}
.slow_class {
  margin-top: 4px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.cart_fee_gas_right {
  margin-top: 8px;
}
.cart_fee_gas_right_com {
  display: flex;
  justify-content: flex-end;
}
.cart_right_line_tow {
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background: #d5d6e0;
  margin-bottom: 20px;
}
.cart_totle_value {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_totle_value_right {
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.cart_totle_value_right_number {
  margin-top: 4px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.cart_order_button {
  margin-top: 20px;
  width: 100%;
  height: 44px;
  background: #4540d6;
  box-shadow: 0px -4px 8px 0px rgba(82, 82, 102, 0.08);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
}
.codeImg {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
}
.copyBox {
  width: 100%;
  height: 54px;
  background: rgba(167, 169, 190, 0.1);
  border-radius: 2px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.copyBoxContent {
  width: 370px;
  height: 40px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  word-break: break-all;
}
.copyBox img {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.btcTypeTow {
  animation: btcTypeTow 0.2s forwards;
  overflow: hidden;
}
@keyframes btcTypeTow {
  from {
    height: 0;
  }
  to {
    height: 318px;
  }
}
.btc_have_paid {
  width: 100%;
  height: 44px;
  background: rgba(69, 64, 214, 0.2);
  box-shadow: 0px -4px 8px 0px rgba(82, 82, 102, 0.08);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  margin-top: 20px;
}
.payment_status {
  width: 500px;
  height: 296px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 2.4rem;
}
.payment_status_head {
  width: 100%;
  padding: 0 20px;
  height: 54px;
}
.maskheadcom {
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.maskheadcomImg {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.payment_status_box {
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon_44px_loading {
  width: 44px;
  height: 44px;
  margin-top: 15px;
}
.payment_status_box_title {
  margin-top: 20px;
  font-size: 13px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #090c1d;
}
.payment_status_box_dec {
  margin-top: 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #090c1d;
}
.payment_status_box_line {
  text-decoration: solid;
}
.payment_status_button {
  margin-top: 50px;
  width: 460px;
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
.OOPSTitle {
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #090c1d;
}
.payment_result_box_title {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  text-align: center;
}
.payment_result_box_code {
  width: 180px;
  height: 180px;
  margin-top: 26px;
}
.payment_result_box_name {
  margin-top: 10px;
  font-size: 13px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #090c1d;
}
.payment_result_box_url {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #090c1d;
}
.inscript_body {
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
}
.inscript_step {
  width: 100%;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
}
.inscript_step_img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.inscript_step_info {
  margin-top: 6px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.inscript_step_info_dec {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  width: 530px;
  word-break: break-all;
}
.inscript_step_info_copy {
  cursor: pointer;
  text-decoration: underline;
  margin-left: 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.inscript_step_info_bing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inscript_step_info_right {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #8184a6;
}
.inscript_step_info_right_item {
  display: flex;
  align-items: center;
}
.inscript_box {
  width: 840px;
  height: 575px;
  background: #ffffff;
  border: 1px solid #2e2f3e;
}
.inscript_body_dec {
  margin-top: 20px;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2e2f3e;
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
</style>
<template>
  <div class="order_app">

    <Head></Head>
    <div class="order_head">
      <div class="order_head_box">
        <div class="order_head_title">Your Cart</div>
        <span>Place Order</span>
      </div>
    </div>
    <div class="cart_body">
      <div class="cart_step">
        <div class="cart_step_one">
          <img src="../assets/order/icon_ok_p@2x.png" alt="">
          <span>Check out Your Cart</span>
        </div>
        <div class="cart_step_tow">
          <div class="cart_step_tow_num">2</div>
          <span>Place Order</span>
        </div>
      </div>
      <div class="cart_content">
        <div class="cart_left">
          <div class="order_receive">
            <div class="order_receive_com order_receive_name">
              <span>{{feeData.domain_number}} Domain names</span>
              <!-- <img src="../assets/cart/24px_arrow_down@2x.png" alt=""> -->
            </div>
            <div class="order_receive_com order_receive_address">
              <span>Receive Address</span>
              <span>{{feeData.showAddress}}</span>
            </div>
            <div class="order_receive_com order_receive_total">
              <span>Total</span>
              <span>{{feeData.total_fee}} BTC</span>
            </div>
          </div>
          <div class="order_paymethod">
            <span class="order_paymethod_title">Payment Method</span>
          </div>
          <div class="order_pay_box">
            <span>Select Currency</span>
            <div class="order_pay_list">
              <div class="order_pay_item" @click="changePayFun(item)" :class="{order_pay_item_sel:item.isSelect}" v-for="(item,index) in payMethors" :key="index">
                <img :src="item.url" alt="" v-if="item.name!='MixPay'">
                <img :src="item.url" alt="" v-else style="width:94px;height:23px">
                <span v-if="item.name!='MixPay'">{{item.name}}</span>
              </div>
            </div>
            <div v-if="paySelData.name==='BTC'" class="order_pay_btc_div">
              <div class="order_pay_line"></div>
              <div class="order_pay_currency">Select Currency</div>
              <div class="order_pay_btc">
                <div class="order_pay_btc_item" @click="changebtcFun(item)" :class="{order_pay_btc_item_sel:item.isSelect}" v-for="(item,index) in btcMethors" :key="index">
                  <span>{{item.name}}</span>
                  <img src="../assets/order/icon_ok_p@2x.png" alt="" v-if="item.isSelect">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart_right">
          <span class="cart_right_title">Order</span>
          <div class="cart_right_numeber display_com">
            <span>Total number</span>
            <span class="cart_right_numeber_value">{{feeData.domain_number}}</span>
          </div>
          <div class="cart_right_receivce display_com">
            <span>Receive Address</span>
            <div class="cart_right_receivce_value">
              <span>{{feeData.showAddress}}</span>
              <img src="../assets/cart/16px_icon_copy@2x.png" alt="">
            </div>
          </div>
          <div class="cart_right_line"></div>
          <div class="cart_fee cart_fee_gas">
            <div class="cart_fee_left">
              <span>Total Gas Fee</span>
              <div style="margin-top:8px">Total Service Fee</div>
            </div>
            <div>
              <span>{{feeData.total_gas_fee}} BTC</span>
              <div class="cart_fee_gas_right">
                <div class="cart_fee_gas_right_com">{{feeData.zekouServiceFee}} BTC</div>
                <div class="cart_fee_gas_right_com cart_fee_right_ze">{{feeData.total_service_fee}} BTC</div>
              </div>
            </div>
          </div>
          <div class="cart_right_line_tow"></div>
          <div class="cart_totle_value">
            <span>Total</span>
            <div class="cart_totle_value_right">
              <span>{{feeData.total_fee}} BTC</span>
              <span class="cart_totle_value_right_number">{{feeData.serverFee}}USDT</span>
            </div>
          </div>
          <div v-if="selectBtcType===2" class="btcTypeTow">
            <div class="codeImg">
              <vue-qrcode :value="monywallet" :options="{ width: 140 }"></vue-qrcode>
            </div>
            <div class="copyBox">
              <span class="copyBoxContent">{{monywallet}}</span>
              <img src="../assets/cart/16px_icon_copy@2x.png" alt="">
            </div>
            <div class="btc_have_paid">
              <Icon type="ios-loading" size='24' style="margin-right:5px;" color="#ffffff" class='demo-spin-icon-load' />
              <span>I Have Paid</span>
            </div>
          </div>
          <div class="cart_order_button" v-if="paySelData.name==='MixPay'">
            <img src="../assets/order/paywithmixpay@2x.png" alt="" class="paywithmixpay">
          </div>
          <div class="cart_order_button" v-else-if="selectBtcType!=2" @click="otherPayFun">
            <span> Continue Pay</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="payStatusBoolean">
      <div class="payment_status">
        <div class="displayCom payment_status_head maskheadcom">
          <span>Payment Status</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(1)">
        </div>
        <div class="payment_status_box">
          <img src="../assets/order/icon_44px_loading@2x.png" alt="" class="icon_44px_loading demo-spin-icon-load">
          <div class="payment_status_box_title">Don't close the window until payment is finished. </div>
          <div class="payment_status_box_dec">
            <span>Payment issues? contact us:</span>
            <span class="payment_status_box_line">contact@btcdomains.io</span>
          </div>
          <div class="payment_status_button">I Have Paid</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="payResultBoolean">
      <div class="payment_status" style="height:500px;margin-top:1.9rem">
        <div class="displayCom payment_status_head maskheadcom">
          <span>BTC Payment Results</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(2)">
        </div>
        <div class="payment_status_box">
          <span class="OOPSTitle">OOPS!</span>
          <div class="payment_result_box_title">No payment has been detected yet. Please try again later. Or join our Discord. Click on the "Create ticket" button on the open-ticket channel to contact us.</div>
          <img src="../assets/order/discord@2x.png" alt="" class="payment_result_box_code">
          <div class="payment_result_box_name">Join Our Discord</div>
          <div class="payment_result_box_url">https://discord.com/invite/btcdomain</div>
          <div class="payment_status_button">OK</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="payIssueBoolean">
      <div class="payment_status" style="height:500px;margin-top:1.9rem">
        <div class="displayCom payment_status_head maskheadcom">
          <span>Payment May Have Issues</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(3)">
        </div>
        <div class="payment_status_box">
          <span class="OOPSTitle">Payment not received or not paid for a long time? </span>
          <div class="payment_result_box_title">Join our Discord. Click on the "Create ticket" button on the open-ticket channel to contact us.</div>
          <img src="../assets/order/discord@2x.png" alt="" class="payment_result_box_code">
          <div class="payment_result_box_name">Join Our Discord</div>
          <div class="payment_result_box_url">https://discord.com/invite/btcdomain</div>
          <div class="payment_status_button">OK</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="inscritpBoolean">
      <div class="inscript_box" style="margin-top:1.8rem">
        <div class="displayCom payment_status_head maskheadcom">
          <span>Inscribe State</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(4)">
        </div>
        <div class="inscript_body">
          <div class="inscript_step">
            <img src="../assets/order/icon_processing_ok@2x.png" class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <span>Locked the dominate</span>
              <span class="inscript_step_info_dec">This domain name has been locked. Don't worry about being preempted.</span>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing@2x.png" class="inscript_step_img demo-spin-icon-load " alt="">
            <div class="inscript_step_info">
              <div>
                <span>Fund Transfer Pending</span>
                <span class="inscript_step_info_copy">Copy Message ID</span>
              </div>
              <span class="inscript_step_info_dec">Confirm the remaining 2 blocks. If the rate is lower than the current network rate, it may take a long time to wait.</span>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing@2x.png" class="inscript_step_img demo-spin-icon-load " alt="">
            <div class="inscript_step_info">
              <span>Inscribing</span>
              <div class="inscript_step_info_bing">
                <span class="inscript_step_info_dec">Confirm the remaining 2 blocks. If the rate is lower than the current network rate, it may take a long time to wait.</span>
                <div class="inscript_step_info_right">
                  <div class="inscript_step_info_right_item">
                    <span>Network rate:</span>
                    <span style="margin-left:8px">20 sats/vB</span>
                  </div>
                  <div class="inscript_step_info_right_item">
                    <span>Your rate::</span>
                    <span style="margin-left:8px">15 sats/vB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing_waiting@2x.png" class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <span>Inscription Transfer Panding</span>
              <span class="inscript_step_info_dec">Confirm the remaining 2 blocks. If the rate is lower than the current network rate, it may take a long time to wait.</span>
            </div>
          </div>
          <div class="inscript_body_dec">The domain name transfer may take some time. You can directly check the status of the domain transfer on your wallet homepage.</div>
          <div class="inscript_button" @click="toPersonFun">Check Wallet Homepage</div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
              
<script>
import Head from '../components/head'
import Foot from '../components/foot'
import EmptyCart from '../components/emptyCart'
import { InputNumber, Icon, Message } from 'view-ui-plus'

import VueQrcode from '@chenfengyuan/vue-qrcode';
import apis from '../util/apis/apis'
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
export default {
  components: {
    Head, Foot, InputNumber, EmptyCart, VueQrcode, Icon
  },
  data() {
    return {
      payMethors: [
        {
          name: "BTC",
          url: require("../assets/order/btc@2x.png"),
          isSelect: true,
        },
        {
          name: "UniSat",
          url: require("../assets/order/pay_connect_unisat@2x.png"),
          isSelect: false,
        },
        {
          name: "metaMask",
          url: require("../assets/order/pay_foxwallet@2x.png"),
          isSelect: false,
        },
        {
          name: "TokenPocket",
          url: require("../assets/order/tokenpocket@2x.png"),
          isSelect: false,
        },
        {
          name: "MixPay",
          url: require("../assets/order/MixPay@2x.png"),
          isSelect: false,
        },
      ],
      paySelData: {},
      gasTotalData: {},
      btcMethors: [
        {
          name: "Wallet Balance Payment",
          type: 1,
          isSelect: true
        },
        {
          name: "Transfer payment to designated address",
          type: 2,
          isSelect: false
        },
      ],
      selectBtcType: 1,
      payStatusBoolean: false,
      payResultBoolean: false,
      payIssueBoolean: false,
      inscritpBoolean: false,
      cartList: [],
      feeData: {},
      receiveAddress: null,
      rate_fee: null,
      monywallet: null
    }
  },
  methods: {
    choseMaskFun(index) {
      if (index === 1) {
        this.payStatusBoolean = false
      } else if (index === 2) {
        this.payResultBoolean = false
      } else if (index === 3) {
        this.payIssueBoolean = false
      } else if (index === 4) {
        this.inscritpBoolean = false
      }
    },
    toPersonFun() {
      this.$router.push({
        name: "person"
      })
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
    createPayOrderFun() {
      let param = {};
      param.domains = this.cartList;
      param.out_wallet = this.receiveAddress;
      param.rate_fee = Number(this.rateFee);
      param.source = "btc_domain";
      param.promo_code = "";
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
            res.data.data.showAddress = this.showAddressFun(res.data.data.out_wallet)
            this.feeData = res.data.data;
            this.monywallet = res.data.data.receive_address;
            this.orderCode = res.data.data.order_code;
            localStorage.orderCode = res.data.data.order_code;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    changePayFun(item) {
      if (item.isSelect) {
        return
      }
      this.payMethors.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.paySelData = item
    },

    changebtcFun(item) {
      if (item.isSelect) {
        return
      }
      this.btcMethors.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true
      this.selectBtcType = item.type;
    },

    addDomainFun(value) {
      this.cartList = value;
      window.scrollTo(0, 0)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    changeGasFun(item) {
      this.gasList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.gasSelectData = item;
    },
    checkFeeFun(item) {
      item.isPort = !item.isPort
    },
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
    async unisatAction() {
      if (typeof window.unisat === "undefined") {
        Message.error("unisat is not installed!");
        return;
      }
      const num = new BigNumber(this.feeData.total_fee);
      const weivalue = num.multipliedBy(100000000).toNumber();
      const txid = await window.unisat.sendBitcoin(
        this.monywallet,
        weivalue,
        {
          // feeRate: 0.000000000000001,
        }
      );
      Message.info("submit transaction: " + txid);
    },
    async tiggerMetamaskAction() {
      if (typeof window.ethereum === "undefined") {
        Message.error("Metamask is not installed!");
        return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let value = this.feeData.total_fee.toString();
      let weivalue = ethers.parseUnits(value, "ether");
      let weiStr = weivalue.toString(16);
      console.log(accounts[0])
      let txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: "0x4CBEd4E1624A638c3fefdb69D53c0D79e52694B8",
            value: weiStr,
            gasPrice: "",
            gas: "",
          },
        ],
      });
      Message.info("Send ETH tx: " + txHash + " has been publiced");
      let textHtml =
        '<div style="position: fixed;top: 0;left: 0;right: 0;bottom: 0;height: 100vh;width: 100vw;background: rgba(255, 255, 255, 0.7);text-align: center;"><div style="margin-top: 340px;"><img src="https://btcdomains.io/images/loading.svg" width="40" height="40" alt=""></div><br><div class="text-blue" style="font-size: 24px;font-weight: 600;color: #4540D6;line-height: 33px;">Do not close this window until confirmation is complete !</div><br><div class="text-block" style="font-size: 24px;font-weight: 600;color: #202842;line-height: 33px;">Payment has been made and is currently being confirmed. It may take 20 minutes to wait</div></div>';
      let inner = document.createElement("div");
      inner.innerHTML = textHtml;
      inner.className = "eth-pay-loading-view";
      document.body.appendChild(inner);
    },
    otherPayFun() {
      if (this.paySelData.name === 'UniSat') {
        this.unisatAction()
      } else if (this.paySelData.name === 'metaMask') {
        this.tiggerMetamaskAction()
      }
    }
  },
  mounted() {
    let cartListlocal = localStorage.cartList;
    if (cartListlocal) {
      this.cartList = JSON.parse(cartListlocal)
    }
    this.receiveAddress = this.$route.query.receiveAddress
    this.rateFee = this.$route.query.value
    this.createPayOrderFun()
    this.paySelData = this.payMethors[0]
    document.addEventListener("click", this.outClick);
  },
  destroyed() {
    document.removeEventListener("click", this.outClick)
  }
}
    </script>
              