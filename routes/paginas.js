const express = require('express')

const router = express.Router()


router.get('/about',(req,res)=>{
res.send('about')
})

router.get('/menu',(req,res)=>{
    res.send('menu')
})



module.exports={router}

