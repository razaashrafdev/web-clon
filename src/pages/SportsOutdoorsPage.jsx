import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './sports-outdoors.css';
import { sportsOutdoorsData } from '../../utils/sportsoutdoorsdata';

const SportsOutdoorsPage = () => {
    return (
        <div className="sports-outdoors-page">
            <header className="category-header">
                <h2 className="category-title">Sports & Outdoors</h2>
            </header>
            <section className="categories-grid">
                {sportsOutdoorsData.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default SportsOutdoorsPage;
