// clase constructora para array
class Personaje {
    constructor(id, nombre, clase, raza, fuerza, carisma, constitucion, destreza, inteligencia, sabiduria) {
        this.id = id
        this.nombre = nombre,
            this.clase = clase,
            this.raza = raza,
            this.fuerza = fuerza,
            this.carisma = carisma,
            this.constitucion = constitucion,
            this.destreza = destreza,
            this.inteligencia = inteligencia,
            this.sabiduria = sabiduria

    }
}
// array
const grupoPersonajes = []

// funcion para personajes nuevos
function nuevoPersonaje() {
    do {
        let nombrePersonaje = prompt('Escriba el nombre de su personaje')
        console.log('el nombre de su personaje es ' + nombrePersonaje)
        let clasePersonaje = prompt(`escriba la clase de su personaje`)
        console.log(`la clase de ${nombrePersonaje} es ${clasePersonaje}`)
        //raza del personaje
        let razaPersonaje = parseInt(prompt(`Elija la raza de: ${nombrePersonaje} , (ingrese el numero de la raza deseada)
            1 - Mediano (+2 a destreza)
            2 - Elfo (+2 a destreza)
            3 - Enano (+2 a constitucion)
            4 - Humano (+1 en todo)`))
        if (razaPersonaje == 1) {
            razaPersonaje = "Mediano"
        }

        else if (razaPersonaje == 2) {
            razaPersonaje = "Elfo"
        }

        else if (razaPersonaje == 3) {
            razaPersonaje = "Enano"
        }

        else if (razaPersonaje == 4) {
            razaPersonaje = "Humano"
        }

        else {
            console.log(`por favor ingrese un numero valido`)
        }
        console.log(`la raza de ${nombrePersonaje} es ${razaPersonaje}`)
        // puntos de habilidad

        let stats = prompt(`Quieres colocar tus puntos de habilidad manualmente? Ingrese si o no`)
        if (stats.toLowerCase() == "si") {
            alert('tienes 27 puntos para repartir entre tus habilidades. Todas las habilidades empiezan con 8 puntos y no pueden superar un maximo de 15 puntos.  ')
            let puntoInicial = 8
            let totalHabilidad = 27

            // fuerza
            do {
                fuerzaPunto = parseInt(prompt(`su fuerza es ${puntoInicial} cuantos puntos desea agregar? (le queda ${totalHabilidad})`), 0)
            } while (fuerzaPunto >= 8 || isNaN(fuerzaPunto) || totalHabilidad < 0)
            let fuerzaTotal = puntoInicial + fuerzaPunto
            totalHabilidad = totalHabilidad - fuerzaPunto
            console.log(totalHabilidad)
            console.log(`tu fuerza es ${fuerzaTotal}`)

            // carisma
            do {
                carismaPunto = parseInt(prompt(`su carisma es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
            } while (carismaPunto >= 8 || isNaN(carismaPunto) || totalHabilidad < 0)
            let carismaTotal = puntoInicial + carismaPunto
            totalHabilidad = totalHabilidad - carismaPunto
            console.log(`tu carisma es ${carismaTotal}`)

            // constitucion  
            do {
                constitucionPunto = parseInt(prompt(`su constitucion es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
            } while (constitucionPunto >= 8 || isNaN(constitucionPunto) || totalHabilidad < 0)
            let constitucionTotal = puntoInicial + constitucionPunto
            totalHabilidad = totalHabilidad - constitucionPunto
            console.log(`tu constitucion es ${constitucionTotal}`)

            //destreza 
            do {
                destrezaPunto = parseInt(prompt(`su destreza es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
            } while (destrezaPunto >= 8 || isNaN(destrezaPunto) || totalHabilidad < 0 || destrezaPunto > totalHabilidad)
            let destrezaTotal = puntoInicial + destrezaPunto
            totalHabilidad = totalHabilidad - destrezaPunto
            console.log(`tu destreza es ${destrezaTotal}`)

            // inteligencia
            do {
                inteligenciaPunto = parseInt(prompt(`su inteligencia es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
            } while (inteligenciaPunto >= 8 || isNaN(inteligenciaPunto) || totalHabilidad < 0 || inteligenciaPunto > totalHabilidad)
            let inteligenciaTotal = puntoInicial + inteligenciaPunto
            totalHabilidad = totalHabilidad - inteligenciaPunto
            console.log(`tu inteligencia es ${inteligenciaTotal}`)

            // sabiduria
            do {
                sabiduriaPunto = parseInt(prompt(`su sabiduria es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
            } while (sabiduriaPunto >= 8 || isNaN(sabiduriaPunto) || totalHabilidad < 0 || sabiduriaPunto > totalHabilidad)
            let sabiduriaTotal = puntoInicial + sabiduriaPunto
            console.log(`tu sabiduria es ${sabiduriaTotal}`)

            // agregar personaje creado a grupo array 
            const personajeNew = new Personaje(grupoPersonajes.length + 1, nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal)
            console.log(personajeNew)
            grupoPersonajes.push(personajeNew)
            console.log(grupoPersonajes)

        }
        // puntos al azar
        else if (stats.toLowerCase() == "no") {
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
        }
        else {
            alert(`por favor ingrese si o no`)
        }
        respuesta = prompt('Quieres crear otro personaje? Escribe "no" para salir.')
    } while (respuesta.toLowerCase() != "no")
}

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
}

// funcion para salida de menu
function mainMenu() {
    let exitMenu = false
    do {
        exitMenu = menuOpciones(exitMenu)
    } while (!exitMenu)
}

// funcion y switch de menu
function menuOpciones(exitMenu) {
    let opcionIngresada = parseInt(prompt(`Que desea hacer?
        1 - Crear un personaje nuevo
        2 - Borrar un personaje
        3 - Consultar grupo de personajes
        4 - Encontrar un personaje
        0 - Salir del menu`))

    switch (opcionIngresada) {
        case 1:
            alert('Vamos a crear un personaje de Dungeons and Dragons!')
            nuevoPersonaje()
            break
        case 2:
            eliminarPersonaje(grupoPersonajes)
            break
        case 3:
            mostrarGrupoForEach(grupoPersonajes)
            break
        case 4:
            buscarPersonaje(grupoPersonajes)
            break
        case 0:
            alert("Suerte con su aventura! nos vemos!")
            exitMenu = true
            return exitMenu
            break
        default:
            console.log("por favor ingres un numero valido (0-4) ")
            break
    }
}
mainMenu()