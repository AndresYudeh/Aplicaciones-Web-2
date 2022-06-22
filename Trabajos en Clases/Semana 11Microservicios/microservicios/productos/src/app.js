const express = require('express')
const app = express()

respuesta ={
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Cliente Microservicio'
}
app.get('/api/v2/clientes', (req, res)=>{
    respuesta.data.push("Consumidor final","Juan Carlos")
    console.log('Microservicio de clientes');
    return res.send(respuesta)
})

module.exports =app;