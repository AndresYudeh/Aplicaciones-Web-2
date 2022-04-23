const comidafavorita = [
    {nombre:'Alitas BBQ', ingredientes:'Alitas de pollo, salsa BBQ.', tipo:'Comida rapida', originario:'EEUU', termino:'Bien Cocido'},
    {nombre:'Ensalada Cesar', ingredientes:'Lechuga, salsa cesar, etc.', tipo:'Ensalada', originario:'Italia', termino:'NA'},
    {nombre:'Picaña Americana', ingredientes:'Picaña, sal, pimienta, paprica, etc.', tipo:'Plato fuerte.', originario:'EEUU', termino:'medio'},
    {nombre:'Corviche', ingredientes:'mani, verde, achote, etc.', tipo:'Entrada', originario:'Ecuador', termino:'NA'},
];
let com=0;
    while (com<comidafavorita.length){
        console.log(comidafavorita[com]);
        com++;
    }