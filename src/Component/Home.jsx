import { Link } from "react-router";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Clothing Store</h1>
      <p>Discover products and find your style.</p>
      <Link to="/products">Shop Now</Link>
    </div>
  );
}

export default Home;