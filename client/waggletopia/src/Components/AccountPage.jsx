import { useDispatch, useSelector } from "react-redux";
import { useDeleteUserMutation, useFetchUserQuery } from "./waggleApi";
import { getToken, logout } from "../Users/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const { data: user = {} , error, isLoading } = useFetchUserQuery();
  const [ deleteUser, { isLoading: deletionLoading, error: deletionError }] = useDeleteUserMutation();
  const [successMessage, setSuccessMessage] = useState("");
  
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

  console.log(user);

  async function handleDeletion () {
    try {
      if (!window.confirm("Are you sure you want to delete your account?")) return;

      await deleteUser(user.id).unwrap();
      setSuccessMessage(`Your account has been successfully deleted.`)
      setTimeout(() => navigate("/"), 2000);
      setTimeout(() => dispatch(logout()), 2000); 
    } catch (error) {
      console.log("Error while deleting your account", error);
    }
  };

  return token ? (
    <div>
      <div>
        <button onClick={() => navigate("/Orders")}>Order History</button>
      </div>

      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email Address: {user.email_address}</p>
      <p>Mailing Address: {user.mailing_address}</p>
      <p>Phone Number: {user.phone_number}</p>
      <p>Billing Address: {user.billing_address}</p>

      {deletionError && <p style={{ color: "red" }}>Failed to delete account.</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <button onClick={handleDeletion} disabled={deletionLoading}>
        {deletionLoading ? "Deleting…" : "DELETE ACCOUNT"}
      </button>
    </div>
  ) : null;
}

export default AccountPage;
