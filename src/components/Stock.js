import React from "react"

function Stock({ stock, setActiveStock }) {
  const { name, price } = stock

  const handleClick = () => {
    setActiveStock(stock)
  }
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  )
}
export default Stock
