  
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
  width: 228px;
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
}
@keyframes cart {
  from {
    height: 0;
  }
  to {
    height: 100px;
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
  width: 900px;
}
.inscription_tab_list {
  width: 100%;
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
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.inscription_tab_item_card {
  width: 280px;
  background: #ffffff;
  box-shadow: 0px 10px 24px 0px rgba(17, 15, 77, 0.1);
  border-radius: 8px;
  border: 1px solid #d5d6e0;
  padding: 10px;
  margin-right: 20px;
  margin-top: 20px;
}
.inscription_tab_item_card:nth-child(3n) {
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
</style>
<template>
  <div class="home_app" :class="{test:selectId===2}">

    <Head></Head>
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
                <img src="" alt="">
                <span> {{ item.city }}</span>
              </div>
              <span> {{ item.city }}</span>
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
          <input type="text" @focus.stop='onfucusFun' @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder-class="placeholderClass" placeholder="Your name / product / brand / company / industry…"
            class="searchInput" :class='{searchInputSelect:selectId===2}'>
          <img src="../assets/home/icon_search@2x.png" alt="" class="icon_search" @click="searchFun">
          <img src="../assets/home/icon_close_search@2x.png" alt="" v-show="searchStutas" class="icon_clear" @click="clearSearchFun">
        </div>
      </div>
      <div v-if="selectId===1">
        <div class="home_content" @click.stop v-show="contentShow" :class="{home_content_show:contentShow}">
          <div class="home_content_result">
            <div class="result_left">
              <span>{{resultData.dom_name}}</span>
              <div class="result_left_bottom">
                <div class="result_left_bottom_item" style="color:#4540D6;background:rgba(69,64,214,0.1)" v-if="resultData.dom_state===9">Available</div>
                <div class="result_left_bottom_item" style="color:#75749F;background:rgba(58,56,123,0.1)" v-if="resultData.dom_state===5">Registered</div>
                <div class="result_left_bottom_item" style="color:#EEA119;background:rgba(238,161,25,0.1)" v-if="resultData.dom_state===1">Registering</div>
                <div class="result_left_bottom_item" style="color:#2E2F3E;background:rgba(83,85,112,0.1)">{{resultData.fee.gas_fee}} BTC/yr</div>
              </div>
            </div>
            <div class="result_right" v-if="resultData.dom_state===9&&!resultData.isSelect" @click="addResultFun">
              <img src="../assets/home/icon_add_white@2x.png" alt="">
              <span>Add To Cart</span>
            </div>
            <img src="../assets/home/icon_ok_p@2x.png" alt="" v-if="resultData.dom_state===9&&resultData.isSelect" class="link_item_add">
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
        <div class="home_kongbai" v-show="!contentShow"></div>
      </div>
      <div v-if="selectId===2">
        <div class="inscription_tab">
          <Tabs :value="type">
            <TabPane :label="item.name+'('+item.num+')'" :name="item.type" v-for="(item,index) in tabList" :key="index">
              <div class="inscription_tab_box">
                <div class="inscription_tab_list" v-if="listShowType===2">
                  <div class="inscription_tab_item" v-for="(itemInscript,indexInscript) in inscrptList" :key="indexInscript">
                    <div class="tab_item_left">
                      <img src="../assets/person/bg@2x.png" alt="">
                      <div class="tab_item_left_dec">
                        <span>{{itemInscript.address}}.btc</span>
                        <span class="tab_item_left_dec_type">INS -</span>
                      </div>
                    </div>
                    <div class="tab_item_right">
                      <div class="tab_item_right_status">Registering…</div>
                      <div class="tab_item_right_option">
                        <img src="../assets/person/icon_16px_send@2x.png" alt="">
                        <span>Send</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="inscription_tab_list_card" v-if="listShowType===1">
                  <div class="inscription_tab_item_card">
                    <img src="../assets/person/bg@2x.png" alt="">
                    <div class="tab_item_card">
                      <span>Bitcoin Frog #3</span>
                      <span class="tab_item_card_dec">INS #354366</span>
                    </div>
                    <div class="inscription_tab_item_card_option">
                      <img src="../assets/person/icon_16px_send@2x.png" alt="">
                      <span>Send</span>
                    </div>
                  </div>
                </div>
                <div class="pageBox">
                  <Page :total="40" size="small" @on-change="changePageFun" />
                </div>
              </div>
            </TabPane>
          </Tabs>
          <div class="inscription_showtype">
            <img src="../assets/person/icon_24px_card@2x.png" alt="" @click="changeShowFun(1)">
            <img src="../assets/person/icon_24px_list@2x.png" alt="" @click="changeShowFun(2)" style="margin-left: 10px;">
          </div>
        </div>
      </div>
    </div>
    <div class="home_foot_cart" v-show="cartNum>0">
      <div class="home_cart">
        <div class="home_cart_num">{{cartNum}} Domains</div>
        <div class="home_cart_list">
          <div class="cart_item" v-for="(item,index) in cartList" :key="index">
            <span>{{item.name}}</span>
            <img src="../assets/home/16px_close_black@2x.png" alt="" @click.stop="delectcartFun(item,index)">
          </div>
        </div>
        <div class="home_cart_button" @click="topCartPageFun">
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
import { Tabs, TabPane, Page, Message } from 'view-ui-plus'
import apis from '../util/apis/apis'
// import * as bitcoin from "bitcoinjs-lib";
// import { Buffer } from "buffer";
// var bitcoinMessage = require('bitcoinjs-message')
export default {
  components: {
    Head, Foot, Tabs, TabPane, Page
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
      classOption: {
        step: 1,
        limitMoveNum: 6,
        direction: 2
      },
      list: [
        { city: "北京" },
        { city: "上海" },
        { city: "广州" },
        { city: "深圳" },
        { city: "成都" },
        { city: "成都" },
        { city: "成都" },
        { city: "成都" },
      ],
      searchText: null,
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
        isSelect: false
      },
      linkList: [
        {
          name: "1.btc",
          status: "Available",
          feegas: "0.001132 BTC/yr",
          isSelect: false
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
      ],
      cartList: [],
      cartNum: 0,
      type: "Domains",
      listShowType: 1,
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
        // {
        //   name: "Video",
        //   num: 3
        // },
        {
          name: "Other",
          type: "Other",
          num: 4
        },

      ],
      cartListlocal: [],
      inscrptList: [],
      receiveAddress: null
    }
  },
  methods: {
    addressFun() {
      let param = {};
      param.inscribe_type = this.type;
      param.address = this.searchText
      param.sign = ""
      this.$axios({
        method: "post",
        data: param,
        url: apis.addressApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            this.inscrptList = res.data.data;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    querySuccessDomainFun() {
      let param = {};
      param.size = 5
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
            // res.data.data.isSelect = false;
            // this.resultData = res.data.data;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    queryDomainFun() {
      this.contentShow = true;
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
            this.resultData = res.data.data;
          } else {
            this.contentShow = false;
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    queryMoreDomainFun() {
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
          if (res.data.code === 0) {
            // res.data.data.isSelect = false;
            // this.resultData = res.data.data;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
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
      if (this.selectId === 1) {
        this.queryDomainFun()
        this.queryMoreDomainFun()
      } else {
        this.addressFun()
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
      this.$router.push({
        name: "cart"
      })
    },
    changePageFun(e) {
      console.log(e)
    },
    changeShowFun(type) {
      this.listShowType = type
    }
  },
  mounted() {
    // window.Buffer = Buffer;
    // console.log("bitcoin.ECPair")
    // var keyPair = bitcoin.ECPair.fromWIF('L4rK1yDtCWekvXuE6oXD9jCYfFNV2cWRpVuPLBcCU2z8TrisoyY1')
    // var privateKey = keyPair.privateKey
    // var message = 'This is an example of a signed message.'

    // var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed)
    // console.log(signature.toString('base64'))
    let cartListlocal = localStorage.cartList;
    if (cartListlocal) {
      this.cartListlocal = JSON.parse(cartListlocal)
    }
    this.querySuccessDomainFun()
    document.addEventListener("click", this.outClick);
  },
  destroyed() {
    document.removeEventListener("click", this.outClick)
  }
}
</script>
      