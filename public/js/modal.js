let button = document.getElementById("modal-btn");
let mainModal = document.getElementById("main-modal");
let main = document.getElementById("main");
let closeButton = document.getElementById("close-button");

button.onclick = function() {
    mainModal.style.display = "grid";
    main.style.display = "none";
}

closeButton.onclick = function() {
    mainModal.style.display = "none";
    main.style.display = "grid";
}