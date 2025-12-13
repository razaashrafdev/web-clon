import React from 'react';
import { FiCalendar, FiUser, FiHeart, FiMessageSquare } from 'react-icons/fi';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Top Fashion Trends for 2024",
            excerpt: "Discover the must-have fashion trends that will dominate 2024.",
            author: "Sarah Johnson",
            date: "Dec 15, 2024",
            category: "Fashion",
            readTime: "5 min read",
            likes: 245,
            comments: 34,
            featured: true
        },
        {
            id: 2,
            title: "Sustainable Fashion: A Complete Guide",
            excerpt: "Learn how to build an eco-friendly wardrobe without compromising on style.",
            author: "Michael Chen",
            date: "Dec 10, 2024",
            category: "Sustainability",
            readTime: "8 min read",
            likes: 189,
            comments: 28
        },
        {
            id: 3,
            title: "Home Decor Ideas for Modern Living",
            excerpt: "Transform your space with these innovative home decor ideas.",
            author: "Emma Wilson",
            date: "Dec 5, 2024",
            category: "Lifestyle",
            readTime: "6 min read",
            likes: 312,
            comments: 42
        },
        {
            id: 4,
            title: "Tech Gadgets You Need in 2024",
            excerpt: "Essential tech gadgets that will make your life easier and more productive.",
            author: "David Park",
            date: "Dec 1, 2024",
            category: "Technology",
            readTime: "7 min read",
            likes: 156,
            comments: 19
        },
        {
            id: 5,
            title: "Winter Skincare Routine",
            excerpt: "Keep your skin glowing through the cold months with this routine.",
            author: "Lisa Rodriguez",
            date: "Nov 28, 2024",
            category: "Beauty",
            readTime: "4 min read",
            likes: 278,
            comments: 31
        },
        {
            id: 6,
            title: "Fitness Gear Review: Best of 2024",
            excerpt: "Our picks for the best fitness equipment this year.",
            author: "James Miller",
            date: "Nov 25, 2024",
            category: "Fitness",
            readTime: "9 min read",
            likes: 134,
            comments: 22
        },
    ];

    const categories = [
        "All Posts", "Fashion", "Lifestyle", "Technology", "Beauty", "Fitness", "Sustainability"
    ];

    return (
        <div className="blog-page">
            <div className="container">
                <div className="blog-header">
                    <h1 className="page-title">StyleHub Blog</h1>
                    <p className="page-subtitle">Insights, trends, and inspiration for your lifestyle</p>
                </div>

                <div className="blog-categories">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`category-btn ${index === 0 ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {blogPosts.filter(post => post.featured).map(featuredPost => (
                    <div key={featuredPost.id} className="featured-post">
                        <div className="featured-badge">FEATURED</div>
                        <div className="featured-content">
                            <div className="featured-text">
                                <span className="post-category">{featuredPost.category}</span>
                                <h2 className="post-title">{featuredPost.title}</h2>
                                <p className="post-excerpt">{featuredPost.excerpt}</p>
                                <div className="post-meta">
                                    <span><FiUser /> {featuredPost.author}</span>
                                    <span><FiCalendar /> {featuredPost.date}</span>
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <button className="read-more-btn">Read Full Article →</button>
                            </div>
                            <div className="featured-image">
                                Featured Image
                            </div>
                        </div>
                    </div>
                ))}

                <div className="blog-grid">
                    {blogPosts.filter(post => !post.featured).map(post => (
                        <div key={post.id} className="blog-card">
                            <div className="blog-card-image">
                                <span className="card-category">{post.category}</span>
                            </div>
                            <div className="blog-card-content">
                                <div className="card-meta">
                                    <span><FiCalendar /> {post.date}</span>
                                    <span><FiUser /> {post.author}</span>
                                </div>
                                <h3 className="card-title">{post.title}</h3>
                                <p className="card-excerpt">{post.excerpt}</p>
                                <div className="card-stats">
                                    <span className="stat-item">
                                        <FiHeart /> {post.likes}
                                    </span>
                                    <span className="stat-item">
                                        <FiMessageSquare /> {post.comments}
                                    </span>
                                    <span className="read-time">{post.readTime}</span>
                                </div>
                                <button className="read-btn">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="newsletter-section">
                    <h3>Subscribe to Our Newsletter</h3>
                    <p>Get weekly updates on new posts and exclusive content</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;