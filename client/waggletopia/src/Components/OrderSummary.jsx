
import { useDispatch } from "react-redux";
import { useFetchOrderSummaryQuery } from "./waggleApi";
import { getToken } from "../Users/userSlice";

function OrdersPage() {
  const token = useDispatch(getToken);

  const {
    data: orderProducts = [],
    error: orderProductsError,
    isLoading: orderProductsLoading,
  } = useFetchOrderSummaryQuery();

  return (
    <div id="orders">
      {orders.map((order) => {
        const date = new Date(order.order_date);
        const formattedDate = date.toLocaleDateString();
        return (
          <div key={order.id} className="orders">
            <p>ID: {order.id}</p>
            <p>Date: {formattedDate}</p>

            <button onClick={() => navigate(`/Product/${product.id}`)}>
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default OrdersPage;

