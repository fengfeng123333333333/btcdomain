import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './util/css/font.css'
import axios from 'axios'
import { Loading ,Button ,ActionSheet,Tab, Tabs,Stepper} from 'vant';
import 'vant/lib/index.css';
import 'view-ui-plus/dist/styles/viewuiplus.css'
import vueSeamless from 'vue-seamless-scroll/src'
let app = createApp(App)
app.use(vueSeamless)
app.use(router)
app.use(Loading)
app.use(Button)
app.use(ActionSheet)
app.use(Tab)
app.use(Tabs)
app.use(Stepper)
app.config.globalProperties.$axios = axios;
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile |BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  // localStorage.setItem("showTypeDeviec", "mobile");
    (function () {
      var whdef = 100 / 750; // 表示750的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
      var wW = window.innerWidth; // 当前窗口的宽度
      var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
    })()
    window.onresize = function () {
      (function () {
        var whdef = 100 / 750; // 表示750的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
        var wW = window.innerWidth; // 当前窗口的宽度
        var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
      })()
    }
  } else {
    (function () {
      var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
      var wW = window.innerWidth; // 当前窗口的宽度
      var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
    })()
    window.onresize = function () {
      (function () {
        var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
        var wW = window.innerWidth; // 当前窗口的宽度
        var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
      })()
    }
  }
app.mount('#app')
