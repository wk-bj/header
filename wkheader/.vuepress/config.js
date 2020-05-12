const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

const base = process.env.GH ? '/header/' : '/';

module.exports = {
  title: 'B 端头部组件',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.jpg` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'wk-bj/header',
    editLinks: true,
    lastUpdated: '上次更新', // string | boolean
    searchMaxSuggestions: 5,
    docsDir: 'wkheader',
    editLinkText: '公共组件！',
    sidebar: [
      '/',
      '/header/zh-cn',
    ]
  }
};
