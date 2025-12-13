import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/mens-fashion.css';

const MensFashionPage = () => {

    return (
        <div className="mens-fashion-page">
            <div className="page-header head">
                <h1 className="page-title">Mens Feshion Products</h1>
                <p className="page-subtitle">Discover the latest in men's fashion, tailored to your style.</p>
            </div>
            <section className="categories-grid">
                <ProductsPage categorySlug="mens-fashion" />
            </section>
        </div>
    );
};

export default MensFashionPage;
