  
<style scoped>
.inscription_app {
  width: 100%;
}
.inscription_head {
  width: 100%;
  height: 64px;
  background: url("../assets/person/newbackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 0.2rem;
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.icon_star {
  width: 40px;
  height: 31px;
  margin-left: 7px;
}
.inscription_title {
  width: 100%;
  height: 73px;
  background: #ffffff;
  border-radius: 8px 8px 0px 0px;
  backdrop-filter: blur(10px);
  line-height: 73px;
  padding-left: 20px;
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.inscription_tab {
  width: 100%;
  position: relative;
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
.inscription_search_box {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #d5d6e0;
  border-left: 0px;
}
.inscription_search_box img {
  width: 40px;
  height: 40px;
}
.search_insription {
  flex: 1;
  height: 40px;
  border: 1px solid #d5d6e0;
  outline: 0;
  padding: 0 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
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
  justify-content: space-between;
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
.inscription_tab_list_card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 400px;
  overflow: hidden;
  overflow-y: auto;
}
.inscription_tab_list_card::-webkit-scrollbar {
  display: none;
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
  cursor: pointer;
}
.inscription_tab_item_card_option img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.inscription_tab_item_card_option_senf {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.send_inscript {
  width: 840px;
  height: 395px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 1.6rem;
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
.send_inscript_box {
  width: 100%;
  padding: 0 20px;
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
  margin-top: 32px;
}
.set_input:focus {
  border: 2px solid #4540d6;
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
.tab_item_right_option_ing {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
<template>
  <div class="inscription_app">
    <div class="inscription_head">
      <span>Beginner's guide</span>
      <img src="../assets/person/icon_stars@2x.png" alt="" class="icon_star">
    </div>
    <div class="inscription_title">Inscription</div>
    <div class="inscription_tab">
      <Tabs :value="type" @on-click="changeAddressTypefun">
        <TabPane :label="item.name" :name="item.type" v-for="(item,index) in tabList" :key="index">
          <div class="inscription_tab_box">
            <div class="inscription_search_box">
              <input type="text" @input="isInputFun" v-model="searchText" @keyup.enter="searchFun" placeholder="Search for domain name or inscription" class="search_insription">
              <img src="../assets/person/icon_44px_search_gray@2x.png" alt="">
            </div>
            <div class="inscription_tab_title">
              <span>Domain Name</span>
              <span>Option</span>
            </div>
            <div class="inscription_tab_list" v-if="listShowType===2">
              <div class="inscription_tab_item" v-for="(item,index) in inscrptList" :key="index">
                <div class="tab_item_left">
                  <div v-if="type==='Domains'">
                    <img :src="item.domain_img" alt="" v-if="item.domain_img.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                    <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                  </div>
                  <div v-else>
                    <img :src="item.detail.content" alt="" v-if="item.detail.content.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                    <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                  </div>
                  <div class="tab_item_left_dec">
                    <span v-if="type==='Domains'">{{item.domain}}</span>
                    <span class="tab_item_left_dec_type" v-if="item.number&&item.number>0">INS #{{item.number}}</span>
                    <span class="tab_item_left_dec_type" v-else>INS -</span>
                  </div>
                </div>
                <div class="tab_item_right">
                  <div class="tab_item_right_status" v-if="item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''" style="color:#EEA119;background:rgba(238,161,25,0.1)">Registering...</div>
                  <div class="tab_item_right_option" :class="{tab_item_right_option_ing:item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''}" @click="sendFun(item)">
                    <img src="../assets/person/icon_16px_send@2x.png" alt="">
                    <span>Send</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="inscription_tab_list_card" v-if="listShowType===1">
              <div class="inscription_tab_item_card" v-for="(item,index) in inscrptList" :key="index">
                <div v-if="type==='Domains'">
                  <img :src="item.domain_img" alt="" v-if="item.domain_img.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                  <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                </div>
                <div v-else>
                  <img :src="item.detail.content" alt="" v-if="item.detail.content.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                  <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                </div>
                <div class="tab_item_card">
                  <span v-if="type==='Domains'">{{item.domain}}</span>
                  <span class="tab_item_card_dec" v-if="item.number&&item.number>0">INS #{{item.number}}</span>
                  <span class="tab_item_card_dec" v-else>INS -</span>
                </div>
                <div class="inscription_tab_item_card_option_senf">
                  <div class="inscription_tab_item_card_option" :class="{tab_item_right_option_ing:item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''}" @click="sendFun(item)">
                    <img src="../assets/person/icon_16px_send@2x.png" alt="">
                    <span>Send</span>
                  </div>
                  <div class="tab_item_right_status" v-if="item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''" style="color:#EEA119;background:rgba(238,161,25,0.1)">Registering...</div>
                </div>
              </div>
            </div>
            <!-- <div class="pageBox">
              <Page :total="40" size="small" @on-change="changePageFun" />
            </div> -->
          </div>
        </TabPane>
      </Tabs>
      <div class="inscription_showtype">
        <img src="../assets/person/icon_24px_card@2x.png" alt="" @click="changeShowFun(1)">
        <img src="../assets/person/icon_24px_list@2x.png" alt="" @click="changeShowFun(2)" style="margin-left: 10px;">
      </div>
    </div>
    <div class="mask" v-if="send_inscript_boolean">
      <div class="send_inscript">
        <div class="displayCom  maskheadcom">
          <span>Inscribe State</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun">
        </div>
        <div class="send_inscript_box">
          <input @keyup.enter="searchFun" disabled v-model="btcaddress" type="text" class="set_input" placeholder="Bitcoin address or .btc domain name">
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
    <Spin size="large" fix :show="spanBoolean"></Spin>
  </div>
</template>
  
<script>
import { Tabs, TabPane, Page, InputNumber, Message, Spin } from 'view-ui-plus'
import apis from '../util/apis/apis'
const moment = require('moment');
const GivingMsg = "Welcome to the secure sites, btcdomains.io and btcwallet.network! Please ensure you are visiting the correct URLs: btcdomains.io and btcwallet.network. Engaging in transactions or signing activities outside of these official sites may expose your private key and put your security at risk."
export default {
  components: {
    Tabs, TabPane, Page, InputNumber, Spin
  },
  data() {
    return {
      address: null,
      type: "Domains",
      listShowType: 2,
      searchText: null,
      tabList: [
        {
          name: "Domains",
          type: "Domains"
        },
        {
          name: "IMG",
          type: "Image"
        },
        {
          name: "Other",
          type: "Other"
        },

      ],
      gasList: [],
      btcaddress: null,
      send_inscript_boolean: false,
      gasSelectData: {},
      inscrptList: [],
      spanBoolean: false,
      public_key: null
    }
  },
  methods: {
    changeAddressTypefun(value) {
      this.type = value
      if (value === "Image") {
        this.listShowType = 1;
      } else {
        this.listShowType = 2;
      }
      this.addressFun()
    },
    async sendFun(item) {
      if (item.state != '9' && item.state != '0' && item.state != '5' && item.state != '') {
        return
      }
      let signRet = "";
      let walletType = localStorage.walletType;
      if (walletType === 'metaMask') {
        let provider = new ethers.BrowserProvider(window.ethereum);
        let signer = await provider.getSigner();
        let sig = await signer.signMessage(GivingMsg);
        let seed = ethers.toUtf8Bytes(
          ethers.keccak256(ethers.toUtf8Bytes(sig))
        );
        let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
        let taprootChild = root.derivePath(defaultPath);
        let buf = Buffer.from(message);
        let hashBuf = bitcoin.crypto.sha256(buf);
        let signMsg = taprootChild.sign(hashBuf);
        signRet = signMsg.toString('hex')
      } else if (walletType === 'uniSat') {
        signRet = await window.unisat.signMessage(GivingMsg);
      }
      this.setDomainFun(signRet, this.type, item)
    },
    setDomainFun(signature, type, item) {
      // this.spanBoolean = true
      let param = {};
      if (type === 'Domains') {
        param.inscribe_id = "";
        param.domain = item.domain;
      } else {
        param.inscribe_id = item.id;
        param.domain = "";
      }
      param.address = this.address;
      param.signature = signature;
      param.public_key = this.public_key;
      param.sign_type = localStorage.walletType.toLowerCase()
      this.$axios({
        method: "post",
        data: param,
        url: apis.setDomainApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            if (type === 'Domains') {
              this.set_prime_boolean = false;
            } else {
              this.set_avatar_boolean = false;
            }
            Message.success("success")
            this.spanBoolean = false
          } else {
            Message.error(res.data.message)
            this.spanBoolean = false
          }
        }
      }).catch(err => {
      });
    },
    choseMaskFun() {
      this.send_inscript_boolean = false
    },
    changeGasFun(item) {
      this.gasList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.gasSelectData = item;
    },
    isInputFun() { },
    searchFun() {
      this.addressFun()
    },
    changePageFun(e) {
      console.log(e)
    },
    changeShowFun(type) {
      this.listShowType = type
    },
    goToCartFun() {
      let param = {};
      let arr = []
      let temp = {};
      temp.domain = this.btcaddress
      temp.year = 1
      param.domains = arr;
      param.out_wallet = localStorage.bitcoin_address,
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
            this.gasList = this.recommendedFeeFun(res.data.data.recommended_fee.fastestFee, res.data.data.recommended_fee.halfHourFee, res.data.data.recommended_fee.hourFee)
            this.gasSelectData = this.gasList[0];
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    recommendedFeeFun(fastestFee, halfHourFee, hourFee) {
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
      temp3.value = hourFee;
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
    confirmFun() {
      this.send_inscript_boolean = false
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
    addressFun() {
      this.inscrptList = []
      this.spanBoolean = true
      let param = {};
      param.inscribe_type = this.type;
      if (this.searchText) {
        param.address = this.searchText
      } else {
        param.address = this.address
      }
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
            res.data.data.result = res.data.data.result.sort(function (a, b) {
              let c = moment(a.detail.timestamp);
              let d = moment(b.detail.timestamp);
              return d.diff(c)
            });
            this.inscrptList = res.data.data.result;
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
  },
  mounted() {
    this.address = localStorage.bitcoin_address;
    this.public_key = localStorage.public_key;
    this.addressFun()
  },
}
</script>
  