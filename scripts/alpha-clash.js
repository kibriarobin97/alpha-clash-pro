// function play(){

//     // step: 1 hide the home screen, add the hidden class
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.add('hidden');

//     // step: 2 show the play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    // stop game if pressed 'esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected key press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    // checked matched or not
    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        //------------------------------another way-------------------
        // score update
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;

        // // show the update score
        // currentScoreElement.innerText = newScore;

        // new round start
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
        //------------------------another way-----------------
        // get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // updated life
        // const newLife = currentLife - 1;

        // // display life
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getRandomAlphabet();

    // display random alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    //hide everything and show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset life and score
    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0);

    continueGame('');
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // game over score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet
    const lastAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(lastAlphabet);
}