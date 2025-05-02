import logo from "../assets/WaggleTopia_logo.png";
import { Link } from "react-router-dom";

function HeaderBar () {
  return (
   <div>
    <nav className="navigation-bar">
      <Link to="/">
        <img src={logo} alt="Home" id="logo"/>
      </Link>
    </nav>
    <div>
      <Link to="/Account-Page">Account</Link>
      <Link to="/About">About Us</Link>
      <Link to="/Checkout">Cart</Link>
    </div>
   </div>
  )
 };
 
 export default HeaderBar;