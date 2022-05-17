var progressDots = document.getElementsByClassName("pStep");
var progressDescription = document.getElementsByClassName("progressDesc");
var stagesNames = ["początkujący", "solidne podstawy", "średnio-zaawansowany", "zaawansowany"]

window.addEventListener('load', getProgressDots);

function renderProgressDots(){
    var progressBoxes = document.getElementsByClassName("progress");
    var progressLevel = document.getElementsByClassName("progressBar");
    var knowledgeLevel = [
        [4, "c++"],
        [3, "c#"],
        [2, "HTML"],
        [3, "CSS"],
        [2, "JS"],
        [2, "SQL"],
        [1, "PHP"]
    ];
    
    var content = 
    '<div class="progressDesc"></div>\
    <span class="progressBar">\
            <span class="pStep"></span>\
            <span class="pStep"></span>\
            <span class="pStep"></span>\
            <span class="pStep"></span>\
    </span>';
    for(element of progressBoxes)
        element.innerHTML+=content;
    var i = 0;
    for(element of progressLevel)
    {
        element.classList.toggle("step" + knowledgeLevel[i][0]);
        i++;
    }
}

function getProgressDots(){
    renderProgressDots();

    var stage = 0;  
    Array.from(progressDots).forEach(function(element) {
        element.addEventListener("mouseenter", displayKnowlageStatus.bind(null, stage, "enter"));
        element.addEventListener("mouseout", displayKnowlageStatus.bind(null, stage, "out"));
        stage++;
    });
    Array.from(progressDescription).forEach(function(element){
        element.innerHTML = "&#8203;";
    });
}

function displayKnowlageStatus(stage, state){
    let pDescNr = Math.floor(stage/stagesNames.length);
    if(state == "enter")
        progressDescription[pDescNr].innerHTML = stagesNames[stage%stagesNames.length];
    else if(state == "out")
        progressDescription[pDescNr].innerHTML = "&#8203;";
}