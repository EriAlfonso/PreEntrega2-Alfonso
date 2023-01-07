alert('Vamos a crear un personaje de Dungeons and Dragons!')
// do
let nombrePersonaje = prompt('Escriba el nombre de su personaje')
console.log('el nombre de su personaje es ' + nombrePersonaje)

    // Switch para raza del personaje
    let salir = false
    do{let razaPersonaje = parseInt(prompt(`Elija la raza de: ${nombrePersonaje} , (ingrese el nombre de la raza deseada)
        1 - Mediano (+2 a destreza)
        2 - Elfo (+2 a destreza)
        3 - Enano (+2 a constitucion)
        4 - Humano (+1 en todo)`))
    switch (razaPersonaje) {
        case 1:
            console.log(`la raza de ${nombrePersonaje} es Mediano`)
            //condicionales para los puntos del personaje
            // do{
                
            // }
            salir = true
            break
        case 2:
            console.log(`la raza de ${nombrePersonaje} es Elfo`)
            salir = true
            break
        case 3:
            console.log(`la raza de ${nombrePersonaje} es Enano`)
            salir = true
            break
        case 4:
            console.log( `la raza de ${nombrePersonaje} es Humano`)
            salir = true
            break
        default:
            console.log(`por favor ingrese un numero valido`)
            break}
    }while(!salir)


let stats = prompt(`Quieres colocar tus puntos de habilidad manualmente? Ingrese si o no`)
if (stats.toLocaleLowerCase = (`si`)) {
    alert ('tienes 27 puntos para repartir entre tus habilidades. Todas las habilidades empiezan con 8 puntos y no pueden superar un maximo de 15 puntos.  ')
    let puntoInicial = 8
    do {fuerzaPunto = parseInt(prompt(`su fuerza es ${puntoInicial} cuantos puntos desea agregar?`),0)
}while(fuerzaPunto >= 8 && fuerzaPunto)
    let fuerzaTotal= puntoInicial+fuerzaPunto
    console.log(`tu fuerza es ${fuerzaTotal}`)
    do {carismaPunto = parseInt(prompt(`su carisma es ${puntoInicial} cuantos puntos desea agregar?`),0)
}while(carismaPunto >= 8 && carismaPunto)
    let carismaTotal= puntoInicial+carismaPunto
    console.log(`tu carisma es ${carismaTotal}`)   
    do {constitucionPunto = parseInt(prompt(`su constitucion es ${puntoInicial} cuantos puntos desea agregar?`),0)
}while(constitucionPunto >= 8 && constitucionPunto)
    let constitucionTotal= puntoInicial+constitucionPunto
    console.log(`tu constitucion es ${constitucionTotal}`)    
    do {destrezaPunto = parseInt(prompt(`su destreza es ${puntoInicial} cuantos puntos desea agregar?`),0)
}while(destrezaPunto >= 8 && destrezaPunto)
    let destrezaTotal= puntoInicial+destrezaPunto
    console.log(`tu destreza es ${destrezaTotal}`)
    do {inteligenciaPunto = parseInt(prompt(`su inteligencia es ${puntoInicial} cuantos puntos desea agregar?`),0)
}while(inteligenciaPunto >= 8 && inteligenciaPunto)
    let inteligenciaTotal= puntoInicial+inteligenciaPunto
    console.log(`tu inteligencia es ${inteligenciaTotal}`)    
    do {sabiduriaPunto = parseInt(prompt(`su sabiduria es ${puntoInicial} cuantos puntos desea agregar?`),0)
}while(sabiduriaPunto >= 8 && sabiduriaPunto)
    let sabiduriaTotal= puntoInicial+sabiduriaPunto
    console.log(`tu sabiduria es ${sabiduriaTotal}`)

}
// }else if{

// }

// else { while( )
//     console.log(`por favor ingrese si o no`)

// }




// respuesta = prompt ('Quieres crear otro personaje? Escribe no para salir.')
// }while (respuesta.toLowerCase() != "no"