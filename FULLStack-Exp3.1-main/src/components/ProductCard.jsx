function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="product-card">
      <div className="image-box">
        <img src={image} alt={name} />
      </div>

      <h2 className="product-name">{name}</h2>

      <p className="product-price">${price.toFixed(2)}</p>

      <span className={`status ${inStock ? "in-stock" : "out-stock"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>

      <button disabled={!inStock}>
        {inStock ? "Buy Now" : "Unavailable"}
      </button>
    </div>
  );
}

export default ProductCard;
