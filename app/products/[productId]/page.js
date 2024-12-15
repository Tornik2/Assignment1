import "./product.css";
import { supabase } from "../../../utils/supabase/server";

export default async function Product({ params }) {
  const { productId } = params;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId);

  if (error) {
    console.log("error: ", error);
    return;
  }

  const product = data[0];

  return (
    <>
      <div className="product__wrapper max-width">
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
