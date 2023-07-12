  
<style scoped>
.home_app {
  width: 100%;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 78%, #ffffff 100%);
  position: relative;
}
.test {
  height: 308px;
}
.home_body {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-top: 70px;
}
.home_head_animal {
  animation: headbox 0.2s forwards;
  overflow: hidden;
}
@keyframes headbox {
  from {
    height: 100px;
  }
  to {
    height: 0;
  }
}
.home_head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-family: Poppins-Bold, Poppins;
  font-weight: bold;
  color: #ffffff;
  margin-top: 60px;
}
.home_head img {
  width: 135px;
  height: 67px;
  margin: 0 10px;
}
.home_dec {
  margin-top: 20px;
  font-size: 20px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}
.home_lun {
  width: 100%;
  height: 34px;
  margin-top: 50px;
  overflow: hidden;
}
.seamless1 {
  width: 100%;
  height: 34px;
}
.seamless {
  width: 100%;
  height: 34px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.seamless_item {
  height: 34px;
  background: rgba(99, 106, 224, 0.5);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  font-size: 14px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #ffffff;
  margin-right: 10px;
  padding: 0 10px;
}
.seamless_item:hover {
  background: #4540d6;
  box-shadow: 0px 4px 8px 0px rgba(69, 64, 214, 0.4);
  cursor: pointer;
}
.seamless_item_status {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: AppleColorEmoji;
  color: #ffffff;
}
.seamless_item_status img {
  width: 10px;
  height: 10px;
}
.home_search {
  width: 100%;
  margin-top: 45px;
}
.search_tab {
  width: 240px;
  height: 40px;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  display: flex;
}
.search_tab_item {
  width: 120px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 16px 16px 0 0;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
}
.isSelectClass {
  color: #4540d6;
  background: #ffffff;
}
.search_box {
  width: 100%;
  height: 80px;
  position: relative;
}
.search_box_history {
  width: 100%;
  height: 0;
  background: #ffffff;
  box-shadow: 0px 10px 24px 0px rgba(17, 15, 77, 0.1);
  border-radius: 16px;
  position: absolute;
  left: 0;
  top: 82px;
  padding: 0 10px;
  animation: search_box_history 0.5s forwards;
  overflow: hidden;
  overflow-y: auto;
  z-index: 9;
}
.search_box_history::-webkit-scrollbar {
  display: none;
}
@keyframes search_box_history {
  from {
    height: 0px;
  }
  to {
    height: 200px;
  }
}
.search_box_history_head {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.search_box_history_head_item {
  display: flex;
  align-items: center;
}
.search_box_history_head_item img {
  width: 24px;
  height: 24px;
  margin-left: 2px;
}
.searchInput {
  width: 100%;
  height: 80px;
  border: 0;
  outline: 0;
  padding: 0 20px;
  font-size: 16px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  border-radius: 0 16px 16px 16px;
}
.searchInput::-webkit-input-placeholder {
  color: #a7a9be;
}
.searchInputSelect {
  background: #ffffff;
  box-shadow: 0px 10px 24px 0px rgba(17, 15, 77, 0.1);
  border-radius: 16px;
  border: 1px solid #4540d6;
}
.icon_search {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.icon_clear {
  position: absolute;
  right: 90px;
  top: 18px;
  width: 44px;
  height: 44px;
  cursor: pointer;
}
.home_content {
  width: 100%;
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
.home_kongbai {
  height: 640px;
}
.home_content_show {
  animation: searchbox 0.5s forwards;
}
@keyframes searchbox {
  from {
    height: 0px;
  }
  to {
    height: 640px;
  }
}
.home_content_result {
  width: 100%;
  height: 120px;
  background: #f9f9fc;
  border-bottom: 1px solid #4540d6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
}
.result_left {
  font-size: 22px;
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
  position: relative;
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
.home_foot_cart {
  width: 100%;
  height: 0;
  background: #ffffff;
  box-shadow: 0px -6px 14px 0px rgba(46, 47, 62, 0.1);
  animation: cart 0.2s forwards;
  position: fixed;
  bottom: 0;
  left: 0;
}
.home_foot_cart::after {
  content: "+";
  display: block;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
}
.home_foot_cart.expand::after {
  content: "-";
}
@keyframes cart {
  from {
    min-height: 0;
  }
  to {
    min-height: 100px;
  }
}
.home_cart {
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding-right: 20px;
  justify-content: space-between;
  position: relative;
}
.home_cart_num {
  widows: 130px;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.home_cart_button {
  width: 180px;
  height: 44px;
  background: #2ea449;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
}
.home_cart_button img {
  width: 24px;
  height: 24px;
}
.home_cart_list {
  position: absolute;
  top: 34px;
  left: 150px;
  width: 750px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.cart_item {
  height: 32px;
  background: rgba(235, 236, 243, 0.5);
  border-radius: 17px;
  font-size: 14px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: relative;
  animation: cartItem 1s forwards;
  margin-right: 10px;
}
@keyframes cartItem {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.cart_item img {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  cursor: pointer;
}
.inscription_tab {
  width: 100%;
  position: relative;
  margin-top: 24px;
}
.inscription_showtype {
  position: absolute;
  right: 10px;
  top: 4px;
  display: flex;
  align-items: center;
}
.inscription_showtype img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.inscription_tab_box {
  margin-top: 4px;
  width: 100%;
}
.inscription_tab_box_kong {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
}
.inscription_tab_list {
  width: 100%;
  animation: searchbox 0.5s forwards;
  overflow: hidden;
  overflow-y: auto;
  height: 0;
}
.inscription_tab_list::-webkit-scrollbar {
  display: none;
}
.inscription_tab_item {
  width: 100%;
  height: 64px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tab_item_left {
  display: flex;
  align-items: center;
}
.tab_item_left img {
  width: 44px;
  height: 44px;
}
.tab_item_left_dec {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
.tab_item_left_dec_type {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.tab_item_right {
  display: flex;
  align-items: center;
}
.tab_item_right_status {
  height: 20px;
  background: rgba(238, 161, 25, 0.1);
  border-radius: 10px;
  padding: 0 6px;
  line-height: 20px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #eea119;
}
.tab_item_right_option {
  width: 67px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #0a0a0b;
  margin-left: 48px;
  cursor: pointer;
}
.tab_item_right_option img {
  width: 16px;
  height: 16px;
}
.pageBox {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.inscription_tab_list_card {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 750px;
  overflow: hidden;
  overflow-y: auto;
}
.inscription_tab_list_card::-webkit-scrollbar {
  display: none;
}
.inscription_tab_item_card {
  width: 280px;
  height: 440px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f7f7fa;
  padding: 10px;
  margin-right: 20px;
  margin-top: 20px;
}
.inscription_tab_item_card:hover {
  border: 1px solid #d5d6e0;
  box-shadow: 0px 10px 24px 0px rgba(17, 15, 77, 0.1);
}
.inscription_tab_item_card:nth-child(4n) {
  margin-right: 0;
}
.inscription_tab_item_card img {
  width: 260px;
  height: 260px;
}
.tab_item_card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 13px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
  flex-shrink: 0;
}
.tab_item_card_dec {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.inscription_tab_item_card_option {
  margin-top: 10px;
  width: 67px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #0a0a0b;
}
.inscription_tab_item_card_option img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.Registered {
  display: flex;
  align-items: center;
}
.result_left_bottom_item_copy {
  cursor: pointer;
}
.historyItem {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.history_item {
  cursor: pointer;
  margin-top: 5px;
}
.inscription_tab_title {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 20px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.width1 {
  width: 380px;
}
.width2 {
  width: 140px;
  margin-left: 100px;
}
.width3 {
  width: 140px;
  margin-left: 50px;
}
.width4 {
  width: 140px;
  margin-left: 50px;
}
.width5 {
  width: 80px;
  margin-left: 60px;
  text-align: right;
}
.inscriptin_id_class {
  text-decoration: underline;
  cursor: pointer;
}
.inscription_tab_item_card_option_senf {
  display: flex;
}
.tab_item_card_time {
  margin-top: 15px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.tab_item_card_time_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
}
</style>
<template>
  <div class="home_app" :class="{test:selectId===2}" @click="histroycloseFun">

    <Head :loginShow="loginShow" :goTcartpage="goTcartpage" @loginShow="loginShowFun"></Head>
    <div class="home_body">
      <div :class="{home_head_animal:contentShow||selectId===2}">
        <div class="home_head">
          <span>Get Your First</span>
          <img src="../assets/home/btc.png" alt="">
          <span>Domain on Bitcoin Mainnet</span>
        </div>
        <div class="home_dec">Bitcoin native domain system empowered by Ordinals and ZK-STARK</div>
      </div>
      <div class="home_lun">
        <vue-seamless-scroll :data="list" :class-option="classOption" class="seamless1">
          <div class="seamless">
            <div v-for="(item,index) in list" :key="index" class="seamless_item">
              <div class="seamless_item_status">
                <span>🎉Registered: </span>
              </div>
              <span> {{ item.dom_name }}</span>
            </div>
          </div>
        </vue-seamless-scroll>
      </div>
      <div class="home_search">
        <div class="search_tab">
          <div class="search_tab_item" :class="{isSelectClass:item.isSelect}" v-for="(item,index) in searchTabList" :key="index" @click="changeSearchTypeFun(item)">
            {{item.text}}
          </div>
        </div>
        <div class="search_box" @click.stop>
          <input type="text" v-if="selectId===1" @focus.stop='onfucusDomainFun' @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder="Your name / product / brand / company / industry…"
            class="searchInput">
          <input type="text" v-else @focus.stop='onfucusFun' @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder="Enter a BTC address." class="searchInput"
            :class='{searchInputSelect:selectId===2}'>
          <img src="../assets/home/icon_search@2x.png" alt="" class="icon_search" @click="searchFun">
          <img src="../assets/home/icon_close_search@2x.png" alt="" v-show="searchStutas" class="icon_clear" @click="clearSearchFun">
          <div class="search_box_history" @click.stop v-if="histroyBoolean">
            <div class="search_box_history_head">
              <div class="search_box_history_head_item">
                <img src="../assets/home/icon_timehistory@2x.png" alt="">
                <span>Histroy</span>
              </div>
              <div class="search_box_history_head_item" style="cursor: pointer;" @click.stop="clearHistoryFun">
                <img src="../assets/home/icon_clear@2x.png" alt="">
                <span>Clear</span>
              </div>
            </div>
            <div class="historyItem">
              <div class="cart_item history_item" v-for="(item,index) in historyList" :key="index" @click="historyseachFun(item)">
                <span>{{item.domain}}</span>
                <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectHistroyFun(index)">
              </div>
            </div>
          </div>
          <div class="search_box_history" v-if="histroyAddressBoolean">
            <div class="search_box_history_head">
              <div class="search_box_history_head_item">
                <img src="../assets/home/icon_timehistory@2x.png" alt="">
                <span>Histroy</span>
              </div>
              <div class="search_box_history_head_item" style="cursor: pointer;" @click.stop="clearHistoryAddressFun">
                <img src="../assets/home/icon_clear@2x.png" alt="">
                <span>Clear</span>
              </div>
            </div>
            <div class="historyItem">
              <div class="cart_item history_item" v-for="(item,index) in historyAddressList" :key="index" @click="historyseachAddressFun(item)">
                <span>{{item.domain}}</span>
                <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectHistroyAddressFun(index)">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectId===1">
        <div class="home_content" @click="histroycloseFun" @click.stop v-show="contentShow" :class="{home_content_show:contentShow}">
          <div class="home_content_result">
            <div class="result_left">
              <span>{{resultData.dom_name}}</span>
              <div class="result_left_bottom">
                <div v-if="resultData.dom_state===9">
                  <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)">Available</div>
                </div>
                <div v-else-if="resultData.dom_state===0||resultData.dom_state===5" class="Registered">
                  <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)">Registered</div>
                  <div class="result_left_bottom_item result_left_bottom_item_copy" style="margin-left:8px;background:rgba(137,140,181,0.1)" @click="copyFun(resultData)">
                    <span>Owner:{{resultData.showAddress}}</span>
                    <img class="copy_img" src="../assets/home/icon_16px_copy@2x.png" alt="">
                  </div>
                  <div class="result_left_bottom_item" style="margin-left:8px;background:rgba(137,140,181,0.1)">Expiration Date:{{resultData.expire_date_show}}</div>
                  <div class="result_left_bottom_item result_left_bottom_item_copy" style="margin-left:8px;background:rgba(137,140,181,0.1)" @click="toINSFun(resultData.inscribe_id)">INS#{{resultData.number}}</div>
                </div>
                <div v-else>
                  <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)">Registering...</div>
                </div>
                <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)" v-if="resultData.dom_state===9">{{resultData.fee.total_fee}} BTC/yr</div>
              </div>
            </div>
            <div class="result_right" v-if="resultData.dom_state===9&&!resultData.isSelect" @click="addResultFun">
              <img src="../assets/home/icon_add_white@2x.png" alt="">
              <span>Add To Cart</span>
            </div>
            <img src="../assets/home/icon_ok_p@2x.png" alt="" v-if="resultData.dom_state===9&&resultData.isSelect" class="link_item_add">
            <Spin size="large" fix :show="spanResultBoolean"></Spin>
          </div>
          <div class="home_content_link">
            <div class="link_head">More Domains</div>
            <div class="link_box">
              <div class="link_item" v-for="(item,index) in linkList" :key="index">
                <div class="result_left">
                  <span style="font-size: 16px;">{{item.dom_name}}</span>
                  <div class="result_left_bottom">
                    <div v-if="item.dom_state===9">
                      <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)">Available</div>
                    </div>
                    <div v-else-if="item.dom_state===0||item.dom_state===5" class="Registered">
                      <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)">Registered</div>
                      <div class="result_left_bottom_item result_left_bottom_item_copy" style="margin-left:8px;background:rgba(137,140,181,0.1)" @click="copyFun(item)">
                        <span>Owner:{{item.showAddress}}</span>
                        <img class="copy_img" src="../assets/home/icon_16px_copy@2x.png" alt="">
                      </div>
                      <div class="result_left_bottom_item" style="margin-left:8px;background:rgba(137,140,181,0.1)">Expiration Date:{{item.expire_date_show}}</div>
                      <div class="result_left_bottom_item result_left_bottom_item_copy" style="margin-left:8px;background:rgba(137,140,181,0.1)" @click="toINSFun(item.inscribe_id)">INS#{{item.number}}</div>
                    </div>
                    <div v-else>
                      <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)">Registering</div>
                    </div>
                    <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)" v-if="item.dom_state===9">{{item.fee.total_fee}} BTC/yr</div>
                  </div>
                </div>
                <div class="link_item_right" v-if="item.dom_state==9">
                  <img src="../assets/home/icon_add_black@2x.png" alt="" v-if="!item.isSelect" class="link_item_add" @click="addLinkFun(item)">
                  <img src="../assets/home/icon_ok_p@2x.png" alt="" v-else class="link_item_add">
                </div>
              </div>
              <Spin size="large" fix :show="spanMoreBoolean"></Spin>
            </div>
            <!-- <div class="link_more">More…</div> -->
          </div>
        </div>
        <div class="home_kongbai" v-show="!contentShow"></div>
      </div>
      <div v-if="selectId===2">
        <div class="inscription_tab">
          <div v-if="addressSearchShow">
            <Tabs @on-click="changeAddressTypefun" :value="type">
              <TabPane :label="item.name" :name="item.type" v-for="(item,index) in tabList" :key="index">
                <div class="inscription_tab_box" v-if="inscrptList.length>0">
                  <div class="inscription_tab_list" v-if="listShowType===2">
                    <div class="inscription_tab_title">
                      <div class="width1">Domain Name</div>
                      <div class="width2" style="margin-left:120px">Create Date</div>
                      <div class="width3" style="margin-left:80px">Registration Date</div>
                      <div class="width4">Expiration Date</div>
                      <div class="width5">Inscription ID</div>
                    </div>
                    <div class="inscription_tab_item" v-for="(itemInscript,indexInscript) in inscrptList" :key="indexInscript">
                      <div class="tab_item_left width1">
                        <div v-if="type==='Domains'">
                          <img :src="itemInscript.domain_img" alt="" v-if="itemInscript.domain_img.length>3&&itemInscript.state=='9'||itemInscript.state=='0'||itemInscript.state=='5'||itemInscript.state==''">
                          <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                        </div>
                        <div v-else-if="type==='Image'">
                          <img :src="itemInscript.detail.content" alt="" v-if="itemInscript.detail.content.length>3&&itemInscript.state=='9'||itemInscript.state=='0'||itemInscript.state=='5'||itemInscript.state==''">
                          <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                        </div>
                        <div v-else-if="type==='Other'">
                          <img v-if="itemInscript.type==='HTML'" src="../assets/person/pic_html@2x.png" alt="">
                          <img v-if="itemInscript.type==='TEXT'" src="../assets/person/pic_txt@2x.png" alt="">
                          <img v-if="itemInscript.type==='AUDIO'" src="../assets/person/pic_mp3@2x.png" alt="">
                          <img v-if="itemInscript.type==='VIDEO'" src="../assets/person/pic_mp4@2x.png" alt="">
                        </div>
                        <div class="tab_item_left_dec">
                          <span v-if="type==='Domains'">{{itemInscript.domain}}</span>
                          <span class="tab_item_left_dec_type" v-if="itemInscript.number&&itemInscript.number>0" style="text-decoration: underline;cursor: pointer;" @click="toINSFun(itemInscript.id)">INS
                            #{{itemInscript.number}}</span>
                          <span class="tab_item_left_dec_type" v-else>INS -</span>
                        </div>
                      </div>
                      <div class="width2" style="margin-left:120px">{{itemInscript.register_date_show}}</div>
                      <div class="width3" style="margin-left:80px">{{itemInscript.register_date_show}}</div>
                      <div class="width4">{{itemInscript.expire_date_show}}</div>
                      <div class="width5 inscriptin_id_class" @click="toinscriptionFun(itemInscript)">{{itemInscript.id_show}}</div>
                    </div>
                  </div>
                  <div class="inscription_tab_list_card" v-if="listShowType===1">
                    <div class="inscription_tab_item_card" v-for="(item,index) in inscrptList" :key="index">
                      <div v-if="type==='Domains'">
                        <img :src="item.domain_img" alt="" v-if="item.domain_img.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                        <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                      </div>
                      <div v-else-if="type==='Image'">
                        <img :src="item.detail.content" alt="" v-if="item.detail.content.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                        <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                      </div>
                      <div v-else-if="type==='Other'">
                        <img v-if="item.type==='HTML'" src="../assets/person/pic_html@2x.png" alt="">
                        <img v-if="item.type==='TEXT'" src="../assets/person/pic_txt@2x.png" alt="">
                        <img v-if="item.type==='AUDIO'" src="../assets/person/pic_mp3@2x.png" alt="">
                        <img v-if="item.type==='VIDEO'" src="../assets/person/pic_mp4@2x.png" alt="">
                      </div>
                      <div class="tab_item_card">
                        <span v-if="type==='Domains'">{{item.domain}}</span>
                        <span class="tab_item_card_dec" v-if="item.number&&item.number>0" style="text-decoration: underline;cursor: pointer;" @click="toINSFun(item.id)">INS #{{item.number}}</span>
                        <span class="tab_item_card_dec" v-else>INS -</span>
                      </div>
                      <div class="inscription_tab_item_card_option_senf" v-if="item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''">
                        <div class="tab_item_right_status" style="color:#EEA119;background:rgba(238,161,25,0.1);cursor: pointer;">Registering...
                        </div>
                      </div>
                      <div class="tab_item_card" v-else>
                        <span class="tab_item_card_dec">Inscription ID</span>
                        <span class="tab_item_card_dec" @click="toinscriptionFun(item)" style="text-decoration: underline;cursor: pointer;">{{item.id_show}}</span>
                      </div>
                      <div class="tab_item_card_time">
                        <div class="tab_item_card_time_item">
                          <span>Create Date</span>
                          <span>{{item.register_date_show}}</span>
                        </div>
                        <div class="tab_item_card_time_item">
                          <span>Registration Date</span>
                          <span>{{item.register_date_show}}</span>
                        </div>
                        <div class="tab_item_card_time_item">
                          <span>Expiration Date</span>
                          <span>{{item.expire_date_show}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="pageBox">
                  <Page :total="40" size="small" @on-change="changePageFun" />
                </div> -->
                </div>
                <div class="inscription_tab_box_kong" v-else>No data yet...</div>
              </TabPane>
            </Tabs>
            <div class="inscription_showtype">
              <img src="../assets/person/icon_24px_card@2x.png" alt="" @click="changeShowFun(1)">
              <img src="../assets/person/icon_24px_list@2x.png" alt="" @click="changeShowFun(2)" style="margin-left: 10px;">
            </div>
          </div>
          <Spin size="large" fix :show="spanBoolean"></Spin>
        </div>
        <div class="home_kongbai" v-show="!addressSearchShow"></div>
      </div>
    </div>
    <div class="home_foot_cart" v-show="cartNum>0">
      <div class="home_cart">
        <div class="home_cart_num" v-if="cartNum>1">{{cartNum}} Domains</div>
        <div class="home_cart_num" v-else>{{cartNum}} Domain</div>
        <div class="home_cart_list">
          <div class="cart_item" v-for="(item,index) in cartList" :key="index">
            <span>{{item.domain}}</span>
            <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectcartFun(item,index)">
          </div>
        </div>
        <div class="home_cart_button" @click.stop="topCartPageFun">
          <img src="../assets/home/icon_cart.png" alt="">
          <span>Continue To Cart</span>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
      
<script>
import Head from '../components/head'
import Foot from '../components/foot'
import { Tabs, TabPane, Page, Message, Spin } from 'view-ui-plus'
import apis from '../util/apis/apis'
const moment = require('moment');
import { copyAction, changeStatusFun } from '../util/func/index'
import { validate } from 'bitcoin-address-validation';
Message.config({
  duration: 5
})
export default {
  components: {
    Head, Foot, Tabs, TabPane, Page, Spin
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
      goTcartpage: false,
      spanMoreBoolean: false,
      spanResultBoolean: false,
      loginShow: false,
      spanBoolean: false,
      classOption: {
        step: 0.5,
        limitMoveNum: 8,
        direction: 2
      },
      list: [],
      searchText: "",
      searchTabList: [
        {
          id: 1,
          text: "Domains",
          isSelect: true
        },
        {
          id: 2,
          text: "Address",
          isSelect: false
        },
      ],
      selectId: 1,
      searchStutas: false,
      contentShow: false,
      resultData: {
        dom_name: null,
        fee: {},
        dom_state: null,
        isSelect: false,
        owner_address: null,
        expire_date: null,
        showAddress: null,
        expire_date_show: null,
        inscribe_id: null,
        number: null
      },
      linkList: [],
      cartList: [],
      cartNum: 0,
      type: "Domains",
      listShowType: 2,
      tabList: [
        {
          name: "Domains",
          type: "Domains",
          num: 1
        },
        {
          name: "IMG",
          type: "Image",
          num: 2
        },
        {
          name: "Other",
          type: "Other",
          num: 4
        },

      ],
      cartListlocal: [],
      inscrptList: [],
      receiveAddress: null,
      addressSearchShow: false,
      historyList: [],
      histroyBoolean: false,
      historyAddressList: [],
      histroyAddressBoolean: false,
    }
  },
  methods: {
    toinscriptionFun(item) {
      if (!item.id) {
        return
      }
      let id = item.id.slice(0, item.id.length - 2);
      let url = "https://www.blockchain.com/explorer/transactions/btc/" + id;
      window.open(url, '_blank');
    },
    toINSFun(id) {
      let url = "https://ordinals.com/inscription/" + id;
      window.open(url, '_blank');
    },
    histroycloseFun() {
      this.histroyBoolean = false;
      this.histroyAddressBoolean = false;
    },
    copyFun(obj) {
      copyAction(obj.owner_address)
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
    changeAddressTypefun(value) {
      this.type = value
      if (this.searchText) {
        this.addressFun()
      }
    },
    inscriptionstype(element) {
      switch (element.detail.content_type) {
        case 'image/png':
          element.type = 'IMAGE'
          break;

        case 'image/jpg':
          element.type = 'IMAGE'
          break;

        case 'image/jpeg':
          element.type = 'IMAGE'
          break;

        case 'image/webp':
          element.type = 'IMAGE'
          break;

        case 'image/svg+xml':
          element.type = 'IMAGE'
          break;

        case 'image/gif':
          element.type = "GIF"
          break;

        case 'text/plain;charset=utf-8':
          element.type = "TEXT"
          break;

        case 'text/html':
          element.type = "HTML"
          break;

        case 'text/html;charset=utf-8':
          element.type = "HTML"
          break;

        case 'application/json':
          element.type = "TEXT"
          break;

        case 'mp3':
          element.type = "AUDIO"
          break;

        case 'mp4':
          element.type = "VIDEO"
          break;

        default:
          element.type = "OTHER"
          break;
      }
      return element
    },
    addressFun() {
      this.histroyAddressBoolean = false
      if (!this.searchText) {
        Message.error("address must not be empty")
        return
      }
      if (!validate(this.searchText)) {
        Message.error("bitcoin address is not valid")
        return
      }
      this.inscrptList = []
      this.spanBoolean = true
      let param = {};
      param.inscribe_type = this.type;
      param.address = this.searchText
      param.sign = ""
      this.$axios({
        method: "post",
        data: param,
        url: apis.inscriptListApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            res.data.data.result.forEach(element => {
              this.inscriptionstype(element)
              if (element.register_date) {
                element.register_date_show = moment(element.register_date).format("YYYY-MM-DD HH:mm:ss")
              } else {
                element.register_date_show = "-"
              }
              if (element.expire_date) {
                element.expire_date_show = moment(element.expire_date).format("YYYY-MM-DD HH:mm:ss")
              } else {
                element.expire_date_show = "-"
              }
              if (element.id && element.id.length > 10) {
                let index1 = element.id.slice(0, 4)
                let index2 = element.id.slice(element.id.length - 4)
                element.id_show = index1 + "..." + index2
              } else {
                element.id_show = "-"
              }
            })
            this.inscrptList = res.data.data.result;
            this.addressSearchShow = true;
            this.spanBoolean = false;
            let temp = {};
            temp.domain = this.searchText;
            this.historyAddressList.unshift(temp);
            this.historyAddressList = this.historyAddressList.slice(0, 20);
            localStorage.historyAddressList = JSON.stringify(this.historyAddressList);
            this.histroyAddressBoolean = false;
          } else {
            this.spanBoolean = false
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.spanBoolean = false
      });
    },
    querySuccessDomainFun() {
      let param = {};
      param.size = 20
      this.$axios({
        method: "post",
        data: param,
        url: apis.querySuccessDomainApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            this.list = res.data.data;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    queryDomainFun() {
      this.histroyBoolean = false
      this.spanResultBoolean = true;
      let param = {};
      param.domain = this.searchText + ".btc"
      this.$axios({
        method: "post",
        data: param,
        url: apis.queryDomainApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            res.data.data.isSelect = false;
            let data = res.data.data;
            data.domain = data.dom_name
            data = changeStatusFun(data);
            if (data.dom_state != 9) {
              data.showAddress = this.showAddressFun(data.owner_address)
              data.expire_date_show = moment(data.expire_date).format("YYYY-MM-DD")
            }
            this.cartList.forEach(element => {
              if (element.domain === data.domain) {
                data.isSelect = true
              }
            })
            this.resultData = data;
            let temp = {};
            temp.domain = this.searchText;
            this.historyList.unshift(temp);
            this.historyList = this.historyList.slice(0, 20);
            localStorage.historyList = JSON.stringify(this.historyList);
            this.histroyBoolean = false
            this.spanResultBoolean = false;
          } else {
            this.contentShow = false
            this.spanResultBoolean = false;
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.contentShow = false
      });
    },
    queryMoreDomainFun() {
      this.spanMoreBoolean = true
      let param = {};
      param.domain = this.searchText + ".btc"
      this.$axios({
        method: "post",
        data: param,
        url: apis.queryMoreDomainApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          let data = res.data.data;
          data.forEach(element => {
            element.domain = element.dom_name
            this.cartList.forEach(ele => {
              if (element.domain === ele.domain) {
                element.isSelect = true
              } else {
                element.isSelect = false
              }
            })
            if (element.dom_state != 9) {
              element.showAddress = this.showAddressFun(element.owner_address)
              element.expire_date_show = moment(element.expire_date).format("YYYY-MM-DD HH:mm:ss")
            }
          })
          this.linkList = res.data.data;
          this.spanMoreBoolean = false
        }
      }).catch(err => {
        this.spanMoreBoolean = false
      });
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
      if (this.selectId === 1) {
        this.addressSearchShow = false
      }
    },
    clearSearchFun() {
      this.searchStutas = false;
      this.searchText = null;
      this.contentShow = false;
      this.addressSearchShow = false
    },
    searchFun() {
      if (!this.searchText) {
        return
      }
      if (this.selectId === 1) {
        this.contentShow = true;
        this.queryDomainFun()
        this.queryMoreDomainFun()
      } else {
        this.addressFun()
      }
    },
    isInputFun(e) {
      this.searchText = e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, '');
      if (e.target.value) {
        this.searchStutas = true;
      } else {
        this.searchStutas = false;
      }
    },
    onfucusDomainFun() {
      let historyList = localStorage.historyList;
      if (historyList) {
        let arr = JSON.parse(historyList);
        let set = new Set(arr.map((item) => JSON.stringify(item)));
        this.historyList = [...set].map((item) => JSON.parse(item));
        localStorage.historyList = JSON.stringify(this.historyList)
      } else {
        return
      }
      if (historyList.length > 0) {
        this.histroyBoolean = true;
      }
    },
    onfucusFun() {
      let historyAddressList = localStorage.historyAddressList;
      if (historyAddressList) {
        let arr = JSON.parse(historyAddressList);
        let set = new Set(arr.map((item) => JSON.stringify(item)));
        this.historyAddressList = [...set].map((item) => JSON.parse(item));
        localStorage.historyAddressList = JSON.stringify(this.historyAddressList)
      } else {
        return
      }
      if (historyAddressList.length > 0) {
        this.histroyAddressBoolean = true;
      }
    },
    addLinkFun(item) {
      if (item.isSelect) {
        return
      }
      item.isSelect = true
      item.domain = item.dom_name;
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
        if (element.domain === item.domain) {
          element.isSelect = false
        }
      })
      if (item.domain === this.resultData.domain) {
        this.resultData.isSelect = false
      }
    },
    delectHistroyFun(index) {
      this.historyList.splice(index, 1);
      if (this.historyList.length === 0) {
        localStorage.removeItem("historyList")
        this.histroyBoolean = false
      } else {
        localStorage.historyList = JSON.stringify(this.historyList);
      }
    },
    delectHistroyAddressFun(index) {
      this.historyAddressList.splice(index, 1);
      if (this.historyAddressList.length === 0) {
        localStorage.removeItem("historyAddressList")
        this.histroyAddressBoolean = false
      } else {
        localStorage.historyAddressList = JSON.stringify(this.historyAddressList);
      }
    },
    clearHistoryFun() {
      localStorage.removeItem("historyList");
      this.historyList = []
      this.histroyBoolean = false
    },
    clearHistoryAddressFun() {
      localStorage.removeItem("historyAddressList");
      this.historyAddressList = []
      this.histroyAddressBoolean = false
    },
    historyseachAddressFun(item) {
      this.searchText = item.domain;
      this.addressFun()
    },
    historyseachFun(item) {
      this.searchText = item.domain;
      this.searchFun()
    },
    topCartPageFun() {
      let arr = []
      this.cartList.forEach(element => {
        let temp = {};
        temp.domain = element.dom_name;
        temp.year = 1;
        arr.push(temp)
      })
      let localCartList = arr.concat(this.cartListlocal)
      localStorage.cartList = JSON.stringify(localCartList);
      let bitcoin_address = localStorage.bitcoin_address;
      if (!bitcoin_address) {
        this.loginShow = true;
        this.goTcartpage = true;
      } else {
        this.$router.push({
          name: "cart"
        })
      }
    },
    loginShowFun(value) {
      this.loginShow = value;
    },
    changePageFun(e) {
    },
    changeShowFun(type) {
      this.listShowType = type
    }
  },
  mounted() {
    let cartListlocal = localStorage.cartList;
    if (cartListlocal) {
      this.cartListlocal = JSON.parse(cartListlocal)
    }
    this.querySuccessDomainFun()
  },
}
</script>
      