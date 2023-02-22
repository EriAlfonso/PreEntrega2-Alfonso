// capturas de DOM
let ordenarItem = document.getElementById("ordenar");
let tabla = document.getElementById("weaponTable");
let armaduraTabla = document.getElementById("armorTable");
let busquedaItem = document.getElementById("searchItem");
let tablaBody = document.getElementById("tablaBody");
let armaduraBody = document.getElementById("armaduraBody");

fetch("https://api.open5e.com/weapons/")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        for (let weapon of data.results) {
            let row = tablaBody.insertRow();
            let armaNombre = row.insertCell();
            armaNombre.innerText = weapon.name;
            let armaCateg = row.insertCell();
            armaCateg.innerText = weapon.category;
            let armadamage = row.insertCell();
            armadamage.innerText = weapon.damage_dice;
            let armaCosto = row.insertCell();
            armaCosto.innerText = weapon.cost;
        }
    });
fetch("https://api.open5e.com/armor/")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        for (let armor of data.results) {
            let row = armaduraBody.insertRow();
            let armaduraNombre = row.insertCell();
            armaduraNombre.innerText = armor.name;
            let armaduraCateg = row.insertCell();
            armaduraCateg.innerText = armor.category;
            let armaduraProtect = row.insertCell();
            armaduraProtect.innerText = armor.ac_string;
            let armaduraCosto = row.insertCell();
            armaduraCosto.innerText = armor.cost;
        }
    });
// search
    busquedaItem.addEventListener("input", () => {
        let busquedaValue = busquedaItem.value.toLowerCase();
        for (let i = 0; i < tablaBody.rows.length; i++) {
            let name = tablaBody.rows[i].cells[0].textContent.toLowerCase();
            if (name.includes(busquedaValue)) {
                tablaBody.rows[i].style.display = "";
            } else {
                tablaBody.rows[i].style.display = "none";
            }
        }
        for (let i = 0; i < armaduraBody.rows.length; i++) {
            let name = armaduraBody.rows[i].cells[0].textContent.toLowerCase();
            if (name.includes(busquedaValue)) {
                armaduraBody.rows[i].style.display = "";
            } else {
                armaduraBody.rows[i].style.display = "none";
            }
        }
    });


// ordenador
ordenarItem.addEventListener("change", () => {
    let ordenarRows = [...tablaBody.rows];
    let ordenarRowsArm = [...armaduraBody.rows];
    if (ordenarItem.value == 1) {
        ordenarRows = ordenarRows.sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent));;
        ordenarRowsArm = ordenarRowsArm.sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent));;
    } else if (ordenarItem.value == 2) {
        ordenarRows = ordenarRows.sort((a, b) => a.cells[1].textContent.localeCompare(b.cells[1].textContent));
        ordenarRowsArm = ordenarRowsArm.sort((a, b) => a.cells[1].textContent.localeCompare(b.cells[1].textContent));
    } 
while (tablaBody.firstChild) {
    tablaBody.removeChild(tablaBody.lastChild);
}
while (armaduraBody.firstChild) {
    armaduraBody.removeChild(armaduraBody.lastChild);
}

ordenarRows.forEach(row => tablaBody.appendChild(row));
ordenarRowsArm.forEach(row => armaduraBody.appendChild(row));
});
