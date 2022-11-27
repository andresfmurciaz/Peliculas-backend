//nos conectamos a la base de datos.
const mongoose=require('mongoose')
const URLDB="mongodb://127.0.0.1:27017/StreamersMisionTic"

module.exports=()=>{


    const conn= ()=>{
    mongoose.connect(
    URLDB,
    {
        keepAlive:true,
        useNewUrlParser:true,   
        useUnifiedTopology:true

    },
        (err)=>{
            if(err){

            console.log("error conec:" + err)
            }else{
            console.log("conexion bien")

             }
              }


                        )


    }
//se llama la funcion
conn()
}