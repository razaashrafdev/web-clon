import React, { useState } from 'react';
import './Products.css';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';

const Products = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const products = [
        {
            id: 1,
            name: "Classic White T-Shirt",
            category: "Men",
            price: 29.99,
            originalPrice: 39.99,
            rating: 4.5,
            imageColor: "#e2e8f0"
        },
        {
            id: 2,
            name: "Summer Floral Dress",
            category: "Women",
            price: 59.99,
            originalPrice: 79.99,
            rating: 4.8,
            imageColor: "#fed7d7"
        },
        {
            id: 3,
            name: "Running Sneakers",
            category: "Footwear",
            price: 89.99,
            originalPrice: 119.99,
            rating: 4.3,
            imageColor: "#c6f6d5"
        },
        {
            id: 4,
            name: "Leather Handbag",
            category: "Accessories",
            price: 129.99,
            originalPrice: 159.99,
            rating: 4.7,
            imageColor: "#e9d8fd"
        },
        {
            id: 5,
            name: "Wireless Headphones",
            category: "Electronics",
            price: 199.99,
            originalPrice: 249.99,
            rating: 4.6,
            imageColor: "#bee3f8"
        },
        {
            id: 6,
            name: "Sunglasses",
            category: "Accessories",
            price: 45.99,
            originalPrice: 59.99,
            rating: 4.4,
            imageColor: "#fed7e2"
        },
        {
            id: 7,
            name: "Casual Blazer",
            category: "Men",
            price: 149.99,
            originalPrice: 199.99,
            rating: 4.2,
            imageColor: "#e2e8f0"
        },
        {
            id: 8,
            name: "Evening Gown",
            category: "Women",
            price: 199.99,
            originalPrice: 299.99,
            rating: 4.9,
            imageColor: "#fed7d7"
        },
    ];

    const filters = [
        { id: 'all', label: 'All Products' },
        { id: 'popular', label: 'Popular' },
        { id: 'new', label: 'New Arrivals' },
        { id: 'sale', label: 'On Sale' },
    ];

    return (
        <section className="products">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Featured Products</h2>
                        <p className="section-subtitle">Handpicked items just for you</p>
                    </div>

                    <div className="product-filters">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <div
                                    className="image-placeholder"
                                    style={{ backgroundColor: product.imageColor }}
                                >
                                    <div className="product-badge">Sale</div>
                                    <button className="wishlist-btn">
                                        <FiHeart size={20} />
                                    </button>
                                    <div className="placeholder-content">Product Image</div>
                                </div>
                            </div>

                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>

                                <div className="product-rating">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                size={16}
                                                fill={i < Math.floor(product.rating) ? "#f6ad55" : "none"}
                                                color={i < Math.floor(product.rating) ? "#f6ad55" : "#e2e8f0"}
                                            />
                                        ))}
                                    </div>
                                    <span className="rating-value">{product.rating}</span>
                                </div>

                                <div className="product-pricing">
                                    <span className="current-price">${product.price}</span>
                                    <span className="original-price">${product.originalPrice}</span>
                                    <span className="discount">
                                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                                    </span>
                                </div>

                                <button className="add-to-cart">
                                    <FiShoppingCart size={18} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-more">
                    <button className="btn-secondary">View All Products</button>
                </div>
            </div>
        </section>
    );
};

export default Products;