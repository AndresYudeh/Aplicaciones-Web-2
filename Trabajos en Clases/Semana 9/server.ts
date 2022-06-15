// import {Router} from 'express'

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

import express, {Router, Express} from 'express';
import cors from 'cors';

import {dbConnection} from './database/config'
import {router as producto} from './routes/products'

class Server
{

    app: Router;
    router: Router;
    port:Number;
    paths: {[key:string]:string}
    private _express: Express;

    constructor(){
        this.app = Router();
        this.router = Router();
        this.port = Number(process.env["PORT"]); 
        this.paths = {

            productos:'/api/productos',
            clientes:'/api/clientes'
        }
        this.conectarDB();
        this.middleware();
        this.routes();

        this.router.use('v1/sextoa', this.app);
        this._express = express().use(this.router) ;

    }
    private async conectarDB(){
        await dbConnection();
    }
    private middleware (){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.productos, producto)
    }
    listen(){
        this._express.listen(this.port,() => {
            console.log(`Servidor funcionando en  ${this.port}/v1/sextoa/api/productos`);
        })

    }

}

export {Server}