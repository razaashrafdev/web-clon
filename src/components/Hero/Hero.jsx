import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Summer Collection<br />2024
                    </h1>
                    <p className="hero-subtitle">
                        Discover the latest trends in fashion with our exclusive collection.
                        Up to 50% off on selected items.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Shop Now</button>
                        <button className="btn-secondary">View Collection</button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Brands</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Products</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">50K+</span>
                            <span className="stat-label">Customers</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-placeholder">
                        <div className="placeholder-content">
                            <div className="placeholder-text">Hero Image</div>
                            <div className="placeholder-subtext">Summer Collection 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;