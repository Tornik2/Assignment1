import ProductsDetails from "./products";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { supabase } from "../../utils/supabase/server";

import { fetchProducts } from "./utils";

import "./products.css";

export default withPageAuthRequired(
  async function Products() {
    const { data } = await supabase.from("products").select("*");
    const products = await fetchProducts();
    console.log("data:", data, products);

    return <ProductsDetails fetchedProducts={data} />;
  },
  { returnTo: "/products" }
);
