"use client";

import { useState, useEffect } from "react";
import "./product.css";

export default function Product({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong with fetching Products");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Products not found!");
        }
        setProduct(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <div className="product__wrapper">
        <div>
          {product && product.images && (
            <img
              className="product__img--big"
              src={product.images[0]}
              alt={product.title}
            />
          )}
        </div>
        <div className="product__details">
          <h3 className="heading-tertiary">{product.title}</h3>
          <p className="product__description">{product.description}</p>
          <span>$ {product.price}</span>
        </div>
      </div>
    </>
  );
}
