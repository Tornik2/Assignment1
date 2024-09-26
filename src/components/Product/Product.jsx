import "./Product.css";

export function Product(props) {
  console.log(props);
  return (
    <div className="product_wrapper">
      <div className="product_image_container">
        <img src="/assets/1.png" alt="" className="product_image" />
      </div>
      <div className="product_all_info">
        <h2 className="product_name">Saxeli</h2>
        <p className="product_description">
          AGWEr sassf asffsdddasffsdddasffsdddasffsdddasffsdddasffsddd asffsddd
          asffsddd asffsddd shhuslkdjf; nameisme iunsn
        </p>
        <button className="add_btn">Add to Cart</button>
      </div>
    </div>
  );
}
