import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    id: '1',
    author: 'Анна М.',
    rating: 5,
    date: '15 октября 2025',
    comment: 'Заказывала букет роз на день рождения. Цветы свежайшие, доставили точно в срок. Очень довольна!',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    author: 'Дмитрий К.',
    rating: 5,
    date: '12 октября 2025',
    comment: 'Отличный сервис! Быстрая доставка, красивая упаковка. Жена была в восторге от букета пионов.',
    avatar: 'https://i.pravatar.cc/150?img=13',
  },
  {
    id: '3',
    author: 'Екатерина С.',
    rating: 4,
    date: '10 октября 2025',
    comment: 'Хороший выбор цветов, приятные цены. Единственное - хотелось бы больше экзотических растений.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '4',
    author: 'Алексей П.',
    rating: 5,
    date: '8 октября 2025',
    comment: 'Регулярно заказываю здесь цветы. Всегда свежие, качественные. Рекомендую!',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: '5',
    author: 'Мария В.',
    rating: 5,
    date: '5 октября 2025',
    comment: 'Заказала композицию в корзине на свадьбу подруги. Получилось очень красиво! Спасибо флористам за работу.',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: '6',
    author: 'Сергей Л.',
    rating: 5,
    date: '3 октября 2025',
    comment: 'Удобный сайт, быстрое оформление заказа. Цветы доставили в отличном состоянии.',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
];

export const Reviews = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="review-stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? '#FFB800' : 'none'}
            stroke={i < rating ? '#FFB800' : '#e5e7eb'}
            strokeWidth={1.5}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <motion.h2
          className="reviews-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Отзывы наших клиентов
        </motion.h2>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="review-header">
                <div className="review-author">
                  {review.avatar ? (
                    <img src={review.avatar} alt={review.author} className="author-avatar" />
                  ) : (
                    <div className="author-avatar-placeholder">
                      <User size={20} />
                    </div>
                  )}
                  <div className="author-info">
                    <div className="author-name">{review.author}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                </div>
                {renderStars(review.rating)}
              </div>
              <p className="review-comment">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
