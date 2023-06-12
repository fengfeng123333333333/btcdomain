import * as bitcoin from "bitcoinjs-lib";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import BIP32Factory from "bip32";
import ecc from "@bitcoinerlab/secp256k1";
import useClipboard from "vue-clipboard3";
import { Message } from 'view-ui-plus'
import BigNumber from "bignumber.js";
import * as GENERATIVE_SDK from 'generative-sdk';
const defaultPath = "m/86'/0'/0'/0/0";

bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);
const GivingMsg="Welcome to the secure sites, btcdomains.io and btcwallet.network! Please ensure you are visiting the correct URLs: btcdomains.io and btcwallet.network. Engaging in transactions or signing activities outside of these official sites may expose your private key and put your security at risk."
function toXOnly(pubKey) {
  return pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
}
export async function generateBitcoinAddr(type) {
    if (type === 'metaMask') {
      if (typeof window.ethereum === 'undefined') {
        alert("Metamask is not installed!")
        return
      }
      let provider = new ethers.BrowserProvider(window.ethereum)
      let signer = await provider.getSigner();
      let sig = await signer.signMessage(GivingMsg);
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
        console.log("address: " + taprootAddress)
        console.log("private key:" + privKey)
        console.log("public key:" + pubKey.toString('hex'))
        return privKey
      }
    } else if (type === 'uniSat') {
      let provider = new ethers.BrowserProvider(window.ethereum)
      let signer = await provider.getSigner();
      let sig = await signer.signMessage(GivingMsg);
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
        console.log("address: " + taprootAddress)
        console.log("private key:" + privKey)
        console.log("public key:" + pubKey.toString('hex'))
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
  Object.keys(inscriptions).forEach((key) => {
    const utxos = inscriptions[key];
    if (!!utxos && !!utxos.length) {
      _inscriptions[key] = utxos?.map((utxo) => ({
        ...utxo,
        offset: new BigNumber(utxo.offset),
      }));
    }
  });
  return _inscriptions;
}
export function sendBTCTransaction(payload) {
  console.log("sendBTCTransactionsendBTCTransaction")
  console.log("1111111111111111111111")
  const sendAmount = new BigNumber(payload.amount || '0');
  console.log("2222222222222",sendAmount)
  const utxos = formatUTXOs(payload.utxos);
  console.log("33333333333333333",utxos)
  const inscriptions = formatInscriptions(payload.inscriptions);
  console.log("444444444444444444444444444")
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
    console.log("sigsigsig",sig)
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
    const privKey = taprootChild.privateKey?.toString("hex");
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
    return privKey;
  }
}