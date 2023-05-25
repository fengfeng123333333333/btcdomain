<script setup lang="ts">
import ecc from "@bitcoinerlab/secp256k1";
import BIP32Factory from "bip32";
import * as bitcoin from "bitcoinjs-lib";
import { Buffer } from "buffer";
import { ElMessage } from "element-plus";
import { fa } from "element-plus/es/locale";
import { ethers } from "ethers";
import { onBeforeMount, onMounted, reactive } from "vue";
import { domain } from "../router/domain";
import service from "../router/service";
import { GivingMsg, Links } from "../router/type";
import { shortenAddr, toXOnly } from "../router/util";

const defaultPath = "m/86'/0'/0'/0/0";
const subSLen = 8;

const menuIcon = domain.domainImgUrl + "assets/icon_menu@2x.png";
const closeIcon = domain.domainImgUrl + "assets/icon_close_nav@2x.png";
const avatarIcon = domain.domainImgUrl + "assets/avater_def@2x.png";
bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);
const props = defineProps({
  avatarAddr: String,
});
let state = reactive({
  isExpand: false,
  account: "",
  bitcoinAddr: "",
  shortAddr: "",
  avatar: "",
  dialogVisible: false,
  walletType: "1",
});
const emit = defineEmits({
  connectParentAction(addr: string) {},
});
function chooseWalletFun(index: number) {
  if (index === 0) {
    state.dialogVisible = false;
  } else {
    if (state.walletType === "0") {
      // generateBitcoinAddrUnisFoxWallet();
    } else if (state.walletType === "1") {
      generateBitcoinAddrUnisat();
    } else if (state.walletType === "2") {
      generateBitcoinAddrMetaMask();
    }
    state.dialogVisible = false;
  }
}
function doDisconnect() {
  localStorage.clear();
  state.account = "";
  state.bitcoinAddr = "";
  state.shortAddr = "";
}
defineExpose({
  doDisconnect,
  exportPrivateKey,
});
function reloadPage() {
  location.reload();
}
function expandAction() {
  state.isExpand = !state.isExpand;
}
async function generateBitcoinAddrMetaMask() {
  if (typeof window.ethereum === "undefined") {
    alert("Metamask is not installed!");
    return;
  }
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];
  state.account = account;
  let network = new ethers.Network("Ethereum Mainnet", 1);
  let provider = new ethers.BrowserProvider(window.ethereum);
  let getNetwork = await provider.getNetwork();
  if (getNetwork.chainId != network.chainId) {
  }
  let signer = await provider.getSigner();
  let sig = await signer.signMessage(GivingMsg);
  const seed = ethers.toUtf8Bytes(ethers.keccak256(ethers.toUtf8Bytes(sig)));
  let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
  const taprootChild = root.derivePath(defaultPath);
  const pubKey = taprootChild.publicKey;
  const { address: taprootAddress } = bitcoin.payments.p2tr({
    internalPubkey: toXOnly(pubKey),
  });
  if (taprootAddress) {
    state.bitcoinAddr = taprootAddress;
    state.shortAddr = shortenAddr(state.bitcoinAddr, subSLen);
    localStorage.setItem("eth_address", state.account);
    localStorage.setItem("bitcoin_address", taprootAddress);
    localStorage.setItem("public_key", pubKey.toString("hex"));
    localStorage.setItem("walletType", "metaMask");
    loadavatar(taprootAddress);
  } else {
    ElMessage.error("generate your bitcoin address failed, please retry.");
  }
}
async function generateBitcoinAddrUnisat() {
  if (typeof window.unisat === "undefined") {
    alert("unisat is not installed!");
    return;
  }
  const accounts = await window.unisat.requestAccounts();
  const account = accounts[0];
  state.account = account;
  let sig = await window.unisat.signMessage(GivingMsg);
  const seed = ethers.toUtf8Bytes(ethers.keccak256(ethers.toUtf8Bytes(sig)));
  let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
  const taprootChild = root.derivePath(defaultPath);
  const pubKey = taprootChild.publicKey;
  const { address: taprootAddress } = bitcoin.payments.p2tr({
    internalPubkey: toXOnly(pubKey),
  });
  if (taprootAddress) {
    state.bitcoinAddr = account;
    state.shortAddr = shortenAddr(account, subSLen);
    localStorage.setItem("bitcoin_address", account);
    localStorage.setItem("public_key", pubKey.toString("hex"));
    localStorage.setItem("walletType", "uniSat");
    window.unisat.on("accountsChanged", handleAccountsChanged);
    loadavatar(taprootAddress);
  } else {
    ElMessage.error("generate your bitcoin address failed, please retry.");
  }
}
async function exportPrivateKey() {
  let walletType = localStorage.walletType;
  console.log("dddddddd");
  if (walletType === "uniSat") {
    let sig = await window.unisat.signMessage(GivingMsg);
    const seed = ethers.toUtf8Bytes(ethers.keccak256(ethers.toUtf8Bytes(sig)));
    let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
    const taprootChild = root.derivePath(defaultPath);
    const privKey = taprootChild.privateKey?.toString("hex");
    console.log(privKey);
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
    console.log(privKey);
    return privKey;
  }
}

