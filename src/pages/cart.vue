  
<style scoped>
.cart_app {
  width: 100%;
  position: relative;
}
.cart_body {
  width: 1200px;
  margin: 0 auto;
  padding-top: 190px;
}
.cart_head {
  width: 100%;
  height: 170px;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 100%);
  padding-top: 70px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
}
.cart_head_anmian {
  animation: cart_head 0.5s forwards;
}
@keyframes cart_head {
  from {
    height: 170px;
  }
  to {
    height: 590px;
  }
}
.cart_head_box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding-right: 240px;
}
.cart_head_title {
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  margin-right: 134px;
}
.search_box {
  width: 720px;
  height: 60px;
  position: relative;
}
.searchInput {
  width: 100%;
  height: 60px;
  border: 1px solid #4540d6;
  outline: 0;
  padding: 0 20px;
  font-size: 16px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 8px;
}
.searchInput::-webkit-input-placeholder {
  color: #ffffff;
}
.icon_search {
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.icon_clear {
  position: absolute;
  right: 80px;
  top: 8px;
  width: 44px;
  height: 44px;
  cursor: pointer;
}
.home_content {
  width: 1200px;
  margin: 0 auto;
  height: 0;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e6ed;
  margin-top: 2px;
  overflow: hidden;
  overflow-y: auto;
}
.home_content::-webkit-scrollbar {
  display: none;
}
.home_content_show {
  animation: searchbox 0.5s forwards;
}
@keyframes searchbox {
  from {
    height: 0px;
  }
  to {
    height: 347px;
  }
}
.home_content_result {
  width: 100%;
  height: 94px;
  background: #f9f9fc;
  border-bottom: 1px solid #4540d6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.result_left {
  font-size: 18px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.result_left_bottom {
  margin-top: 10px;
  display: flex;
}
.result_left_bottom_item {
  height: 20px;
  border-radius: 10px;
  padding: 0 5px;
  line-height: 20px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  margin-right: 10px;
}
.result_right {
  width: 154px;
  height: 44px;
  background: #4540d6;
  border-radius: 22px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  padding-left: 15px;
}
.result_right img {
  width: 24px;
  height: 24px;
  margin-right: 4px;
}
.home_content_link {
  width: 1160px;
  margin: 0 auto;
}
.link_head {
  height: 56px;
  border-bottom: 1px solid #e2e3ed;
  font-size: 13px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  line-height: 56px;
}
.link_box {
  width: 100%;
}
.link_item {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.link_item_add {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.link_item_right {
  width: 64px;
  height: 44px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link_item_right:hover {
  background: rgba(69, 64, 214, 0.06);
}
.link_more {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  line-height: 44px;
  height: 44px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  cursor: pointer;
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
  background: #ffffff;
  box-shadow: 0px 10px 24px 0px rgba(17, 15, 77, 0.1);
  border: 1px solid #d5d6e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_step_one_num {
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
.cart_step_tow {
  width: 588px;
  height: 52px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #e1e2eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #a7a9be;
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
  color: #a7a9be;
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
.cart_receive {
  width: 100%;
  height: 84px;
  background: #f7f7fa;
  border-radius: 4px;
  border: 1px solid #d5d6e0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart_receive_address {
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.address {
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_change {
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  cursor: pointer;
}
.cart_list {
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  height: 400px;
  margin-top: 20px;
}
.cart_list::-webkit-scrollbar {
  display: none;
}
.cart_list_item {
  padding: 16px 20px;
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #d5d6e0;
  margin-bottom: 10px;
}
.cart_list_item_name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_list_item_name img {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.cart_list_item_empti {
  display: flex;
  margin-top: 5px;
}
.cart_list_item_status {
  margin-top: 5px;
  height: 20px;
  background: rgba(69, 64, 214, 0.1);
  border-radius: 10px;
  padding: 0 10px;
  line-height: 20px;
}
.cart_list_item_content {
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
}
.cart_list_item_value {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
}
.cart_list_item_value img {
  margin-left: 4px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.cart_list_item_time {
  width: 112px;
  position: relative;
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
.cart_fee_anmil {
  padding: 10px;
  animation: cart_fee_anmil 0.5s forwards;
}
@keyframes cart_fee_anmil {
  from {
    height: 0px;
  }
  to {
    height: 100px;
  }
}
.cart_fee_left {
  font-size: 12px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.cart_fee_left_dec {
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-bottom: 8px;
}
.cart_fee_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.cart_fee_right_ze {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  text-decoration: line-through;
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
.cart_right_gas {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
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
  width: 98px;
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
.cart_fee_gas {
  height: 130px;
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
  text-align: center;
  line-height: 44px;
  cursor: pointer;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
}
.service_code {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 2px;
}
.promoDiv {
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.codeInput {
  width: 310px;
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
}
.codeInput:focus {
  border: 2px solid #4540d6;
}
.promoDivButton {
  width: 100px;
  height: 44px;
  background: rgba(69, 64, 214, 0.06);
  box-shadow: 0px -4px 8px 0px rgba(82, 82, 102, 0.08);
  border-radius: 4px;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  cursor: pointer;
}
</style>
    <template>
  <div class="cart_app">

    <Head :showData="receiveAddress"></Head>
    <div v-if="cartNum>0">
      <div class="cart_head" :class="{cart_head_anmian:contentShow}">
        <div class="cart_head_box">
          <span class="cart_head_title">Your Cart</span>
          <div class="search_box" @click.stop>
            <input type="text" @focus.stop='onfucusFun' @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder-class="placeholderClass"
              placeholder="Your name / product / brand / company / industry…" class="searchInput">
            <img src="../assets/cart/icon_search@2x.png" alt="" class="icon_search" @click="searchFun">
            <img src="../assets/home/icon_close_search@2x.png" alt="" v-show="searchStutas" class="icon_clear" @click="clearSearchFun">
          </div>
        </div>
        <div class="home_content" @click.stop v-show="contentShow" :class="{home_content_show:contentShow}">
          <div class="home_content_result">
            <div class="result_left">
              <span>{{resultData.name}}</span>
              <div class="result_left_bottom">
                <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)" v-if="resultData.status==='Available'">{{resultData.status}}</div>
                <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)" v-if="resultData.status==='Registered'">{{resultData.status}}</div>
                <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)" v-if="resultData.status==='Registering'">{{resultData.status}}</div>
                <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)">{{resultData.feegas}}</div>
              </div>
            </div>
            <div class="result_right" v-if="resultData.status==='Available'&&!resultData.isSelect" @click="addResultFun">
              <img src="../assets/home/icon_add_white@2x.png" alt="">
              <span>Add To Cart</span>
            </div>
            <img src="../assets/home/icon_ok_p@2x.png" alt="" v-if="resultData.status==='Available'&&resultData.isSelect" class="link_item_add">
          </div>
          <div class="home_content_link">
            <div class="link_head">More Domains</div>
            <div class="link_box">
              <div class="link_item" v-for="(item,index) in linkList" :key="index">
                <div class="result_left">
                  <span style="font-size: 16px;">{{item.name}}</span>
                  <div class="result_left_bottom">
                    <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)" v-if="item.status==='Available'">{{item.status}}</div>
                    <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)" v-if="item.status==='Registered'">{{item.status}}</div>
                    <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)" v-if="item.status==='Registering'">{{item.status}}</div>
                    <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)">{{item.feegas}}</div>
                  </div>
                </div>
                <div class="link_item_right" v-if="item.status==='Available'">
                  <img src="../assets/home/icon_add_black@2x.png" alt="" v-if="!item.isSelect" class="link_item_add" @click="addLinkFun(item)">
                  <img src="../assets/home/icon_ok_p@2x.png" alt="" v-else class="link_item_add">
                </div>
              </div>
            </div>
            <div class="link_more">More…</div>
          </div>
        </div>
      </div>
      <div class="cart_body">
        <div class="cart_step">
          <div class="cart_step_one">
            <div class="cart_step_one_num">1</div>
            <span>Check out Your Cart</span>
          </div>
          <div class="cart_step_tow">
            <div class="cart_step_tow_num">2</div>
            <span>Place Order</span>
          </div>
        </div>
        <div class="cart_content">
          <div class="cart_left">
            <div class="cart_receive">
              <div class="cart_receive_address">
                <span>Receive Address</span>
                <span class="address">{{receiveAddress}}</span>
              </div>
              <div class="cart_change" @click="changeWalletFun">Change</div>
            </div>
            <div class="cart_list" ref="cart_list">
              <div class="cart_list_item" @click.stop v-for="(item,index) in cartList" :key="index">
                <div class="cart_list_item_name">
                  <span>{{item.dom_name}}</span>
                  <img src="../assets/cart/icon_delete_sel@2x.png" alt="" @click.stop="delectcartFun(item,index)">
                </div>
                <div class="cart_list_item_empti">
                  <div class="cart_list_item_status" style="color:#4540D6;background:rgba(69,64,214,0.1)" v-if="item.dom_state===9">Available</div>
                  <div class="cart_list_item_status" style="color:#75749F;background:rgba(58,56,123,0.1)" v-if="item.dom_state===5">Registered</div>
                  <div class="cart_list_item_status" style="color:#EEA119;background:rgba(238,161,25,0.1)" v-if="item.dom_state===1">Registering</div>
                </div>
                <div class="cart_list_item_content">
                  <div class="cart_list_item_value">
                    <span v-if="item.fee">{{item.fee.total_fee}} BTC</span>
                    <img src="../assets/cart/24px_arrow_down@2x.png" alt="" @click="checkFeeFun(item)">
                  </div>
                  <div class="cart_list_item_time">
                    <span class="input_number_year">Year</span>
                    <InputNumber @on-change="changeYearFun" :min="1" v-model="item.expire_year" class="InputNumberClass" style="width: 100%;" />
                  </div>
                </div>
                <div class="cart_fee" v-if="item.isPort" :class="{cart_fee_anmil:item.isPort}">
                  <div class="cart_fee_left">
                    <span>Gas Fee</span>
                    <div class="cart_fee_left_dec">The gas fee fluctuates and is updated every 10 seconds</div>
                    <span>Service Fee</span>
                  </div>
                  <div class="cart_fee_right">
                    <span>{{item.fee.gas_fee}}</span>
                    <div>
                      <span></span>
                      <div class="cart_fee_right_ze">{{item.fee.service_fee}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart_right">
            <span class="cart_right_title">Order</span>
            <div class="cart_right_numeber display_com">
              <span>Total number</span>
              <span class="cart_right_numeber_value">{{cartNum}}</span>
            </div>
            <div class="cart_right_receivce display_com">
              <span>Receive Address</span>
              <div class="cart_right_receivce_value">
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
              <span class="input_number_year">sats/vB</span>
              <InputNumber :min="1" v-model="gasSelectData.value" class="InputNumberClass" style="width: 100%;" />
            </div>
            <div class="slow_class" v-if="gasSelectData.name==='Slow'">This fee is below the average, which may lead to a long wait time for inscription.</div>
            <div class="cart_right_gas" style="margin-top:10px">
              <img src="../assets/cart/16px_icon_gasrate@2x.png" alt="">
              <span>Promo Code</span>
            </div>
            <div class="promoDiv">
              <input v-model="codeValue" placeholder="Enter Promo Code" class="codeInput" />
              <div class="promoDivButton">Confirm</div>
            </div>
            <div class="cart_right_line"></div>
            <div class="cart_fee cart_fee_gas">
              <div class="cart_fee_left">
                <span>Total Gas Fee</span>
                <div style="margin-top:8px">
                  <span>Total Service Fee</span>
                  <div class="service_code">Service Fee Basic Discount</div>
                  <div class="service_code">Service Fee Promotion Discount</div>
                </div>
                <div style="margin-top:8px">Payable Service Fee</div>
              </div>
              <div>
                <span>{{gasTotalData.total_gas_fee}} BTC</span>
                <div class="cart_fee_gas_right">
                  <div class="cart_fee_gas_right_com">
                    <span cart_fee_right_ze>{{gasTotalData.total_service_fee}} BTC</span>
                    <div class="service_code">{{gasTotalData.total_origin_service_fee}} BTC</div>
                    <div class="service_code">{{gasTotalData.total_promo_service_fee}} BTC</div>
                  </div>
                  <div>{{gasTotalData.total_additional_fee}} BTC</div>
                </div>
              </div>
            </div>
            <div class="cart_right_line_tow"></div>
            <div class="cart_totle_value">
              <span>Total</span>
              <div class="cart_totle_value_right">
                <span>{{gasTotalData.total_fee}} BTC</span>
                <span class="cart_totle_value_right_number">{{gasTotalData.total_fee}} USDT</span>
              </div>
            </div>
            <div class="cart_order_button" @click="topayPageFun">Ready To Pay</div>
          </div>
        </div>
      </div>
      <Spin size="large" fix :show="spanBoolean"></Spin>
    </div>
    <div v-if="cartNum===0">
      <EmptyCart @addDomain="addDomainFun"></EmptyCart>
    </div>
    <Login v-if="walletTypeBoolean" @loginEnd="loginEndFun" @closemask="closeMaskFun"></Login>
    <Foot></Foot>
  </div>
</template>
          
<script>
import Head from '../components/head'
import Foot from '../components/foot'
import Login from '../components/login.vue'
import EmptyCart from '../components/emptyCart'
import { InputNumber, Message, Spin } from 'view-ui-plus'
import { validate } from 'bitcoin-address-validation';
import apis from '../util/apis/apis'
export default {
  components: {
    Head, Foot, InputNumber, EmptyCart, Spin, Login
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
      codeValue: null,
      walletTypeBoolean: false,
      searchText: null,
      searchStutas: false,
      contentShow: false,
      resultData: {
        name: "momomobile.btc",
        status: "Available",
        feegas: "0.001132 BTC/yr",
        isSelect: false
      },
      linkList: [
        {
          name: "1.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false,
        },
        {
          name: "2.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "3.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "4.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "5.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "6.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "7.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "8.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng1.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng2.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng3.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng4.btc",
          status: "Registered",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
        {
          name: "feng5.btc",
          status: "Registering",
          feegas: "0.001132 BTC/yr",
          isSelect: false
        },
      ],
      cartList: [],
      cartNum: 0,
      gasList: [],
      gasSelectData: {
        value: null,
        name: ""
      },
      gasTotalData: {
        total_gas_fee: null,
        total_service_fee: null,
        total_origin_service_fee: null,
        total_promo_service_fee: null,
        total_fee: null,
        total_additional_fee: null,
      },
      spanBoolean: false,
      showAddress: null,
      receiveAddress: null
    }
  },
  methods: {
    changeYearFun() {
      this.goToCartFun()
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
    goToCartFun() {
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
      param.out_wallet = this.receiveAddress,
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
            this.cartList = res.data.data.domains;
            this.gasList = this.recommendedFeeFun(res.data.data.recommended_fee.fastestFee, res.data.data.recommended_fee.halfHourFee, res.data.data.recommended_fee.economyFee)
            this.gasSelectData = this.gasList[0];
            this.gasTotalData.total_gas_fee = res.data.data.total_gas_fee;
            this.gasTotalData.total_service_fee = res.data.data.total_service_fee;
            this.gasTotalData.total_additional_fee = res.data.data.total_additional_fee;
            this.gasTotalData.total_promo_service_fee = res.data.data.total_promo_service_fee;
            this.gasTotalData.total_origin_service_fee = res.data.data.total_origin_service_fee;
            this.gasTotalData.total_fee = res.data.data.total_fee;
            this.spanBoolean = false
          } else {
            this.spanBoolean = false
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
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

      if (this.receiveAddress.indexOf('bc1p') != -1) {
        if (this.receiveAddress.length == 62) {
          this.$router.push({
            name: "order",
            query: {
              receiveAddress: this.receiveAddress,
              value: this.gasSelectData.value
            }
          })
        } else {
          Message.error("Check the length of your Ordinals address");
          return
        }
      }
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
        console.log("dfdfd")
        // this.contentShow = true;
      }
    },
    addLinkFun(item) {
      if (item.isSelect) {
        return
      }
      item.isSelect = true
      this.cartList.push(item);
      localStorage.cartList = JSON.stringify(this.cartList);
      this.handleScrollBottom()
    },
    addResultFun() {
      if (this.resultData.isSelect) {
        return
      }
      this.resultData.isSelect = true
      this.cartList.push(this.resultData);
      localStorage.cartList = JSON.stringify(this.cartList);
      this.handleScrollBottom()
    },
    delectcartFun(item, index) {
      this.cartList.splice(index, 1)
      localStorage.cartList = JSON.stringify(this.cartList);
      this.linkList.forEach(element => {
        if (element.name === item.name) {
          element.isSelect = false
        }
      })
      if (item.name === this.resultData.name) {
        this.resultData.isSelect = false
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
    handleScrollBottom() {
      this.$nextTick(() => {
        let scrollElem = this.$refs.cart_list;
        scrollElem.scrollTo({ top: scrollElem.scrollHeight, behavior: 'smooth' });
      });
    },
    changeWalletFun() {
      this.walletTypeBoolean = true
    },
    closeMaskFun() {
      this.walletTypeBoolean = false
    },
    loginEndFun(value) {
      this.showAddress = value;
      this.receiveAddress = localStorage.bitcoinAddr;
      this.walletTypeBoolean = false
      this.goToCartFun()
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
    if (cartListlocal) {
      this.cartNum = JSON.parse(cartListlocal).length
    }
    console.log(this.cartNum)
    if (this.cartNum > 0) {
      this.receiveAddress = localStorage.bitcoinAddr;
      this.goToCartFun();
      this.showAddress = this.showAddressFun(this.receiveAddress)
    }
    document.addEventListener("click", this.outClick);
  },
  destroyed() {
    document.removeEventListener("click", this.outClick)
  }
}
</script>
          