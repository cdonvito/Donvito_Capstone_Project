import dogHome from "../assets/dog_home.jpg";

function Home() {
  return (
    <div>
      <div>
        <h1>Welcome to Waggle Topia</h1>
        <p>
          At Waggle Topia, we understand that your dog is more than a
          pet—they're family. That's why we've built a one-stop destination for
          discerning dog owners who demand uncompromising quality, thoughtful
          design, and real value. From daily essentials to occasional splurges,
          every product in our catalog is rigorously vetted to ensure it meets
          our exacting standards for safety, durability, and performance.
        </p>
      </div>

      <div>
        <h2>Why Choose Waggle Topia</h2>
        <ul>
          <li>
            Premium Quality: We partner with leading manufacturers and emerging
            innovators to offer products made from top-grade materials, backed
            by transparent sourcing and ethical manufacturing practices.
          </li>
          <li>
            Curated Selection: Our team of canine specialists hand-picks each
            item—treats, toys, grooming tools, beds, and accessories—so you
            never have to wade through endless options.
          </li>
          <li>
            Data-Driven Recommendations: Using real-world feedback and advanced
            analytics, we surface the best products for your dog's size, breed,
            and activity level, helping you make smarter choices in less time.
          </li>
          <li>
            Satisfaction Guaranteed: If a product doesn't perform as promised,
            our dedicated support team will work with you to make it right—no
            hassle, no excuses.
          </li>
        </ul>

        <p>
          Join thousands of happy pet parents who trust Waggle Topia to keep
          their dogs healthy, happy, and thriving. Browse our collections or
          take our quick “Find Your Fit” quiz to discover the perfect products
          tailored to your dog's unique needs.
        </p>
        <p>
          Start exploring now, and let every wag tell the story of a happy dog.
        </p>
      </div>

      <button id="shopButton">Shop Our Products</button>

      <img src={dogHome}></img>
    </div>
  );
}

export default Home;
