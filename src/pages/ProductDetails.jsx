import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import products from '../data/Products';
import { CartContext } from '../App';

import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantityKg, setQuantityKg] = useState(0.1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      const updated = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: parseFloat((item.quantity + quantityKg).toFixed(1)) }
          : item
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantityKg }]);
    }
  };

  const increase = () => setQuantityKg((q) => parseFloat((q + 0.1).toFixed(1)));
  const decrease = () =>
    setQuantityKg((q) => parseFloat(Math.max(0.1, q - 0.1).toFixed(1)));
  const fullDescription =
    product.fullDescription ||
    `${product.description} More details about ${product.name}.`;

  return (
    <div className="product-details" data-testid="product-details">
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>€{product.price.toFixed(2)}</p>
        <p>{product['quantity-kilo']} pcs/kg</p>
        <p className="full-description">{fullDescription}</p>
        <div className="quantity-selector">
          <button onClick={decrease}>-</button>
          <span>{quantityKg.toFixed(1)} kg</span>
          <button onClick={increase}>+</button>
        </div>
        <button className="add-to-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;