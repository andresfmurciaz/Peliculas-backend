const mongosee = require('mongoose')

const generoEsquema = mongosee.Schema(

{
nombre:{
    type:String,
    required:true,
    trim:true
}
}
)
module.exports = mongosee.model("genero",generoEsquema)