// capturas de dom
// atributos del object

// form
let personajeBtn = document.getElementById("nuevoPersonaje")
let personajeFormBox = document.getElementById("personajeNuevoForm")

//ternario para abrir y cerrar el form
personajeBtn.onclick = function () {
    personajeFormBox.style.display = personajeFormBox.style.display === "block" ? "none" : "block";
}
// //creador de personaje
// function nuevoPersonaje(array){
//     const personajeNew = new Personaje(grupoPersonajes.length + 1, nombrePersonaje.value, clasePersonaje.value, razaPersonaje.value, fuerzaTotal.value, carismaTotal.value, constitucionTotal, destrezaTotal.value, inteligenciaTotal.value, sabiduriaTotal.value)
//     console.log(personajeNew)
//     array.push(personajeNew)
//     console.log(array)
//     localStorage.setItem("grupoPersonaje", JSON.stringify(array))
//     // reset de valores
//     nombrePersonaje.value = ""
//     clasePersonaje.value = ""
//     razaPersonaje.value = ""
//     fuerzaTotal.value = ""
//     carismaTotal.value = ""
//     constitucionTotal.value = ""   
//     destrezaTotal.value = ""
//     inteligenciaTotal.value = ""
//     sabiduriaTotal.value = ""
// }
const form = document.getElementById('userAccountSetupForm')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let nombrePersonaje =document.getElementById("nombrePersonaje").value;
    let clasePersonaje =document.getElementById("clasePersonaje").value;
    let razaPersonaje =document.getElementById("razaPersonaje").value;
    let fuerzaTotal =document.getElementById("fuerzaTotal").value;
    let carismaTotal =document.getElementById("carismaTotal").value;
    let constitucionTotal =document.getElementById("constitucionTotal").value;
    let destrezaTotal =document.getElementById("destrezaTotal").value;
    let inteligenciaTotal =document.getElementById("inteligenciaTotal").value;
    let sabiduriaTotal =document.getElementById("sabiduriaTotal").value;

    const personajeNew = new Personaje(grupoPersonajes.length + 1, nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal)
    console.log(personajeNew)
    grupoPersonajes.push(personajeNew)
    console.log(grupoPersonajes)
})

function checkNumbers() {
  let counter = 27;
  if (fuerzaTotal >= 8 && fuerzaTotal <= 15 &&
      carismaTotal >= 8 && carismaTotal <= 15 &&
      constitucionTotal >= 8 && constitucionTotal <= 15 &&
      destrezaTotal >= 8 && destrezaTotal <= 15 &&
      inteligenciaTotal >= 8 && inteligenciaTotal <= 15 &&
      sabiduriaTotal >= 8 && sabiduriaTotal <= 15) {

    counter -= fuerzaTotal > 8 ? (fuerzaTotal > 13 ? 2 : 1) : 0;
    counter -= carismaTotal > 8 ? (carismaTotal > 13 ? 2 : 1) : 0;
    counter -= constitucionTotal > 8 ? (constitucionTotal > 13 ? 2 : 1) : 0;
    counter -= destrezaTotal > 8 ? (destrezaTotal > 13 ? 2 : 1) : 0;
    counter -= inteligenciaTotal > 8 ? (inteligenciaTotal > 13 ? 2 : 1) : 0;
    counter -= sabiduriaTotal > 8 ? (sabiduriaTotal > 13 ? 2 : 1) : 0;

    if (counter >= 0) {
      localStorage.setItem("fuerza", fuerzaTotal);
      localStorage.setItem("carisma", carismaTotal);
      localStorage.setItem("constitucion", constitucionTotal);
      localStorage.setItem("destreza", destrezaTotal);
      localStorage.setItem("inteligencia", inteligenciaTotal);
      localStorage.setItem("sabiduria", sabiduriaTotal);
      ;
    } else {
      alert("El total no puede exceder a 27 puntos");
    }
  }
}
