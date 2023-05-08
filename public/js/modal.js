let button = document.getElementById("modal-btn");
let modalCompose = document.getElementById("modal-compose");
let normalCompose = document.getElementById("normal-compose");

button.onclick = function() {
    modalCompose.style.display = "grid";
    normalCompose.style.display = "none";
    button.style.display = "none";
}

window.onclick = function(event) {
    let target = event.target;
    if (target !== button && target !== modalCompose) {
        modalCompose.style.display = "none";
        normalCompose.style.display = "grid";
        button.style.display = "block";
    }
}