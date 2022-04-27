const efut=[
    {
        id:1,
        nombre:'Manchester City',
        idotro:3
    },
    {
        id:2,
        nombre:'Barcelona FC',
        idotro:1
    },
    {
        id:3,
        nombre:'Liverpool',
        idotro:2
    },
    {
        id:4,
        nombre:'Real Madrid',
        idotro:4
    },

]

const efut2=[
    {
        id:1,
        nombre:'River Plate'
    },
    {
        id:2,
        nombre:'Flamengo'
    },
    {
        id:3,
        nombre:'Boca Juniors'
    },
    {
        id:4,
        nombre:'Santos FC'
    },

]

function emparejar(id)
{
    return new Promise ((resolve, reject)=>{
         const efu = efut.find((efu)=> efu.id === id);
        if(!efu)
        {
            const error =new Error();
            error.message='Emparejamiento no disponible';  
            reject(error);
         }
    resolve(efu);
})
}

function emp(id)
{
    return new Promise ((resolve, reject)=>{
         const efu2 = efut2.find((efu2)=> efu2.id === id);
        if(!efu2)
        {
            const error =new Error();
            error.message='Equipo no encontrado';  
            reject(error);
         }
    resolve(efu2);
})
}


let efuAuxi={};


emparejar(1).then((efu)=>{
    //console.log(efu)
    efuAuxi = efu;
    return emp(efu.idotro);
})
.then((efu2)=>{
    efuAuxi.efu2 = efu2;
    delete efuAuxi.idotro;
    console.log(efuAuxi)
})
.catch((motivo)=>{
    console.log(motivo.message)
})



// emp(1).then((efu2)=>{
//     console.log(efu2)
// })
// .catch((motivo)=>{
//     console.log(motivo.message)
// })

