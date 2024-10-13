import ProductsDetails from "./products";
import { fetchProducts } from "./utils";

import "./products.css";

export default async function Products() {
  const products = await fetchProducts();
  return <ProductsDetails fetchedProducts={products} />;
}
