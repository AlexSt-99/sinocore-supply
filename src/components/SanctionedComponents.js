import React from 'react';
import { 
  FaLock, 
  FaSearch, 
  FaExchangeAlt, 
  FaShieldAlt,
  FaFileSignature,
  FaShippingFast,
  FaCheckDouble
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SanctionedComponents = () => {
  const features = [
    {
      icon: <FaLock size={50} className="mb-3" />,
      title: "Поставки под NDA",
      description: "Конфиденциальные поставки с подписанием соглашения о неразглашении",
      details: [
        "Юридическое сопровождение",
        "Защита коммерческой тайны",
        "Ограниченный доступ к позициям"
      ]
    },
    {
      icon: <FaSearch size={50} className="mb-3" />,
      title: "Поиск и замена",
      description: "Решение проблем с дефицитными компонентами",
      details: [
        "Анализ рынка поставщиков",
        "Поиск снятых с производства позиций",
        "Альтернативные каналы поставок"
      ]
    },
    {
      icon: <FaExchangeAlt size={50} className="mb-3" />,
      title: "Китайские аналоги",
      description: "Полноценная замена с сохранением характеристик",
      details: [
        "Техническая экспертиза",
        "Тестирование совместимости",
        "Подбор по параметрам"
      ]
    },
    {
      icon: <FaShieldAlt size={50} className="mb-3" />,
      title: "Безопасные поставки",
      description: "Полное таможенное сопровождение",
      details: [
        "Легальные схемы ввоза",
        "Документальное оформление",
        "Соблюдение всех норм"
      ]
    }
  ];

  const workflow = [
    {
      step: "1",
      icon: <FaFileSignature size={24} />,
      title: "Подписание NDA",
      description: <span className="text-white">Заключаем соглашение о конфиденциальности</span>
    },
    {
      step: "2",
      icon: <FaSearch size={24} />,
      title: "Анализ запроса",
      description: <span className="text-white">Проверяем возможности поставки</span>
    },
    {
      step: "3",
      icon: <FaCheckDouble size={24} />,
      title: "Подтверждение",
      description: <span className="text-white">Согласовываем сроки и условия</span>
    },
    {
      step: "4",
      icon: <FaShippingFast size={24} />,
      title: "Реализация",
      description: <span className="text-white">Осуществляем поставку под ключ</span>
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="sanctioned-section py-5 bg-dark text-white" id="sanctioned-components">
      <div className="container">
        {/* Microdata for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Поставка санкционных компонентов",
            "provider": {
              "@type": "Organization",
              "name": "Zenith Ltd."
            },
            "description": "Специальные условия поставки дефицитных и санкционных электронных компонентов",
            "areaServed": {
              "@type": "Country",
              "name": "Russia"
            }
          })}
        </script>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold display-5 mb-3">Санкционные и дефицитные компоненты</h2>
          <div className="alert alert-warning d-inline-block">
            ⚠️ Только для проверенных клиентов по специальному запросу
          </div>
          <p className="lead mt-3 max-w-800 mx-auto">
            Специальные условия поставки компонентов, недоступных через официальные каналы
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="row g-4 mb-5"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="col-md-6 col-lg-3"
            >
              <div className="card h-100 bg-dark-2 border-0 shadow-lg-hover transition-all">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="h4 mb-3">{feature.title}</h3>
                  <p className="mb-4">{feature.description}</p>
                  <ul className="text-start ps-3 text-muted">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="mb-2">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="workflow-wrapper bg-dark-2 rounded-3 p-4 p-lg-5 mb-5"
        >
          <h3 className="text-center mb-5 fw-bold">Процесс работы</h3>
          <div className="row g-4 justify-content-center">
            {workflow.map((step, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="d-flex flex-column align-items-center text-center h-100">
                  <div className="step-number bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3">
                    <span className="fw-bold">{step.step}</span>
                  </div>
                  <div className="step-icon bg-white text-dark rounded-circle p-3 mb-3">
                    {step.icon}
                  </div>
                  <h4 className="h5 mb-2">{step.title}</h4>
                  <p className="text-muted mb-0">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-5"
        >
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/contact" 
              className="btn btn-primary btn-lg px-4 py-2 fw-bold"
              style={{
                minWidth: '200px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Оставить заявку
            </Link>
            
            <Link 
              to="/services" 
              className="btn btn-outline-light btn-lg px-4 py-2 fw-bold"
              style={{
                minWidth: '200px',
                transition: 'all 0.3s ease',
                borderWidth: '2px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Наши услуги
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SanctionedComponents;