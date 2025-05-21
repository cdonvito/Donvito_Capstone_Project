import { useNavigate } from "react-router-dom";
import dogHome from "../assets/dog_home.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div id="HomeBody">
      <div>
        <h1>Welcome to Waggle Topia</h1>
        <p className="HomeSummary">
          <strong>
            At Waggle Topia, we understand that your dog is more than a
            pet—they're family. That's why we've built a one-stop destination
            for discerning dog owners who demand uncompromising quality,
            thoughtful design, and real value. From daily essentials to
            occasional splurges, every product in our catalog is rigorously
            vetted to ensure it meets our exacting standards for safety,
            durability, and performance.
          </strong>
        </p>
      </div>

      <div>
        <h2>Why Choose Waggle Topia</h2>
        <p className="whyChoose">
          <strong>-Premium Quality:</strong> We partner with leading
          manufacturers and emerging innovators to offer products made from
          top-grade materials, backed by transparent sourcing and ethical
          manufacturing practices.
        </p>
        <p className="whyChoose">
          <strong>-Curated Selection:</strong> Our team of canine specialists
          hand-picks each item—treats, toys, grooming tools, beds, and
          accessories—so you never have to wade through endless options.
        </p>
        <p className="whyChoose">
          <strong>-Data-Driven Recommendations:</strong> Using real-world
          feedback and advanced analytics, we surface the best products for your
          dog's size, breed, and activity level, helping you make smarter
          choices in less time.
        </p>
        <p className="whyChoose">
          <strong>-Satisfaction Guaranteed:</strong> If a product doesn't
          perform as promised, our dedicated support team will work with you to
          make it right—no hassle, no excuses.
        </p>
        <br></br>
        <br></br>
        <p className="HomeSummary">
          <strong>
            Join thousands of happy pet parents who trust Waggle Topia to keep
            their dogs healthy, happy, and thriving. Browse our collections or
            take our quick “Find Your Fit” quiz to discover the perfect products
            tailored to your dog's unique needs.
          </strong>
        </p>
        <br></br>
        <p className="HomeSummary">
          <strong>
            Start exploring now, and let every wag tell the story of a happy
            dog.
          </strong>
        </p>
        <br></br>
      </div>

      <div id="shopButtonDiv">
        <button id="shopButton" onClick={() => navigate("/Product-Home")}>
          Shop Our Products
        </button>
      </div>

      <div id="dogHomeBanner">
        <img src={dogHome} alt="dogHome"></img>
      </div>
      <div className="ScrollToTopBtn">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default Home;
