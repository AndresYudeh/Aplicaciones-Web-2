//npm i dotenv
//npm i nodemon -D
//cors
//express
//express validator
//mongoose

//const { model } = require('mongoose')

require('dotenv').config()
const Server = require('./server');
const server = new Server()
server.listen();