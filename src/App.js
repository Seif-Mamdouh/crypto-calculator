import React, { useState } from "react";
import "./style.css";
// We will need a function to take in an input
//and change a variable to what is inputted by the user.
//For this, we will be using the useState hook.

// export default function App() {

//    const [trade, setTrade] = useState({
//      sellData: {},
//      buyData: {},
//    }); 

//   const [buyDate, setBuyDate] = useState("");
//   const [sellDate, setSellDate] = useState("");

//   const coingeckoUrl = (date) => {
//     return `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${date}&localization=false`;
//   };

//   const coingeckoFetch = async (date) => {
//     fetch(coingeckoUrl(date)).then((response) =>
//       response.json().then((jsonData) => {
//         if (buy) {
//           setTrade({ ...trade, buyData: jsonData });
//         } else {
//           setTrade({ ...trade, sellData: jsonData });
//         }
//       //  we just had the jsonData passed into the setBuyDate as seen below
//         // setBuyDate(jsonData);
//         // setSellDate(jsonData);
//         // console.log(jsonData);
//       })
//     );
//   };

//   //we need to differentiate between buying and selling data. 
//   //to make this a reality, we need to create two variables.
//   //One that store dat returned for the buy
//   //Two that returns the data for the sell date input
//   //it's called trade and setTrade with variables sellData and buyData set to an empty object
 
//   const handleBuyChange = (e) => {
//     let val = e.target.value;
//     setBuyDate(val);
//     coingeckoFetch(true, val);
//   };
//   const handleSellChange = (e) => {
//     let val = e.target.value;
//     setBuyDate(val);
//     coingeckoFetch(false, val);
//   };

//   return (
//     <div className="App">
//       <input defaultValue={buyDate} onChange={(val) => handleBuyChange(val)} />
//       <h3> {trade.buyDate.market_data?.current_price.usd} USD</h3>

//       <input
//         defaultValue={sellDate}
//         onChange={(val) => handleSellChange(val)}
//       />
//       <h3> {trade.sellDate.market_data?.current_price.usd} USD</h3>
//     </div>
//   );
// }

export default function App() {
  const [trade, setTrade] = useState({
    sellData: {},
    buyData: {}
  });

  const [buyDate, setBuyDate] = useState("");
  const [sellDate, setSellDate] = useState("");

  const coingeckoUrl = (date) => {
    return `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${date}&localization=false`;
  };

  const coingeckoFetch = async (buy, date) => {
    fetch(coingeckoUrl(date)).then((response) =>
      response.json().then((jsonData) => {
        if (buy) {
          setTrade({ ...trade, buyData: jsonData });
        } else {
          setTrade({ ...trade, sellData: jsonData });
        }
      })
    );
  };
  const handleBuyChange = (e) => {
    let val = e.target.value;
    setBuyDate(val);
    coingeckoFetch(true, val);
  };

  const handleSellChange = (e) => {
    let val = e.target.value;
    setSellDate(val);
    coingeckoFetch(false, val);
  };
  return (
    <div className="App">
      <input defaultValue={buyDate} onChange={(val) => handleBuyChange(val)} />
      <h3> {trade.buyData.market_data?.current_price.usd} USD</h3>

      <input
        defaultValue={sellDate}
        onChange={(val) => handleSellChange(val)}
      />
      <h3> {trade.sellData.market_data?.current_price.usd} USD</h3>
    </div>
  );
}