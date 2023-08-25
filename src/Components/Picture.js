import state1 from '../hangmandrawings/state1.GIF';
import state2 from '../hangmandrawings/state2.GIF';
import state3 from '../hangmandrawings/state3.GIF';
import state4 from '../hangmandrawings/state4.GIF';
import state5 from '../hangmandrawings/state5.GIF';
import state6 from '../hangmandrawings/state6.GIF';
import state7 from '../hangmandrawings/state7.GIF';
import state8 from '../hangmandrawings/state8.GIF';
import state9 from '../hangmandrawings/state9.GIF';
import state10 from '../hangmandrawings/state10.gif';
import state11 from '../hangmandrawings/state11.GIF';
import '../App.css';

//Array to more easily call images
const images = [
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    state9,
    state10,
    state11
];

//Determine which picture to show based on the ammount of wrong guesses and returns the correct image
function Picture(props){
    let picture = props.wrongGuesses;

    const pictureToShow = images[picture];
    if (picture > 10){
        pictureToShow = images[10];
    }

    return(
        <>
            <img src={pictureToShow} width={300} className='pictureToShow' alt='state'/>
        </>
    )
}

export default Picture;