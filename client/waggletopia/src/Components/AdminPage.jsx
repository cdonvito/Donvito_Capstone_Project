import { useState, useEffect } from "react";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useFetchProductsQuery,
  useFetchUsersQuery,
  useModifyProductMutation,
} from "./waggleApi";
import { useSelector } from "react-redux";
import { getToken } from "../Users/userSlice";
import { useNavigate, useParams } from "react-router-dom";

function AdminPage() {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const [createProduct, { data, error, isLoading, isSuccess }] =
    useCreateProductMutation();

  const [
    modifyProduct,
    {
      data: modifyData,
      error: modifyError,
      isLoading: modifyLoading,
      isSuccess: modifySuccess,
    },
  ] = useModifyProductMutation();

  const {
    data: userObj = {},
    error: usersError,
    isLoading: usersLoading,
  } = useFetchUsersQuery();
  const users = Object.values(userObj);

  const {
    data: prodObj = {},
    error: productsError,
    isLoading: productsLoading,
  } = useFetchProductsQuery();
  const products = Object.values(prodObj);

  const [
    deleteProduct,
    {
      isLoading: deletionLoading,
      error: deletionError,
      isSuccess: deletionSuccess,
    },
  ] = useDeleteProductMutation();

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
    }
  }, [isSuccess, navigate]);

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
    }
  }, [modifySuccess, navigate]);

  async function handleCreate(event) {
    event.preventDefault();
    try {
      const product = await createProduct(prodInfo).unwrap();
      console.log("Created: ", product);
    } catch (error) {
      console.log("Error while creating the product", error);
    }
  }

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

  async function handleDeletion(product) {
    try {
      if (!window.confirm(`Are you sure you want to delete ${product.description}?`))
        return;

      await deleteProduct(product.id).unwrap();
    } catch (error) {
      console.log("Error while deleting product", error);
    }
  }

  async function handleChange(event) {
    const { name, value } = event.target;

    setProdInfo((data) => ({
      ...data,
      [name]: value,
    }));
  }

  function handleEditClick(product) {
    setEditingId(product.id);
    setProdInfo({
      description: product.description,
      img_url: product.img_url,
      size: product.size,
      includes: product.includes,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });
  }

  function handleCancel() {
    setEditingId(null);
    setProdInfo(emptyForm);
  }

  if (!token) {
    return (
      <div>
        <p>Unauthorized</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Admin Page</h2>
      <form onSubmit={editingId ? handleUpdate : handleCreate}>
        {/* <label>
          Name
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            onChange={handleChange}
            required
          />
        </label> */}
        <label>
          Description
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={prodInfo.description}
            onChange={handleChange}
            required
          ></input>
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

      {users.map((user) => {
        return (
          <div key={user.id} className="User">
            <p>Username: {user.username}</p>
            <p>Email: {user.email_address}</p>
            <p>Is Admin: {user.is_admin ? "Yes" : "No"}</p>
          </div>
        );
      })}

      {products.map((product) => {
        return (
          <div key={product.id} className="User">
            <p>Description: {product.description}</p>
            <p>Image URL: {product.img_url}</p>
            <p>Size: {product.size}</p>
            <p>Includes: {product.includes}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <div>
              <button onClick={() => handleEditClick(product)}>Edit</button>
              <button onClick={() => handleDeletion(product)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdminPage;
