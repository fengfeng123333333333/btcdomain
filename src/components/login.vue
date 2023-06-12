<style scoped>
.maskBox {
  width: 500px;
  height: 556px;
  background: #ffffff;
  border: 1px solid #2e2f3e;
}
.maskhead {
  width: 100%;
  height: 54px;
  padding: 0 10px;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.maskhead img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.connect_dec {
  margin-top: 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  padding: 0 20px;
}
.connect_list {
  padding: 0 20px;
  margin-top: 10px;
}
.connect_list_item {
  width: 100%;
  height: 64px;
  background: #f5f5f7;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #090c1d;
}
.connect_list_item img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.connect_list_item_sel {
  box-shadow: 0px 10px 24px 0px rgba(16, 38, 92, 0.1);
  border-radius: 4px;
  border: 2px solid #4540d6;
}
.connect_other {
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.connect_other_line {
  width: 215px;
  height: 1px;
  background: #a7a9be;
}
.enter_address {
  margin-top: 20px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  padding-left: 20px;
}
.enter_address_box {
  margin-top: 4px;
  padding: 0 20px;
}
.connect_buttom {
  width: 120px;
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
.enter_input {
  width: 330px;
  height: 44px;
  border: 1px solid #d5d6e0;
  border-radius: 4px;
  outline: 0;
  padding: 0 10px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
</style>
<template>
  <div class="mask" @click="closeMaskFun">
    <div class="maskBox" style="margin-top:180px" @click.stop>
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
      <div class="connect_other displayCom">
        <div class="connect_other_line"></div>
        <span>or</span>
        <div class="connect_other_line"></div>
      </div>
      <div class="enter_address">Enter Receiving Address</div>
      <div class="enter_address_box displayCom">
        <input type="text" class="enter_input" v-model="receiveAddress">
        <div class="connect_buttom" @click="confirmFun">Confirm</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import * as bitcoin from "bitcoinjs-lib";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import ecc from "@bitcoinerlab/secp256k1";
import BIP32Factory from "bip32";
import { validate } from 'bitcoin-address-validation';
import { Message } from 'view-ui-plus'
export default {
  data() {
    return {
      walletTypeBoolean: false,
      walletTypeList: [
        {
          name: "FoxWallet",
          url: require("../assets/head/connect_foxwallet@2x.png"),
          isSelect: false
        },
        {
          name: "TokenPocket",
          url: require("../assets/head/connect_tokenpocket@2x.png"),
          isSelect: false
        },
        {
          name: "UniSat",
          url: require("../assets/head/connect_unisat@2x.png"),
          isSelect: false
        },
        {
          name: "Metamask",
          url: require("../assets/head/connect_metamask@2x.png"),
          isSelect: false
        }
      ],
      defaultPath: "m/86'/0'/0'/0/0",
      walletAddress: null,
      showAddress: null,
      receiveAddress: null,
      GivingMsg: "Welcome to the secure sites, btcdomains.io and btcwallet.network! Please ensure you are visiting the correct URLs: btcdomains.io and btcwallet.network. Engaging in transactions or signing activities outside of these official sites may expose your private key and put your security at risk."
    }
  },
  methods: {
    closeMaskFun() {
      this.$emit("closemask")
    },
    selectWalletFun(item) {
      if (item.isSelect) {
        return
      }
      this.walletTypeList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      if (item.name === 'UniSat') {
        this.generateBitcoinAddrUnisat()
      } else if (item.name === 'Metamask') {
        this.generateBitcoinAddrMetaMask()
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
    toXOnly(pubKey) {
      return pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
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
      const bip32 = BIP32Factory(ecc);
      const root = bip32.fromSeed(Buffer.from(seed.slice(2)));
      const taprootChild = root.derivePath(this.defaultPath);
      const pubKey = taprootChild.publicKey;
      const { address: taprootAddress } = bitcoin.payments.p2tr({
        internalPubkey: this.toXOnly(pubKey),
      });
      if (taprootAddress) {
        localStorage.bitcoin_address = taprootAddress;
        this.showAddress = this.showAddressFun(taprootAddress);
        localStorage.setItem("walletType", "metaMask");
        localStorage.setItem("public_key", pubKey);
        this.$emit("loginEnd", this.showAddress)
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
      this.$emit("loginEnd", this.showAddress)
      window.unisat.on("accountsChanged", this.handleAccountsChanged);
    },
    handleAccountsChanged(_accounts) {
      if (this.walletAddress === _accounts[0]) {
        return;
      } else {
        this.walletAddress = _accounts[0];
        localStorage.bitcoin_address = _accounts[0];
        this.showAddress = this.showAddressFun(_accounts[0]);
        this.$emit("loginEnd", this.showAddress)
        Message.info("changed the wallet");
      }
    },
    confirmFun() {
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
          localStorage.bitcoin_address = this.receiveAddress;
          this.showAddress = this.showAddressFun(this.receiveAddress);
          localStorage.setItem("bitcoin_address", this.receiveAddress);
          localStorage.setItem("walletType", "custom");
          this.$emit("loginEnd", this.showAddress)
        } else {
          Message.error("Check the length of your Ordinals address");
          return
        }
      }
    }
  },
  mounted() {
    bitcoin.initEccLib(ecc);
  }
}
</script>
  
  