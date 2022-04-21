//para importar
// const funcionesx = require("./funciones");       o 
//const{iva,funcion1} = require("./funciones");

//para mostrar el valor de las variables
//console.log(funcionesx.iva);
//console.log(funcionesx.saludar);
//console.log(funcionesx.funcion1(2,7,"+"));


function operacion()
{
switch(operador){
    case"+":
        return n1+n2;
        
    case"-":
        return n1-n2;
    
    case"*":
        return n1*n2;

    case"/":
        return n1/n2;


        default:
            return 0;
}

}

function saludar(nombre)
{
    //console.log('')
    return("");
}

exports.module={
    iva:12,
    function1:operacion,
    saludar:saludar,
}