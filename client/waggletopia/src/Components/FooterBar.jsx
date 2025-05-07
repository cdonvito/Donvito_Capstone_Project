import { Link } from "react-router-dom";

function FooterBar () {
  return (
    <div>
      <nav className="footer-bar">

        <div>
          <Link to="/About" className="navigation-link">About Us</Link>
          <Link to="/Terms-Of-Use" className="navigation-link">Terms of Use</Link>
          <Link to="/Privacy-Policy" className="navigation-link">Privacy Policy</Link>
        </div>
      </nav>
    </div>
  );
};
 
 export default FooterBar;