import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState(null)
  const [portfolio, setPortfolio] = useState([])
  const [activeStock, setActiveStock] = useState(null)
  const [filter, setFilter] = useState(null)
  const [sort, setSort] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((data) => setStocks(data))
  }, [])

  const updatePortfolio = () => {
    if (!portfolio.includes(activeStock) && activeStock) {
      setPortfolio([...portfolio, activeStock])
      setActiveStock(null)
    } else if (portfolio.includes(activeStock) && activeStock) {
      setPortfolio(portfolio.filter((stock) => stock !== activeStock))
      setActiveStock(null)
    }
  }

  updatePortfolio()

  if (!stocks) {
    return "Loading..."
  }
  return (
    <div>
      <SearchBar setFilter={setFilter} setSort={setSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            setActiveStock={setActiveStock}
            filter={filter}
            sort={sort}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            setActiveStock={setActiveStock}
          />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
