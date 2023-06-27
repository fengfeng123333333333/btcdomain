<style scoped>
.mobile_foot_app {
  width: 100%;
  height: 7.8rem;
  background: #ffffff;
  border-top: 0.02rem solid rgba(167, 169, 190, 0.4);
  padding: 0 0.2rem;
}
.mobile_foot_logo {
  width: 3.16rem;
  height: 0.6rem;
  margin-top: 0.6rem;
}
.mobile_foot_body {
  margin-top: 0.6rem;
  width: 100%;
  padding: 0 0.2rem;
}
.mobile_foot_imgbox {
  width: 4.8rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.mobile_foot_imgbox img {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
}
.mobile_foot_contact {
  margin-top: 0.6rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2e2f3e;
}
.mobile_foot_line {
  width: 100%;
  height: 0.02rem;
  background: #d0d1db;
  margin-top: 0.6rem;
}
.mobile_foot_xieyi {
  margin-top: 0.6rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2e2f3e;
}
.mobile_foot_beian {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #616270;
  margin-top: 0.2rem;
}
</style>
<template>
  <div class="mobile_foot_app">
    <img src="../assets/mobileHead/logo_nav_black@2x.png" alt="" class="mobile_foot_logo">
    <div class="mobile_foot_body">
      <div class="mobile_foot_imgbox">
        <img src="../assets/foot/gitbook@2x.png" alt="" @click="toOrtherFun(1)">
        <img src="../assets/foot/linktree@2x.png" alt="" @click="toOrtherFun(2)">
        <img src="../assets/foot/tiwwidr.png" alt="" @click="toOrtherFun(6)">
        <img src="../assets/foot/medium@2x.png" alt="" @click="toOrtherFun(5)">
        <img src="../assets/foot/github@2x.png" style="margin-right:0rem;" alt="" @click="toOrtherFun(3)">
        <img src="../assets/foot/discord@2x.png" alt="" @click="toOrtherFun(4)">
        <img src="../assets/foot/remark.png" alt="" style="margin-right:0" @click="toOrtherFun(7)">
      </div>
      <div class="mobile_foot_contact">Contact us: contact@btcdomains.io</div>
      <div class="mobile_foot_line"></div>
      <div class="mobile_foot_xieyi">
        <span @click="toOrtherFun(8)">Terms of User</span>
        <span style="margin-left:0.2rem" @click="toOrtherFun(9)">Privacy Policy</span>
      </div>
      <div class="mobile_foot_beian">© Copyright 2023 btcdomains.io</div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {

    }
  },
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
  },
  mounted() { }
}
</script>
  
  