<style scoped>
.mobile_home_app {
  width: 100%;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 78%, #ffffff 100%);
  padding-top: 1.4rem;
}
.mobile_home_head {
  width: 100%;
  padding: 0 0.4rem;
  margin-top: 0.6rem;
  margin-bottom: 0.8rem;
}
.mobile_head_item {
  font-size: 0.56rem;
  font-family: Poppins-Bold, Poppins;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 0.04rem;
}
.btc {
  width: 1.76rem;
  height: 0.88rem;
}
.mobile_head_dec {
  margin-top: 0.4rem;
  font-size: 0.3rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #ffffff;
  word-break: break-all;
}
.mobile_home_menu {
  width: 4.4rem;
  height: 0.84rem;
  border-radius: 0.16rem 0.16rem 0 0;
  background: rgba(255, 255, 255, 0.14);
  display: flex;
  /* opacity: 0.14; */
}
.mobile_home_menu_item {
  width: 2.16rem;
  height: 0.76rem;
  border-radius: 0.16rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 0.76rem;
  cursor: pointer;
}
.is_sel_menu {
  background: #ffffff;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
}
.mobile_home_search_box {
  width: 100%;
  height: 1.2rem;
  position: relative;
}
.searchInput {
  width: 100%;
  height: 1.2rem;
  border: 0;
  outline: 0;
  padding: 0 0.4rem;
  font-size: 0.32rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  border-radius: 0.16rem;
}
.icon_search {
  position: absolute;
  right: 0.2rem;
  top: 0.36rem;
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.icon_clear {
  position: absolute;
  right: 0.88rem;
  top: 0.36rem;
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.home_lun {
  width: 100%;
  margin-top: 1.62rem;
  height: 0.68rem;
  overflow: hidden;
  padding: 0 0.2rem;
}
.seamless {
  width: 100%;
  height: 0.68rem;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.seamless_item {
  height: 0.68rem;
  background: rgba(99, 106, 224, 0.5);
  border-radius: 0.34rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.3rem;
  font-size: 0.28rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #ffffff;
  margin-right: 0.2rem;
}
.seamless_item_status {
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  font-family: AppleColorEmoji;
  color: #ffffff;
}
.seamless_item_status img {
  width: 0.34rem;
  height: 0.34rem;
}
.mobile_home_body {
  padding: 0 0.2rem;
  padding-bottom: 2.8rem;
}
.search_box_history {
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0.2rem 0.48rem 0 rgba(17, 15, 77, 0.1);
  border-radius: 0.16rem;
  position: absolute;
  left: 0;
  top: 1.24rem;
  padding: 0 0.2rem;
  z-index: 9;
}
.search_box_history_head {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.search_box_history_head_item {
  display: flex;
  align-items: center;
}
.search_box_history_head_item img {
  width: 0.48rem;
  height: 0.48rem;
  margin-left: 0.04rem;
}
.history_box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.history_item {
  height: 0.64rem;
  background: rgba(235, 236, 243, 0.5);
  border-radius: 0.34rem;
  font-size: 0.28rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}
.history_item img {
  width: 0.32rem;
  height: 0.32rem;
}
.home_content {
  width: 100%;
  margin-top: 0.04rem;
}
.home_content_result {
  width: 100%;
  height: 2.9rem;
  background: #ffffff;
  border-radius: 0.16rem;
  border: 0.02rem solid #e6e7f0;
  padding: 0.6rem 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.mobile_result_name {
  font-size: 0.44rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.result_left_bottom_item {
  height: 0.4rem;
  border-radius: 0.2rem;
  padding: 0 0.12rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  margin-bottom: 0.1rem;
  margin-right: 0.08rem;
}
.result_right {
  width: 3.08rem;
  height: 0.88rem;
  background: #4540d6;
  border-radius: 0.44rem;
  display: flex;
  align-items: center;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  padding-left: 0.32rem;
  position: absolute;
  bottom: 0.6rem;
  right: 0.2rem;
}
.result_right img {
  width: 0.48rem;
  height: 0.48rem;
  margin-right: 0.12rem;
}
.home_content_link {
  margin-top: 0.04rem;
  width: 100%;
  height: 10rem;
  background: #ffffff;
  border-radius: 0.16rem;
  border: 0.02rem solid #e6e7f0;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 0.2rem;
  position: relative;
}
.home_content_link::-webkit-scrollbar {
  display: none;
}
.link_head {
  height: 1rem;
  border-bottom: 0.02rem solid #e2e3ed;
  font-size: 0.26rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  line-height: 1rem;
}
.link_box {
  width: 100%;
  position: relative;
}
.link_item {
  width: 100%;
  height: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.32rem 0;
  position: relative;
}
.mobile_result_noAvalibable {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.link_item_right {
  position: absolute;
  right: 0.4rem;
  top: 0.56rem;
  width: 0.48rem;
  height: 0.48rem;
}
.link_item_right img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.mobile_result_available {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.result_item_add {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  bottom: 0.6rem;
}
.mobile_home_cart {
  width: 100%;
  padding: 0.4rem;
}
.mobile_home_cart_title {
  font-size: 0.32rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.mobile_home_cart_option {
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #8d90ab;
  margin-top: 0.2rem;
}
.home_cart_button {
  width: 3.6rem;
  height: 0.88rem;
  background: #0a0a0b;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
}
.home_cart_button img {
  width: 0.48rem;
  height: 0.48rem;
}
.home_cart_list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1.3rem;
}
.cart_item {
  height: 0.64rem;
  background: rgba(235, 236, 243, 0.5);
  border-radius: 0.34rem;
  font-size: 0.28rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  position: relative;
  animation: cartItem 1s forwards;
  margin-right: 0.2rem;
  margin-bottom: 0.1rem;
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
  width: 0.32rem;
  height: 0.32rem;
  margin-left: 0.16rem;
  cursor: pointer;
}
.link_item_add {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.inscription_tab {
  width: 100%;
  margin-top: 0.6rem;
  position: relative;
  background: white;
  animation: inscription_tab 0.2s forwards;
  overflow: hidden;
  height: 0;
}
@keyframes inscription_tab {
  from {
    height: 0;
  }
  to {
    height: 13.4rem;
  }
}
.home_head_animal {
  animation: headbox 0.2s forwards;
  overflow: hidden;
  margin-bottom: 0.4rem;
  margin-top: 0;
}
@keyframes headbox {
  from {
    height: 1rem;
  }
  to {
    height: 0;
  }
}
.inscription_tab_box {
  margin-top: 0.08rem;
  width: 100%;
  position: relative;
}
.vant_loading_box_address {
  position: relative;
}
.inscription_tab_box_kong {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8.4rem;
}
.inscription_tab_list {
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  height: 10.4rem;
}
.inscription_tab_list::-webkit-scrollbar {
  display: none;
}
.inscription_tab_list_card {
  width: 100%;
  animation: searchbox_card 0.5s forwards;
  overflow: hidden;
  overflow-y: auto;
  height: 0;
}
.inscription_tab_list::-webkit-scrollbar {
  display: none;
}
@keyframes searchbox_card {
  from {
    height: 0;
  }
  to {
    height: 10.4rem;
  }
}
.historyItem {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.inscription_showtype {
  margin: 0.2rem 0;
  display: flex;
  justify-content: flex-end;
}
.inscription_showtype img {
  width: 0.64rem;
  height: 0.64rem;
  cursor: pointer;
}
.inscription_tab_item {
  width: 100%;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
}
.inscription_tab_item_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.88rem;
}
.inscription_tab_item_head_left {
  display: flex;
  align-items: center;
}
.inscription_tab_item_head_left img {
  width: 0.88rem;
  height: 0.88rem;
}
.inscription_tab_item_head_com {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.2rem;
  height: 0.88rem;
}
.inscription_tab_item_head_com_item {
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.26rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
.inscription_tab_item_box {
  margin-top: 0.32rem;
  width: 100%;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.inscription_tab_item_box_item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.04rem;
}
.inscription_tab_item_card {
  width: 100%;
  padding: 0.4rem;
  margin-bottom: 0.2rem;
}
.inscription_tab_item_card_head {
  width: 100%;
  height: 5.9rem;
}
.inscription_tab_item_card_head img {
  width: 100%;
  height: 100%;
  margin-bottom: 0.2rem;
}
.inscription_tab_item_card_middle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  margin-top: 0.2rem;
}
.mobile_home_all {
  padding: 0;
  padding-bottom: 2.8rem;
}
.mobile_home_all_none {
  padding: 0 0.2rem;
}
.mobile_home_all_none_noe {
  margin-left: 0.2rem;
}
</style>
<template>
  <div class="mobile_home_app" @click="histroycloseFun">
    <MobileHead :loginShow="loginShow" :goTcartpage="goTcartpage" @loginShow="loginShowFun"></MobileHead>
    <div class="mobile_home_head" :class="{home_head_animal:contentShow||selectId===2}">
      <div class="mobile_head_item">
        <span>Get Your First</span>
        <img src="../assets/home/btc.png" alt="" class="btc">
      </div>
      <div class="mobile_head_item">Domain on Bitcoin</div>
      <div class="mobile_head_item">Mainnet</div>
      <div class="mobile_head_dec">Bitcoin native domain system empowered by Ordinals and ZK-STARK</div>
    </div>
    <div class="mobile_home_body" :class="{mobile_home_all:selectId===2}">
      <div class="mobile_home_menu" :class="{mobile_home_all_none:selectId===2,mobile_home_all_none_noe:selectId===2}">
        <div class="mobile_home_menu_item" :class="{is_sel_menu:item.isSelect}" v-for="(item,index) in searchTabList" :key="index" @click="changeSearchTypeFun(item)">
          {{item.text}}
        </div>
      </div>
      <div class="mobile_home_search_box" :class="{mobile_home_all_none:selectId===2}" @click.stop>
        <input type="text" v-if="selectId===1" @focus.stop='onfucusDomainFun' @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder="Your name / product / brand …" class="searchInput">
        <input type="text" v-else @focus.stop='onfucusFun' @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder="Enter a BTC address." class="searchInput"
          :class='{searchInputSelect:selectId===2}'>
        <img src="../assets/mobileHead/icon_m_search@2x.png" alt="" class="icon_search" @click="searchFun">
        <img src="../assets/mobileHead/icon_m_close_search@2x.png" alt="" v-show="searchStutas" class="icon_clear" @click="clearSearchFun">
        <div class="search_box_history" @click.stop="histroyBoolean=!histroyBoolean" v-if="histroyBoolean">
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
          <div class="history_box">
            <div class="history_item" v-for="(item,index) in historyList" :key="index" @click="historyseachFun(item)">
              <span style="margin-right:0.16rem">{{item.domain}}</span>
              <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectHistroyFun(index)">
            </div>
          </div>
        </div>
        <div class="search_box_history" @click.stop="histroyAddressBoolean=!histroyAddressBoolean" v-if="histroyAddressBoolean">
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
              <span>{{item.domainShow}}</span>
              <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectHistroyAddressFun(index)">
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectId===1">
        <div class="home_content" @click.stop v-show="contentShow">
          <div class="home_content_result">
            <span class="mobile_result_name">{{resultData.dom_name}}</span>
            <div class="mobile_result_available" v-if="resultData.dom_state===9">
              <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)">Available</div>
              <div class="result_left_bottom_item" style="margin-top:0.12rem; color:#2E2F3E;background:rgba(83,85,112,0.1)" v-if="resultData.dom_state===9">{{resultData.fee.total_fee}} BTC/yr</div>
            </div>
            <div class="mobile_result_noAvalibable" v-else-if="resultData.dom_state===0||resultData.dom_state===5">
              <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)">Registered</div>
              <div class="result_left_bottom_item xiahua" style="background:rgba(137,140,181,0.1)" @click="copyFun(resultData)">Owner:{{resultData.showAddress}}</div>
              <div class="result_left_bottom_item" style="background:rgba(137,140,181,0.1)">Expiration Date:{{resultData.expire_date_show}}</div>
              <div class="result_left_bottom_item xiahua" style="background:rgba(137,140,181,0.1)" @click="toINSFun(resultData.inscribe_id)">INS#{{resultData.number}}</div>
            </div>
            <div v-else class="mobile_result_noAvalibable">
              <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)">Registering...</div>
            </div>
            <div class="result_right" v-if="resultData.dom_state===9&&!resultData.isSelect" @click="addResultFun">
              <img src="../assets/home/icon_add_white@2x.png" alt="">
              <span>Add To Cart</span>
            </div>
            <img src="../assets/home/icon_ok_p@2x.png" alt="" v-if="resultData.dom_state===9&&resultData.isSelect" class="result_item_add">
            <div class="vant_loading_box" v-show="spanResultBoolean">
              <van-loading type="spinner" color="#1989fa" class='vant_loading' />
            </div>
          </div>
          <div class="home_content_link">
            <div class="link_head">More Domains</div>
            <div class="link_box">
              <div class="link_item" v-for="(item,index) in linkList" :key="index">
                <span style="font-size: 0.32rem">{{item.dom_name}}</span>
                <div class="mobile_result_noAvalibable" v-if="item.dom_state===9">
                  <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)">Available</div>
                  <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)" v-if="item.dom_state===9">{{item.fee.total_fee}} BTC/yr</div>
                </div>
                <div class="mobile_result_noAvalibable" v-else-if="item.dom_state===0||item.dom_state===5">
                  <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)">Registered</div>
                  <div class="result_left_bottom_item xiahua" style="background:rgba(137,140,181,0.1)" @click="copyFun(item)">Owner:{{item.showAddress}}</div>
                  <div class="result_left_bottom_item" style="background:rgba(137,140,181,0.1)">Expiration Date:{{item.expire_date_show}}</div>
                  <div class="result_left_bottom_item xiahua" style="background:rgba(137,140,181,0.1)" @click="toINSFun(item.inscribe_id)">INS#{{item.number}}</div>
                </div>
                <div v-else class="mobile_result_noAvalibable">
                  <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)">Registering</div>
                </div>
                <div class="link_item_right" v-if="item.dom_state==9">
                  <img src="../assets/home/icon_add_black@2x.png" alt="" v-if="!item.isSelect" class="link_item_add" @click="addLinkFun(item)">
                  <img src="../assets/home/icon_ok_p@2x.png" alt="" v-else class="link_item_add">
                </div>
              </div>
            </div>
            <div class="vant_loading_box" v-show="spanMoreBoolean">
              <van-loading type="spinner" color="#1989fa" class='vant_loading' />
            </div>
          </div>
        </div>
        <div class="home_kongbai" v-show="!contentShow"></div>
      </div>
      <div v-if="selectId===2">
        <div class="inscription_tab" v-if="addressSearchShow">
          <van-tabs @click-tab="changeAddressTypefun" v-model:active="type">
            <van-tab :title="item.name" :name="item.type" v-for="(item,index) in tabList" :key="index">
              <div class="vant_loading_box_address">
                <div class="inscription_showtype" v-if="inscrptList.length>0">
                  <img src="../assets/person/icon_24px_card@2x.png" alt="" @click="changeShowFun(1)">
                  <img src="../assets/person/icon_24px_list@2x.png" alt="" @click="changeShowFun(2)" style="margin-left: 0.2rem;">
                </div>
                <div class="inscription_tab_box" v-if="inscrptList.length>0">
                  <div class="inscription_tab_list" v-if="listShowType===2">
                    <div class="inscription_tab_item" v-for="(itemInscript,indexInscript) in inscrptList" :key="indexInscript">
                      <div class="inscription_tab_item_head">
                        <div class="inscription_tab_item_head_left">
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
                          <div class="inscription_tab_item_head_com">
                            <div class="inscription_tab_item_head_com_item">{{itemInscript.domain}}</div>
                            <div class="inscription_tab_item_head_com_item">Hash ID</div>
                          </div>
                        </div>
                        <div class="inscription_tab_item_head_com">
                          <div class="inscription_tab_item_head_com_item">
                            <span class="tab_item_left_dec_type" v-if="itemInscript.number&&itemInscript.number>0" style="text-decoration: underline;cursor: pointer;" @click="toINSFun(itemInscript.id)">INS
                              #{{itemInscript.number}}</span>
                            <span class="tab_item_left_dec_type" v-else>INS -</span>
                          </div>
                          <div class="inscription_tab_item_head_com_item" @click="toinscriptionFun(itemInscript)">{{itemInscript.id_show}}</div>
                        </div>
                      </div>
                      <div class="inscription_tab_item_box">
                        <div class="inscription_tab_item_box_item">
                          <span>Create Date</span>
                          <span>{{itemInscript.register_date_show}}</span>
                        </div>
                        <div class="inscription_tab_item_box_item">
                          <span>Registration Date</span>
                          <span>{{itemInscript.register_date_show}}</span>
                        </div>
                        <div class="inscription_tab_item_box_item">
                          <span>Expiration Date</span>
                          <span>{{itemInscript.expire_date_show}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="inscription_tab_list_card" v-if="listShowType===1">
                    <div class="inscription_tab_item_card" v-for="(itemInscript,index) in inscrptList" :key="index">
                      <div v-if="type==='Domains'" class="inscription_tab_item_card_head">
                        <img :src="itemInscript.domain_img" alt="" v-if="itemInscript.domain_img.length>3&&itemInscript.state=='9'||itemInscript.state=='0'||itemInscript.state=='5'||itemInscript.state==''">
                        <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                      </div>
                      <div v-else-if="type==='Image'" class="inscription_tab_item_card_head">
                        <img :src="itemInscript.detail.content" alt="" v-if="itemInscript.detail.content.length>3&&itemInscript.state=='9'||itemInscript.state=='0'||itemInscript.state=='5'||itemInscript.state==''">
                        <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                      </div>
                      <div v-else-if="type==='Other'" class="inscription_tab_item_card_head">
                        <img v-if="itemInscript.type==='HTML'" src="../assets/person/pic_html@2x.png" alt="">
                        <img v-if="itemInscript.type==='TEXT'" src="../assets/person/pic_txt@2x.png" alt="">
                        <img v-if="itemInscript.type==='AUDIO'" src="../assets/person/pic_mp3@2x.png" alt="">
                        <img v-if="itemInscript.type==='VIDEO'" src="../assets/person/pic_mp4@2x.png" alt="">
                      </div>
                      <div class="inscription_tab_item_card_middle">
                        <div class="inscription_tab_item_head_com" style="margin-left:0">
                          <div class="inscription_tab_item_head_com_item">{{itemInscript.domain}}</div>
                          <div class="inscription_tab_item_head_com_item">Hash ID</div>
                        </div>
                        <div class="inscription_tab_item_head_com" style="margin-left:0">
                          <div class="inscription_tab_item_head_com_item">
                            <span class="tab_item_left_dec_type" v-if="itemInscript.number&&itemInscript.number>0" style="text-decoration: underline;cursor: pointer;" @click="toINSFun(itemInscript.id)">INS
                              #{{itemInscript.number}}</span>
                            <span class="tab_item_left_dec_type" v-else>INS -</span>
                          </div>
                          <div class="inscription_tab_item_head_com_item" @click="toinscriptionFun(itemInscript)">{{itemInscript.id_show}}</div>
                        </div>
                      </div>
                      <div class="inscription_tab_item_box">
                        <div class="inscription_tab_item_box_item">
                          <span>Create Date</span>
                          <span>{{itemInscript.register_date_show}}</span>
                        </div>
                        <div class="inscription_tab_item_box_item">
                          <span>Registration Date</span>
                          <span>{{itemInscript.register_date_show}}</span>
                        </div>
                        <div class="inscription_tab_item_box_item">
                          <span>Expiration Date</span>
                          <span>{{itemInscript.expire_date_show}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vant_loading_box" v-show="spanBoolean">
                  <van-loading type="spinner" color="#1989fa" class='vant_loading' />
                </div>
                <div class="inscription_tab_box_kong" v-if="inscrptList.length===0">No data yet...</div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <div class="home_lun" v-if="selectId===1">
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
    </div>
    <van-action-sheet v-model:show="cartBoolean" :lock-scroll="false" :round="false" :overlay="false">
      <div class="mobile_home_cart">
        <div class="mobile_home_cart_title" v-if="cartNum>1">{{cartNum}} Domains</div>
        <div class="mobile_home_cart_title" v-else>{{cartNum}} Domain</div>
        <div class="home_cart_list">
          <div class="cart_item" v-for="(item,index) in cartList" :key="index">
            <span>{{item.domain}}</span>
            <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectcartFun(item,index)">
          </div>
        </div>
        <!-- <div class="mobile_home_cart_option">View All</div> -->
        <div class="home_cart_button" @click.stop="topCartPageFun">
          <img src="../assets/home/icon_cart.png" alt="">
          <span>Continue To Cart</span>
        </div>
      </div>
    </van-action-sheet>
    <MobileFoot></MobileFoot>
  </div>
</template>
  
<script>
import MobileHead from '@/mobileComponents/mobileHead.vue'
import MobileFoot from '@/mobileComponents/mobileFoot.vue'
import apis from '../util/apis/apis'
import { copyAction, changeStatusFun } from '../util/func/index'
const moment = require('moment');
import { validate } from 'bitcoin-address-validation';
import { showFailToast } from 'vant';
export default {
  components: {
    MobileHead, MobileFoot
  },
  watch: {
    cartList: {
      handler(newValue) {
        this.cartNum = newValue.length;
        if (this.cartNum > 0) {
          this.cartBoolean = true
        }
      },
      deep: true
    }
  },
  data() {
    return {
      cartBoolean: false,
      goTcartpage: false,
      spanMoreBoolean: false,
      spanResultBoolean: false,
      loginShow: false,
      spanBoolean: false,
      classOption: {
        step: 0.5,
        limitMoveNum: 6,
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
    loginShowFun(value) {
      this.loginShow = value;
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
            // showFailToast(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    queryDomainFun() {
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
            this.histroyBoolean = false;
            this.spanResultBoolean = false;
          } else {
            this.contentShow = false
            this.spanResultBoolean = false;
            showFailToast(res.data.message)
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
    addressFun() {
      this.addressSearchShow = true
      if (!this.searchText) {
        showFailToast("address must not be empty")
        return
      }
      if (!validate(this.searchText)) {
        showFailToast("bitcoin address is not valid")
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
            console.log("1111111111")
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
            temp.domainShow = this.showAddressFun(this.searchText);
            this.historyAddressList.unshift(temp);
            this.historyAddressList = this.historyAddressList.slice(0, 20);
            localStorage.historyAddressList = JSON.stringify(this.historyAddressList);
            this.histroyAddressBoolean = false;
          } else {
            this.spanBoolean = false
            showFailToast(res.data.message)
          }
        }
      }).catch(err => {
        this.spanBoolean = false
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
    isInputFun(e) {
      this.searchText = e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, '');
      if (e.target.value) {
        this.searchStutas = true;
      } else {
        this.searchStutas = false;
      }
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
    clearSearchFun() {
      this.searchStutas = false;
      this.searchText = null;
      this.contentShow = false;
      this.addressSearchShow = false
    },
    historyseachFun(item) {
      this.searchText = item.domain;
      this.searchFun()
    },
    histroycloseFun() {
      this.histroyBoolean = false;
      this.histroyAddressBoolean = false;
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
    delectHistroyAddressFun(index) {
      this.historyAddressList.splice(index, 1);
      if (this.historyAddressList.length === 0) {
        localStorage.removeItem("historyAddressList")
        this.histroyAddressBoolean = false
      } else {
        localStorage.historyAddressList = JSON.stringify(this.historyAddressList);
      }
    },
    copyFun(obj) {
      copyAction(obj.owner_address)
    },
    toINSFun(id) {
      let url = "https://ordinals.com/inscription/" + id;
      window.open(url, '_blank');
    },
    addResultFun() {
      if (this.resultData.isSelect) {
        return
      }
      this.resultData.isSelect = true
      this.cartList.push(this.resultData)
    },
    addLinkFun(item) {
      if (item.isSelect) {
        return
      }
      item.isSelect = true
      item.domain = item.dom_name;
      console.log(item)
      this.cartList.push(item)
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
          name: "mobile_cart"
        })
      }
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
    changeAddressTypefun(value) {
      console.log(value)
      this.type = value.name
      if (this.searchText) {
        this.addressFun()
      }
    },
    changeShowFun(type) {
      this.listShowType = type
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
    toinscriptionFun(item) {
      if (!item.id) {
        return
      }
      let id = item.id.slice(0, item.id.length - 2);
      let url = "https://www.blockchain.com/explorer/transactions/btc/" + id;
      window.open(url, '_blank');
    },
  },
  mounted() {
    let cartListlocal = localStorage.cartList;
    if (cartListlocal) {
      this.cartListlocal = JSON.parse(cartListlocal)
    }
    this.querySuccessDomainFun()
  }
}
</script>
  
  