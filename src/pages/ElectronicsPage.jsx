import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './electronics.css';
import { electronicsData } from '../../utils/electronicpage';

const ElectronicsPage = () => {
    return (
        <div className="electronics-page">
            <header className="category-header">
                <h2 className="category-title">Electronics</h2>
            </header>
            <section className="categories-grid">
                {electronicsData.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default ElectronicsPage;