function connectAction() {
  if (state.bitcoinAddr) {
    emit("connectParentAction", state.bitcoinAddr);
  } else {
    if (window.innerWidth < 767) {
      generateBitcoinAddrMetaMask();
    } else {
      state.dialogVisible = true;
    }
  }
}
const handleAccountsChanged = (_accounts: string[]) => {
  if (state.account === _accounts[0]) {
    return;
  } else {
    state.account = _accounts[0];
    state.bitcoinAddr = _accounts[0];
    state.shortAddr = shortenAddr(_accounts[0], subSLen);
    localStorage.setItem("bitcoin_address", _accounts[0]);
    ElMessage.info("changed the wallet");
  }
};
function loadavatar(addr: string) {
  service.avatarGet(addr).then((avatarRet) => {
    if (avatarRet.data.length > 0) {
      state.avatar = avatarRet.data[0].content_url;
    }
  });
}

onBeforeMount(() => {
  state.avatar = props.avatarAddr ? props.avatarAddr : avatarIcon;
});

onMounted(() => {
  let addr = localStorage.getItem("bitcoin_address");
  if (addr) {
    state.bitcoinAddr = addr;
    state.shortAddr = shortenAddr(addr, subSLen);
    loadavatar(addr);
    window.unisat.on("accountsChanged", handleAccountsChanged);
  }
});
</script>

<template>
  <div class="header-container">
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <button class="navbar-toggler" style="box-shadow: none;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" @click="expandAction">
        <img :src="state.isExpand ? closeIcon : menuIcon" alt="" width="24" height="24">
      </button>

      <a class="navbar-brand brand-mobile" href="" @click="reloadPage">
        <img src="../assets/logo_nav@2x.png" alt="bitcoin_domain" width="150" height="30">
      </a>

      <div class="avatar-icon-view">
        <img v-if="state.bitcoinAddr" :src="state.avatar ? state.avatar : avatarIcon" style="margin-right: 10px;border-radius: 15px;" alt="" width="30" height="30" @click="connectAction">
        <div v-else class="connect-btn connect-btn-normal-mobile" @click="connectAction">Wallet</div>
      </div>

      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" style="color: white;" :href="Links.doc" target="_blank">Document</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" style="color: white;" :href="Links.trees" target="_blank">Exchange</a>
            </li>
          </ul>

          <div class="connect-btn" :class="state.bitcoinAddr ? 'connect-btn-selected' : 'connect-btn-normal'" @click="connectAction">
            <img v-if="state.bitcoinAddr" :src="state.avatar ? state.avatar : avatarIcon" alt="" style="border-radius: 15px;" width="30" height="30">
            {{ state.shortAddr ? state.shortAddr : "Connect Wallet" }}
          </div>
        </div>
      </div>
    </nav>
    <el-dialog title="Connect A Wallet" v-model="state.dialogVisible" width="30%">
      <span>Choose how you want to connect. If you don't have a wallet, you can select a provider and create one.</span>
      <div class="walletbox">
        <el-radio-group v-model="state.walletType">
          <el-radio label="1" border class="radioClass">
            <div class="radioClassLable">
              <img src="../assets/walletbox/connect_unisat@2x.png" alt="">
              <span>UniSat</span>
            </div>
          </el-radio>
          <el-radio label="2" border class="radioClass">
            <div class="radioClassLable">
              <img src="../assets/walletbox/connect_metamask@2x.png" alt="">
              <span>Metamask</span>
            </div>
          </el-radio>
        </el-radio-group>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="chooseWalletFun(0) ">取 消</el-button>
        <el-button type="primary" @click="chooseWalletFun(1)">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
.walletbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
.radioClass {
  width: 440px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.radioClassLable {
  display: flex;
  align-items: center;
}
.radioClassLable img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.dialog-footer {
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header-container {
  background-image: linear-gradient(180deg, #513eff 0%, #513eff 100%);
}
.logo-view {
  margin-top: 10px;
}

.doc-link-view {
  height: 30px;
  border-radius: 15px;
  border-color: #d8d8d8;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  line-height: 30px;
  cursor: pointer;
  margin-top: 10px;
}

.connect-btn {
  height: 40px;
  border-radius: 20px;
  padding-left: 5px;
  padding-right: 5px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
}

.connect-btn-normal-mobile {
  background: #ffffff;
  color: #4540d6;
}

.connect-btn-normal {
  background: #ffffff;
  color: #4540d6;
}

.connect-btn-selected {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  color: #ffffff;
}

@media screen and (max-width: 767px) {
  .navbar-web {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .avatar-icon-view {
    display: none;
  }
}
</style>
