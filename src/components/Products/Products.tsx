import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import type { Product, CartItem } from '../../types/index';
import { ProductModal } from '../ProductModal/ProductModal';
import './Products.css';

const products: Product[] = [
  {
    id: '1',
    name: 'Букет "Нежность"',
    price: 3500,
    discountPrice: 2500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop',
    ],
    category: 'Букеты',
    description: 'Нежный букет из роз и эустомы. Идеальный подарок для любого случая',
    sku: 'BQ-001',
    variants: [
      { id: 'size-1', type: 'size', value: 'Маленький', available: true },
      { id: 'size-2', type: 'size', value: 'Средний', available: true },
      { id: 'size-3', type: 'size', value: 'Большой', available: true },
      { id: 'size-4', type: 'size', value: 'Премиум', available: true },
      { id: 'color-1', type: 'color', value: 'Розовый', available: true },
      { id: 'color-2', type: 'color', value: 'Красный', available: true },
      { id: 'color-3', type: 'color', value: 'Белый', available: true },
      { id: 'color-4', type: 'color', value: 'Микс', available: true },
    ],
    reviews: [
      { id: '1', author: 'Анна К.', rating: 5, comment: 'Прекрасный букет!', date: '2025-10-01' },
      { id: '2', author: 'Петр С.', rating: 5, comment: 'Очень свежие цветы', date: '2025-10-02' },
    ],
  },
  {
    id: '2',
    name: 'Букет "Роскошь"',
    price: 5000,
    discountPrice: 3900,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=800&h=800&fit=crop',
    ],
    category: 'Букеты',
    description: 'Роскошный букет из пионов и роз премиум класса',
    sku: 'BQ-002',
    variants: [
      { id: 'size-1', type: 'size', value: 'Маленький', available: true },
      { id: 'size-2', type: 'size', value: 'Средний', available: true },
      { id: 'size-3', type: 'size', value: 'Большой', available: true },
      { id: 'size-4', type: 'size', value: 'Премиум', available: true },
      { id: 'color-1', type: 'color', value: 'Розовый', available: true },
      { id: 'color-2', type: 'color', value: 'Красный', available: true },
      { id: 'color-3', type: 'color', value: 'Белый', available: true },
      { id: 'color-4', type: 'color', value: 'Микс', available: true },
    ],
    reviews: [
      { id: '1', author: 'Мария Л.', rating: 5, comment: 'Роскошные цветы!', date: '2025-09-28' },
    ],
  },
  {
    id: '3',
    name: 'Букет "Весенний"',
    price: 4200,
    discountPrice: 3100,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=800&fit=crop',
    ],
    category: 'Букеты',
    description: 'Свежий весенний букет из тюльпанов и нарциссов',
    sku: 'BQ-003',
    variants: [
      { id: 'size-1', type: 'size', value: 'Маленький', available: true },
      { id: 'size-2', type: 'size', value: 'Средний', available: true },
      { id: 'size-3', type: 'size', value: 'Большой', available: true },
      { id: 'size-4', type: 'size', value: 'Премиум', available: true },
      { id: 'color-1', type: 'color', value: 'Розовый', available: true },
      { id: 'color-2', type: 'color', value: 'Красный', available: true },
      { id: 'color-3', type: 'color', value: 'Белый', available: true },
      { id: 'color-4', type: 'color', value: 'Микс', available: true },
    ],
    reviews: [
      { id: '1', author: 'Елена В.', rating: 5, comment: 'Очень красивый весенний букет!', date: '2025-09-25' },
    ],
  },
  {
    id: '4',
    name: 'Букет "Яркий день"',
    price: 3800,
    discountPrice: 2800,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=800&fit=crop',
    ],
    category: 'Букеты',
    description: 'Яркий букет из подсолнухов и гербер',
    sku: 'BQ-004',
    variants: [
      { id: 'size-1', type: 'size', value: 'Маленький', available: true },
      { id: 'size-2', type: 'size', value: 'Средний', available: true },
      { id: 'size-3', type: 'size', value: 'Большой', available: true },
      { id: 'size-4', type: 'size', value: 'Премиум', available: true },
      { id: 'color-1', type: 'color', value: 'Розовый', available: true },
      { id: 'color-2', type: 'color', value: 'Красный', available: true },
      { id: 'color-3', type: 'color', value: 'Белый', available: true },
      { id: 'color-4', type: 'color', value: 'Микс', available: true },
    ],
    reviews: [
      { id: '1', author: 'Дмитрий П.', rating: 5, comment: 'Невероятно яркие цветы!', date: '2025-09-22' },
    ],
  },
  {
    id: '5',
    name: 'Букет "Романтика"',
    price: 5200,
    discountPrice: 3900,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=800&fit=crop',
    ],
    category: 'Букеты',
    description: 'Романтичный букет из розовых пионов и роз',
    sku: 'BQ-005',
    variants: [
      { id: 'size-1', type: 'size', value: 'Маленький', available: true },
      { id: 'size-2', type: 'size', value: 'Средний', available: true },
      { id: 'size-3', type: 'size', value: 'Большой', available: true },
      { id: 'size-4', type: 'size', value: 'Премиум', available: true },
      { id: 'color-1', type: 'color', value: 'Розовый', available: true },
      { id: 'color-2', type: 'color', value: 'Красный', available: true },
      { id: 'color-3', type: 'color', value: 'Белый', available: true },
      { id: 'color-4', type: 'color', value: 'Микс', available: true },
    ],
    reviews: [
      { id: '1', author: 'Ольга М.', rating: 5, comment: 'Идеальный букет для свидания!', date: '2025-09-28' },
    ],
  },
  {
    id: '6',
    name: 'Букет "Солнечный"',
    price: 4500,
    discountPrice: 3300,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=800&fit=crop',
    ],
    category: 'Букеты',
    description: 'Солнечный букет из желтых роз и хризантем',
    sku: 'BQ-006',
    variants: [
      { id: 'size-1', type: 'size', value: 'Маленький', available: true },
      { id: 'size-2', type: 'size', value: 'Средний', available: true },
      { id: 'size-3', type: 'size', value: 'Большой', available: true },
      { id: 'size-4', type: 'size', value: 'Премиум', available: true },
      { id: 'color-1', type: 'color', value: 'Розовый', available: true },
      { id: 'color-2', type: 'color', value: 'Красный', available: true },
      { id: 'color-3', type: 'color', value: 'Белый', available: true },
      { id: 'color-4', type: 'color', value: 'Микс', available: true },
    ],
    reviews: [
      { id: '1', author: 'Игорь С.', rating: 5, comment: 'Очень солнечное настроение!', date: '2025-09-26' },
    ],
  },
  {
    id: '7',
    name: 'Букет "Элегант"',
    price: 5800,
    discountPrice: 4300,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=800&h=800&fit=crop',
    ],
    category: 'Букеты',
    description: 'Элегантный букет из белых лилий и орхидей',
    sku: 'BQ-007',
    variants: [
      { id: 'size-1', type: 'size', value: 'Маленький', available: true },
      { id: 'size-2', type: 'size', value: 'Средний', available: true },
      { id: 'size-3', type: 'size', value: 'Большой', available: true },
      { id: 'size-4', type: 'size', value: 'Премиум', available: true },
      { id: 'color-1', type: 'color', value: 'Розовый', available: true },
      { id: 'color-2', type: 'color', value: 'Красный', available: true },
      { id: 'color-3', type: 'color', value: 'Белый', available: true },
      { id: 'color-4', type: 'color', value: 'Микс', available: true },
    ],
    reviews: [
      { id: '1', author: 'Наталья К.', rating: 5, comment: 'Шикарные цветы премиум класса!', date: '2025-09-30' },
    ],
  },
  {
    id: '8',
    name: 'Букет "Мечта"',
    price: 4800,
    discountPrice: 3500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=800&fit=crop',
    ],
    category: 'Букеты',
    description: 'Нежный букет из сиреневых эустом и фрезий',
    sku: 'BQ-008',
    variants: [
      { id: 'size-1', type: 'size', value: 'Маленький', available: true },
      { id: 'size-2', type: 'size', value: 'Средний', available: true },
      { id: 'size-3', type: 'size', value: 'Большой', available: true },
      { id: 'size-4', type: 'size', value: 'Премиум', available: true },
      { id: 'color-1', type: 'color', value: 'Розовый', available: true },
      { id: 'color-2', type: 'color', value: 'Красный', available: true },
      { id: 'color-3', type: 'color', value: 'Белый', available: true },
      { id: 'color-4', type: 'color', value: 'Микс', available: true },
    ],
    reviews: [
      { id: '1', author: 'Виктория Т.', rating: 5, comment: 'Букет мечты, спасибо!', date: '2025-09-24' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

interface ProductsProps {
  addToCart: (item: CartItem) => void;
  toggleFavorite: (id: string) => void;
  favorites: string[];
}

export const Products = ({ addToCart, toggleFavorite, favorites }: ProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleFavoriteClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    toggleFavorite(productId);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
            className="star"
          />
        ))}
        <span className="rating-text">{rating}</span>
      </div>
    );
  };

  return (
    <section className="products-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Популярные букеты
        </motion.h2>

        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                {product.discountPrice && (
                  <div className="discount-badge">
                    -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                  </div>
                )}

                <div className="product-actions">
                  <motion.button
                    className={`action-btn ${favorites.includes(product.id) ? 'active' : ''}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => handleFavoriteClick(e, product.id)}
                  >
                    <Heart size={20} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </motion.button>
                  <motion.button
                    className="action-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ShoppingCart size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                {renderStars(product.rating)}

                <div className="product-price">
                  {product.discountPrice ? (
                    <>
                      <span className="price-current">
                        {product.discountPrice.toLocaleString()}₽
                      </span>
                      <span className="price-old">
                        {product.price.toLocaleString()}₽
                      </span>
                    </>
                  ) : (
                    <span className="price-current">
                      {product.price.toLocaleString()}₽
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addToCart={addToCart}
      />
    </section>
  );
};
