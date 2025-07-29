import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pickup.css';

function Pickup() {
  const mapRef = useRef(null);
  const widgetOpenedRef = useRef(false);
  const scriptLoadedRef = useRef(false);
  const [selectedLocker, setSelectedLocker] = useState(null);

  useEffect(() => {
    // Avoid duplicate script load
    if (scriptLoadedRef.current) return;

    window._bn_map_widget_config = {
      partnerId: 123,
      parentElement: '#boxnowmap',
      buttonSelector: '.boxnow-widget-button',
      afterSelect: (selected) => {
        const locker = {
          id: selected.boxnowLockerId,
          address: selected.boxnowLockerAddressLine1,
          postalCode: selected.boxnowLockerPostalCode,
          name: selected.boxnowLockerName,
        };
        setSelectedLocker(locker);
        localStorage.setItem('boxnowLocker', JSON.stringify(locker));
      },
    };

    const script = document.createElement('script');
    script.src = 'https://widget-cdn.boxnow.gr/map-widget/client/v5.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      scriptLoadedRef.current = true;

      // Optional: Auto open on load (just once)
      if (!widgetOpenedRef.current) {
        const btn = document.querySelector('.boxnow-widget-button');
        if (btn) {
          btn.click();
          widgetOpenedRef.current = true;
        }
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleButtonClick = () => {
    if (!widgetOpenedRef.current) {
      widgetOpenedRef.current = true;
    }
  };

  return (
    <div>
      <h1>Select BoxNow Point</h1>
      <button
        type="button"
        className="boxnow-widget-button"
        onClick={handleButtonClick}
        disabled={widgetOpenedRef.current}
      >
        Open widget
      </button>

      <div id="boxnowmap" ref={mapRef}></div>

      {selectedLocker && (
        <>
          <div className="locker-details">
            <p>ID: {selectedLocker.id}</p>
            <p>Address: {selectedLocker.address}</p>
            <p>Postal Code: {selectedLocker.postalCode}</p>
          </div>
          <div className="next-btn-wrapper">
            <Link to="/checkout" className="back-btn">
              Back
            </Link>
            <Link to="/payment" className="next-btn">
              Next
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Pickup;