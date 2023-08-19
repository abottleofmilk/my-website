---
title: Docusaurus Search
sidebar_position: 1
---
## 基本流程
1. 安装
2. 配置
3. 运行

### 安装
```shell
npm install --save @easyops-cn/docusaurus-search-local
# or
yarn add @easyops-cn/docusaurus-search-local
# or 
pnpm install --save @easyops-cn/docusaurus-search-local 
```
### 配置
```js
// In your `docusaurus.config.js`:
module.exports = {
  // ... Your other configurations.
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};
```
### 运行
```shell
pnpm run clear
pnpm run build
pnpm run serve
```
## 参考
1. [Docusaurus 实现搜索功能](https://elinpf.github.io/2021/06/28/docu%E5%AE%9E%E7%8E%B0%E6%90%9C%E7%B4%A2%E5%8A%9F%E8%83%BD/)
2. [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)