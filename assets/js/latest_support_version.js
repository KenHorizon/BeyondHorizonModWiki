<<<<<<< HEAD
mod_name = fetch("assets/json/latest_support_version.json").then(response => response.json()).then(value => document.getElementById("name").innerHTML = value.name)
=======
mod_name = fetch("assets/json/latest_support_version.json").then(response => response.json()).then(value => document.getElementById("mod_name").innerHTML = value.name)
>>>>>>> 186bf42e9a4020dc82d43384f5a03e2785924cad
version = fetch("assets/json/latest_support_version.json").then(response => response.json()).then(value => document.getElementById("version").innerHTML = value.version)
mod_loader_name = fetch("assets/json/latest_support_version.json").then(response => response.json()).then(value => document.getElementById("mod_loader_name").innerHTML = value.mod_loader_name)
mod_loader_version = fetch("assets/json/latest_support_version.json").then(response => response.json()).then(value => document.getElementById("mod_loader_version").innerHTML = value.mod_loader_version)
minecraft_version = fetch("assets/json/latest_support_version.json").then(response => response.json()).then(value => document.getElementById("minecraft_version").innerHTML = value.minecraft_version)