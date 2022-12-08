const usuarioModel = require('../model/usuariosEsquema')
const bcryptjs = require('bcryptjs')
const usuarioListar=async(req,res) =>{

 
    const usuario = await usuarioModel.find()
   
    res.send(usuario)

}


const usuarioSave= async( req,res) =>{
    console.log(req.body)
try {

const usuario = new usuarioModel(req.body)
usuario.contrasena=await bcryptjs.hash(usuario.contrasena,10)
await usuario.save()
res.status(200).json({msj:"usuario creado"})
 //res.send("usuario guardado")

} catch (err) {
 
    res.status(400).json({msj:"error creado"})
}

    //res.send("ok")
}





const usuarioLogin=async(req,res)=>{
console.log("intento de login")
console.log(req.body)



const {correo,contrasena}= req.body
try{
    errores=false
    if(correo==""){errores=true
        res.status(400).json({msj:"correo incorrecto"})
    }
    if(contrasena==""){errores=true
        res.status(400).json({msj:"contrasena incorrecto"})
    }
if(!errores){
//
let usuario = await usuarioModel.find({'correo':correo,'contrasena':contrasena})
console.log(usuario)

if(usuario==""){
    res.status(400).json({msj:"no"})
}else{
    res.status(200).json({msj:"ok"})

}


}

}catch(err){console.log("error usuaio")}



}


module.exports={

    usuarioListar,
    usuarioSave,
    usuarioLogin
};