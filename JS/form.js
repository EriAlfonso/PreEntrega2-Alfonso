
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

imageChoice.addEventListener("change", function () {
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
              : 8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0);
  // creador del objeto
  const personajeNew = new Personaje(grupoPersonajes.length + 1, levelPersonaje, hpPersonaje, imagenPersonaje, nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal)
  console.log(personajeNew)
  grupoPersonajes.push(personajeNew)
  console.log(grupoPersonajes)
  localStorage.setItem("grupoPersonaje", JSON.stringify(grupoPersonajes)) 
  if (clasePersonaje.toLowerCase() === "paladin") {
    Swal.fire({
      title: 'Bien MiLord!',
      text: 'Has creado un poderoso paladín. ¡Que la luz te guíe en tus aventuras!',
      imageUrl: '../assets/paladinCat.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "arquero") {
    Swal.fire({
      title: 'Acertado!',
      text: 'Has creado un arquero experto. ¡Nunca fallaremos!',
      imageUrl: '../assets/rangerCat.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "picaro") {
    Swal.fire({
      title: 'Bien!',
      text: 'Has creado un picaro silencioso. ¡Seguiremos en sigilo!',
      imageUrl: '../assets/owlAssassin.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "mago") {
    Swal.fire({
      title: 'Magnifico!',
      text: 'Has creado un mago brillante. ¡Que empieze la magia!',
      imageUrl: '../assets/wizardCat.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "barbaro") {
    Swal.fire({
      title: 'RAAARGH!(bien hecho!)',
      text: 'Has creado un barbaro enfurecido. ¡RAAAARGH!!(¡al ataque!)',
      imageUrl: '../assets/axolotlBarbarian.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "guerrero") {
    Swal.fire({
      title: 'Victoria!',
      text: 'Has creado un habilidoso guerrero!. ¡A la carga!',
      imageUrl: '../assets/warriorMouse.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "clerigo") {
    Swal.fire({
      title: 'Gloria!',
      text: 'Has creado un deslumbrante clerigo. ¡La luz nos guiara!',
      imageUrl: '../assets/turtleCleric.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "druida") {
    Swal.fire({
      title: 'Cumplido!',
      text: 'Has creado un druida astuto. ¡Siganme, La naturaleza nos acompaña!',
      imageUrl: '../assets/catDruid.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "explorador") {
    Swal.fire({
      title: 'Affirmativo!',
      text: 'Has creado un explorador curioso. ¡Hay mucho mas para explorar!',
      imageUrl: '../assets/axolotlArtificer.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "hechicero") {
    Swal.fire({
      title: 'Hecho!',
      text: 'Has creado un hechicero inteligente . ¡A seguir avanzando!',
      imageUrl: '../assets/axolotlSorcerer.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "monje") {
    Swal.fire({
      title: 'Satisfactorio!',
      text: 'Has creado un monje sabio. ¡Muchos caminos llegan a nuestro destino!',
      imageUrl: '../assets/tigerMonk.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "brujo") {
    Swal.fire({
      title: 'Cumplido!',
      text: 'Has creado un brujo mañoso. ¡Nada nos detendra!',
      imageUrl: '../assets/catWarlock.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else {
    Swal.fire({
      title: '♫♪Magnifico!♪♫',
      text: 'Has creado un bardo entusiasta. ♫♪¡Preparense para el show!♪♫',
      imageUrl: '../assets/mouseBard.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
})

// modal
const modal = document.getElementById('modal-body')
modalGuardar.addEventListener('click', (event) => {
  event.preventDefault()
  // valores adquirido del usuario
  let levelPersonaje = 1
  let imagenPersonaje = document.getElementById("imageSelectModal").value
  let nombrePersonaje = document.getElementById("nombrePersonajeModal").value;
  let clasePersonaje = document.getElementById("clasePersonajeModal").value;
  let razaPersonaje = document.getElementById("razaPersonajeModal").value;
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
                        : 8 + (constitucionTotal > 13 ? 2 : constitucionTotal > 11 ? 1 : 0);
  // creador del objeto
  const personajeNew = new Personaje(grupoPersonajes.length + 1, levelPersonaje, hpPersonaje, imagenPersonaje, nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal)
  console.log(personajeNew)
  grupoPersonajes.push(personajeNew)
  console.log(grupoPersonajes)
  localStorage.setItem("grupoPersonaje", JSON.stringify(grupoPersonajes))
  if (clasePersonaje.toLowerCase() === "paladin") {
    Swal.fire({
      title: 'Bien MiLord!',
      text: 'Has creado un poderoso paladín. ¡Que la luz te guíe en tus aventuras!',
      imageUrl: '../assets/paladinCat.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "arquero") {
    Swal.fire({
      title: 'Acertado!',
      text: 'Has creado un arquero experto. ¡Nunca fallaremos!',
      imageUrl: '../assets/rangerCat.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "picaro") {
    Swal.fire({
      title: 'Bien!',
      text: 'Has creado un picaro silencioso. ¡Seguiremos en sigilo!',
      imageUrl: '../assets/owlAssassin.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "mago") {
    Swal.fire({
      title: 'Magnifico!',
      text: 'Has creado un mago brillante. ¡Que empieze la magia!',
      imageUrl: '../assets/wizardCat.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "barbaro") {
    Swal.fire({
      title: 'RAAARGH!(bien hecho!)',
      text: 'Has creado un barbaro enfurecido. ¡RAAAARGH!!(¡al ataque!)',
      imageUrl: '../assets/axolotlBarbarian.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "guerrero") {
    Swal.fire({
      title: 'Victoria!',
      text: 'Has creado un habilidoso guerrero!. ¡A la carga!',
      imageUrl: '../assets/warriorMouse.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "clerigo") {
    Swal.fire({
      title: 'Gloria!',
      text: 'Has creado un deslumbrante clerigo. ¡La luz nos guiara!',
      imageUrl: '../assets/turtleCleric.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "druida") {
    Swal.fire({
      title: 'Cumplido!',
      text: 'Has creado un druida astuto. ¡Siganme, La naturaleza nos acompaña!',
      imageUrl: '../assets/catDruid.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "explorador") {
    Swal.fire({
      title: 'Affirmativo!',
      text: 'Has creado un explorador curioso. ¡Hay mucho mas para explorar!',
      imageUrl: '../assets/axolotlArtificer.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "hechicero") {
    Swal.fire({
      title: 'Hecho!',
      text: 'Has creado un hechicero inteligente . ¡A seguir avanzando!',
      imageUrl: '../assets/axolotlSorcerer.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "monje") {
    Swal.fire({
      title: 'Satisfactorio!',
      text: 'Has creado un monje sabio. ¡Muchos caminos llegan a nuestro destino!',
      imageUrl: '../assets/tigerMonk.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else if (clasePersonaje.toLowerCase() === "brujo") {
    Swal.fire({
      title: 'Cumplido!',
      text: 'Has creado un brujo mañoso. ¡Nada nos detendra!',
      imageUrl: '../assets/catWarlock.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
  else {
    Swal.fire({
      title: '♫♪Magnifico!♪♫',
      text: 'Has creado un bardo entusiasta. ♫♪¡Preparense para el show!♪♫',
      imageUrl: '../assets/mouseBard.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
    .then((volver) => {
      if (volver) {
        window.location.href = "../index.html";
      } else {
      }
    });
  }
})

// contador de puntos
let counterValue = document.getElementById("counterValue");
let counter = 27;
// modificador del contador
let numberInputs = document.querySelectorAll("input[type='number']");
numberInputs.forEach(input => {
  let previousValue = Number(input.value);
  input.addEventListener("change", function () {
    // valor inicial
    let valor = Number(input.value);
    // devolucion de puntos
    if (valor < previousValue) {
      let cambio = previousValue - valor;
      if (valor <= 13) {
        cambio = 1;
      } else if (valor <= 8) {
        cambio = 2;
      }
      counter += cambio;
      // resta del contador
    } else {
      let cambio = 0;
      if (valor > 8 && valor <= 13) {
        cambio = -1;
      } else if (valor > 13) {
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
    previousValue = valor;
    counterValue.innerHTML = counter;
  });
});
