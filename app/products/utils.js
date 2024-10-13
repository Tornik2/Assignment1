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
  const category = data.category;
  if (category) {
    filteredProducts = arr.filter((item) => {
      return item.category === category;
    });
  }

  return filteredProducts;
}
