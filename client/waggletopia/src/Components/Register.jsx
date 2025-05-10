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
      setSuccessMessage(`Your have successfully created your account.`);
      setTimeout(() => navigate("/"), 2000);
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

  return (
    <div>
      {registerLoading ? (
        <h2 className="Loading">Loading...</h2>
      ) : (
        <>
          <h2 id="RegisterHeader">Register</h2>
          {successMessage != "" ? (
            <h2 className="Success">{successMessage}</h2>
          ) : (
            ""
          )}
          <p id="RegisterRequired">* Indicates a required field</p>
          <form onSubmit={handleSubmit} id="RegisterForm">
            <label>
              Username*
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Password*
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Name*
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
                placeholder="Email"
                name="email_address"
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Mailing Address*
              <input
                type="address"
                placeholder="Mailing address"
                name="mailing_address"
                onChange={handleChange}
                required
              ></input>
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                placeholder="Phone number"
                name="phone_number"
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Billing Address
              <input
                type="text"
                placeholder="Billing address"
                name="billing_address"
                onChange={handleChange}
              ></input>
            </label>
            <button type="submit" id="RegisterButton">
              Register
            </button>
          </form>
          {registerError && (
            <p className="Error">
              Registration failed. Please verify your information
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Register;
