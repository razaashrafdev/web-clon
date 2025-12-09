import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './electronics.css';
const electronicsData = [
    {
        id: 1,
        imgurl: 'https://plus.unsplash.com/premium_photo-1710962439403-a35fbc684b15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww',
        name: 'Wireless Headphones',
        category: 'Headphones',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.8,
        imageColor: '#e0f2f1',
    },
    {
        id: 2,
        imgurl: 'https://images.unsplash.com/photo-1565450115751-5f2e5de23d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0dCUyMHdhdGNofGVufDB8fDB8fHww',
        name: 'Watch',
        category: 'Wearables',
        price: 199.99,
        originalPrice: 229.99,
        rating: 4.5,
        imageColor: '#f0f4c3',
    },
];

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
