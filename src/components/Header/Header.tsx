import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onAuthClick: () => void;
  onCartClick: () => void;
  cartCount: number;
  favoritesCount: number;
}

export const Header = ({ onAuthClick, onCartClick, cartCount, favoritesCount }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-icon">🌸</span>
            <span className="logo-text">FlowerShop</span>
          </motion.div>

          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Искать цветы..."
              className="search-input"
            />
          </div>

          <div className="nav-icons">
            <motion.button
              className="icon-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart size={24} />
              {favoritesCount > 0 && <span className="badge">{favoritesCount}</span>}
            </motion.button>

            <motion.button
              className="icon-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onCartClick}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </motion.button>

            <motion.button
              className="auth-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAuthClick}
            >
              <User size={20} />
              <span>Войти</span>
            </motion.button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mobile-search">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Искать цветы..."
                className="search-input"
              />
            </div>
            <div className="mobile-nav">
              <button className="mobile-nav-item">
                <Heart size={20} />
                <span>Избранное ({favoritesCount})</span>
              </button>
              <button className="mobile-nav-item" onClick={onCartClick}>
                <ShoppingCart size={20} />
                <span>Корзина ({cartCount})</span>
              </button>
              <button className="mobile-nav-item" onClick={onAuthClick}>
                <User size={20} />
                <span>Войти</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
