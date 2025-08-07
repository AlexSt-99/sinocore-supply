import React from 'react';
import { 
  FaSearch, 
  FaShieldAlt, 
  FaBoxes, 
  FaExchangeAlt, 
  FaIndustry, 
  FaCheckCircle,
  FaFileContract,
  FaHandshake,
  FaShippingFast
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaSearch size={30} className="text-primary mb-2" />,
      title: "Поиск и закупка компонентов",
      description: "Подбор по спецификации или аналогам. Работа с китайскими заводами и крупными складами.",
      details: [
        "Подбор по спецификации или аналогам",
        "Работа напрямую с производителями",
        "Проверка оригинальности компонентов",
        "Принимаем BOM-файлы, артикулы, фото",
        "Доступ к 500+ складам в Китае"
      ],
      note: "📌 Вы можете прислать нам BOM-файл, артикул или фото компонента — мы найдем."
    },
    {
      icon: <FaShieldAlt size={30} className="text-primary mb-2" />,
      title: "Санкционные компоненты",
      description: "Поставки позиций, не доступных в РФ официально.",
      details: [
        "Закрытые предложения под NDA",
        "Товары двойного назначения",
        "Таможенное оформление",
        "Правовая чистота ввоза",
        "Конфиденциальность"
      ],
      note: "🛡️ Только для проверенных клиентов по запросу"
    },
    {
      icon: <FaBoxes size={30} className="text-primary mb-2" />,
      title: "Логистика и консолидация",
      description: "Полный цикл доставки из Китая в Россию.",
      details: [
        "Сбор и проверка грузов",
        "Маркировка и переупаковка",
        "Гибкие маршруты (Китай-Казахстан-Россия)",
        "Авиа, авто, мультимодальные перевозки",
        "Страхование грузов",
        "Полный пакет документов"
      ],
      note: "🚚 Опыт сложных логистических кейсов"
    },
    {
      icon: <FaExchangeAlt size={30} className="text-primary mb-2" />,
      title: "Подбор аналогов",
      description: "Замена недоступных компонентов.",
      details: [
        "Китайские аналоги",
        "Сохранение спецификации",
        "Тестирование и верификация",
        "Технические консультации",
        "Подбор по ТЗ клиента"
      ],
      note: "🔍 Техподдержка инженеров"
    },
    {
      icon: <FaIndustry size={30} className="text-primary mb-2" />,
      title: "Снабжение производств",
      description: "Комплексные решения для предприятий.",
      details: [
        "Регулярные поставки",
        "Персональный менеджер",
        "Планирование на 3-6 месяцев",
        "Прямые контракты с фабриками",
        "Полное сопровождение"
      ],
      note: "📦 Берём на себя все заботы по закупкам"
    },
    {
      icon: <FaCheckCircle size={30} className="text-primary mb-2" />,
      title: "Контроль качества",
      description: "Гарантия подлинности и соответствия.",
      details: [
        "Проверка документации",
        "Фото- и видеоотчеты",
        "Рентген-контроль (по запросу)",
        "Работа с проверенными поставщиками",
        "Гарантия на все партии"
      ],
      note: "🧪 Каждая партия проходит проверку"
    }
  ];

  const workflow = [
    {
      icon: <FaFileContract size={24} className="text-primary" />,
      title: "Заявка",
      description: "Вы отправляете запрос с артикулами или списком"
    },
    {
      icon: <FaSearch size={24} className="text-primary" />,
      title: "Подбор",
      description: "Мы находим компоненты и согласовываем условия"
    },
    {
      icon: <FaHandshake size={24} className="text-primary" />,
      title: "Договор",
      description: "Заключаем контракт и выставляем счет"
    },
    {
      icon: <FaShippingFast size={24} className="text-primary" />,
      title: "Доставка",
      description: "Поставляем товар на ваш склад под ключ"
    }
  ];

  return (
    <section className="services-section py-4 py-lg-5" id="services">
      {/* Microdata for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Поставка электронных компонентов",
          "provider": {
            "@type": "Organization",
            "name": "Zenith Ltd."
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги",
            "itemListElement": services.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description
              }
            }))
          }
        })}
      </script>

      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <h2 className="fw-bold h1 mb-2 mb-lg-3">Наши услуги</h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '800px'}}>
            Полный цикл поставки электроники, компонентов и оборудования из Китая в Россию — от поиска до доставки на ваш склад
          </p>
        </div>

        <div className="row g-3 g-lg-4 mb-4 mb-lg-5">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm-hover transition-all">
                <div className="card-body p-3 p-lg-4">
                  <div className="text-center mb-3 mb-lg-4">
                    {service.icon}
                    <h3 className="h5 h4-lg mt-2 mt-lg-3">{service.title}</h3>
                    <p className="text-muted mb-3 mb-lg-4">{service.description}</p>
                  </div>
                  
                  <ul className="list-unstyled mb-3 mb-lg-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="mb-1 mb-lg-2 d-flex">
                        <span className="text-primary me-2">✓</span>
                        <span className="small small-lg">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.note && (
                    <div className="bg-light p-2 p-lg-3 rounded text-center mt-auto">
                      <small className="text-muted">{service.note}</small>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="workflow-section bg-light rounded-3 p-3 p-lg-5 mt-4 mt-lg-5">
          <h3 className="text-center mb-4 mb-lg-5 fw-bold">Как мы работаем</h3>
          <div className="row g-3 g-lg-4 justify-content-center">
            {workflow.map((step, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="d-flex flex-column align-items-center text-center h-100">
                  <div className="bg-white rounded-circle p-3 p-lg-4 mb-2 mb-lg-3 shadow-sm">
                    {step.icon}
                  </div>
                  <h4 className="h6 h5-lg mb-1 mb-lg-2">Шаг {index + 1}: {step.title}</h4>
                  <p className="text-muted small small-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="partners-section mt-4 mt-lg-5">
          <h4 className="text-center mb-3 mb-lg-4 fw-bold">Работаем с ведущими производителями:</h4>
          <div className="d-flex flex-wrap justify-content-center gap-2 gap-lg-3">
            {[
              "Texas Instruments", "Analog Devices", "STMicroelectronics", 
              "Infineon", "NXP/Freescale", "Microchip/Atmel",
              "ON Semiconductor", "Xilinx/AMD FPGA", "Intel (Altera)",
              "Murata/TDK/AVX", "Vishay/Bourns/Yageo", "GigaDevice",
              "Espressif Systems", "Allwinner/Rockchip", "BYD Semiconductor"
            ].map((brand, i) => (
              <div key={i} className="badge bg-white text-dark border py-1 px-2 py-lg-2 px-lg-3 small">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;