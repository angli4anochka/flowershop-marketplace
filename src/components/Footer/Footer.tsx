import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🌸</span>
              <span className="logo-text">FlowerShop</span>
            </div>
            <p className="footer-description">
              Ваш надежный цветочный магазин со свежими букетами и быстрой доставкой.
            </p>
            <div className="social-links">
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Покупателям</h3>
            <ul className="footer-links">
              <li><a href="#">Как заказать букет</a></li>
              <li><a href="#">Способы оплаты</a></li>
              <li><a href="#">Доставка цветов</a></li>
              <li><a href="#">Свежесть цветов</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Услуги</h3>
            <ul className="footer-links">
              <li><a href="#">Букеты на заказ</a></li>
              <li><a href="#">Свадебная флористика</a></li>
              <li><a href="#">Корпоративные заказы</a></li>
              <li><a href="#">Подписка на цветы</a></li>
              <li><a href="#">Уход за цветами</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>+7 (800) 555-35-35</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>info@marketplace.ru</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} FlowerShop. Все права защищены.</p>
          <div className="footer-bottom-links">
            <a href="#">Политика конфиденциальности</a>
            <span>•</span>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
