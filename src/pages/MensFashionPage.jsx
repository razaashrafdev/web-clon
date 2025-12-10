import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './mens-fashion.css';
import { categories } from '../../utils/categories';

const MensFashionPage = () => {
    return (
        <div className="mens-fashion-page">
            <div className="page-header head">
                <h1 className="page-title">Mens Feshion Categories</h1>
                <p className="page-subtitle">Discover the latest in men's fashion, tailored to your style.</p>
            </div>
            <section className="categories-grid">
                {categories.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default MensFashionPage;
