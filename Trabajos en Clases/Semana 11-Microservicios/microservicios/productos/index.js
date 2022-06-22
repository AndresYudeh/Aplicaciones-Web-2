const servidor = require('./src/app')

servidor.listen(process.env.PORT,()=>{
    console.log(`Microservicio de productos funcionando en puerto servidor ${process.env.PORT}`);
})