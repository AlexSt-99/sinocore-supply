import React from 'react';
import { FaSearch, FaShieldAlt, FaBoxes, FaExchangeAlt, FaIndustry, FaCheckCircle } from 'react-icons/fa';
import { FaRoute, FaFileContract, FaHandshake } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaSearch size={40} className="text-primary mb-3" />,
      title: "Поиск и закупка компонентов",
      description: "Подбор по спецификации или аналогам. Работа с китайскими заводами и крупными складами. Проверка оригинальности и технической документации.",
      details: [
        "Подбор по спецификации или аналогам",
        "Работа с китайскими заводами и крупными складами",
        "Проверка оригинальности и технической документации",
        "Закупка в обход недоступных официальных каналов",
        "Принимаем BOM-файлы, артикулы или фото компонентов"
      ]
    },
    {
      icon: <FaShieldAlt size={40} className="text-primary mb-3" />,
      title: "Санкционная и дефицитная продукция",
      description: "Поставки позиций, не доступных в РФ официально. Работа под NDA с соблюдением конфиденциальности.",
      details: [
        "Позиции, не доступные в РФ официально",
        "Закрытые предложения (по запросу, под NDA)",
        "Работа с товарами двойного назначения",
        "Таможенное оформление и правовая чистота ввоза",
        "Индивидуальный подход к каждому клиенту"
      ]
    },
    {
      icon: <FaBoxes size={40} className="text-primary mb-3" />,
      title: "Консолидация и логистика",
      description: "Полный цикл логистики: от сбора грузов до доставки под ключ с гибкими маршрутами.",
      details: [
        "Сбор и проверка грузов на складах в Китае",
        "Маркировка, переупаковка, страхование",
        "Гибкие логистические маршруты (Китай → Казахстан, ОАЭ, Киргизия → Россия)",
        "Опыт в сложных схемах логистики",
        "Авиа, авто и мультиканальные доставки"
      ]
    },
    {
      icon: <FaExchangeAlt size={40} className="text-primary mb-3" />,
      title: "Подбор аналогов",
      description: "Профессиональный подбор замен для недоступных или снятых с производства компонентов.",
      details: [
        "Замена недоступных компонентов",
        "Подбор китайских аналогов с сохранением спецификации",
        "Тестирование и верификация по вашему ТЗ",
        "Техническая поддержка инженеров",
        "Консультации по совместимости"
      ]
    },
    {
      icon: <FaIndustry size={40} className="text-primary mb-3" />,
      title: "Комплексное снабжение производств",
      description: "Регулярные поставки электронных компонентов для вашего производства.",
      details: [
        "Регулярные поставки по контракту",
        "Персональный менеджер",
        "Планирование потребностей на 3-6 месяцев вперед",
        "Прямой контакт с фабриками в КНР",
        "Полное сопровождение закупок"
      ]
    },
    {
      icon: <FaCheckCircle size={40} className="text-primary mb-3" />,
      title: "Проверка и тестирование",
      description: "Гарантия качества каждой партии компонентов перед поставкой.",
      details: [
        "Оценка состояния и соответствия документации",
        "Фотоотчёты, видео, рентген-контроль (по запросу)",
        "Работа только с проверенными поставщиками",
        "Контроль качества на всех этапах",
        "Гарантия подлинности компонентов"
      ]
    }
  ];

  const workflow = [
    {
      step: 1,
      icon: <FaFileContract size={24} className="text-primary" />,
      title: "Оставляете заявку",
      description: "Присылаете артикулы, фото или список компонентов"
    },
    {
      step: 2,
      icon: <FaSearch size={24} className="text-primary" />,
      title: "Подбор товара",
      description: "Мы находим компоненты и предлагаем сроки и цены"
    },
    {
      step: 3,
      icon: <FaHandshake size={24} className="text-primary" />,
      title: "Оформление договора",
      description: "Заключаем договор и отправляем счет"
    },
    {
      step: 4,
      icon: <FaRoute size={24} className="text-primary" />,
      title: "Поставка под ключ",
      description: "Осуществляем доставку на ваш склад"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Наши услуги</h1>
              <p className="lead">
                Полный цикл поставки электроники, компонентов и оборудования из Китая в Россию
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Комплексные решения для вашего бизнеса</h2>
            <p className="lead text-muted">От поиска компонентов до доставки на ваш склад</p>
          </div>
          
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      {service.icon}
                      <h4 className="card-title mt-2">{service.title}</h4>
                    </div>
                    <p className="card-text text-center mb-4">{service.description}</p>
                    <ul className="list-unstyled">
                      {service.details.map((detail, i) => (
                        <li key={i} className="mb-2 d-flex">
                          <span className="me-2 text-primary">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Как мы работаем</h2>
            <p className="lead text-muted">Простой и прозрачный процесс сотрудничества</p>
          </div>
          
          <div className="row g-4">
            {workflow.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 bg-transparent">
                  <div className="card-body text-center p-4">
                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                      {item.icon}
                    </div>
                    <h5 className="card-title">Шаг {item.step}: {item.title}</h5>
                    <p className="card-text text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Работаем с ведущими производителями</h2>
            <p className="lead text-muted">Прямые контракты с проверенными поставщиками</p>
          </div>
          
          <div className="row g-3 justify-content-center">
            {[
              "Texas Instruments", "Analog Devices", "STMicroelectronics", 
              "Infineon", "NXP / Freescale", "Microchip / Atmel",
              "ON Semiconductor", "Xilinx / AMD FPGA", "Intel (Altera)",
              "Murata / TDK / AVX", "Vishay / Bourns / Yageo / Panasonic",
              "GigaDevice", "Espressif Systems", "Allwinner / Rockchip / Amlogic",
              "BYD Semiconductor", "Joulwatt / Chipown / Silan", "SG Micro / SGMICRO"
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
          <h2 className="fw-bold mb-4">Готовы начать сотрудничество?</h2>
          <p className="lead mb-4">
            Оставьте заявку, и мы предложим оптимальное решение для вашего бизнеса
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-4">
            Оставить заявку
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;