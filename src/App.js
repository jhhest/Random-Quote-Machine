import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"To be or not to be, dobedeee"</p>
        <p id="author">Jan van Hest</p>
      </div>
    </div>
  );
}

/*
? User Story #1: I can see a wrapper element with a corresponding id="quote-box".
? User Story #2: Within #quote-box, I can see an element with a corresponding id="text".
? User Story #3: Within #quote-box, I can see an element with a corresponding id="author".


*/

export default App;