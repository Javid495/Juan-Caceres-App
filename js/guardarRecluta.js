import { newRecluta } from "../models/api.js";


document.querySelector('#guardar').addEventListener("click", (e) =>{
    e.preventDefault()
    const id = document.querySelector("#id").value    
    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value
    const telefono = document.querySelector("#telefono").value
    const email = document.querySelector("#email").value
    const direccion = document.querySelector("#direccion").value
    const fechaNacimiento = document.querySelector("#fechaNacimiento").value
    const NumeoId = document.querySelector("#NumeroId").value
    const fechaIngreso = document.querySelector("#fechaIngreso").value
    
    
    const recluta = {
        id,
        nombre,
        edad,
        telefono,
        email,
        direccion,
        fechaNacimiento,
        NumeoId,
        fechaIngreso
    }

    console.log(Object.values(recluta));

    newRecluta(recluta);
}) 

