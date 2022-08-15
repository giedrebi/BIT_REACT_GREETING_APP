import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);
  return (
    <div>
      <h1>Greeting app</h1>
      <input type="text"
        placeholder="What's your name?"
        onChange={(e) => [setName(e.target.value)]}
      />
      <button onClick={() => setShowGreeting(!showGreeting)}>
        {showGreeting ? "Hide" : "Show" }
      </button>
      <p>{showGreeting ? `Hi ${name} ` : ``}</p>
    </div>
  );
}

export default App;
