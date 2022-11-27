const actoresModel = require('../model/actoresEsquema')

const actoresListar = async(req,res)=>{
//listar todos los actores
    const actores = await actoresModel.find()
   
res.send(actores)
}


const actoresSave=(req,res) =>{
    console.log(req.body)
try {

const actores = new actoresModel(req.body)
actores.save()
 res.send("actores guardado")

} catch (error) {
    console.log("error")
}

}



module.exports={
    actoresListar,
    actoresSave
};