const express = require('express');
const route = express.Router();

//creacion de rutas
const {    
    Buscar,
    Ingresar} = require('../controladores/index')

route.get('/buscar',Buscar);
route.post('/ingresar',Ingresar);

module.exports=route