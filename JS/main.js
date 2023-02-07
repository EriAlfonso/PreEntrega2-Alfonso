// capturas de DOM
let mostrarPersonajes = document.getElementById("verPersonajes");
let personajesCreados = document.getElementById("personajesCreados");
let search = document.getElementById("search");


// function para ver los personajes creados
function verPersonajes(grupoPersonajes) {
personajesCreados.innerHTML = "";
for (let personaje of grupoPersonajes) {
    let verCards = document.createElement("div");
    verCards.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3");
    verCards.innerHTML = `
    <div id="${personaje.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${personaje.nombre}" alt="${personaje.nombre} el ${personaje.clase}">
            <div class="card-body">
                <h4 class="card-title">${personaje.nombre}</h4>
                <p>Raza: ${personaje.raza}</p>
                <p>Clase: ${personaje.clase}</p>
                <div class="cardHidden" style="display: none;">
                    <p>Fuerza:  ${personaje.fuerza} </p>
                    <p>Carisma:  ${personaje.carisma} </p>
                    <p>Constitucion:  ${personaje.constitucion} </p>
                    <p>Destreza:  ${personaje.destreza} </p>
                    <p>Inteligencia:  ${personaje.inteligencia} </p>
                    <p>Sabiduria:  ${personaje.sabiduria} </p>
                </div>
            <button id="expandirBtn${personaje.id}" class="btn btn-outline-success">Expandir</button>
            <button id="borrarBtn${personaje.id}" class="btn btn-outline-danger">Borrar</button>
            </div>
    </div>
    `;
    personajesCreados.appendChild(verCards);
    //captura de dom de los botones
    let borrarBtn = document.getElementById(`borrarBtn${personaje.id}`);
    let expandirBtn = document.getElementById(`expandirBtn${personaje.id}`);
    expandirBtn.addEventListener("click", function() {
        toggleContent(this)});
    borrarBtn.addEventListener("click", function(){
        verCards.remove();
        let personajeEliminar = grupoPersonajes.find((personaje)=> personaje.id )
        console.log(personajeEliminar)
        //buscar el indice
        let posicion = grupoPersonajes.indexOf(personajeEliminar)
        console.log(posicion)
        grupoPersonajes.splice(posicion,1)
        console.log(grupoPersonajes)
        // Borrar del storage
        localStorage.setItem("grupoPersonaje", JSON.stringify(grupoPersonajes))
});
}
}
// expandir cards
function toggleContent(element) {
    let cardBody = element.closest(".card").querySelector(".cardHidden");
    if (cardBody.style.display === "none") {
    cardBody.style.display = "block";
    } else {
    cardBody.style.display = "none";
    }
};

// busqueda por nombre y clase
function buscarPersonaje(find, array){
    let buscarPersonaje = array.filter(
        (personaje) => personaje.nombre.toLowerCase().includes(find) || personaje.clase.toLowerCase().includes(find) || personaje.raza.toLowerCase().includes(find)
    )
    if(buscarPersonaje.length == 0){
        coincidencia.innerHTML = `<h3>El personaje, raza o clase no existe</h3>`
        verPersonajes(buscarPersonaje)
    }else{
        coincidencia.innerHTML = ""
        verPersonajes(buscarPersonaje)
    }
}

// eventos
search.addEventListener("input", ()=>{
    buscarPersonaje(search.value, grupoPersonajes)
})

mostrarPersonajes.onclick = () => {
    verPersonajes(grupoPersonajes);
    };
