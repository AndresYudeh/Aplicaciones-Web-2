//Dependecias requeridas
import {Producto} from '../models'
import{IProducto} from '../interfaces'
import { Request, Response } from 'express'
import { body } from 'express-validator';

//Controlador para obtener productos
const obtenerProductos = async(req: Request, res:Response)=>{
    const {limite='10', desde='0' } = req.query;
    const query = {estado:true};
    const [total, productos] :[Number, IProducto[]]= await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])

    res.json({
        total,
        productos
    })
}

//Controlador para obtener un solo producto
const obtenerProducto = async(req: Request, res:Response)=>{
    const{id} = req.params;
    const producto: IProducto|null  = (await Producto.findById(id));
    res.json(producto)

}

//Controlador para crear productos
const crearProductos = async(req: Request, res:Response)=>{
    const{estado, ...body}= req.body as IProducto;
    const existeProducto = await Producto.findOne({nombre:body.nombre});
    if(existeProducto)
    {
        return res.status(400).json({
            message: `El producto ${body.nombre} ya existe jejeje`
        })
    }
    const producto = new Producto(body);
    const productoNuevo = await producto.save();
    return res.status(201).json(productoNuevo);
}


//exportación de controladores desarrollados
export{
    obtenerProductos,
    obtenerProducto, 
    crearProductos

}