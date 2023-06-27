let url = window.location.href;
let baseUrl = "";
if (url.indexOf("prod.btcwallet") != -1) {
    baseUrl="https://btcdomains.io";
} else {
    // baseUrl="http://btcdomain-pri.valuechain.group:18880"
    baseUrl="https://btcdomains.io";
}

let locationUrl="https://app.btcdomains.io/mobile/#"
// if (url.indexOf("prod.btcwallet")!=-1){
//   locationUrl="https://prod.btcwallet.network/mobile/"
// } else if (url.indexOf("btcwallet")!=- 1) {
//   locationUrl="https://www.btcwallet.network/mobile/"
// } else if (url.indexOf("localhost")!=-1) {
//   locationUrl="https://www.btcwallet.network/mobile/"
// }else {
//   locationUrl="https://app.btcdomains.io/mobile/#"
// }

let unisatUrl = "https://unisat.io"
let coinApi = "https://rest.coinapi.io"
let generativeApi="https://devnet.generative.xyz/generative"
export default {
    baseUrl, unisatUrl, coinApi,generativeApi,locationUrl
}
