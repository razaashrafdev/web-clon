import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);

    const products = [
        { id: 1, name: "Premium Cotton T-Shirt", price: 24.99, category: "Men", rating: 4.5, stock: "available" },
        { id: 2, name: "Designer Handbag", price: 129.99, category: "Accessories", rating: 4.8, stock: "low" },
        { id: 3, name: "Running Shoes", price: 89.99, category: "Footwear", rating: 4.3, stock: "available" },
        { id: 4, name: "Wireless Earbuds", price: 79.99, category: "Electronics", rating: 4.6, stock: "available" },
        { id: 5, name: "Summer Dress", price: 59.99, category: "Women", rating: 4.7, stock: "available" },
        { id: 6, name: "Leather Wallet", price: 34.99, category: "Accessories", rating: 4.4, stock: "out" },
        { id: 7, name: "Casual Shirt", price: 44.99, category: "Men", rating: 4.2, stock: "available" },
        { id: 8, name: "Skincare Set", price: 69.99, category: "Beauty", rating: 4.9, stock: "available" },
    ];

    return (
        <div className="shop-page fade-in">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Shop All Products</h1>
                    <p className="page-subtitle">
                        Browse our complete collection of premium products and find exactly what you need
                    </p>
                </div>
            </div>

            <div className="page-content">
                <div className="container">
                    <div className="shop-filters-container">
                        <div className="shop-filters-grid">
                            <div className="filter-group">
                                <h3>Categories</h3>
                                <div className="filter-options">
                                    {['Men', 'Women', 'Accessories', 'Footwear', 'Electronics', 'Beauty'].map(cat => (
                                        <label key={cat} className="filter-option">
                                            <input type="checkbox" />
                                            <span className="filter-checkbox"></span>
                                            {cat}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="filter-group">
                                <h3>Price Range</h3>
                                <div className="price-range-container">
                                    <input type="range" className="price-slider" min="0" max="500" defaultValue="250" />
                                    <div className="price-values">
                                        <span>$<span className="price-min">0</span></span>
                                        <span>$<span className="price-max">500+</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shop-controls">
                        <div className="shop-controls-left">
                            <span className="results-count">Showing 8 of 120 products</span>
                            <div className="sort-dropdown">
                                <select className="sort-select">
                                    <option>Sort by: Popularity</option>
                                    <option>Sort by: Price Low to High</option>
                                    <option>Sort by: Price High to Low</option>
                                    <option>Sort by: Rating</option>
                                    <option>Sort by: Newest</option>
                                </select>
                            </div>
                        </div>

                        <div className="shop-controls-right">
                            <button
                                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                aria-label="Grid view"
                            >
                                ▦
                            </button>
                            <button
                                className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                                aria-label="List view"
                            >
                                ☰
                            </button>
                        </div>
                    </div>

                    <div className={`shop-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                        {products.map(product => (
                            <div key={product.id} className={`shop-product-card ${viewMode === 'list' ? 'list-view' : ''}`}>
                                <div className="product-image-placeholder">
                                    Product {product.id}
                                </div>
                                <div className="product-details">
                                    <span className="product-category">{product.category}</span>
                                    <h3 className="product-name">{product.name}</h3>

                                    <div className="product-rating">
                                        <div className="rating-stars">
                                            {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
                                        </div>
                                        <span className="rating-count">({product.rating})</span>
                                    </div>

                                    <p className="product-description">
                                        Premium quality product with excellent features and durable materials.
                                    </p>

                                    <div className="product-price">${product.price}</div>

                                    <div className="product-meta">
                                        <div className={`product-stock ${product.stock}`}>
                                            <span className="stock-dot"></span>
                                            {product.stock === 'available' && 'In Stock'}
                                            {product.stock === 'low' && 'Low Stock'}
                                            {product.stock === 'out' && 'Out of Stock'}
                                        </div>
                                        <button className="add-to-cart-btn">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="shop-pagination">
                        <button className="page-btn prev" disabled={currentPage === 1}>
                            ← Previous
                        </button>

                        {[1, 2, 3, 4, 5].map(page => (
                            <button
                                key={page}
                                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <button className="page-btn next">
                            Next →
                        </button>

                        <span className="page-info">
                            Page {currentPage} of 5
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;