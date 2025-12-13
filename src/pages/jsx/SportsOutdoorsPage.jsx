import React from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/sports-outdoors.css';


const SportsOutdoorsPage = () => {
    return (
        <div className="sports-outdoors-page">
            <div className="page-header head">
                <h1 className="page-title">Sports and Outdoor Products</h1>
                <p className="page-subtitle">Explore premium sports and outdoor gear, best performance and adventure.</p>
            </div>
            <section className="categories-grid">
                <ProductsPage categorySlug="sports-outdoors"/>
            </section>
        </div>
    );
};

export default SportsOutdoorsPage;
