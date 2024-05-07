function validarInfo (){
    let character = document.getElementById('characterName').value;
    let actor = document.getElementById('nameActor').value;
    let ubication = document.getElementById('ubicacion').value;

    if (character== "") {
        alert('El campo es requerido');
        return false;
}
    if (actor== "") {
        alert('El campo es requerido');
        return false;
}
    if (ubication== "") {
        alert('El campo es requerido');
        return false;
}

return true
}

//Guardar los datos del heroe en el JSON

document.addEventListener("DOMContentLoaded", function(){
    const saveHeroButton = document.querySelector("boton_2");

    saveHeroButton.addEventListener("click", function(){
        //variables para los input de los datos de registro
        const nameCharacter = document.getElementById("characterName").value;
        const nameActor = document.getElementById("nameActor").value;
        const ageActor = document.getElementById("inputEdadActor").value;
        const ubicacion = document.getElementById("ubicacion").value;
        const poster = document.getElementById("inputCity").value;
        const productora = document.getElementById("productora").value;

        const DatosHeroe = {
            nameCharacter:nameCharacter,
            nameActor:nameActor,
            ageActor:ageActor,
            ubicacion:ubicacion,
            poster:poster,
            productora:productora
        };
    })
})







//funcion para la ventanita de nuevo heroe

document.getElementById("botonMostrarFuncion").addEventListener("click", function(){
   var contenedorTrajes = document.getElementById("contenedorTrajes");
   var nuevoTraje = document.createElement("div"); 

   nuevoTraje.classList.add("traje");
   nuevoTraje.innerHTML = `
   <div class="row align-items-center">
            <div>
                <label for="formGroupExampleInput" class="first_text">Nombre del traje</label>
            </div>
            <div class="col-8">
                <input type="text" class="form-control" id="formGroupExampleInput">
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-danger circle-btn EliminarTraje">-</button>
            </div>
        </div>
    `; 
    //Mostrar los trajes nuevos
    contenedorTrajes.appendChild(nuevoTraje);
    nuevoTraje.style.display = "block";
})

//se le agrega una funcion al boton "-" para eliminar el traje

var deleteTraje = nuevoTraje.querySelector(".EliminarTraje");
EliminarTraje.addEventListener("click",function(){
    contenedorTrajes.removeChild(nuevoTraje);
})