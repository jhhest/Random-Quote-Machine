import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
TODO: User Story #1: I can see a wrapper element with a corresponding id="quote-box".
TODO: User Story #2: Within #quote-box, I can see an element with a corresponding id="text".
TODO: User Story #3: Within #quote-box, I can see an element with a corresponding id="author".
TODO: User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
TODO: User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
TODO: User Story #6: On first load, my quote machine displays a random quote in the element with id="text".
TODO: User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".
TODO: User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
TODO: User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
TODO: User Story #10: I can tweet the current quote by clicking on the #tweet-quotea element. This a element should include the "twitter.com/intent/tweet" path in its href - attribute to tweet the current quote.
TODO: User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

You can build your project by forking this CodePen pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/- testable-projects-fcc/v1/bundle.js
Once you're done, submit the URL to your working project with all its tests passing.

*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
