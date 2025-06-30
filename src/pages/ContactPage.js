import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTelegram, FaWhatsapp, FaWeixin, FaPaperclip } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Свяжитесь с нами</h1>
              <p className="lead">
                Наша команда готова оперативно обработать ваш запрос и предложить оптимальные условия поставки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="fw-bold mb-4">Контактная информация</h2>
                  
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">Реквизиты компании</h5>
                    <p className="mb-1"><strong>SinoCore Supply</strong></p>
                    <p className="text-muted">Торгово-логистическая компания</p>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">Офисы</h5>
                    <div className="d-flex mb-3">
                      <FaMapMarkerAlt className="text-primary mt-1 me-3" />
                      <div>
                        <p className="mb-1 fw-bold">Китай (головной офис)</p>
                        <p className="text-muted mb-0">г. Шэньчжэнь, ул. Наншань, 45</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <FaMapMarkerAlt className="text-primary mt-1 me-3" />
                      <div>
                        <p className="mb-1 fw-bold">Россия (представительство)</p>
                        <p className="text-muted mb-0">г. Москва, ул. Автозаводская, 23</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">Время работы</h5>
                    <div className="d-flex">
                      <FaClock className="text-primary mt-1 me-3" />
                      <p className="text-muted mb-0">Пн-Пт, с 9:00 до 19:00 (MSK)</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="fw-bold mb-3">Способы связи</h5>
                    <div className="d-flex mb-2">
                      <FaPhone className="text-primary mt-1 me-3" />
                      <p className="mb-0">+7 (499) 123-45-67</p>
                    </div>
                    <div className="d-flex mb-2">
                      <FaEnvelope className="text-primary mt-1 me-3" />
                      <p className="mb-0">sales@sinocore-supply.com</p>
                    </div>
                    <div className="d-flex mb-2">
                      <FaTelegram className="text-primary mt-1 me-3" />
                      <p className="mb-0">@sinocore_support</p>
                    </div>
                    <div className="d-flex mb-2">
                      <FaWhatsapp className="text-primary mt-1 me-3" />
                      <p className="mb-0">+86 139 0000 0000</p>
                    </div>
                    <div className="d-flex">
                      <FaWeixin className="text-primary mt-1 me-3" />
                      <p className="mb-0">SinoCoreChina</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="fw-bold mb-4">Форма запроса</h2>
                  <p className="text-muted mb-4">
                    Если вы ищете конкретные компоненты или хотите отправить BOM, заполните форму ниже — мы ответим в течение 1 рабочего дня.
                  </p>

                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Имя и компания *</label>
                      <input type="text" className="form-control" id="name" required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="contact" className="form-label">Email или телефон *</label>
                      <input type="text" className="form-control" id="contact" required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Сообщение / список компонентов / артикулы *</label>
                      <textarea className="form-control" id="message" rows="4" required></textarea>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="attachment" className="form-label">Прикрепить файл</label>
                      <div className="input-group">
                        <input type="file" className="form-control" id="attachment" />
                        <span className="input-group-text">
                          <FaPaperclip />
                        </span>
                      </div>
                      <div className="form-text">Форматы: .xls, .csv, .pdf до 10 МБ</div>
                    </div>

                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" id="confidentiality" required />
                      <label className="form-check-label" htmlFor="confidentiality">
                        Я согласен на обработку персональных данных и понимаю, что все обращения обрабатываются в режиме полной конфиденциальности
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-2">
                      Отправить запрос
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Наши офисы</h2>
            <p className="lead text-muted">Мы находимся в ключевых точках логистических маршрутов</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-0">
                  <div className="p-4">
                    <h5 className="fw-bold">Шэньчжэнь, Китай</h5>
                    <p className="text-muted mb-0">ул. Наншань, 45</p>
                  </div>
                  <div className="map-container" style={{ height: '300px', backgroundColor: '#eee' }}>
                    {/* Здесь будет карта Китая */}
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <p className="text-muted">Карта: Шэньчжэнь, Китай</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-0">
                  <div className="p-4">
                    <h5 className="fw-bold">Москва, Россия</h5>
                    <p className="text-muted mb-0">ул. Автозаводская, 23</p>
                  </div>
                  <div className="map-container" style={{ height: '300px', backgroundColor: '#eee' }}>
                    {/* Здесь будет карта Москвы */}
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <p className="text-muted">Карта: Москва, Россия</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Нужна консультация?</h2>
          <p className="lead mb-4">
            Наши специалисты готовы ответить на все ваши вопросы и помочь с подбором компонентов
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="tel:+74991234567" className="btn btn-light btn-lg px-4">
              <FaPhone className="me-2" /> Позвонить
            </a>
            <a href="mailto:sales@sinocore-supply.com" className="btn btn-outline-light btn-lg px-4">
              <FaEnvelope className="me-2" /> Написать
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;