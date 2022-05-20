const {response} = require('express')
const {Productos} = require('../modelos')

//const app = express()

const obtenerProductos = async(req,res = response)=>{
    const {limite=10, desde=0 } = req.query;
    const query = {estado:true};
    const [total, producto]= await Promise.all([
        Productos.countDocuments(query),
        Productos.find(query)
    ])

    res.json({
        total,
        producto
    })
    

}

const obtenerProducto= async(req,res)=>{
    const{id} = req.params;
    const producto = await Productos.findById(id);
    res.json(producto);

}

const crearProductos=async(req,res)=>{
    const {estado, ...body}= req.body;
    const productoExiste = await Productos.findOne({nombre:body.nombre});
    if(productoExiste)
    {
        res.status(400).json({
            message:
            //'El producto con ese nombre ya existe'+productoExiste.nombre
            `El producto con ese nombre ya existe ${productoExiste.nombre}`
        })
    }
    const producto= new Productos(body);
    const productoNuevo = await producto.save();
    res.status(201).json(productoNuevo);

}


const actualizarProductos= async(req,res)=>{
    const {id}=req.params;
    const {estado, ...data}= req.body;
    const ProductoModificado= 
    await Productos.findByIdAndUpdate(id, data, {new:true});
    res.json(ProductoModificado);
}
const borrarProductos= async(req,res)=>{
    const {id}= req.params
    const productoBorrado = await Productos.findByIdAndUpdate(id,{estado:false}, {new:true});
    res.json(productoBorrado);

}

module.exports={
    obtenerProductos,
    obtenerProducto,
    crearProductos,
    actualizarProductos,
    borrarProductos

}