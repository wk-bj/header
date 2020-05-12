# B 端头部组件
> 基于Vue.js 的 前端业务组件。

## B 端头部组件
> Vue 引入

<wk-header :cusUserInfo="userInfo" :cusCompany="company"/>

```` html
<wk-header :cusUserInfo="userInfo" :cusCompany="company"/>
````

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|cusUserInfo|用户信息|Object|否|{phone: \'\',imgLink: \'\'}|
|cusCompany|公司信息|Object|否|{logo: \'\',name: \'\',version: \'\',versionImg: \'\',logoutIcon:: \'\'}|
|cusStyleType|头部展示样式('1'：logo与公司名之间有分隔线，'2'：logo与公司名之间无分隔线,前提条件必须有logo )|Sting|否|'1'|

### 方法

|事件名|说明|返回值|
|---|------|-----|
|editorInfoClick|编辑机构资料|--|
|logoutClick|退出登录|--|

<script>
import WkHeader from './Header';

export default {
  data() {
    return {
      userInfo:{
        phone:'185****3514',
        imgLink:'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1f178a82b9014a90648f1f8faf773912b31bee4b.jpg'
      },
      company:{
         versionImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
        name: '某某公司',
        version: '试用版',
        logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
      },
    };
  },
  beforeCreate() {

  },
  components: {
    WkHeader,
  },
}
</script>
<style lang="less" scope>
@import 'assets/style/header.less';
</style>
