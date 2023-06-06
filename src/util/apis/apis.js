import baseApis from './baseUrl'
export default {
    coinapiKey: '0CCF7D74-25C9-451C-AD63-CB1EC1AB14F6', 
    queryDomainApi: baseApis.baseUrl + "/api/v2/queryDomain",
    querySuccessDomainApi: baseApis.baseUrl + "/api/v2/querySuccessDomain",
    goToCartApi: baseApis.baseUrl + "/api/v2/goToCart",
    createPayOrderApi: baseApis.baseUrl + "/api/v2/createPayOrder",
    addressApi: baseApis.baseUrl + "/api/v2/address",
    queryMoreDomainApi: baseApis.baseUrl + "/api/v2/queryMoreDomain",
    addressPersonApi: baseApis.baseAppUrl + "/api/address",
balanceApi: baseApis.unisatUrl + "/api/v2/address/balance",
inscriptionsApi: baseApis.unisatUrl + "/api/v2/address/inscriptions",
usdApi: baseApis.coinApi + "/v1/exchangerate/BTC/USD",
};
