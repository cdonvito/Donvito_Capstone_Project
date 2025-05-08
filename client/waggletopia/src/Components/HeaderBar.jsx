import logo from "../assets/WaggleTopia_logo.png";
import { Link } from "react-router-dom";
import dogBanner from "../assets/dogs_playing.jpg";
import headerText from "../assets/WaggleTopia_Header.png";
import { useSelector } from "react-redux";
import { getToken } from "../Users/userSlice";
import { useFetchUserQuery } from "./waggleApi";

function HeaderBar() {
  const token = useSelector(getToken);
  const { data: user = {} , error, isLoading } = useFetchUserQuery();

  return (
    <div id="header_bar">
      <nav className="navigation-bar">
        <Link to="/">
          <img src={logo} alt="Home" id="logo" />
        </Link>

        <img src={headerText} id="header_text_img" />

        <div>
          <Link to="/Product-Home" className="navigation-link">Shop Products</Link>
          {token ? <Link to="/Account-Page" className="navigation-link">Account</Link> : ""}
          <Link to="/About" className="navigation-link">About Us</Link>
          {!token ? <Link to="/Login" className="navigation-link">Login</Link> : ""}
          {!token ? <Link to="/Register" className="navigation-link">Register</Link> : ""}
          {token ? <Link to="/Logout" className="navigation-link">Logout</Link> : ""}
          {token ? <Link to="/Checkout" className="navigation-link">Cart</Link> : ""}
          {token && user.is_admin ? <Link to="/Admin-Page" className="navigation-link">Admin</Link> : ""}
        </div>
      </nav>
      <img src={dogBanner} id="dogBanner" />
    </div>
  );
}

export default HeaderBar;
