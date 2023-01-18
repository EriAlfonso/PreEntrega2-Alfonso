// alert('Vamos a crear un personaje de Dungeons and Dragons!')
// do {
//     function nuevoPersonaje() {
//         let nombrePersonaje = prompt('Escriba el nombre de su personaje')
//         console.log('el nombre de su personaje es ' + nombrePersonaje)
//         let clasePersonaje = prompt(`escriba la clase de su personaje`)
//         console.log(`la clase de ${nombrePersonaje} es ${clasePersonaje}`)
//         // Switch para raza del personaje
//         let salir = false
//         do {
//             let razaPersonaje = parseInt(prompt(`Elija la raza de: ${nombrePersonaje} , (ingrese el nombre de la raza deseada)
//         1 - Mediano (+2 a destreza)
//         2 - Elfo (+2 a destreza)
//         3 - Enano (+2 a constitucion)
//         4 - Humano (+1 en todo)`))
//             switch (razaPersonaje) {
//                 case 1:
//                     razaPersonaje = "Mediano"
//                     console.log(razaPersonaje)
//                     console.log(`la raza de ${nombrePersonaje} es Mediano`)
//                     salir = true
//                     break
//                 case 2:
//                     razaPersonaje = "Elfo"
//                     console.log(`la raza de ${nombrePersonaje} es Elfo`)
//                     salir = true
//                     break
//                 case 3:
//                     razaPersonaje = "Enano"
//                     console.log(`la raza de ${nombrePersonaje} es Enano`)
//                     salir = true
//                     break
//                 case 4:
//                     razaPersonaje = "Humano"
//                     console.log(`la raza de ${nombrePersonaje} es Humano`)
//                     salir = true
//                     break
//                 default:
//                     console.log(`por favor ingrese un numero valido`)
//                     break
//             }
//         } while (!salir)

//         // puntos de habilidad
//         let stats = prompt(`Quieres colocar tus puntos de habilidad manualmente? Ingrese si o no`)
//         if (stats.toLowerCase() == "si") {
//             alert('tienes 27 puntos para repartir entre tus habilidades. Todas las habilidades empiezan con 8 puntos y no pueden superar un maximo de 15 puntos.  ')
//             let puntoInicial = 8
//             let totalHabilidad = 27

//             // fuerza
//             do {
//                 fuerzaPunto = parseInt(prompt(`su fuerza es ${puntoInicial} cuantos puntos desea agregar? (le queda ${totalHabilidad})`), 0)
//             } while (fuerzaPunto >= 8 || isNaN(fuerzaPunto) || totalHabilidad < 0)
//             let fuerzaTotal = puntoInicial + fuerzaPunto
//             totalHabilidad = totalHabilidad - fuerzaPunto
//             console.log(totalHabilidad)
//             console.log(`tu fuerza es ${fuerzaTotal}`)

//             // carisma
//             do {
//                 carismaPunto = parseInt(prompt(`su carisma es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
//             } while (carismaPunto >= 8 || isNaN(carismaPunto) || totalHabilidad < 0)
//             let carismaTotal = puntoInicial + carismaPunto
//             totalHabilidad = totalHabilidad - carismaPunto
//             console.log(`tu carisma es ${carismaTotal}`)

//             // constitucion  
//             do {
//                 constitucionPunto = parseInt(prompt(`su constitucion es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
//             } while (constitucionPunto >= 8 || isNaN(constitucionPunto) || totalHabilidad < 0)
//             let constitucionTotal = puntoInicial + constitucionPunto
//             totalHabilidad = totalHabilidad - constitucionPunto
//             console.log(`tu constitucion es ${constitucionTotal}`)

//             //destreza 
//             do {
//                 destrezaPunto = parseInt(prompt(`su destreza es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
//             } while (destrezaPunto >= 8 || isNaN(destrezaPunto) || totalHabilidad < 0 || destrezaPunto > totalHabilidad)
//             let destrezaTotal = puntoInicial + destrezaPunto
//             totalHabilidad = totalHabilidad - destrezaPunto
//             console.log(`tu destreza es ${destrezaTotal}`)

//             // inteligencia
//             do {
//                 inteligenciaPunto = parseInt(prompt(`su inteligencia es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
//             } while (inteligenciaPunto >= 8 || isNaN(inteligenciaPunto) || totalHabilidad < 0 || inteligenciaPunto > totalHabilidad)
//             let inteligenciaTotal = puntoInicial + inteligenciaPunto
//             totalHabilidad = totalHabilidad - inteligenciaPunto
//             console.log(`tu inteligencia es ${inteligenciaTotal}`)

