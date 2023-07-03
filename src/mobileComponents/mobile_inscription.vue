  
<style scoped>
.inscription_app {
  width: 100%;
}
.inscription_tab {
  width: 100%;
  position: relative;
}
.inscription_showtype {
  display: flex;
  align-items: center;
}
.inscription_showtype img {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.inscription_tab_box {
  margin-top: 0.44rem;
  width: 100%;
  position: relative;
  padding: 0 0.2rem;
}
.inscription_search_box {
  width: 100%;
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inscription_search_input {
  width: 5.2rem;
  height: 0.8rem;
  position: relative;
}
.inscription_search_input img {
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  right: 0;
  top: 0;
}
.search_insription {
  height: 0.8rem;
  border: 0.02rem solid #d5d6e0;
  outline: 0;
  padding: 0 0.2rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  width: 100%;
  padding-right: 0.8rem;
}
.inscription_tab_list {
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  height: 10.4rem;
  margin-top: 0.4rem;
}
.inscription_tab_list::-webkit-scrollbar {
  display: none;
}
.inscription_tab_item {
  width: 100%;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
}
.tab_item_right {
  display: flex;
  align-items: center;
}
.tab_item_right_status {
  height: 0.4rem;
  background: rgba(238, 161, 25, 0.1);
  border-radius: 0.2rem;
  padding: 0 0.12rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #eea119;
}
.tab_item_right_option {
  width: 1.34rem;
  height: 0.64rem;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.16rem;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #0a0a0b;
  cursor: pointer;
}
.tab_item_right_option img {
  width: 0.32rem;
  height: 0.32rem;
}
.inscription_tab_list_card {
  width: 100%;
  animation: searchbox_card 0.5s forwards;
  overflow: hidden;
  overflow-y: auto;
  height: 0;
  margin-top: 0.4rem;
}
.inscription_tab_list::-webkit-scrollbar {
  display: none;
}
@keyframes searchbox_card {
  from {
    height: 0;
  }
  to {
    height: 10.4rem;
  }
}
.inscription_tab_item_card {
  width: 100%;
  padding: 0.4rem;
  margin-bottom: 0.2rem;
}
.inscription_tab_item_card_head {
  width: 100%;
  height: 5.9rem;
}
.inscription_tab_item_card_head img {
  width: 100%;
  height: 100%;
  margin-bottom: 0.2rem;
}
.maskheadcom {
  font-size: 0.323rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #2e2f3e;
  height: 1.08rem;
  padding: 0 0.4rem;
}
.maskheadcomImg {
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
.send_inscript_box {
  width: 100%;
  padding: 0 0.4rem;
}
.set_input {
  width: 100%;
  height: 0.88rem;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #d5d6e0;
  outline: none;
  padding: 0 0.2rem;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 0rem;
}
.set_input:focus {
  border: 0.02rem solid #4540d6;
}
.send_inscript_dec {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.cart_right_gas {
  display: flex;
  align-items: center;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  margin-top: 0.2rem;
}
.cart_right_gas img {
  width: 0.32rem;
  height: 0.32rem;
  margin-right: 0.06rem;
}
.gas_tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.2rem;
  flex-wrap: wrap;
}
.gas_tab_item {
  width: 3.1rem;
  height: 1.2rem;
  background: #ffffff;
  border-radius: 0.08rem;
  border: 0.02rem solid #d5d6e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
  font-size: 0.28rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2e2f3e;
  cursor: pointer;
  margin-bottom: 0.1rem;
}
.gas_tab_item_sel {
  border: 0.02rem solid #4540d6;
}
.gas_tab_item_value {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7a9be;
}
.gas_input {
  width: 100%;
  position: relative;
  margin-top: 0.2rem;
}
.tab_item_right_option_ing {
  opacity: 0.5;
  cursor: not-allowed;
}
.send_btc {
  width: 7.1rem;
  padding-bottom: 0.4rem;
  background: #ffffff;
  border-radius: 0.08rem;
  margin-top: 1rem;
}
.send_btc_title {
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inscript_box {
  width: 7.1rem;
  background: #ffffff;
  border: 0.02rem solid #2e2f3e;
  padding-bottom: 0.4rem;
}
.inscript_body {
  margin-top: 0.2rem;
  width: 100%;
  padding: 0 0.4rem;
}
.inscript_body_dec {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2e2f3e;
  margin-bottom: 0.2rem;
}
.inscript_button1 {
  margin: 0 auto;
  margin-top: 0.4rem;
  width: 100%;
  height: 0.88rem;
  background: #4540d6;
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(82, 82, 102, 0.08);
  border-radius: 0.08rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 0.88rem;
  cursor: pointer;
  position: relative;
}
.inscript_step {
  width: 100%;
  padding: 0.2rem;
  display: flex;
  margin-bottom: 0.2rem;
}
.inscript_step_img {
  width: 0.64rem;
  height: 0.64rem;
  margin-right: 0.2rem;
}
.inscript_step_info {
  margin-top: 0.12rem;
  font-size: 0.28rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #2e2f3e;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.inscript_step_info_dec {
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
  width: 4.86rem;
  word-break: break-all;
}
.inscript_step_info_copy {
  cursor: pointer;
  text-decoration: underline;
  margin-left: 0.2rem;
  font-size: 0.24rem;
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
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #8184a6;
}
.inscript_button {
  margin-top: 0.4rem;
  width: 100%;
  height: 0.88rem;
  background: #4540d6;
  box-shadow: 0 -0.08rem 0.16rem 0 rgba(82, 82, 102, 0.08);
  border-radius: 0.08rem;
  font-size: 0.28rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
.jiexiError {
  color: red;
}
.inscript_step_info_right_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inscriptin_id_class {
  text-decoration: underline;
  cursor: pointer;
}
.inscription_tab_item_option {
  margin-top: 0.2rem;
  width: 100%;
  height: 0.64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inscription_tab_item_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.88rem;
}
.inscription_tab_item_head_left {
  display: flex;
  align-items: center;
}
.inscription_tab_item_head_left img {
  width: 0.88rem;
  height: 0.88rem;
}
.inscription_tab_item_head_com {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.2rem;
  height: 0.88rem;
}
.inscription_tab_item_head_com_item {
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.26rem;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #090c1d;
}
.inscription_tab_item_box {
  margin-top: 0.32rem;
  width: 100%;
  font-size: 0.24rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #a7a9be;
}
.inscription_tab_item_box_item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.04rem;
}
.inscription_tab_item_card_middle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  margin-top: 0.2rem;
}
.input_number_year_position {
  position: absolute;
  right: 0.88rem;
  top: 0.05rem;
  height: 0.28rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7a9be;
}
</style>
    <template>
  <div class="inscription_app">
    <div class="inscription_tab">
      <van-tabs @click-tab="changeAddressTypefun" v-model:active="type">
        <van-tab :title="item.name" :name="item.type" v-for="(item,index) in tabList" :key="index">
          <div class="inscription_tab_box">
            <div class="inscription_search_box">
              <div class="inscription_search_input">
                <input type="text" @input="isInputFun" v-model="searchText" v-if="type==='Domains'" @keyup.enter="searchFun" placeholder="Search domain name or inscription..." class="search_insription">
                <input type="text" @input="isInputFun" v-model="searchText" v-else-if="type==='Image'" @keyup.enter="searchFun" placeholder="Search  inscription number" class="search_insription">
                <input type="text" @input="isInputFun" v-model="searchText" v-else-if="type==='Other'" @keyup.enter="searchFun" placeholder="Search  inscription number" class="search_insription">
                <img src="../assets/person/icon_44px_search_gray@2x.png" alt="" @click="searchFun">
              </div>
              <div class="inscription_showtype">
                <img src="../assets/person/icon_24px_card@2x.png" alt="" @click="changeShowFun(1)">
                <img src="../assets/person/icon_24px_list@2x.png" alt="" @click="changeShowFun(2)" style="margin-left: 0.2rem;">
              </div>
            </div>
            <div class="inscription_tab_list" v-if="listShowType===2">
              <div class="inscription_tab_item" v-for="(itemInscript,indexInscript) in showInscrptList" :key="indexInscript">
                <div class="inscription_tab_item_head">
                  <div class="inscription_tab_item_head_left">
                    <div v-if="type==='Domains'">
                      <img :src="itemInscript.domain_img" alt="" v-if="itemInscript.domain_img.length>3&&itemInscript.state=='9'||itemInscript.state=='0'||itemInscript.state=='5'||itemInscript.state==''">
                      <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                    </div>
                    <div v-else-if="type==='Image'">
                      <img :src="itemInscript.detail.content" alt="" v-if="itemInscript.detail.content.length>3&&itemInscript.state=='9'||itemInscript.state=='0'||itemInscript.state=='5'||itemInscript.state==''">
                      <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                    </div>
                    <div v-else-if="type==='Other'">
                      <img v-if="itemInscript.type==='HTML'" src="../assets/person/pic_html@2x.png" alt="">
                      <img v-if="itemInscript.type==='TEXT'" src="../assets/person/pic_txt@2x.png" alt="">
                      <img v-if="itemInscript.type==='AUDIO'" src="../assets/person/pic_mp3@2x.png" alt="">
                      <img v-if="itemInscript.type==='VIDEO'" src="../assets/person/pic_mp4@2x.png" alt="">
                    </div>
                    <div class="inscription_tab_item_head_com">
                      <div class="inscription_tab_item_head_com_item">{{itemInscript.domain}}</div>
                      <div class="inscription_tab_item_head_com_item">Hash ID</div>
                    </div>
                  </div>
                  <div class="inscription_tab_item_head_com">
                    <div class="inscription_tab_item_head_com_item">
                      <span class="tab_item_left_dec_type" v-if="itemInscript.number&&itemInscript.number>0" style="text-decoration: underline;cursor: pointer;" @click="toINSFun(itemInscript.id)">INS
                        #{{itemInscript.number}}</span>
                      <span class="tab_item_left_dec_type" v-else>INS -</span>
                    </div>
                    <div class="inscription_tab_item_head_com_item" @click="toinscriptionFun(itemInscript)">{{itemInscript.id_show}}</div>
                  </div>
                </div>
                <div class="inscription_tab_item_box">
                  <div class="inscription_tab_item_box_item">
                    <span>Create Date</span>
                    <span>{{itemInscript.register_date_show}}</span>
                  </div>
                  <div class="inscription_tab_item_box_item">
                    <span>Registration Date</span>
                    <span>{{itemInscript.register_date_show}}</span>
                  </div>
                  <div class="inscription_tab_item_box_item">
                    <span>Expiration Date</span>
                    <span>{{itemInscript.expire_date_show}}</span>
                  </div>
                </div>
                <div class="inscription_tab_item_option">
                  <div class="tab_item_right_option"
                    :class="{tab_item_right_option_ing:itemInscript.state!='9'&&itemInscript.state!='0'&&itemInscript.state!='5'&&itemInscript.state!=''||unisatPriver||loginType==='custom'}"
                    @click="sendFun(itemInscript)">
                    <img src="../assets/person/icon_16px_send@2x.png" alt="">
                    <span>Send</span>
                  </div>
                  <div class="tab_item_right_status" v-if="itemInscript.state!='9'&&itemInscript.state!='0'&&itemInscript.state!='5'&&itemInscript.state!=''"
                    style="color:#EEA119;background:rgba(238,161,25,0.1);cursor: pointer;" @click="openStatusFun(itemInscript)">Registering...
                  </div>
                </div>
              </div>
            </div>
            <div class="inscription_tab_list_card" v-if="listShowType===1">
              <div class="inscription_tab_item_card" v-for="(itemInscript,index) in showInscrptList" :key="index">
                <div v-if="type==='Domains'" class="inscription_tab_item_card_head">
                  <img :src="itemInscript.domain_img" alt="" v-if="itemInscript.domain_img.length>3&&itemInscript.state=='9'||itemInscript.state=='0'||itemInscript.state=='5'||itemInscript.state==''">
                  <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                </div>
                <div v-else-if="type==='Image'" class="inscription_tab_item_card_head">
                  <img :src="itemInscript.detail.content" alt="" v-if="itemInscript.detail.content.length>3&&itemInscript.state=='9'||itemInscript.state=='0'||itemInscript.state=='5'||itemInscript.state==''">
                  <img src="../assets/person/img_registering_44px@2x.png" alt="" v-else>
                </div>
                <div v-else-if="type==='Other'" class="inscription_tab_item_card_head">
                  <img v-if="itemInscript.type==='HTML'" src="../assets/person/pic_html@2x.png" alt="">
                  <img v-if="itemInscript.type==='TEXT'" src="../assets/person/pic_txt@2x.png" alt="">
                  <img v-if="itemInscript.type==='AUDIO'" src="../assets/person/pic_mp3@2x.png" alt="">
                  <img v-if="itemInscript.type==='VIDEO'" src="../assets/person/pic_mp4@2x.png" alt="">
                </div>
                <div class="inscription_tab_item_card_middle">
                  <div class="inscription_tab_item_head_com" style="margin-left:0">
                    <div class="inscription_tab_item_head_com_item">{{itemInscript.domain}}</div>
                    <div class="inscription_tab_item_head_com_item">Hash ID</div>
                  </div>
                  <div class="inscription_tab_item_head_com" style="margin-left:0">
                    <div class="inscription_tab_item_head_com_item">
                      <span class="tab_item_left_dec_type" v-if="itemInscript.number&&itemInscript.number>0" style="text-decoration: underline;cursor: pointer;" @click="toINSFun(itemInscript.id)">INS
                        #{{itemInscript.number}}</span>
                      <span class="tab_item_left_dec_type" v-else>INS -</span>
                    </div>
                    <div class="inscription_tab_item_head_com_item" @click="toinscriptionFun(itemInscript)">{{itemInscript.id_show}}</div>
                  </div>
                </div>
                <div class="inscription_tab_item_box">
                  <div class="inscription_tab_item_box_item">
                    <span>Create Date</span>
                    <span>{{itemInscript.register_date_show}}</span>
                  </div>
                  <div class="inscription_tab_item_box_item">
                    <span>Registration Date</span>
                    <span>{{itemInscript.register_date_show}}</span>
                  </div>
                  <div class="inscription_tab_item_box_item">
                    <span>Expiration Date</span>
                    <span>{{itemInscript.expire_date_show}}</span>
                  </div>
                </div>
                <div class="inscription_tab_item_option">
                  <div class="tab_item_right_option"
                    :class="{tab_item_right_option_ing:itemInscript.state!='9'&&itemInscript.state!='0'&&itemInscript.state!='5'&&itemInscript.state!=''||unisatPriver||loginType==='custom'}"
                    @click="sendFun(itemInscript)">
                    <img src="../assets/person/icon_16px_send@2x.png" alt="">
                    <span>Send</span>
                  </div>
                  <div class="tab_item_right_status" v-if="itemInscript.state!='9'&&itemInscript.state!='0'&&itemInscript.state!='5'&&itemInscript.state!=''"
                    style="color:#EEA119;background:rgba(238,161,25,0.1);cursor: pointer;" @click="openStatusFun(itemInscript)">Registering...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
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
          <div :class="{jiexiError:!jiexiType}">{{ showAddressFun(jiexiAddress)}}</div>
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
            <span class="input_number_year_position">sats/vB</span>
            <van-stepper integer v-if="gasSelectData.name!='Custom'" :min="0" v-model="gasSelectData.value" disabled input-width="5rem" button-size="0.48rem" />
            <van-stepper integer v-else @change="changeGasInputFun" :min="0" v-model="gasSelectData.customValue" input-width="5rem" button-size="0.48rem" />
            <div v-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.economyFee" style="color:red">Minimun Fee：{{gasSelectData.economyFee}}sats/vB</div>
            <div v-else-if="gasSelectData.name==='Custom'&&gasSelectData.customValue<gasSelectData.avg">This fee is below the average, which may lead to a long wait time for inscription.</div>
          </div>
          <div class="inscript_button" @click="confirmFun">
            <div class="mobile_button_loading" v-if="loadingBoolean" style="margin-right:0.1rem;" color="#1989fa">
              <van-loading type="spinner" color="#1989fa" class='vant_loading' />
            </div>
            <span>Confirm</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="inscritpBoolean">
      <div class="inscript_box" style="margin-top:0.8rem">
        <div class="displayCom  maskheadcom">
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
              <span style="margin-left:0.16rem">{{networkRate}} sats/vB</span>
            </div>
            <div class="inscript_step_info_right_item">
              <span>Your rate:</span>
              <span style="margin-left:0.16rem">{{yourRate}} sats/vB</span>
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
      inscritpBooleanLunXun: true,
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
      this.queryDomainFun(item)
    },
    toinscriptionFun(item) {
      let id = item.id.slice(0, item.id.length - 2);
      let url = "https://www.blockchain.com/explorer/transactions/btc/" + id;
      window.open(url, '_blank');
    },
    queryDomainFun(item) {
      this.spanBoolean = true;
      let param = {};
      param.domain = item.domain
      this.$axios({
        method: "post",
        data: param,
        url: apis.queryDomainApi,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        if (res.status == "200") {
          if (res.data.code === 0) {
            this.full_state = res.data.data.dom_state;
            this.queryDomainMintFeeFun(item)
          } else {
            Message.error(res.data.message)
          }
        }
      }).catch(err => {
      });
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
      this.type = value.name
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
        this.inscritpBoolean = false;
        this.inscritpBooleanLunXun = false;
        this.searchText = null;
        this.addressFun()
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
      if (this.loadingBoolean) {
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
      