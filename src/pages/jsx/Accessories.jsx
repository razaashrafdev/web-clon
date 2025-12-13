import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/accessories.css';

const Accessories = () => {

    return (
        <div className="accessories-page">
            <div className="page-header head">
                <h1 className="page-title">Accessories Products</h1>
                <p className="page-subtitle">Discover the latest in fashion, tailored to your style.</p>
            </div>
            <section className="categories-grid">
                <ProductsPage categorySlug="accessories" />
            </section>
        </div>
    );
};

export default Accessories;
