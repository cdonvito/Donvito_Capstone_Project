import { useSelector } from "react-redux";
import { useFetchUserMutation } from "./waggleApi";
import { getToken } from "../Users/userSlice";

function AccountPage() {
  const [userDetails, { error, isLoading, isSuccess }] = useFetchUserMutation();
  const token = useSelector(getToken);



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

  return (
    <div>
      <p>Account Page</p>
    </div>
  );
}

export default AccountPage;
