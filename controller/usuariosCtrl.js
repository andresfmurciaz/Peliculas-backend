const usuarioModel = require('../model/usuariosEsquema')
const bcryptjs = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const usuarioListar=async(req,res) =>{

 
    const usuario = await usuarioModel.find()
   
    res.send(usuario)

}

//guardar usuario

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

}


//login usuario

const usuarioLogin=async(req,res)=>{
console.log("intento de login")
console.log(req.body)
//captura dos variables que vienen del req
const {correo,contrasena}= req.body
try{

    errores=false
    //valida si el correo y la contraseña que nos dan estan vacios
    if(correo==""){
        errores=true
        res.status(400).json({msj:"correo incorrecto"})
    }
    if(contrasena==""){
        errores=true
        res.status(400).json({msj:"contrasena incorrecto"})
    }
if(!errores){
//ME TRAE EL USUARIO DE LA BASE DE DATOS por el correo que nos manda el fronted
let correcto = true
let usuario = await usuarioModel.findOne({'correo':correo})
console.log(usuario+ "usuario de BD")
console.log(usuario.correo)
correcto = await bcryptjs.compare(contrasena,usuario.contrasena)

if(!correcto){
    console.log("no encontrado usu")
    res.status(400).json({msj:"no"})
}else{
//jws nos permite crea un token para validad el lojin de los usuarios
const payload={
usuario:{
    id:usuario.id,
    nombre:usuario.nombre
}   
}
    jwt.sign(
    payload,
    "palabrasecreta",
    (error,token)=>{
    if (error)throw error
    res.status(200).json({msj:"ok", token:token})
})
    //res.status(200).json({msj:"ok"})
}
}
}catch(err){console.log("error usuaio")}

}


module.exports={

    usuarioListar,
    usuarioSave,
    usuarioLogin
};