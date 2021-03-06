"use strict";
// import {Router} from 'express'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
// class Server{
//     app: Router;
//     router: Router;
//     port: Number; 
//     paths: {[key:string]:string}
//     constructor(){
//         this.app= Router();
//         this.router= Router();
//         this.port = Number {process.env.PORT};
//         this.paths= {
//             productos:'/api/productos',
//             clientes:'/api/productos',
//             prueba: 456,
//         }
//     }
//     this.conectarDb{};
//     private middlewares(){}
//     private routes(){}
//     listen(){}
// }
// export{Server}
// //revisar bien TODO
//esto me paso el emmanuel
// import express, {Router} from 'express';
// import cors from 'cors';
// import {dbConnection} from './database/config'
// import {router as Producto} from './routes/products'
// class Server
// {
//     app: Router;
//     router: Router;
//     port:Number;
//     paths: {[key:string]:string};
//     private _express: express;
//     constructor(){
//         this.app = Router();
//         this.router = Router();
//         this.port = Number(process.env["PORT"]); 
//         this.paths = {
//             productos:'/api/productos',
//             clientes:'/api/clientes'
//         }
//         this.conectarDB();
//         this.middleware();
//         this.routes();
//     }
//     private async conectarDB(){
//         await dbConnection();
//     }
//     private middleware (){
//         this.app.use(cors());
//         this.app.use(express.json());
//     }
//     private routes(){
//         this.app.use(this.paths.productos, Producto)
//     }
//     listen(){
//         this._express.listen{this.port, ()=>{
//             console.log(`Servidor ejecutanto en http://localhost:${this.port}/v1/sextoa/api/productos`);
//         }}
//     }
// }
// export {Server}
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./database/config");
const products_1 = require("./routes/products");
class Server {
    constructor() {
        this.app = (0, express_1.Router)();
        this.router = (0, express_1.Router)();
        this.port = Number(process.env["PORT"]);
        this.paths = {
            productos: '/api/productos',
            clientes: '/api/clientes'
        };
        this.conectarDB();
        this.middleware();
        this.routes();
        this.router.use('v1/sextoa', this.app);
        this._express = (0, express_1.default)().use(this.router);
    }
    conectarDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    middleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.paths.productos, products_1.router);
    }
    listen() {
        this._express.listen(this.port, () => {
            console.log(`Servidor funcionando en  ${this.port}/v1/sextoa/api/productos`);
        });
    }
}
exports.Server = Server;
