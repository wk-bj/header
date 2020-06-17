<template>
  <div
    class="wkheader"
  >
    <div class="wkheader-one">
      <div class="wkheader-logocon" v-show="cusCompany.logo&&cusStyleType=='1'">
        <div class="wkheader-logo">
          <img  class="wkheader-logo-icons" :src="cusCompany.logo" alt=""  @click="toHome">
        </div>
        <div class="wkheader-logo-icon"></div>
      </div>
      <div class="wkheader-solt" v-show="cusCompany.logo&&cusStyleType=='2'">
        <div class="wkheader-solt-border">
          <img :src="cusCompany.logo"  class="wkheader-logo-icons"  @click="toHome"/>
        </div>
      </div>
      <div class="wkheader-content">
        <img :src="cusCompany.versionImg"  v-show="cusCompany.versionImg" alt="" class="wkheader-content-icon">
        <div class="wkheader-content-text" v-show="cusCompany.name">{{cusCompany.name}}</div>
        <div class="wkheader-content-prompt" :class="versionType=='3'?'wkheader-content-prompt-dis':''" v-show="cusCompany.version">{{cusCompany.version}}</div>
      </div>
    </div>
    <div class="wkheader-two">
      <div class="wkheader-editor" @click="editorInfo"  v-show="cusCompany.name">编辑机构资料</div>
      <img class="wkheader-editor-user"  v-show="cusUserInfo.imgLink" :src="cusUserInfo.imgLink"  alt="">
      <div class="wkheader-editor-phone"  v-show="cusUserInfo.phone">{{cusUserInfo.phone}}</div>
      <img v-show="!cusCompany.logoutIcon" class="wkheader-editor-logout" src="./assets/img/logout.png" alt=""  @click="logout">
      <img :src="cusCompany.logoutIcon" v-show="cusCompany.logoutIcon"  class="wkheader-editor-logout" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'WkHeader',
  data() {
    return {
      index: -1,
    };
  },
  props: {
    cusUserInfo: {
      type: Object,
      default: () => ({
        phone: '',
        imgLink: '',
      }),
    },
    cusCompany: {
      type: Object,
      default: () => ({
        logo: '',
        name: '',
        version: '',
        versionImg: '',
        logoutIcon: '',
      }),
    },
    cusStyleType: {
      type: String,
      default: '1',
    },
    versionType: {
      type: String,
      default: '1',
    },
  },
  methods: {
    logout() {
      this.$emit('logoutClick');
    },
    editorInfo() {
      this.$emit('editorInfoClick');
    },
    toHome() {
      this.$emit('customHomeClick');
    },
  },
};
</script>
