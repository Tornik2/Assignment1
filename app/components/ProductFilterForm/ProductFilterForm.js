"use client";
import { useState, useEffect } from "react";
import "./ProductFilterForm.css";

export default function ProductFilterForm({ formData, handleInputChange }) {
  const [debouncedSearchWord, setDebouncedSearchWord] = useState(
    formData.searchWord
  );
  useEffect(() => {
    const handler = setTimeout(() => {
      handleInputChange({
        target: { name: "searchWord", value: debouncedSearchWord },
      });
    }, 300);
    return () => clearTimeout(handler); // Cleanup function
  }, [debouncedSearchWord, handleInputChange]);

  const handleChange = (e) => {
    setDebouncedSearchWord(e.target.value);
  };
  return (
    <>
      <div className="form-group search__wrapper">
        <input
          className="input search-input"
          type="text"
          name="searchWord"
          id="search"
          placeholder="...Search"
          value={debouncedSearchWord}
          onChange={handleChange}
        />
      </div>
      <form className="filter-form">
        {/* Options group for Category, Rating, and Sort By */}
        <div className="options-group">
          <div className="form-group">
            <label htmlFor="category">Select a category:</label>
            <select
              className="input select-input"
              name="category"
              id="category"
              defaultValue={formData.category}
              onChange={handleInputChange}
            >
              <option value={""}>Select a Category</option>
              <option value={"furniture"}>furniture</option>
              <option value={"groceries"}>groceries</option>
              <option value={"fragrances"}>fragrances</option>
              <option value={"beauty"}>beauty</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select
              className="input select-input"
              name="rating"
              id="rating"
              defaultValue={formData.rating}
              onChange={handleInputChange}
            >
              <option value={""}>Rating</option>
              <option value={"2.0"}>{"2.0 >"}</option>
              <option value={"3.0"}>{"3.0 >"}</option>
              <option value={"4.0"}>{"4.0 >"}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sortMethod">Sort By:</label>
            <select
              className="input select-input"
              name="sortMethod"
              id="sortMethod"
              defaultValue={formData.sortMethod}
              onChange={handleInputChange}
            >
              <option value={""}>Sort by</option>
              <option value={"title A-Z"}>title A-Z</option>
              <option value={"title Z-A"}>title Z-A</option>
              <option value={"price (lowest first)"}>
                price (lowest first)
              </option>
              <option value={"price (highest first)"}>
                price (highest first)
              </option>
            </select>
          </div>
        </div>

        <div className="form-group price-group">
          <div>
            <label htmlFor="minPrice">Min Price</label>
            <input
              className="input price-input"
              type="number"
              name="minPrice"
              id="minPrice"
              placeholder="min"
              value={formData.minPrice}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="maxPrice">Max Price</label>
            <input
              className="input price-input"
              type="number"
              name="maxPrice"
              id="maxPrice"
              placeholder="max"
              value={formData.maxPrice}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}
