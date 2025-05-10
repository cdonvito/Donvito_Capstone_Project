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

  console.log(orderProducts);

  const {
    data: products = [],
    error: productsError,
    isLoading: productsLoading,
  } = useFetchProductsAvailableQuery();

  console.log(products);

  if (!token) {
    return <p>Please log in to view your orders.</p>;
  }

  if (orderProductsLoading || productsLoading) {
    return <p>Loading order summary…</p>;
  }
  if (orderProductsError) {
    return <p>Error loading order: {orderProductsError.toString()}</p>;
  }
  if (productsError) {
    return <p>Error loading products: {productsError.toString()}</p>;
  }

  return (
    <div id="orders">
      <h2>Order # {order_id}</h2>
      {orderProducts.map((orderProduct) => {
        const product = products.find((product) => product.id === orderProduct.product_id);
        return (
          <div key={orderProduct.id} className="orders">
              <p>Name: {product.description}</p>
              <p>Item Price: {orderProduct.unit_price}</p>
              <p>Quantity: {orderProduct.quantity}</p>
              <p>Total Price: {orderProduct.quantity * orderProduct.unit_price}</p>
              <button onClick={() => navigate(`/Product/${product.id}`)}>
                View Details
              </button> : "";
          </div>
        );
      })}
    </div>
  )
}

export default OrderSummary;
