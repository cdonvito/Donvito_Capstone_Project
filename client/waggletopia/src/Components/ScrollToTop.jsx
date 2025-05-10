import { useNavigate } from "react-router-dom";

function ScrollToTop(page) {
  const navigate = useNavigate();

  return () => {
    const header = document.getElementById("header_bar");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setTimeout(() => navigate(page), 3000);
  };
}

export default ScrollToTop;
