// capturas de DOM
let mostrarPersonajes = document.getElementById("verPersonajes");
let personajesCreados = document.getElementById("personajesCreados");
let grupoCreados = document.getElementById("grupoCreados");
let search = document.getElementById("search");
let ordenar = document.getElementById("orden");
let loaderDiv = document.getElementById("loaderDiv")
let loaderText = document.getElementById("loaderText");
let loader = document.getElementById("loader");

// function para ver los personajes creados
function verPersonajes(grupoPersonajes) {
personajesCreados.innerHTML = "";
for (let personaje of grupoPersonajes) {
    let verCards = document.createElement("div");
    verCards.classList.add("col-12", "col-md-6", "col-lg-3", "mb-3");
    verCards.innerHTML = `
    <div id="${personaje.id}" class="card" style="width: 18rem; margin-top: 2rem ;">
            <img class="card-img-top img-fluid" style="height: 275px;"src="assets/${personaje.imagen}" alt="${personaje.nombre} el ${personaje.clase}">
            <div class="card-body">
                <h4 class="card-title">${personaje.nombre}</h4>
                <p>Nivel: ${personaje.level}</p>
                <p>Raza: ${personaje.raza}</p>
                <p>Clase: ${personaje.clase}</p>
                <div class="cardHidden" style="display: none;">
                    <p>Hitpoints:  ${personaje.hp} </p>
                    <p>Fuerza:  ${personaje.fuerza} </p>
                    <p>Carisma:  ${personaje.carisma} </p>
                    <p>Constitucion:  ${personaje.constitucion} </p>
                    <p>Destreza:  ${personaje.destreza} </p>
                    <p>Inteligencia:  ${personaje.inteligencia} </p>
                    <p>Sabiduria:  ${personaje.sabiduria} </p>
                </div>
            <button id="nivelBtn${personaje.id}" class="btn btn-outline-success">↑nivel</button>
            <button id="expandirBtn${personaje.id}" class="btn btn-outline-warning">Expandir</button>
            <button id="borrarBtn${personaje.id}" class="btn btn-outline-danger">Borrar</button>
            <button id="addGroup${personaje.id}" class="btn btn-outline-success">Agregar al grupo</button>
            </div>
    </div>
    `;
    personajesCreados.appendChild(verCards);

    //captura de dom de los botones
    let borrarBtn = document.getElementById(`borrarBtn${personaje.id}`);
    let expandirBtn = document.getElementById(`expandirBtn${personaje.id}`);
    let addGroup = document.getElementById(`addGroup${personaje.id}`);
    let levelBtn = document.getElementById(`nivelBtn${personaje.id}`);
    let constitucionPlus = (personaje.constitucion > 13 ? 2 : personaje.constitucion > 11 ? 1 : 0)
    expandirBtn.addEventListener("click", function() {
        toggleContent(this)});
    // function para subir de nivel
    levelBtn.addEventListener("click", function() {
        personaje.level++;
        verCards.querySelector("p:nth-of-type(1)").textContent = `Nivel: ${personaje.level}`;
        personaje.clase== "mago"?
            personaje.hp += Math.floor(Math.random() * 6) + 1 + constitucionPlus
        :personaje.clase== "brujo"?
            personaje.hp += Math.floor(Math.random() * 6) + 1 + constitucionPlus
        :personaje.clase== "paladin"?
            personaje.hp += Math.floor(Math.random() * 10) + 1 + constitucionPlus
        :personaje.clase== "guerrero"?
            personaje.hp += Math.floor(Math.random() * 10) + 1 + constitucionPlus
        :personaje.clase== "arquero"?
            personaje.hp += Math.floor(Math.random() * 10) + 1 + constitucionPlus
        :personaje.clase== "barbaro"?
            personaje.hp += Math.floor(Math.random() * 12) + 1 + constitucionPlus
        :personaje.hp += Math.floor(Math.random() * 8) + 1 + constitucionPlus
        verCards.querySelector(".cardHidden p:nth-of-type(1)").textContent = `Hitpoints: ${personaje.hp}`
        localStorage.setItem("grupoPersonaje", JSON.stringify(grupoPersonajes))
        });
    // function para borrar
    borrarBtn.addEventListener("click", function(){
        verCards.remove();
        let id = personaje.id;
        let personajeEliminar = grupoPersonajes.find((personaje)=> personaje.id === id)
        //buscar el indice
        let posicion = grupoPersonajes.indexOf(personajeEliminar)
        grupoPersonajes.splice(posicion,1)
        // Borrar del storage
        localStorage.setItem("grupoPersonaje", JSON.stringify(grupoPersonajes))
});
// funcion para agregar a grupo
addGroup.addEventListener("click", ()=>{
    agregarPersonajeGrupo(personaje)
    });

}
}
let grupoAventura
if(localStorage.getItem("grupo")){
    grupoAventura = JSON.parse(localStorage.getItem("grupo"))
    console.log(grupoAventura)
}else{
    grupoAventura = []
    localStorage.setItem("grupo", JSON.stringify(grupoAventura))
}


