import '../App.css';
import React from 'react';

function Determiner(props) {
    //Creates an array for each letter in the alphabet
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    //Set props
    const {revealedLetters, setRevealedLetters, wrongLetters, setWrongLetters} = props;
    const chosenWord = props.randomWord.trim();
    let wrongGuesses = props.wrongGuesses;
    let setWrongGuesses = props.setWrongGuesses;
    let correctGuesses = props.correctGuesses;
    let setCorrectGuesses = props.setCorrectGuesses;

    // Check if the word contains the pressed letter
    const handleLetterClick = (letter) => {
        let chosenWordLowCase = chosenWord.toLowerCase();
        let letterLowCase = letter.toLowerCase();
        
        // If correct letter is pressed
        if (chosenWordLowCase.includes(letterLowCase)) {
            const count = chosenWordLowCase.split(letterLowCase).length - 1;

            setCorrectGuesses(correctGuesses + count);
            setRevealedLetters([...revealedLetters, letter]); // Add the revealed letter to the state

        // If incorrect letter is pressed
        } else {
            setWrongGuesses(wrongGuesses + 1);
            setWrongLetters([...wrongLetters, letter]); // Add the revealed letter to the state
        }
    };

    //Creates and updates each letter / button
    return (
        <div className='alphabet-grid'>
            {alphabet.map(letter => (
                <button
                    className={`alphabet-button ${revealedLetters.includes(letter) ? 'correct' : ''} ${wrongLetters.includes(letter) ? 'wrong' : ''}`}
                    onClick={() => handleLetterClick(letter)}
                    key={`letter-${letter}`}
                    disabled={wrongGuesses === 10 || props.randomWord.length === correctGuesses || revealedLetters.includes(letter) || wrongLetters.includes(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}

export default Determiner;