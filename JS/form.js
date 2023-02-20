
// capturas de dom
let modalGuardar = document.getElementById("modalGuardar")
let personajeBtn = document.getElementById("nuevoPersonaje")
let personajeFormBox = document.getElementById("personajeNuevoForm")

//ternario para abrir y cerrar el form
personajeBtn.onclick = function () {
  personajeFormBox.style.display = personajeFormBox.style.display === "block" ? "none" : "block";
}

// JS pre armado del form
const navigateToFormStep = (stepNumber) => {
document.querySelectorAll(".form-step").forEach((formStepElement) => {
      formStepElement.classList.add("d-none");
  });
  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
      formStepHeader.classList.add("form-stepper-unfinished");
      formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
  });
  document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
  formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
  formStepCircle.classList.add("form-stepper-active");
  for (let index = 0; index < stepNumber; index++) {
      const formStepCircle = document.querySelector('li[step="' + index + '"]');
      if (formStepCircle) {
          formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
          formStepCircle.classList.add("form-stepper-completed");
      }
  }
};
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
  formNavigationBtn.addEventListener("click", () => {
      const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
      navigateToFormStep(stepNumber);
  });
});


// imagenes
let imageChoice = document.getElementById("imageSelect");
let previewImage = document.getElementById("previewImage");

imageChoice.addEventListener("change", function() {
  previewImage.src = `../assets/${this.value}`;
});



//creadores de personaje
// form
const form = document.getElementById('personajeSetupForm')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let levelPersonaje = 1
    let imagenPersonaje = document.getElementById("imageSelect").value;
    let nombrePersonaje = document.getElementById("nombrePersonaje").value;
    let clasePersonaje = document.getElementById("clasePersonaje").value;
    let razaPersonaje = document.getElementById("razaPersonaje").value;
    let fuerzaTotal = document.getElementById("fuerzaTotal").value;
    let carismaTotal = document.getElementById("carismaTotal").value;
    let constitucionTotal = document.getElementById("constitucionTotal").value;
    let destrezaTotal = document.getElementById("destrezaTotal").value;
    let inteligenciaTotal = document.getElementById("inteligenciaTotal").value;
    let sabiduriaTotal = document.getElementById("sabiduriaTotal").value;
    let hpPersonaje = clasePersonaje.toLowerCase() === "paladin" ? 
      10 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "arquero" ? 
      10 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "mago" ?
      6 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "barbaro" ? 
      12 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0) 
      : clasePersonaje.toLowerCase() === "guerrero" ? 
      10 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "hechicero" ? 
      6 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0) 
      :8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0) ;
    // creador del objeto
    const personajeNew = new Personaje(grupoPersonajes.length + 1, levelPersonaje, hpPersonaje, imagenPersonaje, nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal)
    console.log(personajeNew)
    grupoPersonajes.push(personajeNew)
    console.log(grupoPersonajes)
    localStorage.setItem("grupoPersonaje", JSON.stringify(grupoPersonajes))
})
// modal
const modal = document.getElementById('modal-body')
modalGuardar.addEventListener('click', (event) => {
    event.preventDefault()
    // valores adquirido del usuario
    let levelPersonaje = 1
    let imagenPersonaje = document.getElementById("imageSelectModal").value
    let nombrePersonaje =document.getElementById("nombrePersonajeModal").value;
    let clasePersonaje =document.getElementById("clasePersonajeModal").value;
    let razaPersonaje =document.getElementById("razaPersonajeModal").value;
    // valores random
    let fuerzaTotal = Math.floor((Math.random() * 18) + 1);
    let carismaTotal = Math.floor((Math.random() * 18) + 1);
    let constitucionTotal = Math.floor((Math.random() * 18) + 1);
    let destrezaTotal = Math.floor((Math.random() * 18) + 1);
    let inteligenciaTotal = Math.floor((Math.random() * 18) + 1);
    let sabiduriaTotal = Math.floor((Math.random() * 18) + 1);
    let hpPersonaje = clasePersonaje.toLowerCase() === "paladin" ? 
      10 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "picaro" ? 
      8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0) 
      : clasePersonaje.toLowerCase() === "arquero" ? 
      10 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "mago" ?
      6 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "barbaro" ? 
      12 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0) 
      : clasePersonaje.toLowerCase() === "guerrero" ? 
      10 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "bardo" ? 
      8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)  
      : clasePersonaje.toLowerCase() === "clerigo" ? 
      8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)  
      : clasePersonaje.toLowerCase() === "druida" ? 
      8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0) 
      : clasePersonaje.toLowerCase() === "hechicero" ? 
      6 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)
      : clasePersonaje.toLowerCase() === "explorador" ? 
      8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0)   
      :8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0) ;
    // creador del objeto
    const personajeNew = new Personaje(grupoPersonajes.length + 1, levelPersonaje, hpPersonaje, imagenPersonaje, nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal)
    console.log(personajeNew)
    grupoPersonajes.push(personajeNew)
    console.log(grupoPersonajes)
    localStorage.setItem("grupoPersonaje", JSON.stringify(grupoPersonajes))
})

// contador de puntos
let counterValue = document.getElementById("counterValue");
let counter = 27;
// modificador del contador
let numberInputs = document.querySelectorAll("input[type='number']");
numberInputs.forEach(input => {
  let previousValue = Number(input.value);
  input.addEventListener("change", function() {
    // valor inicial
    let value = Number(input.value);
    // devolucion de puntos
    if (value < previousValue) {
      let cambio = previousValue - value;
      if (value <= 13) {
        cambio = 1;
      } else if (value <= 8) {
        cambio = 2;
      }
      counter += cambio;
      // resta del contador
    } else {
      let cambio = 0;
      if (value > 8 && value <= 13) {
        cambio = -1;
      } else if (value > 13) {
        cambio = -2;
      }
      // mientras el contador tenga suficientes puntos sino lo setea al valor anterior
      if (counter + cambio >= 0) {
        counter += cambio;
      } else {
        input.value = previousValue;
        return;
      }
    }
    previousValue = value;
    counterValue.innerHTML = counter;
  });
});
