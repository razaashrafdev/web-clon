import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../css/Categories.css';
import { categories } from '../../../utils/categories';

const Categories = () => {

    return (
        <div className="categories-page">
            <div className="container">
                <div className="page-header head cayegory-head">
                    <h1 className="page-title">All Categories</h1>
                    <p className="page-subtitle">Explore our wide range of product categories</p>
                </div>

                <div className="categories-list">
                    {categories.map(category => (
                        <div key={category.id} className="category-detail-card">
                            <div className='category-ico'><img src={category.icon} alt="" /></div>
                            <div className="category-header">
                                <h2 className="category-name">{category.name}</h2>
                            </div>

                            <p className="category-description">{category.description}</p>

                            <div className="category-actions">
                                <Link to={category.link}>
                                    <button className="btn-secondary">
                                        View All Products
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;