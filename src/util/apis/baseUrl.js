let url = window.location.href;
console.log(url)
let baseUrl = "";
if (url.indexOf("prod.btcwallet") != -1) {
    baseUrl="https://btcdomains.io";
} else {
    // https://www.btcwallet.network/ 
    baseUrl="https://www.btcwallet.network";
}
let baseAppUrl = "https://btcdomains.io";
let unisatUrl = "https://unisat.io"
let coinApi = "https://rest.coinapi.io"
let generativeApi="https://devnet.generative.xyz/generative"
export default {
    baseUrl, baseAppUrl, unisatUrl, coinApi,generativeApi
}
