const koa = require('koa');
const app = new koa();
const render = require('koa-art-template');
const {
    resolve
} = require('path')
const index = require('./routers/index')
const detail = require('./routers/detail')
render(app, {
    root: resolve(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
app.use(index.routes())
app.use(detail.routes())
app.listen(8080)