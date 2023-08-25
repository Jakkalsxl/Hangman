import '../App.css';

function LoseCase(props) {
    const isGameLost = props.wrongGuesses >= 10;

    //Determines if the game is lost based on the amount of wrong guesses
    if (isGameLost) {
        const currentLoses = parseInt(sessionStorage.getItem('loses'));
        sessionStorage.setItem('loses', (currentLoses)+ 1);
    }

    //If game is lost message is displayed else nothing is displayed
    return (
        <div>
            {isGameLost ? <p className='winLoseText'>Sorry! You've lost!</p> : null}
        </div>
    );
}

export default LoseCase;
