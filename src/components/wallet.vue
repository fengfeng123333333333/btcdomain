<style scoped>
.wallet_app {
  width: 100%;
}
.wallet_head {
  width: 100%;
  height: 73px;
  padding-left: 20px;
  line-height: 73px;
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  border-radius: 8px 8px 0px 0px;
  backdrop-filter: blur(10px);
  background: white;
}
.wallet_box {
  width: 100%;
  padding: 0 10px;
}
.wallet_address {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 37px;
}
.wallet_address img {
  width: 16px;
  height: 16px;
}
.wallet_balance {
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}
.wallet_balance_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.wallet_balance_left_value {
  margin-top: 2px;
  font-size: 18px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.wallet_balance_left_value img {
  width: 16px;
  height: 16px;
  margin-left: 6px;
}
.wallet_balance_right {
  display: flex;
  align-items: center;
}
.wallet_balance_right_item {
  width: 120px;
  height: 40px;
  box-shadow: 0px -4px 8px 0px rgba(82, 82, 102, 0.08);
  border-radius: 4px;
  border: 1px solid #4540d6;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #4540d6;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.wallet_content {
  width: 100%;
  margin-top: 30px;
}
.wallet_table_head {
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2e2f3e;
}
.wallet_table_com {
  width: 200px;
  margin-right: 20px;
}
.wallet_table_head_com {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.wallet_table {
  width: 100%;
}
.wallet_table_item {
  width: 100%;
  height: 54px;
  border-bottom: 1px solid rgba(167, 169, 190, 0.3);
  display: flex;
  align-items: center;
}
.wallet_table_item_com {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.pageBox {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
<template>
  <div class="wallet_app">
    <div class="wallet_head">Wallet</div>
    <div class="wallet_box">
      <div class="wallet_address">
        <span>bc1pefc6x6wxm7ayuuaemscze7x0ldxsn8rjyuecz4vtzavyrxlkkvyshds3es</span>
        <img src="../assets/person/icon_16px_copy@2x.png" alt="">
      </div>
      <div class="wallet_balance">
        <div class="wallet_balance_left">
          <span>Balance</span>
          <div class="wallet_balance_left_value">
            <span>0.00093928 BTC</span>
            <Tooltip content="Excluding Description Value" placement="right-start">
              <img src="../assets/person/icon_16_q@2x.png" alt="">
            </Tooltip>
          </div>
        </div>
        <div class="wallet_balance_right">
          <div class="wallet_balance_right_item">Send</div>
          <div class="wallet_balance_right_item" style="margin-left:10px">Receive</div>
        </div>
      </div>
      <div class="wallet_content">
        <div class="wallet_table_head">
          <div class="wallet_table_com wallet_table_head_com">Date</div>
          <div class="wallet_table_com wallet_table_head_com">Address</div>
          <div class="wallet_table_com wallet_table_head_com">Amount</div>
          <div class="wallet_table_com wallet_table_head_com">TxHash</div>
        </div>
        <div class="wallet_table">
          <div class="wallet_table_item">
            <div class="wallet_table_com wallet_table_item_com">2023-03-29 16:03</div>
            <div class="wallet_table_com wallet_table_item_com">bc1pefc6…yshds3es</div>
            <div class="wallet_table_com wallet_table_item_com">0.00093834</div>
            <div class="wallet_table_com wallet_table_item_com">00000000…06d9ea88</div>
          </div>
          <div class="wallet_table_item">
            <div class="wallet_table_com wallet_table_item_com">2023-03-29 16:03</div>
            <div class="wallet_table_com wallet_table_item_com">bc1pefc6…yshds3es</div>
            <div class="wallet_table_com wallet_table_item_com">0.00093834</div>
            <div class="wallet_table_com wallet_table_item_com">00000000…06d9ea88</div>
          </div>
        </div>
      </div>
      <div class="pageBox">
        <Page :total="40" size="small" @on-change="changePageFun" />
      </div>
    </div>
  </div>
</template>
  
<script>
import { Tooltip, Page } from 'view-ui-plus'
export default {
  components: {
    Tooltip, Page
  },
  methods: {
    changePageFun() { }
  }
}
</script>
  
  