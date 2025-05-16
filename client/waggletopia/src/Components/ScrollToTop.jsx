// import { useNavigate } from "react-router-dom";

// function ScrollToTop() {
//   const navigate = useNavigate();
  
//   return (page) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setTimeout(() => navigate(page, { replace: true }), 400);
//   };
// }

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
