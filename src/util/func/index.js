import * as bitcoin from "bitcoinjs-lib";
import {
  Buffer
} from "buffer";
import {
  ethers
} from "ethers";
import BIP32Factory from "bip32";
const ecc = require('@bitcoinerlab/secp256k1');
import useClipboard from "vue-clipboard3";
import {
  Message
} from 'view-ui-plus'
import BigNumber from "bignumber.js";
import * as GENERATIVE_SDK from 'generative-sdk';
import axios from 'axios'
import apis from '../apis/apis'

const defaultPath = "m/86'/0'/0'/0/0";
bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);
const GivingMsg = "Welcome to the secure sites, btcdomains.io and btcwallet.network! Please ensure you are visiting the correct URLs: btcdomains.io and btcwallet.network. Engaging in transactions or signing activities outside of these official sites may expose your private key and put your security at risk."

function toXOnly(pubKey) {
  return pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
}
function traceDataTypeFun(type){
  let index = null;
  if (type === "直接进入app") {
    index='open_app'
  } else if (type === "搜索域名") {
    index='search_domain'
  }else if (type === "进入购物车") {
    index='go_to_cart'
  } else if(type==='下单'){
    index="create_order"
  } else if(type==='官网进入APP'){
    index="try_now"
  }else {
    index=""
  }
  return index
}
export function traceFun(params) {
  params.data_type=traceDataTypeFun(params.data_type)
  if(params.data_type==='try_now'){
    return
  }
  axios({
    method: "post",
    url: apis.traceApi,
    data: params,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res => {
    if (res.status == "200") {
      if (res.data.code === "SUCCESS") { 
        localStorage.params = JSON.stringify(params);
      }
    }
  }).catch(err => {
  });
}
export async function generateBitcoinAddr(type,deviceType) {
  if (type === 'metaMask'||deviceType==='mobile') {
    if (typeof window.ethereum === 'undefined') {
      alert("Metamask is not installed!")
      return
    }
    let provider = new ethers.BrowserProvider(window.ethereum)
    let signer = await provider.getSigner();
    try {
      let sig = await signer.signMessage(GivingMsg);
      const seed = ethers.toUtf8Bytes(
        ethers.keccak256(ethers.toUtf8Bytes(sig))
      );
      let root = bip32.fromSeed(Buffer.from(seed.slice(2)))
      const taprootChild = root.derivePath(defaultPath);
      const privKey = taprootChild.privateKey
      const pubKey = taprootChild.publicKey;
      const {
        address: taprootAddress
      } = bitcoin.payments.p2tr({
        internalPubkey: toXOnly(pubKey),
      });
      if (privKey) {
        return privKey
      }
    } catch (err) {
      return ""
    }
  } else if (type === 'uniSat') {
    let sig = await window.unisat.signMessage(GivingMsg);
    const seed = ethers.toUtf8Bytes(
      ethers.keccak256(ethers.toUtf8Bytes(sig))
    );
    let root = bip32.fromSeed(Buffer.from(seed.slice(2)))
    const taprootChild = root.derivePath(defaultPath);
    const privKey = taprootChild.privateKey
    const pubKey = taprootChild.publicKey;
    const { address: taprootAddress } = bitcoin.payments.p2tr({
      internalPubkey: toXOnly(pubKey),
    });
    if (privKey) {
      return privKey
    }
  }
}


export function copyAction(text) {
  const toClipboard = useClipboard();
  toClipboard.toClipboard(text).then((val) => {
    Message.info("copied");
  });
}
export function formatUTXOs(txrefs) {
  const utxos = (txrefs || []).map((utxo) => ({
    tx_hash: utxo.tx_hash,
    tx_output_n: new BigNumber(utxo.tx_output_n).toNumber(),
    value: new BigNumber(utxo.value),
  }));
  return utxos;
}
export function formatInscriptions(inscriptions) {
  const _inscriptions = {};
  for (const [key, utxos] of Object.entries(inscriptions)) {
    if (Array.isArray(utxos) && utxos.length > 0) {
      _inscriptions[key] = utxos.map((utxo) => ({
        ...utxo,
        offset: new BigNumber(utxo.offset),
      }));
    }
  }
  return _inscriptions;
}
export function sendBTCTransFun(payload,type) {
  const sendAmount = new BigNumber(payload.amount || '0');
  const utxos = formatUTXOs(payload.utxos);
  const inscriptions = formatInscriptions(payload.inscriptions);
  if (type === "sendBtc") {
    return GENERATIVE_SDK.createTx(
      payload.privateKey,
      utxos,
      inscriptions,
      '',
      payload.receiver,
      sendAmount,
      payload.feeRate,
      true
    );
  } else {
    return GENERATIVE_SDK.createTx(
      payload.privateKey,
      utxos,
      inscriptions,
      payload.inscriptionID,
      payload.receiver,
      sendAmount,
      payload.feeRate,
      true
    );
  }
}
export async function signAsync(message) {
  let sig = "";
  let walletType = localStorage.walletType;
  if (walletType === 'metaMask') {
    let provider = new ethers.BrowserProvider(window.ethereum);
    let signer = await provider.getSigner();
    sig = await signer.signMessage(GivingMsg);
    const seed = ethers.toUtf8Bytes(
      ethers.keccak256(ethers.toUtf8Bytes(sig))
    );
    let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
    const taprootChild = root.derivePath(defaultPath);
    var buf = Buffer.from(message);
    var hashBuf = bitcoin.crypto.sha256(buf);
    const signMsg = taprootChild.sign(hashBuf);
    const signRet = signMsg.toString('hex')
    return signRet
  } else if (walletType === 'uniSat') {
    sig = await window.unisat.signMessage(GivingMsg);
    return sig
  }
}
export async function exportPrivateKey() {
  let walletType = localStorage.walletType;
  if (walletType === "uniSat") {
    let sig = await window.unisat.signMessage(GivingMsg);
    const seed = ethers.toUtf8Bytes(ethers.keccak256(ethers.toUtf8Bytes(sig)));
    let root = bip32.fromSeed(Buffer.from(seed.slice(2)));
    const taprootChild = root.derivePath(defaultPath);
    const privKey = taprootChild.privateKey ? taprootChild.privateKey.toString("hex") : null;
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
    const privKey = taprootChild.privateKey ? taprootChild.privateKey.toString("hex") : null;
    return privKey;
  }
}
export function changeStatusFun(item) {
  if (!item) {
    return
  } else {
    if (item.dom_state === 9) {
      item.dom_stateName = "Available";
      item.color = "#4540D6"
      item.background = "rgba(69,64,214,0.1)"
      item.domain = item.dom_name;
    } else if (item.dom_state === 0 || item.dom_state === 5) {
      item.dom_stateName = "Registered";
      item.color = "#75749F"
      item.background = "rgba(58,56,123,0.1)"
      item.domain = item.dom_name;
    } else {
      item.dom_stateName = "Registering...";
      item.color = "#EEA119"
      item.background = "rgba(238,161,25,0.1)"
      item.domain = item.dom_name;
    }
  }
  return item
}