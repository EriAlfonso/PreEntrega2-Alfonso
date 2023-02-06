// capturas de DOM
let btnVerCatalogo = document.getElementById("verCatalogo")
let personajesCreados = document.getElementById("personajesCreados")


// ver personajes function
function verPersonajes(array){
  //vaciar Div
  personajesCreados.innerHTML = ""
  //tenemos nuestros libros en estanteria:
  for(let personaje of grupoPersonajes){
      let verCards = document.createElement("div")
      //otra forma de sumarle una class a un elemento html
      //classList + add agrego clases al elemento seleccionado
      verCards.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3")
      verCards.innerHTML = `
      <div id="${personaje.id}" class="card" style="width: 18rem;">
              <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${personaje.nombre}" alt="${personaje.nombre} el ${personaje.clase}">
              <div class="card-body">
                  <h4 class="card-title">${personaje.nombre}</h4>
                  <p>Autor: ${personaje.clase}</p>
                  <p class="">Precio: ${personaje.raza}</p>
              <button id="agregarBtn${personaje.id}" class="btn btn-outline-success">Agregar al carrito</button>
              </div>
      </div>
      `
      personajesCreados.appendChild(verCards)
      //captura agregarBtn
      let agregarBtn = document.getElementById(`agregarBtn${personaje.id}`)
      //adjunto evento
      agregarBtn.addEventListener("click", ()=>{
          
      })
  }}
  btnVerCatalogo.onclick = ()=>{verPersonajes(grupoPersonajes)}