const express =require('express')
const router = express.Router()
const actoresController= require('../controller/actoresCtrl')


router.post('/actores',actoresController.actoresSave)
router.get('/actores',actoresController.actoresListar)


module.exports= router