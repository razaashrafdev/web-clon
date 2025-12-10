import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './electronics.css';
import { categories } from '../../utils/categories';

const ElectronicsPage = () => {
    return (
        <div className="electronics-page">
            <div className="page-header head">
                <h1 className="page-title">Electronic Categories</h1>
                <p className="page-subtitle">Discover the latest in electronics, tailored for your needs.</p>
            </div>
            <section className="categories-grid">
                {categories.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default ElectronicsPage;
