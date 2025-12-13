import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/electronics.css';

const ElectronicsPage = () => {
    return (
        <div className="electronics-page">
            <div className="page-header head">
                <h1 className="page-title">Electronic Products</h1>
                <p className="page-subtitle">Discover the latest in electronics, tailored for your needs.</p>
            </div>
            <section className="categories-grid">
                <ProductsPage categorySlug="electronics"/>
            </section>
        </div>
    );
};

export default ElectronicsPage;
