import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './sports-outdoors.css';

const sportsOutdoorsData = [
    {
        id: 1,
        imgurl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Yoga Mat',
        category: 'Fitness',
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.4,
        imageColor: '#c8e6c9',
    },
    {
        id: 2,
        imgurl: 'https://images.unsplash.com/photo-1605008585058-fdb3fb5fc5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vdW50YWluJTIwQmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Mountain Bicycle',
        category: 'Cycling',
        price: 349.99,
        originalPrice: 399.99,
        rating: 4.8,
        imageColor: '#e8f5e9',
    },
];

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
