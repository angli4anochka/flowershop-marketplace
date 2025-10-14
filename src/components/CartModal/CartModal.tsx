import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import type { CartItem } from '../../types/index';
import './CartModal.css';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, newQuantity: number) => void;
  removeFromCart: (id: string) => void;
}

export const CartModal = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }: CartModalProps) => {
  const totalPrice = cart.reduce((sum, item) => {
    const price = item.discountPrice || item.price;
    return sum + price * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cart-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="cart-modal-container"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cart-modal-header">
              <h2>Корзина</h2>
              <button className="cart-modal-close" onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            <div className="cart-modal-content">
              {cart.length === 0 ? (
                <div className="cart-empty">
                  <p>Корзина пуста</p>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                          <h4>{item.name}</h4>
                          <p className="cart-item-price">
                            {(item.discountPrice || item.price).toLocaleString()} ₽
                          </p>
                        </div>
                        <div className="cart-item-controls">
                          <div className="cart-quantity-controls">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            >
                              <Minus size={16} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            className="cart-item-remove"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cart-modal-footer">
                    <div className="cart-total">
                      <span>Итого:</span>
                      <span className="cart-total-price">{totalPrice.toLocaleString()} ₽</span>
                    </div>
                    <motion.button
                      className="cart-checkout-btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Оформить заказ
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
