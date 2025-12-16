import React from 'react';
import { Link } from 'react-router-dom';
import '../../Categories/Categories.css';

const CategoriesCard = ({ category }) => {
    const targetLink = category.link || `/${category.id}`;

    return (
        <Link to={targetLink} className="category-card">
                <div className="category-icon">
                    <img src={category.icon} alt="" />
                </div>
                <h3 className="category-name">{category.name}</h3>
        </Link>
    );
};

export default CategoriesCard;