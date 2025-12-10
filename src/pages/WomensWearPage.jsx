import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './womens-wear.css';
import { womensWearData } from '../../utils/womenweardata';

const WomensWearPage = () => {
    return (
        <div className="womens-wear-page">
            <header className="category-header">
                <h2 className="category-title">Women's Wear</h2>
            </header>
            <section className="categories-grid">
                {womensWearData.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default WomensWearPage;

