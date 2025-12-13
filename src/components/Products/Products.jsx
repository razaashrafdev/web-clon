import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import { categories } from '../../../utils/categories'; 
import { ProductsCard } from '../common/productc-card/products-card';

const Products = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [displayProducts, setDisplayProducts] = useState([]);
    const navigate = useNavigate();

    const allProducts = categories.reduce((acc, category) => {
        const productsData = category.data || []; 
        
        const productsWithContext = productsData.map(product => ({
            ...product,
            uniqueId: `${category.id}-${product.id}`
        }));
        return [...acc, ...productsWithContext];
    }, []);

    const filters = [
        { id: 'all', label: 'All Products' },
        { id: 'popular', label: 'Popular' },
        { id: 'new', label: 'New Arrivals' },
        { id: 'sale', label: 'On Sale' },
    ];

    useEffect(() => {
        let filtered = [];

        if (!allProducts || allProducts.length === 0) return;

        if (activeFilter === 'all') {
            filtered = allProducts;
        } else if (activeFilter === 'popular') {
            filtered = allProducts.filter(product => product.rating >= 4.5);
        } else if (activeFilter === 'new') {
            filtered = allProducts.slice(0, 4);
        } else if (activeFilter === 'sale') {
            filtered = allProducts.filter(product => 
                product.originalPrice && (product.originalPrice > product.price)
            );
        }

        setDisplayProducts(filtered);
    }, [activeFilter, allProducts.length]);

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
                    {displayProducts.length > 0 ? (
                        displayProducts.map(product => (
                            <ProductsCard key={product.uniqueId} product={product} />
                        ))
                    ) : (
                        <div className="no-products">
                            <p>No products found for this filter.</p>
                        </div>
                    )}
                </div>

                <div className="view-more">
                    <button className="btn-secondary" onClick={handleViewAllClick}>View All Products</button>
                </div>
            </div>
        </section>
    );
};

export default Products;