const express = require('express')
const app = express()

respuesta ={
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Cliente Microservicio'
}
app.get('/api/v2/clientes', (req, res)=>{
    respuesta.data.push("Encebollado","Corviche","Chaulafan")
    console.log('Microservicio de productos');
    return res.send(respuesta)
})

module.exports =app;