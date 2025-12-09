import React from 'react';
import '../../Categories/Categories.css';
import { FiArrowRight } from 'react-icons/fi';

const CategoriesCard = ({ category }) => {
    return (
        <div className="category-card">
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
    );
};

export default CategoriesCard;
