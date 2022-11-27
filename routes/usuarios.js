const express =require('express')
const router = express.Router()
const usuarioController= require('../controller/usuariosCtrl')



router.post('/usuarios',usuarioController.usuarioSave)
router.get('/usuarios',usuarioController.usuarioListar)



module.exports= router
