import { motion } from 'framer-motion';
import type { Category } from '../../types/index';
import './Categories.css';

const categories: Category[] = [
  {
    id: '1',
    name: 'Букеты',
    description: 'Готовые букеты на любой случай',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=300&fit=crop',
    productCount: 156,
  },
  {
    id: '2',
    name: 'Розы',
    description: 'Красные, белые, розовые розы',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=300&fit=crop',
    productCount: 89,
  },
  {
    id: '3',
    name: 'Тюльпаны',
    description: 'Весенние тюльпаны всех цветов',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
    productCount: 67,
  },
  {
    id: '4',
    name: 'Пионы',
    description: 'Нежные пионы премиум класса',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=300&fit=crop',
    productCount: 42,
  },
  {
    id: '5',
    name: 'Композиции',
    description: 'Цветочные композиции в корзинах',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop',
    productCount: 78,
  },
  {
    id: '6',
    name: 'Орхидеи',
    description: 'Экзотические орхидеи',
    image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=300&fit=crop',
    productCount: 34,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Categories = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Категории цветов
        </motion.h2>

        <motion.div
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="category-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay" />
              </div>

              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-count">
                  {category.productCount.toLocaleString()} товаров
                </div>
              </div>

              <motion.div
                className="category-hover-effect"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <span>Перейти</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
