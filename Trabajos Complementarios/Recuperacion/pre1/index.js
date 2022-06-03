//creacion del servidor
const express = require('express');
const app = express();
const PUERTO=3000;

//dependiendo si es v1 o v2 se mostrara un mensaje
const parametro = process.env.parametro || 'v2';

//condiciones del parametro
app.get('/api/prueba', (req, res)=>{
    if(parametro == 'v1'){
        return res.status(200).send({message:"Ruta 1"})
    }
    if(parametro == 'v2'){
        return res.status(200).send({message:"Ruta 2"})
    }
})

//mensaje de que el servidor está levantado
app.listen(PUERTO, ()=>{
    console.log('Servidor ejecutandose en puerto ' +PUERTO)
})

