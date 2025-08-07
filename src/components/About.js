import React from 'react';
import { FaShieldAlt, FaWarehouse, FaRoute, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const advantages = [
    {
      icon: <FaChartLine size={24} className="text-primary" />,
      title: "Опыт работы",
      description: "Более 7 лет успешной работы в международных поставках электронных компонентов"
    },
    {
      icon: <FaWarehouse size={24} className="text-primary" />,
      title: "Складская сеть",
      description: "Доступ к более чем 500 складам в Китае и партнерская сеть поставщиков"
    },
    {
      icon: <FaShieldAlt size={24} className="text-primary" />,
      title: "Конфиденциальность",
      description: "Работаем с закрытыми и эксклюзивными позициями под NDA"
    },
    {
      icon: <FaRoute size={24} className="text-primary" />,
      title: "Гибкая логистика",
      description: "Маршруты, позволяющие оптимизировать время и расходы для любого клиента."
    },
    {
      icon: <FaUsers size={24} className="text-primary" />,
      title: "Клиентоориентированность",
      description: "Персональный менеджер для каждого клиента"
    },
    {
      icon: <FaHandshake size={24} className="text-primary" />,
      title: "Надежность",
      description: "Гарантия качества и соблюдение сроков поставки"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-3 py-md-5 about-section" id="about">
      <div className="container">
        {/* Microdata for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zenith Ltd.",
            "description": "Международная торговая компания, специализирующаяся на поставках электронных компонентов из Китая в Россию",
            "url": "https://zenith.com",
            "logo": "https://zenith.com/logo.png",
            "foundingDate": "2016",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Шэньчжэнь",
              "addressCountry": "CN",
              "streetAddress": "ул. Наншань, 45"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7 (499) 123-45-67",
              "contactType": "sales",
              "email": "sales@zenith.com"
            }
          })}
        </script>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="row align-items-center"
        >
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3 display-5" style={{ fontSize: 'calc(1.425rem + 2.1vw)' }}>О компании Zenith Ltd.</h1>
            <p className="lead text-primary mb-3">
              Мы обеспечиваем российские предприятия надёжными поставками высокотехнологичной продукции — быстро, легально и без компромиссов по качеству.
            </p>
            <div className="mb-3">
              <p>
                <strong>Zenith Ltd.</strong> — это международная торговая компания, специализирующаяся на поставках электронной компонентной базы (ЭКБ), промышленного оборудования и товаров специального назначения из Китая в Россию.
              </p>
              <p>
                Мы работаем напрямую с производителями и авторизованными поставщиками в Китае и по всему миру, обеспечивая стабильные поставки даже в условиях дефицита и логистических ограничений.
              </p>
            </div>

            <div className="bg-light p-3 p-md-4 rounded-3 border-start border-primary border-4">
              <h3 className="h5 fw-bold mb-2 mb-md-3">Наша миссия</h3>
              <p className="mb-0">
                Обеспечивать российские предприятия надёжными поставками высокотехнологичной продукции — быстро, легально и без компромиссов по качеству.
              </p>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="О компании Zenith Ltd." 
                className="img-fluid rounded-3 shadow-lg w-100"
                loading="lazy"
              />
              <div className="position-absolute bottom-0 start-0 bg-primary text-white p-2 p-md-3 rounded-end">
                <h3 className="h5 mb-0">7+ лет на рынке</h3>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="row mt-4 mt-md-5 g-3 g-md-4"
        >
          {advantages.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="col-12 col-sm-6 col-lg-4"
            >
              <div className="card h-100 border-0 shadow-sm-hover p-3 p-md-4 transition-all">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2 mb-md-3">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-3 me-3">
                      {item.icon}
                    </div>
                    <h3 className="h5 mb-0">{item.title}</h3>
                  </div>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Мобильные стили */}
      <style jsx>{`
        @media (max-width: 767.98px) {
          .about-section {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .card {
            border-radius: 0.5rem !important;
          }
          .display-5 {
            font-size: 1.75rem;
          }
          .lead {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;