import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky-top">
      <div className="top-bar bg-dark text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contacts">
            <a href="tel:+74991234567" className="text-white me-3">
              <FaPhone className="me-1" /> +7 (499) 123-45-67
            </a>
            <a href="mailto:sales@sinocore-supply.com" className="text-white me-3">
              <FaEnvelope className="me-1" /> sales@sinocore-supply.com
            </a>
          </div>
          <div className="social">
            <a href="https://t.me/sinocore_support" className="text-white me-2">
              <FaTelegram />
            </a>
            <a href="https://wa.me/8613900000000" className="text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <span className="text-primary">Sino</span>Core Supply
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Главная</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">О компании</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Услуги</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;