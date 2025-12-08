import React from 'react';
import './Categories.css';
import { FiArrowRight } from 'react-icons/fi';

const Categories = () => {
    const categories = [
        { id: 1, name: "Men's Fashion", count: "120 items", color: "#4299e1" },
        { id: 2, name: "Women's Wear", count: "245 items", color: "#ed64a6" },
        { id: 3, name: "Accessories", count: "89 items", color: "#38b2ac" },
        { id: 4, name: "Footwear", count: "156 items", color: "#ed8936" },
        { id: 5, name: "Electronics", count: "78 items", color: "#9f7aea" },
        { id: 6, name: "Beauty & Health", count: "92 items", color: "#f56565" },
    ];

    return (
        <section className="categories">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Shop by Category</h2>
                    <p className="section-subtitle">Browse through our wide range of categories</p>
                    <a href="#" className="view-all">
                        View All <FiArrowRight />
                    </a>
                </div>

                <div className="categories-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <div
                                className="category-icon"
                                style={{ backgroundColor: `${category.color}20`, color: category.color }}
                            >
                                <div className="icon-placeholder">C</div>
                            </div>
                            <h3 className="category-name">{category.name}</h3>
                            <p className="category-count">{category.count}</p>
                            <button className="category-btn">
                                Explore <FiArrowRight />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;