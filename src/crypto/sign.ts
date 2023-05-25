import ecc from '@bitcoinerlab/secp256k1';
import BIP32Factory from 'bip32';
import * as bitcoin from 'bitcoinjs-lib';
import { Buffer } from 'buffer';
import { ethers } from "ethers";
import { GivingMsg } from "../router/type";
import { toXOnly } from "../router/util";

const defaultPath = "m/86'/0'/0'/0/0";

bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);

export async function signAsync(message: string) {
  let sig = "";
  let walletType = localStorage.walletType;
  if (walletType === 'metaMask') {
    let provider = new ethers.BrowserProvider(window.ethereum);
    let signer = await provider.getSigner();
    sig = await signer.signMessage(GivingMsg);
  } else if (walletType === 'uniSat') {
    sig = await window.unisat.signMessage(GivingMsg);
  }
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
}

export async function generateBitcoinAddr(type: string) {
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
      console.log("address: " + taprootAddress)
      console.log("private key:" + privKey)
      console.log("public key:" + pubKey.toString('hex'))
      return privKey
    }
  }
}