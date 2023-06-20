<style scoped>
.bsite_app {
}
.bsite-content-view {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.nav-view {
  margin-top: 20px;
  display: flex;
}

.nav-view img {
  cursor: pointer;
}

.tip-view {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.step-titl-view {
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #4540d6;
  line-height: 20px;
}

.step-cont-view {
  font-size: 12px;
  font-weight: 400;
  color: #626585;
  line-height: 24px;
}

.join-view {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.gen-view {
  margin: 0 auto;
  width: 335px;
  height: 50px;
  margin-bottom: 20px;
  background: #4540d6;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}

.titl-prompt {
  height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #2e2f3e;
  line-height: 17px;
}

.titl-tips {
  height: 17px;
  font-size: 12px;
  font-weight: 600;
  color: #2e2f3e;
  line-height: 17px;
}

.output-view {
  margin: 0 auto;
  max-width: 1160px;
  margin-bottom: 20px;
  background: #fcfcfc;
  border-radius: 4px;
  border: 1px solid #c9cdd4;
}

.json-view {
  padding: 20px;
  min-height: 119px;
  font-size: 12px;
  font-weight: 400;
  color: #2e2f3e;
  line-height: 17px;
  text-align: left;
  line-break: anywhere;
}

.download-view {
  height: 48px;
  background: #efefef;
  border-radius: 4px;
  display: flex;
  justify-content: end;
}

.download-btn {
  width: 120px;
  height: 48px;
  background: #2e2f3e;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  line-height: 48px;
  text-align: center;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .step-view {
    padding: 12px;
    background: #f6f6fc;
    border-radius: 10px;
    border: 1px solid #a7a9be;
    display: flex;
  }

  .ver-line-view {
    border-right: 1px dashed #4540d6;
  }

  .step-item-view {
    width: 97%;
    margin-left: 10px;
  }
}

@media screen and (min-width: 768px) {
  .step-view {
    padding: 12px;
    background: #f6f6fc;
    border-radius: 10px;
    border: 1px solid #a7a9be;
    display: flex;
  }

  .ver-line-view {
    display: none;
  }

  .step-item-view {
    width: 97%;
    display: flex;
  }

  .step-titl-out-view {
    display: flex;
  }

  .hori-line-view {
    min-width: 70%;
    height: 10px;
    margin-left: 5%;
    border-bottom: 1px dashed #4540d6;
  }
}
.bsiteHead {
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, #4540d6 0%, #bfeaff 78%, #ffffff 100%);
}
</style>
<template>
  <div class="bsite_app">

    <Head></Head>
    <div class="bsiteHead"></div>
    <div class="bsite-content-view">
      <div class="nav-view">
        <img src="../assets/bsite/icon_back@2x.png" width="32" height="32" alt="nav-img" @click="backAction">
        <div style="line-height: 32px;">Get your .btc website</div>
      </div>
      <br>
      <div class="tip-view">
        <img src="../assets/bsite/icon_16_tips@2x.png" width="16" height="16" alt="" style="margin-right:5px">
        <span>Currently, this feature is only
          available for internal testing users.</span>
      </div>
      <br>
      <div class="step-view">
        <div class="ver-line-view"></div>
        <div class="step-item-view">
          <div v-for="(item, idx) in steps" :key="idx">
            <div class="step-titl-out-view">
              <div class="step-titl-view">{{ item.titl }}</div>
              <div class="hori-line-view"></div>
            </div>
            <div class="step-cont-view">{{ item.cont }} <a v-if="idx == 2" href="https://www.discord.gg/btcdomain">Join our
                Discord</a></div>
          </div>
        </div>
      </div>

      <div class="join-view">
        <a :href="hellowordLink" target="_blank">View .btc website demo</a>
        <img src="../assets/bsite/icon_arrow_purple@2x.png" width="24" height="24" alt="">
      </div>

      <br>

      <div class="domain-input-view">
        <div class="titl-prompt">Your Domain Name</div>
        <Input v-model="domainName" placeholder="Your Domain Name" style="height: 48px;" />
      </div>

      <br>

      <div class="ins-input-view">
        <div class="titl-prompt">Inscription ID</div>
        <Input v-model="insHash" placeholder="Inscription ID" style="height: 48px;" />
        <div class="titl-tips">* The Inscription ID of your website HTML code inscription.</div>
      </div>

      <br>
      <br>

      <div class="gen-view" @click="signDomainLink">Generate</div>

      <div class="output-view" v-if="isOutVisiable">
        <div class="json-view">{{ outputJson }}</div>
        <div class="download-view">
          <div></div>
          <div class="download-btn" @click="downloadAction">Download</div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
  
<script>
import { Message, Input } from 'view-ui-plus'
import Head from '../components/head'
import Foot from '../components/foot'
import { signAsync } from '../util/func/index'
export default {
  components: {
    Head, Foot, Input
  },
  data() {
    return {
      addr: '',
      domainName: '',
      insHash: '',
      outputJson: '',
      isOutVisiable: false,
      hellowordLink: "https://helloworld.btc.page/",
      steps: [{
        titl: 'STEP 1',
        cont: 'Inscribe the web HTML code and copy the Inscription ID',
      }, {
        titl: 'STEP 2',
        cont: 'Input your domain name, the Inscription ID in step 1, generate signature, and download JSON file.',
      }, {
        titl: 'STEP 3',
        cont: 'Join DC, access .btc channel, and request a ticket for .btc page.',
      }]
    }
  },
  methods: {
    backAction() {
      this.$router.go(-1)
    },
    downloadAction() {
      let blob = new Blob([this.outputJson]);
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.setAttribute("download", "signature.json");
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    },
    async signDomainLink() {
      if (!this.domainName) {
        Message.warning("domain name not be empty")
        return
      }

      if (!this.domainName.endsWith('.btc')) {
        Message.warning("domain name is not valid")
        return
      }

      if (!this.insHash) {
        Message.warning("inscription id not be empty")
        return
      }

      let linkfile = {
        type: 'btcdomain_link',
        domain: this.domainName,
        obj_ins_id: this.insHash,
        public_key: localStorage.getItem('public_key'),
      }
      let linefile_json = JSON.stringify(linkfile)
      let signRet = await signAsync(linefile_json)
      linkfile.sig = signRet
      this.outputJson = JSON.stringify(linkfile)
      this.isOutVisiable = true
    }
  }
}
</script>
  
  