import { useNavigate } from "react-router-dom";

function About() {
  return (
    <div id="AboutBody">
      <div>
        <h2>About Us</h2>
        <p>
          Welcome to Waggle Topia, where every day brings a tail-wagging
          adventure and our dog gear delights pups (and earns envious glances
          from cats next door). Founded by passionate canine enthusiasts, we
          exist to make your furry friend's life joyful and your role as “best
          human ever” totally earned.
        </p>
      </div>

      <div>
        <h3>Our Mission</h3>
        <p>At Waggle Topia, we believe this simple truth:</p>
        <p>
          “Happiness for a dog boils down to plenty of play, nutritious treats,
          and a cozy spot to crash.”
        </p>
        <p>
          Our goal makes that truth real by delivering top-quality items that
          keep dogs healthy, entertained, and convinced you are the ultimate
          pup-parent.
        </p>
      </div>

      <div>
        <h3>Who We Are</h3>
        <p>-Dog Lovers First</p>
        <p>
          -A small team with hands-on experience caring for dogs of all ages and
          sizes.
        </p>
        <h3>Simple Selection</h3>
        <p>
          We choose only reliable, safe products that work—no gimmicks, just
          good gear.
        </p>
      </div>

      <div>
        <h3>Our Promise</h3>
        <p>-Durable & Dependable</p>
        <p>
          -If an item fails under normal use, we'll replace it—no fine print.
        </p>
        <p>-Easy Buying</p>
        <p>-Fast shipping & clear pricing.</p>
      </div>

      <button
        className="ScrollToTopBtn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </button>
    </div>
  );
}

export default About;
