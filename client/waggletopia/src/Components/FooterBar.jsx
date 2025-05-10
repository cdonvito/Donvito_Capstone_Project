import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";


function FooterBar () {
  const scrollToTop = ScrollToTop();


  return (
    <div>
      <nav className="footer-bar">

        <div>
          <a onClick={() => scrollToTop("/About")} className="navigation-link">About Us</a>
          <a to="/Terms-Of-Use" className="navigation-link">Terms of Use</a>
          <a to="/Privacy-Policy" className="navigation-link">Privacy Policy</a>
        </div>
      </nav>
    </div>
  );
};
 
 export default FooterBar;