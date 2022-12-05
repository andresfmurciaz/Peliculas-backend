const generoModel = require('../model/generoEsquema')

const generoListar = async(req,res)=>{
//listar todos los generos
    const generos = await generoModel.find()
   
res.send(generos)
}

const generoSave=(req,res) =>{
    console.log(req.body)
try {

const genero = new generoModel(req.body)
genero.save()
 res.send("genero guardado")

} catch (error) {
    console.log("error")
}


}


module.exports={
    generoListar,
    generoSave


};