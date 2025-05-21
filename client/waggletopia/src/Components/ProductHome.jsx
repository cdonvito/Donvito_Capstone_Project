import { useSelector } from "react-redux";
import {
  useAddUserQtyMutation,
  useCreateUserProductMutation,
  useDeleteUserProductMutation,
  useFetchProductsAvailableQuery,
  useFetchUserProductsQuery,
  useSubtractUserQtyMutation,
} from "./waggleApi";
import { useNavigate } from "react-router-dom";
import { getToken } from "../Users/userSlice";
import tempImg from "../assets/Coming_soon.jpg";

function ProductHome() {
  const token = useSelector(getToken);
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

  const {
    data: productsObj = {},
    error,
    isLoading,
  } = useFetchProductsAvailableQuery();
  const products = Object.values(productsObj);

  const {
    data: userProducts = [],
    userProductserror,
    userProductsisLoading,
  } = useFetchUserProductsQuery(null, { skip: !token });

  const [productToCart] = useCreateUserProductMutation();
  const [deleteProduct] = useDeleteUserProductMutation();
  const [addQty] = useAddUserQtyMutation();
  const [subQty] = useSubtractUserQtyMutation();

  // Handles adding a product to the cart
  async function handleAddtoCart(product_id, name) {
    try {
      const quantity = 1;
      await productToCart({ product_id, quantity }).unwrap();
    } catch (error) {
      console.log("Error while adding product to cart", error);
    }
  }

  // Handles deleting a product from the cart
  async function handleDeletion(userProductId) {
    try {
      await deleteProduct(userProductId).unwrap();
    } catch (error) {
      console.log("Error while deleting your account", error);
    }
  }

  // Handles adding qty of an exising userproduct to the cart
  async function handleQtyAddition(id) {
    try {
      await addQty({ id: id, quantity: 1 }).unwrap();
    } catch (error) {
      console.log("Error while adding Qty of Item", error);
    }
  }

  // Handles subtracting qty of an exising userproduct to the cart
  async function handleQtySubtraction(id) {
    try {
      await subQty({ id: id, quantity: 1 }).unwrap();
    } catch (error) {
      console.log("Error while subtracting Qty of Item", error);
    }
  }

  if (isLoading || userProductsisLoading) {
    return <p className="Loading">Loading Products...</p>;
  }

  if (error || userProductserror) {
    return <p className="Error">Error Loading Products</p>;
  }

  return (
    <div>
      <h2>Shop Our One of a Kind Dog Products</h2>
      {/* <div>
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
      </div> */}

      <div id="ProductsAvailableList">
        {products.map((product) => {
          const userProduct = userProducts.find(
            (userProduct) => userProduct.product_id === product.id
          );

          return (
            <div key={product.id} className="ProductsAvailable">
              <img
                className="ProductImage"
                src={
                  product.img_url
                    ? `https://placedog.net/1024/1024?random=${product.id}`
                    : tempImg
                }
                alt={product.name}
              />
              <p>{product.name}</p>
              <p>{`$${product.price.toFixed(2)}`}</p>

              <button onClick={() => navigate(`/Product/${product.id}`)}>
                View Details
              </button>
              {token && !userProduct && (
                <button
                  onClick={() =>
                    handleAddtoCart(product.id, product.description)
                  }
                >
                  Add to Cart
                </button>
              )}
              {token && userProduct && (
                <div>
                  <div>
                    <button
                      onClick={() => handleQtySubtraction(userProduct.id)}
                      disabled={userProduct.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{userProduct.quantity}</span>
                    <button
                      onClick={() => handleQtyAddition(userProduct.id)}
                      disabled={product.stock <= userProduct.quantity}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button onClick={() => handleDeletion(userProduct.id)}>
                      Remove from Cart
                    </button>
                  </div>
                </div>
              )}
              {product.stock <= 10 ? <p>Only {product.stock} left!</p> : ""}
            </div>
          );
        })}
      </div>
      <div className="ScrollToTopBtn">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default ProductHome;
