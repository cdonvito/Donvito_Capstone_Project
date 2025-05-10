import { useSelector } from "react-redux";
import {
  useAddUserQtyMutation,
  useDeleteUserProductMutation,
  useFetchProductsAvailableQuery,
  useFetchUserProductsQuery,
  useSubtractUserQtyMutation,
  useUserCheckoutMutation,
} from "./waggleApi";
import { getToken } from "../Users/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
  const token = useSelector(getToken);
  const navigate = useNavigate();

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

  const [addQty, { error: addQtyError, isLoading: addQtyLoading }] =
    useAddUserQtyMutation();

  const [subQty, { error: subQtyError, isLoading: subQtyLoading }] =
    useSubtractUserQtyMutation();

  const [
    checkout,
    {
      error: checkoutError,
      isLoading: checkoutLoading,
      isSuccess: checkoutSuccess,
    },
  ] = useUserCheckoutMutation();

  const [successMessage, setSuccessMessage] = useState("");

  // Checkout success message
  useEffect(() => {
    if (checkoutSuccess) {
      setSuccessMessage(`You have successfully checked out.`);
      setTimeout(() => navigate("/"), 3000);
    }
  }, [checkoutSuccess, navigate]);

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

  const cartProducts = userProducts
    .map((userProduct) => {
      const prod = products.find((p) => p.id === userProduct.product_id);
      if (!prod) return null;
      return {
        id: prod.id,
        description: prod.description,
        price: prod.price,
        img_url: prod.img_url,
        stock: prod.stock,
        quantity: userProduct.quantity,
        userProductId: userProduct.id,
      };
    })
    .filter(Boolean);

  if (!cartProducts.length) {
    if (checkoutSuccess) {
      return (
        <div>
          <h2 className="Success">{successMessage}</h2>
        </div>
      );
    }

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

  async function handleDeletion(userProductId) {
    try {
      await deleteProduct(userProductId).unwrap();
    } catch (error) {
      console.log("Error while deleting your account", error);
    }
  }

  async function handleQtyAddition(id) {
    try {
      await addQty({ id: id, quantity: 1 }).unwrap();
    } catch (error) {
      console.log("Error while adding Qty of Item", error);
    }
  }

  async function handleQtySubtraction(id) {
    try {
      await subQty({ id: id, quantity: 1 }).unwrap();
    } catch (error) {
      console.log("Error while subtracting Qty of Item", error);
    }
  }

  async function handleCheckout() {
    try {
      await checkout().unwrap();
    } catch (error) {
      console.log("Error while checking out", error);
    }
  }

  if (!token) {
    return (
      <div>
        <p>Please log in to view your cart.</p>
      </div>
    );
  }

  return (
    <div id="UserProductsList">
      {cartProducts.map((product) => {
        return (
          <div key={product.id} className="UserProduct">
            <p>Name: {product.description}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Unit Price: {`$${product.price}`}</p>
            <p>Total: {`$${(product.price * product.quantity).toFixed(2)}`}</p>
            <div>
              <button
                onClick={() => handleQtySubtraction(product.userProductId)}
                disabled={product.quantity <= 1}
              >
                -
              </button>

              {` ${product.quantity} `}

              <button
                onClick={() => handleQtyAddition(product.userProductId)}
                disabled={product.stock <= product.quantity}
              >
                +
              </button>
            </div>

            <button onClick={() => handleDeletion(product.userProductId)}>
              Delete
            </button>
          </div>
        );
      })}
      <h2>Sum Total: ${totalAmount.toFixed(2)}</h2>
      <button onClick={() => handleCheckout()}>Checkout</button>
    </div>
  );
}

export default Cart;
