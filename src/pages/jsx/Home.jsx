import React from 'react';
import '../css/Home.css';
import Hero from '../../components/Hero/Hero';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div className="home-page fade-in">
            <Hero />
            <Categories />
            <Products />

            <div className="home-cta-section">
                <div className="container">
                    <h2 className="page-title">Ready to Upgrade Your Style?</h2>
                    <p className="page-subtitle">
                        Join thousands of satisfied customers who shop with us
                    </p>
                    <div className="home-cta-buttons">
                        <button className="btn-primary">Start Shopping</button>
                        <button className="btn-secondary">Browse Collections</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;