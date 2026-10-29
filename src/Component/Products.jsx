import { useState } from "react";
import ProductList from "./ProductList";

function Products({ products, addToCart }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Our Products</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setSearch(search)}>
          Search
        </button>
      </div>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductList
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;