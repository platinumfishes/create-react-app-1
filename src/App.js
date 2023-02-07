import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
    <div class="topbuttons">
      <button id="Duplicate">New duplicate</button>
      <button id="Color">Toggle color</button>
      <button id="Header">Change heading</button>
      <button id="Delete">Delete 1 card</button>
    </div>
      <div id="card1" class="card">
      <p id="header1" class="header">Team Fortress 2 Pyroland</p>
      <p id="bod1" class="bod">This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2</p>
      <p id="bod2" class="bod">The video is called "Meet the Pyro"</p>
      <img class="img" src="https://images.gamebanana.com/img/ss/mods/54f8f277e231a.webp" alt=""></img>
      <button id="Details" class="button">Details</button>
      </div>
</>
  );
}

export default App;
