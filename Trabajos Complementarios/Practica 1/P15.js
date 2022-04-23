Array.prototype.toUpperCase = function() {
    return this.map(letra => letra.toUpperCase())
  };
  const comi = [
  'CorViCHe     ', 
  'EnceboLLAdO  ', 
  'bandERazO    ', 
  'fanesca      ', 
  'Mote PIlLo   ', 
  'empaNADA     ', 
  'pollo hornado',
  'tONga        ',
  'piZZa        '
    ].toUpperCase(); 
    console.log(`**********MENU DE COMIDA************`);
  for (const fav of comi) {
    
    console.log(`|           ${fav}          |`  );
  }