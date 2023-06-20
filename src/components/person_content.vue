<style scoped>
.person_content_app {
  width: 100%;
}
</style>
<template>
  <div class="person_content_app">
    <Inscription v-if="optionType==='Inscription'" @imgNum="imgNumFun" @og="ogFun"></Inscription>
    <Wallet v-if="optionType==='Wallet'" @sendBtc="sendBtcFun" @receiveBtc="receiveBtcFun"></Wallet>
    <Setting v-if="optionType==='Setting'"></Setting>
  </div>
</template>
  
<script>
import Inscription from './inscription'
import Wallet from './wallet'
import Setting from './setting'
export default {
  props: ["type"],
  watch: {
    type: {
      immediate: true,
      handler(val) {
        if (val) {
          this.optionType = val
        }
      }
    },
  },
  data() {
    return {
      optionType: this.type,
    }
  },
  components: {
    Inscription, Wallet, Setting
  },
  methods: {
    imgNumFun(value) {
      this.$emit("imgNum", value)
    },
    ogFun(value) {
      this.$emit("og", value)
    },
    sendBtcFun() {
      this.$emit("sendBtc")
    },
    receiveBtcFun() {
      this.$emit("receiveBtc")
    }
  }
}
</script>
  
  