import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './mens-fashion.css';
import { mensFashionData } from '../../utils/mensfeshiondata';

const MensFashionPage = () => {
    return (
        <div className="mens-fashion-page">
            <header className="category-header">
                <h2 className="category-title">Men's Fashion</h2>
            </header>
            <section className="categories-grid">
                {mensFashionData.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default MensFashionPage;
