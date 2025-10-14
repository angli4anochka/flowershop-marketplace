import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Heart } from 'lucide-react';
import type { Product, CartItem } from '../../types/index';
import './ProductModal.css';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  addToCart: (item: CartItem) => void;
}

export const ProductModal = ({ product, isOpen, onClose, addToCart }: ProductModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setSelectedSize(null);
    setSelectedColor(null);
  }, [product?.id]);

  const getReviewsWord = (count: number) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return 'отзывов';
    }
    if (lastDigit === 1) {
      return 'отзыв';
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'отзыва';
    }
    return 'отзывов';
  };

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    onClose();
  };

  const images = product.images || [product.image];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="product-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="product-modal-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="product-modal-close" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="product-modal-content">
              <div className="product-modal-images">
                <div className="product-modal-main-image">
                  <img src={images[selectedImage]} alt={product.name} />
                </div>
                <div className="product-modal-thumbnails">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-modal-info">
                <h2 className="product-modal-title">{product.name}</h2>

                <div className="product-modal-rating">
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>★</span>
                    ))}
                  </div>
                  <span className="rating-value">{product.rating}</span>
                  <span className="reviews-count">({product.reviews?.length || 0} {getReviewsWord(product.reviews?.length || 0)})</span>
                </div>

                <div className="product-modal-price">
                  {product.discountPrice ? (
                    <>
                      <span className="current-price">
                        {product.discountPrice.toLocaleString()} ₽
                      </span>
                      <span className="old-price">
                        {product.price.toLocaleString()} ₽
                      </span>
                      <span className="discount-percent">
                        -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                      </span>
                    </>
                  ) : (
                    <span className="current-price">
                      {product.price.toLocaleString()} ₽
                    </span>
                  )}
                </div>

                <div className="product-modal-sku">
                  <span>Артикул: {product.sku}</span>
                </div>

                {product.variants && product.variants.filter(v => v.type === 'size').length > 0 && (
                  <div className="product-modal-variants">
                    <div className="variants-buttons">
                      {product.variants.filter(v => v.type === 'size').map((variant) => (
                        <button
                          key={variant.id}
                          className={`variant-btn ${selectedSize === variant.id ? 'active' : ''}`}
                          disabled={!variant.available}
                          onClick={() => setSelectedSize(variant.id)}
                        >
                          {variant.value}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {product.variants && product.variants.filter(v => v.type === 'color').length > 0 && (
                  <div className="product-modal-colors">
                    <div className="variants-buttons">
                      {product.variants.filter(v => v.type === 'color').map((variant) => (
                        <button
                          key={variant.id}
                          className={`variant-btn ${selectedColor === variant.id ? 'active' : ''}`}
                          disabled={!variant.available}
                          onClick={() => setSelectedColor(variant.id)}
                        >
                          {variant.value}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="product-modal-quantity">
                  <h4>Количество:</h4>
                  <div className="quantity-controls">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="product-modal-description">
                  <p><strong>Описание:</strong> {product.description}</p>
                </div>

                <div className="product-modal-actions">
                  <motion.button
                    className="add-to-cart"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={20} />
                    В корзину
                  </motion.button>
                  <motion.button
                    className="add-to-favorites"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
