
export default function Body() {
  return (
    <main id="body" className="body">
      <h2>Featured Products</h2>
      <div className="products">
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$299.99</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 2" />
          <h3>Product 2</h3>
          <p>$399.99</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 3" />
          <h3>Product 3</h3>
          <p>$499.99</p>
        </div>
      </div>
    </main>
  );
}
