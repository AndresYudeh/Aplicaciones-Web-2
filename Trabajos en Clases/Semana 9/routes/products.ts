import {Router} from 'express'
import { check } from 'express-validator'
import { Producto } from '../controllers'
import { validarCampos } from '../middleware/validarCampos'
//incompletooooo
//const{validarCampos}= funciones
const {crearProductos, obtenerProducto, obtenerProductos} =Producto



const router = Router()

router.get('/', obtenerProductos)
router.get('/:id', check('id', 'Debe ser un ID de mongo valido').isMongoId(),validarCampos, obtenerProducto)
router.post('/', check('nombre', 'El nombre es obligatorio').isEmpty(),validarCampos, crearProductos)

export{router}