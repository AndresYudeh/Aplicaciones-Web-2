// const mongoose = require('mongoose');
// const conexion= "mongodb+srv://yudeh:yudeh22@cluster0.kbcvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// ( async ()=>{
//     const estadoConexion = await mongoose.connect(conexion);


//     const Grupo = mongoose.model("Grupo", {nombre:String});
//     const Permiso = mongoose.model("Permiso", {nombre:String});

//     const Usuario =  mongoose.model("Usuario", 
//     {
//          nombre: String,
//          idgrupo: { type: mongoose.Types.ObjectId , ref:"Grupo" } ,
//         //  permisos: [{ type: mongoose.Types.ObjectId , ref:"Permiso" }] ,
//         permisos:[
//             {
//                 permiso: { type: mongoose.Schema.Types.ObjectId, ref:"Permiso" },
//                 estado: {type:Boolean}
//             }
//         ]
//     } 
//     );

//     const grupo1 =  new Grupo({nombre:"Administradores"});
//     const guardoGrupo = await  grupo1.save();
//     const permiso1 = new Permiso({nombre:"Grabar"});
//     const guardoPermiso1= await  permiso1.save();
//     const permiso2 = new Permiso({nombre:"Eliminar"});
//     const guardoPermiso2 = await permiso2.save();


//     const usuario1=  new Usuario(
//         {
//             nombre:"Prueba sexto A",
//             idgrupo: guardoGrupo._id,
//             permisos: [
//                 {permiso: guardoPermiso1._id , estado:true},
//                 {permiso: guardoPermiso2._id , estado:true},
//             ]
//         }
//         );
//     const guardado=  await usuario1.save();

//     const resultado =  await Usuario.find()
//     .populate("idgrupo")
//     .populate("permisos.permiso");

//     console.log(resultado[4].permisos)
// })();


const express = require('express');
const cors = require('cors');

const app = express();
const PUERTO=5000;

app.use(cors()).use(express.json());

app.get("/prueba", (req,res,next)=>{
    next();
},(req,res,next)=>{
    //res.status(200).send('pruebita jejeje');
    res.status(200).send({mensaje:"Holaaaaaa"});

})

app.listen(PUERTO, ()=>{
    console.log('Servidor ejecutandose en puerto ' +PUERTO)
    //console.log(´Servidor ejecutandose en puerto ${PUERTO}´)
})

