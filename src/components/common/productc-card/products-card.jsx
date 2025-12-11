import React, { useState, useEffect } from 'react';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import '../../Products/Products.css';
import { categories } from '../../../../utils/categories';

const ProductsCard = ({ product }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleWishlist = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <div
          className="image-placeholder"
          style={{ backgroundColor: product?.imageColor }}
        >
          <div className="product-badge">Sale</div>
          <button
            className={`wishlist-btn ${isActive ? 'active' : ''}`}
            onClick={toggleWishlist}
          >
            <FiHeart size={20} />
          </button>
          <img className="placeholder-content" src={product?.imgurl} alt="" />
        </div>
      </div>

      <div className="product-info">
        <span className="product-category">{product?.category}</span>
        <h3 className="product-name">{product?.name}</h3>

        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                size={16}
                fill={i < Math.floor(product?.rating) ? "#f6ad55" : "none"}
                color={i < Math.floor(product?.rating) ? "#f6ad55" : "#e2e8f0"}
              />
            ))}
          </div>
          <span className="rating-value">{product?.rating}</span>
        </div>

        <div className="product-pricing">
          <span className="current-price">${product?.price}</span>
          <span className="original-price">${product?.originalPrice}</span>
          <span className="discount">
            -{Math.round((1 - product?.price / product?.originalPrice) * 100)}%
          </span>
        </div>

        <button className="add-to-cart">
          <FiShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [productCards, setProductCards] = useState([]);

  useEffect(() => {
    const cards = [];

    categories?.forEach(category => {
      category.data.forEach(product => {
        cards.push(<ProductsCard key={`${category.id}-${product.id}`} product={product} />);
      });
    });

    setProductCards(cards);
  }, [categories]);

  return (
    <div className="products-page">
      {productCards.length > 0 ? (
        <div className="products-list">
          {productCards}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};
    
export default ProductsPage;
