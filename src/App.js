import React, { useState } from "react";
import "./style.css";
// We will need a function to take in an input
//and change a variable to what is inputted by the user.
//For this, we will be using the useState hook.

export default function App() {
  const [buy, setBuy] = useState("");
  return (
    <div className="App">
      <input defaultValue={buy} onChange={(e) => setBuy(e.target.value)} />
      <h3> {buy} </h3>
    </div>
  );
}


// export default App;
