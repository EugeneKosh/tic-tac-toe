import React from 'react';
import {Navbar} from "./Components/Navbar";
import Game from "./Components/Game";

function App() {
  return (
      <div className={'container'}>
          <Navbar />
          <div className={'game-area'}>
              <Game />
          </div>
      </div>
  );
}

export default App;
