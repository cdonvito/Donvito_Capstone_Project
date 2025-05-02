import logo from "../assets/WaggleTopia_logo.png";
import { Link } from "react-router-dom";
import dogBanner from "../assets/dogs_playing.jpg";
import headerText from "../assets/WaggleTopia_Header.png";

function HeaderBar() {
  return (
    <div id="header_bar">
      <nav className="navigation-bar">
        <Link to="/">
          <img src={logo} alt="Home" id="logo" />
        </Link>

        <img src={headerText} id="header_text_img" />

        <div>
          <Link to="/Product-Home">Shop Products</Link>
          <Link to="/Account-Page">Account</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Checkout">Cart</Link>
        </div>
      </nav>
      <img src={dogBanner} id="dogBanner" />
    </div>
  );
}

export default HeaderBar;
