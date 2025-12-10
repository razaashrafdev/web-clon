import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './womens-wear.css';
import { categories } from '../../utils/categories';

const WomensWearPage = () => {
    return (
        <div className="womens-wear-page">
            <div className="page-header head">
                <h1 className="page-title">Women Wear Categories</h1>
                <p className="page-subtitle">Explore the latest in women's fashion, perfect for every occasion.</p>
            </div>
            <section className="categories-grid">
                {categories.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default WomensWearPage;

