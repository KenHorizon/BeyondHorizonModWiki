// effect = fetch("assets/json/mob_effect.json")
// .then(response => response.json()).then(value => value.forEach(values => document.getElementById("effect_name").innerHTML = values.name));
// effect_desc = fetch("assets/json/mob_effect.json")
// // .then(response => response.json()).then(value => value.forEach(values => document.getElementById("effect_desc").innerHTML = values.desc));
// effect = fetch("assets/json/mob_effect.json")
// .then(response => response.json()).then(value => value.forEach(values => document.getElementById("effect_source").src = values.img));



fetch("assets/json/mob_effect.json")
.then(response => response.json()).then(value => value.forEach(values => {
    const tableBody = document.createElement("tr");
    const icon = document.createElement("th");
    const effect = document.createElement("th");
    const desc = document.createElement("th");
    const tableSpan = document.createElement("span");
    const img = document.createElement("img");
    var tables = document.getElementById("createTablesMobEffect");
    icon.appendChild(tableSpan);
    tableSpan.appendChild(img);
    img.setAttribute("class", "icons");
    img.src = values.img;
    effect.innerHTML = values.name;
    desc.innerHTML = values.desc;
    tableBody.appendChild(icon);
    tableBody.appendChild(effect);
    tableBody.appendChild(desc);
    tables.appendChild(tableBody);
}));
fetch("assets/json/accessory.json")
.then(response => response.json()).then(value => value.forEach(values => {
    const tableBody = document.createElement("tr");
    const icon = document.createElement("th");
    const effect = document.createElement("th");
    const desc = document.createElement("th");
    const tableSpan = document.createElement("span");
    const img = document.createElement("img");
    var tables = document.getElementById("createTablesAccessory");
    icon.appendChild(tableSpan);
    tableSpan.appendChild(img);
    img.setAttribute("class", "icons");
    img.src = values.img;
    effect.innerHTML = values.name;
    desc.innerHTML = values.desc;
    tableBody.appendChild(icon);
    tableBody.appendChild(effect);
    tableBody.appendChild(desc);
    tables.appendChild(tableBody);
}));
fetch("assets/json/ability_trait.json")
.then(response => response.json()).then(value => value.forEach(values => {
    const tableBody = document.createElement("tr");
    const icon = document.createElement("th");
    const effect = document.createElement("th");
    const desc = document.createElement("th");
    const tableSpan = document.createElement("span");
    const img = document.createElement("img");
    var tables = document.getElementById("createTablesAbilityTrait");
    icon.appendChild(tableSpan);
    tableSpan.appendChild(img);
    img.setAttribute("class", "icons");
    img.src = values.img;
    effect.innerHTML = values.name;
    desc.innerHTML = values.desc;
    tableBody.appendChild(icon);
    tableBody.appendChild(effect);
    tableBody.appendChild(desc);
    tables.appendChild(tableBody);
}));