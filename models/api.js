/* Traer el jsonserver */



const url = `http://localhost:4000/Teams`

export const reclutas = async() =>{
    try{
        const respuesta = await fetch (url);
        const datosTeam = await respuesta.json()
        return datosTeam;
    }
    catch(error){
        console.log(error);
    }
}   

export const newRecluta = async recluta => {
    console.log(recluta);
    try{
        await fetch (url, {
            method:'POST',
            body: JSON.stringify(recluta),
            Headers: {
                'Content-Type':'applicacion/json'
            }
        })
    }
    catch(error){
        console.log(error);
    }
} 

