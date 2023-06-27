<style scoped>
.person_app {
  width: 100%;
  position: relative;
}
.person_head {
  width: 100%;
  height: 160px;
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
    <div class="person_body" :style="{minHeight:clientHeight+'px'}">
      <div class="person_body_left">
        <personSet :saveImgObj="saveImgObj" @changeOption="changeOptionFun" :sendWalletPageType="sendWalletPageType" :ogBoolean="ogBoolean"></personSet>
      </div>
      <div class="person_body_right">
        <personContent :type="type" @sendBtc="sendBtcFun" @receiveBtc="receiveBtcFun" @imgNum="imgNumFun" @og="ogFun"></personContent>
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
      type: "Inscription",
      sendWalletPageType: 0,
      saveImgObj: null,
      clientHeight: null,
      ogBoolean: false
    }
  },
  methods: {
    imgNumFun(value) {
      this.saveImgObj = value
    },
    ogFun(value) {
      this.ogBoolean = value
    },
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
      this.type = value;
    },
    sendBtcFun() {
      this.sendWalletPageType = 1
    },
    receiveBtcFun() {
      this.sendWalletPageType = 2
    },
  },
  mounted() {
    this.clientHeight = document.documentElement.clientHeight - 70;
    let name = localStorage.optionName;
    if (name) {
      this.type = name;
    }
  }
}
</script>
  