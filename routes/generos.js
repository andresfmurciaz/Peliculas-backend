const express =require('express')
const router = express.Router()
const generoController= require('../controller/generosCtrl')


router.post('/generos',generoController.generoSave)
router.get('/generos',generoController.generoListar)


module.exports= router