let MyRandom = parseInt(Math.round(Math.random()*100 +1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#gueesField')
const guessesLot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }else if(guess < 1 ){
        alert('please enter a number more then 1')
    }else if(guess > 100 ){
        alert('please enter a number less than 100')
    }else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            DispleMessage(`Game over , Rondom number was ${MyRandom}`);
            EndGame()
        }else{
            displayGuess(guess);
            CheckGuess(guess)
        }
    }

}
function CheckGuess(guess){
    if (guess === MyRandom) {
        DispleMessage(`You guessed it right`)
        EndGame()
    }else if(guess<MyRandom){
        DispleMessage(`Number is too low`);
    }
    else if(guess>MyRandom){
        DispleMessage(`Number is too High`);
    }

}
function displayGuess(guess){
    userInput.value = "";
    guessesLot.innerHTML += `${guess} `;
    numGuess++;
    lastResult.innerHTML = `${11-numGuess}`

}

function DispleMessage(Massage){
    lowOrHigh.innerHTML = `<h2>${Massage}</h2>`
}
function NewGame(){
   const newGame = document.querySelector('#newGame')
   newGame.addEventListener('click',(e)=>{
    MyRandom = parseInt(Math.round(Math.random()*100 +1));
    prevGuess = []
    numGuess = 1
    guessesLot.innerHTML = ''
    lastResult.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
   })
}
function EndGame(){
    userInput.value = ""
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    NewGame()
}