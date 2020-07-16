import React, { useState } from "react";
import "./App.css";

import QuoteBox from "./components/QuoteBox.jsx";

/* 
Star Wars Quotes REST API v1
endpoint: 
http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote
response: 
{"id":49,"starWarsQuote":"Oh, my dear friend. How I’ve missed you. — C-3PO","faction":0}
*/

const getQuote = async () => {
  const response = await fetch(
    "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
  ).then();
  const data = await response.json();
  console.log(data);
  return data;
};

getQuote();

function App() {
  const [quote, setQuote] = useState(
    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering"
  );
  const [author, setAuthor] = useState("Yoda");
  
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
