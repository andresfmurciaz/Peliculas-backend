const jwt = require('jsonwebtoken')
/*
De forma asíncrona recibimos (req,res , next)
- Preguntar si el token se reciben en la cabecera.
- Verificar el contenido del token recibido
- Next nos permite avanzar a la siguiente función en el enrutador
*/

module.exports= async (req,res,next)=>{

    const token = req.header("x-auth-token")

    if(!token){
res.status(400).json({msj:"token no encontrado"})
    }
     next()
}