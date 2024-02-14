// function play(){

//     // step: 1 hide the home screen, add the hidden class
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.add('hidden');

//     // step: 2 show the play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function continueGame() {
    const alphabet = getRandomAlphabet();

    // display random alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame('')
}