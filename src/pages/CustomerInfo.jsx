import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CustomerInfo.css';

function CustomerInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('customerInfo');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFirstName(parsed.firstName || '');
        setLastName(parsed.lastName || '');
        setPhone(parsed.phone || '');
      } catch (e) {
        // ignore invalid JSON
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { firstName, lastName, phone };
    localStorage.setItem('customerInfo', JSON.stringify(info));
    navigate('/pickup');
  };

  return (
    <div className="customer-info-page">
      <h1>Your Details</h1>
      <form onSubmit={handleSubmit} className="customer-form">
        <label>
          Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Telephone
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <div className="btn-wrapper">
          <Link to="/checkout" className="back-btn">
            Back
          </Link>
          <button type="submit" className="next-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerInfo;