class Comida{
    constructor(nombre,ingredientes,tipo,originario,termino)
    {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.tipo = tipo;
        this.originario = originario;
        this.termino = termino;
    }
}
let carne = new Comida('Steack House','Steack, sal, pimienta, romero, etc.','Plato Fuerte','EEUU','3/4');
console.log(carne);