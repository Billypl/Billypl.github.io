window.onscroll = function () {
    if (scrollY >= 200) {
        document.getElementById('backToTop').style.visibility = "visible";
    } 
    else {
        document.getElementById('backToTop').style.visibility = "hidden";
    }
};