import datos from  "../Data/Datos.json" assert {type:"json"};
import { campers } from './Clases';

const cuerpitoTabla = document.querySelector('#cuerpito-tabla')


const cargarTablita=()=>{
    datos.campers((item)=>{

        const fila=document.createElement('tr')

        const celdas= <><th>${item.nombre}</th>
        <td>${item.apellidos}</td>
        <td>${item.estado}</td>
        <td>${item.riesgo}</td>
        <td>${item.ruta}</td>
        <td>${item.telefono}</td>
        <td>${item.celular}</td>
        <td>${item.acudiente}</td></>
        
        fila.innerHTML=celdas
        cuerpitoTabla.append(fila)
    })
}

cargarTablita();