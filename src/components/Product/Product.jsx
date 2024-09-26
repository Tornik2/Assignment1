import "./Product.css";

export function Product(props) {
  console.log(props);
  return (
    <div className="product_wrapper">
      <div className="product_image_container">
        <img src={props.src} alt="" className="product_image" />
      </div>
      <div className="product_all_info">
        <h2 className="product_name">{props.name}</h2>
        <p className="product_description">{props.description}</p>
        <button className="add_btn">Add to Cart</button>
      </div>
    </div>
  );
}
