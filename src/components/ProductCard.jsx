import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="description">{product.description}</p>
      <p>€ {product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}

export default ProductCard;
