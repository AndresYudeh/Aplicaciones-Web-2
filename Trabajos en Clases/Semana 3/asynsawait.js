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

async function emparejar(id)
{
    const efu  = efut.find((efu)=> efu.id=== id);
    if (!efu)
    {
        const error= new Error();
        error.message=`Emparejamiento no disponible`;
        throw error;
    }
    return efu;
}


function emp(id)
{
    const efu2 =  efut2.find((efu2)=> efu2.id===id);
    if (!efu2)
    {
        const error = new Error();
        error.message=`Equipo no encontrado`;
        throw error;
    }
    return efu2;
}



(async ()=> {
    try {
        const efu =   await emparejar(1);
        const efu2 = await emp(efu.idotro);
        efu.efu2= efu2;
        delete efu.idotro;
        console.log(efu);
    } catch (error) {
        console.log(error.message)
    }
})();