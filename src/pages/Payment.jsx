import { useEffect, useState, useContext, useMemo } from 'react';
import { CartContext } from '../App';
import './Payment.css';

function Payment() {
  const [locker, setLocker] = useState(null);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const storedLocker = localStorage.getItem('boxnowLocker');
    if (storedLocker) {
      setLocker(JSON.parse(storedLocker));
    }
  }, []);

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      <p>Select your preferred payment method to complete the order.</p>

      {/* Order Summary Section */}
      {cartItems.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul className="order-list">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                item && item.id && item.name && typeof item.quantity === 'number' && typeof item.price === 'number' ? (
                  <li key={item.id} className="order-item">
                    <span>{item.name}</span>
                    <span>{item.quantity.toFixed(1)} kg</span>
                    <span>€ {(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ) : null
              ))
            ) : (
              <li>No items in cart.</li>
            )}
          </ul>
          <p className="total">
            <strong>Total: € {total.toFixed(2)}</strong>
          </p>
        </div>
      )}

      {/* Locker Info Section */}
      {locker && (
          <div className="locker-summary">
            <h2>Delivery to BoxNow Locker</h2>
            <p><strong>{locker.name}</strong></p>
            <p>{locker.address}</p>
            <p>{locker.postalCode}</p>
          </div>
        )}

        <div className="back-btn-wrapper">
          <a href="/pickup" className="back-btn">
            Back
          </a>
        </div>
      </div>
  );
}

export default Payment;