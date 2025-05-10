import { useNavigate } from "react-router-dom";

function ScrollToTop(page) {
  const navigate = useNavigate();
  
  
  return (page) => {
    const header = document.getElementById("header_bar");
    if (header) {
      setTimeout(() => header.scrollIntoView({ behavior: "smooth" }), 1000);
    } else {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 1000);
    }

    navigate(page);
  };
}

export default ScrollToTop;
