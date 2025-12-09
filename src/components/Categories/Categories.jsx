import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import { FiArrowRight } from 'react-icons/fi';
import CategoriesCard from '../common/categories-card/categories-card';

const Categories = () => {
    const navigate = useNavigate();

    const categories = [
        { id: 1, name: "Men's Fashion", count: "120 items", color: "#4299e1" },
        { id: 2, name: "Women's Wear", count: "245 items", color: "#ed64a6" },
        { id: 3, name: "Accessories", count: "89 items", color: "#38b2ac" },
        { id: 4, name: "Footwear", count: "156 items", color: "#ed8936" },
        { id: 5, name: "Electronics", count: "78 items", color: "#9f7aea" },
        { id: 6, name: "Beauty & Health", count: "92 items", color: "#f56565" },
    ];

    const handleViewAllClick = () => {
        navigate('/categories');
    };

    return (
        <section className="categories">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Shop by Category</h2>
                    <p className="section-subtitle">Browse through our wide range of categories</p>
                    <button className="view-all" onClick={handleViewAllClick}>
                        View All <FiArrowRight />
                    </button>
                </div>

                <div className="categories-grid">
                    {categories.map(category => (
                        <CategoriesCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
