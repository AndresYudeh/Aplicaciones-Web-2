import {Router} from 'express'
import { check } from 'express-validator'
import { Producto } from '../controllers'

const {crearProductos, obtenerProducto, obtenerProductos} =Producto
//import { validarCampos } from '../middleware/validarCampos'
import funciones from '../middleware'
const{validarCampos}= funciones


const router = Router()

router.get('/', obtenerProductos)
router.get('/:id', check('id', 'Debe ser un ID de mongo valido').isMongoId(),validarCampos, obtenerProducto)
router.post('/', check('nombre', 'El nombre es obligatorio').not().isEmpty(),validarCampos, crearProductos)

export{router}