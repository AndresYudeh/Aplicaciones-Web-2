const express = require('express');
const rutas= require('./rutas/ruta');

const app = express();
const PORT= 3000;


app.use(express.json());
app.use('/api', rutas);

app.listen(PORT, ()=>{
    console.log('Servidor ejecutandose en puerto ' +PORT)
})