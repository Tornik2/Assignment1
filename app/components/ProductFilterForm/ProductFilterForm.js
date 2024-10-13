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
      <div className="btn-wrapper">
        <button type="submit">filter</button>
      </div>
    </form>
  );
}
