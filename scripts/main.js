var userSelected;
var enemySelected = "rock";

// todo - bloop on click not on release
function optionChosen(value) {
    document.getElementById("blip").play();
    let rockButton = document.getElementById('rock-button');
    let paperButton = document.getElementById('paper-button');
    let scissorsButton = document.getElementById('scissors-button');
    switch(value) {
        case "rock":
            paperButton.classList.remove('chosen');
            scissorsButton.classList.remove('chosen');
            rockButton.classList.add('chosen');
            break;
        case "paper":
            rockButton.classList.remove('chosen');
            scissorsButton.classList.remove('chosen');
            paperButton.classList.add('chosen');
            break;
        case "scissors":
            paperButton.classList.remove('chosen');
            rockButton.classList.remove('chosen');
            scissorsButton.classList.add('chosen');
            break;
    }
};

function optionSubmitted() {
    userSelected = document.getElementsByClassName('card chosen')[0].getAttribute('data-value');
    document.getElementById('rock-button').classList.add('disabled');
    document.getElementById('paper-button').classList.add('disabled');
    document.getElementById('scissors-button').classList.add('disabled');
    postResults();
}

function postResults() {
    switch(enemySelected) {
        case "rock":
            selected = document.getElementById('enemy-rock-button');
            selected.classList.add('chosen');
            break;
        case "paper":
            selected = document.getElementById('enemy-paper-button');
            selected.classList.add('chosen');
            break;
        case "scissors":
            selected = document.getElementById('enemy-scissors-button');
            selected.classList.add('chosen');
            break;
    }
    
    // todo - lol
    let results = document.getElementById("results");
    if(userSelected === "paper") {
        results.innerText = "You win";
    } else if(userSelected === "scissors") {
        results.innerText = "You lose" ;
    } else {
        results.innerText = "You both suck......";
    }
    document.getElementById('opponent-header').innerText = "your opponent chose:"
    let refresh = document.getElementById("refresh-button");
    refresh.style.display = 'inline-block';
}

function refreshPage() {
    window.location.reload();
}