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
  position: relative;
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
  cursor: pointer;
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
.set_option_com_cuton {
  width: 120px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid #4540d6;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  opacity: 0.3;
  cursor: not-allowed;
}
.set_options_item_cus {
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: rgba(46, 47, 62, 0.2);
  cursor: not-allowed;
}
.set_head_share {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.share_box {
  width: 380px;
  background: #ffffff;
  margin-top: 100px;
  padding: 0 20px;
  padding-bottom: 20px;
}
.share_img {
  width: 100%;
  height: 223px;
  background: url("../assets/person/card_bg@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  position: relative;
}
.share_img img {
  width: 80px;
  height: 80px;
  border: 50%;
}
.save_button {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background: #2e2f3e;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.save_button img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.iconsBox {
  position: absolute;
  top: 76px;
  left: 126px;
  width: 105px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.iconsBox img {
  width: 18px;
  height: 18px;
}
.codeShareImg {
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.jiexiError {
  color: red;
}
.website {
  margin-top: 20px;
  width: 100%;
  height: 44px;
  cursor: pointer;
}
.website img {
  width: 100%;
  height: 100%;
}
</style>
  
<template>
  <div class="person_set_app">
    <div class="set_head">
      <div class="set_avater">
        <img :src="personData.content_url" alt="" class="avaterImg" v-if="personData.content_url&&personData.content_url.length>3">
        <img src="https://app.btcdomains.io/images/assets/avater_def@2x.png" alt="" class="avaterImg" v-else>
        <img src="../assets/person/og@2x.png" v-if="ogShow" alt="" class="ogImg">
      </div>
      <div class="set_domain" v-if="personData">{{personData.domain}}</div>
      <div class="set_address">
        <span>{{showAddress}}</span>
        <img src="../assets/person/icon_16px_copy@2x.png" alt="" @click="copyActionFun">
      </div>
      <div class="set_value">{{personBalanceData.amount}} BTC</div>
      <div class="set_option">
        <div class="set_option_com" :class="{set_option_com_cuton:loginType==='custom',unisatGray:unisatPriver}" @click='openMaskFun(1)'>Send</div>
        <div class="set_option_com" style="margin-left:10px" @click='openMaskFun(2)'>Receive</div>
      </div>
      <!-- <img class="set_head_share" :class="{unisatGray:loginType==='custom'}" @click="saveFun" src="../assets/person/icon_24px_share@2x.png" alt=""> -->
    </div>
    <div class="set_options">
      <div class="set_options_item" v-for="(item,index) in optionsList" :key="index" @click="changeOptionFun(item)">
        <img :src="item.selUrl" alt="" v-if="item.isSelect&&loginType!='custom'">
        <img :src="item.norUrl" alt="" v-else-if="!item.isSelect&&loginType!='custom'">
        <img :src="item.cusUrl" alt="" v-else-if="loginType==='custom'">
        <span :class="{set_options_item_select:item.isSelect,set_options_item_cus:loginType==='custom'&&item.name!='Inscription'}">{{item.name}}</span>
      </div>
    </div>
    <div class="website" @click="toBsitePage" v-if="!unisatPriver">
      <img src="../assets/person/getbtcwebsite@2x.png" alt="">
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
          <div :class="{jiexiError:!jiexiType}">{{jiexiAddress}}</div>
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
            <InputNumber :min="1" v-model="gasSelectData.value" disabled class="InputNumberClass" style="width: 100%;" v-if="gasSelectData.name!='Custom'" />
            <InputNumber @on-change="changeGasInputFun" :min="1" v-model="gasSelectData.customValue" class="InputNumberClass" style="width: 100%;" v-else />
            <div v-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.economyFee" style="color:red">Minimun Fee：{{gasSelectData.economyFee}}sats/vB</div>
            <div v-else-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.avg">This fee is below the average, which may lead to a long wait time for inscription.</div>
          </div>
          <div class="inscript_button" @click="confirmFun" v-if="!unisatPriver">
            <Icon type="ios-loading" v-if="loadingBoolean" size='24' style="margin-right:5px;" color="#ffffff" class='demo-spin-icon-load' />
            <span>Confirm</span>
          </div>
          <div class="inscript_button unisatGray" v-else>Confirm</div>
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
          <img src="../assets/cart/16px_icon_copy@2x.png" alt="" @click="copyActionFun">
        </div>
      </div>
    </div>
    <div class="mask" v-if="save_pic_boolean">
      <div class="share_box">
        <div class="displayCom  maskheadcom" style="padding:0">
          <span>Share Picture</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(3)">
        </div>
        <div class="share_img" id='share_img'>
          <img :src="personData.content_url" alt="" class="avaterImg" referrerpolicy="no-referrer" v-if="personData.content_url&&personData.content_url.length>3">
          <img src="https://app.btcdomains.io/images/assets/avater_def@2x.png" alt="" referrerpolicy="no-referrer" class="avaterImg" v-else>
          <div class="iconsBox">
            <div v-for="(item,index) in icons" :key="index">
              <img :src="item.disurl" v-if="!item.isHeight" alt="" referrerpolicy="no-referrer">
              <img :src="item.selurl" v-else alt="" referrerpolicy="no-referrer">
            </div>
          </div>
          <div class="codeShareImg">
            <vue-qrcode :value="shareVodeUrl" :options="{ width: 70 }"></vue-qrcode>
          </div>
        </div>
        <div class="save_button" @click="savePicFun">
          <img src="../assets/person/icon_save@2x.png" alt="">
          <span> Save Picture</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InputNumber, Message, Spin, Icon } from 'view-ui-plus'
import VueQrcode from '@chenfengyuan/vue-qrcode';
import apis from '../util/apis/apis'
import { copyAction } from '../util/func/index'
import { generateBitcoinAddr, formatUTXOs, formatInscriptions, sendBTCTransFun } from '../util/func/index'
import { validate } from "bitcoin-address-validation";
import html2canvas from 'html2canvas'
import BigNumber from "bignumber.js";
import domtoimage from "dom-to-image-more";
export default {
  components: {
    InputNumber, VueQrcode, Spin, Icon
  },
  props: ["sendWalletPageType", "saveImgObj", "ogBoolean"],
  watch: {
    sendWalletPageType: {
      immediate: true,
      handler(val) {
        if (val) {
          this.pageType = val
          if (this.pageType === 1) {
            this.goToCartFun()
          }
          if (this.pageType === 2) {
            this.receive_btc_boolean = true;
          }
        }
      }
    },
    saveImgObj: {
      immediate: true,
      handler(val) {
        if (val) {
          console.log(val)
          if (val.html_count > 0 || val.text_count > 0) {
            this.icons[4].isHeight = true
          }
          if (val.video_count > 0 || val.audio_count > 0) {
            this.icons[2].isHeight = true
          }
          if (val.gif_count > 0 || val.image_count > 0) {
            this.icons[3].isHeight = true;
          }
        }
      }
    },
    ogBoolean: {
      immediate: true,
      handler(val) {
        this.ogShow = val
      }
    },
  },
  data() {
    return {
      ogShow: this.ogBoolean,
      jiexiType: false,
      shareVodeUrl: null,
      unisatPriver: false,
      loadingBoolean: false,
      pageType: this.sendWalletPageType,
      jiexiAddress: null,
      optionsList: [
        {
          selUrl: require("../assets/person/icon_24px_inscription_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_inscription_nor@2x.png"),
          cusUrl: require("../assets/person/icon_24px_inscription_sel@2x.png"),
          name: "Inscription",
          isSelect: true
        },
        {
          selUrl: require("../assets/person/icon_24px_wallet_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_wallet_nor@2x.png"),
          cusUrl: require("../assets/person/icon_24px_wallet_dis@2x.png"),
          name: "Wallet",
          isSelect: false
        },
        {
          selUrl: require("../assets/person/icon_24px_setting_sel@2x.png"),
          norUrl: require("../assets/person/icon_24px_setting_nor@2x.png"),
          cusUrl: require("../assets/person/icon_24px_setting_dis@2x.png"),
          name: "Setting",
          isSelect: false
        },
      ],
      icons: [
        {
          disurl: "https://app.btcdomains.io/images/assets/bcard/btc_dis@2x.png",
          selurl: "https://app.btcdomains.io/images/assets/bcard/btc_sel@2x.png",
          isHeight: false,
          id: 0
        },
        {
          disurl: "https://app.btcdomains.io/images/assets/bcard/avatar_dis@2x.png",
          selurl: "https://app.btcdomains.io/images/assets/bcard/avatar_sel@2x.png",
          isHeight: false,
          id: 1
        },
        {
          disurl: "https://app.btcdomains.io/images/assets/bcard/music_dis@2x.png",
          selurl: "https://app.btcdomains.io/images/assets/bcard/music_sel@2x.png",
          isHeight: false,
          id: 2
        },
        {
          disurl: "https://app.btcdomains.io/images/assets/bcard/img_dis@2x.png",
          selurl: "https://app.btcdomains.io/images/assets/bcard/img_sel@2x.png",
          isHeight: false,
          id: 3
        },
        {
          disurl: "https://app.btcdomains.io/images/assets/bcard/txt_dis@2x.png",
          selurl: "https://app.btcdomains.io/images/assets/bcard/txt_sel@2x.png",
          isHeight: false,
          id: 4
        },
      ],
      gasSelectData: {},
      send_btc_boolean: false,
      receive_btc_boolean: false,
      save_pic_boolean: false,
      sendBtcaddress: null,
      amount: null,
      gasList: [],
      monywallet: null,
      personData: {
        content_url: "",
        domain: ""
      },
      personBalanceData: {},
      showAddress: null,
      sendAmount: null,
      loginType: null,
      sendRealAddress: null
    }
  },
  methods: {
    toBsitePage() {
      this.$router.push({
        name: "bsite"
      })
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
    saveFun() {
      if (this.loginType === 'custom') {
        return
      }
      this.shareVodeUrl = "https://app.btcdomains.io/#/?search=" + this.personData.domain
      this.save_pic_boolean = true
    },
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: mime
      });
    },
    savePicFun() {
      var node = document.getElementById("share_img");
      domtoimage
        .toPng(node, { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "card.png";
          link.href = dataUrl;
          link.click();
        });
    },
    dataURLToBlob(dataurl) {//ie 图片转格式
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime })
    },
    jiexiFun(e) {
      if (this.sendBtcaddress.endsWith(".btc")) {
        this.domainChangeFun(1)
      }
      if (!e.target.value) {
        this.jiexiAddress = null;
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
              this.jiexiType = true
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
            this.jiexiAddress = "the address is  error"
            this.jiexiType = false;
            this.sendRealAddress = null;
          }
        }
      }).catch(err => {
      });
    },
    copyActionFun() {
      copyAction(this.monywallet)
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
    changeOptionFun(item) {
      if (this.loginType === 'custom') {
        return
      }
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
      if (item.name === 'Custom') {
        this.gasSelectData.customValue = this.gasSelectData.value
        this.gasSelectData.name = "Custom"
        return
      }
      this.gasSelectData.value = item.value;
      this.gasSelectData.name = item.name;
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
      if (this.sendBtcaddress.indexOf('bc1p') != -1 || this.sendBtcaddress.indexOf('tb1') != -1) {
        if (this.sendBtcaddress.length == 62) {
          this.sendRealAddress = this.sendBtcaddress;
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
      param.address = this.monywallet
      this.$axios({
        method: "post",
        url: apis.getDomainApi,
        data: param,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            if (res.data.data.length > 0) {
              this.personData = res.data.data[0];
              if (this.personData.content_url && this.personData.content_url.length > 0) {
                this.icons[1].isHeight = true
              }
            }
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    inscriptionsFun(confirm_amount) {
      this.$axios({
        method: "get",
        url: apis.inscriptionsApi + "?address=" + this.monywallet,
        headers: {
          "Content-Type": "application/json",
          'X-Client': 'UniSat Wallet'
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.message === "OK") {
            let inscriptions = res.data.result;
            let totalSatoshi = new BigNumber(0)
            inscriptions.forEach(element => {
              if (element.detail) {
                let tmp = new BigNumber(element.detail.output_value)
                totalSatoshi = totalSatoshi.plus(tmp)
              }
            });
            let amout_tmp = new BigNumber(confirm_amount);
            let amount_sat = amout_tmp.multipliedBy(100000000);
            let available_sat = amount_sat.minus(totalSatoshi);


            this.sendAmount = available_sat.div(100000000).toPrecision(8).toString();;
            this.personBalanceData.amount = available_sat.div(100000000).toPrecision(8).toString();;
            if (this.sendAmount && parseFloat(this.sendAmount) > 0) {
              this.icons[0].isHeight = true
            }
            localStorage.balance = available_sat.div(100000000).toPrecision(8).toString();;
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    balanceFun() {
      this.$axios({
        method: "get",
        url: apis.oldBalanceApi + "?address=" + this.monywallet,
        headers: {
          "Content-Type": "application/json",
          'X-Client': 'UniSat Wallet'
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.message === "OK") {
            let balance = res.data.result
            this.inscriptionsFun(balance.confirm_amount)
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
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
      this.spanBoolean = true
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
          console.log("txHex", txHex)
          // submit
          this.pushTx(txHex);
        }
      }).catch(err => {
        this.loadingBoolean = false;
        console.log(err)
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
        console.log(err)
      });
    }
  },
  mounted() {
    if (localStorage.walletType != 'metaMask') {
      this.unisatPriver = true
    }
    this.monywallet = localStorage.bitcoin_address;
    this.loginType = localStorage.walletType
    this.showAddress = this.showAddressFun(this.monywallet);
    this.addressPersonFun();
    this.balanceFun()
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
  