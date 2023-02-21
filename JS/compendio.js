let tabla = document.getElementById("weaponTable");
fetch("https://api.open5e.com/weapons/")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        for (let weapon of data.results) {
            let row = tabla.insertRow();
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

    let armaduraTabla = document.getElementById("armorTable");
fetch("https://api.open5e.com/armor/")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        for (let armor of data.results) {
            let row = armaduraTabla.insertRow();
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
