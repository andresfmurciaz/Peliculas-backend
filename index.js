//crear servidor con express

const { json } = require('express')
const express = require ('express')
const app = express()

const puerto = 3000 
const db=require('./config/db')
const cors= require('cors')

//const generos= require('./controller/generosCtrl')

//generos.generoListar()


app.get('/',(req,res)=>{
    res.send("hola mor soy base")
})

//app.get('/about',(req,res)=>{
  //  res.send("hola mor soy about")
//})
app.use(express.json())
app.use(cors())
//para que se puedan consultar las imgenes desde la api se le debe dar permisos de escritura
app.use(express.static('public'))
app.use('/',require ('./routes/paginas').router)

app.use('/api',require('./routes/api'))

app.use('/api',require('./routes/items'))

app.use('/api',require('./routes/generos'))

app.use('/api',require('./routes/actores'))

app.use('/api',require('./routes/usuarios'))





app.listen(puerto,()=>{
    console.log('Servidor Activo')
})

db()

