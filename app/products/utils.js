export async function fetchProducts() {
  let products = [];

  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) throw new Error("Somthing went wrong with fetching Products");

    const data = await res.json();
    if (data.Response === "False") throw new Error("Products not found!");
    products = data.products;
  } catch (error) {
    console.log(error);
  }
  return products;
}

export function filter(arr, data) {
  let filteredProducts = arr;
  const searchWord = data.searchWord;
  const sortWord = data.sortMethod;
  const category = data.category;
  const rating = data.rating;
  const minPrice = data.minPrice ? data.minPrice : 0;
  const maxPrice = data.maxPrice ? data.maxPrice : 2000;
  //filter products by min and max price
  filteredProducts = arr.filter((item) => {
    return item.price > minPrice && item.price < maxPrice;
  });
  //filter by searchWord
  if (searchWord) {
    filteredProducts = filteredProducts.filter((item) => {
      return item.title.toLowerCase().includes(searchWord.toLowerCase());
    });
  }
  //filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === category
    );
  }
  //filter by rating
  if (rating) {
    filteredProducts = filteredProducts.filter(
      (item) => parseFloat(item.rating) > parseFloat(rating)
    );
  }
  //sort products if any sort method given
  if (sortWord) sortProducts(sortWord, filteredProducts);

  return filteredProducts;
}

export function sortProducts(sortWord, arr) {
  sortWord === "title A-Z"
    ? arr.sort((a, b) => a.title.localeCompare(b.title))
    : sortWord === "title Z-A"
    ? arr.sort((a, b) => b.title.localeCompare(a.title))
    : sortWord === "price (lowest first)"
    ? arr.sort((a, b) => a.price - b.price)
    : sortWord === "price (highest first)"
    ? arr.sort((a, b) => b.price - a.price)
    : arr;
}
