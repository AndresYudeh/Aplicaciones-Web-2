import { config } from "dotenv"
config()

import{ Server } from './server'

const server = new Server();
server.listen()




// import express from 'express'
// const app = express;
// app.length('/', (req,res)=>{
//     res.json({
//         msg:'ok'
//     })
// })

// app.listen(port, ()=>{
//     console.log('prueba funcionando')
// })