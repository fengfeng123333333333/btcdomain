<template>
  <router-view></router-view>
</template>

<script>
import apis from './util/apis/apis'
import { traceFun } from './util/func/index'
import tp from "tp-js-sdk";
export default {
  name: 'App',
  data() {
    return {
      params: {
        data_type: "",
        reffer: "",
        trace_id: "",
        source_id: "",
        view_type: "",
      }
    }
  },
  mounted() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile |BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      let url = window.location.href;
      if (window.foxwallet && window.foxwallet.bitcoin) {
        this.params.view_type = "foxWallet"
      } else if (typeof window.ethereum != 'undefined' && !tp.isConnected()) {
        this.params.view_type = "metamask"
      } else if (tp.isConnected()) {
        this.params.view_type = "tokenPocket"
      } else {
        this.params.view_type = "h5"
      }
      this.params.reffer = ""
      if (url.indexOf("mobile_") == -1) {
        if (window.location.href.indexOf("sourceID") != -1) {
          let url = window.location.href;
          let index = url.indexOf("=")
          this.$router.push({
            name: "mobile_home",
            query: {
              sourceID: this.queryURLParams(window.location.href).sourceID,
              traceId: this.queryURLParams(window.location.href).traceId
            }
          })
        } else {
          this.$router.push({
            name: "mobile_home",
          })
        }
      }
    } else {
      this.params.view_type = "pc";
      this.params.reffer = document.referrer
    }

    if (!document.referrer) {
      this.params.data_type = "直接进入app"
      if (window.location.href.indexOf("sourceID") != -1) {
        this.params.source_id = this.queryURLParams(window.location.href).sourceID
      }
    } else {
      if (window.location.href.indexOf("sourceID") != -1) {
        this.params.source_id = this.queryURLParams(window.location.href).sourceID
        this.params.data_type = "官网进入APP";
      }
    }
    let traceId = null;
    if (window.location.href.indexOf("?") == -1) {
      traceId = null;
    } else {
      traceId = this.queryURLParams(window.location.href).traceId;
    }
    if (traceId) {
      localStorage.traceId = traceId;
    } else if (localStorage.traceId) {
      traceId = localStorage.traceId
    }
    if (!traceId) {
      this.enterNumFun()
    } else {
      this.params.trace_id = traceId
      traceFun(this.params)
    }
  },
  methods: {
    queryURLParams(url) {
      let urlArr = url.split("?")[1];
      let obj = {}; // 声明参数对象
      let arr = urlArr.split("&"); // 以&符号分割为数组
      for (let i = 0; i < arr.length; i++) {
        let arrNew = arr[i].split("="); // 以"="分割为数组
        obj[arrNew[0]] = arrNew[1];
      }
      return obj;
    },
    enterNumFun() {
      this.$axios({
        method: "get",
        url: apis.enterNumApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            this.params.trace_id = res.data.data
            localStorage.traceId = res.data.data
            traceFun(this.params)
          }
        }
      }).catch(err => {
      });
    },
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body::-webkit-scrollbar {
  display: none;
}
.ivu-input-number-handler-wrap {
  opacity: 1 !important;
}
.ivu-tabs-bar {
  border: none !important;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
.demo {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.displayCom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: mask 0.2s forwards;
  z-index: 999;
}
@keyframes mask {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.pageBox {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.unisatGray {
  opacity: 0.7;
  cursor: not-allowed !important;
}
.ivu-spin-fix {
  z-index: 1000 !important;
}
.vant_loading_box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.vant_loading {
  width: 0.48rem;
  height: 0.48rem;
}
.xiahua {
  text-decoration: underline;
}
.mobile_page_loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.mobile_button_loading {
  margin-right: 0.016rem;
}
.copy_img {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}
.result_left_bottom_item {
  display: flex;
  align-items: center;
}
.copy_moobile_img {
  width: 0.32rem;
  height: 0.32rem;
}
</style>
