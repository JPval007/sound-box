//Import Audio libraries
import {Howl} from 'howler';


function PlayKey(props) {

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
    
    return (
        <>
            <button className="btn btn-primary drum-pad w-100" id={props.text} onClick={()=>(PlaySound(props.source))} >{props.text}
            <audio className="clip" id={props.text} src={props.source}></audio></button>
        </>
    );
}

export default PlayKey;