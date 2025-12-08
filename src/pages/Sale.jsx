import React from 'react';
import { FiClock } from 'react-icons/fi';

const Sale = () => {
    const saleProducts = [
        { id: 1, name: "Winter Jacket", originalPrice: "$199.99", salePrice: "$129.99", discount: "35%", timeLeft: "2 days" },
        { id: 2, name: "Designer Handbag", originalPrice: "$299.99", salePrice: "$199.99", discount: "50%", timeLeft: "1 day" },
        { id: 3, name: "Running Shoes", originalPrice: "$149.99", salePrice: "$89.99", discount: "40%", timeLeft: "3 days" },
        { id: 4, name: "Smartphone", originalPrice: "$899.99", salePrice: "$699.99", discount: "22%", timeLeft: "12 hours" },
        { id: 5, name: "TV 55\" 4K", originalPrice: "$599.99", salePrice: "$399.99", discount: "33%", timeLeft: "6 days" },
        { id: 6, name: "Coffee Machine", originalPrice: "$249.99", salePrice: "$179.99", discount: "28%", timeLeft: "4 days" },
        { id: 7, name: "Fitness Tracker", originalPrice: "$129.99", salePrice: "$79.99", discount: "38%", timeLeft: "1 day" },
        { id: 8, name: "Headphones", originalPrice: "$199.99", salePrice: "$119.99", discount: "40%", timeLeft: "8 hours" },
    ];

    const flashSales = [
        { id: 1, name: "Flash Sale #1", time: "12:00 PM", discount: "Up to 70%" },
        { id: 2, name: "Flash Sale #2", time: "6:00 PM", discount: "Up to 60%" },
        { id: 3, name: "Flash Sale #3", time: "9:00 PM", discount: "Up to 80%" },
    ];

    return (
        <div className="sale-page">
            <div className="container">
                <div className="sale-header">
                    <div className="sale-hero">
                        <h1 className="sale-title">MEGA SALE</h1>
                        <h2 className="sale-subtitle">Up to 70% OFF Everything!</h2>
                        <p className="sale-description">Limited time offer. Don't miss out on our biggest sale of the year.</p>
                        <div className="sale-timer">
                            <FiClock size={24} />
                            <span className="timer-text">Sale ends in: 2 days 14 hours 30 minutes</span>
                        </div>
                    </div>
                </div>

                <div className="flash-sales">
                    <h3 className="section-title">Flash Sales</h3>
                    <div className="flash-sale-cards">
                        {flashSales.map(sale => (
                            <div key={sale.id} className="flash-sale-card">
                                <div className="flash-sale-badge">FLASH</div>
                                <h4>{sale.name}</h4>
                                <p className="sale-time">{sale.time}</p>
                                <div className="sale-discount">{sale.discount}</div>
                                <button className="set-reminder">Set Reminder</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sale-products">
                    <div className="sale-header-bar">
                        <h3 className="section-title">All Sale Items</h3>
                        <div className="sort-options">
                            <select>
                                <option>Sort by: Biggest Discount</option>
                                <option>Sort by: Price Low to High</option>
                                <option>Sort by: Price High to Low</option>
                                <option>Sort by: Ending Soon</option>
                            </select>
                        </div>
                    </div>

                    <div className="sale-products-grid">
                        {saleProducts.map(product => (
                            <div key={product.id} className="sale-product-card">
                                <div className="discount-badge">{product.discount} OFF</div>
                                <div className="timer-badge">
                                    <FiClock size={14} />
                                    {product.timeLeft}
                                </div>
                                <div className="sale-product-image">
                                    Product Image
                                </div>
                                <div className="sale-product-info">
                                    <h4 className="product-name">{product.name}</h4>
                                    <div className="price-comparison">
                                        <span className="original-price">{product.originalPrice}</span>
                                        <span className="sale-price">{product.salePrice}</span>
                                    </div>
                                    <div className="savings">
                                        You save: ${(parseFloat(product.originalPrice.replace('$', '')) -
                                            parseFloat(product.salePrice.replace('$', ''))).toFixed(2)}
                                    </div>
                                    <button className="btn-primary sale-btn">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sale-banner">
                    <h3>Extra 10% OFF with code: MEGA10</h3>
                    <p>Apply at checkout. Valid until end of sale.</p>
                </div>
            </div>
        </div>
    );
};

export default Sale;