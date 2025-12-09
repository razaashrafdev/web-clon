import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './mens-fashion.css';

const mensFashionData = [
    {
        id: 1,
        imgurl: 'https://media.istockphoto.com/id/1397016572/photo/confident-man-with-hands-in-pockets.webp?a=1&b=1&s=612x612&w=0&k=20&c=u6tPnDDvukjbrCzQ6cVT90239MGjr4u__ZKxzmU30SQ=',
        name: 'Casual Shirt',
        category: 'Shirts',
        price: 25.99,
        originalPrice: 35.99,
        rating: 4.2,
        imageColor: '#e0f7fa',
    },
    {
        id: 2,
        imgurl: 'https://images.unsplash.com/photo-1758214873619-32d1674ffd3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdyYXBoaWMlMjBULVNoaXJ0fGVufDB8fDB8fHww',
        name: 'Graphic T-Shirt',
        category: 'T-Shirts',
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.5,
        imageColor: '#fff3e0',
    },
];

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
