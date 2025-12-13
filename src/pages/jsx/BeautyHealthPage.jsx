import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/beauty-health.css';

const BeautyHealthPage = () => {
    
    return (
        <div className="beauty-health-page">
            <div className="page-header head">
                <h1 className="page-title">Beauty And Health Products</h1>
                <p className="page-subtitle">Discover the best in beauty and health, tailored for your needs.</p>
            </div>
            <section className="categories-grid">
                <ProductsPage categorySlug="beauty-health"/>
            </section>
        </div>
    );
};

export default BeautyHealthPage;
