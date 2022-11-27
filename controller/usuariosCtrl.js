const usuarioModel = require('../model/usuariosEsquema')

const usuarioListar=async(req,res) =>{

 
    const usuario = await usuarioModel.find()
   
    res.send(usuario)

}

const usuarioSave=(req,res) =>{
    console.log(req.body)
try {

const usuario = new usuarioModel(req.body)
usuario.save()
 res.send("usuario guardado")

} catch (error) {
    console.log("error")
}


    //res.send("ok")



}



module.exports={

    usuarioListar,
    usuarioSave
};