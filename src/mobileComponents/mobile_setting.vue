<style scoped>
.setting_app {
  width: 100%;
}
.setting_content {
  width: 100%;
  padding: 0 0.2rem;
  margin-top: 0.8rem;
}
.avatar_box {
  width: 100%;
  margin-top: 0.4rem;
}
.avatar_title {
  font-size: 0.28rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
}
.avatar_dec {
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 0.2rem;
}
.avatar_set {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f7fa;
  justify-content: space-between;
  padding: 0.6rem 0;
}
.avatar_set_img {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
}
.avatar_set_option {
  height: 0.48rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.26rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #4540d6;
  cursor: pointer;
  margin-top: 0.4rem;
}
.avatar_set_option img {
  width: 0.48rem;
  height: 0.48rem;
  margin-right: 0.12rem;
}
.setting_save {
  margin: 0 auto;
  margin-top: 40px;
  width: 540px;
  text-align: center;
  line-height: 44px;
  background: #4540d6;
  box-shadow: 0px -4px 8px 0px rgba(82, 82, 102, 0.08);
  border-radius: 4px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
}
.account_box {
  margin-top: 0.4rem;
  width: 100%;
}
.account_item {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2e2f3e;
  padding: 0 0.2rem;
  border-bottom: 0.02rem solid rgba(167, 169, 190, 0.4);
  cursor: pointer;
}
.account_item img {
  width: 0.48rem;
  height: 0.48rem;
}
.export_private_box {
  width: 7.1rem;
  padding-bottom: 0.4rem;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #2e2f3e;
  margin-top: 2rem;
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
.private_Key {
  margin-top: 0.02rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  padding: 0 0.4rem;
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
  margin-top: 0.2rem;
}
.copyBoxContent {
  width: 4.62rem;
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
.private_Key_title {
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #a7a9be;
  padding: 0 0.4rem;
  margin-top: 0.4rem;
}
.set_prime_box {
  width: 7.1rem;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #2e2f3e;
  margin-top: 0.2rem;
  padding-bottom: 0.4rem;
}
.set_prime_boy {
  width: 100%;
  padding: 0 0.4rem;
  margin-top: 0.2rem;
}
.set_prime_search {
  position: relative;
  width: 100%;
  height: 0.8rem;
  margin-top: 0.2rem;
}
.set_prime_search img {
  position: absolute;
  right: 0;
  top: 0;
  width: 0.8rem;
  height: 0.8rem;
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
}
.set_input:focus {
  border: 0.02rem solid #4540d6;
}
.selectdiv {
  width: 100%;
  height: 0.72rem;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  font-size: 0.26rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #4540d6;
}
.hasdomain {
  background: rgba(69, 64, 214, 0.1);
  border-radius: 2px;
}
.selectdiv img {
  height: 0.32rem;
  width: 0.32rem;
  margin-right: 0.16rem;
}
.set_prime_table {
  margin-top: 0.4rem;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  overflow-y: auto;
}
.set_prime_table::-webkit-scrollbar {
  display: none;
}
.set_prime_item {
  width: 100%;
  height: 1.28rem;
  border-radius: 0.16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.set_prime_item_left {
  display: flex;
  align-items: center;
}
.set_prime_item_left img {
  width: 0.88rem;
  height: 0.88rem;
  margin-right: 0.2rem;
}
.set_prime_item_left_dec {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.26rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
.set_prime_item_left_dec_inf {
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.set_prime_item_right {
  width: 0.32rem;
  height: 0.32rem;
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
  text-align: center;
  line-height: 0.88rem;
  cursor: pointer;
}
.set_avatar_item {
  width: 3.08rem;
  background: #ffffff;
  border-radius: 0.16rem;
  border: 0.02rem solid #d5d6e0;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
}
.set_avatar_item img {
  width: 100%;
  height: 2.68rem;
}
.set_avatar_item_dec {
  display: flex;
  flex-direction: column;
  font-size: 0.24rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
.set_avatar_table {
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.set_avatar_box {
  width: 7.1rem;
  margin-top: 0 auto;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #2e2f3e;
  padding-bottom: 0.4rem;
  margin-top: 0.2rem;
}
.maskScroll {
  overflow: hidden;
  overflow-y: auto;
}
.set_prime_item_sel {
  background: #f6f6fc;
  border-radius: 0.16rem;
  border: 0.02rem solid #4540d6;
}
.domain_name {
  font-size: 0.36rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.avaterImg {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
}

.set_dec {
  font-size: 0.26rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
</style>
<template>
  <div class="setting_app">
    <div class="setting_content">
      <van-tabs v-model:active="tabsName">
        <van-tab title="Profile" name="Profile" v-if="!unisatPriver">
          <div class="avatar_box">
            <div class="avatar_title">Avatar</div>
            <div class="avatar_dec">Set your profile picture as the img-type inscription you own.</div>
            <div class="avatar_set">
              <img :src="personData.content_url" alt="" class="avatar_set_img" v-if="personData.content_url&&personData.content_url.length>3">
              <img src="https://app.btcdomains.io/images/assets/avater_def@2x.png" alt="" class="avaterImg" v-else>
              <div class="avatar_set_option" @click="openmaskFun(1)" :class="{unisatGray:unisatPriver}">
                <img src="../assets/person/icon_edit_p@2x.png" alt="">
                <span>Set Avatar</span>
              </div>
            </div>
          </div>
          <div class="avatar_box" style="margin-top:0.2rem">
            <div class="avatar_title">Name</div>
            <div class="avatar_dec">Set your .btc domain name that you own as your profile name.</div>
            <div class="avatar_set">
              <span class="domain_name" v-if="personData">{{personData.domain}}</span>
              <span class="domain_name" v-else></span>
              <div class="avatar_set_option" @click="openmaskFun(2)" :class="{unisatGray:unisatPriver}">
                <img src="../assets/person/icon_edit_p@2x.png" alt="">
                <span>Set Primary Domain Name</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="Account" name="Account">
          <div class="account_box">
            <div class="account_item" @click="openmaskFun(3)" :class="{unisatGray:unisatPriver}">
              <span>Export private key</span>
              <img src="../assets/person/24px_arrow_down.png" alt="">
            </div>
            <div class="account_item" @click="outLoginFun">
              <span>Disconnect wallet</span>
              <img src="../assets/person/24px_arrow_down.png" alt="">
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="mask maskScroll" v-if="set_avatar_boolean ">
      <div class="set_avatar_box">
        <div class="displayCom  maskheadcom">
          <span>Set Avatar </span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(1)">
        </div>
        <div class="set_prime_boy">
          <div class="set_dec">Choose an img-type inscription to set as your profile picture.</div>
          <div class="set_prime_search">
            <input @keyup.enter="searchFun" @input="isInputFun" v-model="searchText" type="text" class="set_input" placeholder="Search  inscription number">
            <img src="../assets/person/icon_44px_search_gray@2x.png" alt="" @click='searchFun'>
          </div>
          <div class="selectdiv" :class="{hasdomain:selectData}">
            <img src="../assets/order/icon_ok_p@2x.png" alt="" v-if="selectData">
            <span v-if="selectData">Choose {{selectData.num}}</span>
          </div>
          <div class="set_avatar_table">
            <div class="set_avatar_item" @click='chooseAvatarFun(item)' v-for="(item,index) in domainShowList" :key="index" :class="{set_prime_item_sel:item.isSelect}">
              <img :src="item.detail.content" alt="">
              <div class="set_avatar_item_dec">
                <span>{{item.domain}}</span>
                <span class="set_prime_item_left_dec_inf"> INS #{{item.number}}</span>
              </div>
            </div>
          </div>
          <!-- <div class="pageBox">
            <Page :total="40" size="small" @on-change="changePageFun" />
          </div> -->
          <div class="inscript_button" @click='confirmFun(1)'>Confirm</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="set_prime_boolean ">
      <div class="set_prime_box">
        <div class="displayCom  maskheadcom">
          <span>Set Prime Name </span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(2)">
        </div>
        <div class="set_prime_boy">
          <div class="set_dec">You can choose one of your domain names as your main domain name</div>
          <div class="set_prime_search">
            <input @keyup.enter="searchFun" @input="isInputFun" v-model="searchText" type="text" class="set_input" placeholder="Search domain name or inscription number">
            <img src="../assets/person/icon_44px_search_gray@2x.png" alt="" @click='searchFun'>
          </div>
          <div class="selectdiv" :class="{hasdomain:selectData}">
            <img src="../assets/order/icon_ok_p@2x.png" alt="" v-if="selectData">
            <span v-if="selectData">Choose {{selectData.domain}}</span>
          </div>
          <div class="set_prime_table">
            <div class="set_prime_item" @click='chooseDomainFun(item)' v-for="(item,index) in domainShowList" :key="index" :class="{set_prime_item_sel:item.isSelect}">
              <div class="set_prime_item_left">
                <img :src="item.domain_img" alt="" v-if="item.domain_img.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                <div class="set_prime_item_left_dec">
                  <span>{{item.domain}}</span>
                  <span class="set_prime_item_left_dec_inf">INS #{{item.number}}</span>
                </div>
              </div>
              <img src="../assets/person/icon_ok_p@2x.png" v-if="item.isSelect" alt="" class="set_prime_item_right">
            </div>
          </div>
          <!-- <div class="pageBox">
            <Page :total="40" size="small" @on-change="changePageFun" />
          </div> -->
          <div class="inscript_button" @click='confirmFun(2)'>Confirm</div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="export_private_boolean">
      <div class="export_private_box">
        <div class="displayCom  maskheadcom">
          <span>Export private key</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(3)">
        </div>
        <div class="private_Key">Private Key</div>
        <div class="copyBox">
          <span class="copyBoxContent">{{privKey}}</span>
          <img src="../assets/cart/16px_icon_copy@2x.png" alt="" @click='copyActionFun'>
        </div>
        <div class="private_Key_title">* Anyone who has the private key can take control your account. Please manage it properly.</div>
      </div>
    </div>
    <Spin size="large" fix :show="spanBoolean"></Spin>
  </div>
</template>
<script>
import { Tabs, TabPane, Page, Spin, Message } from 'view-ui-plus'
import apis from '../util/apis/apis'
const defaultPath = "m/86'/0'/0'/0/0";
import { ethers } from "ethers";
const GivingMsg = "Welcome to the secure sites, btcdomains.io and btcwallet.network! Please ensure you are visiting the correct URLs: btcdomains.io and btcwallet.network. Engaging in transactions or signing activities outside of these official sites may expose your private key and put your security at risk."
import BIP32Factory from "bip32";
const ecc = require('@bitcoinerlab/secp256k1');

import * as bitcoin from "bitcoinjs-lib";
import {
  Buffer
} from "buffer";
bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);
import { copyAction } from '../util/func/index'
export default {
  components: {
    Tabs, TabPane, Page, Spin
  },
  data() {
    return {
      tabsName: "Account",
      searchText: null,
      unisatPriver: false,
      spanBoolean: false,
      monywallet: null,
      export_private_boolean: false,
      set_prime_boolean: false,
      set_avatar_boolean: false,
      selectData: null,
      domainList: [],
      domainShowList: [],
      avatar: null,
      personData: {
        content_url: "",
        domain_img: null,
        domain: null
      },
      public_key: null,
      privKey: null
    }
  },
  methods: {
    copyActionFun() {
      copyAction(this.privKey)
    },
    chooseDomainFun(item) {
      if (item.isSelect) {
        return
      }
      this.domainShowList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.selectData = item;
    },
    chooseAvatarFun(item) {
      if (item.isSelect) {
        return
      }
      this.domainShowList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.selectData = item;
    },
    choseMaskFun(index) {
      this.searchText = null;
      if (index === 1) {
        this.set_avatar_boolean = false
      } else if (index === 2) {
        this.set_prime_boolean = false
      } else if (index === 3) {
        this.export_private_boolean = false
      }
    },
    openmaskFun(index) {
      this.searchText = null;
      if (index === 1) {
        if (this.unisatPriver) {
          return
        }
        this.addressFun("Image")
      } else if (index === 2) {
        if (this.unisatPriver) {
          return
        }
        this.selectData = null;
        this.addressFun("Domains")
      } else if (index === 3) {
        if (this.unisatPriver) {
          return
        }
        this.exportPrivateKey();
      }
    },
    async exportPrivateKey() {
      let walletType = localStorage.walletType;
      if (walletType === "uniSat") {
        let sig = await window.unisat.signMessage(GivingMsg);
        const seed = ethers.toUtf8Bytes(ethers.keccak256(ethers.toUtf8Bytes(sig)));
        let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
        const taprootChild = root.derivePath(defaultPath);
        const privKey = taprootChild.privateKey?.toString("hex");
        this.export_private_boolean = true
        return privKey;
      } else if (walletType === "metaMask") {
        if (typeof window.ethereum === "undefined") {
          alert("Metamask is not installed!");
          return;
        }
        let provider = new ethers.BrowserProvider(window.ethereum);
        let signer = await provider.getSigner();
        let sig = await signer.signMessage(GivingMsg);
        const seed = ethers.toUtf8Bytes(ethers.keccak256(ethers.toUtf8Bytes(sig)));
        let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
        const taprootChild = root.derivePath(defaultPath);
        const privKey = taprootChild.privateKey?.toString("hex");
        this.export_private_boolean = true
        this.privKey = privKey;
        return privKey;
      }
    },
    outLoginFun() {
      localStorage.clear();
      this.$router.push({
        name: "mobile_home"
      })
    },
    searchFun() {
      let arr = [];
      this.domainList.forEach(element => {
        if (element.domain.includes(this.searchText) || element.num.toString().includes(this.searchText)) {
          arr.push(element)
        }
      })
      this.domainShowList = arr;
    },
    isInputFun(e) {
      this.searchText = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
      if (!e.target.value) {
        this.domainShowList = this.domainList;
      }
    },
    changePageFun(e) {
    },
    async confirmFun(index) {
      if (!this.selectData) {
        Message.info("choose one of your domain names")
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
        let buf = Buffer.from(this.monywallet);
        let hashBuf = bitcoin.crypto.sha256(buf);
        let signMsg = taprootChild.sign(hashBuf);
        signRet = signMsg.toString('hex')
      } else if (walletType === 'uniSat') {
        signRet = await window.unisat.signMessage(GivingMsg);
      }
      if (index === 1) {
        this.setDomainFun(signRet, "Image")
      } else {
        this.setDomainFun(signRet, "Domains")
      }
    },
    setDomainFun(signature, type) {
      if (!this.selectData) {
        Message.success("Please select a domain")
      }
      let param = {};
      if (type === 'Domains') {
        param.inscribe_id = "";
        param.domain = this.selectData.domain;
      } else {
        param.inscribe_id = this.selectData.id;
        param.domain = "";
      }
      param.address = this.monywallet;
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
            Message.success("success");
            location.reload()
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
    addressPersonFun() {
      this.spanBoolean = true
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
            }
            this.spanBoolean = false;
          } else {
            Message.error(res.data.message)
            this.spanBoolean = false
          }
        }
      }).catch(err => {
        this.spanBoolean = false
      });
    },
    addressFun(type) {
      this.domainList = [];
      this.domainShowList = []
      this.spanBoolean = true
      let param = {};
      param.inscribe_type = type;
      param.address = this.monywallet
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
          if (type === 'Domains') {
            res.data.data.result.forEach(element => {
              element.isSelect = false
            })
            this.domainList = res.data.data.result;
            this.domainShowList = res.data.data.result;
            this.set_prime_boolean = true;
          } else {
            res.data.data.result.forEach(element => {
              element.isSelect = false
            })
            this.domainList = res.data.data.result;
            this.domainShowList = res.data.data.result;
            this.set_avatar_boolean = true;
          }
          this.spanBoolean = false
        }
      }).catch(err => {
        // Message.error(err.response.data.error.reason)
        this.spanBoolean = false
      });
    },
  },
  mounted() {
    let walletType = localStorage.walletType
    if (walletType != "metaMask") {
      this.unisatPriver = true;
      this.tabsName = "Account"
    } else {
      this.unisatPriver = false;
      this.tabsName = "Profile"
    }
    console.log(this.tabsName)
    console.log(this.unisatPriver)
    this.monywallet = localStorage.bitcoin_address;
    this.public_key = localStorage.public_key;
    this.addressPersonFun()
  }
}
</script>
  
  