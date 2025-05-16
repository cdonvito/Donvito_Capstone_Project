import { useSelector } from "react-redux";
import {
  useFetchOrderSummaryQuery,
  useFetchProductsAvailableQuery,
} from "./waggleApi";
import { getToken } from "../Users/userSlice";
import { useNavigate, useParams } from "react-router-dom";

function OrderSummary() {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const { order_id } = useParams();

  const {
    data: orderProducts = [],
    error: orderProductsError,
    isLoading: orderProductsLoading,
  } = useFetchOrderSummaryQuery(order_id);

  const {
    data: products = [],
    error: productsError,
    isLoading: productsLoading,
  } = useFetchProductsAvailableQuery();

  const totalAmount = orderProducts.reduce(
    (sum, item) => sum + item.unit_price * item.quantity,
    0
  );

  if (!token) {
    return <p>Please log in to view your orders.</p>;
  }

  // shows loading message
  if (orderProductsLoading || productsLoading) {
    return <p className="Loading">Loading order summary…</p>;
  }

  // shows error message if orderProducts fetch fails
  if (orderProductsError) {
    return (
      <p className="Error">
        Error loading order: {orderProductsError.toString()}
      </p>
    );
  }

  // shows error message if products fetch fails
  if (productsError) {
    return (
      <p className="Error">
        Error loading products: {productsError.toString()}
      </p>
    );
  }

  return (
    <div>
      <h3>Order # {order_id}</h3>
      <div id="orderSummaryList">
        {orderProducts.map((orderProduct) => {
          const product = products.find(
            (product) => product.id === orderProduct.product_id
          );
          return (
            <div key={orderProduct.id} className="orders">
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>Quantity: {orderProduct.quantity}</p>
              <p>Item Price: ${orderProduct.unit_price}</p>
              <p>
                Total Price: $
                {(orderProduct.quantity * orderProduct.unit_price).toFixed(2)}
              </p>
              <button onClick={() => navigate(`/Product/${product.id}`)}>
                View Details
              </button>
            </div>
          );
        })}
      </div>

      <h3>Sum Total: ${totalAmount.toFixed(2)}</h3>

      <button onClick={() => navigate("/Orders")}>Back to Orders</button>
    </div>
  );
}

export default OrderSummary;
