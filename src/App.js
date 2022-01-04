import React, { useState } from "react";
import "./style.css";
// We will need a function to take in an input
//and change a variable to what is inputted by the user.
//For this, we will be using the useState hook.

export default function App() {
  const [buy, setBuy] = useState("");

  const coingeckoUrl = (date) => {
    return `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${date}&localization=false`;
  }; 
  const coingeckoFetch = async (date) => {
    fetch(coingeckoUrl(date)).then((response) =>
      response.json().then((jsonData) => {
        setBuy(jsonData);
        console.log(jsonData);
      })
    );
  };

  return (
    <div className="App">
      <input defaultValue={buy} onChange={(e) => setBuy(e.target.value)}/>
      <h3> {buy.market_data?.current_price.usd} USD</h3>
    </div>
  );
}

// export default App;
