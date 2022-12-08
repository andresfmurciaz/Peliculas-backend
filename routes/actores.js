
const express =require('express')
const router = express.Router()
const multer = require ('multer')
const upload = multer({dest: "public/images"})
const fs = require('node:fs')

const actoresController= require('../controller/actoresCtrl')


router.post('/actores',actoresController.actoresSave)
router.get('/actores',actoresController.actoresListar)


router.put('/actores/imagen/:id',
upload.single('imagen'),
async(req,res)=>{
    const imagen= req.file
    console.log("recibiendo archivo")
    console.log(imagen.mimetype)
    console.log("archivo guardado como " + imagen)
    const id= req.params.id
fs.rename('/public/images' + imagen.filename, '/public/images' + id + "jpg", ()=>{console.log("cambio realizado")})
    res.status(200).json({"msj":"imagen guardada"})

})


module.exports= router