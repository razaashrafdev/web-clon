import React from 'react';
import './Hero.css';
import Stats from '../common/stats-display/ndex';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Summer Collection<br />2026
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
                        <Stats stats_num={"500+"} stats_label={"Brands"} />
                        <div className="stat-divider"></div>
                        <Stats stats_num={"10k+"} stats_label={"Products"} />
                        <div className="stat-divider"></div>
                        <Stats stats_num={"50K+"} stats_label={"Customers"} />
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-placeholder">
                        <div className="placeholder-content">
                            <div className="placeholder-text"><img src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;