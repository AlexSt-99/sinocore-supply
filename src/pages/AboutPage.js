import React from 'react';
import { FaBuilding, FaGlobeAsia, FaUsers, FaShieldAlt, FaWarehouse, FaRoute } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">О компании SinoCore Supply</h1>
              <p className="lead">
                Надёжные поставки электроники из Китая в любых условиях с полным циклом логистики
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Наша миссия</h2>
              <p className="lead">
                Обеспечивать российские предприятия надёжными поставками высокотехнологичной продукции — быстро, легально и без компромиссов по качеству.
              </p>
              <p>
                SinoCore Supply — это торговая компания, специализирующаяся на поставках электронной компонентной базы (ЭКБ), промышленного оборудования и товаров специального назначения из Китая в Россию.
              </p>
              <p>
                Мы работаем напрямую с производителями и авторизованными поставщиками в Китае, обеспечивая стабильные поставки даже в условиях дефицита и логистических ограничений.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="О компании" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Наши преимущества</h2>
            <p className="lead text-muted">Почему клиенты выбирают сотрудничество с нами</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaBuilding size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Опыт и надежность</h5>
                  <p className="card-text text-muted">
                    Более 7 лет опыта в международных поставках электронных компонентов
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaWarehouse size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Широкая складская сеть</h5>
                  <p className="card-text text-muted">
                    Доступ к более чем 500 складам в Китае и партнерская сеть поставщиков
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaShieldAlt size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Санкционные позиции</h5>
                  <p className="card-text text-muted">
                    Работаем с закрытыми и эксклюзивными позициями под NDA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaRoute size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Гибкая логистика</h5>
                  <p className="card-text text-muted">
                    Маршруты: Китай → Казахстан / ОАЭ → Россия с таможенным оформлением
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaGlobeAsia size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Международное присутствие</h5>
                  <p className="card-text text-muted">
                    Офисы в Шэньчжэне (Китай) и Москве (Россия)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaUsers size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Клиентоориентированность</h5>
                  <p className="card-text text-muted">
                    Персональный менеджер для каждого клиента и индивидуальный подход
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Наши клиенты</h2>
            <p className="lead text-muted">Мы работаем с различными организациями по всей России</p>
          </div>
          <div className="row g-4">
            <div className="col-6 col-md-3 text-center">
              <div className="p-3 border rounded">
                <h5>Производственные предприятия</h5>
                <p className="text-muted small">Электроника, машиностроение</p>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center">
              <div className="p-3 border rounded">
                <h5>Интеграторы</h5>
                <p className="text-muted small">Сфера автоматизации</p>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center">
              <div className="p-3 border rounded">
                <h5>Торговые компании</h5>
                <p className="text-muted small">Дистрибьюторы электроники</p>
              </div>
            </div>
            <div className="col-6 col-md-3 text-center">
              <div className="p-3 border rounded">
                <h5>Научные центры</h5>
                <p className="text-muted small">НИИ и исследовательские организации</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Наши партнеры</h2>
            <p className="lead text-muted">Мы работаем напрямую с ведущими производителями</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              "Texas Instruments", "Analog Devices", "STMicroelectronics", 
              "Infineon", "NXP / Freescale", "Microchip / Atmel",
              "ON Semiconductor", "Xilinx / AMD FPGA", "Intel (Altera)",
              "Murata / TDK / AVX", "Vishay / Bourns / Yageo / Panasonic",
              "GigaDevice", "Espressif Systems", "Allwinner / Rockchip / Amlogic"
            ].map((brand, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="p-3 border rounded bg-white text-center">
                  <h6 className="mb-0">{brand}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Готовы к сотрудничеству?</h2>
          <p className="lead mb-4">
            Оставьте заявку, и мы предложим оптимальное решение для вашего бизнеса
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-4">
            Связаться с нами
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;