import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
    const footerLinks = {
        'Shop': ['All Products', 'New Arrivals', 'Best Sellers', 'Sale', 'Featured'],
        'Categories': ["Men's Fashion", "Women's Wear", 'Accessories', 'Footwear', 'Electronics'],
        'Company': ['About Us', 'Our Story', 'Careers', 'Press', 'Sustainability'],
        'Support': ['Help Center', 'Contact Us', 'Shipping Info', 'Returns', 'Size Guide'],
    };

    const socialLinks = [
        { icon: FiFacebook, label: 'Facebook' },
        { icon: FiTwitter, label: 'Twitter' },
        { icon: FiInstagram, label: 'Instagram' },
        { icon: FiYoutube, label: 'YouTube' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-text">StyleHub</span>
                        </div>
                        <p className="brand-description">
                            Your one-stop destination for the latest fashion trends and lifestyle products.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a key={index} href="#" className="social-link" aria-label={social.label}>
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="footer-column">
                            <h3 className="footer-heading">{category}</h3>
                            <ul className="footer-links">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="footer-column">
                        <h3 className="footer-heading">Contact Info</h3>
                        <ul className="contact-info">
                            <li>
                                <FiMapPin size={18} />
                                <span>123 Fashion Street, New York, NY 10001</span>
                            </li>
                            <li>
                                <FiPhone size={18} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <FiMail size={18} />
                                <span>support@stylehub.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="newsletter">
                        <h4 className="newsletter-title">Subscribe to Newsletter</h4>
                        <p className="newsletter-text">Get updates on new arrivals and special offers</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn-primary">Subscribe</button>
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © 2025-2026 StyleHub. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;