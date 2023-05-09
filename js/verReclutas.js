import { reclutas } from "../models/api.js";

(function(){
    document.addEventListener('DOMContentLoaded', verDatos);
    async function verDatos(){
        const verReclutas = await reclutas();
        console.log(verReclutas)
        verReclutas.forEach(data => {
            const {Team1,Team2} = data;
            data.Team1.forEach(element =>{
                const {id,nombre,edad,telefono,email,direccion,fechaNacimiento,numeroIdentificacion,fechaIngreso} = element;
                const mostarData = document.querySelector("#reclutas")
                mostarData.innerHTML += `
                <div class="card col-3 col-sm-2"  id="tarjeta" style="width: auto;">
                    <div class="card-body ">
                        <p class="card-title">Id: ${id}</p>
                        <p class="card-text"> Nombre: ${nombre}</p>
                        <p class="card-text"> Edad:${edad}</p>
                        <p class="card-text"> Telefono: ${telefono}</p>
                        <p class="card-text"> Correo Eletronico:${email}</p>
                        <p class="card-text"> Direccion: ${direccion}</p>
                        <p class="card-text"> Fecha de Nacimiento: ${fechaNacimiento}</p>
                        <p class="card-text"> Numero de Identificacion: ${numeroIdentificacion}</p>
                        <p class="card-text"> Fecha de ingreso: ${fechaIngreso}</p>
                    </div>
                </div>
                `
                console.log(id);
            })
            data.Team2.forEach(element2 =>{
                const {id,nombre,edad,telefono,email,direccion,fechaNacimiento,numeroIdentificacion,fechaIngreso} = element2;
                const mostarData = document.querySelector("#reclutas2")
                mostarData.innerHTML += `
                <div class="card col-3 col-sm-2"  id="tarjeta" style="width: auto;">
                    <div class="card-body ">
                        <p class="card-title">Id: ${id}</p>
                        <p class="card-text"> Nombre: ${nombre}</p>
                        <p class="card-text"> Edad:${edad}</p>
                        <p class="card-text"> Telefono: ${telefono}</p>
                        <p class="card-text"> Correo Eletronico:${email}</p>
                        <p class="card-text"> Direccion: ${direccion}</p>
                        <p class="card-text"> Fecha de Nacimiento: ${fechaNacimiento}</p>
                        <p class="card-text"> Numero de Identificacion: ${numeroIdentificacion}</p>
                        <p class="card-text"> Fecha de ingreso: ${fechaIngreso}</p>
                    </div>
                </div>
                `
                console.log(id);
            })
            data.Team3.forEach(element2 =>{
                const {id,nombre,edad,telefono,email,direccion,fechaNacimiento,numeroIdentificacion,fechaIngreso} = element2;
                const mostarData = document.querySelector("#reclutas3")
                mostarData.innerHTML += `
                <div class="card col-3 col-sm-2"  id="tarjeta" style="width: auto;">
                    <div class="card-body ">
                        <p class="card-title">Id: ${id}</p>
                        <p class="card-text"> Nombre: ${nombre}</p>
                        <p class="card-text"> Edad:${edad}</p>
                        <p class="card-text"> Telefono: ${telefono}</p>
                        <p class="card-text"> Correo Eletronico:${email}</p>
                        <p class="card-text"> Direccion: ${direccion}</p>
                        <p class="card-text"> Fecha de Nacimiento: ${fechaNacimiento}</p>
                        <p class="card-text"> Numero de Identificacion: ${numeroIdentificacion}</p>
                        <p class="card-text"> Fecha de ingreso: ${fechaIngreso}</p>
                    </div>
                </div>
                `
                console.log(id);
            })
 
        });

    }
    
})()