import { useSelector } from "react-redux";
import {
  useDeleteUserProductMutation,
  useFetchProductsAvailableQuery,
  useFetchUserProductsQuery,
} from "./waggleApi";
import { getToken } from "../Users/userSlice";

function Cart() {
  const token = useSelector(getToken);
  const {
    data: userProducts = [],
    error,
    isLoading,
  } = useFetchUserProductsQuery();
  const {
    data: products = [],
    error: productsError,
    isLoading: productsLoading,
  } = useFetchProductsAvailableQuery();

  const [deleteProduct, { error: deleteError, isLoading: deleteLoading }] =
    useDeleteUserProductMutation();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  // Show an error message if the fetch failed
  if (error) {
    return (
      <section>
        <h2>Error, please try again later.</h2>
      </section>
    );
  }

  console.log(userProducts);

  const cartProducts = userProducts.map((userProduct) => {
    const prodList = products.find((p) => p.id === userProduct.product_id);
    return prodList ? { ...prodList, quantity: userProduct.quantity } : null;
  });

  console.log(cartProducts);

  if (!cartProducts.length) {
    return (
      <section>
        <h2>Your cart is empty.</h2>
      </section>
    );
  }

  const totalAmount = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function handleDeletion(id) {
    try {
      await deleteProduct(id).unwrap();
      //setSuccessMessage(`Your cart item has successfully been deleted.`);
    } catch (error) {
      console.log("Error while deleting your account", error);
    }
  }

  return (
    <div id="UserProductsList">
      {cartProducts.map((product) => {
        return (
          <div key={product.id} className="UserProduct">
            <p>Name: {product.description}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Unit Price: {`$${product.price}`}</p>
            <p>Total: {`$${product.price * product.quantity}`}</p>
            <button onClick={() => handleDeletion(product.id)}>Delete</button>
          </div>
        );
      })}
      <h2>Sum Total: ${totalAmount.toFixed(2)}</h2>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
