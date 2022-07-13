import './style.css'
import axios from 'axios'
import { IResCliente, IClientes } from './interfaces/ICliente'

const httpAxios=axios.create({
  baseURL: `http://localhost:2500/v1/sextoa/api/`
})

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML=`
<hr>
<h1> Registro de Clientes </h1>
<hr>
`
const etiqueta = document.createElement("label");
etiqueta.textContent=`ID`
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"

app.appendChild(etiqueta);
app.appendChild(input);




app.innerHTML += `
<label for='CLIENTE_ID' >ID Cliente</label><input id='CLIENTE_ID' />
<br>
<br>
<label for='CLIENTE_NOMBRE' >Nombre</label><input id='CLIENTE_NOMBRE' />
<br>
<br>
<label for='CLIENTE_CEDULA' >Cedula</label><input id='CLIENTE_CEDULA' />
<br>
<br>
<label for='CLIENTE_TELEFONO' >Telefono</label><input id='CLIENTE_TELEFONO' />
<br>
<br>
<label for='Estado' >Estado</label><input id='Estado' />
<br>
<br>

<button id="nuevo">Limpiar</button>
<button id="grabar">Guardar</button>
<button id="consultar">Consultar</button>

<div id="cuerpo" />
`
// --------------------------------------------------------
const id = document.querySelector<HTMLInputElement>('#id')!
const cliente_id = document.querySelector<HTMLInputElement>('#CLIENTE_ID')!
const cliente_nombre = document.querySelector<HTMLInputElement>('#CLIENTE_NOMBRE')!
const cliente_cedula = document.querySelector<HTMLInputElement>('#CLIENTE_CEDULA')!
const cliente_telefono = document.querySelector<HTMLInputElement>('#CLIENTE_TELEFONO')!
const estado = document.querySelector<HTMLInputElement>('#Estado')!


const nuevo = document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar = document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>("#consultar")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!


nuevo.addEventListener('click', () =>{
  id.value=""
  cliente_id.value=""
  cliente_nombre.value=""
  cliente_cedula.value=""
  cliente_telefono.value=""
  estado.value=""

})
//Consulta general y especifica
consultar.addEventListener('click', async()=>{
  const resclientes:IResCliente =await (await httpAxios.get<IResCliente>('clientes')).data
  
  const tabla = document.createElement('table');
  tabla.id="tabla"
  tabla.border="1"

  tabla.style.marginTop = "65px";
  tabla.style.marginLeft = "35.5%";
  tabla.style.width = "80 %";

  console.log(resclientes);
  const { clientes }=resclientes;
  console.log(clientes);

    const row2 = tabla.insertRow();
    const xcelda = row2.insertCell();
    xcelda.innerHTML = `<p>NOMBRE</p>`;
    const xcelda2= row2.insertCell();
    xcelda2.innerHTML=`<p>CÉDULA</p>`;
    const xcelda3= row2.insertCell();
    xcelda3.innerHTML=`<p>TELÉFONO</p>`;
    const xcelda5= row2.insertCell();
    xcelda5.innerHTML=`<p>ELIMINAR CLIENTE</p>`;



  for(const cliente of clientes)
    {
        const row = tabla.insertRow()
        const celda = row.insertCell()
        celda.innerHTML
        =` <button class="boton" value='${ cliente.CLIENTE_ID }'>
        ${cliente.CLIENTE_NOMBRE} </button>`;

        const celda2= row.insertCell()
        celda2.innerHTML=`${cliente.CLIENTE_CEDULA}`
        const celda3= row.insertCell()
        celda3.innerHTML=`${cliente.CLIENTE_TELEFONO}`
        const celda5= row.insertCell();
        celda5.innerHTML=`<button class="botoneliminar" value='${cliente.CLIENTE_ID}'>Eliminar </button>`;

    }
//Consulta especifica

      cuerpo.innerHTML=""
      cuerpo.appendChild(tabla)
      document.querySelectorAll('.boton').forEach((ele: Element) =>{

      ele.addEventListener('click', async()=>
      {
          const idcliente= (ele as HTMLButtonElement).value
          const{data} = await httpAxios.get<IClientes>(`clientes/${idcliente}`)
          console.log(data);
          console.log(data.CLIENTE_ID);
          cliente_id.value=data.CLIENTE_ID.toString();
          cliente_nombre.value= data.CLIENTE_NOMBRE;
          cliente_cedula.value= data.CLIENTE_CEDULA;
          cliente_telefono.value=data.CLIENTE_TELEFONO;
          estado.value=data.Estado!.toString();
          id.value=data._id!


    })

  })

//eliminar

  document.querySelectorAll('.botoneliminar').forEach( (ele2 : Element )  =>{

    ele2.addEventListener('click',async ()=>
   { 
     const idcliente = (ele2 as HTMLButtonElement ).value;
     console.log(idcliente);
     const {data} = await httpAxios.delete<IClientes>(`clientes/${idcliente}`)
     const eliminado = data
     console.log(data);
     console.log(`Cliente eliminado => ${eliminado.CLIENTE_ID}`);

   })

 })

})

const asignarValores=()=>{
  const data:IClientes = {
    CLIENTE_ID: Number (cliente_id.value),
    CLIENTE_NOMBRE: cliente_nombre.value,
    CLIENTE_CEDULA: cliente_cedula.value,
    CLIENTE_TELEFONO: cliente_telefono.value
  }
  return data;
}

grabar.addEventListener('click', async()=>{
  const data = asignarValores()
  //modificacion de datos
  if(id.value.trim().length > 0){
    const rescliente:IClientes = await(await httpAxios.put<IClientes>(`clientes/${cliente_id.value}`,data)).data
    console.log(`El cliente ${rescliente.CLIENTE_NOMBRE} fue modificado con exito`);
    return;
  }

  try{
    const rescliente:IClientes = await (await httpAxios.post<IClientes>(`clientes`, data)).data
    console.log(`El cliente ${rescliente.CLIENTE_NOMBRE} fue insertado con éxito`);

  }catch(error){
    if(axios.isAxiosError(error))
    {
      console.log(`Error al momento de ejecutar Axios`);
    }
  }
})