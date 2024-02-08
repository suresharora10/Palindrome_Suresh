import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [error, setError] = useState(null);
  const [requestValue, setRequestValue] = useState(0);
  const [responseValue, setResponseValue] = useState(0);

  async function findNearestPalindrome() {
      try {

            const resp = await axios
                  .get(`http://localhost:8080/palindrome/${requestValue}`)
                  .then(r => r.data);
              setResponseValue(parseInt(resp));
              setError(null); // clear any previous error
      } catch (err) {
          if (err.response && err.response.status === 400) {
              setError('Invalid value passed.');
          } else {
              setError(err.message); // set the error state to the error message
          }
      }
  }


  return (
    <div className="App">
      <h1>Palindrome</h1>
      <input type="number" pattern="[0-9]*" inputmode="numeric" onChange={e => setRequestValue(parseInt(e.target.value))} role="region"/>
      <button onClick={findNearestPalindrome} aria-label="button">
        Submit
      </button>

        {error && <div className="error">{error}</div>}
        {!error && <div>
        <strong>The answer is: </strong>
        <p>{responseValue}</p>
      </div>}
    </div>
  );
}

export default App;