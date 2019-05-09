// Words to Guess
var wordList = ['banana','california','computer','poi','periblem','shadrach','panmixia','preacid','unscaffolded','brownnosed','botanize','etherialization'];

// Random words generated
const generatedWord = wordList[Math.floor(Math.random() * wordList.length)];

// Alphabets
const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Array for Words
var word = generateArray(generatedWord);

//Space for letter guessed
var lettersGuessed = [];

// Print a word
printWord(word);

// Word appear in the console
console.log(generatedWord);

// Lives Left
var livesLeft = 10;

// Create the alphabet elements on the page
for(let i = 0; i < alphabets.length; i++){
    let alphabetBox = document.createElement('div');
    alphabetBox.id = alphabets [i];
    alphabetBox.innerHTML = alphabets [i];
    letterContainer.appendChild(alphabetBox);
    alphabetBox.className = 'unguessed';
    //console.log(alphabetBox.className);
    document.getElementById(alphabets[i]).addEventListener("click", guessLetter);

}

//what happens to the elements when clicked
function guessLetter(){
    if (word.indexOf('_') > -1 && livesLeft > 0){
        lettersGuessed.push(event.target.id); // letter gets placed into letterGuessed array
        event.target.className = 'guessed'; // this class name makes the button grey
        event.target.removeEventListener('click', guessLetter); //makes it unclickable

        for (let i = 0; i < generatedWord.length; i++){
            if (generatedWord.charAt(i).toUpperCase() == event.target.id){
                word [i] = event.target.id;
            } else {
            }
        }
        printWord(word);
    } else{
        //guess isnt allowed when all letters are guessed
        displayGuessesLeft(livesLeft);
    }

    // Lives Remaining
    function displayLivesLeft(num){
        document.getElementById('lives-left').innerHTML = num;
    }

    livesLeft = livesLeft - 1;
    displayLivesLeft(livesLeft);

    // Check if user has won
    function checkWon(){
        console.log(word);
        let hasBlanks = word.includes('_');
        return !hasBlanks;
    }

    const won = checkWon();

    if (won){
        window.alert('You Won!');
    }
    else if (livesLeft <= 0){
        // check if user has lost
        window.alert('You Lost!');
    }
}

// generate the array for words generated
function generateArray(string){
    let wordArray = [];
    for (let i = 0; i < string.length; i++){
        wordArray.push('_');
    }
    return wordArray;
}

//print the word
function printWord(array){
    let displayWord = "";
    for (let i = 0; i < array.length; i++){
        displayWord += array [i] + ' ';     
    }
    document.querySelector('#wordToGuess').innerHTML = displayWord;
}
