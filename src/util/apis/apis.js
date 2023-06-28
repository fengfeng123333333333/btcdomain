import baseApis from './baseUrl'
export default {
    coinapiKey: '0CCF7D74-25C9-451C-AD63-CB1EC1AB14F6', 
    queryDomainApi: baseApis.baseUrl + "/api/v2/queryDomain",
    querySuccessDomainApi: baseApis.baseUrl + "/api/v2/querySuccessDomain",
    goToCartApi: baseApis.baseUrl + "/api/v2/goToCart",
    createPayOrderApi: baseApis.baseUrl + "/api/v2/createPayOrder",
    addressApi: baseApis.baseUrl + "/api/v2/address",
    queryMoreDomainApi: baseApis.baseUrl + "/api/v2/queryMoreDomain",
    addressPersonApi: baseApis.baseUrl + "/api/address",
    balanceApi: baseApis.baseUrl + "/api/v2/btcBalance",
    inscriptionsApi: baseApis.unisatUrl + "/api/v2/address/inscriptions",
    recentHistoryApi: baseApis.baseUrl + "/api/v2/recentHistory",
    usdApi: baseApis.baseUrl + "/api/v2/btcToUsd",
    inscriptListApi: baseApis.baseUrl + "/api/v2/address",
    confirmApi: baseApis.baseUrl + "/api/v2/confirm",
    walletInfoApi: baseApis.generativeApi + "/api/wallet/wallet-info",
    mixpayApi: baseApis.baseUrl + "/api/v2/mixpay",
    setDomainApi: baseApis.baseUrl + "/api/head/set",
    getDomainApi: baseApis.baseUrl + "/api/head/get",
    orderInfoApi: baseApis.baseUrl + "/api/v2/orderInfo",
    queryBalanceApi: baseApis.baseUrl + "/api/queryBalance",
    domainChangeApi: baseApis.baseUrl + "/api/queryDomain",
    pushTxApi: baseApis.unisatUrl + "/api/v1/tx/broadcast",
getRateFeeApi: baseApis.baseUrl + "/api/v2/getRateFee",
exchangeApi: baseApis.baseUrl + "/api/exchange",
    queryDomainMintFeeApi: baseApis.baseUrl + "/api/v2/queryDomainMintFee",
oldBalanceApi:baseApis.unisatUrl + "/api/v2/address/balance"
};
