---
title: Deploy
sidebar_position: 2
---

## 基本流程
1. 安装gh-pages
2. 编写配置文件
3. 运行

### 安装
```shell
pnpm install --save gh-pages
```
### 编写配置文件
```js
// docusaurus.config.js
url: https://username.github.io/
baseUrl : projectName 
```

```js
// package.json
"deploy": "gh-pages -d build"
```
### 运行
```shell
pnpm run build
pnpm run serve  # 测试构建后的应用是否正确
pnpm run deploy 
```
## 参考
