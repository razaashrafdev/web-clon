import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './sports-outdoors.css';
import { categories } from '../../utils/categories';

const SportsOutdoorsPage = () => {
    return (
        <div className="sports-outdoors-page">
            <div className="page-header head">
                <h1 className="page-title">Sports and Outdoor Catogeries</h1>
                <p className="page-subtitle">Explore premium sports and outdoor gear, best performance and adventure.</p>
            </div>
            <section className="categories-grid">
                {categories.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default SportsOutdoorsPage;
