import React from "react"
import Stock from "./Stock"

function StockContainer({ setActiveStock, stocks }) {
  const displayStocks = () => {
    return stocks.map((stock) => (
      <Stock key={stock.id} stock={stock} setActiveStock={setActiveStock} />
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
