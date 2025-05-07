import { useCreateUserProductMutation, useFetchProductsAvailableQuery } from "./waggleApi";
import { useNavigate } from "react-router-dom";

function ProductHome() {
  const navigate = useNavigate();
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

  const { data: productsObj = {}, error, isLoading } = useFetchProductsAvailableQuery();
  const products = Object.values(productsObj);
  console.log(products);

  const [productToCart, { error: cartError, isLoading: cartLoading }] = useCreateUserProductMutation();

  async function handleAddtoCart(product_id, name) {
    try {
      const quantity = 1;
      console.log(product_id);
      console.log(name);
      await productToCart({ product_id, quantity }).unwrap();
      //setSuccessMessage(`${name} was successfully added to cart!`);
    } catch (error) {
      console.log("Error while adding product to cart", error);
    }
  };

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

      <div id="ProductsAvailableList">
        {products.map((product) => {
          return (
            <div key={product.id} className="ProductsAvailable">
              <p>{product.img_url}</p>
              <p>{product.description}</p>
              <p>{`$${product.price}`}</p>
              <button onClick={() => navigate(``)}>View Details</button>
              <button onClick={() => handleAddtoCart(product.id, product.description)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductHome;
