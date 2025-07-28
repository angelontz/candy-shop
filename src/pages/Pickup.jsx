import { useEffect, useRef, useState } from 'react';
import './Pickup.css';

function Pickup() {
  const mapRef = useRef(null);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [widgetOpened, setWidgetOpened] = useState(false);

  useEffect(() => {
    // configuration for the BoxNow Map Widget
    window._bn_map_widget_config = {
      partnerId: 123,
      parentElement: '#boxnowmap',
      buttonSelector: '.boxnow-widget-button',
      afterSelect: (selected) => {
        setSelectedLocker({
          id: selected.boxnowLockerId,
          address: selected.boxnowLockerAddressLine1,
          postalCode: selected.boxnowLockerPostalCode,
          name: selected.boxnowLockerName,
        });
      },
    };

    const script = document.createElement('script');
    script.src = 'https://widget-cdn.boxnow.gr/map-widget/client/v5.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const handleButtonClick = () => {
    if (!widgetOpened) {
      setWidgetOpened(true);
    }
  };

  return (
    <div>
      <h1>Select BoxNow Point</h1>
      <button
        type="button"
        className="boxnow-widget-button"
        onClick={handleButtonClick}
        disabled={widgetOpened}
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
          <a href="/payment" className="next-btn">
            Next
          </a>
        </>
      )}
    </div>
  );
}

export default Pickup;