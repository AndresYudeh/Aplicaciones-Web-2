const comida=[
    "tigrillo",
    "Bolon Mixto",
    "Pizza",
    "Chaulafan",
    "Hamburguesa",
    function(){
        return"Bandera";
    }
] 

//para agregar elementos a un arreglo de manera asociativa
comidas["x"]="Parrillada";
console.log(comida)

//para mostrar un arreglo en especifico
console.log(comida[5])

//o
const funcionA = comida[5];
funcionA;


//los [] son para clonar
const desayunos = [...comida];
desayunos[3]="yogurt"
console.log(desayunos)

//para unir arreglos
const unioncomidas=[...comida, ...desayunos];
console.log(unioncomidas)



//para modificar los elementos
//comida[0]=["yogurt"];
//console.log(comida)