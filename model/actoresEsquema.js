const mongosee = require('mongoose')

const actoresEsquema = mongosee.Schema(

{
nombre:{
    type:String,
    required:true,
    trim:true
}
}
)
module.exports = mongosee.model("actores",actoresEsquema)