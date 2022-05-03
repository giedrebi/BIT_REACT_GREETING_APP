import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);
  return (
    <div>
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
