const servidor = require('./src/app')

servidor.listen(process.env.PORT,()=>{
    console.log(`Microservicio de clientesfuncionando en puerto servidor ${process.env.PORT}`);
})