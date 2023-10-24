import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function findNearestPalindrome() {
  console.log(
    "TODO: link Jira story to create a task for assigning someone to this 🙃"
  );
  return null;
}

function App() {
  const responseValue = "121";
  return (
    <div className="App">
      <h1>Palindrome</h1>
      <input
        onChange={(e) => {
          console.log(e);
        }}
        role="region"
      />
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
