const express = require('express')
const router = express.Router()

router.get('/peliculas',(req,res)=>{
    res.send('listado peliculas')
})

router.get('/series',(req,res)=>{
    res.send('listado seriel')
})

module.exports= router
