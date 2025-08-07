import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky-top">
      {/* Top Bar - только для десктопа */}
      <div className="top-bar bg-dark text-white py-1 py-lg-2 d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contacts d-flex flex-wrap">
            <a href="tel:+74991234567" className="text-white me-2 me-lg-3 small">
              <FaPhone className="me-1" /> +7 (499) 123-45-67
            </a>
            <a href="mailto:sales@zenith.com" className="text-white small">
              <FaEnvelope className="me-1" /> sales@zenith-supply.com
            </a>
          </div>
          <div className="social">
            <a href="https://t.me/zenith_support" className="text-white me-2" aria-label="Telegram">
              <FaTelegram />
            </a>
            <a href="https://wa.me/8613900000000" className="text-white" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Мобильные контакты */}
      <div className="bg-dark text-white py-2 d-lg-none">
        <div className="container text-center">
          <div className="d-flex justify-content-center gap-3">
            <a href="tel:+74991234567" className="text-white small">
              <FaPhone />
            </a>
            <a href="mailto:sales@zenith.com" className="text-white small">
              <FaEnvelope />
            </a>
            <a href="https://t.me/zenith_support" className="text-white small" aria-label="Telegram">
              <FaTelegram />
            </a>
            <a href="https://wa.me/8613900000000" className="text-white small" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Основная навигация с ручным управлением состоянием */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <div className="d-flex align-items-center">
            <img 
              src="/favicon.ico" 
              alt="Zenith Ltd. Logo" 
              className="me-2 me-lg-3"
              style={{ height: '30px', width: '30px' }}
            />
            <Link className="navbar-brand fw-bold fs-4 fs-lg-3 me-0 me-lg-2" to="/">
              Zenith
            </Link>
          </div>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link px-2 px-lg-3 py-2" to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 px-lg-3 py-2" to="/about" onClick={() => setIsMenuOpen(false)}>О компании</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 px-lg-3 py-2" to="/services" onClick={() => setIsMenuOpen(false)}>Услуги</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 px-lg-3 py-2" to="/products" onClick={() => setIsMenuOpen(false)}>Товары</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 px-lg-3 py-2" to="/contact" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;