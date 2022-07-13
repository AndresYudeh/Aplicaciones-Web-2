import {Router} from 'express'
import { check } from 'express-validator'
import { Cliente } from '../Controllers/Index'

const {obtenerClientes, obtenerCliente,  crearCliente, actualizarCliente, borrarCliente} = Cliente;

const router = Router()

router.get('/' , obtenerClientes)
router.get('/:CLIENTE_ID', obtenerCliente)
router.post('/', [check('id', 'ID es obligatorio').not().isEmpty()], crearCliente)
router.put('/:CLIENTE_ID', actualizarCliente)
router.delete('/:CLIENTE_ID', borrarCliente)

export{router}