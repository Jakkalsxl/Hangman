import '../App.css';
import React, { useEffect } from 'react';

function GetWord(props) {
    //Set props
    const randomWord = props.randomWord;
    const setRandomWord = props.setRandomWord;
    const revealedLetters = props.revealedLetters;

    //UseEffect to retrieve random line from the dictionary.txt
    useEffect(() => {
        fetch('../dictionary.txt')
            .then(response => response.text())
            .then(text => {

                // Split the text into an array of lines
                let lines = text.split('\n');

                // Remove the first 39 lines as they contain non-dictionary content
                let filteredLines = lines.slice(39);

                // Generate a random index to select a line from the filtered lines
                let randomIndex = Math.floor(Math.random() * filteredLines.length);

                // Get the randomly selected line and remove any leading/trailing whitespace
                let randomLine = filteredLines[randomIndex].trim();
                const randomLineTest = 'abacbdcedfegfhgihjij'; //Testing
                
                // Set the random word state variable with the selected line from the dictionary
                setRandomWord(randomLine);//Replace 'randomLine' with 'randomLineTest' for character testing on constant word
            })
            .catch(error => {
                // Handle errors that might occur during the fetching process
                console.error('Error fetching words:', error);
            });
    }, []);

    // function to generates the display for the randomWord
    const getDisplayLines = (word) => {

        // Convert the input word to uppercase and split it into an array of characters
        let displayedWord = word.toUpperCase().split('');

        // Empty array to hold the reconstructed word
        let rebuiltWord = [];

        // Loop through each character in displayedWord
        for(let z = 0; z < displayedWord.length; z++){
            // Check if the current character is revealed (guessed correctly) or not
            if(revealedLetters.includes(displayedWord[z])){
                rebuiltWord[z] = displayedWord[z] + ' ';// If revealed, add the character followed by a space to rebuiltWord
            } else {
                rebuiltWord[z] = '_ '; // If not revealed, add an underscore followed by a space to rebuiltWord
            }
        }
        // Return the reconstructed word array
        return rebuiltWord;
    };

    return (
        <div className='hangmanWord '>
            <p>{getDisplayLines(randomWord)}</p>
        </div>
    );
}


export default GetWord;



