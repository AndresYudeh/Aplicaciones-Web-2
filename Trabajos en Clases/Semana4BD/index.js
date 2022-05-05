const mongoose = require('mongoose');
const conexion= "mongodb+srv://ayudeh:yudeh123456@cluster0.q6baw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

( async ()=>{
    const estadoConexion = await mongoose.connect(conexion);
    const Usuario =  mongoose.model("Usuario", { nombre: String } );
    const usuario1=  new Usuario({nombre:"Prueba sexto A"});
    const guardado=  await usuario1.save();
    const resultado =  await Usuario.find();
    console.log(resultado)
})();