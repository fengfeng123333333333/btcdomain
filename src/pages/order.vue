  
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
  cursor: pointer;
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
  cursor: pointer;
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
  height: 140px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.cart_fee_gas_right_com {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  margin-top: 20px;
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
}
.payment_status {
  width: 500px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 2.4rem;
  padding-bottom: 20px;
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
  text-align: center;
}
.payment_status_box_title_dec {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 10px;
  text-align: center;
}
.payment_status_box_dec {
  margin-top: 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #090c1d;
}
.payment_status_box_dec_code {
  margin-top: 40px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  text-align: center;
}
.payment_status_box_line {
  text-decoration: underline;
  cursor: pointer;
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
.payment_status_again {
  text-align: center;
  text-decoration: underline;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 20px;
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
  cursor: pointer;
}

.payment_result_box_email {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 30px;
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
  justify-content: space-between;
}
.inscript_step_info_bottom {
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2e2f3e;
  margin-top: 30px;
  padding: 0 20px;
}
.inscript_box {
  width: 840px;
  background: #ffffff;
  border: 1px solid #2e2f3e;
  padding-bottom: 20px;
}
.inscript_body_dec {
  margin-top: 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-bottom: 10px;
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
.cart_fee_right_ze {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  text-decoration: line-through;
  margin-top: 5px;
}
.service_code {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 2px;
}
.cart_order_button_stop {
  cursor: not-allowed;
  opacity: 0.5;
}
.mixPayLoadingClass {
  opacity: 0.5;
  cursor: not-allowed;
}
.cart_fee_left_gas_fee {
  display: flex;
  align-items: center;
}
.cart_fee_left_gas_fee img {
  width: 16px;
  height: 16px;
  margin-left: 4px;
}
.cart_detail {
  width: 100%;
  height: 0;
  background: #f9f9fc;
  border-radius: 0px 0px 4px 4px;
  animation: cart_detail 0.5s forwards;
  overflow: hidden;
  padding: 8px 20px;
  border: 1px solid #d5d6e0;
  overflow-y: auto;
}
.cart_detail::-webkit-scrollbar {
  display: none;
}
@keyframes cart_detail {
  from {
    height: 0;
  }
  to {
    height: 140px;
  }
}
.cart_detail_item {
  width: 100%;
  height: 62px;
  display: flex;
  font-size: 12px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  border-bottom: 1px dotted #d5d6e0;
  justify-content: space-between;
  padding: 10px 0;
}
.cart_detail_item_Left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart_detail_item_Left_dec {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.send_btc {
  width: 840px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 1.4rem;
  padding-bottom: 20px;
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
.order_pay_item_mixpay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.order_pay_item_mixpay img {
  margin-right: 0;
  width: 99px;
  height: 42px;
}
</style>
<template>
  <div class="order_app">

    <Head></Head>
    <div class="order_head">
      <div class="order_head_box">
        <div class="order_head_title" @click="toCartFun">Your Cart</div>
        <span>Place Order</span>
      </div>
    </div>
    <div class="cart_body">
      <div class="cart_step">
        <div class="cart_step_one" @click="toCartFun">
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
              <Icon type="ios-arrow-down" v-if="!cartDetailBoolean" @click='cartDetailFun' />
              <Icon type="ios-arrow-up" v-else @click='cartDetailFun' />
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
          <div class="cart_detail" v-if="cartDetailBoolean">
            <div class="cart_detail_item" v-for="(item,index) in cartDetail" :key="index">
              <div class="cart_detail_item_Left">
                <span>{{item.dom_name}}</span>
                <div>
                  <span class="cart_detail_item_Left_dec">Registration</span>
                  <span>&nbsp;&nbsp;{{item.expire_year}}&nbsp;&nbsp;</span>
                  <span class="cart_detail_item_Left_dec">{{item.expire_year>1?'Years':"Year"}}</span>
                </div>
              </div>
              <div>{{item.fee.total_fee}} BTC</div>
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
                <div class="order_pay_item_mixpay" v-else>
                  <img :src="item.url" alt="">
                </div>
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
            <div class="cart_right_receivce_value" @click="copyActionFun">
              <span>{{feeData.showAddress}}</span>
              <img src="../assets/cart/16px_icon_copy@2x.png" alt="">
            </div>
          </div>
          <div class="cart_right_line"></div>
          <div class="cart_fee cart_fee_gas">
            <div class="cart_fee_left">
              <div class="cart_fee_left_gas_fee">
                <span>Total Gas Fee</span>
                <Tooltip v-if="paySelData.name=='MixPay'" :max-width="240" content="Mixpay does not charge an additional handling fee, but requires an additional gas fee." placement="right-start">
                  <img src="../assets/person/icon_16_q@2x.png" alt="">
                </Tooltip>
              </div>
              <div style="margin-top:8px">
                <span>Total Service Fee</span>
                <div class="service_code">Service Fee Basic Discount</div>
                <div class="service_code" v-if="feeData.total_promcode_fee>0">Service Fee Promotion Discount</div>
              </div>
              <div style="margin-top:8px">Payable Service Fee</div>
            </div>
            <div>
              <span v-if="paySelData.name!='MixPay'">{{feeData.total_gas_fee}} BTC</span>
              <span v-else>{{feeData.additional_dec}} BTC</span>
              <div class="cart_fee_gas_right">
                <div class="cart_fee_gas_right_com">
                  <span class="cart_fee_right_ze">{{feeData.total_origin_service_fee}} BTC</span>
                  <div class="service_code">- {{feeData.total_promo_service_fee}} BTC</div>
                  <div class="service_code" v-if="feeData.total_promcode_fee>0">- {{feeData.total_promcode_fee}} BTC</div>
                </div>
                <div>{{feeData.total_service_fee}} BTC</div>
              </div>
            </div>
          </div>
          <div class="cart_right_line_tow"></div>
          <div class="cart_totle_value">
            <span>Total</span>
            <div class="cart_totle_value_right">
              <span v-if="paySelData.name!='MixPay'">{{feeData.total_fee}} BTC</span>
              <span v-else>{{feeData.total_dec}} BTC</span>
              <span class="cart_totle_value_right_number" v-if="paySelData.name!='MixPay'">≈ {{usd_value}} USDT</span>
              <span class="cart_totle_value_right_number" v-else>≈ {{usd_mixpay_value}} USDT</span>
            </div>
          </div>
          <div v-if="selectBtcType===2&&paySelData.name==='BTC'" class="btcTypeTow">
            <div class="codeImg">
              <vue-qrcode :value="monywallet" :options="{ width: 140 }"></vue-qrcode>
            </div>
            <div class="copyBox">
              <span class="copyBoxContent">{{monywallet}}</span>
              <img src="../assets/cart/16px_icon_copy@2x.png" alt="" @click="copyActionFun(2)">
            </div>
            <div class="cart_order_button" @click='codePaidFun()'>
              <Icon type="ios-loading" v-if="codePaidBoolean" size='24' style="margin-right:5px;" color="#ffffff" class='demo-spin-icon-load' />
              <span> I Have Paid</span>
            </div>
          </div>
          <div class="cart_order_button" :class="{mixPayLoadingClass:mixPayLoading}" v-else-if="paySelData.name==='MixPay'" @click="mixPayOpwnFun">
            <Icon type="ios-loading" size='24' style="margin-right:5px;" color="#ffffff" class='demo-spin-icon-load' v-if="mixPayLoading" />
            <img src="../assets/order/paywithmixpay@2x.png" alt="" class="paywithmixpay">
          </div>
          <div v-else>
            <div class="cart_order_button" :class="{cart_order_button_stop:!stop_pay&&paySelData.name==='BTC'}" v-if="isPay===1" @click="otherPayFun">
              <span> Continue Payment</span>
            </div>
            <div class="cart_order_button" v-else @click="otherHavePayFun">
              <Icon type="ios-loading" v-if="otherLoadingBoolean" size='24' style="margin-right:5px;" color="#ffffff" class='demo-spin-icon-load' />
              <span> I Have Paid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spin size="large" fix :show="spanBoolean"></Spin>
    <div class="mask" v-if="payStatusBoolean&&full_state===9">
      <div class="payment_status">
        <div class="displayCom payment_status_head maskheadcom">
          <span>Payment Status</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(1)">
        </div>
        <div class="payment_status_box">
          <img src="../assets/order/icon_44px_loading@2x.png" alt="" class="icon_44px_loading demo-spin-icon-load">
          <!-- <div class="payment_status_box_title">Don't close the window until payment is finished. </div> -->
          <div class="payment_status_box_dec">
            <span>Payment issues?</span>
            <span class="payment_status_box_line" @click='openUsFun(1)'> contact us</span>
          </div>
          <div class="payment_status_button" @click='iHasPaiFun(3)'>
            <Icon type="ios-loading" v-if='ishasPaiBoolean' size='24' style="margin-right:5px;" color="#ffffff" class='demo-spin-icon-load' />
            <span>I Have Paid</span>
          </div>
          <div class="payment_status_again" v-if="paySelData.name==='MixPay'" @click='mixPayOpwnFun'>Try Again</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="payResultBoolean&&full_state===9">
      <div class="payment_status">
        <div class="displayCom payment_status_head maskheadcom">
          <span>Payment Status</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(2)">
        </div>
        <div class="payment_status_box">
          <img src="../assets/order/icon_44px_loading@2x.png" alt="" class="icon_44px_loading demo-spin-icon-load">
          <div class="payment_status_box_title">It may take a long time. You can close the window and check the domain name status on the wallet homepage later. </div>
          <div class="payment_status_box_title_dec">It may take a long time. You can close the window and check the domain name status on the wallet homepage later.</div>
          <div class="payment_status_box_dec_code">
            <span>Payment issues?</span>
            <span class="payment_status_box_line" @click='openUsFun(2)'> contact us</span>
          </div>
          <div class="payment_status_button" @click="choseMaskFun(2)">OK</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="payResultTowBoolean&&full_state===9">
      <div class="payment_status" style="height:500px;margin-top:1.9rem">
        <div class="displayCom payment_status_head maskheadcom">
          <span>Contact Us</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(9)">
        </div>
        <div class="payment_status_box">
          <!-- <span class="OOPSTitle">OOPS!</span> -->
          <div class="payment_result_box_title">Join our Discord. Click on the "Create ticket" button on the open-ticket channel to contact us.</div>
          <img src="../assets/order/discord@2x.png" alt="" class="payment_result_box_code">
          <div class="payment_result_box_name">Join Our Discord</div>
          <div class="payment_result_box_url" @click='todiscordFun'>https://discord.com/invite/btcdomain</div>
          <div class="payment_result_box_email">Or contact us with email: contact@btcdomains.io</div>
          <div class="payment_status_button" @click="choseMaskFun(9)">OK</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="payIssueBoolean&&full_state===9">
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
          <div class="payment_result_box_url" @click='todiscordFun'>https://discord.com/invite/btcdomain</div>
          <div class="payment_status_button" @click="choseMaskFun(3)">OK</div>
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
              <span>Locked The Dominate</span>
              <span class="inscript_step_info_dec">This domain name has been locked. Don't worry about being preempted.</span>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing@2x.png" v-if="full_state===1" class="inscript_step_img demo" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state>1&&full_state!=9' class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state===0' class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <div>
                <span>Fund Transfer Pending</span>
                <!-- <span class="inscript_step_info_copy">Copy Message ID</span> -->
              </div>
              <span class="inscript_step_info_dec">Confirm the remaining 2 blocks. </span>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing_waiting@2x.png" v-if="full_state===1" class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing@2x.png" v-else-if="full_state===2" class="inscript_step_img demo" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state>2&&full_state!=9' class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state===0' class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <span>Inscribing</span>
              <div class="inscript_step_info_bing">
                <span class="inscript_step_info_dec">Confirm the remaining 2 blocks.</span>
              </div>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing_waiting@2x.png" v-if="full_state===1" class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing_waiting@2x.png" v-else-if="full_state===2" class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing@2x.png" v-else-if="full_state===3" class="inscript_step_img demo" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state>3&&full_state!=9' class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state===0' class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <span>Inscription Transfer Pending </span>
              <span class="inscript_step_info_dec">Confirm the remaining 2 blocks.</span>
            </div>
          </div>
          <div class="inscript_body_dec">If the rate is lower than the current network rate, it may take a long time to wait.</div>
          <div class="inscript_step_info_right">
            <div class="inscript_step_info_right_item">
              <span>Network rate:</span>
              <span style="margin-left:8px">{{networkRate}} sats/vB</span>
            </div>
            <div class="inscript_step_info_right_item">
              <span>Your rate:</span>
              <span style="margin-left:8px">{{yourRate}} sats/vB</span>
            </div>
          </div>
          <div class="inscript_step_info_bottom">The domain name transfer may take some time. You can close the window and check the status of the domain transfer on your wallet homepage.</div>
          <div class="inscript_button" @click="toPersonFun" v-if="full_state===4">{{pensonIndex}}(s) Check Wallet Homepage</div>
          <div class="inscript_button" @click="toPersonFun" v-else>Check Wallet Homepage</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="send_btc_boolean">
      <div class="send_btc">
        <div class="displayCom  maskheadcom" style="height: 54px;padding:0 20px">
          <span>Send BTC</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(5)">
        </div>
        <div class="send_inscript_box">
          <div class="send_btc_title">To</div>
          <input disabled v-model="sendBtcaddress" @input="jiexiFun" type="text" class="set_input" placeholder="Bitcoin address or .btc domain name">
          <div>{{jiexiAddress}}</div>
          <div class="send_btc_title">
            <span>Amount</span>
            <span class="send_btc_title_balance">Balance：{{balance}} BTC</span>
          </div>
          <input disabled v-model="sendAmount" type="text" class="set_input" placeholder="Amount">
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
            <InputNumber :min="1" v-model="gasSelectData.value" disabled class="InputNumberClass" style="width: 100%;" v-if="gasSelectData.name!='Custom'" />
            <InputNumber @on-change="changeGasInputFun" :min="1" v-model="gasSelectData.customValue" class="InputNumberClass" style="width: 100%;" v-else />
            <div v-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.slow" style="color:red">This fee is below the slow, which may lead to a long wait time for inscription.</div>
            <div v-else-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.avg" style="color:red">This fee is below the average, which may lead to a long wait time for inscription.</div>
          </div>
          <div class="inscript_button" @click="confirmFun">
            <Icon type="ios-loading" v-if="loadingBoolean" size='24' style="margin-right:5px;" color="#ffffff" class='demo-spin-icon-load' />
            <span>Confirm</span>
          </div>
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
import { InputNumber, Icon, Message, Spin, Tooltip } from 'view-ui-plus'
import { generateBitcoinAddr, formatUTXOs, formatInscriptions, sendBTCTransFun } from '../util/func/index'
import VueQrcode from '@chenfengyuan/vue-qrcode';
import apis from '../util/apis/apis'
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { copyAction } from '../util/func/index'
import { validate } from "bitcoin-address-validation";
import { signTransaction, signMessage } from "sats-connect";
import * as btc from '@scure/btc-signer';
import { hex, base64 } from '@scure/base'
const bitcoinTestnet = {
  bech32: 'tb',
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
}
const Decimal = require('decimal.js');
export default {
  components: {
    Head, Foot, InputNumber, EmptyCart, VueQrcode, Icon, Spin, Tooltip
  },
  data() {
    return {
      payResultTowBoolean: false,
      GivingMsg: "Welcome to the secure sites, btcdomains.io and btcwallet.network! Please ensure you are visiting the correct URLs: btcdomains.io and btcwallet.network. Engaging in transactions or signing activities outside of these official sites may expose your private key and put your security at risk.",
      confirmBoolean: true,
      ishasPaiBoolean: false,
      otherLoadingBoolean: false,
      isPay: 1,
      codePaidBoolean: false,
      mixpayHavePaidBoolean: false,
      balance: null,
      send_btc_boolean: false,
      loadingBoolean: false,
      gasList: [],
      sendBtcaddress: null,
      gasSelectData: {},
      jiexiAddress: null,
      sendAmount: null,
      exchangeData: null,
      pensonIndex: 20,
      promo_code: "",
      spanBoolean: false,
      cartDetail: [],
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
          name: "Xverse",
          url: require("../assets/head/connect_xverse@2x.png"),
          isSelect: false,
        },
        {
          name: "MixPay",
          url: require("../assets/order/mixpay.png"),
          isSelect: false,
        },
      ],
      paySelData: {},
      gasTotalData: {},
      btcMethors: [
        {
          name: "Transfer payment to designated address",
          type: 2,
          isSelect: true
        },
      ],
      selectBtcType: 2,
      payStatusBoolean: false,
      payResultBoolean: false,
      payIssueBoolean: false,
      inscritpBoolean: false,
      feeData: {},
      receiveAddress: null,
      monywallet: null,
      paydingBoolean: false,
      usd_value: null,
      usd_mixpay_value: null,
      stop_pay: true,
      timer: null,
      order_code: null,
      wallet_id: null,
      hasPaid: false,
      full_state: 9,
      timerMixPay: null,
      mixPayLoading: false,
      networkRate: null,
      yourRate: null,
      timerPenson: null,
      cartDetailBoolean: false
    }
  },
  destroyed() {
    clearInterval(this.timer);
    clearInterval(this.timerPenson);
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.timer);
    clearInterval(this.timerPenson);
    next()
  },
  methods: {
    todiscordFun() {
      window.open("https://discord.com/invite/btcdomain", '_blank');
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
      this.sendRealAddress = this.sendBtcaddress
      this.submitBtcTxAction()
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
      let amount = new BigNumber(this.sendAmount).toNumber();
      let one = new BigNumber(amount);
      let targetSat = one.multipliedBy(100000000);
      if (targetSat.lt(new BigNumber(1000))) {
        Message.warning("min sat you must transfer is" + 1000);
        return;
      }
      // let avail = new BigNumber(this.sendAmount);
      // if (one.gte(avail)) {
      //   Message.warning(
      //     "max value you must transfer is " + this.sendAmount + "btc"
      //   );
      //   return;
      // }
      // feeRate
      // this.spanBoolean = true
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
        Message.warning("private key must not be empty");
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
            this.send_btc_boolean = false;
            this.payStatusBoolean = true;
            localStorage.isPay = 2;
            this.isPay = 2
            Message.success("tx: " + res.data.result + " has been publiced");
          } else {
            Message.info(res.data.message);
          }
        }
      }).catch(err => {
      });
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
          feeRate: this.feeData.rate_fee,
        }
      );
      localStorage.isPay = 2;
      this.isPay = 2
      this.payStatusBoolean = true;
      Message.info("submit transaction: " + txid);
    },
    async tiggerXverseAction() {
      const signMessageOptions = {
        payload: {
          network: {
            type: "Mainnet",
          },
          address: localStorage.getItem("bitcoin_address"),
          message: this.GivingMsg,
        },
        onFinish: (response) => {
          // alert(response);
        },
        // onCancel: () => Message.info("Request canceled"),
      };
      await signMessage(signMessageOptions);
      const num = new BigNumber(this.feeData.total_fee);
      const weivalue = num.multipliedBy(100000000).toNumber()
      console.log("33333333333")
      const recipient = this.monywallet;
      tx.addOutputAddress(recipient, BigInt(200000), bitcoinTestnet)
      const psbt = tx.toPSBT(0)
      const psbtB64 = base64.encode(psbt);
      console.log(psbtB64)
      const signPsbtOptions = {
        payload: {
          network: {
            type: 'Mainnet'
          },
          message: this.GivingMsg,
          psbtBase64: psbtB64,
          broadcast: false,
          inputsToSign: [{
            address: localStorage.getItem("bitcoin_address"),
            signingIndexes: [0],
            value: weivalue
          }],
        },
        onFinish: (response) => {
          // alert(response.psbtBase64);
        },
        onCancel: () => Message.info("Request canceled"),
      };
      await signTransaction(signPsbtOptions);
      // this.statusInfoFun(3)
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
    getRateFeeFun() {
      this.spanBoolean = true;
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
              this.gasSelectData.value = this.gasList[0].value;
            }
            this.spanBoolean = false;
            this.send_btc_boolean = true;
          } else {
            this.spanBoolean = false;
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
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
    jiexiFun(value) {
      if (this.sendBtcaddress.endsWith(".btc")) {
        this.domainChangeFun(1)
      }
    },
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
              return
            }
            this.sendRealAddress = res.data.data.owner_address;
            if (!validate(this.sendRealAddress)) {
              Message.warning("to address is not valid");
              return;
            }
            if (this.sendRealAddress.indexOf('bc1p') != -1 || this.sendRealAddress.indexOf('tb1') != -1) {
              if (this.sendRealAddress.length == 62) {
                if (localStorage.walletType === 'uniSat') {
                  this.unisatAction()
                } else {
                  this.submitBtcTxAction()
                }
              } else {
                Message.error("Check the length of your Ordinals address");
                return
              }
            }
          } else {
            Message.error("the address is  error")
          }
        }
      }).catch(err => {
      });
    },
    cartDetailFun() {
      this.cartDetailBoolean = !this.cartDetailBoolean;
    },
    mixPayOpwnFun() {
      if (this.mixPayLoading) {
        return
      }
      this.mixPayLoading = true;
      this.mixPayFun();
    },
    mixPayFun() {
      let param = {};
      param.order_code = this.orderCode;
      this.$axios({
        method: "post",
        data: param,
        url: apis.mixpayApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          this.mixPayLoading = false;
          if (res.data.code === 0) {
            let data = res.data.data;
            window.open(data.pay_code, '_blank');
            this.payStatusBoolean = true
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.mixPayLoading = false;
      });
    },
    copyActionFun(type) {
      if (type === 2) {
        copyAction(this.monywallet)
      } else {
        copyAction(this.receiveAddress)
      }
    },
    toCartFun() {
      this.$router.go(-1)
    },
    choseMaskFun(index) {
      if (index === 1) {
        this.payStatusBoolean = false
      } else if (index === 2) {
        this.payResultBoolean = false;
      } else if (index === 3) {
        this.payIssueBoolean = false
      } else if (index === 4) {
        this.inscritpBoolean = false
        clearInterval(this.timerPenson);
      } else if (index === 5) {
        this.loadingBoolean = false
        this.send_btc_boolean = false
      } else if (index === 9) {
        this.payResultTowBoolean = false
      }
    },
    toPersonFun() {
      clearInterval(this.timer);
      clearInterval(this.timerPenson);
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
    orderInfoFun() {
      this.spanBoolean = true
      let param = {};
      param.order_code = this.order_code;
      this.$axios({
        method: "post",
        data: param,
        url: apis.orderInfoApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            res.data.data.showAddress = this.showAddressFun(res.data.data.out_wallet)
            this.feeData = res.data.data;
            let total_origin_service_fee = new Decimal(res.data.data.total_origin_service_fee);
            let total_promo_service_fee = new Decimal(res.data.data.total_promo_service_fee);
            let total_service_fee = new Decimal(res.data.data.total_service_fee);
            let total_promcode_fee = total_origin_service_fee.minus(total_promo_service_fee).minus(total_service_fee);
            this.feeData.total_promcode_fee = Number(total_promcode_fee.toString());
            let total_gas_fee = new Decimal(res.data.data.total_gas_fee);
            let total_additional_fee = new Decimal(res.data.data.total_additional_fee);
            let total_fee = new Decimal(res.data.data.total_fee);
            this.feeData.additional_dec = total_additional_fee.plus(total_gas_fee);
            this.feeData.total_dec = total_additional_fee.plus(total_fee);
            this.monywallet = res.data.data.receive_address;
            this.orderCode = res.data.data.order_code;
            this.receiveAddress = res.data.data.out_wallet;
            this.wallet_id = res.data.data.wallet_id;
            this.yourRate = res.data.data.rate_fee
            this.networkRate = res.data.data.fastest_fee
            localStorage.orderCode = res.data.data.order_code;
            this.cartDetail = res.data.data.domains
            let total_fee_usd = new Decimal(res.data.data.total_fee_usd);
            let total_additional_fee_usd = new Decimal(res.data.data.total_additional_fee_usd);
            this.usd_mixpay_value = total_additional_fee_usd.plus(total_fee_usd);
            this.usd_value = res.data.data.total_fee_usd;
            this.balanceFun();
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
    confirmStatusFun(type) {
      let param = {};
      param.order_code = this.order_code;
      this.$axios({
        method: "post",
        data: param,
        url: apis.confirmApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        this.statusInfoFun(type)
      }).catch(err => {
      });
    },
    confirmlunxunFun() {
      let param = {};
      param.order_code = this.order_code;
      this.$axios({
        method: "post",
        data: param,
        url: apis.confirmApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.data.code === 0) {
          // this.inscritpBoolean = true;
          // this.payStatusBoolean = false
          // localStorage.removeItem('cartList');
          // localStorage.removeItem('orderCode');
          // localStorage.removeItem('isPay');
          // this.isPay = 1;
        }
      }).catch(err => {
      });
    },
    statusInfoFun(type) {
      let param = {};
      param.order_code = this.order_code;
      this.$axios({
        method: "post",
        data: param,
        url: apis.orderInfoApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status === 200) {
          this.codePaidBoolean = false;
          this.ishasPaiBoolean = false;
          this.otherLoadingBoolean = false;
          if (res.data.code === 0) {
            this.full_state = res.data.data.full_state;
            if (this.full_state === 9) {
              if (type === 1) {
                this.payResultBoolean = true;
              } else if (type === 2) {
                this.payStatusBoolean = true;
              } else if (type === 3) {
                Message.info("No payment detected. Please ensure that you have completed the payment, or try again later.")
              } else if (type === 0) {
                this.payIssueBoolean = true;
                clearInterval(this.timer);
              }
            } else if (this.full_state === 4) {
              this.inscritpBoolean = true;
              localStorage.removeItem('cartList');
              localStorage.removeItem('orderCode');
              localStorage.removeItem('isPay');
              this.isPay = 1;
              this.timerPenson = setInterval(() => {
                this.pensonIndex--
                if (this.pensonIndex === 0) {
                  clearInterval(this.timerPenson);
                  this.toPersonFun()
                }
              }, 1000);
            } else if (this.full_state === 0 || this.full_state === 5) {
              localStorage.removeItem('cartList');
              localStorage.removeItem('orderCode');
              localStorage.removeItem('isPay');
              this.isPay = 1;
              this.toPersonFun()
            } else {
              this.inscritpBoolean = true;
              localStorage.removeItem('cartList');
              localStorage.removeItem('orderCode');
              localStorage.removeItem('isPay');
              this.isPay = 1;
            }
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.codePaidBoolean = false
      });
    },
    lunXun() {
      let param = {};
      param.order_code = this.order_code;
      this.$axios({
        method: "post",
        data: param,
        url: apis.orderInfoApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            this.full_state = res.data.data.full_state;
            if (this.full_state === 0 || this.full_state === 5) {
              localStorage.removeItem('cartList');
              localStorage.removeItem('orderCode');
              localStorage.removeItem('isPay');
              this.confirmBoolean = false
              this.isPay = 1;
              this.toPersonFun()
            } else if (this.full_state === 9) {
              this.confirmBoolean = true
            } else {
              // this.inscritpBoolean = true;
              localStorage.removeItem('cartList');
              localStorage.removeItem('orderCode');
              localStorage.removeItem('isPay');
              this.confirmBoolean = false
              this.isPay = 1;
            }
          } else {
            // Message.error(res.data.message)
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
      this.paySelData = item;
    },
    changebtcFun(item) {
      if (item.isSelect) {
        return
      }
      this.btcMethors.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.selectBtcType = item.type;
    },
    otherPayFun() {
      if (!this.stop_pay && this.paySelData.name === "BTC") {
        Message.error("balance in not enough")
        return
      }
      if (this.paySelData.name === 'UniSat') {
        this.unisatAction()
      } else if (this.paySelData.name === 'BTC') {
        this.sendBtcaddress = this.monywallet
        this.sendAmount = this.feeData.total_fee
        this.getRateFeeFun()
      } else if (this.paySelData.name === 'Xverse') {
        this.tiggerXverseAction()
      }
    },
    otherHavePayFun() {
      this.otherLoadingBoolean = true
      this.confirmStatusFun(2)
    },
    iHasPaiFun(type) {
      if (this.ishasPaiBoolean) {
        return
      }
      this.confirmStatusFun(type)
      this.ishasPaiBoolean = true
    },
    codePaidFun() {
      this.confirmStatusFun(1)
      this.codePaidBoolean = true;
    },
    openUsFun(index) {
      if (index === 1) {
        this.payStatusBoolean = false;
        this.payResultTowBoolean = true;
      } else if (index === 2) {
        this.payResultTowBoolean = true;
        this.payResultBoolean = false
      }
    },
    balanceFun() {
      this.$axios({
        method: "get",
        url: apis.balanceApi + "/" + this.receiveAddress,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            let balance = res.data.data
            this.balance = balance.amount;
            if (this.paySelData.name === 'MixPay') {
              if (balance.amount < this.feeData.total_dec) {
                this.stop_pay = false
              }
            } else {
              if (balance.amount < this.feeData.total_fee) {
                this.stop_pay = false
              }
            }
            localStorage.balance = balance.amount;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
  },
  mounted() {
    let index = 0
    this.timer = setInterval(() => {
      index++;
      this.lunXun();
      if (this.confirmBoolean) {
        this.confirmlunxunFun()
      }
      if (index === 60) {
        this.statusInfoFun(0)
      }
    }, 10000);
    let isPay = localStorage.isPay;
    if (isPay) {
      this.isPay = parseInt(isPay)
    }
    this.order_code = this.$route.query.orderCode;
    let walletType = localStorage.walletType;
    this.urlType = this.$route.query.type;
    if (this.urlType) {
      this.payStatusBoolean = true;
      this.payMethors.forEach(element => {
        if (element.name === "MixPay") {
          element.isSelect = true
          this.paySelData = element
        } else {
          element.isSelect = false
        }
      })
    } else {
      this.paySelData = this.payMethors[0]
    }
    if (walletType === "metaMask") {
      let temp = {
        name: "Wallet Balance Payment",
        type: 1,
        isSelect: false
      }
      this.btcMethors.push(temp)
    }
    this.orderInfoFun();
  },
}
    </script>
              