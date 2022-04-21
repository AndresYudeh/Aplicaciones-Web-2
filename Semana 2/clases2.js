class Prueba
{
    //constructor con parametros
    constructor(nombre, apellido)
    {
        this.nombre= nombre;
        this.apellido= apellido;
    }
    persona = {
        nombre:"",
        apellido:"",
        esDocente:"",
        geolocalizacion:{
            lat:12.16255112,
            lng:34.6565412,
        },
        prueba: ()=>{
            return this.nombre;
            
        },
        prueba1: ()=>{
            return this.apellido;
            
        }

    }
}
let personax = new Prueba('Bart', 'Simpson');
console.log(personax.persona.prueba())
console.log(personax.persona.prueba1())
