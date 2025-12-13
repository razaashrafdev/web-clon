import React, { useState } from 'react';
import ProductsPage from '../../components/common/productc-card/products-card';
import '../css/NewArrivals.css';

const NewArrivals = () => {
    const [activeFilter, setActiveFilter] = useState('All New');

    const filters = ["All New", "This Week", "Just Launched", "Coming Soon"];

    return (
        <div className="new-arrivals-page fade-in">
            <div className="new-arrivals-header">
                <div className="container">
                    <h1 className="new-arrivals-title">New Arrivals</h1>
                    <p className="new-arrivals-subtitle">Be the first to get your hands on our latest products</p>
                    <div className="new-badge">Fresh Drops Every Week!</div>
                </div>
            </div>

            <div className="container">
                <div className="arrival-tabs">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`arrival-tab ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <main className="shop-main-content">
                    <ProductsPage arrivalFilter={activeFilter} />
                </main>

                <div className="coming-soon-section">
                    <h2 className="coming-soon-title">Coming Soon</h2>
                    <div className="coming-soon-list">
                        <div className="coming-soon-item">
                            <h3>Winter Collection 2025</h3>
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