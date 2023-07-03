<style scoped>
.maskBox {
  width: 7.1rem;
  background: #ffffff;
  border: 0.02rem solid #2e2f3e;
  padding-bottom: 0.4rem;
}
.maskhead {
  width: 100%;
  height: 1.08rem;
  padding: 0 0.4rem;
  font-size: 0.32rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.maskhead img {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.connect_dec {
  margin-top: 0.2rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  padding: 0 0.4rem;
}
.connect_list {
  margin-top: 0.2rem;
  padding: 0 0.4rem;
}
.connect_list_item {
  width: 100%;
  height: 1.28rem;
  background: #f5f5f7;
  border-radius: 0.08rem;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #090c1d;
}
.connect_list_item img {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.2rem;
}
.connect_list_item_sel {
  box-shadow: 0 0.2rem 0.48rem 0 rgba(16, 38, 92, 0.1);
  border-radius: 0.08rem;
  border: 0.02rem solid #4540d6;
  background: #f6f6fc;
}
.connect_other {
  margin-top: 0.4rem;
  width: 100%;
  padding: 0 0.4rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.connect_other_line {
  width: 2.9rem;
  height: 0.02rem;
  background: #a7a9be;
}
.enter_address {
  margin-top: 0.4rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  padding-left: 0.4rem;
}
.enter_address_box {
  margin-top: 0.08rem;
  padding: 0 0.4rem;
}
.connect_buttom {
  width: 100%;
  height: 0.88rem;
  background: rgba(69, 64, 214, 0.06);
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(82, 82, 102, 0.08);
  border-radius: 0.08rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  text-align: center;
  line-height: 0.88rem;
  cursor: pointer;
  margin-top: 0.2rem;
}
.enter_input {
  width: 100%;
  height: 0.88rem;
  border: 0.02rem solid #d5d6e0;
  border-radius: 0.08rem;
  outline: 0;
  padding: 0 0.2rem;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
</style>
<template>
  <div class="mask" @click="closeMaskFun">
    <div class="maskBox" style="margin-top:1.8rem" @click.stop>
      <div class="maskhead displayCom">
        <span>Connect Wallet</span>
        <img src="../assets/head/icon_close_dialog@2x.png" alt="" @click="closeMaskFun">
      </div>
      <div class="connect_dec">Choose how you want to connect. If you don't have a wallet, you can select a provider and create one.</div>
      <div class="connect_list">
        <div class="connect_list_item" @click="selectWalletFun(item)" :class="{connect_list_item_sel:item.isSelect}" v-for="(item,index) in walletTypeList" :key="index">
          <img :src="item.url" alt="">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div v-if="!headclickChild">
        <div class="connect_other displayCom">
          <div class="connect_other_line"></div>
          <span>or</span>
          <div class="connect_other_line"></div>
        </div>
        <div class="enter_address">Enter Receiving Address</div>
        <div class="enter_address_box">
          <input type="text" class="enter_input" v-model="receiveAddress">
          <div class="connect_buttom" :class="{unisatGray:!receiveAddress}" @click="confirmFun">Confirm</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import * as bitcoin from "bitcoinjs-lib";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import BIP32Factory from "bip32";
import { validate } from 'bitcoin-address-validation';
import { Message } from 'view-ui-plus'
const ecc = require('@bitcoinerlab/secp256k1');
import apis from '../util/apis/apis';
import { getAddress, signTransaction, signMessage } from "sats-connect";
import tp from "tp-js-sdk";

bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);
const toXOnly = (pubKey) =>
  pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
Message.config({
  duration: 5
})
export default {
  data() {
    return {
      connetShow: false,
      headclickChild: false,
      walletTypeBoolean: false,
      walletTypeList: [],
      defaultPath: "m/86'/0'/0'/0/0",
      walletAddress: null,
      showAddress: null,
      receiveAddress: null,
      GivingMsg: "Welcome to the secure sites, btcdomains.io and btcwallet.network! Please ensure you are visiting the correct URLs: btcdomains.io and btcwallet.network. Engaging in transactions or signing activities outside of these official sites may expose your private key and put your security at risk."
    }
  },
  methods: {
    closeMaskFun() {
      localStorage.removeItem("headclick")
      this.headclickChild = false
      this.$emit("closemask")
    },
    selectWalletFun(item) {
      // if (item.isSelect) {
      //   return
      // }
      this.walletTypeList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      if (item.name === 'UniSat') {
        this.generateBitcoinAddrUnisat()
      } else if (item.name === 'Metamask') {
        console.log("ddddddd")
        this.generateBitcoinAddrMetaMask()
      } else if (item.name === 'Xverse') {
        this.generateBitcoinAddrXverse()
      } else if (item.name === 'FoxWallet') {
        this.generateBitcoinAddrFoxWallet()
      } else if (item.name === 'TokenPocket') {
        this.generateBitcoinAddrTpWallet()
      }
    },
    showAddressFun(address) {
      if (address) {
        let addressBefor = address.slice(0, 6);
        let addressBehand = address.slice(address.length - 4)
        let newAddress = addressBefor + "..." + addressBehand
        return newAddress
      } else {
        return address
      }
    },
    async generateBitcoinAddrMetaMask() {
      if (typeof window.ethereum === "undefined") {
        Message.error("Metamask is not installed!");
        return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.walletAddress = accounts[0]
      let provider = new ethers.BrowserProvider(window.ethereum);
      let signer = await provider.getSigner();
      let sig = await signer.signMessage(this.GivingMsg);
      const seed = ethers.toUtf8Bytes(ethers.keccak256(ethers.toUtf8Bytes(sig)));
      // const bip32 = BIP32Factory(ecc);
      let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
      const taprootChild = root.derivePath(this.defaultPath);
      const pubKey = taprootChild.publicKey;
      const { address: taprootAddress } = bitcoin.payments.p2tr({
        internalPubkey: toXOnly(pubKey),
      });
      if (taprootAddress) {
        this.showAddress = this.showAddressFun(taprootAddress);
        localStorage.setItem("bitcoin_address", taprootAddress);
        localStorage.setItem("walletType", "metaMask");
        localStorage.setItem("public_key", pubKey.toString("hex"));
        this.addressPersonFun(taprootAddress)
      } else {
        Message.error("generate your bitcoin address failed, please retry.");
      }
    },
    async generateBitcoinAddrUnisat() {
      if (typeof window.unisat === "undefined") {
        Message.error("unisat is not installed!");
        return;
      }
      let sig = await window.unisat.signMessage(this.GivingMsg);
      let publiKey = await window.unisat.getPublicKey();
      const accounts = await window.unisat.requestAccounts();
      this.walletAddress = accounts[0]
      this.showAddress = this.showAddressFun(this.walletAddress);
      localStorage.setItem("bitcoin_address", this.walletAddress);
      localStorage.setItem("walletType", "uniSat");
      localStorage.setItem("public_key", publiKey);
      this.addressPersonFun(this.walletAddress)
      window.unisat.on("accountsChanged", this.handleAccountsChanged);
    },
    async generateBitcoinAddrFoxWallet() {
      const provider = window.foxwallet && window.foxwallet.bitcoin;
      if (!provider) {
        Message.error("FoxWallet is not installed!");
        return;
      }
      let accounts = await provider.requestAccounts();
      this.walletAddress = accounts[0];
      this.showAddress = this.showAddressFun(this.walletAddress);
      localStorage.setItem("bitcoin_address", this.walletAddress);
      localStorage.setItem("walletType", "FoxWallet");
      this.addressPersonFun(this.walletAddress)
    },
    async generateBitcoinAddrTpWallet() {
      if (!tp.isConnected()) {
        Message.error("please downLoad TokenPocket App");
        return
      }
      tp.getCurrentWallet().then((result) => {
        const account = result.data.address;
        this.walletAddress = account;
        this.showAddress = this.showAddressFun(this.walletAddress);
        localStorage.setItem("bitcoin_address", this.walletAddress);
        localStorage.setItem("walletType", "tokenPocket");
        this.addressPersonFun(this.walletAddress)
      });
    },
    async generateBitcoinAddrXverse() {
      const getAddressOptions = {
        payload: {
          purposes: ["ordinals", "payment"],
          message: "Address for receiving Ordinals",
          network: {
            type: "Mainnet",
          },
        },
        onFinish: async (response) => {
          this.walletAddress = response.addresses[0].address;
          let publiKey = response.addresses[0].publicKey;
          this.showAddress = this.showAddressFun(this.walletAddress);
          localStorage.setItem("bitcoin_address", this.walletAddress);
          localStorage.setItem("public_key", publiKey);
          localStorage.setItem("walletType", "Xverse");

          const signMessageOptions = {
            payload: {
              network: {
                type: "Mainnet",
              },
              address: this.walletAddress,
              message: this.GivingMsg,
            },
            onFinish: (response) => {
              this.addressPersonFun(this.walletAddress)
            },
            onCancel: () => Message.info("Request canceled"),
          };
          await signMessage(signMessageOptions);
        },
        onCancel: () => Message.info("Request canceled"),
      };
      await getAddress(getAddressOptions);
    },
    handleAccountsChanged(_accounts) {
      if (this.walletAddress === _accounts[0]) {
        return;
      } else {
        this.walletAddress = _accounts[0];
        localStorage.bitcoin_address = _accounts[0];
        this.showAddress = this.showAddressFun(_accounts[0]);
        this.addressPersonFun(this.walletAddress)
        Message.info("changed the wallet");
      }
    },
    confirmFun() {
      if (!this.receiveAddress) {
        return
      }
      if (!validate(this.receiveAddress)) {
        Message.warning("to address is not valid");
        return;
      }
      localStorage.bitcoin_address = this.receiveAddress;
      this.showAddress = this.showAddressFun(this.receiveAddress);
      localStorage.setItem("bitcoin_address", this.receiveAddress);
      localStorage.setItem("walletType", "custom");
      localStorage.removeItem("headclick")
      this.headclickChild = false;
      this.$emit("loginEnd", "custom")
    },
    addressPersonFun(address) {
      let param = {};
      param.address = address
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
            this.headclickChild = false
            localStorage.removeItem("headclick")
            this.$emit("loginEnd", this.showAddress)
            if (res.data.data.length > 0) {
              let personData = res.data.data[0];
              if (personData.content_url && personData.content_url.length > 0) {
                localStorage.setItem("bitcoin_avater", personData.content_url);
                this.$emit("avater", personData.content_ur)
              }
            }
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
    },
  },
  mounted() {
    if (localStorage.headclick && localStorage.headclick === '1') {
      this.headclickChild = true
    }
    let arr = [];
    let connetShow = false;
    if (window.foxwallet && window.foxwallet.bitcoin) {
      let temp = {
        name: "FoxWallet",
        url: require("../assets/head/connect_foxwallet@2x.png"),
        isSelect: false
      }
      arr.push(temp);
      connetShow = true
    } else {
      if (typeof window.ethereum != 'undefined') {
        let temp = {
          name: "Metamask",
          url: require("../assets/head/connect_metamask@2x.png"),
          isSelect: false
        }
        arr.push(temp)
        connetShow = true
      }
    }
    if (tp.isConnected()) {
      let temp = {
        name: "TokenPocket",
        url: require("../assets/head/connect_tokenpocket@2x.png"),
        isSelect: false
      }
      arr.push(temp)
      connetShow = true
    }
    this.connetShow = connetShow;
    this.walletTypeList = arr
  }
}
</script>
  
  