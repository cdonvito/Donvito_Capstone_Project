import { useNavigate } from "react-router-dom";

function FooterBar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="footer-bar">
        <div>
          <a onClick={() => navigate("/About")} className="navigation-link">
            About Us
          </a>
          <a
            onClick={() => navigate("/Terms-Of-Use")}
            className="navigation-link"
          >
            Terms of Use
          </a>
          <a
            onClick={() => navigate("/Privacy-Policy")}
            className="navigation-link"
          >
            Privacy Policy
          </a>
        </div>
      </nav>
    </div>
  );
}

export default FooterBar;
