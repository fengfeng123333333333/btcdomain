<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
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
</style>
