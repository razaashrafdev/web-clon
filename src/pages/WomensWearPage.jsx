import React from 'react';
import ProductsCard from '../components/common/productc-card/products-card';
import './womens-wear.css';

const womensWearData = [
    {
        id: 1,
        imgurl: 'https://images.unsplash.com/photo-1561625386-8688df36dd3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3VtbWVyJTIwSGF0fGVufDB8fDB8fHww',
        name: 'Summer Hat',
        category: 'Accessories',
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.5,
        imageColor: '#ffcc80',
    },
    {
        id: 2,
        imgurl: 'https://images.unsplash.com/photo-1732963574895-f4b6af2dec06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGF0aGVyJTIwYmFnfGVufDB8fDB8fHww',
        name: 'Leather Bag',
        category: 'Bags',
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.8,
        imageColor: '#c8e6c9',
    },
    {
        id: 3,
        imgurl: 'https://plus.unsplash.com/premium_photo-1674747086849-3ec94d641ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpbGslMjBza2FsZnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Silk Scarf',
        category: 'Accessories',
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.4,
        imageColor: '#ffebee',
    }
];

const WomensWearPage = () => {
    return (
        <div className="womens-wear-page">
            <header className="category-header">
                <h2 className="category-title">Women's Wear</h2>
            </header>
            <section className="categories-grid">
                {womensWearData.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default WomensWearPage;

