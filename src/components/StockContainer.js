import React from "react"
import Stock from "./Stock"

function StockContainer({ changePortfolio, stocks }) {
  const displayStocks = () => {
    return stocks.map((stock) => (
      <Stock key={stock.id} stock={stock} changePortfolio={changePortfolio} />
    ))
  }

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks()}
    </div>
  )
}

export default StockContainer
