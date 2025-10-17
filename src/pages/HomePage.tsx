import { HeroSlider } from '../components/HeroSlider/HeroSlider';
import { Categories } from '../components/Categories/Categories';
import { Products } from '../components/Products/Products';
import { Reviews } from '../components/Reviews/Reviews';
import type { CartItem } from '../types/index';

interface HomePageProps {
  addToCart: (item: CartItem) => void;
  toggleFavorite: (id: string) => void;
  favorites: string[];
}

export const HomePage = ({ addToCart, toggleFavorite, favorites }: HomePageProps) => {
  return (
    <div className="home-page">
      <div className="container">
        <HeroSlider />
      </div>
      <Categories />
      <Products addToCart={addToCart} toggleFavorite={toggleFavorite} favorites={favorites} />
      <Reviews />
    </div>
  );
};
