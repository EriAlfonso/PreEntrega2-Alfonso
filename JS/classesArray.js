// clase constructora para array
class Personaje {
    constructor(id, imagen, nombre, clase, raza, fuerza, carisma, constitucion, destreza, inteligencia, sabiduria) {
            this.id = id
            this.imagen = imagen,
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
let grupoPersonajes = []
// storage
if(localStorage.getItem("grupoPersonaje")){
    grupoPersonajes = JSON.parse(localStorage.getItem("grupoPersonaje"))
}else{
console.log("no hay personajes guardados")
localStorage.setItem("grupoPersonajes", JSON.stringify(grupoPersonajes))
}