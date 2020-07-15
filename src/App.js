import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"To be or not to be, dobedeee"</p>
        <p id="author">Jan van Hest</p>
        <a id="tweet-quote"><button>Tweet this quote!</button></a>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
}

/*
? User Story #1: I can see a wrapper element with a corresponding id="quote-box".
? User Story #2: Within #quote-box, I can see an element with a corresponding id="text".
? User Story #3: Within #quote-box, I can see an element with a corresponding id="author".
? User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
? User Story #5: Within #quote-box, I can see a clickable <a> element with corresponding id="tweet-quote".
? User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
? User Story #6: On first load, my quote machine displays a random quote in the element with id="text".
? User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".
*/

export default App;