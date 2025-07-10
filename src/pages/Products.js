import React from 'react';
import { FaBoxOpen, FaSearchDollar, FaShippingFast, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  // Пример данных о товарах
  const products = [
    {
      id: 1,
      name: "Аналог ADIS 16488 Инерциальный измерительный блок (IMU)",
      description: "высокоточный IMU с 3-осевыми гироскопами (±2000°/с) и акселерометрами (±18 g). Встроенная температурная компенсация, цифровой интерфейс (SPI). Применяется в навигации, БПЛА, робототехнике",
      image: "/productimg/ADIS16488.jpg",
      category: "Даталогеры"
    },
    {
      id: 2,
      name: "Реле электромагнитное РЭС 47",
      description: "электромагнитное реле общего назначения с переключающими контактами. Работает в цепях постоянного и переменного тока, компактное, надежное. Применяется в автоматике, защитных схемах, промышленной электронике.",
      image: "/productimg/РЭС47-2.jpg",
      category: "Электронные компоненты"
    },
    {
      id: 3,
      name: "Высокоточный трехосевой акселерометр  ADXL357B",
      description: "высокоточный трёхосевой акселерометр с низким уровнем шума и широким диапазоном измерений (±40 g). Оснащён цифровым интерфейсом (SPI/I²C), встроенной температурной компенсацией. Применяется в промышленной автоматике, навигации, мониторинге вибраций.",
      image: "/productimg/ADXL357B-2.jpg",
      category: "Датчики"
    },
    {
      id: 4,
      name: "Батарейки Molicel оригинал",
      description: "оригинальные высокоэффективные литий-ионные батарейки и аккумуляторы с высокой токоотдачей и энергоемкостью. Оптимальны для мощных устройств: вейпов, электротранспорта, промышленного оборудования.",
      image: "/productimg/Molice.jpg",
      category: "Аккумуляторы и батарейки"
    },
    {
      id: 5,
      name: "U-blox NEO-M8N-0-10",
      description: "высокочувствительный GPS-модуль с поддержкой одновременного приёма сигналов GPS/ГЛОНАСС. Обеспечивает быстрое позиционирование, низкое энергопотребление и устойчивость к помехам. Применяется в навигации, трекерах, дронах и геодезии.",
      image: "/productimg/NEO-M8N-0-10.jpg",
      category: "Электронные компоненты"
    },
    {
      id: 6,
      name: "Коннекторы amhenol",
      description: "высококачественные коннекторы для промышленного и коммерческого применения. Отличаются надежностью, устойчивостью к вибрациям и перепадам температур. Широкий ассортимент: циркулярные, прямоугольные, RF, коаксиальные и специализированные решения.",
      image: "/productimg/amhenol.jpg",
      category: "Электронные компоненты"
    },
    {
      id: 7,
      name: "XILINX FGPA XC7K325T-2FFG676I",
      description: "высокопроизводительная ПЛИС (FPGA) серии Kintex-7 с 326 тыс. логических ячеек, встроенной памятью DSP-блоками и поддержкой высокоскоростных интерфейсов (PCIe, SATA, DDR3). Корпус FFG676 (676-контактный BGA). Применяется в телекоммуникациях, обработке сигналов, машинном зрении.",
      image: "/productimg/XILINX.jpg",
      category: "Электронные компоненты"
    },
    {
      id: 8,
      name: "AD9361BBCZ — радиочастотный трансивер от компании Analog Devices",
      description: "широкополосный RF-трансивер от Analog Devices с поддержкой диапазонов 70 МГц – 6 ГГц. Интегрирует 12-битные АЦП/ЦАП, программируемые фильтры и интерфейсы (LVDS, CMOS). Применяется в SDR, базовых станциях, военной и тестовой аппаратуре.",
      image: "/productimg/AD9361BBCZ.jpg",
      category: "Электронные компоненты"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero bg-dark text-white py-5">
        <div className="container py-5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="display-4 fw-bold mb-4">Наши товары</h1>
            <p className="lead">
              Популярные электронные компоненты, которые уже заказывают наши клиенты
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          {/* Microdata для SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": products.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.name,
                  "description": product.description,
                  "category": product.category
                }
              }))
            })}
          </script>

          <div className="row g-4 mb-5">
            {[
              { icon: <FaBoxOpen size={24} />, title: "Широкий ассортимент", text: "Более 5000 позиций в каталоге" },
              { icon: <FaSearchDollar size={24} />, title: "Лучшие цены", text: "Прямые поставки от производителей" },
              { icon: <FaShippingFast size={24} />, title: "Быстрая доставка", text: "От 7 дней с нашего склада" },
              { icon: <FaCertificate size={24} />, title: "Гарантия качества", text: "Проверка перед отправкой" }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="card border-0 bg-light shadow-sm-hover h-100 rounded-4 overflow-hidden">
                    <div className="card-body text-center p-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                        {item.icon}
                      </div>
                      <h3 className="h5 mb-2">{item.title}</h3>
                      <p className="text-muted mb-0">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="row g-4"
          >
            {products.map((product) => (
              <motion.div 
                key={product.id}
                variants={fadeIn}
                className="col-md-6 col-lg-3"
              >
                <div className="card h-100 border-0 bg-light shadow-sm-hover transition-all rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="card-img-top p-3"
                      style={{ height: '200px', objectFit: 'contain' }}
                      loading="lazy"
                    />
                    <span className="position-absolute top-0 end-0 bg-primary text-white small px-3 py-2 rounded-start">
                      {product.category}
                    </span>
                  </div>
                  <div className="card-body p-4">
                    <h3 className="h5 mb-3">{product.name}</h3>
                    <p className="text-muted mb-4">{product.description}</p>
                    <div className="d-grid">
                      <Link 
                        to="/contact" 
                        className="btn btn-primary rounded-pill py-2"
                        state={{ product: product.name }}
                      >
                        Заказать
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Не нашли нужный товар?</h2>
          <p className="lead mb-4">
            Отправьте нам запрос, и мы найдем для вас необходимые компоненты
          </p>
          <Link to="/contact" className="btn btn-light btn-lg px-4 rounded-pill">
            Отправить запрос
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;