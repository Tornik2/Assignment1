import "./Product.css";
import PropTypes from "prop-types";

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export function Product({ src, name, description }) {
  return (
    <div className="product_wrapper">
      <div className="product_image_container">
        <img src={src} alt="" className="product_image" />
      </div>
      <div className="product_all_info">
        <h2 className="product_name">{name}</h2>
        <p className="product_description">{description}</p>
        <button className="add_btn">Add to Cart</button>
      </div>
    </div>
  );
}
