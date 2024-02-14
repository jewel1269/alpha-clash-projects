function play(){
    const homeScreen = document.getElementById('home');
    // console.log(homeScreen.classList)
    homeScreen.classList.add('hidden');



    const playGround = document.getElementById('playground-section')
    playGround.classList.remove('hidden');

    currentLifeElement('current-life', 5);
    currentLifeElement('current-life', 0);

    highLighter(alphabet);
    continueGame();
  

   
}
// function handleKeyboardButtonPress(){
//     console.log("button Press")
// }
// //capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

 
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
  
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
}

function highLighter(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}


function handleKeyboardKeyEventUp(event){
    const gamerPressedKey = event.key;
    console.log('player pressed', gamerPressedKey);

    const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlpha = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlpha.toLowerCase();
  console.log(gamerPressedKey, currentAlpha)


if(gamerPressedKey === expectedAlphabet){
    console.log('you are win');
   const currentScoreElement = document.getElementById('current-score');
   const currentScoreText = currentScoreElement.innerText;
   const currentScore = parseInt(currentScoreText);
   console.log(currentScoreText)


   const newScore = currentScore + 1;
   currentScoreElement.innerText = newScore;
    continueGame();
} else{
    console.log('you are loss');
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    console.log(currentLifeText);

    const newsLife = currentLife - 1;
    currentLifeElement.innerText = newsLife;

    if(newsLife === 0){
        gameOver()
}
}
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyEventUp);


function gameOver(){
    const finalResult = document.getElementById('playground-section');
    finalResult.classList.add('hidden');

    const gamefinished = document.getElementById('final-result');
    gamefinished.classList.remove('hidden');

    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore);
}

function playAgin(){
    const gamefinished = document.getElementById('final-result');
    gamefinished.classList.add('hidden');

    const finalResult = document.getElementById('playground-section');
    finalResult.classList.remove('hidden');

    
}
 