//             // sabiduria
//             do {
//                 sabiduriaPunto = parseInt(prompt(`su sabiduria es ${puntoInicial} cuantos puntos desea agregar?(le queda ${totalHabilidad})`), 0)
//             } while (sabiduriaPunto >= 8 || isNaN(sabiduriaPunto) || totalHabilidad < 0 || sabiduriaPunto > totalHabilidad)
//             let sabiduriaTotal = puntoInicial + sabiduriaPunto
//             console.log(`tu sabiduria es ${sabiduriaTotal}`)

//         }
//         else if (stats.toLowerCase() == "no") {
//             alert(`Generar personajes al azar puede resultar en personajes mucho mas fuerte o debil! Suerte!!`)
//             // fuerza
//             let fuerzaTotal = Math.floor((Math.random() * 18) + 1)
//             console.log(`tu fuerza es ${fuerzaTotal}`)

//             // carisma
//             let carismaTotal = Math.floor((Math.random() * 18) + 1)
//             console.log(`tu carisma es ${carismaTotal}`)

//             // constitucion
//             let constitucionTotal = Math.floor((Math.random() * 18) + 1)
//             console.log(`tu constitucion es ${constitucionTotal}`)

//             // destreza
//             let destrezaTotal = Math.floor((Math.random() * 18) + 1)
//             console.log(`tu destreza es ${destrezaTotal}`)

//             // inteligencia
//             let inteligenciaTotal = Math.floor((Math.random() * 18) + 1)
//             console.log(`tu inteligencia es ${inteligenciaTotal}`)

//             // sabiduria
//             let sabiduriaTotal = Math.floor((Math.random() * 18) + 1)
//             console.log(`tu sabiduria es ${sabiduriaTotal}`)
//         }
//         else {
//             alert(`por favor ingrese si o no`)
//         }
//     }
//     // final
//     alert(`su personaje es ${nombrePersonaje} un ${clasePersonaje} ${razaPersonaje}
//     con:
//     fuerza= ${fuerzaTotal}
//     carisma= ${carismaTotal}
//     constitucion= ${constitucionTotal}
//     destreza= ${destrezaTotal}
//     inteligencia= ${inteligenciaTotal}
//     sabiduria= ${sabiduriaTotal}`)

//     respuesta = prompt('Quieres crear otro personaje? Escribe "no" para salir.')
// } while (respuesta.toLowerCase() != "no")

// class Personaje {
//     constructor(nombrePersonaje, clasePersonaje, razaPersonaje, fuerzaTotal, carismaTotal, constitucionTotal, destrezaTotal, inteligenciaTotal, sabiduriaTotal) {

//         this.nombrePersonaje = nombrePersonaje,
//             this.clasePersonaje = clasePersonaje,
//             this.razaPersonaje = razaPersonaje,
//             this.fuerzaTotal = fuerzaTotal,
//             this.carismaTotal = carismaTotal,
//             this.constitucionTotal = constitucionTotal,
//             this.destrezaTotal = destrezaTotal,
//             this.inteligenciaTotal = inteligenciaTotal,
//             this.sabiduriaTotal = sabiduriaTotal

//     }
//     personajeFinalizado() {
//         alert(`su personaje es ${this.nombrePersonaje} un ${this.clasePersonaje} ${this.razaPersonaje}
//     con:
//     fuerza= ${this.fuerzaTotal}
//     carisma= ${this.carismaTotal}
//     constitucion= ${this.constitucionTotal}
//     destreza= ${this.destrezaTotal}
//     inteligencia= ${this.inteligenciaTotal}
//     sabiduria= ${this.sabiduriaTotal}`)
//     }
// }

function mainMenu() {
    let exitMenu = false
    do {
        exitMenu = menuOpciones(exitMenu)
    } while (!exitMenu)
}

function menuOpciones(exitMenu) {
    let opcionIngresada = parseInt(prompt(`Que desea hacer?
        1 - Crear un personaje nuevo
        2 - Borrar un personaje
        3 - Consultar grupo de personajes
        4 - Encontrar un personaje
        0 - Salir del menu`))

    switch (opcionIngresada) {
        case 1:
            agregarLibro()
            break
        case 2:
            eliminarLibro(estanteria)
            break
        case 3:
            mostrarCatalogoForEach(estanteria)
            break
        case 4:
            buscarPorTitulo(estanteria)
            break
        case 5:
            buscarPorAutor(estanteria)
            break
        case 6:
            ordenar(estanteria)
            break
        case 0:
            console.log("gracias por utilizar nuestra app")
            exitMenu = true
            return exitMenu
            break
        default:
            console.log("Ingrese una opción correcta")
            break
    }
}