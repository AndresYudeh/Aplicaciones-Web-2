const {Router}= require('express');
const {check}= require('express-validator');

const {
    obtenerProducto,
    obtenerProductos,
    crearProductos,
    actualizarProductos,
    borrarProductos

}=require('../controladores').productos;

const {validarCampos}= require('../middleware');

const router = Router();

router.get('/',obtenerProductos)
router.get('/:id',[check('id','El id no es valido').isMongoId], obtenerProducto)
router.post('/', [check('nombre','El nombre es obligatorio').not().isEmpty()],validarCampos, crearProductos)
router.put('/id',[check('id','El id no es valido').isMongoId], actualizarProductos)
router.delete('/:id',[check('id','El id no es valido').isMongoId], borrarProductos)

module.exports=router;
