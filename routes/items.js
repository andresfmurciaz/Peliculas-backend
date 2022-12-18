const express =require('express')
const router = express.Router()
const itemsController= require('../controller/itemsCtrl')



router.post('/items',itemsController.itemsSave)
router.get('/items',itemsController.itemsListar)
router.put('/items',itemsController.itemActualizar)
router.delete('/items/:id',itemsController.itemEliminar)
router.get('/items/:id',itemsController.itemObtener)


module.exports= router
