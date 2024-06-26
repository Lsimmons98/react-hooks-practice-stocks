import React from "react"
import Stock from "./Stock"

function StockContainer({ stocks, setActiveStock, filter, sort }) {
  const filteredStocks = filter
    ? stocks.filter((stock) => stock.type === filter)
    : stocks

  const filteredAndSortedStocks = () => {
    if (sort === "Alphabetically") {
      return filteredStocks.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === "Price") {
      return filteredStocks.sort((a, b) => a.price - b.price)
    } else {
      return filteredStocks
    }
  }

  const displayStocks = () => {
    return filteredAndSortedStocks().map((stock) => (
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
