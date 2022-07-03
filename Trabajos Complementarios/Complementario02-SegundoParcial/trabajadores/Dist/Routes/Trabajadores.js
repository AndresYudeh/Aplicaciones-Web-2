"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Index_1 = require("../Controllers/Index");
const { obtenerTrabajador, obtenerTrabajadores, crearTrabajador, actualizarTrabajador, borrarTrabajador } = Index_1.Trabajador;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', obtenerTrabajadores);
router.get('/:TRABAJADOR_ID', obtenerTrabajador);
router.post('/', [(0, express_validator_1.check)('TRABAJADOR_CEDULA', 'El ingreso del id del espacio es obligatorio').not().isEmpty()], crearTrabajador);
router.put('/:TRABAJADOR_ID', actualizarTrabajador);
router.delete('/:TRABAJADOR_ID', borrarTrabajador);
