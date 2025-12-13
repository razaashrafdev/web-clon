import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import '../../Products/Products.css';
import { categories } from '../../../../utils/categories'; 

// ------------------- Product Card -------------------
export const ProductsCard = ({ product, removeProduct }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (product.arrivalType === "Coming Soon") {
      // Remove the card from parent
      removeProduct(product.uniqueId);
      return;
    }
    const urlId = product.uniqueId ? product.uniqueId : product.id;
    navigate(`/product/${urlId}`);
  };

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (product.arrivalType === "Coming Soon") {
      removeProduct(product.uniqueId);
      return;
    }
    alert("Added to cart!");
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="product-image">
        <div className="image-placeholder" style={{ backgroundColor: product?.imageColor }}>
          {product.arrivalType && product.arrivalType !== "All New" && (
            <div className="product-badge">{product.arrivalType}</div>
          )}
          <button className={`wishlist-btn ${isActive ? 'active' : ''}`} onClick={toggleWishlist}>
            <FiHeart size={20} />
          </button>
          <img className="placeholder-content" src={product?.imgurl} alt={product?.name} />
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
        </div>
        <div className="product-pricing">
          <span className="current-price">${product?.price}</span>
          {product.originalPrice && <span className="original-price">${product?.originalPrice}</span>}
        </div>
        <button
          className="add-to-cart"
          onClick={handleAddToCart}
          disabled={product.arrivalType === "Coming Soon"}
        >
          {product.arrivalType === "Coming Soon" ? "Coming Soon" : <><FiShoppingCart size={18} /> Add</>}
        </button>
      </div>
    </div>
  );
};

// ------------------- Products Page -------------------
const ProductsPage = ({ categorySlug, arrivalFilter }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!categories) return;

    let products = [];

    if (categorySlug) {
      const targetCategory = categories.find(
        (cat) => cat.id === categorySlug || cat.slug === categorySlug
      );

      if (targetCategory?.data) {
        products = targetCategory.data.map((p) => ({
          ...p,
          uniqueId: `${targetCategory.id}-${p.id}`,
        }));
      }
    } else {
      products = categories.reduce((acc, category) => {
        const productsData = category.data || [];
        const productsWithContext = productsData.map((product) => ({
          ...product,
          uniqueId: `${category.id}-${product.id}`,
        }));
        return [...acc, ...productsWithContext];
      }, []);
    }

    // -------------- New Arrivals Filter -----------------
    if (arrivalFilter && arrivalFilter !== "All New") {
      products = products.filter(
        (product) => product.arrivalType === arrivalFilter
      );
    }

    setFilteredProducts(products);
  }, [categorySlug, arrivalFilter]);

  // ------------- Remove product from list -------------
  const removeProduct = (id) => {
    setFilteredProducts(prev => prev.filter(product => product.uniqueId !== id));
  };

  return (
    <div className="products-page">
      {filteredProducts.length > 0 ? (
        <div className="products-list">
          {filteredProducts.map((product) => (
            <ProductsCard 
              key={product.uniqueId} 
              product={product} 
              removeProduct={removeProduct} 
            />
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductsPage;
