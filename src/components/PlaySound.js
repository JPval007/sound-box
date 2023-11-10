 //Import Audio libraries
import {Howl} from 'howler';


 // Method that plays the sound
 const PlaySound = (src)=> {
    // Set up the howl object with new custom properties
    const sound = new Howl({
        src,
        html5 : true
    });
    //Actually play the sound
    sound.play();
};

export default PlaySound;