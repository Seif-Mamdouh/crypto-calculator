import React, { useState } from "react";
import "./style.css";
// We will need a function to take in an input
//and change a variable to what is inputted by the user.
//For this, we will be using the useState hook.

export default function App() {
  const [buy, setBuyDate] = useState("");
  const [sell, setSellDate] = useState("");

  const coingeckoUrl = (date) => {
    return `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${date}&localization=false`;
  }; 
  const coingeckoFetch = async (date) => {
    fetch(coingeckoUrl(date)).then((response) =>
      response.json().then((jsonData) => {
        setBuyDate(jsonData);
        setSellDate(jsonData);
        console.log(jsonData);
      })
    );
  };

  const handleBuyChange = (e) => {
    let val = e.target.value;
    setBuyDate(val);
    coingeckoFetch(val);
  };

  const handleSellChange = (e) => {
    let val = e.target.value;
    setBuyDate(val);
    coingeckoFetch(val);

  }

  return (
    <div className="App">
      <input defaultValue={buyDate} onChange={(val) => handleBuyChange(val)} />
      <h3> {buyDate.market_data?.current_price.usd} USD</h3>

      <input
        defaultValue={sellDate}
        onChange={(val) => handleSellChange(val)}
      />
      <h3> {sellDate.market_data?.current_price.usd} USD</h3>
    </div>
  );
}

// export default App;


// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [buyDate, setBuyDate] = useState("");
//   const [sellDate, setSellDate] = useState("");

//   const coingeckoUrl = (date) => {
//     return `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${date}&localization=false`;
//   };

//   const coingeckoFetch = async (date) => {
//     fetch(coingeckoUrl(date)).then((response) =>
//       response.json().then((jsonData) => {
//         setBuyDate(jsonData);
//         setSellDate(jsonData);
//         console.log(jsonData);
//       })
//     );
//   };
//   const handleBuyChange = (e) => {
//     let val = e.target.value;
//     setBuyDate(val);
//     coingeckoFetch(val);
//   };
//   const handleSellChange = (e) => {
//     let val = e.target.value;
//     setBuyDate(val);
//     coingeckoFetch(val);
//   };

//   return (
//     <div className="App">
//       <input defaultValue={buyDate} onChange={(val) => handleBuyChange(val)} />
//       <h3> {buyDate.market_data?.current_price.usd} USD</h3>

//       <input
//         defaultValue={sellDate}
//         onChange={(val) => handleSellChange(val)}
//       />
//       <h3> {sellDate.market_data?.current_price.usd} USD</h3>
//     </div>
//   );
// }
