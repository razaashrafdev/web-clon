import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/home-living.css';

const HomeLivingPage = () => {
    
    return (
        <div className="home-living-page">
            <div className="page-header head">
                <h1 className="page-title">Home and Living Products</h1>
                <p className="page-subtitle">Discover top products for your home, designed for comfort and style.</p>
            </div>
            <section className="categories-grid">
                <ProductsPage categorySlug="home-living"/>
            </section>
        </div>
    );
};

export default HomeLivingPage;
