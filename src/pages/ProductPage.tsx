import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ShoppingCart,
  Star,
  ChevronRight,
  Play,
  User,
} from 'lucide-react';
import './ProductPage.css';

const mockProduct = {
  id: '1',
  name: 'Беспроводные наушники Pro Max',
  price: 24990,
  discountPrice: 19990,
  rating: 4.8,
  sku: 'ELEC-001',
  description:
    'Премиальные беспроводные наушники с активным шумоподавлением, обеспечивающие непревзойденное качество звука и комфорт на весь день.',
  images: [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop',
  ],
  variants: [
    { type: 'color' as const, value: 'Черный', available: true },
    { type: 'color' as const, value: 'Белый', available: true },
    { type: 'color' as const, value: 'Серебристый', available: false },
  ],
  specifications: {
    Бренд: 'ProAudio',
    Тип: 'Полноразмерные',
    'Тип подключения': 'Беспроводные',
    'Время работы': '30 часов',
    Микрофон: 'Да',
    'Вес': '250 г',
  },
  reviews: [
    {
      id: '1',
      author: 'Александр К.',
      rating: 5,
      date: '2025-09-15',
      comment:
        'Отличные наушники! Звук чистый, шумоподавление работает великолепно. Рекомендую!',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop'],
    },
    {
      id: '2',
      author: 'Мария С.',
      rating: 4,
      date: '2025-09-10',
      comment: 'Хорошее качество звука, удобные. Единственный минус - немного тяжеловаты.',
    },
    {
      id: '3',
      author: 'Дмитрий П.',
      rating: 5,
      date: '2025-09-05',
      comment: 'Лучшие наушники в этой цене! Батарея держит действительно долго.',
      video: 'https://example.com/video',
    },
  ],
};

export const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<'specs' | 'reviews'>('specs');

  const breadcrumbs = ['Главная', 'Электроника', 'Наушники', mockProduct.name];

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

  const renderStars = (rating: number, size: number = 20) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={size}
            fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
            className="star"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="product-page">
      <div className="container">
        <nav className="breadcrumbs">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="breadcrumb-item">
              <span>{crumb}</span>
              {index < breadcrumbs.length - 1 && <ChevronRight size={16} />}
            </div>
          ))}
        </nav>

        <div className="product-main">
          <div className="product-images">
            <motion.div
              className="main-image"
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={mockProduct.images[selectedImage]} alt={mockProduct.name} />
            </motion.div>

            <div className="image-gallery">
              {mockProduct.images.map((image, index) => (
                <motion.button
                  key={index}
                  className={`gallery-item ${index === selectedImage ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={image} alt={`${mockProduct.name} ${index + 1}`} />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{mockProduct.name}</h1>

            <div className="product-meta">
              <div className="rating-wrapper">
                {renderStars(mockProduct.rating)}
                <span className="rating-value">{mockProduct.rating}</span>
                <span className="reviews-count">
                  ({mockProduct.reviews.length} {getReviewsWord(mockProduct.reviews.length)})
                </span>
              </div>
              <div className="sku">Артикул: {mockProduct.sku}</div>
            </div>

            <p className="product-description">{mockProduct.description}</p>

            <div className="variants">
              <h3 className="variants-title">Цвет:</h3>
              <div className="variants-options">
                {mockProduct.variants.map((variant) => (
                  <motion.button
                    key={variant.value}
                    className={`variant-btn ${
                      selectedVariants[variant.type] === variant.value ? 'active' : ''
                    } ${!variant.available ? 'disabled' : ''}`}
                    onClick={() =>
                      variant.available &&
                      setSelectedVariants({ ...selectedVariants, [variant.type]: variant.value })
                    }
                    whileHover={variant.available ? { scale: 1.05 } : {}}
                    whileTap={variant.available ? { scale: 0.95 } : {}}
                    disabled={!variant.available}
                  >
                    {variant.value}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="price-section">
              <div className="price-wrapper">
                <span className="price-current">
                  {mockProduct.discountPrice!.toLocaleString()}₽
                </span>
                <span className="price-old">{mockProduct.price.toLocaleString()}₽</span>
                <span className="discount-badge">
                  -{Math.round(((mockProduct.price - mockProduct.discountPrice!) / mockProduct.price) * 100)}%
                </span>
              </div>
            </div>

            <div className="product-actions">
              <motion.button
                className="add-to-cart-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart size={20} />
                Добавить в корзину
              </motion.button>

              <motion.button
                className="favorite-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart size={24} />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Характеристики
            </button>
            <button
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Отзывы ({mockProduct.reviews.length})
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'specs' && (
              <motion.div
                className="specs-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <table className="specs-table">
                  <tbody>
                    {Object.entries(mockProduct.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-key">{key}</td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                className="reviews-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {mockProduct.reviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="review-author">
                        <div className="author-avatar">
                          <User size={24} />
                        </div>
                        <div>
                          <div className="author-name">{review.author}</div>
                          <div className="review-date">{review.date}</div>
                        </div>
                      </div>
                      {renderStars(review.rating, 16)}
                    </div>

                    <p className="review-comment">{review.comment}</p>

                    {review.images && (
                      <div className="review-media">
                        {review.images.map((image, idx) => (
                          <img key={idx} src={image} alt={`Review ${idx + 1}`} />
                        ))}
                      </div>
                    )}

                    {review.video && (
                      <div className="review-video">
                        <Play size={32} />
                        <span>Видеоотзыв</span>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
