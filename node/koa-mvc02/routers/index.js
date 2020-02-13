const Router=require("koa-router")
const router=new Router()
const controller=require('../controllers')
router.get("/",controller.index)
router.get("/detail",controller.detail)
module.exports=router;