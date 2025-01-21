import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import "../styles/ProductSlider.scss";

interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  features: string[];
  oldPrice: number;
  currentPrice: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
    image: "src/img/tire.jpg",
    rating: 4,
    reviews: 10,
    features: ["Зимняя", "Шипованная", "Грязевая"],
    oldPrice: 6750,
    currentPrice: 6750,
  },
  {
    id: 2,
    title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
    image: "src/img/tire2.jpg",
    rating: 4,
    reviews: 10,
    features: ["Зимняя", "Шипованная", "Грязевая"],
    oldPrice: 6750,
    currentPrice: 6750,
  },
  {
    id: 3,
    title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
    image: "src/img/tire.jpg",
    rating: 4,
    reviews: 10,
    features: ["Зимняя", "Шипованная", "Грязевая"],
    oldPrice: 6750,
    currentPrice: 6750,
  },
  {
    id: 4,
    title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
    image: "src/img/tire.jpg",
    rating: 4,
    reviews: 10,
    features: ["Зимняя", "Шипованная", "Грязевая"],
    oldPrice: 6750,
    currentPrice: 6750,
  },
  {
    id: 5,
    title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
    image: "src/img/tire2.jpg",
    rating: 4,
    reviews: 10,
    features: ["Зимняя", "Шипованная", "Грязевая"],
    oldPrice: 6750,
    currentPrice: 6750,
  },
  {
    id: 6,
    title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
    image: "src/img/tire.jpg",
    rating: 4,
    reviews: 10,
    features: ["Зимняя", "Шипованная", "Грязевая"],
    oldPrice: 6750,
    currentPrice: 6750,
  },
];

const ProductSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 4 }), {})
  );

  const slidesPerView = 5;
  const infiniteProducts = [...products, ...products, ...products];

  // Обработчик переключения на предыдущий слайд
  const handlePrevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? infiniteProducts.length - slidesPerView : current - 1
    );
  };

  // Обработчик переключения на следующий слайд
  const handleNextSlide = () => {
    setCurrentSlide((current) => (current + 1) % infiniteProducts.length);
  };

  // Обработчик изменения количества
  const handleQuantityChange = (productId: number, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 0) + change),
    }));
  };

  return (
    <section className="slider-section">
      <div className="slider-container">
        <h2>ХИТЫ ПРОДАЖ</h2>

        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {infiniteProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="product-card">
              <div className="product-card__images">
                <div className="product-card__icons">
                  <img src="src/img/Top.jpg" alt="Top" width={35} height={35} />
                  <img
                    src="src/img/garant.jpg"
                    alt="garant"
                    width={35}
                    height={35}
                  />
                  <img
                    src="src/img/discount.jpg"
                    alt="discount"
                    width={35}
                    height={35}
                  />
                  <img
                    src="src/img/gift.jpg"
                    alt="gift"
                    width={35}
                    height={35}
                  />
                  <img src="src/img/hit.jpg" alt="hit" width={35} height={35} />
                </div>
                <img src={product.image} alt={product.title} />
              </div>

              <div className="card-container">
                <h3 className="product-card__title">{product.title}</h3>

                <div className="product-card__rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        fill={index < product.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="reviews">{product.reviews} отзывов</span>
                </div>

                <div className="product-card__features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature">
                      {feature === "Зимняя" && (
                        <img
                          src="src/img/winter.jpg"
                          alt="winter"
                          width={30}
                          height={30}
                        />
                      )}
                      {feature === "Шипованная" && (
                        <img
                          src="src/img/studded.jpg"
                          alt="studded"
                          width={30}
                          height={30}
                        />
                      )}
                      {feature === "Грязевая" && (
                        <img
                          src="src/img/mud.jpg"
                          alt="mud"
                          width={30}
                          height={30}
                        />
                      )}
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="product-card__price">
                  <div className="old-price">{product.oldPrice} ₽</div>
                  <div className="current-price">{product.currentPrice} ₽</div>
                </div>

                <div className="product-card__actions">
                  <div className="quantity">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                    >
                      -
                    </button>
                    <span>{quantities[product.id]}</span>
                    <button onClick={() => handleQuantityChange(product.id, 1)}>
                      +
                    </button>
                  </div>
                  <button className="primary-button">В корзину</button>
                  <button className="secondary-button">
                    <Heart size={20} />
                  </button>
                </div>
                <button className="button_by_click">Купить в 1 клик</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <div className="slider-buttons_container">
          <button
            className="slider-button slider-button--prev"
            onClick={handlePrevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="slider-button slider-button--next"
            onClick={handleNextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <button className="view-all">Смотреть все</button>
      </div>
    </section>
  );
};

export default ProductSlider;
