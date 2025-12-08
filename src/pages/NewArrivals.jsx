import React from 'react';
import { FiStar } from 'react-icons/fi';

const NewArrivals = () => {
    const newProducts = [
        { id: 1, name: "Limited Edition Sneakers", price: "$149.99", launchDate: "This Week", rating: 4.8 },
        { id: 2, name: "Smart Watch Series 5", price: "$299.99", launchDate: "Just Launched", rating: 4.9 },
        { id: 3, name: "Organic Cotton Hoodie", price: "$64.99", launchDate: "New Today", rating: 4.5 },
        { id: 4, name: "Wireless Gaming Mouse", price: "$79.99", launchDate: "This Week", rating: 4.7 },
        { id: 5, name: "Designer Sunglasses", price: "$129.99", launchDate: "Just Launched", rating: 4.6 },
        { id: 6, name: "Yoga Mat Pro", price: "$44.99", launchDate: "New Today", rating: 4.4 },
        { id: 7, name: "Portable Blender", price: "$39.99", launchDate: "This Week", rating: 4.3 },
        { id: 8, name: "Leather Backpack", price: "$159.99", launchDate: "Just Launched", rating: 4.9 },
    ];

    return (
        <div className="new-arrivals-page">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">New Arrivals</h1>
                    <p className="page-subtitle">Be the first to get your hands on our latest products</p>
                    <div className="new-badge">Fresh Drops Every Week!</div>
                </div>

                <div className="arrival-filters">
                    <button className="filter-btn active">All New</button>
                    <button className="filter-btn">This Week</button>
                    <button className="filter-btn">Just Launched</button>
                    <button className="filter-btn">Coming Soon</button>
                </div>

                <div className="new-products-grid">
                    {newProducts.map(product => (
                        <div key={product.id} className="new-product-card">
                            <div className="new-badge">{product.launchDate}</div>
                            <div className="product-image-new">
                                <div className="new-tag">NEW</div>
                                Product Image
                            </div>
                            <div className="product-info-new">
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            size={16}
                                            fill={i < Math.floor(product.rating) ? "#f6ad55" : "none"}
                                            color={i < Math.floor(product.rating) ? "#f6ad55" : "#e2e8f0"}
                                        />
                                    ))}
                                    <span className="rating-text">{product.rating}/5</span>
                                </div>
                                <div className="product-price-new">${product.price}</div>
                                <div className="product-actions">
                                    <button className="btn-primary">Add to Cart</button>
                                    <button className="btn-secondary">Quick View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="coming-soon">
                    <h2 className="section-title">Coming Soon</h2>
                    <div className="coming-soon-list">
                        <div className="coming-soon-item">
                            <h3>Winter Collection 2024</h3>
                            <p>Launching on December 15</p>
                            <button className="notify-btn">Notify Me</button>
                        </div>
                        <div className="coming-soon-item">
                            <h3>Smart Home Devices</h3>
                            <p>Launching on December 20</p>
                            <button className="notify-btn">Notify Me</button>
                        </div>
                        <div className="coming-soon-item">
                            <h3>Fitness Equipment</h3>
                            <p>Launching on December 25</p>
                            <button className="notify-btn">Notify Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;