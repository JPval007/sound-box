import './App.css';
import NavBar from './components/NavBar.js'
import DrumMachine from './components/DrumMachine.js';

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
