import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'Новая коллекция букетов',
    subtitle: 'Скидки до 50% на свежие цветы',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1200&h=500&fit=crop',
    cta: 'Смотреть',
  },
  {
    id: 2,
    title: 'Букеты на любой случай',
    subtitle: 'Свежие цветы каждый день',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&h=500&fit=crop',
    cta: 'Купить сейчас',
  },
  {
    id: 3,
    title: 'Бесплатная доставка при заказе от 3000₽',
    subtitle: 'Узнайте больше о наших условиях доставки',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=500&fit=crop',
    cta: 'Узнать больше',
  },
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="slide"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="slide-image-container">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="slide-image"
            />
            <div className="slide-overlay" />
          </div>

          <div className="slide-content container">
            <motion.h1
              className="slide-title"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {slides[currentIndex].title}
            </motion.h1>

            <motion.p
              className="slide-subtitle"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {slides[currentIndex].subtitle}
            </motion.p>

            <motion.button
              className="slide-cta"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {slides[currentIndex].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="slider-btn slider-btn-next" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
