import "./MainContent.css";
import { Product } from "../Product/Product";

export function Content() {
  return (
    <div className="main_content">
      <Product />
      <Product />
      <Product />
    </div>
  );
}
