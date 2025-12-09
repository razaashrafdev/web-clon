import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './beauty-health.css';

const beautyHealthData = [
    {
        id: 1,
        imgurl: 'https://images.unsplash.com/photo-1763503836825-97f5450d155a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW50aS1BZ2luZyUyMENyZWFtfGVufDB8fDB8fHww',
        name: 'Anti-Aging Cream',
        category: 'Skincare',
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.6,
        imageColor: '#f3e5f5',
    },
    {
        id: 2,
        imgurl: 'https://plus.unsplash.com/premium_photo-1677172236687-dd440c298cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWF0dGUlMjBMaXBzdGlja3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Matte Lipstick',
        category: 'Makeup',
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.2,
        imageColor: '#fce4ec',
    },
];

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
