import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Men's Fashion",
            description: "Premium clothing and accessories for men",
            items: 245,
            subcategories: ["Shirts", "T-Shirts", "Pants", "Jackets", "Accessories"]
        },
        {
            id: 2,
            name: "Women's Wear",
            description: "Trendy fashion for women",
            items: 389,
            subcategories: ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories"]
        },
        {
            id: 3,
            name: "Electronics",
            description: "Latest gadgets and devices",
            items: 156,
            subcategories: ["Headphones", "Wearables", "Chargers", "Speakers", "Cases"]
        },
        {
            id: 4,
            name: "Home & Living",
            description: "Home decor and essentials",
            items: 178,
            subcategories: ["Decor", "Kitchen", "Bedding", "Furniture", "Lighting"]
        },
        {
            id: 5,
            name: "Beauty & Health",
            description: "Skincare and wellness products",
            items: 134,
            subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances", "Wellness"]
        },
        {
            id: 6,
            name: "Sports & Outdoors",
            description: "Gear for active lifestyle",
            items: 92,
            subcategories: ["Fitness", "Camping", "Cycling", "Swimming", "Team Sports"]
        },
    ];

    return (
        <div className="categories-page">
            <div className="container">
                <div className="page-header">
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
                                    {category.subcategories.map((sub, index) => (
                                        <span key={index} className="subcategory-tag">{sub}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="category-actions">
                                <button className="btn-primary">
                                    Shop Now <FiArrowRight />
                                </button>
                                <button className="btn-secondary">
                                    View All Products
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;