import { supabase } from "../../utils/supabase/server";
export async function fetchProducts(language = "en") {
  let products = [];
  const { data, error } = await supabase
    .from(language === "en" ? "products" : "products_translations")
    .select(language === "en" ? "*" : "*, products(price, rating, images)");
  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  products = data.map((prod) => {
    let images = prod.products.images;
    let rating = prod.products.rating;
    let price = prod.products.price;
    return { ...prod, images, price, rating };
  });
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
