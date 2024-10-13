export default function ProductFilterForm({ formData, handleInputChange }) {
  return (
    <form>
      <div className="search__wrapper">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="searchWord"
          id="search"
          placeholder="...Search"
          value={formData.searchWord}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="category">Select a category:</label>
        <select
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
      <div>
        <label htmlFor="minPrice">Min Price</label>
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          placeholder="min"
          value={formData.minPrice}
          onChange={handleInputChange}
        />
        {" to "}
        <label htmlFor="maxPrice">Max Price</label>

        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          placeholder="max"
          value={formData.maxPrice}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <select
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
      <div className="btn-wrapper">
        <button type="submit">filter</button>
      </div>
    </form>
  );
}
