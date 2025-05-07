import { useSelector } from "react-redux";
import { useFetchUserQuery } from "./waggleApi";
import { getToken } from "../Users/userSlice";

function AccountPage() {
  const token = useSelector(getToken);
  const { data: user, error, isLoading } = useFetchUserQuery(token);
  
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
      <p>{user.username}</p>
      <p>{user.password}</p>
      <p>{user.name}</p>
      <p>{user.email_address}</p>
      <p>{user.mailing_address}</p>
      <p>{user.billing_address}</p>
    </div>
  ) : null;
}

export default AccountPage;
