"use client";
import "./products.css";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok)
          throw new Error("Somthing went wrong with fetching Products");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Products not found!");
        setProducts(data.products);
        console.log(data.products[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="products__page__wrapper">
        <div className="section_heading">
          <img src="/assets/chevron-left.85606530.svg" alt="breadcrums-arrow" />
          <h1 className="section_name">Products</h1>
        </div>
        <div className="products"></div>
      </div>
    </>
  );
}
