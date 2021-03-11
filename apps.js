let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()* 3);
    return choices[randomNum];
}

function capitalizeWord(word) {
    if (word === 'rock') {
        return 'Rock'
    } else if (word === 'paper') {
        return 'Paper';
    } else {
        return 'Scissors';
    }
    
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_div.innerHTML = capitalizeWord(userChoice) + '(' + smallUserWord + ')' + 
    " beats " +  capitalizeWord(compChoice) + '(' + smallCompWord + ')' + '. You win!! 🔥';
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('green-glow');       
    }, 300);
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_div.innerHTML = capitalizeWord(userChoice) + '(' + smallUserWord + ')' + 
    " looses " +  capitalizeWord(compChoice) + '(' + smallCompWord + ')' + '. You lost!! 😭';
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout( () => 
        document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function draw(userChoice, compChoice) {
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_div.innerHTML = capitalizeWord(userChoice) + '(' + smallUserWord + ')' + 
    " equals " +  capitalizeWord(compChoice) + '(' + smallCompWord + ')' + "It's a draw! 🤷‍♂️";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function () {
    document.getElementById(userChoice).classList.remove('grey-glow');
    }, 300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, compChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, compChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, compChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    })

    paper_div.addEventListener('click', function() {
        game('paper');
    })

    scissors_div.addEventListener('click', function () {
        game('scissors');  
    })
}   

main();