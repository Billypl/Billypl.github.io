var nav;
var burger;
var navOptions;

document.onload = getElements();
function getElements() {
    burger = document.getElementById("burger");
    nav = document.querySelector("ul");
    navOptions = document.querySelector("ul").getElementsByTagName("li");
    console.log(nav);
}

Array.from(navOptions).forEach(element => {
    element.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.classList.remove("crossed");
    })
});

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.classList.toggle("crossed");
})