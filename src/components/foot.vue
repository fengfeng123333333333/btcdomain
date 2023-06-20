  
<style scoped>
.foot_app {
  width: 100%;
  height: 84px;
}
.foot_boby {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.foot_left {
  display: flex;
  align-items: center;
}
.foot_logo {
  width: 138px;
  height: 30px;
  margin-right: 40px;
}
.foot_left_box {
  display: flex;
  align-items: center;
}
.foot_left_box img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
}
.foot_right {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #616270;
}
.foot_right_line {
  width: 1px;
  height: 20px;
  background: #d0d1db;
  margin: 0 20px;
}
</style>
<template>
  <div class="foot_app">
    <div class="foot_boby">
      <div class="foot_left">
        <img src="../assets/foot/logo_footer@2x.png" alt="" class="foot_logo">
        <div class="foot_left_box">
          <img src="../assets/foot/gitbook@2x.png" alt="" @click="toOrtherFun(1)">
          <img src="../assets/foot/linktree@2x.png" alt="" @click="toOrtherFun(2)">
          <img src="../assets/foot/tiwwidr.png" alt="" @click="toOrtherFun(6)">
          <img src="../assets/foot/medium@2x.png" alt="" @click="toOrtherFun(5)">
          <img src="../assets/foot/github@2x.png" alt="" @click="toOrtherFun(3)">
          <img src="../assets/foot/discord@2x.png" alt="" @click="toOrtherFun(4)">
          <img src="../assets/foot/remark.png" alt="" style="margin-right:0" @click="toOrtherFun(7)">
        </div>
      </div>
      <div class="foot_right">
        <span>Contact us: contact@btcdomains.io</span>
        <div class="foot_right_line"></div>
        <span style="margin-right:10px;cursor: pointer;" @click="toOrtherFun(8)">Terms of User</span>
        <span style="margin-right:10px;cursor: pointer;" @click="toOrtherFun(9)">Privacy Policy</span>
        <span>© Copyright 2023 btcdomains.io</span>
      </div>
    </div>
  </div>
</template>
          
<script>
export default {
  methods: {
    toOrtherFun(index) {
      if (index === 1) {
        window.open("https://docs.btcdomains.io", '_blank');
      } else if (index === 2) {
        window.open("https://linktr.ee/btcdomain_btc", '_blank');
      } else if (index === 3) {
        window.open("https://github.com/btcdomain", '_blank');
      } else if (index === 4) {
        window.open("https://www.discord.gg/btcdomain", '_blank');
      } else if (index === 5) {
        window.open("http://medium.com/@btcdomain", '_blank');
      } else if (index === 6) {
        window.open("http://twitter.com/btcdomain_btc", '_blank');
      } else if (index === 7) {
        window.open("https://t.me/btcdomain_btc", '_blank');
      } else if (index === 8) {
        window.open("https://app.btcdomains.io/images/assets/terms-of-use.pdf", '_blank');
      } else if (index === 9) {
        window.open("https://app.btcdomains.io/images/assets/privacy-policy.pdf", '_blank');
      }
    }
  }
}
</script>
          