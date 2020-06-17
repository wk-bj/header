# B 端头部组件

> Vue.js 2.x B端的业务组件。

## 安装

```
$ yarn add wkheader
```

## B 端头部组件

```` html
<wk-header />
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
|customHomeClick|点击logo|--|

## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 样式采用less

