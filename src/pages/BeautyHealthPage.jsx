import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './beauty-health.css';
import { categories } from '../../utils/categories';


const BeautyHealthPage = () => {
    return (
        <div className="beauty-health-page">
            <div className="page-header head">
                <h1 className="page-title">Beauty And Health Categories</h1>
                <p className="page-subtitle">Discover the best in beauty and health, tailored for your needs.</p>
            </div>
            <section className="categories-grid">
                {categories.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default BeautyHealthPage;
