import React from "react";
import PropTypes from "prop-types";
function QuoteBox({ quote, author }) {
  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p>-</p>
      <p id="author">By {author}</p>
      <a id="tweet-quote" href="/public/index.html">
        <button>Tweet this quote!</button>
      </a>
      <button id="new-quote">New Quote</button>
    </div>
  );
}

QuoteBox.defaultProps = {
  quote:
    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering",
  author: "Yoda",
};

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default QuoteBox;
