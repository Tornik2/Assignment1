import "./product.css";

const fetchProduct = async (productId) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!response.ok) {
      throw new Error("Something went wrong with fetching Products");
    }
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error("Products not found!");
    }

    return data;
  } catch (err) {
    console.log(err.message);
  }
};
export default async function Product({ params }) {
  const { productId } = params;
  const product = await fetchProduct(productId);

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
