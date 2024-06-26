import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState(null)
  const [portfolio, setPortfolio] = useState([])
  const [filter, setFilter] = useState(null)
  const [sort, setSort] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((data) => setStocks(data))
  }, [])

  const filteredStocks = filter
    ? stocks.filter((stock) => stock.type === filter)
    : stocks

  const sortStocks = (stocks) => {
    if (sort === "Alphabetically") {
      return stocks.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === "Price") {
      return stocks.sort((a, b) => a.price - b.price)
    } else {
      return stocks
    }
  }

  const filteredAndSortedStocks = sortStocks(filteredStocks)

  const addStock = (stock) => {
    if (!portfolio.includes(stock)) setPortfolio([...portfolio, stock])
  }

  const removeStock = (stock) => {
    if (portfolio.includes(stock)) {
      setPortfolio(portfolio.filter((item) => item !== stock))
    }
  }

  if (!stocks) {
    return "Loading..."
  }
  return (
    <div>
      <SearchBar setFilter={setFilter} setSort={setSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredAndSortedStocks}
            changePortfolio={addStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            changePortfolio={removeStock}
          />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
