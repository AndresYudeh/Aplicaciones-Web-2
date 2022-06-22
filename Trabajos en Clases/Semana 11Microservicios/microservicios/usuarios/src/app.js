const express = require('express')
const app = express()

respuesta ={
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Usuario Microservicio'
}
app.get('/api/v2/clientes', (req, res)=>{
    respuesta.data.push("Administrador","Gerente","Invitado")
    console.log('Microservicio de usuarios');
    return res.send(respuesta)
})

module.exports =app;