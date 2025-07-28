import { useEffect, useRef } from 'react';

function Pickup() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.boxnow.gr/main.js';
    script.async = true;
    script.onload = () => {
      if (window.BoxNow && containerRef.current) {
        try {
          window.BoxNow.Widget({ container: containerRef.current });
        } catch (e) {
          console.error('BoxNow widget init failed', e);
        }
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Select BoxNow Point</h1>
      <div id="boxnow-widget" ref={containerRef}></div>
    </div>
  );
}

export default Pickup;