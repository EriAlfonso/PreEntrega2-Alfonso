// creando/cargando el array
let grupoAventura
if(localStorage.getItem("grupo")){
    grupoAventura = JSON.parse(localStorage.getItem("grupo"))
    console.log(grupoAventura)
}else{
    grupoAventura = []
    localStorage.setItem("grupo", grupoAventura)
}


function setiarGrupo(array){
    grupoCreados.innerHTML = ""
    array.forEach((grupoAventura)=>{
        grupoCreados.innerHTML +=
        `
        <div class="card border-primary mb-3" id ="productoCarrito${grupoAventura.id}" style="max-width: 540px;">
                 <img class="card-img-top" height="300px" src="assets/${grupoAventura.imagen}" alt="">
                 <div class="card-body">
                        <h4 class="card-title">${grupoAventura.titulo}</h4>
                    
                         <p class="card-text">$${grupoAventura.precio}</p> 
                         <button class= "btn btn-danger" id="botonEliminar${grupoAventura.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
        `

    })
    //segundo forEach para adjuntar evento

    array.forEach((grupoAventura) =>

    document.getElementById(`botonEliminar${grupoAventura.id}`).addEventListener("click",()=>{
        console.log(`El producto eliminado es ${grupoAventura.titulo}`)
        //borrar del DOM
        let cardProducto = document.getElementById(`productoCarrito${grupoAventura.id}`)
        cardProducto.remove()
        //borrar del array
        //encontramos el objeto a eliminar
        let productoEliminar = array.find((libro)=> libro.id ==grupoAventura.id)
        console.log(productoEliminar)
        //buscar el indice
        let posicion = array.indexOf(productoEliminar)
        console.log(posicion)
        array.splice(posicion,1)
        console.log(array)
        //setear el storage
        localStorage.setItem("carrito", JSON.stringify(array))
        //actualizar el total
        calcularTotal(array)
    })
    )
    calcularTotal(array)

}

function agregarAlCarrito(libro){

    //preguntar si existe ese libro en el array
    let libroAgregado = productosEnCarrito.find((elem)=>elem.id == libro.id)

    if(libroAgregado == undefined){
        // console.log(`El libro ${libro.titulo} de ${libro.autor} ha sido agregado al carrito. Vale ${libro.precio}`)
        //agregar libro al array de carrito
        productosEnCarrito.push(libro)
        // console.log(productosEnCarrito)
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    
        // //alert para agregar libro
        Swal.fire({
            title: 'Ha agregado un producto :D',
            text: `El libro ${libro.titulo} de ${libro.autor} ha sido agregado`,
            icon: "info",
            confirmButtonColor: "green",
            confirmButtonText: "Gracias!",
            //milisegundo por medida
            timer: 3000,
            imageUrl: `assets/${libro.imagen}`,
            imageHeight: 200
        })

    }else{
        Swal.fire({
            title: 'Libro ya agregado',
            text: `El libro ${libroAgregado.titulo} de ${libroAgregado.autor} ya existe en el carrito`,
            icon: "info",
            showConfirmButton: false,
            timer: 1500,
            
        })
    }
}


