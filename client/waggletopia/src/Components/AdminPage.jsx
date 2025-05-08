import { useState, useEffect } from "react";
import { useCreateProductMutation } from "./waggleApi";
import { useSelector } from "react-redux";
import { getToken } from "../Users/userSlice";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const [createProduct, { data, error, isLoading, isSuccess }] =
    useCreateProductMutation();

  const [prodInfo, setProdInfo] = useState({
    name: "",
    description: "",
    img_url: "",
    size: "",
    includes: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (isSuccess) {
      setProdInfo({
        name: "",
        description: "",
        img_url: "",
        size: "",
        includes: "",
        category: "",
        price: "",
        stock: "",
      });
    }
  }, [isSuccess, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const product = await createProduct(prodInfo).unwrap();
      console.log("Created: ", product);
    } catch (error) {
      console.log("Error while creating the product", error);
    }
  }

  async function handleChange(event) {
    const { name, value } = event.target;

    setProdInfo((data) => ({
      ...data,
      [name]: value,
    }));
    //console.log(prodInfo);
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
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            placeholder="Product ID"
            name="product_id"
            disabled
          />
        </label>
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
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="size">
          Size:
          <select id="size" name="size" defaultValue="Small" onChange={handleChange}>
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
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="category">
          Category
          <select id="category" name="category" defaultValue="Food" onChange={handleChange}>
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
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Stock
          <input
            type="number"
            placehole="stock"
            name="stock"
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default AdminPage;
