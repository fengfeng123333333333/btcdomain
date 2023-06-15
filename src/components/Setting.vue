<style scoped>
.setting_app {
  width: 100%;
}
.setting_head {
  width: 100%;
  height: 73px;
  padding-left: 20px;
  line-height: 73px;
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  border-radius: 8px 8px 0px 0px;
  backdrop-filter: blur(10px);
  background: white;
}
.setting_content {
  width: 100%;
  padding: 0 10px;
}
.avatar_box {
  margin: 0 auto;
  width: 580px;
  margin-top: 40px;
}
.avatar_title {
  font-size: 14px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #2e2f3e;
}
.avatar_dec {
  font-size: 13px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 10px;
}
.avatar_set {
  width: 100%;
  display: flex;
  align-items: center;
  background: #f7f7fa;
  border-radius: 8px;
  justify-content: space-between;
  padding: 30px 10px 30px 30px;
}
.avatar_set_img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.avatar_set_option {
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 13px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #4540d6;
  cursor: pointer;
}
.avatar_set_option img {
  width: 24px;
  height: 24px;
  margin-right: 6px;
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
  margin: 0 auto;
  margin-top: 80px;
  width: 580px;
}
.account_item {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2e2f3e;
  padding: 0 10px;
  border-bottom: 1px solid rgba(167, 169, 190, 0.4);
  margin-bottom: 1px;
  cursor: pointer;
}
.account_item img {
  width: 24px;
  height: 24px;
}
.export_private_box {
  width: 500px;
  height: 315px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 2rem;
}
.maskheadcom {
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  height: 65px;
  padding: 0 20px;
}
.maskheadcomImg {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.private_Key {
  margin-top: 10px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  padding: 0 20px;
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
.private_Key_title {
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #a7a9be;
  padding: 0 20px;
  margin-top: 20px;
}
.set_prime_box {
  width: 840px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 1.3rem;
  padding-bottom: 20px;
}
.set_prime_boy {
  width: 100%;
  padding: 0 20px;
  margin-top: 10px;
}
.set_prime_search {
  position: relative;
  width: 100%;
  height: 40px;
}
.set_prime_search img {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
}
.set_input {
  width: 100%;
  height: 40px;
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
.set_input:focus {
  border: 2px solid #4540d6;
}
.selectdiv {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-top: 20px;
  font-size: 13px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #4540d6;
}
.hasdomain {
  background: rgba(69, 64, 214, 0.1);
  border-radius: 2px;
}
.selectdiv img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.set_prime_table {
  margin-top: 16px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  overflow-y: auto;
}
.set_prime_table::-webkit-scrollbar {
  display: none;
}
.set_prime_item {
  width: 100%;
  height: 64px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.set_prime_item_left {
  display: flex;
  align-items: center;
}
.set_prime_item_left img {
  width: 44px;
  height: 44px;
  margin-right: 10px;
}
.set_prime_item_left_dec {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
.set_prime_item_left_dec_inf {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.set_prime_item_right {
  width: 16px;
  height: 16px;
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
.set_avatar_item {
  width: 280px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #d5d6e0;
  padding: 10px;
  margin-right: 16px;
  margin-bottom: 20px;
}
.set_avatar_item img {
  width: 100%;
  height: 260px;
}
.set_avatar_item_dec {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
.set_avatar_table {
  margin-top: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.set_avatar_item:nth-child(3n) {
  margin-right: 0;
}
.set_avatar_box {
  width: 920px;
  margin-top: 0;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.maskScroll {
  overflow: hidden;
  overflow-y: auto;
}
.set_prime_item_sel {
  background: #f6f6fc;
  border-radius: 8px;
  border: 2px solid #4540d6;
}
.domain_name {
  font-size: 18px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.avaterImg {
  width: 120px;
  height: 120px;
}
</style>
<template>
  <div class="setting_app">
    <div class="setting_head">Setting</div>
    <div class="setting_content">
      <Tabs value="Profile">
        <TabPane label="Profile" name="Profile">
          <div class="avatar_box">
            <div class="avatar_title">Avatar</div>
            <div class="avatar_dec">Set your profile picture as the img-type inscription you own.</div>
            <div class="avatar_set">
              <img :src="personData.domain_img" alt="" class="avatar_set_img" v-if="personData.content_url&&personData.content_url.length<3">
              <img src="https://app.btcdomains.io/images/assets/avater_def@2x.png" alt="" class="avaterImg" v-else>
              <div class="avatar_set_option" @click="openmaskFun(1)" :class="{unisatGray:unisatPriver}">
                <img src="../assets/person/icon_edit_p@2x.png" alt="">
                <span>Set Avatar</span>
              </div>
            </div>
          </div>
          <div class="avatar_box" style="margin-top:10px">
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
          <!-- <div class="setting_save">Save</div> -->
        </TabPane>
        <TabPane label="Account" name="Account">
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
        </TabPane>
      </Tabs>
    </div>
    <div class="mask maskScroll" v-if="set_avatar_boolean ">
      <div class="set_avatar_box">
        <div class="displayCom  maskheadcom">
          <span>Set Avatar </span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(1)">
        </div>
        <div class="private_Key">Choose an img-type inscription to set as your profile picture.</div>
        <div class="set_prime_boy">
          <div class="set_prime_search">
            <input @keyup.enter="searchFun" v-model="avatar" type="text" class="set_input" placeholder="Search by domain name">
            <img src="../assets/person/icon_44px_search_gray@2x.png" alt="">
          </div>
          <div class="selectdiv" :class="{hasdomain:selectData}">
            <img src="../assets/order/icon_ok_p@2x.png" alt="" v-if="selectData">
            <span v-if="selectData">Choose {{selectData.name}}</span>
          </div>
          <div class="set_avatar_table">
            <div class="set_avatar_item" @click='chooseAvatarFun(item)' v-for="(item,index) in domainList" :key="index" :class="{set_prime_item_sel:item.isSelect}">
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
        <div class="private_Key">You can choose one of your domain names as your main domain name</div>
        <div class="set_prime_boy">
          <div class="set_prime_search">
            <input @keyup.enter="searchFun" v-model="domainName" type="text" class="set_input" placeholder="Search by domain name">
            <img src="../assets/person/icon_44px_search_gray@2x.png" alt="">
          </div>
          <div class="selectdiv" :class="{hasdomain:selectData}">
            <img src="../assets/order/icon_ok_p@2x.png" alt="" v-if="selectData">
            <span v-if="selectData">Choose {{selectData.domain}}</span>
          </div>
          <div class="set_prime_table">
            <div class="set_prime_item" @click='chooseDomainFun(item)' v-for="(item,index) in domainList" :key="index" :class="{set_prime_item_sel:item.isSelect}">
              <div class="set_prime_item_left">
                <img :src="item.domain_img" alt="">
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
          <img src="../assets/cart/16px_icon_copy@2x.png" alt="">
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
export default {
  components: {
    Tabs, TabPane, Page, Spin
  },
  data() {
    return {
      unisatPriver: false,
      spanBoolean: false,
      monywallet: null,
      export_private_boolean: false,
      set_prime_boolean: false,
      set_avatar_boolean: false,
      domainName: null,
      selectData: null,
      domainList: [],
      avatarList: [
        {
          name: "Bitcoin Frog #4",
          isSelect: false
        }, {
          name: "Bitcoin Frog #4",
          isSelect: false
        },
        {
          name: "Bitcoin Frog #4",
          isSelect: false
        },
        {
          name: "Bitcoin Frog #4",
          isSelect: false
        },
        {
          name: "Bitcoin Frog #4",
          isSelect: false
        }
      ],
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
    chooseDomainFun(item) {
      if (item.isSelect) {
        return
      }
      this.domainList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.selectData = item;
    },
    chooseAvatarFun(item) {
      if (item.isSelect) {
        return
      }
      this.avatarList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      this.selectData = item;
    },
    choseMaskFun(index) {
      if (index === 1) {
        this.set_avatar_boolean = false
      } else if (index === 2) {
        this.set_prime_boolean = false
      } else if (index === 3) {
        this.export_private_boolean = false
      }
    },
    openmaskFun(index) {
      if (index === 1) {
        if (this.unisatPriver) {
          return
        }
        this.addressFun("Image")
        this.set_avatar_boolean = true
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
        name: "home"
      })
    },
    searchFun() { },
    changePageFun(e) {
    },
    async confirmFun(index) {
      let signRet = "";
      let walletType = localStorage.walletType;
      if (walletType === 'metaMask') {
        let provider = new ethers.BrowserProvider(window.ethereum);
        let signer = await provider.getSigner();
        let sig = await signer.signMessage(GivingMsg);
        console.log("sigsigsig", sig)
        let seed = ethers.toUtf8Bytes(
          ethers.keccak256(ethers.toUtf8Bytes(sig))
        );
        console.log("seedseed", seed)
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
      this.domainList = []
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
            this.set_prime_boolean = true;
          } else {
            res.data.data.result.forEach(element => {
              element.isSelect = false
            })
            this.domainList = res.data.data.result;
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
    if (walletType === "uniSat") {
      this.unisatPriver = true
    } else {
      this.unisatPriver = false
    }
    this.monywallet = localStorage.bitcoin_address;
    this.public_key = localStorage.public_key;
    this.addressPersonFun()
  }
}
</script>
  
  