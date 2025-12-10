import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './home-living.css';
import { homeLivingData } from '../../utils/homelivingdata';


const HomeLivingPage = () => {
    return (
        <div className="home-living-page">
            <header className="category-header">
                <h2 className="category-title">Home & Living</h2>
            </header>
            <section className="categories-grid">
                {homeLivingData.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default HomeLivingPage;
