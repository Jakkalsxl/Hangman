import Picture from './Components/Picture.js';
import GetWord from './Components/GetWord.js';
import Determiner from './Components/Determiner.js';
import LoseCase from './Components/LoseCase.js';
import Reset from './Components/Reset.js';
import React, { useState } from 'react';
import './App.css';

function App() {

  // State hooks for revealed letters and wrong letters
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  // Initialize session storage values for wins and losses if not set
  if (!sessionStorage.getItem('wins')) {
    sessionStorage.setItem('wins', '0');
  }
  if (!sessionStorage.getItem('loses')) {
    sessionStorage.setItem('loses', '0');
  }

  // Get total wins and losses from session storage
  const totalWins = sessionStorage.getItem('wins');
  const totalLoses = sessionStorage.getItem('loses');

  // State hooks for wrong guesses count, correct guesses count, and random word
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [randomWord, setRandomWord] = useState('');

  // Function to handle the win condition
  function winCase(){
    // Get the current win count from session storage
    let winCounter = parseInt(sessionStorage.getItem('wins')) || 0;

    // Check if the player has guessed all letters correctly and hasn't processed a win yet
    if (randomWord.length === correctGuesses && !sessionStorage.getItem('winProcessed')) {
      // Increment the win count in session storage
      sessionStorage.setItem('wins', winCounter + 1);
      // Mark that a win has been processed to avoid incrementing multiple times
      sessionStorage.setItem('winProcessed', true);
  
      // Return a congratulatory message
      return (
        <p>Congratulations! You've won!</p>
      );
    // Check if the player has guessed all letters correctl
    } else if(randomWord.length === correctGuesses){
      // Return a congratulatory message
      return (
        <p className='winLoseText'>Congratulations! You've won!</p>
      );
    // Check if the player hasn't guessed all letters correctly
    }else if (randomWord.length !== correctGuesses) {
      // Remove the winProcessed flag to allow processing wins again
      sessionStorage.removeItem('winProcessed');
      // Return null since win condition is not met yet
      return null;
    }
  }
  return (
    <>
      <div className='app-container'>
        <div className='top-container'>
          <div className='top-grid'>
            <div className='top-grid-left'>
              {/* Render the Reset component with relevant props */}
              <Reset wrongGuesses={wrongGuesses} setWrongGuesses={setWrongGuesses} correctGuesses={correctGuesses} setCorrectGuesses={setCorrectGuesses}/>
            </div>
            <div className='top-grid-right'>
              <ul>
                {/* Display total wins and calculated loses (divided by 2) */}
                <li>Wins: {totalWins} &emsp; Loses: {totalLoses/2} </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Render the LoseCase component with relevant props */}
        <LoseCase wrongGuesses={wrongGuesses} />

        {/* Call the winCase function to conditionally render a win message */}
        {winCase()}

        {/* Display the random word */}
        {/* Uncomment below line to view word on screen for testing */}
        {/* <p>{randomWord}</p> */}
        

        {/* Render the GetWord component with relevant props */}
        <GetWord randomWord={randomWord} setRandomWord={setRandomWord} revealedLetters={revealedLetters}/>

        <div className='content-container'>
        
          <div className='image-container'>
            {/* Render the Picture component with relevant props */}
            <p className='wrongGuesses'>Wrong Guesses: {wrongGuesses}</p>
            <Picture wrongGuesses={wrongGuesses}/>
          </div>
          <div className='alphabet-container'>
            {/* Render the Determiner component with relevant props */}
            
            <Determiner randomWord={randomWord} wrongGuesses={wrongGuesses} setWrongGuesses={setWrongGuesses} correctGuesses={correctGuesses} setCorrectGuesses={setCorrectGuesses} revealedLetters={revealedLetters} setRevealedLetters={setRevealedLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}/>
          </div>
        </div>

      </div>



    </>
  );
}

export default App;