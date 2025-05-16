import { useDispatch, useSelector } from "react-redux";
import { useDeleteUserMutation, useFetchUserQuery } from "./waggleApi";
import { getToken, logout } from "../Users/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const {
    data: user = {},
    error,
    isLoading,
  } = useFetchUserQuery(null, {
    skip: !token,
    refetchOnMountOrArgChange: true,
  });
  const [deleteUser, { isLoading: deletionLoading, error: deletionError }] =
    useDeleteUserMutation();
  const [successMessage, setSuccessMessage] = useState("");

  // Show a loading message while data is being fetched
  if (isLoading) {
    return (
      <section>
        <h2 className="Loading">Loading...</h2>
      </section>
    );
  }

  // Show an error message if the fetch failed
  if (error) {
    return (
      <section>
        <h2 className="Error">Error, please try again later.</h2>
      </section>
    );
  }

  // Handles account deletion
  async function handleDeletion() {
    try {
      // Prompts user to confirm account deletion
      if (!window.confirm("Are you sure you want to delete your account?"))
        return;

      await deleteUser(user.id).unwrap();
      setSuccessMessage(`Your account has been successfully deleted.`);
      setTimeout(() => navigate("/"), 2000);
      setTimeout(() => dispatch(logout()), 2000);
    } catch (error) {
      console.log("Error while deleting your account", error);
    }
  }

  // shows account information
  return token ? (
    <div id="AccountBody">
      <div>
        <button onClick={() => navigate("/Orders")}>Order History</button>
      </div>

      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email Address:</strong> {user.email_address}
      </p>
      <p>
        <strong>Mailing Address:</strong> {user.mailing_address}
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phone_number}
      </p>
      <p>
        <strong>Billing Address:</strong> {user.billing_address}
      </p>

      {deletionError && <p className="Error">Failed to delete account.</p>}
      {successMessage && <p className="Success">{successMessage}</p>}

      <button onClick={handleDeletion} disabled={deletionLoading}>
        {deletionLoading ? "Deleting…" : "DELETE ACCOUNT"}
      </button>
    </div>
  ) : null;
}

export default AccountPage;
