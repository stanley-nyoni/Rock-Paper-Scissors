let playerResult = 0;
let computerResult = 0;
let numberOfMovesLeft = 10;


let playerChoice;
let computerChoice;

let playerResultDisplay = document.querySelector('.player-person-result-display');
let computerResultDisplay = document.querySelector('.player-computer-result-display');
let movesLeftDisplay = document.querySelector('.moves-left');
let playerButtons = document.querySelectorAll('.buttons button')

let playerChoiceDisplay = document.querySelector('.player-choice-display');
let computerChoiceDisplay = document.querySelector('.computer-choice-display');
let gameResult = document.querySelector('.move-result');
let finalResultDisplay = document.querySelector('.game-result');
let restartBtn = document.querySelector('.restart');

let gameOverSection = document.querySelector('.game-over-section');
let gamePlayingSection = document.querySelector('.game-playing-section');


function startGame(){

playerButtons.forEach(function(button){
    button.addEventListener('click', function(event){
        let choice = event.target.id;
         playerChoiceDisplay.innerHTML =  `You Chose: ${choice}`;
         playerChoice = choice;


        let computerRandomChoice = Math.floor(Math.random()* playerButtons.length) +1;
       
        if(computerRandomChoice ===3){
            computerChoice = "Rock"
        }
        if(computerRandomChoice ===1){
            computerChoice = "Paper"
        }
        if(computerRandomChoice ===2){
            computerChoice = "Scissors"
        }

        computerChoiceDisplay.innerHTML = `Computer Chose: ${computerChoice}`;
        
        if(playerChoice === computerChoice){
            gameResult.innerHTML = "It's a Draw";
            playerResultDisplay.innerHTML = playerResult;
            computerResultDisplay.innerHTML = computerResult;
            numberOfMovesLeft--;
            movesLeftDisplay.innerHTML = `Moves Left: ${ numberOfMovesLeft}`;
        }
        if(playerChoice ==='Rock' && computerChoice ==='Scissors'){
            gameResult.innerHTML = "You Won";
            playerResult++;
            playerResultDisplay.innerHTML = playerResult;
            computerResultDisplay.innerHTML = computerResult;
            numberOfMovesLeft--;
            movesLeftDisplay.innerHTML = `Moves Left: ${ numberOfMovesLeft}`;
        }
        if(playerChoice ==='Rock' && computerChoice ==='Paper'){
            gameResult.innerHTML = 'You Lost';
            computerResult++
            playerResultDisplay.innerHTML = playerResult;
            computerResultDisplay.innerHTML = computerResult;
            numberOfMovesLeft--;
            movesLeftDisplay.innerHTML = `Moves Left: ${ numberOfMovesLeft}`;
        }
        if(playerChoice ==='Scissors' && computerChoice ==='Paper'){
            gameResult.innerHTML = 'You Won';
            playerResult++
            playerResultDisplay.innerHTML = playerResult;
            computerResultDisplay.innerHTML = computerResult;
            numberOfMovesLeft--;
            movesLeftDisplay.innerHTML = `Moves Left: ${ numberOfMovesLeft}`;
        }
        if(playerChoice ==='Scissors' && computerChoice ==='Rock'){
            gameResult.innerHTML = 'You Lost';
            computerResult++
            playerResultDisplay.innerHTML = playerResult;
            computerResultDisplay.innerHTML = computerResult;
            numberOfMovesLeft--;
            movesLeftDisplay.innerHTML = `Moves Left: ${ numberOfMovesLeft}`;
        }
        if(playerChoice ==='Paper' && computerChoice ==='Rock'){
            gameResult.innerHTML = 'You Won';
            playerResult++
            playerResultDisplay.innerHTML = playerResult;
            computerResultDisplay.innerHTML = computerResult;
            numberOfMovesLeft--;
            movesLeftDisplay.innerHTML = `Moves Left: ${ numberOfMovesLeft}`;
        }
        if(playerChoice ==='Paper' && computerChoice ==='Scissors'){
            gameResult.innerHTML = 'You Lost';
            computerResult++
            playerResultDisplay.innerHTML = playerResult;
            computerResultDisplay.innerHTML = computerResult;
            numberOfMovesLeft--;
            movesLeftDisplay.innerHTML = `Moves Left: ${ numberOfMovesLeft}`;
        }


        if(numberOfMovesLeft ===0){
            gamePlayingSection.classList.add('active')
            gameOverSection.classList.add('active')
        
        }
        if(playerResult > computerResult){
            finalResultDisplay.innerHTML = 'Congratulations! You Won The Game'
            finalResultDisplay.style.color = 'rgb(22, 228, 22)'
        }
        if(playerResult < computerResult){
            finalResultDisplay.innerHTML = 'Ooops! You Lost The Game'
            finalResultDisplay.style.color = 'red'
        }
        if(playerResult === computerResult){
            finalResultDisplay.innerHTML = 'Not Bad! You Drew'
            finalResultDisplay.style.color = 'white' 
        }

        


    

    })
})


}
startGame();

restartBtn.addEventListener('click', function(){
    gamePlayingSection.classList.remove('active')
    gameOverSection.classList.remove('active')
    playerResultDisplay.innerHTML = 0;
    computerResultDisplay.innerHTML = 0;
    movesLeftDisplay.innerHTML = 10;
    window.location.reload();

})

