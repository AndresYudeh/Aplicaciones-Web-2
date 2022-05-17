//dependecias requeridas
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app= express();
const ruta = express.Router();
//puerto de enlace
const PUERTO=3000;

let comidas=[];

app.use(cors()).use(express.json());


ruta.get('/',(req,res)=>{
    res.status(200).send(comidas);
})

//metodo post con su respectiva validación
ruta.post('/',(req,res)=>{
    const {body}= req;

    if(comidas.filter(c=>c.codigo===body).length>0)
    {
        return res.status(400).send({
            message:'El codigo ya existe',
            response: body
        })
    }

    comidas.push(body);
    res.status(201).send({
        message:'El dato se insertó correctamente',
        response:body
    })
})

//metodo put (modificar) con su respectiva validación
ruta.put('/',(req,res)=>{
   const{codigo, descripcion, tipo} = req.body;
   //para ver si un archivo existe
   if(comidas.filter(c=>c.codigo===codigo).length==0)
   {
      return res.status(400).send({
           message:'Pilas que no se encuentra disponible la comida a modificar'
       })
   }
   let comida=comidas.filter(c=>c.codigo===codigo)[0];
   comida.descripcion=descripcion;
   comida.tipo=tipo;
   res.status(200).send({
       message:'Dato modificado con exito',
       response: comida
   })
})

//metodo para eliminar
ruta.delete('/:codigo',(req,res)=>{
const {codigo} = req.params;
comida=comidas.filter(c=>c.codigo !==codigo);
res.status(200).send({
    message:'Plato eliminado del menú'
})
})

//metodo get (buscar)
ruta.get('/:codigo',(req,res)=>{
    const {codigo} = req.params;
    comida=comidas.filter(c=>c.codigo ===codigo);
    if(comida.length>0){
        res.status(200).send({
            message:'Dato encontrado',
            response:comida[0]
        })
    }
    else{
        res.status(400).send({
            message:'Comida con este codigo no existe'
        })
    }
})


app.use('/comida')
app.listen(PUERTO, ()=>{
    console.log('Servidor funcionando en http://localhost: '+PUERTO)
})

//Fin