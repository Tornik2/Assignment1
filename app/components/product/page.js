import Link from "next/link";
import "./Product.css";

export function Product({ productObj }) {
  const { src, name, description, id } = productObj;
  console.log(productObj.src);
  return (
    <li className="product_wrapper">
      <div className="product_image_container">
        <img src={src} alt="" className="product_image" />
      </div>
      <div className="product_all_info">
        <h2 className="product_name">{name}</h2>
        <p className="product_description">{description}</p>
        <Link
          style={{ textAlign: "center" }}
          href={`/products/${id}`}
          className="add_btn"
        >
          ...Read More
        </Link>
      </div>
    </li>
  );
}
