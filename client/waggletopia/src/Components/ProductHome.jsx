import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  useAddUserQtyMutation,
  useCreateUserProductMutation,
  useDeleteUserProductMutation,
  useFetchProductsAvailableQuery,
  useFetchUserProductsQuery,
  useSubtractUserQtyMutation,
} from "./waggleApi";
import { useNavigate } from "react-router-dom";
import { getToken } from "../Users/userSlice";
import tempImg from "../assets/Coming_soon.jpg";
import { imageUrlMap } from "./Images.jsx";

function ProductHome() {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const categories = [
    "Food",
    "Treats",
    "Toys",
    "Food Toppers",
    "Crates",
    "Collars, Harnesses & Leashes",
    "Beds",
    "Bowls",
    "Grooming",
  ];

  const sizes = ["Small", "Medium", "Large", "XLarge"];

  const {
    data: productsObj = {},
    error,
    isLoading,
  } = useFetchProductsAvailableQuery();
  const products = Object.values(productsObj);

  const {
    data: userProducts = [],
    userProductserror,
    userProductsisLoading,
  } = useFetchUserProductsQuery(null, { skip: !token });

  const [productToCart, { error: cartError, isLoading: cartLoading }] =
    useCreateUserProductMutation();

  const [deleteProduct] = useDeleteUserProductMutation();

  const [addQty] = useAddUserQtyMutation();

  const [subQty] = useSubtractUserQtyMutation();

  // // === DYNAMIC IMAGE MAP ===
  // // build a map: filename: placedog URL
  // const imageUrlMap = useMemo(
  //   () =>
  //     products.reduce((map, product, idx) => {
  //       // `product.img_url` is exactly the key your API returned
  //       map[product.img_url] = `https://placedog.net/1024/1024?random=${idx}`;
  //       return map;
  //     }, {}),
  //   [products]
  // );

  // === DYNAMIC IMAGE MAP (Unsplash Source) ===
  // build a map: filename → unsplash random-by-product-name
  const imageUrlMap = useMemo(() => {
    return products.reduce((map, product, idx) => {
      // use product.name as the Unsplash search term
      const query = encodeURIComponent(product.name);
      map[
        product.img_url
      ] = `https://source.unsplash.com/1024x1024/?${query}&sig=${idx}`;
      return map;
    }, {});
  }, [products]);

  async function handleAddtoCart(product_id, name) {
    try {
      const quantity = 1;
      await productToCart({ product_id, quantity }).unwrap();
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

  // console.log("imageUrlMap keys:", Object.keys(imageUrlMap).slice(0, 10));
  // console.log(
  //   "first product.img_url:",
  //   products[0]?.img_url,
  //   "or imgUrl:",
  //   products[0]?.imgUrl
  // );

  return (
    <div>
      <div>
        <h2>Shop By Category</h2>
        <div>
          {categories.map((category) => {
            return <button key={category}>{category}</button>;
          })}
        </div>

        <h2>Shop By Size</h2>
        <div>
          {sizes.map((size) => {
            return <button key={size}>{size}</button>;
          })}
        </div>
      </div>

      <div id="ProductsAvailableList">
        {products.map((product) => {
          const userProduct = userProducts.find(
            (userProduct) => userProduct.product_id === product.id
          );

          const src = imageUrlMap[product.img_url] || tempImg;

          return (
            <div key={product.id} className="ProductsAvailable">
              {/* <img src={tempImg} id="temp_img"></img> */}
              {/* <p>{product.img_url}</p> */}
              {/* <img src={src} alt={product.name} /> */}
              <img
                src={
                  product.img_url
                    ? `https://placedog.net/1024/1024?random=${product.id}`
                    : tempImg
                }
                alt={product.name}
              />
              <p>{product.name}</p>
              <p>{`$${product.price}`}</p>

              <button onClick={() => navigate(`/Product/${product.id}`)}>
                View Details
              </button>
              {token && !userProduct && (
                <button
                  onClick={() =>
                    handleAddtoCart(product.id, product.description)
                  }
                >
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
              {product.stock <= 10 ? <p>Only {product.stock} left</p> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductHome;
