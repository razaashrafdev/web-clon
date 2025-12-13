import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../css/Categories.css';
import { categories } from '../../../utils/categories';

const Categories = () => {

    return (
        <div className="categories-page">
            <div className="container">
                <div className="page-header head">
                    <h1 className="page-title">All Categories</h1>
                    <p className="page-subtitle">Explore our wide range of product categories</p>
                </div>

                <div className="categories-list">
                    {categories.map(category => (
                        <div key={category.id} className="category-detail-card">
                            <div className="category-header">
                                <h2 className="category-name">{category.name}</h2>
                                <span className="item-count">{category.items} items</span>
                            </div>

                            <p className="category-description">{category.description}</p>

                            <div className="subcategories">
                                <h4>Popular Subcategories</h4>
                                <div className="subcategory-list">
                                    {category.subcategories?.map((sub, index) => (
                                        <span key={index} className="subcategory-tag">{sub}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="category-actions">
                                <button className="btn-primary">
                                    Shop Now <FiArrowRight />
                                </button>
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