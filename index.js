
        // puntos al azar
      if (stats.toLowerCase() == "no") {
            alert(`Generar personajes al azar puede resultar en personajes mucho mas fuerte o debil! Suerte!!`)
            // fuerza
            let fuerzaTotal = Math.floor((Math.random() * 18) + 1)
            console.log(`tu fuerza es ${fuerzaTotal}`)

            // carisma
            let carismaTotal = Math.floor((Math.random() * 18) + 1)
            console.log(`tu carisma es ${carismaTotal}`)

            // constitucion
            let constitucionTotal = Math.floor((Math.random() * 18) + 1)
            console.log(`tu constitucion es ${constitucionTotal}`)

            // destreza 
            let destrezaTotal = Math.floor((Math.random() * 18) + 1)
            console.log(`tu destreza es ${destrezaTotal}`)

            // inteligencia
            let inteligenciaTotal = Math.floor((Math.random() * 18) + 1)
            console.log(`tu inteligencia es ${inteligenciaTotal}`)

            // sabiduria
            let sabiduriaTotal = Math.floor((Math.random() * 18) + 1)
            console.log(`tu sabiduria es ${sabiduriaTotal}`)

            // agregar personaje al azar a grupo array 
            const personajeNew = new Personaje(grupoPersonajes.length + 1, nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal)
            console.log(personajeNew)
            grupoPersonajes.push(personajeNew)
            console.log(grupoPersonajes)
            // agregar al storage
        }
        else {
//             alert(`por favor ingrese si o no`)
//         }
//         respuesta = prompt('Quieres crear otro personaje? Escribe "no" para salir.')
//     } while (respuesta.toLowerCase() != "no")
// }

// borrar personaje creado del array
function eliminarPersonaje(array) {
    console.log("estos son los personajes creados para este grupo:")
    for (let persona of array) {
        console.log(`${persona.id} - ${persona.nombre} de clase ${persona.clase}}`)
    }
    let idDelete = parseInt(prompt("Ingrese el numero de id del personaje que desea eliminar"))
    let grupoIDarray = array.map(character => character.id)
    console.log(grupoIDarray)
    let indexid = grupoIDarray.indexOf(idDelete)
    array.splice(indexid, 1)
    mostrarGrupoForEach(array)
}

// consultar array
function mostrarGrupoForEach(array) {
    console.log(`Grupo de Aventura!: `)
    array.forEach(
        (personaje) => {
            console.log(personaje.id, personaje.nombre, personaje.clase, personaje.raza, personaje.fuerza, personaje.carisma, personaje.constitucion, personaje.destreza, personaje.inteligencia, personaje.sabiduria)
        }
    )
}

// buscar personaje creado
function buscarPersonaje(array) {
    let buscarPersonaje = prompt("Ingrese el nombre del del personaje que busca:")
    let search = array.find(
        (personaje) => personaje.nombre.toLowerCase() == buscarPersonaje.toLowerCase()
    )
    if (search == undefined) {
        console.log(`El personaje ${buscarPersonaje} no existe`)
    } else {
        console.log(search)
    }
}}


