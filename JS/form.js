
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

//creadores de personaje
// form
const form = document.getElementById('personajeSetupForm')
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
    localStorage.setItem("grupoPersonaje", JSON.stringify(grupoPersonajes))
})
// // modal
const modal = document.getElementById('modal-body')
modalGuardar.addEventListener('click', (event) => {
    event.preventDefault()
    let nombrePersonaje =document.getElementById("nombrePersonajeModal").value;
    let clasePersonaje =document.getElementById("clasePersonajeModal").value;
    let razaPersonaje =document.getElementById("razaPersonajeModal").value;
    let fuerzaTotal = Math.floor((Math.random() * 18) + 1);
    let carismaTotal = Math.floor((Math.random() * 18) + 1);
    let constitucionTotal = Math.floor((Math.random() * 18) + 1);
    let destrezaTotal = Math.floor((Math.random() * 18) + 1);
    let inteligenciaTotal = Math.floor((Math.random() * 18) + 1);
    let sabiduriaTotal = Math.floor((Math.random() * 18) + 1);

    const personajeNew = new Personaje(grupoPersonajes.length + 1, nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal)
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
  input.addEventListener("change", function() {
    let value = Number(input.value);
    if (value > 8 && value <= 13) {
      counter--;
    } else if (value > 13) {
      counter -= 2;
    }
    counterValue.innerHTML = counter;
  });
});

// // counter
// function checkNumbers() {
//   if (fuerzaTotal >= 8 && fuerzaTotal <= 15 &&
//       carismaTotal >= 8 && carismaTotal <= 15 &&
//       constitucionTotal >= 8 && constitucionTotal <= 15 &&
//       destrezaTotal >= 8 && destrezaTotal <= 15 &&
//       inteligenciaTotal >= 8 && inteligenciaTotal <= 15 &&
//       sabiduriaTotal >= 8 && sabiduriaTotal <= 15) {

//     counter -= fuerzaTotal > 8 ? (fuerzaTotal > 13 ? 2 : 1) : 0;
//     counter -= carismaTotal > 8 ? (carismaTotal > 13 ? 2 : 1) : 0;
//     counter -= constitucionTotal > 8 ? (constitucionTotal > 13 ? 2 : 1) : 0;
//     counter -= destrezaTotal > 8 ? (destrezaTotal > 13 ? 2 : 1) : 0;
//     counter -= inteligenciaTotal > 8 ? (inteligenciaTotal > 13 ? 2 : 1) : 0;
//     counter -= sabiduriaTotal > 8 ? (sabiduriaTotal > 13 ? 2 : 1) : 0;

//     if (counter >= 0) {
//       localStorage.setItem("fuerza", fuerzaTotal);
//       localStorage.setItem("carisma", carismaTotal);
//       localStorage.setItem("constitucion", constitucionTotal);
//       localStorage.setItem("destreza", destrezaTotal);
//       localStorage.setItem("inteligencia", inteligenciaTotal);
//       localStorage.setItem("sabiduria", sabiduriaTotal);
//       ;
//     } else {
//       alert("El total no puede exceder a 27 puntos");
//     }
//   }
// }
