import Link from "next/link";
import "./Product.css";

export default function Product({ productObj }) {
  const { src, name, description, id } = productObj;
  const shortName = name.split(" ").slice(0, 2).join(" ");
  return (
    <li className="product_wrapper">
      <div className="product_image_container dark:bg-slate-400">
        <img src={src} alt="" className="product_image" />
      </div>
      <div className="product_all_info dark:text-darkGray">
        <h2 className="product_name">{shortName}</h2>
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
