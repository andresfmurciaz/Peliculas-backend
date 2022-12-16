const express =require('express')
const auth = require ('../security/auth.js')
const router = express.Router()
const generoController= require('../controller/generosCtrl')

//se pone el archivo auth el cual va ver si la peticion tiene token o no
router.post('/generos',auth,generoController.generoSave)
router.get('/generos',generoController.generoListar)


module.exports= router