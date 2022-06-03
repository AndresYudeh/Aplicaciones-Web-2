const express = require('express');
const app = express();
const PUERTO=3000;


app.get("/api/prueba", (req,res,next)=>{
    next();
},(req,res,next)=>{

    const parametro = process.env.parametro || 'v2';
    const  v1 = res.status(200).send({message:"Ruta 1"});
    const v2 = res.status(200).send({message:"Ruta 2"});

});


app.listen(PUERTO, ()=>{
    console.log('Servidor ejecutandose en puerto ' +PUERTO)
})

