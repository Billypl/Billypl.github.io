var progressDots = document.getElementsByClassName("pStep");
var progressDesc = document.getElementsByClassName("progressDesc");
var stagesNames = ["początkujący", "solidne podstawy", "średnio-zaawansowany", "zaawansowany", "ekspert"]

window.addEventListener('load', getProgressDots);

function displayKnowlageStatus(stage, state){
    let pDescNr = Math.floor(stage/5);
    if(state == "enter")
        progressDesc[pDescNr].innerHTML = stagesNames[stage%5];
    else if(state == "out")
        progressDesc[pDescNr].innerHTML = "‎&#8203;";
    }

function getProgressDots(){
    var stage = 0;
    Array.from(progressDots).forEach(function(element) {
        element.addEventListener("mouseenter", displayKnowlageStatus.bind(null, stage, "enter"));
        element.addEventListener("mouseout", displayKnowlageStatus.bind(null, stage, "out"));
        stage++;
    });
    Array.from(progressDesc).forEach(function(element){
        element.innerHTML = "&#8203;";
    });
}
