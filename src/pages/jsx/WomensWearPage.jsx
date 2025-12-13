import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/womens-wear.css';

const WomensWearPage = () => {
    return (
        <div className="womens-wear-page">
            <div className="page-header head">
                <h1 className="page-title">Women Wear Products</h1>
                <p className="page-subtitle">Explore the latest in women's fashion, perfect for every occasion.</p>
            </div>
            <section className="categories-grid">
                <ProductsPage categorySlug="womens-wear"/>
            </section>
        </div>
    );
};

export default WomensWearPage;

