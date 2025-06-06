var userSelected;
var enemySelected = "rock";

function optionChosen(value) {
    // todo - unhighlight all others
    let selected;
    switch(value) {
        case "rock":
            selected = document.getElementById('rock-button');
            selected.classList.add('chosen');
            break;
        case "paper":
            selected = document.getElementById('paper-button');
            selected.classList.add('chosen');
            break;
        case "scissors":
            selected = document.getElementById('scissors-button');
            selected.classList.add('chosen');
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

    let results = document.getElementById("results");
    // todo - lol
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