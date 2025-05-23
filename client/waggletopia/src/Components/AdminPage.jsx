import { useState, useEffect } from "react";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useFetchProductsQuery,
  useFetchUserQuery,
  useFetchUsersQuery,
  useModifyProductMutation,
} from "./waggleApi";
import { useSelector } from "react-redux";
import { getToken } from "../Users/userSlice";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const [createProduct, { isSuccess }] = useCreateProductMutation();
  const [createSuccessMsg, setCreateSuccessMsg] = useState("");

  const [modifyProduct, { isSuccess: modifySuccess }] =
    useModifyProductMutation();
  const [modifySuccessMsg, setModifySuccessMsg] = useState("");

  const {
    data: userObj = {},
    error: usersError,
    isLoading: usersLoading,
  } = useFetchUsersQuery();

  const {
    data: prodObj = {},
    error: productsError,
    isLoading: productsLoading,
  } = useFetchProductsQuery();

  const [deleteProduct] = useDeleteProductMutation();

  const { data: user = {} } = useFetchUserQuery(null, {
    skip: !token,
    refetchOnMountOrArgChange: true,
  });

  // Starts with an empty form
  const emptyForm = {
    name: "",
    description: "",
    img_url: "",
    size: "Small",
    includes: "",
    category: "Food",
    price: "",
    stock: "",
  };

  const [prodInfo, setProdInfo] = useState(emptyForm);

  const [editingId, setEditingId] = useState(null);

  const [seeUsers, setSeeUsers] = useState(false);
  const [seeProducts, setSeeProducts] = useState(false);

  // Resets the form to blank after successful product creation or navigation
  useEffect(() => {
    if (isSuccess) {
      setProdInfo({
        name: "",
        description: "",
        img_url: "",
        size: "Small",
        includes: "",
        category: "Food",
        price: "",
        stock: "",
      });
      setCreateSuccessMsg("Product successfully created!");
    }
  }, [isSuccess, navigate]);

  // Resets the form to blank after successful product modification or navigation
  useEffect(() => {
    if (modifySuccess) {
      setEditingId(null);

      setProdInfo({
        name: "",
        description: "",
        img_url: "",
        size: "Small",
        includes: "",
        category: "Food",
        price: "",
        stock: "",
      });
      setModifySuccessMsg("Product successfully modified!");
    }
  }, [modifySuccess, navigate]);

  // Handles creating a new product after submitting the create product form
  async function handleCreate(event) {
    event.preventDefault();
    try {
      const product = await createProduct(prodInfo).unwrap();
      console.log("Created: ", product);
    } catch (error) {
      console.log("Error while creating the product", error);
    }
  }

  // Handles modifying a product aftet submitting the form to modify
  async function handleUpdate(event) {
    event.preventDefault();
    try {
      const product = await modifyProduct({
        id: editingId,
        ...prodInfo,
      }).unwrap();
      console.log("Updated: ", product);
    } catch (error) {
      console.log("Error while modifying the product", error);
    }
  }

  // Delete product after user confirms they want to delete it
  async function handleDeletion(product) {
    try {
      if (
        !window.confirm(
          `Are you sure you want to delete ${product.description}?`
        )
      )
        return;

      await deleteProduct(product.id).unwrap();
    } catch (error) {
      console.log("Error while deleting product", error);
    }
  }

  // Updates Product info as the form is filled out
  async function handleChange(event) {
    const { name, value } = event.target;

    setProdInfo((data) => ({
      ...data,
      [name]: value,
    }));
  }

  // Copies the data from the product being edited into the form
  function handleEditClick(product) {
    setEditingId(product.id);
    setProdInfo({
      name: product.name,
      description: product.description,
      img_url: product.img_url,
      size: product.size,
      includes: product.includes,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });
    setSeeProducts(false);
    window.scrollTo({ top: 500, behavior: "smooth" });
  }

  // Handles when canceling modifying a product
  function handleCancel() {
    setEditingId(null);
    setProdInfo(emptyForm);
  }

  //Handles when clicking see products
  function handleSeeProducts() {
    if (!seeProducts) {
      setSeeProducts(true);
      setSeeUsers(false);
      setCreateSuccessMsg("");
      setModifySuccessMsg("");
    } else if (seeProducts) {
      setSeeProducts(false);
      setCreateSuccessMsg("");
      setModifySuccessMsg("");
    }
  }

  function handleSeeUsers() {
    if (!seeUsers) {
      setSeeUsers(true);
      setSeeProducts(false);
      setCreateSuccessMsg("");
      setModifySuccessMsg("");
    } else if (seeUsers) {
      setSeeUsers(false);
      setCreateSuccessMsg("");
      setModifySuccessMsg("");
    }
  }

  if (!token || !user.is_admin) {
    return (
      <div>
        <p>Unauthorized</p>
      </div>
    );
  }

  if (usersError) {
    return <p className="Error">Unable to load users. Please try again</p>;
  }

  if (usersLoading) {
    return <p className="Loading">Loading Users...</p>;
  }

  if (productsError) {
    return <p className="Error">Unable to load products. Please try again</p>;
  }

  if (productsLoading) {
    return <p className="Loading">Loading Products...</p>;
  }

  const users = Object.values(userObj);
  const products = Object.values(prodObj);

  return (
    <div>
      <h2>Admin Page</h2>
      {createSuccessMsg ? <p className="Success">{createSuccessMsg}</p> : ""}
      {modifySuccessMsg ? <p className="Success">{modifySuccessMsg}</p> : ""}
      <form id="AdminForm" onSubmit={editingId ? handleUpdate : handleCreate}>
        <label>
          Name
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={prodInfo.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description
          <textarea
            placeholder="Description"
            name="description"
            value={prodInfo.description}
            onChange={(e) => {
              handleChange(e);
              autoGrow(e.target);
            }}
            required
          ></textarea>
        </label>
        <label>
          Image URL:
          <input
            type="text"
            placeholder="Image URL"
            name="img_url"
            value={prodInfo.img_url}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="size">
          Size:
          <select
            id="size"
            name="size"
            value={prodInfo.size}
            onChange={handleChange}
          >
            <option value="" disabled>
              — Select a Size —
            </option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="XLarge">XLarge</option>
          </select>
        </label>
        <label>
          Includes
          <input
            type="text"
            placeholder="Includes"
            name="includes"
            value={prodInfo.includes}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="category">
          Category
          <select
            id="category"
            name="category"
            value={prodInfo.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              — Select a Category —
            </option>
            <option value="Food">Food</option>
            <option value="Treats">Treats</option>
            <option value="Toys">Toys</option>
            <option value="Food Toppers">Food Toppers</option>
            <option value="Crates">Crates</option>
            <option value="Collars, Harnesses & Leashes">
              Collars, Harnesses & Leashes
            </option>
            <option value="Beds">Beds</option>
            <option value="Bowls">Bowls</option>
            <option value="Grooming">Grooming</option>
          </select>
        </label>
        <label>
          Price: $
          <input
            type="number"
            placeholer="Price"
            name="price"
            min="0"
            step="0.01"
            value={prodInfo.price}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Stock
          <input
            type="number"
            placehole="stock"
            name="stock"
            value={prodInfo.stock}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">
          {editingId ? "Update Product" : "Create Product"}
        </button>
        {editingId && (
          <button type="button" onClick={() => handleCancel()}>
            Cancel
          </button>
        )}
      </form>
      <div id="AdminDataToggle">
        {!seeProducts ? (
          <button onClick={() => handleSeeProducts()}>
            View/Edit Products
          </button>
        ) : (
          <button onClick={() => handleSeeProducts()}>
            Done Editing Products
          </button>
        )}

        {!seeUsers ? (
          <button onClick={() => handleSeeUsers()}>See Users</button>
        ) : (
          <button onClick={() => handleSeeUsers()}>Hide Users</button>
        )}
      </div>

      <div id="UsersANDProductsList">
        {seeProducts ? (
          <div id="AdminProductsList">
            {products.map((product) => {
              return (
                <div key={product.id} className="AdminProduct">
                  <p>Name: {product.name}</p>
                  <p>Description: {product.description}</p>
                  <p>Image URL: {product.img_url}</p>
                  <p>Size: {product.size}</p>
                  <p>Includes: {product.includes}</p>
                  <p>Category: {product.category}</p>
                  <p>Price: {product.price}</p>
                  <p>Stock: {product.stock}</p>
                  <div>
                    <button onClick={() => handleEditClick(product)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeletion(product)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {seeUsers ? (
          <div id="AdminUsersList">
            {users.map((user) => {
              return (
                <div key={user.id} className="AdminUser">
                  <p>Username: {user.username}</p>
                  <p>Name: {user.name}</p>
                  <p>
                    Email: {user.email_address ? user.email_address : "N/A"}
                  </p>
                  <p>Mailing Address: {user.mailing_address}</p>
                  <p>
                    Phone Number:{" "}
                    {user.phone_number ? user.phone_number : "N/A"}
                  </p>
                  <p>Is Admin: {user.is_admin ? "Yes" : "No"}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminPage;
