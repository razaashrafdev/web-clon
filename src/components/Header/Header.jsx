import React, { useState, useEffect } from 'react';
import './Header.css';
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
    const [isSearching, setIsSearching] = useState(false);
    const { cartItems, toggleCart } = useCart();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setSearchQuery(searchParams.get('search') || '');
    }, [searchParams]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setIsSearching(false);
            setDebouncedQuery('');
            return;
        }

        setIsSearching(true);

        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery);
            setIsSearching(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    useEffect(() => {
        if (debouncedQuery.trim()) {
            if (location.pathname !== '/shop') {
                navigate(`/shop/${encodeURIComponent(debouncedQuery)}`);
            } else {
                setSearchParams({ search: debouncedQuery });
            }
        } else {
            setSearchParams({});
        }
    }, [debouncedQuery]);

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return 'active';
        if (path !== '/' && location.pathname.startsWith(path)) return 'active';
        return '';
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/shop', label: 'Shop' },
        { path: '/categories', label: 'Categories' },
        { path: '/new-arrivals', label: 'New Arrivals' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">

                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                <div className="logo">
                    <Link to="/" className="logo-text">StyleHub</Link>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.path} className={`nav-item ${isActive(item.path)}`}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <form className="search-box" onSubmit={(e) => e.preventDefault()}>
                        <FiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        {isSearching && <span className="search-loader">Searching...</span>}
                    </form>

                    <button
                        className="icon-btn cart-btn"
                        onClick={() => toggleCart(true)}
                    >
                        <FiShoppingCart size={20} />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>

                    <button className="icon-btn user-btn">
                        <FiUser size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;