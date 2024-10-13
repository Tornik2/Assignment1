"use client";
import { Product } from "../components/product/page";
import "./products.css";
import { useState } from "react";

export default function ProductsDetails({ fetchedProducts }) {
  const [products, setProducts] = useState(fetchedProducts);
  console.log(products);
  const productList = products.map((product) => {
    const { title, description, id, images } = product;
    const productObj = {
      name: title,
      description: description,
      id: id,
      src: images[0],
    };
    return <Product productObj={productObj} key={id} />;
  });

  return (
    <>
      <div className="products__page__wrapper max-width padding__top__bottom">
        <div className="section_heading">
          <img src="/assets/chevron-left.85606530.svg" alt="breadcrums-arrow" />
          <h1 className="section_name">Products</h1>
        </div>
        <ul className="products__list">{productList}</ul>
      </div>
    </>
  );
}
