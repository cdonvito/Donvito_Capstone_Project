import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Users/userSlice";
import { useRegisterMutation } from "./waggleApi";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");
  const [loginCred, setLoginCred] = useState({
    username: "",
    password: "",
    name: "",
    email_address: "",
    mailing_address: "",
    phone_number: "",
    billing_address: "",
  });
  const [
    userRegister,
    { error: registerError, isLoading: registerLoading, isSuccess },
  ] = useRegisterMutation();

  // Resets email and password fields after a successful Login
  useEffect(() => {
    if (isSuccess) {
      setLoginCred({
        username: "",
        password: "",
        name: "",
        email_address: "",
        mailing_address: "",
        phone_number: "",
        billing_address: "",
      });
      setSuccessMessage(`Your have successfully created your account.`)
      setTimeout(() => navigate("/"), 1500);
    }
  }, [isSuccess, navigate]);

  // Handles login upon submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userRegister(loginCred).unwrap();
      dispatch(setUser({ token: response.token, user: response.user }));
      localStorage.setItem("token", response.token);
    } catch (error) {
      console.log({ error: "Error While registering" });
    }
  };

  // Updates the values of the email and password as the user enters their info
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginCred((data) => ({
      ...data,
      [name]: value,
    }));
  };

  if (registerLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  // Show an error message if the fetch failed
  if (registerError) {
    return (
      <section>
        <h2>Error, please try again later.</h2>
      </section>
    );
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Name
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          E-mail Address
          <input
            type="email"
            placeholder="email"
            name="email_address"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Mailing Address
          <input
            type="address"
            placeholder="mailing address"
            name="mailing_address"
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            placeholder="phone number"
            name="phone_number"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Billing Address
          <input
            type="text"
            placehole="billing address"
            name="billing_address"
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Register</button>
        
      </form>
    </div>
  );
}

export default Register;
