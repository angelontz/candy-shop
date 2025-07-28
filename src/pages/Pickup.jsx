import { useEffect, useRef, useState } from 'react';

function Pickup() {
  const mapRef = useRef(null);
  const [selectedLocker, setSelectedLocker] = useState(null);

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

  return (
    <div>
      <h1>Select BoxNow Point</h1>
      <button type="button" className="boxnow-widget-button">
        Open widget
      </button>
      <div id="boxnowmap" ref={mapRef}></div>
      {selectedLocker && (
        <div className="locker-details">
          <p>ID: {selectedLocker.id}</p>
          <p>Address: {selectedLocker.address}</p>
          <p>Postal Code: {selectedLocker.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default Pickup;