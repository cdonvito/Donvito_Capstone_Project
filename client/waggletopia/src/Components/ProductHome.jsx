import { useProductsAvailableQuery } from "./waggleApi";
import { useNavigate } from "react-router-dom";

function ProductHome() {
  const categories = [
    "Food",
    "Treats",
    "Toys",
    "Food Toppers",
    "Crates",
    "Collars, Harnesses & Leashes",
    "Beds",
    "Bowls",
    "Grooming",
  ];

  const sizes = ["Small", "Medium", "Large", "XLarge"];

  const { data: productsObj = {}, error, isLoading } = useProductsAvailableQuery();
  const products = Object.values(productsObj);
  console.log(products);

  return (
    <div>
      <div>
        <h2>Shop By Category</h2>
        <div>
          {categories.map((category) => {
            return <button key={category}>{category}</button>;
          })}
        </div>

        <h2>Shop By Size</h2>
        <div>
          {sizes.map((size) => {
            return <button key={size}>{size}</button>;
          })}
        </div>
      </div>

      <div>
        {products.map((product) => {
          return (
            <div key={product.id} className="ProductsAvailableList">
              <p>{product.img_url}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductHome;
