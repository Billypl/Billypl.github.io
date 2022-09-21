window.addEventListener('load', OnLoading);
var nrSlide = 0;

var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("sDot");

var TIMER_changeSlide = 0,
    fadeOut = 0;
var sChangeDuration = 30000,
    fadeOutDuration = 700;

var slideLeft = true;

function OnLoading() {
    renderSlideDots();
    changeSlide();
}

function renderSlideDots() {
    var dotsContainer = document.getElementById("buttons");
    var dots = "";
    for (var i = 0; i < slides.length; i++) {
        dots += '<span class="sDot" onclick="chooseSlide(' + i + ')"></span>';
    }
    dotsContainer.innerHTML = dots;
}

function changeSlide() {
    if (nrSlide > slides.length - 1)
        nrSlide = 0;
    chooseSlide(nrSlide);
}

function NextPrevButton(n) {
    //setting flag to change direction of sliding
    if (n == -1) {
        slideLeft = false
    } else {
        slideLeft = true
    }


    nrSlide += n - 1;
    if (nrSlide < 0) {
        nrSlide = slides.length - 1;
    }
    if (nrSlide > slides.length - 1) {
        nrSlide = 0;
    }

    chooseSlide(nrSlide);
}

function chooseSlide(n) {
    clearTimeout(TIMER_changeSlide);

    if (n < nrSlide) {
        slideLeft = false
    };
    nrSlide = n;
    slideImage();

    for (i = 0; i < slides.length; i++) {
        dots[i].style.background = "transparent";
    }
    dots[n].style.background = "red";

    TIMER_changeSlide = setTimeout(changeSlide, sChangeDuration);
}


function slideImage() {
    //clearing fade out (double-click issue)
    clearTimeout(fadeOut);

    // remove active class from current activated image
    for (i = 0; i < slides.length; i++) {

        /* changing sliding direction*/
        if (slideLeft) {
            slides[i].classList.add('slideLeft');
            slides[i].classList.remove('slideRight');
        } else {
            slides[i].classList.add('slideRight');
            slides[i].classList.remove('slideLeft');
        }

        // document.getElementById("bel").src = "attachments/images.jpg";
        slides[i].classList.remove('active');
        slides[i].style.position = "absolute";

    }
    //displaying slide
    if (nrSlide == slides.length) {
        nrSlide = 0;
    }
    slides[nrSlide].style.display = 'block';
    slides[nrSlide].style.position = 'relative';

    slides[nrSlide].classList.add('active');
    nrSlide++;

    // wait for fade effect to finish,  then add display none to current image and activate next one
    fadeOut = setTimeout(
        function () {
            //add display none to current image
            for (i = 0; i < slides.length; i++) {
                if (nrSlide - 1 != i) {
                    slides[i].style.display = 'none';
                }
                //reseting sliding direction
                slideLeft = true;
            }
        }, fadeOutDuration);
}