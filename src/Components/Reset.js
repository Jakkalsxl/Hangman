import '../App.css';
import React, { useState } from 'react';

function Reset(props) {
    //Set props
    let wrongGuesses = props.wrongGuesses;
    let setWrongGuesses = props.setWrongGuesses;
    let correctGuesses = props.correctGuesses;
    let setCorrectGuesses = props.setCorrectGuesses;
    const [helpVisible, setHelpVisible] = useState(false);

    //Reloads page and resets temporary stats for a new game
    const handleReset = () =>{
        window.location.reload();
        let winCounter = sessionStorage.getItem('wins');
        if(sessionStorage.getItem('winProcessed') === null){
            sessionStorage.setItem('wins', winCounter -1); //removes 1 to handle bug where each reload results in a win condition
        };
        wrongGuesses = 0;
        setWrongGuesses = 0;
        correctGuesses = 0;
        setCorrectGuesses = 0;
    }

    const handleHelp = () => {
        setHelpVisible(!helpVisible); // Toggle the value
    }

    return (
        <div>
            <button onClick={handleReset}>Reset</button>
            <button className='helpButton' onClick={handleHelp}>Help</button>
            {/* Conditionally render help text */}
            <div className={`helpText ${helpVisible ? 'fade-in' : 'fade-out'}`}>
                <ul>
                    <li>Guess one letter at a time to reveal the secret word.</li>
                    <li>Each incorrect guess adds another part to the hangman. You only get 10 incorrect guesses.</li>
                </ul>
            </div>
        </div>
    );
}


export default Reset;