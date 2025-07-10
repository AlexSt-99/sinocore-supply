import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section bg-dark text-white py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Надежные поставки компонентов и микроэлектроники из Китая
            </h1>
            <p className="lead mb-4">
              В любое время, в любых условиях. Полный цикл поставок: от поиска и закупки до доставки под ключ.
            </p>
            <div className="d-flex gap-3">
              <Link to="/contact" className="btn btn-primary btn-lg px-4">
                Оставить заявку
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-4">
                Наши услуги
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://avatars.mds.yandex.net/get-altay/10147638/2a0000018d402a277da9a584edc4236a0939/XXL_height" 
              alt="Электронные компоненты" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;