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
import { useNavigate } from "react-router-dom";
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

  const [deleteProduct] = useDeleteUserProductMutation();

  const [addQty] = useAddUserQtyMutation();

  const [subQty] = useSubtractUserQtyMutation();

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
        <h2 className="Loading">Loading...</h2>
      </section>
    );
  }

  // Show an error message if the fetch failed
  if (error) {
    return (
      <section>
        <h2 className="Error">Error, please try again later.</h2>
      </section>
    );
  }

  if (productsLoading) {
    return (
      <section>
        <h2 className="Loading">Products Loading...</h2>
      </section>
    );
  }

  if (productsError) {
    return (
      <section>
        <h2 className="Error">Error, fetching proudcts. Please try again.</h2>
      </section>
    );
  }

  if (checkoutLoading) {
    return (
      <div>
        <h2 className="Loading">Checkout Loading...</h2>
      </div>
    );
  }

  if (checkoutError) {
    return (
      <div>
        <h2 className="Error">Error Checking out. Please try again.</h2>
      </div>
    );
  }

  const cartProducts = userProducts
    .map((userProduct) => {
      const prod = products.find((p) => p.id === userProduct.product_id);
      if (!prod) return null;
      return {
        id: prod.id,
        name: prod.name,
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
    } catch (deleteError) {
      console.log("Error while deleting your product", deleteError);
    }
  }

  async function handleQtyAddition(id) {
    try {
      await addQty({ id: id, quantity: 1 }).unwrap();
    } catch (addQtyError) {
      console.log("Error while adding Qty of Item", addQtyError);
    }
  }

  async function handleQtySubtraction(id) {
    try {
      await subQty({ id: id, quantity: 1 }).unwrap();
    } catch (subQtyError) {
      console.log("Error while subtracting Qty of Item", subQtyError);
    }
  }

  async function handleCheckout() {
    try {
      await checkout().unwrap();
    } catch (checkoutError) {
      console.log("Error while checking out", checkoutError);
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
    <div>
      <div id="UserProductsList">
        {cartProducts.map((product) => {
          return (
            <div key={product.id} className="UserProduct">
              <div className="UserProductImage">
                <img
                  src={
                    product.img_url
                      ? `https://placedog.net/1024/1024?random=${product.id}`
                      : tempImg
                  }
                  alt={product.name}
                />
              </div>
              <div className="UserProductDetails">
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>Unit Price: {`$${product.price}`}</p>
                <p>
                  Total: {`$${(product.price * product.quantity).toFixed(2)}`}
                </p>
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
            </div>
          );
        })}
      </div>
      <div id="CartSummary">
        <h2 id="SumText">Sum Total: ${totalAmount.toFixed(2)}</h2>
        <button onClick={() => handleCheckout()} id="CheckoutBtn">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
