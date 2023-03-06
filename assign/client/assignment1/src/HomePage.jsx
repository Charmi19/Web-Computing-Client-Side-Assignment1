import React from 'react';
import stock_market from "./stock_market.png";


export default function HomePage() {
  const image = 'stock_market';
  return(
    <div className="hero__content">
    <h1 className = "hero_title"> The Stocks Client Application </h1>
    <img src={stock_market} className="App-logo" alt="logo" class="center" />
    <h2 className="hero__subtitle">Welcome to the Stocks website! </h2>
    <p>
      Welcome to the Stock Analyst portal of American Exchange to view just on clicking:
      Stocks of available companies,  
      Quote of latest prices of selected stock symbol, or 
      View Price History of chosen stock for past 100 days. 

    </p>
  </div>
  )
  
}




