<style scoped>
.person_content_app {
  width: 100%;
}
</style>
<template>
  <div class="person_content_app">
    <Inscription v-if="optionType==='Inscription'" @imgNum="imgNumFun"></Inscription>
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
      console.log("valuevaluevaluevaluevalue", value)
      let arr = [];
      arr.push(value)
      this.$emit("imgNum", arr)
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
  
  