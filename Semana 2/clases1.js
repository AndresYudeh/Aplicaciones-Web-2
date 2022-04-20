const persona={
    nombre:"Homero",
    apellido:"Simpson",
    esDocente: true,
    geolocalizacion:{
        lat:234.234534,
        lng: 34.3453453,
    },
    getNombreCompleto(){
        return´${this.nombre}${this.apellido}}´
}

console.log(persona.getNombreCompleto)