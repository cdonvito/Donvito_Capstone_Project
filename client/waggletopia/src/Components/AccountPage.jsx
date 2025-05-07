import { useSelector } from "react-redux";
import { useFetchUserQuery } from "./waggleApi";
import { getToken } from "../Users/userSlice";

function AccountPage() {
  const token = useSelector(getToken);
  const { data: user = {} , error, isLoading } = useFetchUserQuery();
  
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

  return token ? (
    <div>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <p>Name: {user.name}</p>
      <p>Email Address: {user.email_address}</p>
      <p>Mailing Address: {user.mailing_address}</p>
      <p>Billing Address: {user.billing_address}</p>
    </div>
  ) : null;
}

export default AccountPage;
