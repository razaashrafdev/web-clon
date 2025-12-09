import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import ProductsCard from '../common/productc-card/products-card';

const Products = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Classic White Watch",
            category: "Men",
            price: 29.99,
            originalPrice: 39.99,
            rating: 4.5,
            imageColor: "#e2e8f0",
            imgurl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 2,
            name: "Black Headphone",
            category: "Electronic",
            price: 59.99,
            originalPrice: 79.99,
            rating: 4.8,
            imageColor: "#fed7d7",
            imgurl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 3,
            name: "Running Sneakers",
            category: "Footwear",
            price: 89.99,
            originalPrice: 119.99,
            rating: 4.3,
            imageColor: "#c6f6d5",
            imgurl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 4,
            name: "Water Bottel",
            category: "Accessories",
            price: 129.99,
            originalPrice: 159.99,
            rating: 4.7,
            imageColor: "#e9d8fd",
            imgurl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 5,
            name: "Sunglasses",
            category: "Accessories",
            price: 199.99,
            originalPrice: 249.99,
            rating: 4.6,
            imageColor: "#bee3f8",
            imgurl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 6,
            name: "Perfume",
            category: "Accessories",
            price: 45.99,
            originalPrice: 59.99,
            rating: 4.4,
            imageColor: "#fed7e2",
            imgurl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 7,
            name: "Smart Watch",
            category: "Men",
            price: 149.99,
            originalPrice: 199.99,
            rating: 4.2,
            imageColor: "#e2e8f0",
            imgurl: 'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 8,
            name: "School Bag",
            category: "Accessories",
            price: 199.99,
            originalPrice: 299.99,
            rating: 4.9,
            imageColor: "#fed7d7",
            imgurl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
        },
    ];

    const filters = [
        { id: 'all', label: 'All Products' },
        { id: 'popular', label: 'Popular' },
        { id: 'new', label: 'New Arrivals' },
        { id: 'sale', label: 'On Sale' },
    ];

    const handleViewAllClick = () => {
        navigate('/categories');
    };

    return (
        <section className="products">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Featured Products</h2>
                        <p className="section-subtitle">Handpicked items just for you</p>
                    </div>

                    <div className="product-filters">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="products-grid">
                    {products.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="view-more">
                    <button className="btn-secondary" onClick={handleViewAllClick}>View All Products</button>
                </div>
            </div>
        </section>
    );
};

export default Products;
