import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './beauty-health.css';
import { beautyHealthData } from '../../utils/beautyhealthdata';


const BeautyHealthPage = () => {
    return (
        <div className="beauty-health-page">
            <header className="category-header">
                <h2 className="category-title">Beauty & Health</h2>
            </header>
            <section className="categories-grid">
                {beautyHealthData.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default BeautyHealthPage;
