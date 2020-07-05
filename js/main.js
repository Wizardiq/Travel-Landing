document.addEventListener("DOMContentLoaded", () => {

const overlay = document.querySelector(".overlay");



document.addEventListener("click", (e) => {
    let target = e.target;

    let popupTrigger = target.classList.contains("tabs__add-logo");
    let popupClose = target.classList.contains("modal__close");

    if(popupTrigger) {
        overlay.classList.add("open");
    }
    if(popupClose){
        overlay.classList.remove("open");
    } 
})

})