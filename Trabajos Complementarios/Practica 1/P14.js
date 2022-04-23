const comidafavorita = [
    {nombre:'Alitas BBQ', ingredientes:'Alitas de pollo, salsa BBQ.', tipo:'Comida rapida', originario:'EEUU', termino:'Bien Cocido'},
    {nombre:'Ensalada Cesar', ingredientes:'Lechuga, salsa cesar, etc.', tipo:'Ensalada', originario:'Italia', termino:'NA'},
    {nombre:'Picaña Americana', ingredientes:'Picaña, sal, pimienta, paprica, etc.', tipo:'Plato fuerte.', originario:'EEUU', termino:'medio'},
    {nombre:'Corviche', ingredientes:'mani, verde, achote, etc.', tipo:'Entrada', originario:'Ecuador', termino:'NA'},
];

console.log("****** Metodo for ******")
    for (const com of comidafavorita) {
        console.log(com);
      };
      
console.log("****** Metodo while ******")
      let cox = 0;
      while (cox<comidafavorita.length){
          console.log(comidafavorita[cox]);
          cox++;
      };

console.log("****** Metodo do while ******")
    let con = 0;
    do{
        console.log(comidafavorita[con])
        con++;
    }while(con < comidafavorita.length);

console.log("****** Metodo for each ******")
    comidafavorita.forEach(com => console.log(com));

