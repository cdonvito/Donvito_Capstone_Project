import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the page back to the top immediately
function ScrollToTop() {
  const { pathname } = useLocation();

  // scrolls to top of page every time the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
