const mongosee = require('mongoose')

const usuarioEsquema = mongosee.Schema(

{
        nombre: {
         type:String,
        required:true,
         trim:true
        },
        correo: 
        { type:String,
        required:true,
         trim:true
        },
        contrasena:  {
        type:
        String,
        required:true,
         trim:true
        }
      
}
)
module.exports = mongosee.model("usuarios",usuarioEsquema)