import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './home-living.css';

const homeLivingData = [
    {
        id: 1,
        imgurl: 'https://images.unsplash.com/photo-1759722667832-48e555120458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29tZm9ydGFibGUlMjBTb2ZhfGVufDB8fDB8fHww',
        name: 'Comfortable Sofa',
        category: 'Furniture',
        price: 399.99,
        originalPrice: 499.99,
        rating: 4.3,
        imageColor: '#ffe0b2',
    },
    {
        id: 2,
        imgurl: 'https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGUlMjBsYW1wfGVufDB8fDB8fHww',
        name: 'Table Lamp',
        category: 'Lighting',
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.0,
        imageColor: '#fbe9e7',
    },
];

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
