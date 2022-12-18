const itemModel = require('../model/itemsEsquema')


//listar 
const itemsListar=async(req,res) =>{
    const items = await itemModel.find() 
    res.send(items)
}


//guardar
const itemsSave=(req,res) =>{
    console.log(req.body)
try {

const item = new itemModel(req.body)
 item.save()
 res.send("item guardado")

} catch (error) {
    console.log("error")
}

}

//buscar una pelicula por un id

const itemObtener= async(req,res)=>{
const id = req.params.id
console.log(id)
try {
    const c = await itemModel.findOne({_id:id})
    res.status(200).json(c)
} catch (error) {
if(error){

    console.log("erro"+error)
    res.status(400).send("error iem ontener")
}    
}

}




//actualizar

const itemActualizar = async (req,res)=>{
console.log(req.body)

try {
    const{id,titulo}= req.body

    if(id==''){
        res.send("id no existe")
    }
    if(titulo==''){
        res.send("tiutlo no existe")
    }else{

        const item={}
        item.titulo=titulo
        const rta= await itemModel.updateOne(
        {_id :id},
        {$set : item},
        {new :true}
        )
        console.log('actualizado')
    res.send('ok actualizacion')

    }


} catch (error) {
    
}


}




//eliminar


const itemEliminar = async (req,res)=>{
    const id= req.params.id

try {

if(id==''){

    res.send("id no valido")

}else{

    const rta= await itemModel.deleteOne({_id:id})
    res.send("item eliminado con exito")
}
  
 
    
} catch (error) {
    
}



}





module.exports={

    itemsListar,
    itemsSave,
    itemActualizar,
    itemEliminar,
    itemObtener
};