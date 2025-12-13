import React from 'react';
import { Link } from 'react-router-dom';
import '../../Categories/Categories.css';
import { FiArrowRight } from 'react-icons/fi';

const CategoriesCard = ({ category }) => {
    const targetLink = category.link || `/${category.id}`;

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
            
            <Link to={targetLink} className="category-btn">
                Explore <FiArrowRight />
            </Link>
        </div>
    );
};

export default CategoriesCard;