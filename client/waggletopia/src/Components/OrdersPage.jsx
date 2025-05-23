import { useSelector } from "react-redux";
import { useFetchOrderHistoryQuery } from "./waggleApi";
import { getToken } from "../Users/userSlice";
import { useNavigate } from "react-router-dom";

function OrdersPage() {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const {
    data: orders = [],
    error: ordersError,
    isLoading: ordersLoading,
  } = useFetchOrderHistoryQuery();

  if (!token) {
    return <p className="Error">Please log in to view your orders.</p>;
  }

  // Shows the user that they don't have any current orders if they have not previously checked a cart out
  if (orders.length === 0) {
    return <p className="Success">You do not currently have any orders</p>;
  }

  if (ordersLoading) {
    return <p className="Loading">Order Loading...</p>;
  }

  if (ordersError) {
    return <p className="Error">Error loading your orders. Please try again</p>;
  }

  return (
    <div className="ordersList">
      {orders.map((order) => {
        // getting date into the right format
        const date = new Date(order.order_date);
        const formattedDate = date.toLocaleDateString();
        return (
          <div key={order.id} className="orderOverview">
            <p>Order # {order.id}</p>
            <p>Order Date: {formattedDate}</p>

            <button onClick={() => navigate(`/Orders/${order.id}`)}>
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default OrdersPage;
