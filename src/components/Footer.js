import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">Zenith Ltd.</h5>
            <p>Международная торговая компания, специализирующаяся на поставках микроэлектроники, радиокомпонентов и промышленного оборудования из Китая в Россию.</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">Контакты</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" />
                <strong>Китай:</strong> г. Шэньчжэнь, ул. Наншань, 45
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" />
                <strong>Россия:</strong> г. Москва, ул. Автозаводская, 23
              </li>
              <li className="mb-2">
                <FaClock className="me-2" />
                Пн-Пт, с 9:00 до 19:00 (MSK)
              </li>
              <li className="mb-2">
                <FaPhone className="me-2" />
                +7 (499) 123-45-67
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                sales@zenith.com
              </li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">Социальные сети</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="https://t.me/zenith_support" className="text-white">
                <FaTelegram size={24} />
              </a>
              <a href="https://wa.me/8613900000000" className="text-white">
                <FaWhatsapp size={24} />
              </a>
            </div>
            <h5 className="fw-bold mb-3">Быстрые ссылки</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/about" className="text-white">О компании</a></li>
              <li className="mb-2"><a href="/services" className="text-white">Услуги</a></li>
              <li className="mb-2"><a href="/contact" className="text-white">Контакты</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} Zenith Ltd. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;