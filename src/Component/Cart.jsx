function Cart({ cart }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>My Cart</h1>

      {cart.length === 0 ? (<p>Your cart is empty.</p>) : (
        <>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.title} />

              <div>
                <h3>{product.title}</h3>
                <p>${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;