import { useNavigate } from "react-router-dom";

function ScrollToTop(page) {
  const navigate = useNavigate();

  async function navigatePage (){
    await navigate(page);
  }
  
  return () => {
    const header = document.getElementById("header_bar");
    if (header) {
      setTimeout(() => header.scrollIntoView({ behavior: "smooth" }), 1000);
    } else {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 1000);
    }

    // setTimeout(() => navigate(page), 20);
    
  };
}

export default ScrollToTop;
