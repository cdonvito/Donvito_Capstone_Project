import ScrollToTop from "./ScrollToTop";


function FooterBar () {
  const scrollToTop = ScrollToTop();


  return (
    <div>
      <nav className="footer-bar">

        <div>
          <a onClick={() => scrollToTop("/About")} className="navigation-link">About Us</a>
          <a onClick={() => scrollToTop("/Terms-Of-Use")} className="navigation-link">Terms of Use</a>
          <a onClick={() => scrollToTop("/Privacy-Policy")} className="navigation-link">Privacy Policy</a>
        </div>
      </nav>
    </div>
  );
};
 
 export default FooterBar;