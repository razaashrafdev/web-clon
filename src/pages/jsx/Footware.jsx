import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/footware.css';

const Footware = () => {

    return (
        <div className="foootware-page">
            <div className="page-header head">
                <h1 className="page-title">Footware Products</h1>
                <p className="page-subtitle">Discover stylish, comfortable footwear.</p>
            </div>
            <section className="categories-grid">
                <ProductsPage categorySlug="footwear" />
            </section>
        </div>
    );
};

export default Footware;
