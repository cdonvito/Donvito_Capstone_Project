import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Users/userSlice";
import { useLoginMutation } from "./waggleApi";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const [userLogin, { error: loginError, isLoading: loginLoading, isSuccess }] =
    useLoginMutation();

  // Resets email and password fields after a successful Login
  useEffect(() => {
    if (isSuccess) {
      setLoginCred({
        email: "",
        password: "",
      });
      setSuccessMessage(`Your have successfully logged in.`);
      setTimeout(() => navigate("/"), 2000);
    }
  }, [isSuccess, navigate]);

  // Handles login upon submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userLogin(loginCred).unwrap();
      dispatch(setUser({ token: response.token, user: response.user }));
      localStorage.setItem("token", response.token);
    } catch (error) {
      console.log({ error: "Error While logging in" });
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

  return (
    <div>
      {loginLoading ? (
        <h2 className="Loading">Loading...</h2>
      ) : (
        <>
          {" "}
          <h2 id="LoginHeader">Login</h2>
          {successMessage != "" ? (
            <h2 className="Success">{successMessage}</h2>
          ) : (
            ""
          )}
          <form onSubmit={handleSubmit} id="LoginForm">
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
            <button type="submit" id="LoginButton">Log in</button>
          </form>
          {loginError && (
            <p className="Error">
              Login failed. Check your credentials.
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Login;
