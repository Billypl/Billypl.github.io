var nav;
var burger;
document.onload = getElements();
function getElements() {
    burger = document.getElementById("burger");
    nav = document.querySelector("ul");
}

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.classList.toggle("crossed");
})