### 一、项目初始化

```js
npm i koa-generator -g  
koa2 koa-admin-cart  //快速创建nodejs项目
```

```js
//装art-template
yarn add art-template koa-art-template
```

```js
const render = require("koa-art-template");
const path=require("path")
//2.配置
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html', //后缀也可以写成.art
    debug: process.env.NODE_ENV !== 'production'
});
```

