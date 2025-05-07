import { useSelector } from "react-redux";
import { useFetchUserProductsQuery } from "./waggleApi";
import { getToken } from "../Users/userSlice";

function Cart() {
  const token = useSelector(getToken);
    const { data: userProducts = {} , error, isLoading } = useFetchUserProductsQuery();
    
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

  return (
    <div id="UserProductsList">
    {userProducts.map((product) => {
      return (
        <div key={product.id} className="UserProduct">
          <p>{product.product_id}</p>
          <p>{product.quantity}</p>
          <p>{`$${product.user_id}`}</p>
        </div>
      );
    })}
  </div>
  )
 };
 
 export default Cart;