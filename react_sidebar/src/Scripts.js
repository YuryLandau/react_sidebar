function menuDropdown(){
    let settings = document.getElementById("settings");
    settings.classList.remove("settings_NotDisplay");
    settings.classList.add("settings_display");
    console.log(settings.style.display);

}

function empty(){
    
    console.log("nada");
}

export default { menuDropdown, empty }