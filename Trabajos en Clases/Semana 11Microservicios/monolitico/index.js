const servidor = require('./src/app')

servidor.listen(process.env.PORT || 3000,()=>{
    //console.log('Servidor monolitico funcionando en puerto servidor'+process.env.PORT);
    console.log(`Servidor monolitico funcionando en puerto servidor ${process.env.PORT || 3000}`);
})