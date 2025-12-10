import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './home-living.css';
import { categories } from '../../utils/categories';


const HomeLivingPage = () => {
    return (
        <div className="home-living-page">
            <div className="page-header head">
                <h1 className="page-title">Home and Living Categories</h1>
                <p className="page-subtitle">Discover top products for your home, designed for comfort and style.</p>
            </div>
            <section className="categories-grid">
                {categories.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default HomeLivingPage;
