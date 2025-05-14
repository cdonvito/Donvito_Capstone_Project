import { useSelector } from "react-redux";
import { getToken } from "../Users/userSlice";
import {
  useAddUserQtyMutation,
  useCreateUserProductMutation,
  useDeleteUserProductMutation,
  useFetchSingleProductQuery,
  useFetchUserProductsQuery,
  useSubtractUserQtyMutation,
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

  const [productToCart, { error: cartError, isLoading: cartLoading }] =
    useCreateUserProductMutation();

  const {
    data: userProducts = [],
    userProductserror,
    userProductsisLoading,
  } = useFetchUserProductsQuery();

  const [deleteProduct, { error: deleteError, isLoading: deleteLoading }] =
    useDeleteUserProductMutation();

  const [addQty, { error: addQtyError, isLoading: addQtyLoading }] =
    useAddUserQtyMutation();

  const [subQty, { error: subQtyError, isLoading: subQtyLoading }] =
    useSubtractUserQtyMutation();

  async function handleAddtoCart() {
    try {
      await productToCart({ product_id: product.id, quantity: 1 }).unwrap();
      //setSuccessMessage(`${name} was successfully added to cart!`);
    } catch (error) {
      console.log("Error while adding product to cart", error);
    }
  }

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

  const userProduct = userProducts.find(
    (userProduct) => userProduct.product_id === product.id
  );

  console.log("data:", product);

  return (
    <div id="SelectedProduct" key={product.id}>
      {/* <img src={tempImg} id="temp_img"></img> */}
      <div id="SelectedProductImage">
        <img
          src={
            product.img_url
              ? `https://placedog.net/1024/1024?random=${product.id}`
              : tempImg
          }
          alt={product.name}
        />
      </div>
      <div id="SelectedProductDetails">
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{`Size: ${product.size}`}</p>
        <p>{`Includes: ${product.includes}`}</p>
        <p>{`Category: ${product.category}`}</p>
        <p>{`$${product.price}`}</p>
        {token && !userProduct && (
          <button onClick={() => handleAddtoCart(product.id, product.name)}>
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
    </div>
  );
}

export default ProductPage;
