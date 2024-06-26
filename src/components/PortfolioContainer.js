import React from "react"
import Stock from "./Stock"

function PortfolioContainer({ portfolio, changePortfolio }) {
  const displayPortfolio = () =>
    portfolio.map((stock) => (
      <Stock
        key={stock.id + 0.1}
        stock={stock}
        changePortfolio={changePortfolio}
      />
    ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {displayPortfolio()}
    </div>
  )
}

export default PortfolioContainer
