const itemModel = require('../model/itemsEsquema')

const itemsListar=async(req,res) =>{

 
    const items = await itemModel.find()
   
    res.send(items)

}

const itemsSave=(req,res) =>{
    console.log(req.body)
try {

const item = new itemModel(req.body)
 item.save()
 res.send("item guardado")

} catch (error) {
    console.log("error")
}


    //res.send("ok")



}



module.exports={

    itemsListar,
    itemsSave
};