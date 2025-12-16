import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import { FiArrowRight } from 'react-icons/fi';
import CategoriesCard from '../common/categories-card/categories-card';
import { categories } from '../../../utils/categories';

const Categories = () => {
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/categories');
    };

    return (
        <section className="categories">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Shop by Category</h2>
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
