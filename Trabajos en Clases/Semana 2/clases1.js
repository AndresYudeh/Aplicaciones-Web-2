const persona={
    nombre:"Homero",
    apellido:"Simpson",
    esDocente: true,
    geolocalizacion:{
        lat:234.234534,
        lng: 34.3453453,
    },
    getNombreCompleto: function(){
       return `${this.nombre} ${this.apellido}`;
        
}
}
console.log(persona.getNombreCompleto());

//desestructurar funciones

//function mostrarDatos({nombre, apellido, geolocalizacion:{lat, lng}, getNombreCompleto})

//{
   // console.log(nombre)
   // console.log(apellido)
   // console.log(lat)
   // console.log(lng)
   // console.log(getNombreCompleto)
//}
// mostrarDatos(persona)