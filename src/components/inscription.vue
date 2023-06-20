  
<style scoped>
.inscription_app {
  width: 100%;
}
.inscription_head {
  width: 100%;
  height: 64px;
  background: url("../assets/person/newbackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 0.2rem;
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.icon_star {
  width: 40px;
  height: 31px;
  margin-left: 7px;
}
.inscription_title {
  width: 100%;
  height: 73px;
  background: #ffffff;
  border-radius: 8px 8px 0px 0px;
  backdrop-filter: blur(10px);
  line-height: 73px;
  padding-left: 20px;
  font-size: 22px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
}
.inscription_tab {
  width: 100%;
  position: relative;
}
.inscription_showtype {
  position: absolute;
  right: 10px;
  top: 4px;
  display: flex;
  align-items: center;
}
.inscription_showtype img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.inscription_tab_box {
  margin-top: 4px;
  width: 900px;
}
.inscription_search_box {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #d5d6e0;
  border-left: 0px;
}
.inscription_search_box img {
  width: 40px;
  height: 40px;
}
.search_insription {
  flex: 1;
  height: 40px;
  border: 1px solid #d5d6e0;
  outline: 0;
  padding: 0 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.inscription_tab_title {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 20px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.inscription_tab_list {
  width: 100%;
}
.inscription_tab_item {
  width: 100%;
  height: 64px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tab_item_left {
  display: flex;
  align-items: center;
}
.tab_item_left img {
  width: 44px;
  height: 44px;
}
.tab_item_left_dec {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
.tab_item_left_dec_type {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.tab_item_right {
  display: flex;
  align-items: center;
}
.tab_item_right_status {
  height: 20px;
  background: rgba(238, 161, 25, 0.1);
  border-radius: 10px;
  padding: 0 6px;
  line-height: 20px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #eea119;
}
.tab_item_right_option {
  width: 67px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #0a0a0b;
  margin-left: 48px;
  cursor: pointer;
}
.tab_item_right_option img {
  width: 16px;
  height: 16px;
}
.inscription_tab_list_card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 400px;
  overflow: hidden;
  overflow-y: auto;
}
.inscription_tab_list_card::-webkit-scrollbar {
  display: none;
}
.inscription_tab_item_card {
  width: 280px;
  border-radius: 8px;
  padding: 10px;
  margin-right: 20px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f7f7fa;
}
.inscription_tab_item_card:hover {
  border: 1px solid #d5d6e0;
  box-shadow: 0px 10px 24px 0px rgba(17, 15, 77, 0.1);
}
.inscription_tab_item_card:nth-child(3n) {
  margin-right: 0;
}
.inscription_tab_item_card img {
  width: 260px;
  height: 260px;
}
.tab_item_card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 13px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
  flex-shrink: 0;
}
.tab_item_card_dec {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.inscription_tab_item_card_option {
  margin-top: 10px;
  width: 67px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #0a0a0b;
  cursor: pointer;
}
.inscription_tab_item_card_option img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.inscription_tab_item_card_option_senf {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.send_inscript {
  width: 840px;
  height: 395px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #2e2f3e;
  margin-top: 1.6rem;
}
.maskheadcom {
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  height: 54px;
  padding: 0 20px;
}
.maskheadcomImg {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.send_inscript_box {
  width: 100%;
  padding: 0 20px;
}
.set_input {
  width: 100%;
  height: 44px;
  background: #ffffff;
  border-radius: 4px;
  border: 2px solid #d5d6e0;
  outline: none;
  padding: 10px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 2px;
}
.set_input:focus {
  border: 2px solid #4540d6;
}
.send_inscript_dec {
  margin-top: 10px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.cart_right_gas {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 10px;
}
.cart_right_gas img {
  width: 16px;
  height: 16px;
  margin-right: 3px;
}
.gas_tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gas_tab_item {
  width: 190px;
  height: 60px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #d5d6e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2e2f3e;
  cursor: pointer;
}
.gas_tab_item_sel {
  border: 2px solid #4540d6;
}
.gas_tab_item_value {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7a9be;
}
.gas_input {
  width: 100%;
  position: relative;
  margin-top: 8px;
}
.input_number_year {
  position: absolute;
  right: 30px;
  top: 7px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2e2f3e;
  z-index: 2;
}
.tab_item_right_option_ing {
  opacity: 0.5;
  cursor: not-allowed;
}
.send_btc {
  width: 840px;
  /* height: 481px; */
  padding-bottom: 20px;
  background: #ffffff;
  border-radius: 4px;
  /* border: 1px solid #2e2f3e; */
  margin-top: 1.4rem;
}
.send_btc_title {
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.send_btc_title_balance {
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.inscript_box {
  width: 700px;
  background: #ffffff;
  border: 1px solid #2e2f3e;
  padding-bottom: 20px;
}
.inscript_body_dec {
  margin-top: 20px;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2e2f3e;
  padding: 0 20px;
}
.inscript_button1 {
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
  height: 44px;
  background: #4540d6;
  box-shadow: 0px -4px 8px 0px rgba(82, 82, 102, 0.08);
  border-radius: 4px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
.inscript_step {
  width: 100%;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
}
.inscript_step_img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.inscript_step_info {
  margin-top: 6px;
  font-size: 14px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.inscript_step_info_dec {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  width: 530px;
  word-break: break-all;
}
.inscript_step_info_copy {
  cursor: pointer;
  text-decoration: underline;
  margin-left: 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
}
.inscript_step_info_bing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inscript_step_info_right {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #8184a6;
  padding: 0 20px;
}
.inscript_step_info_right_item {
  display: flex;
  align-items: center;
}
.inscript_body_dec {
  margin-top: 10px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-bottom: 10px;
}
.inscript_button {
  margin-top: 20px;
  width: 100%;
  height: 44px;
  background: #4540d6;
  box-shadow: 0px -4px 8px 0px rgba(82, 82, 102, 0.08);
  border-radius: 4px;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
.jiexiError {
  color: red;
}
.inscript_step_info_right {
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #8184a6;
}
.inscript_step_info_right_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.width1 {
  width: 270px;
}
.width2 {
  width: 100px;
  margin-left: 40px;
}
.width3 {
  width: 140px;
  margin-left: 60px;
}
.width4 {
  width: 80px;
  margin-left: 50px;
}
.width5 {
  width: 70px;
  margin-left: 60px;
  text-align: right;
}
.inscriptin_id_class {
  text-decoration: underline;
  cursor: pointer;
}
.tab_item_card_time {
  margin-top: 15px;
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.tab_item_card_time_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
}
</style>
<template>
  <div class="inscription_app">
    <!-- <div class="inscription_head">
      <span>Beginner's guide</span>
      <img src="../assets/person/icon_stars@2x.png" alt="" class="icon_star">
    </div> -->
    <div class="inscription_title">Inscription</div>
    <div class="inscription_tab">
      <Tabs :value="type" @on-click="changeAddressTypefun">
        <TabPane :label="item.name" :name="item.type" v-for="(item,index) in tabList" :key="index">
          <div class="inscription_tab_box">
            <div class="inscription_search_box">
              <input type="text" @input="isInputFun" v-model="searchText" v-if="type==='Domains'" @keyup.enter="searchFun" placeholder="Search domain name or inscription number" class="search_insription">
              <input type="text" @input="isInputFun" v-model="searchText" v-else-if="type==='Image'" @keyup.enter="searchFun" placeholder="Search  inscription number" class="search_insription">
              <input type="text" @input="isInputFun" v-model="searchText" v-else-if="type==='Other'" @keyup.enter="searchFun" placeholder="Search  inscription number" class="search_insription">
              <img src="../assets/person/icon_44px_search_gray@2x.png" alt="">
            </div>
            <div class="inscription_tab_title" v-if='listShowType===2'>
              <div class="width1">Domain Name</div>
              <div class="width2"></div>
              <div class="width3" style="margin-left:80px">Expiration Date</div>
              <div class="width4">Inscription ID</div>
              <div class="width5">Option</div>
            </div>
            <div class="inscription_tab_list" v-if="listShowType===2">
              <div class="inscription_tab_item" v-for="(item,index) in showInscrptList" :key="index">
                <div class="tab_item_left width1">
                  <div v-if="type==='Domains'">
                    <img :src="item.domain_img" alt="" v-if="item.domain_img.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                    <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                  </div>
                  <div v-else-if="type==='Image'">
                    <img :src="item.detail.content" alt="" v-if="item.detail.content.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                    <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                  </div>
                  <div v-else-if="type==='Other'">
                    <img v-if="item.type==='HTML'" src="../assets/person/pic_html@2x.png" alt="">
                    <img v-if="item.type==='TEXT'" src="../assets/person/pic_txt@2x.png" alt="">
                    <img v-if="item.type==='AUDIO'" src="../assets/person/pic_mp3@2x.png" alt="">
                    <img v-if="item.type==='VIDEO'" src="../assets/person/pic_mp4@2x.png" alt="">
                  </div>
                  <div class="tab_item_left_dec">
                    <span v-if="type==='Domains'">{{item.domain}}</span>
                    <span class="tab_item_left_dec_type" v-if="item.number&&item.number>0" style="text-decoration: underline;cursor: pointer;" @click="toINSFun(item.id)">INS #{{item.number}}</span>
                    <span class="tab_item_left_dec_type" v-else>INS1 -</span>
                  </div>
                </div>
                <div class="tab_item_right_status width2" v-if="item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''" style="color:#EEA119;background:rgba(238,161,25,0.1);cursor: pointer;"
                  @click="openStatusFun(item)">Registering...
                </div>
                <div v-else class="width2"></div>
                <div class="width3" style="margin-left:80px">{{item.expire_date_show}}</div>
                <div class="width4 inscriptin_id_class" @click="toinscriptionFun(item)">{{item.id_show}}</div>
                <div class="tab_item_right_option width5" :class="{tab_item_right_option_ing:item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''||unisatPriver||loginType==='custom'}" @click="sendFun(item)">
                  <img src="../assets/person/icon_16px_send@2x.png" alt="">
                  <span>Send</span>
                </div>
              </div>
            </div>
            <div class="inscription_tab_list_card" v-if="listShowType===1">
              <div class="inscription_tab_item_card" v-for="(item,index) in showInscrptList" :key="index">
                <div v-if="type==='Domains'">
                  <img :src="item.domain_img" alt="" v-if="item.domain_img.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                  <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                </div>
                <div v-else-if="type==='Image'">
                  <img :src="item.detail.content" alt="" v-if="item.detail.content.length>3&&item.state=='9'||item.state=='0'||item.state=='5'||item.state==''">
                  <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                </div>
                <div v-else-if="type==='Other'">
                  <img v-if="item.type==='HTML'" src="../assets/person/pic_html@2x.png" alt="">
                  <img v-if="item.type==='TEXT'" src="../assets/person/pic_txt@2x.png" alt="">
                  <img v-if="item.type==='AUDIO'" src="../assets/person/pic_mp3@2x.png" alt="">
                  <img v-if="item.type==='VIDEO'" src="../assets/person/pic_mp4@2x.png" alt="">
                </div>
                <div class="tab_item_card">
                  <span v-if="type==='Domains'">{{item.domain}}</span>
                  <span class="tab_item_card_dec" v-if="item.number&&item.number>0" style="text-decoration: underline;cursor: pointer;" @click="toINSFun(item.id)">INS #{{item.number}}</span>
                  <span class="tab_item_card_dec" v-else>INS -</span>
                </div>
                <div class="inscription_tab_item_card_option_senf">
                  <div class="inscription_tab_item_card_option" :class="{tab_item_right_option_ing:item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''||unisatPriver||loginType==='custom'}"
                    @click="sendFun(item)">
                    <img src="../assets/person/icon_16px_send@2x.png" alt="">
                    <span>Send</span>
                  </div>
                  <div class="tab_item_right_status" v-if="item.state!='9'&&item.state!='0'&&item.state!='5'&&item.state!=''" style="color:#EEA119;background:rgba(238,161,25,0.1);cursor: pointer;"
                    @click="openStatusFun(item)">Registering...</div>
                  <!-- <div class="tab_item_card" v-else>
                    <span class="tab_item_card_dec">Inscription ID</span>
                    <span class="tab_item_card_dec" @click="toinscriptionFun(item)" style="text-decoration: underline;cursor: pointer;">{{item.id_show}}</span>
                  </div> -->
                </div>
                <div class="tab_item_card_time">
                  <div class="tab_item_card_time_item">
                    <span>Create Date</span>
                    <span>{{item.register_date_show}}</span>
                  </div>
                  <div class="tab_item_card_time_item">
                    <span>Registration Date</span>
                    <span>{{item.register_date_show}}</span>
                  </div>
                  <div class="tab_item_card_time_item">
                    <span>Expiration Date</span>
                    <span>{{item.expire_date_show}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="pageBox">
              <Page :total="40" size="small" @on-change="changePageFun" />
            </div> -->
          </div>
        </TabPane>
      </Tabs>
      <div class="inscription_showtype">
        <img src="../assets/person/icon_24px_card@2x.png" alt="" @click="changeShowFun(1)">
        <img src="../assets/person/icon_24px_list@2x.png" alt="" @click="changeShowFun(2)" style="margin-left: 10px;">
      </div>
    </div>
    <div class="mask" v-if="send_inscript_boolean">
      <div class="send_btc">
        <div class="displayCom  maskheadcom">
          <span>Send #{{selectItem.number}}</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(1)">
        </div>
        <div class="send_inscript_box">
          <div class="send_btc_title">To</div>
          <input v-model="sendBtcaddress" @input="jiexiFun" type="text" class="set_input" placeholder="Bitcoin address or .btc domain name">
          <div :class="{jiexiError:!jiexiType}">{{jiexiAddress}}</div>
          <div class="send_inscript_dec">Select the network fee you want to pay:</div>
          <div class="cart_right_gas">
            <img src="../assets/cart/16px_icon_gasrate@2x.png" alt="">
            <span>Gas rate</span>
          </div>
          <div class="gas_tab">
            <div class="gas_tab_item" @click="changeGasFun(item)" :class="{gas_tab_item_sel:item.isSelect}" v-for="(item,index) in gasList" :key="index">
              <span>{{item.name}}</span>
              <span class="gas_tab_item_value">{{item.value}} sats/vB</span>
            </div>
          </div>
          <div class="gas_input">
            <span class="input_number_year">sats/vB</span>
            <InputNumber :min="1" v-model="gasSelectData.value" disabled class="InputNumberClass" style="width: 100%;" v-if="gasSelectData.name!='Custom'" />
            <InputNumber @on-change="changeGasInputFun" :min="1" v-model="gasSelectData.customValue" class="InputNumberClass" style="width: 100%;" v-else />
            <div v-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.economyFee" style="color:red">Minimun Fee：{{gasSelectData.economyFee}}sats/vB</div>
            <div v-else-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.avg">This fee is below the average, which may lead to a long wait time for inscription.</div>
          </div>
          <div class="inscript_button" @click="confirmFun">
            <Icon type="ios-loading" v-if="loadingBoolean" size='24' style="margin-right:5px;" color="#ffffff" class='demo-spin-icon-load' />
            <span>Confirm</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="inscritpBoolean">
      <div class="inscript_box" style="margin-top:1.8rem">
        <div class="displayCom payment_status_head maskheadcom">
          <span>Inscribe State</span>
          <img src="../assets/order/icon_close_dialog@2x.png" class="maskheadcomImg" alt="" @click="choseMaskFun(2)">
        </div>
        <div class="inscript_body">
          <div class="inscript_step">
            <img src="../assets/order/icon_processing_ok@2x.png" class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <span>Locked The Dominate</span>
              <span class="inscript_step_info_dec">This domain name has been locked. Don't worry about being preempted.</span>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing@2x.png" v-if="full_state===1" class="inscript_step_img demo" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state>1&&full_state!=9' class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state===0' class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <div>
                <span>Fund Transfer Pending</span>
                <!-- <span class="inscript_step_info_copy">Copy Message ID</span> -->
              </div>
              <span class="inscript_step_info_dec">Confirm the remaining 2 blocks.</span>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing_waiting@2x.png" v-if="full_state===1" class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing@2x.png" v-else-if="full_state===2" class="inscript_step_img demo" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state>2&&full_state!=9' class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state===0' class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <span>Inscribing</span>
              <div class="inscript_step_info_bing">
                <span class="inscript_step_info_dec">Confirm the remaining 2 blocks.</span>
              </div>
            </div>
          </div>
          <div class="inscript_step">
            <img src="../assets/order/icon_processing_waiting@2x.png" v-if="full_state===1" class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing_waiting@2x.png" v-else-if="full_state===2" class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing@2x.png" v-else-if="full_state===3" class="inscript_step_img demo" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state>3&&full_state!=9' class="inscript_step_img" alt="">
            <img src="../assets/order/icon_processing_ok@2x.png" v-else-if='full_state===0' class="inscript_step_img" alt="">
            <div class="inscript_step_info">
              <span>Inscription Transfer Pending </span>
              <span class="inscript_step_info_dec">Confirm the remaining 2 blocks.</span>
            </div>
          </div>
          <div class="inscript_body_dec">The domain name transfer may take some time.</div>
          <div class="inscript_step_info_right">
            <div class="inscript_step_info_right_item">
              <span>Network rate:</span>
              <span style="margin-left:8px">{{networkRate}} sats/vB</span>
            </div>
            <div class="inscript_step_info_right_item">
              <span>Your rate:</span>
              <span style="margin-left:8px">{{yourRate}} sats/vB</span>
            </div>
          </div>
          <div class="inscript_button1" @click="choseMaskFun(2)">OK</div>
        </div>
      </div>
    </div>
    <Spin size="large" fix :show="spanBoolean"></Spin>
  </div>
</template>
  
<script>
import { Tabs, TabPane, Page, InputNumber, Message, Spin, Icon } from 'view-ui-plus'
import { ethers } from "ethers";
import { Buffer } from "buffer";
import BIP32Factory from "bip32";
import * as bitcoin from "bitcoinjs-lib";
const ecc = require('@bitcoinerlab/secp256k1');
import apis from '../util/apis/apis';
import { validate } from "bitcoin-address-validation";
import { generateBitcoinAddr, formatUTXOs, formatInscriptions, sendBTCTransFun } from '../util/func/index'
import { number } from 'bitcoinjs-lib/src/script';
bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);
const moment = require('moment');
const defaultPath = "m/86'/0'/0'/0/0";
const GivingMsg = "Welcome to the secure sites, btcdomains.io and btcwallet.network! Please ensure you are visiting the correct URLs: btcdomains.io and btcwallet.network. Engaging in transactions or signing activities outside of these official sites may expose your private key and put your security at risk."
export default {
  components: {
    Tabs, TabPane, Page, InputNumber, Spin, Icon
  },
  data() {
    return {
      yourRate: null,
      networkRate: null,
      loginType: null,
      sendRealAddress: null,
      loadingBoolean: false,
      balance: null,
      sendBtcaddress: null,
      amount: null,
      gasList: [],
      sendAmount: null,
      jiexiAddress: null,
      jiexiType: false,
      monywallet: null,
      type: "Domains",
      listShowType: 2,
      searchText: null,
      tabList: [
        {
          name: "Domains",
          type: "Domains"
        },
        {
          name: "IMG",
          type: "Image"
        },
        {
          name: "Other",
          type: "Other"
        },

      ],
      gasList: [],
      btcaddress: null,
      send_inscript_boolean: false,
      gasSelectData: {},
      inscrptList: [],
      showInscrptList: [],
      spanBoolean: false,
      public_key: null,
      selectItem: {},
      unisatPriver: false,
      inscritpBoolean: false,
      full_state: null
    }
  },
  methods: {
    inscriptionstype(element) {
      switch (element.detail.content_type) {
        case 'image/png':
          element.type = 'IMAGE'
          break;

        case 'image/jpg':
          element.type = 'IMAGE'
          break;

        case 'image/jpeg':
          element.type = 'IMAGE'
          break;

        case 'image/webp':
          element.type = 'IMAGE'
          break;

        case 'image/svg+xml':
          element.type = 'IMAGE'
          break;

        case 'image/gif':
          element.type = "GIF"
          break;

        case 'text/plain;charset=utf-8':
          element.type = "TEXT"
          break;

        case 'text/html':
          element.type = "HTML"
          break;

        case 'text/html;charset=utf-8':
          element.type = "HTML"
          break;

        case 'application/json':
          element.type = "TEXT"
          break;

        case 'mp3':
          element.type = "AUDIO"
          break;

        case 'mp4':
          element.type = "VIDEO"
          break;

        default:
          element.type = "OTHER"
          break;
      }
      return element
    },
    toINSFun(id) {
      let url = "https://ordinals.com/inscription/" + id;
      window.open(url, '_blank');
    },
    openStatusFun(item) {
      this.full_state = parseInt(item.state);
      this.queryDomainMintFeeFun(item)
    },
    toinscriptionFun(item) {
      let id = item.id.slice(0, item.id.length - 2);
      let url = "https://www.blockchain.com/explorer/transactions/btc/" + id;
      window.open(url, '_blank');
    },
    queryDomainMintFeeFun(item) {
      this.spanBoolean = true;
      let param = {};
      param.domain = item.domain
      this.$axios({
        method: "post",
        url: apis.queryDomainMintFeeApi,
        data: param,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          this.spanBoolean = false;
          if (res.data.code === 0) {
            this.inscritpBoolean = true;
            this.yourRate = res.data.data.rate_fee;
            this.networkRate = res.data.data.fastest_fee;
          } else {
            // Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.spanBoolean = false;
      });
    },
    goToCartFun() {
      this.spanBoolean = true;
      this.$axios({
        method: "get",
        url: apis.getRateFeeApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            let data = res.data.data;
            this.gasList = this.recommendedFeeFun(data.fastestFee, data.halfHourFee, data.hourFee, this.gasSelectData.name)
            if (!this.gasSelectData.name) {
              this.gasSelectData.name = this.gasList[0].name;
              this.gasSelectData.fast = data.fastestFee;
              this.gasSelectData.avg = data.halfHourFee
              this.gasSelectData.slow = data.hourFee
              this.gasSelectData.economyFee = data.economyFee
              this.gasSelectData.value = this.gasList[0].value
            }
            this.spanBoolean = false;
            this.send_inscript_boolean = true;
          } else {
            Message.error(res.data.message)
            this.spanBoolean = false;
          }
        }
      }).catch(err => {
      });
    },
    jiexiFun(value) {
      if (this.sendBtcaddress.endsWith(".btc")) {
        this.domainChangeFun()
      }
    },
    domainChangeFun() {
      let param = {};
      param.domain = this.sendBtcaddress
      this.$axios({
        method: "post",
        url: apis.domainChangeApi,
        data: param,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            this.jiexiAddress = res.data.data.owner_address;
            this.jiexiType = true
            this.sendRealAddress = res.data.data.owner_address;
            return
          } else {
            this.jiexiAddress = "the address is  error"
            this.jiexiType = false;
          }
        }
      }).catch(err => {
      });
    },
    changeGasInputFun(value) {
      if (!value) {
        return
      }
      if (this.gasSelectData.slow > value) {
        return
      }
      if (this.gasSelectData.avg > value) {
        return
      }
      this.gasSelectData.customValue = value
    },
    changeAddressTypefun(value) {
      this.type = value
      if (value === "Image") {
        this.listShowType = 1;
      } else {
        this.listShowType = 2;
      }
      this.searchText = null;
      this.addressFun()
    },
    sendFun(item) {
      this.selectItem = item
      if (item.state != '9' && item.state != '0' && item.state != '5' && item.state != '') {
        return
      }
      if (this.unisatPriver) {
        return
      }
      if (this.loginType === 'custom') {
        return
      }
      this.goToCartFun()
    },
    setDomainFun(item) {
      this.submitInsTxAction(item)
    },
    async submitInsTxAction(item) {
      // to address
      if (!this.sendBtcaddress) {
        Message.warning("to address must not be empty");
        return;
      }

      if (this.sendBtcaddress.endsWith(".btc")) {
        if (!this.sendRealAddress) {
          Message.warning("to address must not be empty");
          return;
        }
        if (!validate(this.sendRealAddress)) {
          Message.warning("to address is not valid");
          return;
        }
      } else {
        if (!validate(this.sendBtcaddress)) {
          Message.warning("to address is not valid");
          return;
        }
        this.sendRealAddress = this.sendBtcaddress
      }
      let feeRate = this.gasSelectData.value;
      this.loadingBoolean = true
      const privKey = await generateBitcoinAddr(localStorage.walletType);
      if (!privKey) {
        this.loadingBoolean = false
        return;
      }
      let addr = localStorage.getItem("bitcoin_address");

      this.queryExtIns(addr, privKey, this.sendRealAddress, feeRate, item.detail.id)
    },
    async queryExtIns(address, privKey, tempAddr, feeRate, inscriptionID) {
      this.$axios({
        method: "get",
        url: apis.walletInfoApi + "?address=" + address,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async res => {
        if (res.status == "200") {
          let retOut = res.data;
          let waltOut = retOut.data;
          let gutxos = formatUTXOs(waltOut.txrefs);
          let insOutPut = formatInscriptions(waltOut.inscriptions_by_outputs);
          let sBtcResq = {
            privateKey: privKey,
            utxos: gutxos,
            inscriptions: insOutPut,
            inscriptionID: inscriptionID,
            receiver: tempAddr,
            feeRate: feeRate,
          };
          const { txID, txHex } = await sendBTCTransFun(sBtcResq, "inscription");
          // submit
          this.pushTx(txHex);
        }
      }).catch(err => {
        this.loadingBoolean = false;
      });
    },
    pushTx(rawtx) {
      let param = {};
      param.rawtx = rawtx
      this.$axios({
        method: "post",
        data: param,
        url: apis.pushTxApi,
        headers: {
          "Content-Type": "application/json",
          "X-Client": "UniSat Wallet",
        },
      }).then(res => {
        if (res.status == "200") {
          this.loadingBoolean = false;
          if (res.data.message === 'OK') {
            this.send_inscript_boolean = false
            Message.success("tx: " + res.data.result + " has been publiced");
          } else {
            Message.info(res.data.message);
          }
        }
      }).catch(err => {
        this.loadingBoolean = false;
      });
    },
    choseMaskFun(type) {
      if (type === 1) {
        this.loadingBoolean = false
        this.send_inscript_boolean = false
      } else if (type === 2) {
        this.inscritpBoolean = false
      }
    },
    changeGasFun(item) {
      this.gasList.forEach(element => {
        element.isSelect = false
      })
      item.isSelect = true;
      if (item.name === 'Custom') {
        this.gasSelectData.customValue = this.gasSelectData.value
        this.gasSelectData.name = "Custom"
        return
      }
      this.gasSelectData.value = item.value;
      this.gasSelectData.name = item.name;
    },
    isInputFun(e) {
      this.searchText = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
      if (!e.target.value) {
        this.showInscrptList = this.inscrptList;
      }
    },
    searchFun() {
      // searchText
      let arr = [];
      this.inscrptList.forEach(element => {
        if (element.domain.includes(this.searchText) || element.num.toString().includes(this.searchText)) {
          arr.push(element)
        }
      })
      this.showInscrptList = arr;
    },
    changePageFun(e) {
    },
    changeShowFun(type) {
      this.listShowType = type
    },
    recommendedFeeFun(fastestFee, halfHourFee, hourFee, type) {
      let arr = [];
      let temp1 = {};
      let temp2 = {};
      let temp3 = {};
      let temp4 = {};
      temp1.name = "Fast";
      temp1.value = fastestFee;
      temp1.fast = fastestFee;
      temp1.isSelect = false;

      temp2.name = "Avg";
      temp2.value = halfHourFee;
      temp2.avg = halfHourFee;
      temp2.isSelect = false;

      temp3.name = "Slow";
      temp3.value = hourFee;
      temp3.slow = hourFee;
      temp3.isSelect = false;

      temp4.name = "Custom";
      temp4.value = null;
      temp4.isSelect = false;
      arr.push(temp1);
      arr.push(temp2);
      arr.push(temp3);
      arr.push(temp4);
      if (type) {
        arr.forEach(element => {
          if (element.name === type) {
            element.isSelect = true
          } else {
            element.isSelect = false
          }
        })
      } else {
        arr[0].isSelect = true
      }
      return arr
    },
    async confirmFun() {
      if (this.selectItem.state != '9' && this.selectItem.state != '0' && this.selectItem.state != '5' && this.selectItem.state != '') {
        return
      }
      this.setDomainFun(this.selectItem)
    },
    showAddressFun(address) {
      if (address) {
        let addressBefor = address.slice(0, 8);
        let addressBehand = address.slice(address.length - 8)
        let newAddress = addressBefor + "..." + addressBehand
        return newAddress
      } else {
        return address
      }
    },
    addressFun() {
      this.spanBoolean = true
      let param = {};
      param.inscribe_type = this.type;
      if (this.searchText) {
        param.address = this.searchText
      } else {
        param.address = this.monywallet
      }
      param.sign = ""
      this.$axios({
        method: "post",
        data: param,
        url: apis.addressApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            res.data.data.result.forEach(element => {
              this.inscriptionstype(element)
              if (element.register_date) {
                element.register_date_show = moment(element.register_date).format("YYYY-MM-DD HH:mm:ss")
              } else {
                element.register_date_show = "-"
              }
              if (element.expire_date) {
                element.expire_date_show = moment(element.expire_date).format("YYYY-MM-DD HH:mm:ss")
              } else {
                element.expire_date_show = "-"
              }
              if (element.id && element.id.length > 10) {
                let index1 = element.id.slice(0, 4)
                let index2 = element.id.slice(element.id.length - 4)
                element.id_show = index1 + "..." + index2
              } else {
                element.id_show = "-"
              }
            })
            this.inscrptList = res.data.data.result;
            this.showInscrptList = res.data.data.result;
            this.$emit('imgNum', res.data.data.total)
            this.$emit('og', res.data.data.og)
            this.spanBoolean = false
          } else {
            this.spanBoolean = false
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
        this.spanBoolean = false
      });
    },
  },
  mounted() {
    if (localStorage.walletType != "metaMask") {
      this.unisatPriver = true
    } else {
      this.unisatPriver = false
    }
    this.loginType = localStorage.walletType
    this.monywallet = localStorage.bitcoin_address;
    this.public_key = localStorage.public_key;
    this.balance = localStorage.balance;
    this.addressFun();
  },
}
</script>
  