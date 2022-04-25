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

function emparejar(id, callback)
{
   const efu = efut.find((efu)=> efu.id === id);
   if(!efu)
   {
    const error =new Error();
    error.message='Emparejamiento no disponible';  
    return callback(error)
   }
    return callback(null, efu);
}

function emp(id, callback)
{
    const efu2 = efut2.find((efu2) => efu2.id ===id);
if(!efu2)
{
    const error = new Error();
    error.message='Equipo no encontrado';
    return callback(error)

}
return callback(null, efu2);
}




emparejar(4,(err, efu)=>{
    if(err){
        console.log(err.message);
        return;
    }

    emp(efu.idotro ,(err, efu2)=>{
        if(err)
        {
            console.log(err.message);
            return;
        }
        efu. VS = efu2;
        delete efu.idotro;
        console.log(efu);
    })

    // console.log(efu);

})

// emp(4,(err, efu2)=>{
//     if(err)
//     {
//         console.log(err.message);
//         return;
//     }
//     console.log(efu2);
// })