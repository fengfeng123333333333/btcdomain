<style scoped>
.person_app {
  width: 100%;
  position: relative;
}
.person_head {
  width: 100%;
  height: 1.63rem;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 78%, #ffffff 100%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.cart {
  width: 0.4rem;
  height: 0.4rem;
  cursor: pointer;
}
.person_body {
  width: 1200px;
  padding-top: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 30px;
}
.person_body_left {
  width: 290px;
}
.person_body_right {
  width: 900px;
}
</style>
  
<template>
  <div class="person_app">

    <Head></Head>
    <div class="person_head">
    </div>
    <div class="person_body">
      <div class="person_body_left">
        <personSet @changeOption="changeOptionFun" :sendWalletPageType="sendWalletPageType"></personSet>
      </div>
      <div class="person_body_right">
        <personContent :type="type" @sendBtc="sendBtcFun" @receiveBtc="receiveBtcFun"></personContent>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
  
<script>
import personSet from '../components/person_set'
import personContent from '../components/person_content'
import Foot from '../components/foot'
import Head from '../components/head'
export default {
  components: {
    personSet, personContent, Foot, Head
  },
  data() {
    return {
      searchText: null,
      type: "Inscription",
      sendWalletPageType: 0
    }
  },
  methods: {
    toCartPageFun() {
      this.$router.push({
        name: "cart"
      })
    },
    toHomePageFun() {
      this.$router.push({
        name: "home"
      })
    },
    changeOptionFun(value) {
      console.log(value)
      this.type = value;
    },
    isInputFun() { },
    searchFun() { },
    sendBtcFun() {
      this.sendWalletPageType = 1
    },
    receiveBtcFun() {
      this.sendWalletPageType = 2
    },
  },
  mounted() {
    let name = localStorage.optionName;
    if (name) {
      this.type = name;
    }
  }
}
</script>
  