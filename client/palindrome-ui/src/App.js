import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [requestValue, setRequestValue] = useState(0);
  const [responseValue, setResponseValue] = useState(0);

  async function findNearestPalindrome() {
    const resp = await axios
        .get(`http://localhost:8080/palindrome/${requestValue}`)
        .then(r => r.data);
    setResponseValue(parseInt(resp));
  }


  return (
    <div className="App">
      <h1>Palindrome</h1>
      <input onChange={e => setRequestValue(parseInt(e.target.value))} role="region"/>
      <button onClick={findNearestPalindrome} aria-label="button">
        Submit
      </button>
      <div>
        <strong>The answer is: </strong>
        <p>{responseValue}</p>
      </div>
    </div>
  );
}

export default App;
