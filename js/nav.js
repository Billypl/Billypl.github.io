var burger = document.getElementById("burger");
var nav = document.querySelector("ul");
var navOptions = document.querySelector("ul").getElementsByTagName("li");

Array.from(navOptions).forEach(element => {
    element.addEventListener("click", () => {
        toggleHTMLOverflowY();
        nav.classList.remove("open");
        burger.classList.remove("crossed");
    })
});

burger.addEventListener("click", () => {
    toggleHTMLOverflowY();
    nav.classList.toggle("open");
    burger.classList.toggle("crossed");
})

function toggleHTMLOverflowY(){
    document.documentElement.style.overflowY = 
        (document.documentElement.style.overflowY === "hidden") ? "" : "hidden";
}