export default function ProductFilterForm({ formData, handleInputChange }) {
  return (
    <form>
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
        <label htmlFor="minPrice">Price</label>
        <input
          type="text"
          name="minPrice"
          value={formData.minPrice}
          onChange={handleInputChange}
        />
        {" to "}
        <input
          type="text"
          name="maxPrice"
          value={formData.maxPrice}
          onChange={handleInputChange}
        />
      </div>
      <div className="btn-wrapper">
        <button type="submit">filter</button>
      </div>
    </form>
  );
}
