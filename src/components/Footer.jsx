import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p><strong>Telephone:</strong></p>
        <p>+30 6987276451</p>
        <p>+30 6989826651</p>
        <p>+30 6974615047</p>
        <p><strong>Email:</strong></p>
        <p>karamelokosmos@gmail.com</p>
        <p><strong>Address:</strong></p>
        <p>Stou Koufou Tin Porta 23, Patras, 26442</p>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <a href="https://facebook.com/profile.php?id=100054423852696" aria-label="Facebook">
            <img src="/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com/Karamelokosmos_" aria-label="Instagram">
            <img src="/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://tiktok.com/@Karamelokosmos" aria-label="TikTok">
            <img src="/tiktok.svg" alt="TikTok" />
          </a>
        </div>
        <p className="copyright">
          © Karamelokosmos.gr 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;