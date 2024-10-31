import ProductsDetails from "./products";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

import { fetchProducts } from "./utils";

import "./products.css";

export default withPageAuthRequired(
  async function Products() {
    const products = await fetchProducts();
    return <ProductsDetails fetchedProducts={products} />;
  },
  { returnTo: "/api/auth/login" }
);
