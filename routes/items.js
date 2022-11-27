const express =require('express')
const router = express.Router()
const itemsController= require('../controller/itemsCtrl')



router.post('/items',itemsController.itemsSave)
router.get('/items',itemsController.itemsListar)



module.exports= router
