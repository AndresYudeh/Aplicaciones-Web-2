const {Schema, model} = require('mongoose')

const ProductoSchema = Schema({
    nombre:{
        type: String,
        required: [true,'El nombre del producto es obligatiro'],
        unique: true
    },

    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    precio:{
        type: Number
    },
    costo:{
        type: Number,
        default:0
    },
    minimo:{
        type: Number,
        default:0
    },
    stock:{
        type: Number,
        default:0
    }

})

module.exports = model('Producto', ProductoSchema);