import { useSelector } from "react-redux";
import { getToken } from "../Users/userSlice";
import {
  useCreateUserProductMutation,
  useFetchSingleProductQuery,
} from "./waggleApi";
import { useParams } from "react-router-dom";
import tempImg from "../assets/Coming_soon.jpg";

function ProductPage() {
  const token = useSelector(getToken);
  const { id } = useParams();
  const {
    data: product = {},
    error,
    isLoading,
  } = useFetchSingleProductQuery(id);
  //const product = Object.values(productObj)

  const [productToCart, { error: cartError, isLoading: cartLoading }] =
    useCreateUserProductMutation();

  async function handleAddtoCart() {
    try {
      await productToCart({ product_id: product.id, quantity: 1 }).unwrap();
      //setSuccessMessage(`${name} was successfully added to cart!`);
    } catch (error) {
      console.log("Error while adding product to cart", error);
    }
  }

  console.log("data:", product);

  return (
    <div id="ProductsAvailableList">
      <div key={product.id} className="ProductsAvailable">
        <img src={tempImg} id="temp_img"></img>
        {/* <p>{product.img_url}</p> */}
        <p>{product.description}</p>
        <p>{`Size: ${product.size}`}</p>
        <p>{`Includes: ${product.includes}`}</p>
        <p>{`Category: ${product.category}`}</p>
        <p>{`$${product.price}`}</p>
        {product.stock <= 10 ? (<p>Only {product.stock} left</p>) : ""}
        {token ? (
          <button
            onClick={() => handleAddtoCart(product.id, product.description)}
          >
            Add to Cart
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProductPage;
