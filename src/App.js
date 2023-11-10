import './App.css';
import NavBar from './components/NavBar.js'
import DrumMachine from './components/DrumMachine.js';
import {useEffect} from 'react';
// Audio library
import PlaySound from './components/PlaySound.js';

/* To do list:
  Do the website Layout
  Do the basic design or find a template
  Create the components
  Design the system (Javascript algorithms)
  Implement the system
  Fix bugs
  Final details
  Testing
  Deploy web application
  Submit project

*/

function App() {

  //UseEffect call to detect any keypress
  //Put useEffect in the app in order to avoid problems with propagation
  useEffect(()=>{
    
    window.addEventListener('keypress', handleKeyPress);
    
    //Remove the event listener to avoid multiple fires ofthe handler in short
    return () => {window.removeEventListener('keypress',handleKeyPress)};
  },[]);

  //Play sound function
  //Function that handles the event
    const handleKeyPress = (event) => {
        // console.log(event.key);
        switch (event.key.toLowerCase()) {
          case 'q':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
            break;
          case 'w':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
            break;
          case 'e':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
            break;

          case 'a':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
            break;
          case 's':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
            break;
          case 'd':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
            break;

          case 'z':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
            break;
          case 'x':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
            break;
          case 'c':
            PlaySound("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
            break;

          default:
            return null;
        }
    };

  return (
    <>      
      <div className="row">
        <div className="col bg-body-tertiary"></div>
        <div className="col-10 bg-body-tertiary">
          <NavBar />
        </div>
        <div className="col bg-body-tertiary"></div>
      </div>
      
      <div className="container-md mt-5 pt-5" id="drum-machine">
        <DrumMachine />
      </div>
      
    </>
  );
}

export default App;
