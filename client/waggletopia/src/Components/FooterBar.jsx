import { Link } from "react-router-dom";

function FooterBar () {
  return (
    <div>
      <nav className="navigation-bar">

        <div>
          <Link to="/About">About Us</Link>
          <Link to="/Terms-Of-Use">Terms of Use</Link>
          <Link to="/Privacy-Policy">Privacy Policy</Link>
        </div>
      </nav>
    </div>
  );
};
 
 export default FooterBar;