const mongosee = require('mongoose')

const itemsEsquema = mongosee.Schema(

{
        titulo :{
            type:String,
            required:true,
             trim:true
        },
        tipo: {
            type:String,
            required:true,
             trim:true
        },
        genero: {
            type:String,
            required:true,
             trim:true
        },

        ano:    {
            type:Number,
             required:true,
            trim:true
        },
        duracion: {  
             type:Number,
             required:true,
             trim:true
            },
        reparto: {
                type:Array
        },
        created_at: {
            type:Date,
            default:Date.now()
        },
        created_por: { 
            type:String,
            required:true,
             trim:true
        },
        img: { 
            type:String,
            required:true,
             trim:true
        }

}
)
module.exports = mongosee.model("items",itemsEsquema)