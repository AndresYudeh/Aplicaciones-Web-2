const pelis = require('../persistencias/arreglo');

const Buscar = async(req, res) => {
    res.status(200).send({
        datos: pelis,
    });
}
const Ingresar = async(req, res) => {
    const {...body} = req.body;
    const save = pelis.push(body)
    res.status(201).send({
        message:'El registro de la pelicula fue insertado con exitó!!',
        response:body
    })
}
module.exports={
    Buscar,
    Ingresar
}