function setiarGrupo(grupoAventura){
    grupoCreados.innerHTML = "";
    grupoAventura.forEach((personajeGrupo)=>{
        grupoCreados.innerHTML +=
        `
        <div id="grupo${personajeGrupo.id}" class="card" style="width: 18rem; margin: 1rem;">
            <img class="card-img-top img-fluid" style="height: 275px;"src="assets/${personajeGrupo.imagen}" alt="${personajeGrupo.nombre} el ${personajeGrupo.clase}">
            <div class="card-body">
                <h4 class="card-title">${personajeGrupo.nombre}</h4>
                <p>Nivel: ${personajeGrupo.level}</p>
                <p>Raza: ${personajeGrupo.raza}</p>
                <p>Clase: ${personajeGrupo.clase}</p>
                <div class="cardHidden" style="display: none;">
                    <p>Hitpoints:  ${personajeGrupo.hp} </p>
                    <p>Fuerza:  ${personajeGrupo.fuerza} </p>
                    <p>Carisma:  ${personajeGrupo.carisma} </p>
                    <p>Constitucion:  ${personajeGrupo.constitucion} </p>
                    <p>Destreza:  ${personajeGrupo.destreza} </p>
                    <p>Inteligencia:  ${personajeGrupo.inteligencia} </p>
                    <p>Sabiduria:  ${personajeGrupo.sabiduria} </p>
                </div>
            <button id="expandirBtngrupo${personajeGrupo.id}" class="btn btn-outline-warning">Expandir</button>
            <button id="botonBorrar${personajeGrupo.id}" class="btn btn-outline-danger">Borrar del grupo</button>
            </div>
        </div>
        `;

        // eliminar del grupo
        document.getElementById(`botonBorrar${personajeGrupo.id}`).addEventListener("click",()=>{
            let personajeRemover = document.getElementById(`grupo${personajeGrupo.id}`)
            personajeRemover.remove()
            let grupoEliminar = grupoAventura.find((personaje)=> personaje.id ==personajeGrupo.id)
            let posicion = grupoAventura.indexOf(grupoEliminar)
            grupoAventura.splice(posicion,1)
            localStorage.setItem("grupo", JSON.stringify(grupoAventura))
        });

        let expandirBtnGrupo = document.getElementById(`expandirBtngrupo${personajeGrupo.id}`);
        expandirBtnGrupo.addEventListener("click", function() {
            toggleContentgrupo(this)
        });
    });
}

function agregarPersonajeGrupo(personaje){
    let personajeAgregado = grupoAventura.find((elem)=>elem.id == personaje.id)

    if(personajeAgregado == undefined){
        grupoAventura.push(personaje)
        localStorage.setItem("grupo", JSON.stringify(grupoAventura))
        Swal.fire({
            title: 'Vamos de aventura!',
            text: `${personaje.nombre} se unio al grupo!`,
            icon: "success",
            confirmButtonColor: "green",
            confirmButtonText: "A la carga!",
            timer: 3000,
            imageUrl: `assets/${personaje.imagen}`,
            imageHeight: 200
        })
        setiarGrupo(grupoAventura);
    }else{
        Swal.fire({
            title: 'No necesitas dos de mi!',
            text: `${personaje.nombre} ya esta en el grupo!`,
            icon: "warning",
            imageUrl: `assets/${personaje.imagen}`,
            imageHeight: 200,
            showConfirmButton: false,
            timer: 1500,
            
        })
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

function toggleContentgrupo(element) {
    let cardBodygrupo = element.closest(".card").querySelector(".cardHidden");
    if (cardBodygrupo.style.display === "none") {
        cardBodygrupo.style.display = "block";
    } else {
        cardBodygrupo.style.display = "none";
    }
};

// busqueda por nombre y clase
function buscarPersonaje(find, array){
    let buscarPersonaje = array.filter(
        (personaje) => personaje.nombre.toLowerCase().includes(find) || personaje.clase.toLowerCase().includes(find) || personaje.raza.toLowerCase().includes(find)
    )
    if(buscarPersonaje.length == 0){
        personajeReturn.innerHTML = `<h3>El personaje, raza o clase no existe</h3>`
        verPersonajes(buscarPersonaje)
    }else{
        personajeReturn.innerHTML = ""
        verPersonajes(buscarPersonaje)
    }
}

// filtro por nombre
function ordenarPorNombre(array) {
    const nombresAlfabeticamente = [].concat(array);
    nombresAlfabeticamente.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });
    verPersonajes(nombresAlfabeticamente);
}

// filtro de clase
function ordenarPorClase(array) {
    const claseAlfabeticamente = [].concat(array);
    claseAlfabeticamente.sort((a, b) => {
        if (a.clase > b.clase) {
            return 1;
        }
        if (a.clase < b.clase) {
            return -1;
        }
        return 0;
    });
    verPersonajes(claseAlfabeticamente);
}

// filtro de raza
function ordenarPorRaza(array) {
    const razaAlfabeticamente = [].concat(array);
    razaAlfabeticamente.sort((a, b) => {
        if (a.raza > b.raza) {
            return 1;
        }
        if (a.raza < b.raza) {
            return -1;
        }
        return 0;
    });
    verPersonajes(razaAlfabeticamente);
}

//Eventos
// buscador
search.addEventListener("input", ()=>{
    buscarPersonaje(search.value, grupoPersonajes)
})

// ordenador
ordenar.addEventListener("change", () => {
    if (ordenar.value == 1) {
        ordenarPorNombre(grupoPersonajes);
    } else if (ordenar.value == 2) {
        ordenarPorClase(grupoPersonajes);
    } else if (ordenar.value == 3) {
        ordenarPorRaza(grupoPersonajes);
    } else {
        verPersonajes(grupoPersonajes);
    }
});

// mostrar personajes array
mostrarPersonajes.onclick = () => {
    loader.style.display = "flex"
    loaderText.style.display = "flex"
    personajesCreados.style.display = personajesCreados.style.display === "flex" ? "none" : "flex";
    grupoCreados.style.display = grupoCreados.style.display === "flex" ? "none" : "flex";
    setTimeout(()=>{
        loaderText.innerHTML = ""
        loader.remove()
        verPersonajes(grupoPersonajes);
        setiarGrupo(grupoAventura);
        loader.style.display = "none"
        loaderText.style.display = "none"
    }, 1000)
};

