import React from "react"

function SearchBar({ setFilter, setSort }) {
  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }

  return (
    <div id="search">
      <strong>Sort by:</strong>
      <label id="Alphabetically">
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={handleSort}
        />
        Alphabetically
      </label>
      <label id="Price">
        <input type="radio" value="Price" name="sort" onChange={handleSort} />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select id="filter" onChange={handleFilter}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  )
}

export default SearchBar
