import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/Shop.css';

const Shop = () => {
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
                <div className="container shop-layout-container">

                    <aside className="shop-sidebar">
                        <div className="shop-filters-container">
                            <div className="filter-group">
                                <h3>Categories</h3>
                                <div className="filter-options">
                                    {['Men', 'Women', 'Accessories', 'Footwear', 'Electronics', 'Beauty'].map(cat => (
                                        <label key={cat} className="filter-option">
                                            <input className="filter-checkbox" type="checkbox" />
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
                    </aside>

                    <main className="shop-main-content">
                        <ProductsPage />
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Shop;